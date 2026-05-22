import { app, BrowserWindow, ipcMain, dialog, shell, Menu } from 'electron';
import { join, dirname, basename, extname } from 'path';
import { promises as fs, existsSync } from 'fs';
import { buildMenu } from './menu';
import { addRecent, getRecents, clearRecents } from './recentFiles';
import { listFolder } from './folder';
import { getSettings, updateSettings, resetSettings, Settings } from './settings';
import { findPandoc, convertWithPandoc, defaultExportName, pandocInstallURL, PandocFormat } from './pandoc';
import { initAutoUpdater, checkForUpdates, downloadUpdate, installUpdate, getUpdateStatus } from './updater';
import {
  startServer as llmStart,
  stopServer as llmStop,
  loadModel as llmLoad,
  listModels as llmListModels,
  chatComplete,
  abortChat,
  getLlmStatus,
  onLlmStatus,
  ensureCleanup
} from './llm';

const isDev = !app.isPackaged;

// Honor --user-data-dir=<path> from argv (used by E2E tests to isolate state).
// Must run before app.whenReady().
{
  const arg = process.argv.find((a) => a.startsWith('--user-data-dir='));
  if (arg) {
    const dir = arg.slice('--user-data-dir='.length);
    if (dir) app.setPath('userData', dir);
  }
}

// Track files queued for opening (from CLI args / file association / macOS open-file)
const pendingFiles: string[] = [];

// Collect file path from process arguments (Windows/Linux file association)
function collectFileArgs(argv: string[]): string[] {
  return argv.slice(1).filter((a) => !a.startsWith('-') && /\.(md|markdown|mdown|mkd|mkdn|qmd)$/i.test(a));
}

pendingFiles.push(...collectFileArgs(process.argv));

// macOS file association
app.on('open-file', (event, path) => {
  event.preventDefault();
  if (app.isReady()) {
    void openFileInWindow(path);
  } else {
    pendingFiles.push(path);
  }
});

// Single instance — second launches forward their argv to the first instance
const gotLock = app.requestSingleInstanceLock();
if (!gotLock) {
  app.quit();
} else {
  app.on('second-instance', (_e, argv) => {
    const files = collectFileArgs(argv);
    if (files.length === 0) {
      // No file — just focus an existing window or create one
      const win = BrowserWindow.getAllWindows()[0];
      if (win) {
        if (win.isMinimized()) win.restore();
        win.focus();
      } else {
        void createWindow();
      }
      return;
    }
    for (const f of files) void openFileInWindow(f);
  });
}

// Map of webContents id → file path queued for delivery on first request
const pendingForWindow = new Map<number, string>();

async function createWindow(filePath?: string): Promise<BrowserWindow> {
  const win = new BrowserWindow({
    width: 1100,
    height: 760,
    minWidth: 600,
    minHeight: 400,
    show: false,
    titleBarStyle: process.platform === 'darwin' ? 'hiddenInset' : 'default',
    backgroundColor: '#ffffff',
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      contextIsolation: true,
      nodeIntegration: false,
      webSecurity: false
    }
  });

  win.once('ready-to-show', () => win.show());

  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  // Load renderer
  if (isDev && process.env['ELECTRON_RENDERER_URL']) {
    await win.loadURL(process.env['ELECTRON_RENDERER_URL']);
  } else {
    await win.loadFile(join(__dirname, '../renderer/index.html'));
  }

  // Queue the file so the renderer can pull it on mount.  This avoids a race
  // where send() runs before the React listener is registered.
  if (filePath) {
    pendingForWindow.set(win.webContents.id, filePath);
  }

  return win;
}

async function openFileInWindow(filePath: string): Promise<void> {
  // Reuse first window if it's empty, else open a new one
  const existing = BrowserWindow.getAllWindows()[0];
  if (existing) {
    // For an already-mounted window, fire-and-forget the IPC; the React
    // listener is guaranteed to be in place.
    await sendFileToWindow(existing, filePath);
    if (existing.isMinimized()) existing.restore();
    existing.focus();
  } else {
    await createWindow(filePath);
  }
}

async function sendFileToWindow(win: BrowserWindow, filePath: string): Promise<void> {
  try {
    const content = await fs.readFile(filePath, 'utf8');
    addRecent(filePath);
    win.webContents.send('file:opened', { path: filePath, content });
    app.addRecentDocument(filePath);
  } catch (err) {
    dialog.showErrorBox('Cannot open file', String(err));
  }
}

// ---------- IPC ----------

ipcMain.handle('file:open-dialog', async (e) => {
  const win = BrowserWindow.fromWebContents(e.sender) ?? undefined;
  const result = await dialog.showOpenDialog(win!, {
    title: 'Open Markdown',
    properties: ['openFile'],
    filters: [
      { name: 'Markdown', extensions: ['md', 'markdown', 'mdown', 'mkd', 'mkdn', 'qmd'] },
      { name: 'All Files', extensions: ['*'] }
    ]
  });
  if (result.canceled || result.filePaths.length === 0) return null;
  const filePath = result.filePaths[0]!;
  const content = await fs.readFile(filePath, 'utf8');
  addRecent(filePath);
  app.addRecentDocument(filePath);
  return { path: filePath, content };
});

ipcMain.handle('file:save', async (_e, { path, content }: { path: string; content: string }) => {
  await fs.writeFile(path, content, 'utf8');
  addRecent(path);
  return { ok: true };
});

ipcMain.handle('file:save-as', async (e, { content }: { content: string }) => {
  const win = BrowserWindow.fromWebContents(e.sender) ?? undefined;
  const result = await dialog.showSaveDialog(win!, {
    title: 'Save Markdown',
    defaultPath: 'untitled.md',
    filters: [{ name: 'Markdown', extensions: ['md'] }]
  });
  if (result.canceled || !result.filePath) return null;
  await fs.writeFile(result.filePath, content, 'utf8');
  addRecent(result.filePath);
  app.addRecentDocument(result.filePath);
  return { path: result.filePath };
});

ipcMain.handle('recents:get', () => getRecents());
ipcMain.handle('recents:clear', () => {
  clearRecents();
  return true;
});

ipcMain.handle('folder:open-dialog', async (e) => {
  const win = BrowserWindow.fromWebContents(e.sender) ?? undefined;
  const result = await dialog.showOpenDialog(win!, {
    title: 'Open Folder',
    properties: ['openDirectory']
  });
  if (result.canceled || result.filePaths.length === 0) return null;
  const folderPath = result.filePaths[0]!;
  const tree = await listFolder(folderPath);
  return { path: folderPath, tree };
});

ipcMain.handle('folder:list', async (_e, folderPath: string) => {
  return listFolder(folderPath);
});

ipcMain.handle('file:read', async (_e, filePath: string) => {
  const content = await fs.readFile(filePath, 'utf8');
  addRecent(filePath);
  app.addRecentDocument(filePath);
  return { path: filePath, content };
});

ipcMain.handle(
  'folder:search',
  async (
    _e,
    { folder, query, regex, caseSensitive, maxResults }: {
      folder: string;
      query: string;
      regex: boolean;
      caseSensitive: boolean;
      maxResults: number;
    }
  ) => {
    if (!query) return [];
    let re: RegExp;
    try {
      re = regex
        ? new RegExp(query, caseSensitive ? 'g' : 'gi')
        : new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), caseSensitive ? 'g' : 'gi');
    } catch {
      return [];
    }
    const results: Array<{ path: string; line: number; col: number; preview: string }> = [];
    await searchFolder(folder, re, results, maxResults);
    return results;
  }
);

async function searchFolder(
  dir: string,
  re: RegExp,
  out: Array<{ path: string; line: number; col: number; preview: string }>,
  max: number
): Promise<void> {
  const tree = await listFolder(dir);
  const queue: typeof tree[] = [tree];
  const files: string[] = [];
  while (queue.length) {
    const node = queue.shift()!;
    if (node.isDirectory) {
      for (const c of node.children ?? []) queue.push(c);
    } else {
      files.push(node.path);
    }
  }
  for (const f of files) {
    if (out.length >= max) return;
    let txt: string;
    try {
      txt = await fs.readFile(f, 'utf8');
    } catch {
      continue;
    }
    const lines = txt.split('\n');
    for (let i = 0; i < lines.length; i++) {
      re.lastIndex = 0;
      const m = re.exec(lines[i]!);
      if (m) {
        out.push({
          path: f,
          line: i + 1,
          col: m.index + 1,
          preview: lines[i]!.slice(Math.max(0, m.index - 30), m.index + 80)
        });
        if (out.length >= max) return;
      }
    }
  }
}

ipcMain.handle('window:set-title', (e, title: string) => {
  const win = BrowserWindow.fromWebContents(e.sender);
  win?.setTitle(title);
});

ipcMain.handle('app:open-external', (_e, url: string) => shell.openExternal(url));

// Renderer pulls any file that was queued for this window at creation time.
ipcMain.handle('window:pull-pending-file', async (e) => {
  const id = e.sender.id;
  const path = pendingForWindow.get(id);
  if (!path) return null;
  pendingForWindow.delete(id);
  try {
    const content = await fs.readFile(path, 'utf8');
    addRecent(path);
    app.addRecentDocument(path);
    return { path, content };
  } catch {
    return null;
  }
});

// ---------- Image saving (drag-drop + paste) ----------

ipcMain.handle(
  'image:save',
  async (
    _e,
    {
      docPath,
      filename,
      bytes
    }: { docPath: string | null; filename: string; bytes: ArrayBuffer | Uint8Array }
  ) => {
    // Save next to the document in an "assets" folder, or to userData if no doc
    const buffer = Buffer.from(bytes as ArrayBuffer);
    let dir: string;
    let rel: string;
    if (docPath) {
      const docDir = dirname(docPath);
      dir = join(docDir, 'assets');
      const name = uniqueName(dir, filename);
      rel = `assets/${name}`;
    } else {
      dir = join(app.getPath('userData'), 'images');
      rel = join(dir, uniqueName(dir, filename));
    }
    await fs.mkdir(dir, { recursive: true });
    const target = join(dir, basename(rel));
    await fs.writeFile(target, buffer);
    return { absolutePath: target, relativePath: rel };
  }
);

function uniqueName(dir: string, filename: string): string {
  let candidate = filename;
  let i = 1;
  const ext = extname(filename);
  const base = filename.slice(0, filename.length - ext.length);
  while (existsSync(join(dir, candidate))) {
    candidate = `${base}-${i}${ext}`;
    i++;
  }
  return candidate;
}

// ---------- Pandoc exports ----------

ipcMain.handle('pandoc:detect', async () => {
  const path = await findPandoc();
  return { installed: !!path, path };
});

ipcMain.handle(
  'pandoc:export',
  async (
    e,
    { markdown, format, docPath }: { markdown: string; format: PandocFormat; docPath: string | null }
  ) => {
    const win = BrowserWindow.fromWebContents(e.sender);
    if (!win) return { ok: false, error: 'No window' };

    const path = await findPandoc();
    if (!path) {
      const choice = await dialog.showMessageBox(win, {
        type: 'warning',
        message: 'Pandoc is not installed',
        detail:
          'Framora uses Pandoc for advanced exports (docx, epub, latex, rtf, odt). Install Pandoc and try again.',
        buttons: ['Open Install Page', 'Cancel'],
        defaultId: 0,
        cancelId: 1
      });
      if (choice.response === 0) {
        await shell.openExternal(pandocInstallURL());
      }
      return { ok: false, error: 'Pandoc not installed' };
    }

    const result = await dialog.showSaveDialog(win, {
      title: `Export as ${format.toUpperCase()}`,
      defaultPath: defaultExportName(docPath, format),
      filters: [{ name: format.toUpperCase(), extensions: [format === 'latex' ? 'tex' : format] }]
    });
    if (result.canceled || !result.filePath) return { ok: false, error: 'cancelled' };

    return convertWithPandoc(markdown, result.filePath, format, docPath);
  }
);

// ---------- Print ----------

ipcMain.handle('window:print', async (e) => {
  const win = BrowserWindow.fromWebContents(e.sender);
  if (!win) return { ok: false };
  await new Promise<void>((resolve) => {
    win.webContents.print({ silent: false, printBackground: true }, () => resolve());
  });
  return { ok: true };
});

// ---------- Settings ----------

ipcMain.handle('settings:get', () => getSettings());
ipcMain.handle('settings:update', (_e, patch: Partial<Settings>) => updateSettings(patch));
ipcMain.handle('settings:reset', () => resetSettings());

// ---------- Export ----------

ipcMain.handle('export:html', async (e, { html, suggestedName }: { html: string; suggestedName: string }) => {
  const win = BrowserWindow.fromWebContents(e.sender) ?? undefined;
  const result = await dialog.showSaveDialog(win!, {
    title: 'Export HTML',
    defaultPath: suggestedName.replace(/\.\w+$/, '') + '.html',
    filters: [{ name: 'HTML', extensions: ['html'] }]
  });
  if (result.canceled || !result.filePath) return null;
  await fs.writeFile(result.filePath, html, 'utf8');
  return { path: result.filePath };
});

ipcMain.handle('export:pdf', async (e, { suggestedName, html }: { suggestedName: string; html: string }) => {
  const win = BrowserWindow.fromWebContents(e.sender);
  if (!win) return null;
  const result = await dialog.showSaveDialog(win, {
    title: 'Export PDF',
    defaultPath: suggestedName.replace(/\.\w+$/, '') + '.pdf',
    filters: [{ name: 'PDF', extensions: ['pdf'] }]
  });
  if (result.canceled || !result.filePath) return null;

  const printWin = new BrowserWindow({
    show: false,
    width: 800,
    height: 600,
    webPreferences: { offscreen: true }
  });
  await printWin.loadURL('data:text/html;charset=utf-8,' + encodeURIComponent(html));
  await new Promise((r) => setTimeout(r, 300));

  const data = await printWin.webContents.printToPDF({
    printBackground: true,
    pageSize: 'A4',
    margins: { top: 0.6, bottom: 0.6, left: 0.6, right: 0.6 }
  });
  printWin.destroy();
  await fs.writeFile(result.filePath, data);
  return { path: result.filePath };
});

// ---------- LLM (dlgo integration) ----------

ipcMain.handle('llm:status', () => getLlmStatus());

ipcMain.handle('llm:start', async () => {
  await llmStart();
  return getLlmStatus();
});

ipcMain.handle('llm:stop', () => {
  llmStop();
  return getLlmStatus();
});

ipcMain.handle('llm:load-model', async (_e, modelPath: string) => {
  await llmLoad(modelPath);
  return getLlmStatus();
});

ipcMain.handle('llm:list-models', () => llmListModels());

ipcMain.handle('llm:abort', () => {
  abortChat();
  return { ok: true };
});

ipcMain.handle(
  'llm:chat',
  async (
    e,
    {
      messages,
      maxTokens,
      temperature
    }: {
      messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>;
      maxTokens?: number;
      temperature?: number;
    }
  ) => {
    const sender = e.sender;
    try {
      await chatComplete(
        messages,
        (chunk) => {
          if (!sender.isDestroyed()) sender.send('llm:chunk', chunk);
        },
        maxTokens,
        temperature
      );
      return { ok: true };
    } catch (err) {
      return { ok: false, error: String(err) };
    }
  }
);

ipcMain.handle('llm:scan-models', async (_e, dir: string) => {
  const entries: Array<{ name: string; path: string; sizeMB: number }> = [];
  try {
    const items = await fs.readdir(dir);
    for (const name of items) {
      if (!name.endsWith('.gguf')) continue;
      const full = join(dir, name);
      const stat = await fs.stat(full);
      entries.push({ name, path: full, sizeMB: Math.round(stat.size / 1048576) });
    }
  } catch {
    // directory not accessible
  }
  return entries;
});

// ---------- Templates ----------

function getTemplatesDir(): string {
  if (isDev) {
    return join(__dirname, '../../templates');
  }
  return join(process.resourcesPath, 'templates');
}

ipcMain.handle('templates:list', async () => {
  const tplDir = getTemplatesDir();
  const indexPath = join(tplDir, 'index.json');
  const raw = await fs.readFile(indexPath, 'utf-8');
  return JSON.parse(raw);
});

ipcMain.handle('templates:read', async (_e, file: string) => {
  const tplDir = getTemplatesDir();
  const safe = file.replace(/\.\./g, '');
  const fullPath = join(tplDir, safe);
  return fs.readFile(fullPath, 'utf-8');
});

// ---------- Auto-updater ----------

ipcMain.handle('updater:status', () => getUpdateStatus());
ipcMain.handle('updater:check', () => { checkForUpdates(); return true; });
ipcMain.handle('updater:download', () => { downloadUpdate(); return true; });
ipcMain.handle('updater:install', () => { installUpdate(); return true; });

// ---------- App lifecycle ----------

app.whenReady().then(async () => {
  if (!isDev) {
    initAutoUpdater();
    setTimeout(checkForUpdates, 5000);
  }

  onLlmStatus((s) => {
    for (const win of BrowserWindow.getAllWindows()) {
      if (!win.webContents.isDestroyed()) win.webContents.send('llm:status', s);
    }
  });

  const send = (ch: string): void => {
    BrowserWindow.getFocusedWindow()?.webContents.send(ch);
  };
  Menu.setApplicationMenu(
    buildMenu({
      onNew: async () => { await createWindow(); },
      onOpen: () => send('menu:open'),
      onOpenFolder: () => send('menu:open-folder'),
      onOpenQuickly: () => send('menu:open-quickly'),
      onSave: () => send('menu:save'),
      onSaveAs: () => send('menu:save-as'),
      onExportHtml: () => send('menu:export-html'),
      onExportPdf: () => send('menu:export-pdf'),
      onExportDocx: () => send('menu:export-docx'),
      onExportEpub: () => send('menu:export-epub'),
      onExportLatex: () => send('menu:export-latex'),
      onExportRtf: () => send('menu:export-rtf'),
      onExportOdt: () => send('menu:export-odt'),
      onPrint: () => send('menu:print'),
      onFind: () => send('menu:find'),
      onFindInFiles: () => send('menu:find-in-files'),
      onCopyAsHtml: () => send('menu:copy-as-html'),
      onCopyAsPlain: () => send('menu:copy-as-plain'),
      onPreferences: () => send('menu:preferences'),
      onToggleSource: () => send('menu:toggle-source'),
      onTogglePreview: () => send('menu:toggle-preview'),
      onToggleSplit: () => send('menu:toggle-split'),
      onToggleFocus: () => send('menu:toggle-focus'),
      onToggleSidebar: () => send('menu:toggle-sidebar'),
      onToggleAi: () => send('menu:toggle-ai'),
      onNewFromTemplate: () => send('menu:new-from-template')
    })
  );

  if (pendingFiles.length > 0) {
    await createWindow(pendingFiles.shift());
    for (const f of pendingFiles) await openFileInWindow(f);
  } else {
    await createWindow();
  }

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) void createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('will-quit', () => {
  ensureCleanup();
});