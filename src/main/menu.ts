import { Menu, MenuItemConstructorOptions, app, shell } from 'electron';

export interface MenuHandlers {
  onNew: () => void | Promise<void>;
  onOpen: () => void | Promise<void>;
  onOpenFolder: () => void;
  onSave: () => void;
  onSaveAs: () => void;
  onExportHtml: () => void;
  onExportPdf: () => void;
  onExportDocx: () => void;
  onExportEpub: () => void;
  onExportLatex: () => void;
  onExportRtf: () => void;
  onExportOdt: () => void;
  onPrint: () => void;
  onFind: () => void;
  onFindInFiles: () => void;
  onOpenQuickly: () => void;
  onCopyAsHtml: () => void;
  onCopyAsPlain: () => void;
  onPreferences: () => void;
  onToggleSidebar: () => void;
  onToggleSource: () => void;
  onTogglePreview: () => void;
  onToggleSplit: () => void;
  onToggleFocus: () => void;
  onToggleAi: () => void;
  onNewFromTemplate: () => void;
}

export function buildMenu(h: MenuHandlers): Menu {
  const isMac = process.platform === 'darwin';

  const template: MenuItemConstructorOptions[] = [
    ...(isMac
      ? ([
          {
            label: app.name,
            submenu: [
              { role: 'about' },
              { type: 'separator' },
              { label: 'Preferences…', accelerator: 'Cmd+,', click: () => h.onPreferences() },
              { type: 'separator' },
              { role: 'services' },
              { type: 'separator' },
              { role: 'hide' },
              { role: 'hideOthers' },
              { role: 'unhide' },
              { type: 'separator' },
              { role: 'quit' }
            ]
          }
        ] as MenuItemConstructorOptions[])
      : []),
    {
      label: 'File',
      submenu: [
        { label: 'New', accelerator: 'CmdOrCtrl+N', click: () => void h.onNew() },
        { label: 'New from Template…', accelerator: 'CmdOrCtrl+Shift+N', click: () => h.onNewFromTemplate() },
        { label: 'Open File…', accelerator: 'CmdOrCtrl+O', click: () => void h.onOpen() },
        { label: 'Open Folder…', accelerator: 'CmdOrCtrl+Shift+O', click: () => h.onOpenFolder() },
        { label: 'Open Quickly…', accelerator: 'CmdOrCtrl+P', click: () => h.onOpenQuickly() },
        { type: 'separator' },
        { label: 'Save', accelerator: 'CmdOrCtrl+S', click: () => h.onSave() },
        { label: 'Save As…', accelerator: 'CmdOrCtrl+Shift+S', click: () => h.onSaveAs() },
        { type: 'separator' },
        {
          label: 'Export',
          submenu: [
            { label: 'HTML…', click: () => h.onExportHtml() },
            { label: 'PDF…', click: () => h.onExportPdf() },
            { type: 'separator' },
            { label: 'Word (.docx)…', click: () => h.onExportDocx() },
            { label: 'EPUB (.epub)…', click: () => h.onExportEpub() },
            { label: 'LaTeX (.tex)…', click: () => h.onExportLatex() },
            { label: 'RTF (.rtf)…', click: () => h.onExportRtf() },
            { label: 'ODT (.odt)…', click: () => h.onExportOdt() }
          ]
        },
        { label: 'Print…', click: () => h.onPrint() },
        { type: 'separator' },
        ...(isMac
          ? []
          : ([{ label: 'Preferences…', accelerator: 'Ctrl+,', click: () => h.onPreferences() }, { type: 'separator' }] as MenuItemConstructorOptions[])),
        isMac ? { role: 'close' } : { role: 'quit' }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'selectAll' },
        { type: 'separator' },
        { label: 'Find…', accelerator: 'CmdOrCtrl+F', click: () => h.onFind() },
        { label: 'Find in Files…', accelerator: 'CmdOrCtrl+Shift+F', click: () => h.onFindInFiles() },
        { type: 'separator' },
        { label: 'Copy as HTML', click: () => h.onCopyAsHtml() },
        { label: 'Copy as Plain Text', click: () => h.onCopyAsPlain() }
      ]
    },
    {
      label: 'View',
      submenu: [
        { label: 'Toggle Sidebar', accelerator: 'CmdOrCtrl+\\', click: () => h.onToggleSidebar() },
        { type: 'separator' },
        { label: 'Editor Only', accelerator: 'CmdOrCtrl+/', click: () => h.onToggleSource() },
        { label: 'Preview Only', accelerator: 'CmdOrCtrl+Shift+P', click: () => h.onTogglePreview() },
        { label: 'Split View', accelerator: 'CmdOrCtrl+Shift+L', click: () => h.onToggleSplit() },
        { label: 'Toggle Focus Mode', accelerator: 'F8', click: () => h.onToggleFocus() },
        { type: 'separator' },
        { label: 'Toggle AI Assistant', accelerator: 'CmdOrCtrl+Shift+A', click: () => h.onToggleAi() },
        { type: 'separator' },
        { role: 'reload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    {
      label: 'Window',
      submenu: [
        { role: 'minimize' },
        { role: 'zoom' },
        ...(isMac ? [{ role: 'front' as const }] : [{ role: 'close' as const }])
      ]
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'Learn More',
          click: () => shell.openExternal('https://github.com')
        }
      ]
    }
  ];

  return Menu.buildFromTemplate(template);
}