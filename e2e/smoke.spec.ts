import { test, expect } from '@playwright/test';
import { launchFramora } from './helpers';
import { ElectronApplication, Page } from 'playwright';
import { join } from 'path';
import { promises as fs } from 'fs';
import { tmpdir } from 'os';

let app: ElectronApplication;
let win: Page;
let cleanupUserData: () => void = () => undefined;

const SAMPLE = join(__dirname, 'fixtures', 'sample.md');
let originalSample = '';

test.beforeAll(async () => {
  originalSample = await fs.readFile(SAMPLE, 'utf8');
  const launched = await launchFramora({ openFile: SAMPLE });
  app = launched.app;
  win = launched.window;
  cleanupUserData = launched.cleanup;
});

test.afterAll(async () => {
  await fs.writeFile(SAMPLE, originalSample, 'utf8').catch(() => undefined);
  await app?.close();
  cleanupUserData();
});

/** Send a menu:* IPC channel to the focused window's renderer. */
async function fireMenu(channel: string): Promise<void> {
  await app.evaluate(({ BrowserWindow }, ch) => {
    BrowserWindow.getAllWindows()[0]!.webContents.send(ch);
  }, `menu:${channel}`);
}

test('app boots and renders the workspace', async () => {
  await expect(win.locator('.framora-root')).toBeVisible();
  await expect(win.locator('.cm-host, .fr-preview')).toBeVisible();
});

test('window title contains the file name', async () => {
  await expect.poll(async () => await win.title()).toContain('sample.md');
  expect(await win.title()).toContain('Framora');
});

test('opened file content is loaded into the editor', async () => {
  const text = await win.locator('.cm-content').innerText();
  expect(text).toContain('Hello Framora');
  expect(text).toContain('Features');
});

test('switching to preview renders headings, code, math, alerts, mermaid', async () => {
  await fireMenu('toggle-preview');
  await expect(win.locator('.fr-preview')).toBeVisible();
  await expect(win.locator('.fr-rendered h1')).toContainText('Hello Framora');
  await expect(win.locator('.fr-rendered pre.hljs')).toBeVisible();
  await expect(win.locator('.fr-rendered table')).toBeVisible();
  await expect(win.locator('.fr-rendered blockquote.fr-alert-note')).toBeVisible();
  await expect(win.locator('.fr-rendered .katex').first()).toBeVisible();
  // Mermaid SVG render is async
  await expect(win.locator('.fr-rendered .fr-mermaid svg')).toBeVisible({ timeout: 20_000 });
});

test('source mode toggles back to hybrid', async () => {
  await fireMenu('toggle-preview');
  await expect(win.locator('.cm-host')).toBeVisible();
});

test('toggling sidebar shows/hides it', async () => {
  await expect(win.locator('.fr-sidebar')).toHaveCount(0);
  await fireMenu('toggle-sidebar');
  await expect(win.locator('.fr-sidebar')).toBeVisible();
  await fireMenu('toggle-sidebar');
  await expect(win.locator('.fr-sidebar')).toHaveCount(0);
});

test('outline tab lists headings from the doc', async () => {
  await fireMenu('toggle-sidebar');
  await win.locator('.fr-sidebar-tab', { hasText: 'Outline' }).click();
  await expect(win.locator('.fr-outline-item').first()).toContainText('Hello Framora');
  const count = await win.locator('.fr-outline-item').count();
  expect(count).toBeGreaterThan(3);
  await fireMenu('toggle-sidebar');
});

test('open quickly modal opens via menu and closes via Escape', async () => {
  await fireMenu('open-quickly');
  await expect(win.locator('.fr-open-quickly')).toBeVisible();
  await win.keyboard.press('Escape');
  await expect(win.locator('.fr-open-quickly')).toHaveCount(0);
});

test('preferences modal opens and applies a theme change', async () => {
  await fireMenu('preferences');
  await expect(win.locator('.fr-settings')).toBeVisible();
  await win.locator('.fr-settings select').first().selectOption('dark');
  await expect.poll(async () =>
    await win.evaluate(() => document.documentElement.dataset.theme)
  ).toBe('dark');
  await win.locator('.fr-settings-header .fr-icon-btn').click();
  await expect(win.locator('.fr-settings')).toHaveCount(0);

  // Restore
  await fireMenu('preferences');
  await win.locator('.fr-settings select').first().selectOption('auto');
  await win.locator('.fr-settings-header .fr-icon-btn').click();
});

test('saving the file via menu clears dirty state and writes to disk', async () => {
  // Append an edit using CodeMirror's API for determinism
  await win.evaluate(() => {
    // Click into the editor and use clipboard insertion through execCommand
    const ev = new InputEvent('beforeinput');
    void ev;
  });
  // Use a deterministic edit: focus + type a marker
  await win.locator('.cm-content').click();
  await win.keyboard.type('\nFRAMORA_E2E_MARKER');
  await expect.poll(async () => await win.title()).toContain('•');

  await fireMenu('save');
  await expect.poll(async () => await win.title(), { timeout: 5_000 }).not.toContain('•');

  const onDisk = await fs.readFile(SAMPLE, 'utf8');
  expect(onDisk).toContain('FRAMORA_E2E_MARKER');
});

test('export HTML writes a standalone HTML file', async () => {
  const outFile = join(tmpdir(), `framora-e2e-${Date.now()}.html`);
  // Stub the save dialog so the export proceeds non-interactively
  await app.evaluate(({ dialog }, target) => {
    (dialog as any)._origSave = (dialog as any)._origSave ?? dialog.showSaveDialog;
    dialog.showSaveDialog = (async () => ({ canceled: false, filePath: target })) as typeof dialog.showSaveDialog;
  }, outFile);

  await win.evaluate(async () => {
    await window.framora.exportHtml(
      '<!doctype html><html><body><h1>e2e exported</h1></body></html>',
      'sample.md'
    );
  });

  // Wait briefly for the file to appear
  await expect.poll(async () => {
    try {
      await fs.access(outFile);
      return true;
    } catch {
      return false;
    }
  }, { timeout: 5_000 }).toBe(true);

  const content = await fs.readFile(outFile, 'utf8');
  expect(content).toContain('e2e exported');
  await fs.unlink(outFile).catch(() => undefined);

  // Restore dialog
  await app.evaluate(({ dialog }) => {
    if ((dialog as any)._origSave) dialog.showSaveDialog = (dialog as any)._origSave;
  });
});