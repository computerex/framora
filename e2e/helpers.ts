import { _electron as electron, ElectronApplication, Page } from 'playwright';
import { join } from 'path';
import { mkdtempSync, rmSync } from 'fs';
import { tmpdir } from 'os';

const ROOT = join(__dirname, '..');

/**
 * Launch the built Framora Electron app with an isolated userData dir so each
 * test run starts from default settings.
 */
export async function launchFramora(opts: { openFile?: string } = {}): Promise<{
  app: ElectronApplication;
  window: Page;
  cleanup: () => void;
}> {
  const userDataDir = mkdtempSync(join(tmpdir(), 'framora-e2e-'));

  const args: string[] = [
    join(ROOT, 'out/main/index.js'),
    `--user-data-dir=${userDataDir}`
  ];
  if (opts.openFile) args.push(opts.openFile);

  const app = await electron.launch({
    args,
    cwd: ROOT,
    env: { ...process.env, NODE_ENV: 'test' }
  });

  const window = await app.firstWindow();
  await window.waitForLoadState('domcontentloaded');
  await window.waitForSelector('.framora-root, .fr-welcome', { timeout: 15_000 });

  return {
    app,
    window,
    cleanup: () => {
      try { rmSync(userDataDir, { recursive: true, force: true }); } catch { /* ignore */ }
    }
  };
}