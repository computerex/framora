import { autoUpdater, UpdateInfo } from 'electron-updater';
import { BrowserWindow } from 'electron';

export interface UpdateStatus {
  state: 'idle' | 'checking' | 'available' | 'not-available' | 'downloading' | 'ready' | 'error';
  version?: string;
  percent?: number;
  error?: string;
}

let status: UpdateStatus = { state: 'idle' };

function broadcast(s: UpdateStatus): void {
  status = s;
  for (const win of BrowserWindow.getAllWindows()) {
    win.webContents.send('updater:status', s);
  }
}

export function getUpdateStatus(): UpdateStatus {
  return status;
}

export function initAutoUpdater(): void {
  autoUpdater.autoDownload = false;
  autoUpdater.autoInstallOnAppQuit = true;

  autoUpdater.on('checking-for-update', () => {
    broadcast({ state: 'checking' });
  });

  autoUpdater.on('update-available', (info: UpdateInfo) => {
    broadcast({ state: 'available', version: info.version });
  });

  autoUpdater.on('update-not-available', () => {
    broadcast({ state: 'not-available' });
  });

  autoUpdater.on('download-progress', (progress) => {
    broadcast({ state: 'downloading', percent: Math.round(progress.percent) });
  });

  autoUpdater.on('update-downloaded', (info: UpdateInfo) => {
    broadcast({ state: 'ready', version: info.version });
  });

  autoUpdater.on('error', (err) => {
    broadcast({ state: 'error', error: String(err) });
  });
}

export function checkForUpdates(): void {
  void autoUpdater.checkForUpdates();
}

export function downloadUpdate(): void {
  void autoUpdater.downloadUpdate();
}

export function installUpdate(): void {
  autoUpdater.quitAndInstall(false, true);
}
