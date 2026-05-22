import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export interface OpenedFile {
  path: string;
  content: string;
}

export interface FolderEntry {
  name: string;
  path: string;
  isDirectory: boolean;
  children?: FolderEntry[];
}

export interface SearchHit {
  path: string;
  line: number;
  col: number;
  preview: string;
}

export interface FramoraSettings {
  theme: 'light' | 'dark' | 'auto';
  themeName: string;
  autoSave: boolean;
  autoSaveDelayMs: number;
  fontSize: number;
  fontFamily: string;
  showLineNumbersInSource: boolean;
  spellcheck: boolean;
  sidebarOpen: boolean;
  customCss: string;
  language: string;
  imageStorage: 'asset-folder' | 'absolute';
  llmEnabled: boolean;
  llmModelPath: string;
  llmMaxTokens: number;
  llmTemperature: number;
}

export interface LlmStatus {
  state: 'stopped' | 'starting' | 'loading-model' | 'ready' | 'error';
  modelId?: string;
  error?: string;
  port?: number;
}

export interface LlmChatChunk {
  text: string;
  done: boolean;
}

export interface LlmModelEntry {
  name: string;
  path: string;
  sizeMB: number;
}

export interface TemplateEntry {
  id: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  file: string;
}

const api = {
  openDialog: (): Promise<OpenedFile | null> => ipcRenderer.invoke('file:open-dialog'),
  save: (path: string, content: string): Promise<{ ok: true }> =>
    ipcRenderer.invoke('file:save', { path, content }),
  saveAs: (content: string): Promise<{ path: string } | null> =>
    ipcRenderer.invoke('file:save-as', { content }),
  readFile: (path: string): Promise<OpenedFile> => ipcRenderer.invoke('file:read', path),
  pullPendingFile: (): Promise<OpenedFile | null> =>
    ipcRenderer.invoke('window:pull-pending-file'),
  saveImage: (params: {
    docPath: string | null;
    filename: string;
    bytes: ArrayBuffer;
  }): Promise<{ absolutePath: string; relativePath: string }> =>
    ipcRenderer.invoke('image:save', params),
  openFolderDialog: (): Promise<{ path: string; tree: FolderEntry } | null> =>
    ipcRenderer.invoke('folder:open-dialog'),
  listFolder: (path: string): Promise<FolderEntry> => ipcRenderer.invoke('folder:list', path),
  searchFolder: (params: {
    folder: string;
    query: string;
    regex: boolean;
    caseSensitive: boolean;
    maxResults: number;
  }): Promise<SearchHit[]> => ipcRenderer.invoke('folder:search', params),
  getRecents: (): Promise<string[]> => ipcRenderer.invoke('recents:get'),
  clearRecents: (): Promise<boolean> => ipcRenderer.invoke('recents:clear'),
  setTitle: (title: string): Promise<void> => ipcRenderer.invoke('window:set-title', title),
  openExternal: (url: string): Promise<void> => ipcRenderer.invoke('app:open-external', url),
  exportHtml: (html: string, suggestedName: string): Promise<{ path: string } | null> =>
    ipcRenderer.invoke('export:html', { html, suggestedName }),
  exportPdf: (html: string, suggestedName: string): Promise<{ path: string } | null> =>
    ipcRenderer.invoke('export:pdf', { suggestedName, html }),
  pandocDetect: (): Promise<{ installed: boolean; path: string | null }> =>
    ipcRenderer.invoke('pandoc:detect'),
  pandocExport: (params: {
    markdown: string;
    format: 'docx' | 'epub' | 'latex' | 'rtf' | 'odt' | 'pdf';
    docPath: string | null;
  }): Promise<{ ok: boolean; outputPath?: string; error?: string }> =>
    ipcRenderer.invoke('pandoc:export', params),
  print: (): Promise<{ ok: boolean }> => ipcRenderer.invoke('window:print'),
  getSettings: (): Promise<FramoraSettings> => ipcRenderer.invoke('settings:get'),
  updateSettings: (patch: Partial<FramoraSettings>): Promise<FramoraSettings> =>
    ipcRenderer.invoke('settings:update', patch),
  resetSettings: (): Promise<FramoraSettings> => ipcRenderer.invoke('settings:reset'),
  updaterStatus: (): Promise<{
    state: string;
    version?: string;
    percent?: number;
    error?: string;
  }> => ipcRenderer.invoke('updater:status'),
  updaterCheck: (): Promise<boolean> => ipcRenderer.invoke('updater:check'),
  updaterDownload: (): Promise<boolean> => ipcRenderer.invoke('updater:download'),
  updaterInstall: (): Promise<boolean> => ipcRenderer.invoke('updater:install'),
  onUpdaterStatus: (
    cb: (status: { state: string; version?: string; percent?: number; error?: string }) => void
  ): (() => void) => {
    const listener = (_e: IpcRendererEvent, s: Parameters<typeof cb>[0]): void => cb(s);
    ipcRenderer.on('updater:status', listener);
    return () => ipcRenderer.off('updater:status', listener);
  },

  llmStatus: (): Promise<LlmStatus> => ipcRenderer.invoke('llm:status'),
  llmStart: (): Promise<LlmStatus> => ipcRenderer.invoke('llm:start'),
  llmStop: (): Promise<LlmStatus> => ipcRenderer.invoke('llm:stop'),
  llmLoadModel: (modelPath: string): Promise<LlmStatus> =>
    ipcRenderer.invoke('llm:load-model', modelPath),
  llmListModels: (): Promise<string[]> => ipcRenderer.invoke('llm:list-models'),
  llmAbort: (): Promise<{ ok: boolean }> => ipcRenderer.invoke('llm:abort'),
  llmChat: (params: {
    messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>;
    maxTokens?: number;
    temperature?: number;
  }): Promise<{ ok: boolean; error?: string }> => ipcRenderer.invoke('llm:chat', params),
  llmScanModels: (dir: string): Promise<LlmModelEntry[]> =>
    ipcRenderer.invoke('llm:scan-models', dir),
  onLlmStatus: (cb: (status: LlmStatus) => void): (() => void) => {
    const listener = (_e: IpcRendererEvent, s: LlmStatus): void => cb(s);
    ipcRenderer.on('llm:status', listener);
    return () => ipcRenderer.off('llm:status', listener);
  },
  onLlmChunk: (cb: (chunk: LlmChatChunk) => void): (() => void) => {
    const listener = (_e: IpcRendererEvent, c: LlmChatChunk): void => cb(c);
    ipcRenderer.on('llm:chunk', listener);
    return () => ipcRenderer.off('llm:chunk', listener);
  },

  listTemplates: (): Promise<TemplateEntry[]> => ipcRenderer.invoke('templates:list'),
  readTemplate: (file: string): Promise<string> => ipcRenderer.invoke('templates:read', file),

  onFileOpened: (cb: (file: OpenedFile) => void): (() => void) => {
    const listener = (_e: IpcRendererEvent, f: OpenedFile): void => cb(f);
    ipcRenderer.on('file:opened', listener);
    return () => ipcRenderer.off('file:opened', listener);
  },
  onMenu: (
    event:
      | 'open'
      | 'save'
      | 'save-as'
      | 'toggle-source'
      | 'toggle-preview'
      | 'toggle-focus'
      | 'open-folder'
      | 'find'
      | 'find-in-files'
      | 'open-quickly'
      | 'export-html'
      | 'export-pdf'
      | 'export-docx'
      | 'export-epub'
      | 'export-latex'
      | 'export-rtf'
      | 'export-odt'
      | 'print'
      | 'toggle-split'
      | 'copy-as-html'
      | 'copy-as-plain'
      | 'toggle-sidebar'
      | 'toggle-ai'
      | 'new-from-template'
      | 'preferences',
    cb: () => void
  ): (() => void) => {
    const channel = `menu:${event}`;
    const listener = (): void => cb();
    ipcRenderer.on(channel, listener);
    return () => ipcRenderer.off(channel, listener);
  }
};

contextBridge.exposeInMainWorld('framora', api);

export type FramoraApi = typeof api;