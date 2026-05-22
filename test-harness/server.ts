/**
 * dlgo server lifecycle manager and chat API client for the test harness.
 * Mirrors the exact same HTTP calls and SSE parsing that Framora's llm.ts uses.
 */

import { ChildProcess, spawn } from 'child_process';
import http from 'http';
import { StringDecoder } from 'string_decoder';

const DLGO_GPU = 'C:\\projects\\dlgo\\dlgo-server-gpu.exe';
const DLGO_CPU = 'C:\\projects\\dlgo\\dlgo-server-cpu.exe';
const DEFAULT_PORT = 18999;
const HEALTH_POLL_MS = 500;
const HEALTH_TIMEOUT_MS = 90_000;

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface ChatResult {
  text: string;
  finishReason: string | null;
  elapsedMs: number;
  tokenCount: number;
}

let proc: ChildProcess | null = null;
let port = DEFAULT_PORT;

function httpGet(url: string, timeoutMs = 5000): Promise<string> {
  return new Promise((resolve, reject) => {
    const req = http.get(url, { timeout: timeoutMs }, (res) => {
      let body = '';
      res.on('data', (d: Buffer) => (body += d));
      res.on('end', () => resolve(body));
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
  });
}

function httpPost(url: string, data: unknown, timeoutMs = 120_000): Promise<string> {
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
        headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) },
      },
      (res) => {
        let buf = '';
        res.on('data', (d: Buffer) => (buf += d));
        res.on('end', () => resolve(buf));
      }
    );
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
    req.write(body);
    req.end();
  });
}

async function waitForHealth(): Promise<boolean> {
  const start = Date.now();
  while (Date.now() - start < HEALTH_TIMEOUT_MS) {
    try {
      const res = await httpGet(`http://127.0.0.1:${port}/health`, 2000);
      const j = JSON.parse(res);
      if (j.status === 'ok') return true;
    } catch { /* not ready */ }
    await new Promise((r) => setTimeout(r, HEALTH_POLL_MS));
  }
  return false;
}

export async function startServer(customPort?: number): Promise<void> {
  port = customPort ?? DEFAULT_PORT;

  // Check if a server is already running on that port
  try {
    const res = await httpGet(`http://127.0.0.1:${port}/health`, 2000);
    const j = JSON.parse(res);
    if (j.status === 'ok') {
      console.log(`  [server] Already running on port ${port}`);
      return;
    }
  } catch { /* not running */ }

  const bin = [DLGO_GPU, DLGO_CPU].find((p) => {
    try { return require('fs').existsSync(p); } catch { return false; }
  });
  if (!bin) throw new Error('dlgo binary not found');

  console.log(`  [server] Starting ${bin} on port ${port}...`);
  proc = spawn(bin, ['--host', '127.0.0.1', '--port', String(port), '--gpu'], {
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  proc.stdout?.on('data', (d: Buffer) => {
    const line = d.toString().trim();
    if (line) process.stdout.write(`  [dlgo] ${line}\n`);
  });
  proc.stderr?.on('data', (d: Buffer) => {
    const line = d.toString().trim();
    if (line) process.stderr.write(`  [dlgo!] ${line}\n`);
  });

  proc.on('exit', (code) => {
    console.log(`  [server] Process exited with code ${code}`);
    proc = null;
  });

  const ok = await waitForHealth();
  if (!ok) {
    shutdown();
    throw new Error('dlgo server did not become healthy');
  }
  console.log(`  [server] Healthy on port ${port}`);
}

export async function loadModel(modelPath: string): Promise<void> {
  const id = modelPath.split(/[/\\]/).pop()!.replace(/\.gguf$/i, '');
  console.log(`  [server] Loading model: ${id}...`);
  const start = Date.now();
  const res = await httpPost(`http://127.0.0.1:${port}/v1/models`, {
    path: modelPath,
    id,
    gpu: true,
    context: 0,
  });
  const j = JSON.parse(res);
  if (j.error) throw new Error(j.error.message ?? JSON.stringify(j.error));
  console.log(`  [server] Model loaded in ${((Date.now() - start) / 1000).toFixed(1)}s`);
}

/**
 * Send a chat completion request with SSE streaming, collect full response.
 * This mirrors exactly what Framora's llm.ts does.
 */
export function chat(
  messages: ChatMessage[],
  opts: { maxTokens?: number; temperature?: number } = {}
): Promise<ChatResult> {
  const maxTokens = opts.maxTokens ?? 512;
  const temperature = opts.temperature ?? 0.7;

  const body = JSON.stringify({
    messages,
    max_tokens: maxTokens,
    temperature,
    stream: true,
    enable_thinking: false,
  });

  return new Promise((resolve, reject) => {
    const start = Date.now();
    let text = '';
    let tokenCount = 0;
    let finishReason: string | null = null;

    const req = http.request(
      {
        hostname: '127.0.0.1',
        port,
        path: '/v1/chat/completions',
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) },
      },
      (res) => {
        const decoder = new StringDecoder('utf8');
        let buffer = '';

        const processLines = (lines: string[]): void => {
          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith('data: ')) continue;
            const payload = trimmed.slice(6);
            if (payload === '[DONE]') continue;
            try {
              const parsed = JSON.parse(payload);
              const delta = parsed.choices?.[0]?.delta?.content ?? '';
              const fr = parsed.choices?.[0]?.finish_reason;
              if (delta) {
                text += delta;
                tokenCount++;
              }
              if (fr) finishReason = fr;
            } catch { /* partial JSON */ }
          }
        };

        res.on('data', (raw: Buffer) => {
          buffer += decoder.write(raw);
          const lines = buffer.split('\n');
          buffer = lines.pop() ?? '';
          processLines(lines);
        });

        res.on('end', () => {
          const trailing = decoder.end();
          if (trailing) buffer += trailing;
          if (buffer.trim()) processLines(buffer.split('\n'));
          resolve({ text, finishReason, elapsedMs: Date.now() - start, tokenCount });
        });

        res.on('error', reject);
      }
    );
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

export function shutdown(): void {
  if (proc) {
    console.log('  [server] Shutting down...');
    proc.kill();
    proc = null;
  }
}
