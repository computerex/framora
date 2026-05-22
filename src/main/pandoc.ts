import { spawn } from 'child_process';
import { promises as fs } from 'fs';
import { existsSync } from 'fs';
import { join, dirname, basename, extname } from 'path';
import { tmpdir } from 'os';
import { app } from 'electron';

export type PandocFormat = 'docx' | 'epub' | 'latex' | 'rtf' | 'odt' | 'pdf';

export interface PandocResult {
  ok: boolean;
  outputPath?: string;
  error?: string;
}

let pandocPathCache: string | null | undefined;

/**
 * Locate the pandoc binary.  Searches PATH and a few common install locations.
 * Returns null if not found.  Result is cached for the app lifetime.
 */
export async function findPandoc(): Promise<string | null> {
  if (pandocPathCache !== undefined) return pandocPathCache;

  const candidates = ['pandoc'];
  if (process.platform === 'win32') {
    const pf = process.env['ProgramFiles'] ?? 'C:\\Program Files';
    const local = process.env['LOCALAPPDATA'] ?? '';
    candidates.push(
      join(pf, 'Pandoc', 'pandoc.exe'),
      local && join(local, 'Pandoc', 'pandoc.exe')
    );
  } else if (process.platform === 'darwin') {
    candidates.push(
      '/opt/homebrew/bin/pandoc',
      '/usr/local/bin/pandoc',
      '/usr/bin/pandoc'
    );
  } else {
    candidates.push('/usr/bin/pandoc', '/usr/local/bin/pandoc');
  }

  for (const c of candidates.filter(Boolean)) {
    try {
      const ok = await new Promise<boolean>((resolve) => {
        const child = spawn(c, ['--version'], { stdio: 'ignore', shell: false });
        child.on('error', () => resolve(false));
        child.on('exit', (code) => resolve(code === 0));
      });
      if (ok) {
        pandocPathCache = c;
        return c;
      }
    } catch {
      /* keep trying */
    }
  }
  pandocPathCache = null;
  return null;
}

/**
 * Convert markdown to the target format using pandoc.
 *
 * The CWD is set to the document directory so relative image paths resolve.
 */
export async function convertWithPandoc(
  markdown: string,
  outPath: string,
  format: PandocFormat,
  docPath: string | null
): Promise<PandocResult> {
  const pandoc = await findPandoc();
  if (!pandoc) {
    return {
      ok: false,
      error:
        'Pandoc not found. Install from https://pandoc.org/installing.html and try again.'
    };
  }

  // Write markdown to a temp file so relative resource paths work
  const tmpDir = join(tmpdir(), 'framora-pandoc');
  await fs.mkdir(tmpDir, { recursive: true });
  const tmpMd = join(tmpDir, `framora-${Date.now()}.md`);
  await fs.writeFile(tmpMd, markdown, 'utf8');

  const args: string[] = [
    tmpMd,
    '-f',
    'gfm+tex_math_dollars+yaml_metadata_block+raw_html+task_lists+fenced_divs',
    '-t',
    pandocTarget(format),
    '-o',
    outPath,
    '--standalone'
  ];

  // For PDF, use weasyprint or wkhtmltopdf if available; otherwise let pandoc choose
  if (format === 'pdf') {
    args.push('--pdf-engine=xelatex');
  }

  // Resource path so relative images load: include doc dir + tmp dir
  const resourcePath = [
    docPath ? dirname(docPath) : null,
    tmpDir,
    app.getPath('userData')
  ]
    .filter(Boolean)
    .join(process.platform === 'win32' ? ';' : ':');
  args.push(`--resource-path=${resourcePath}`);

  return await new Promise<PandocResult>((resolve) => {
    const cwd = docPath ? dirname(docPath) : tmpDir;
    const child = spawn(pandoc, args, { cwd, shell: false });
    let stderr = '';
    child.stderr?.on('data', (d) => {
      stderr += d.toString();
    });
    child.on('error', (e) => resolve({ ok: false, error: e.message }));
    child.on('exit', async (code) => {
      // Best-effort cleanup of the temp md
      void fs.unlink(tmpMd).catch(() => undefined);
      if (code === 0) {
        resolve({ ok: true, outputPath: outPath });
      } else {
        resolve({ ok: false, error: stderr || `Pandoc exited with code ${code}` });
      }
    });
  });
}

function pandocTarget(f: PandocFormat): string {
  switch (f) {
    case 'docx': return 'docx';
    case 'epub': return 'epub3';
    case 'latex': return 'latex';
    case 'rtf': return 'rtf';
    case 'odt': return 'odt';
    case 'pdf': return 'pdf';
  }
}

export function defaultExportName(docPath: string | null, format: PandocFormat): string {
  const base = docPath ? basename(docPath, extname(docPath)) : 'untitled';
  return `${base}.${format === 'latex' ? 'tex' : format}`;
}

/** Whether pandoc is currently installed (sync-friendly cached lookup). */
export function pandocStatus(): { installed: boolean; path: string | null } {
  if (pandocPathCache === undefined) {
    // Trigger an async lookup but report unknown for now.
    void findPandoc();
    return { installed: false, path: null };
  }
  return { installed: !!pandocPathCache, path: pandocPathCache };
}

export function pandocInstallURL(): string {
  return 'https://pandoc.org/installing.html';
}

/** Find any installed binary for pdfengine fallback (just informational). */
export function hasXelatex(): boolean {
  if (process.platform === 'win32') {
    const candidates = [
      'C:\\Program Files\\MiKTeX\\miktex\\bin\\x64\\xelatex.exe',
      'C:\\texlive\\2024\\bin\\windows\\xelatex.exe'
    ];
    return candidates.some((c) => existsSync(c));
  }
  return existsSync('/usr/bin/xelatex') || existsSync('/usr/local/bin/xelatex') || existsSync('/Library/TeX/texbin/xelatex');
}