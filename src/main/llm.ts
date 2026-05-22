import { ChildProcess, spawn } from 'child_process';
import { join } from 'path';
import { app } from 'electron';
import { existsSync } from 'fs';
import http from 'http';
import { StringDecoder } from 'string_decoder';

export interface LlmStatus {
  state: 'stopped' | 'starting' | 'loading-model' | 'ready' | 'error';
  modelId?: string;
  error?: string;
  port?: number;
}

interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface ChatChunk {
  text: string;
  done: boolean;
}

const DEFAULT_PORT = 18932;
const HEALTH_POLL_MS = 400;
const HEALTH_TIMEOUT_MS = 60_000;

let serverProc: ChildProcess | null = null;
let status: LlmStatus = { state: 'stopped' };
let currentPort = DEFAULT_PORT;
let statusListeners: Array<(s: LlmStatus) => void> = [];
let activeRequest: http.ClientRequest | null = null;
let replacingRequest = false;

function setStatus(s: LlmStatus): void {
  status = s;
  for (const cb of statusListeners) cb(s);
}

export function onLlmStatus(cb: (s: LlmStatus) => void): () => void {
  statusListeners.push(cb);
  return () => {
    statusListeners = statusListeners.filter((c) => c !== cb);
  };
}

export function getLlmStatus(): LlmStatus {
  return status;
}

function findDlgoBinary(): { path: string; isStandalone: boolean } | null {
  // Prefer GPU builds, then fall back to CPU; standalone server binaries
  // accept flags directly, dlgo.exe needs the "server" subcommand.
  const candidates: Array<{ path: string; isStandalone: boolean }> = [
    // Packaged resources
    { path: join(app.isPackaged ? process.resourcesPath : '', 'dlgo-server-gpu.exe'), isStandalone: true },
    { path: join(app.isPackaged ? process.resourcesPath : '', 'dlgo-server-cpu.exe'), isStandalone: true },
    { path: join(app.isPackaged ? process.resourcesPath : '', 'dlgo.exe'), isStandalone: false },
    // Dev paths — GPU first
    { path: 'C:\\projects\\dlgo\\dlgo-server-gpu.exe', isStandalone: true },
    { path: 'C:\\projects\\dlgo\\dlgo-server-cpu.exe', isStandalone: true },
    { path: 'C:\\projects\\dlgo\\dlgo.exe', isStandalone: false }
  ];
  for (const c of candidates) {
    if (existsSync(c.path)) return c;
  }
  return null;
}

function httpGet(url: string, timeoutMs = 5000): Promise<string> {
  return new Promise((resolve, reject) => {
    const req = http.get(url, { timeout: timeoutMs }, (res) => {
      let body = '';
      res.on('data', (d) => (body += d));
      res.on('end', () => resolve(body));
    });
    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('timeout'));
    });
  });
}

function httpPost(url: string, data: unknown, timeoutMs = 60_000): Promise<string> {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify(data);
    const u = new URL(url);
    const req = http.request(
      {
        hostname: u.hostname,
        port: u.port,
        path: u.pathname,
        method: 'POST',
        timeout: timeoutMs,
        headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) }
      },
      (res) => {
        let buf = '';
        res.on('data', (d) => (buf += d));
        res.on('end', () => resolve(buf));
      }
    );
    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('timeout'));
    });
    req.write(body);
    req.end();
  });
}

async function waitForHealth(port: number): Promise<boolean> {
  const start = Date.now();
  while (Date.now() - start < HEALTH_TIMEOUT_MS) {
    try {
      const res = await httpGet(`http://127.0.0.1:${port}/health`, 2000);
      const j = JSON.parse(res);
      if (j.status === 'ok') return true;
    } catch {
      // not ready yet
    }
    await new Promise((r) => setTimeout(r, HEALTH_POLL_MS));
  }
  return false;
}

export async function startServer(port?: number): Promise<void> {
  if (serverProc && status.state !== 'stopped' && status.state !== 'error') return;

  const bin = findDlgoBinary();
  if (!bin) {
    setStatus({ state: 'error', error: 'dlgo binary not found' });
    return;
  }

  currentPort = port ?? DEFAULT_PORT;
  setStatus({ state: 'starting', port: currentPort });

  const baseArgs = ['--host', '127.0.0.1', '--port', String(currentPort)];
  const args = bin.isStandalone
    ? [...baseArgs, '--gpu']
    : ['server', ...baseArgs, '--gpu'];

  serverProc = spawn(bin.path, args, { stdio: ['ignore', 'pipe', 'pipe'] });

  serverProc.stdout?.on('data', (d) => {
    if (process.env.NODE_ENV === 'development') console.log('[dlgo]', d.toString().trim());
  });
  serverProc.stderr?.on('data', (d) => {
    if (process.env.NODE_ENV === 'development') console.error('[dlgo]', d.toString().trim());
  });

  serverProc.on('exit', (code) => {
    if (status.state !== 'stopped') {
      setStatus({ state: 'error', error: `dlgo exited with code ${code}` });
    }
    serverProc = null;
  });

  const ok = await waitForHealth(currentPort);
  if (!ok) {
    stopServer();
    setStatus({ state: 'error', error: 'dlgo server did not become healthy' });
    return;
  }

  setStatus({ state: 'ready', port: currentPort });
}

export function stopServer(): void {
  if (serverProc) {
    serverProc.kill();
    serverProc = null;
  }
  setStatus({ state: 'stopped' });
}

export async function loadModel(modelPath: string, modelId?: string): Promise<void> {
  if (status.state !== 'ready' && status.state !== 'loading-model') {
    throw new Error('Server not ready');
  }

  const id = modelId ?? modelPath.split(/[/\\]/).pop()!.replace(/\.gguf$/i, '');
  setStatus({ state: 'loading-model', port: currentPort, modelId: id });

  try {
    const res = await httpPost(`http://127.0.0.1:${currentPort}/v1/models`, {
      path: modelPath,
      id,
      gpu: true,
      context: 0
    }, 120_000);
    const j = JSON.parse(res);
    if (j.error) throw new Error(j.error.message ?? j.error);
    setStatus({ state: 'ready', port: currentPort, modelId: id });
  } catch (err) {
    setStatus({ state: 'error', error: String(err), port: currentPort });
    throw err;
  }
}

export async function listModels(): Promise<string[]> {
  if (!currentPort) return [];
  try {
    const res = await httpGet(`http://127.0.0.1:${currentPort}/v1/models`);
    const j = JSON.parse(res);
    return (j.data ?? []).map((m: { id: string }) => m.id);
  } catch {
    return [];
  }
}

export async function chatComplete(
  messages: ChatMessage[],
  onChunk: (chunk: ChatChunk) => void,
  maxTokens = 512,
  temperature = 0.7
): Promise<void> {
  if (status.state !== 'ready' || !status.modelId) {
    throw new Error('Model not loaded');
  }

  // Abort any in-flight request before starting a new one.
  // Set replacingRequest so the old request's error handler won't send
  // a stale done signal that would kill the new task's chunk listener.
  if (activeRequest) {
    replacingRequest = true;
    activeRequest.destroy();
    activeRequest = null;
  }

  const body = JSON.stringify({
    model: status.modelId,
    messages,
    max_tokens: maxTokens,
    temperature,
    stream: true,
    enable_thinking: false,
  });

  return new Promise((resolve, reject) => {
    const req = http.request(
      {
        hostname: '127.0.0.1',
        port: currentPort,
        path: '/v1/chat/completions',
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) }
      },
      (res) => {
        const decoder = new StringDecoder('utf8');
        let buffer = '';
        let sentDone = false;
        res.on('data', (raw: Buffer) => {
          buffer += decoder.write(raw);
          const lines = buffer.split('\n');
          buffer = lines.pop() ?? '';

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith('data: ')) continue;
            const payload = trimmed.slice(6);
            if (payload === '[DONE]') {
              sentDone = true;
              onChunk({ text: '', done: true });
              continue;
            }
            try {
              const parsed = JSON.parse(payload);
              const delta = parsed.choices?.[0]?.delta?.content ?? '';
              const finish = parsed.choices?.[0]?.finish_reason;
              if (delta) onChunk({ text: delta, done: false });
              if (finish) {
                sentDone = true;
                onChunk({ text: '', done: true });
              }
            } catch {
              // partial JSON, skip
            }
          }
        });
        res.on('end', () => {
          const trailing = decoder.end();
          if (trailing) buffer += trailing;

          // Flush any remaining buffered SSE lines
          if (buffer.trim()) {
            for (const line of buffer.split('\n')) {
              const trimmed = line.trim();
              if (!trimmed.startsWith('data: ')) continue;
              const payload = trimmed.slice(6);
              if (payload === '[DONE]') {
                sentDone = true;
                onChunk({ text: '', done: true });
                continue;
              }
              try {
                const parsed = JSON.parse(payload);
                const delta = parsed.choices?.[0]?.delta?.content ?? '';
                const finish = parsed.choices?.[0]?.finish_reason;
                if (delta) onChunk({ text: delta, done: false });
                if (finish) {
                  sentDone = true;
                  onChunk({ text: '', done: true });
                }
              } catch {
                // partial JSON, skip
              }
            }
          }

          // Always guarantee a done signal so the UI never gets stuck
          if (!sentDone) {
            onChunk({ text: '', done: true });
          }

          activeRequest = null;
          resolve();
        });
        res.on('error', (err) => {
          activeRequest = null;
          reject(err);
        });
      }
    );
    activeRequest = req;
    req.on('error', (err) => {
      activeRequest = null;
      if ((err as NodeJS.ErrnoException).code === 'ECONNRESET') {
        // If we destroyed this request to replace it with a new one,
        // don't send a done signal — it would kill the new task's listener.
        if (replacingRequest) {
          replacingRequest = false;
          resolve();
          return;
        }
        // User-initiated abort via abortChat() — send done to clean up UI
        onChunk({ text: '', done: true });
        resolve();
        return;
      }
      reject(err);
    });
    req.write(body);
    req.end();
  });
}

export function abortChat(): void {
  if (activeRequest) {
    activeRequest.destroy();
    activeRequest = null;
  }
}

export function ensureCleanup(): void {
  stopServer();
}
