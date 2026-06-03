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

/** Interval between background update checks (4 hours). */
const CHECK_INTERVAL_MS = 4 * 60 * 60 * 1000;

export function initAutoUpdater(): void {
  autoUpdater.autoDownload = false;
  autoUpdater.autoInstallOnAppQuit = true;
  // Don't throw on dev / missing update server — just log.
  autoUpdater.logger = null;
  autoUpdater.allowDowngrade = false;

  autoUpdater.on('checking-for-update', () => {
    broadcast({ state: 'checking' });
  });

  autoUpdater.on('update-available', (info: UpdateInfo) => {
    broadcast({ state: 'available', version: info.version });
    // Auto-start downloading so the update is ready quickly.
    void autoUpdater.downloadUpdate();
  });

  autoUpdater.on('update-not-available', () => {
    broadcast({ state: 'not-available' });
  });

  autoUpdater.on('download-progress', (progress) => {
    broadcast({ state: 'downloading', percent: Math.round(progress.percent) });
  });

  autoUpdater.on('update-downloaded', (info: UpdateInfo) => {
    broadcast({ state: 'ready', version: info.version });
    // Notify all windows — the renderer shows a "Restart to update" banner.
  });

  autoUpdater.on('error', (err) => {
    // Swallow network errors silently; only broadcast real failures.
    const msg = String(err);
    if (msg.includes('net::') || msg.includes('ENOTFOUND') || msg.includes('ECONNREFUSED')) {
      broadcast({ state: 'idle' });
      return;
    }
    broadcast({ state: 'error', error: msg });
  });

  // Periodic background checks every 4 hours.
  setInterval(checkForUpdates, CHECK_INTERVAL_MS);
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
