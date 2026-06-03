import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Editor, EditorHandle } from './editor/Editor';
import { Preview } from './editor/Preview';
import { LiveEditor } from './editor/LiveEditor';
import { StatusBar } from './ui/StatusBar';
import { Welcome } from './ui/Welcome';
import { Sidebar } from './sidebar/Sidebar';
import { OpenQuickly } from './ui/OpenQuickly';
import { SettingsPanel } from './ui/SettingsPanel';
import { Lightbox } from './ui/Lightbox';
import { AiPanel } from './editor/AiPanel';
import { TemplatePicker } from './ui/TemplatePicker';
import { renderMarkdown } from './markdown/renderer';
import { applyThemeName } from './themes/themes';
import { I18nProvider, loadLocale } from './i18n';
import type { FolderEntry, FramoraSettings } from '../preload';

type ViewMode = 'source' | 'preview' | 'split' | 'live';

interface DocState {
  path: string | null;
  content: string;
  dirty: boolean;
}

interface FolderState {
  path: string;
  tree: FolderEntry;
}

const EMPTY: DocState = { path: null, content: '', dirty: false };

export function App(): JSX.Element {
  const [doc, setDoc] = useState<DocState>(EMPTY);
  // true once the user has explicitly opened/created a document; prevents
  // the Welcome screen from re-appearing when all content is deleted.
  const [docActive, setDocActive] = useState(false);
  const [mode, setMode] = useState<ViewMode>('live');
  const [focusMode, setFocusMode] = useState(false);
  const [folder, setFolder] = useState<FolderState | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [quicklyOpen, setQuicklyOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settings, setSettings] = useState<FramoraSettings | null>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [recents, setRecents] = useState<string[]>([]);
  const [messages, setMessages] = useState<Record<string, string>>({});
  const [updateStatus, setUpdateStatus] = useState<{
    state: string;
    version?: string;
    percent?: number;
  }>({ state: 'idle' });
  const [splitPercent, setSplitPercent] = useState(50);
  const [aiPanelOpen, setAiPanelOpen] = useState(false);
  const [templatePickerOpen, setTemplatePickerOpen] = useState(false);
  const [editorSelection, setEditorSelection] = useState('');
  const [editorCursorPos, setEditorCursorPos] = useState(0);
  const editorRef = useRef<EditorHandle>(null);
  const autoSaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const workspaceRef = useRef<HTMLDivElement>(null);

  // Headings derived from current source for the outline tab
  const headings = useMemo(() => renderMarkdown(doc.content).headings, [doc.content]);

  // Window title
  useEffect(() => {
    const name = doc.path ? doc.path.split(/[/\\]/).pop() : 'Untitled';
    const title = `${doc.dirty ? '• ' : ''}${name} — Framora`;
    void window.framora.setTitle(title);
    document.title = title;
  }, [doc.path, doc.dirty]);

  // Receive files opened via OS / CLI / dialog
  useEffect(() => {
    const off = window.framora.onFileOpened((f) => {
      setDoc({ path: f.path, content: f.content, dirty: false });
      setDocActive(true);
    });
    // Pull any file that the main process queued for this window at creation
    void window.framora.pullPendingFile().then((f) => {
      if (f) { setDoc({ path: f.path, content: f.content, dirty: false }); setDocActive(true); }
    });
    return off;
  }, []);

  // Load settings on mount + apply
  useEffect(() => {
    void window.framora.getSettings().then((s) => {
      setSettings(s);
      setSidebarOpen(s.sidebarOpen);
      applyTheme(s);
      void loadLocale(s.language).then(setMessages);
    });
  }, []);

  // Listen for auto-updater status
  useEffect(() => {
    return window.framora.onUpdaterStatus((s) => setUpdateStatus(s));
  }, []);

  // Re-apply theme + locale whenever settings change
  useEffect(() => {
    if (settings) {
      applyTheme(settings);
      void loadLocale(settings.language).then(setMessages);
    }
  }, [settings]);

  // Persist sidebar open/close back to settings
  useEffect(() => {
    if (settings && settings.sidebarOpen !== sidebarOpen) {
      void window.framora.updateSettings({ sidebarOpen });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sidebarOpen]);

  // Autosave: debounced when enabled and a path exists
  useEffect(() => {
    if (!settings?.autoSave || !doc.path || !doc.dirty) return;
    if (autoSaveTimer.current) clearTimeout(autoSaveTimer.current);
    autoSaveTimer.current = setTimeout(() => {
      void window.framora.save(doc.path!, doc.content).then(() => {
        setDoc((d) => (d.path === doc.path ? { ...d, dirty: false } : d));
      });
    }, settings.autoSaveDelayMs);
    return () => {
      if (autoSaveTimer.current) clearTimeout(autoSaveTimer.current);
    };
  }, [doc.content, doc.dirty, doc.path, settings?.autoSave, settings?.autoSaveDelayMs]);

  // Refresh recents whenever path changes
  useEffect(() => {
    void window.framora.getRecents().then(setRecents);
  }, [doc.path]);

  const promptSaveIfDirty = useCallback(async (): Promise<boolean> => {
    if (!doc.dirty) return true;
    // For now, just prompt synchronously via window.confirm.  TODO: use a custom dialog.
    return window.confirm('Discard unsaved changes?');
  }, [doc.dirty]);

  const openFile = useCallback(async () => {
    if (!(await promptSaveIfDirty())) return;
    const f = await window.framora.openDialog();
    if (f) { setDoc({ path: f.path, content: f.content, dirty: false }); setDocActive(true); }
  }, [promptSaveIfDirty]);

  const openFolder = useCallback(async () => {
    const f = await window.framora.openFolderDialog();
    if (f) {
      setFolder(f);
      setSidebarOpen(true);
    }
  }, []);

  const refreshFolder = useCallback(async () => {
    if (!folder) return;
    const tree = await window.framora.listFolder(folder.path);
    setFolder({ path: folder.path, tree });
  }, [folder]);

  const openFileByPath = useCallback(
    async (path: string) => {
      if (!(await promptSaveIfDirty())) return;
      const f = await window.framora.readFile(path);
      setDoc({ path: f.path, content: f.content, dirty: false });
      setDocActive(true);
    },
    [promptSaveIfDirty]
  );

  const saveFile = useCallback(async () => {
    const content = editorRef.current?.getValue() ?? doc.content;
    if (doc.path) {
      await window.framora.save(doc.path, content);
      setDoc((d) => ({ ...d, content, dirty: false }));
    } else {
      const r = await window.framora.saveAs(content);
      if (r) setDoc({ path: r.path, content, dirty: false });
    }
  }, [doc.path, doc.content]);

  const saveAs = useCallback(async () => {
    const content = editorRef.current?.getValue() ?? doc.content;
    const r = await window.framora.saveAs(content);
    if (r) setDoc({ path: r.path, content, dirty: false });
  }, [doc.content]);

  const exportHtml = useCallback(async () => {
    const { html } = renderMarkdown(doc.content);
    const css = await fetchInlineStyles();
    const standalone =
      `<!doctype html><html><head><meta charset="utf-8"><title>${
        (doc.path?.split(/[/\\]/).pop() ?? 'Untitled').replace(/</g, '&lt;')
      }</title><style>${css}</style></head><body><article class="fr-rendered">${html}</article></body></html>`;
    await window.framora.exportHtml(standalone, doc.path ?? 'untitled.md');
  }, [doc.path, doc.content]);

  const exportPdf = useCallback(async () => {
    const { html } = renderMarkdown(doc.content);
    const css = await fetchInlineStyles();
    const title = (doc.path?.split(/[/\\]/).pop() ?? 'Untitled').replace(/</g, '&lt;');
    const standalone = `<!doctype html><html><head><meta charset="utf-8"><title>${title}</title>
<style>${css}
body { margin: 0; padding: 24px 32px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif; }
.fr-rendered { max-width: 100%; font-size: 14px; line-height: 1.7; }
</style></head><body><article class="fr-rendered">${html}</article></body></html>`;
    await window.framora.exportPdf(standalone, doc.path ?? 'untitled.md');
  }, [doc.path, doc.content]);

  const exportPandoc = useCallback(
    async (format: 'docx' | 'epub' | 'latex' | 'rtf' | 'odt') => {
      const markdown = editorRef.current?.getValue() ?? doc.content;
      await window.framora.pandocExport({ markdown, format, docPath: doc.path });
    },
    [doc.path, doc.content]
  );

  const doPrint = useCallback(async () => {
    const prevMode = mode;
    setMode('preview');
    await new Promise((r) => setTimeout(r, 400));
    await window.framora.print();
    setMode(prevMode);
  }, [mode]);

  const scrollToHeading = useCallback((id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const aiInsert = useCallback((text: string) => {
    editorRef.current?.insertAtCursor(text);
  }, []);

  const aiReplace = useCallback((text: string) => {
    editorRef.current?.replaceSelection(text);
  }, []);

  const openTemplatePicker = useCallback(() => {
    setTemplatePickerOpen(true);
  }, []);

  const handleTemplateSelect = useCallback(
    async (content: string) => {
      if (doc.dirty && !(await promptSaveIfDirty())) return;
      setDoc({ path: null, content, dirty: true });
      setDocActive(true);
      setTemplatePickerOpen(false);
    },
    [doc.dirty, promptSaveIfDirty]
  );

  const onSelectionChange = useCallback((sel: string) => {
    setEditorSelection(sel);
    const pos = editorRef.current?.getCursorPosition() ?? 0;
    setEditorCursorPos(pos);
  }, []);

  // Wire menu events
  useEffect(() => {
    const offs = [
      window.framora.onMenu('open', () => void openFile()),
      window.framora.onMenu('open-folder', () => void openFolder()),
      window.framora.onMenu('open-quickly', () => setQuicklyOpen(true)),
      window.framora.onMenu('save', () => void saveFile()),
      window.framora.onMenu('save-as', () => void saveAs()),
      window.framora.onMenu('export-html', () => void exportHtml()),
      window.framora.onMenu('export-pdf', () => void exportPdf()),
      window.framora.onMenu('export-docx', () => void exportPandoc('docx')),
      window.framora.onMenu('export-epub', () => void exportPandoc('epub')),
      window.framora.onMenu('export-latex', () => void exportPandoc('latex')),
      window.framora.onMenu('export-rtf', () => void exportPandoc('rtf')),
      window.framora.onMenu('export-odt', () => void exportPandoc('odt')),
      window.framora.onMenu('print', () => void doPrint()),
      window.framora.onMenu('copy-as-html', () => {
        const { html } = renderMarkdown(doc.content);
        void navigator.clipboard.writeText(html);
      }),
      window.framora.onMenu('copy-as-plain', () => {
        const { html } = renderMarkdown(doc.content);
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        void navigator.clipboard.writeText(tmp.textContent ?? '');
      }),
      window.framora.onMenu('find', () => editorRef.current?.openSearch()),
      window.framora.onMenu('find-in-files', () => {
        setSidebarOpen(true);
      }),
      window.framora.onMenu('toggle-sidebar', () => setSidebarOpen((v) => !v)),
      window.framora.onMenu('preferences', () => setSettingsOpen(true)),
      window.framora.onMenu('toggle-source', () => setMode((m) => (m === 'source' ? 'split' : 'source'))),
      window.framora.onMenu('toggle-preview', () => setMode((m) => (m === 'preview' ? 'split' : 'preview'))),
      window.framora.onMenu('toggle-split', () => setMode('split')),
      window.framora.onMenu('toggle-live', () => setMode((m) => (m === 'live' ? 'split' : 'live'))),
      window.framora.onMenu('toggle-focus', () => setFocusMode((v) => !v)),
      window.framora.onMenu('toggle-ai', () => setAiPanelOpen((v) => !v)),
      window.framora.onMenu('new-from-template', () => setTemplatePickerOpen(true))
    ];
    return () => offs.forEach((off) => off());
  }, [openFile, openFolder, saveFile, saveAs, exportHtml, exportPdf, exportPandoc, doPrint, doc.content]);

  // ---------- Drag-drop & clipboard image handling ----------
  useEffect(() => {
    const insertAtCursor = (text: string): void => {
      editorRef.current?.insertAtCursor(text);
    };

    const saveAndInsertImage = async (file: File | Blob, suggestedName?: string): Promise<void> => {
      const ab = await file.arrayBuffer();
      const name = suggestedName ?? (file as File).name ?? `pasted-${Date.now()}.png`;
      const safe = name.replace(/[^A-Za-z0-9_.-]+/g, '_');
      const result = await window.framora.saveImage({
        docPath: doc.path,
        filename: safe,
        bytes: ab
      });
      const ref = doc.path ? result.relativePath : 'file://' + result.absolutePath.replace(/\\/g, '/');
      insertAtCursor(`![](${ref})`);
    };

    const onDrop = (e: DragEvent): void => {
      if (!e.dataTransfer) return;
      const files = Array.from(e.dataTransfer.files);
      if (files.length === 0) return;
      e.preventDefault();
      for (const f of files) {
        // Markdown file → open it
        if (/\.(md|markdown|mdown|mkd|mkdn|qmd)$/i.test(f.name)) {
          const path = (f as File & { path?: string }).path;
          if (path) void openFileByPath(path);
          continue;
        }
        // Image → copy + insert
        if (f.type.startsWith('image/')) {
          void saveAndInsertImage(f, f.name);
        }
      }
    };

    const onDragOver = (e: DragEvent): void => {
      if (e.dataTransfer && e.dataTransfer.types.includes('Files')) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
      }
    };

    const onPaste = (e: ClipboardEvent): void => {
      if (!e.clipboardData) return;
      for (const item of Array.from(e.clipboardData.items)) {
        if (item.kind === 'file' && item.type.startsWith('image/')) {
          const blob = item.getAsFile();
          if (blob) {
            e.preventDefault();
            const ext = item.type.split('/')[1] ?? 'png';
            void saveAndInsertImage(blob, `pasted-${Date.now()}.${ext}`);
          }
        }
      }
    };

    window.addEventListener('drop', onDrop);
    window.addEventListener('dragover', onDragOver);
    window.addEventListener('paste', onPaste);
    return () => {
      window.removeEventListener('drop', onDrop);
      window.removeEventListener('dragover', onDragOver);
      window.removeEventListener('paste', onPaste);
    };
  }, [doc.path, openFileByPath]);


  const onChange = useCallback((value: string) => {
    setDoc((d) => ({ ...d, content: value, dirty: true }));
  }, []);

  const onResizeStart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const ws = workspaceRef.current;
    if (!ws) return;
    const startX = e.clientX;
    const startPct = splitPercent;
    const rect = ws.getBoundingClientRect();

    const onMove = (ev: MouseEvent): void => {
      const dx = ev.clientX - startX;
      const newPct = startPct + (dx / rect.width) * 100;
      setSplitPercent(Math.min(85, Math.max(15, newPct)));
    };
    const onUp = (): void => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  }, [splitPercent]);

  const isEmpty = !docActive && doc.path === null && doc.content === '' && !folder;

  return (
    <I18nProvider value={messages}>
    <div className={`framora-root ${focusMode ? 'focus-mode' : ''}`}>
      {(updateStatus.state === 'available' || updateStatus.state === 'downloading') && (
        <div className="fr-update-bar fr-update-bar--progress">
          <span className="fr-update-bar__icon">↓</span>
          {updateStatus.state === 'available'
            ? `Framora ${updateStatus.version ?? ''} — downloading update…`
            : `Downloading update ${updateStatus.version ?? ''}… ${updateStatus.percent ?? 0}%`}
          {updateStatus.state === 'downloading' && (
            <span className="fr-update-bar__track">
              <span
                className="fr-update-bar__fill"
                style={{ width: `${updateStatus.percent ?? 0}%` }}
              />
            </span>
          )}
        </div>
      )}
      {updateStatus.state === 'ready' && (
        <div className="fr-update-bar fr-update-bar--ready">
          <span className="fr-update-bar__icon">✓</span>
          Framora {updateStatus.version ?? ''} is ready to install
          <button
            className="fr-btn fr-update-bar__cta"
            onClick={() => void window.framora.updaterInstall()}
          >
            Restart &amp; Install
          </button>
          <button
            className="fr-update-bar__dismiss"
            onClick={() => setUpdateStatus({ state: 'idle' })}
            title="Dismiss (installs on next restart)"
          >
            ✕
          </button>
        </div>
      )}
      <div className="fr-main-row">
        {sidebarOpen && (
          <Sidebar
            folder={folder}
            currentPath={doc.path}
            headings={headings}
            onOpenFile={openFileByPath}
            onOpenFolder={openFolder}
            onScrollToHeading={scrollToHeading}
            onRefreshFolder={() => void refreshFolder()}
          />
        )}
        <div className="fr-main">
          {isEmpty ? (
            <Welcome
              onOpen={openFile}
              onNew={() => { setDoc({ path: null, content: '# \n', dirty: true }); setDocActive(true); }}
              onBrowseTemplates={openTemplatePicker}
              onOpenRecent={(p) => {
                void window.framora.readFile(p).then((f) => {
                  setDoc({ path: f.path, content: f.content, dirty: false });
                  setDocActive(true);
                }).catch(() => {
                  // File may have been deleted since last session
                });
              }}
            />
          ) : (
            <div
              ref={workspaceRef}
              className={`workspace mode-${mode}`}
            >
              {mode === 'live' ? (
                <div className="fr-pane fr-pane-preview">
                  <LiveEditor
                    source={doc.content}
                    docPath={doc.path}
                    onChangeSource={(next) => setDoc((d) => ({ ...d, content: next, dirty: true }))}
                    onImageClick={(src) => setLightbox(src)}
                  />
                </div>
              ) : (
                <>
                  {mode !== 'preview' && (
                    <div
                      className="fr-pane fr-pane-editor"
                      style={mode === 'split' ? { width: `${splitPercent}%` } : undefined}
                    >
                      <Editor
                        ref={editorRef}
                        value={doc.content}
                        onChange={onChange}
                        onSelectionChange={onSelectionChange}
                      />
                    </div>
                  )}
                  {mode === 'split' && (
                    <div
                      className="fr-resizer"
                      onMouseDown={onResizeStart}
                    />
                  )}
                  {(mode === 'preview' || mode === 'split') && (
                    <div
                      className="fr-pane fr-pane-preview"
                      style={mode === 'split' ? { width: `${100 - splitPercent}%` } : undefined}
                    >
                      <Preview
                        source={doc.content}
                        docPath={doc.path}
                        onChangeSource={(next) => setDoc((d) => ({ ...d, content: next, dirty: true }))}
                        onImageClick={(src) => setLightbox(src)}
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
        {aiPanelOpen && (
          <AiPanel
            source={doc.content}
            selection={editorSelection}
            cursorPos={editorCursorPos}
            onInsert={aiInsert}
            onReplace={aiReplace}
            onClose={() => setAiPanelOpen(false)}
          />
        )}
      </div>
      <StatusBar
        content={doc.content}
        path={doc.path}
        dirty={doc.dirty}
        mode={mode}
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen((v) => !v)}
        aiPanelOpen={aiPanelOpen}
        onToggleAi={() => setAiPanelOpen((v) => !v)}
      />
      {quicklyOpen && (
        <OpenQuickly
          folder={folder}
          recents={recents}
          onPick={openFileByPath}
          onClose={() => setQuicklyOpen(false)}
        />
      )}
      {settingsOpen && (
        <SettingsPanel
          onClose={() => setSettingsOpen(false)}
          onChange={(s) => setSettings(s)}
        />
      )}
      {lightbox && <Lightbox src={lightbox} onClose={() => setLightbox(null)} />}
      {templatePickerOpen && (
        <TemplatePicker
          onSelect={(content) => void handleTemplateSelect(content)}
          onClose={() => setTemplatePickerOpen(false)}
        />
      )}
    </div>
    </I18nProvider>
  );
}

// ---------- Theme application ----------

function applyTheme(s: FramoraSettings): void {
  const root = document.documentElement;

  // Apply named theme (sets data-theme + data-theme-name + CSS overrides)
  applyThemeName(s.themeName);

  // Light/dark/auto override (manual override of base)
  const effective =
    s.theme === 'auto'
      ? root.dataset.theme ?? 'light'
      : s.theme;
  root.dataset.theme = effective;

  root.style.setProperty('--fr-user-font-size', s.fontSize + 'px');
  root.style.setProperty('--fr-user-font-family', s.fontFamily);

  // Inject custom CSS
  let styleEl = document.getElementById('fr-custom-css') as HTMLStyleElement | null;
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = 'fr-custom-css';
    document.head.appendChild(styleEl);
  }
  styleEl.textContent = s.customCss ?? '';
}

// Inline the page-loaded stylesheets (used for HTML export). We grab everything
// available in document.styleSheets and concatenate the rules.
async function fetchInlineStyles(): Promise<string> {
  const out: string[] = [];
  for (const sheet of Array.from(document.styleSheets)) {
    try {
      const rules = sheet.cssRules;
      for (const rule of Array.from(rules)) out.push(rule.cssText);
    } catch {
      // Cross-origin stylesheets can throw; ignore.
    }
  }
  return out.join('\n');
}