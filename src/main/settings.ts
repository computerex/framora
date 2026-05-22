import { app } from 'electron';
import { join } from 'path';
import { readFileSync, writeFileSync, existsSync } from 'fs';

export interface Settings {
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

const DEFAULTS: Settings = {
  theme: 'auto',
  themeName: 'framora-light',
  autoSave: false,
  autoSaveDelayMs: 1500,
  fontSize: 16,
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
  showLineNumbersInSource: true,
  spellcheck: true,
  sidebarOpen: false,
  customCss: '',
  language: 'en',
  imageStorage: 'asset-folder',
  llmEnabled: false,
  llmModelPath: '',
  llmMaxTokens: 512,
  llmTemperature: 0.7
};

let cache: Settings | null = null;

function file(): string {
  return join(app.getPath('userData'), 'settings.json');
}

export function getSettings(): Settings {
  if (cache) return cache;
  try {
    if (existsSync(file())) {
      const raw = JSON.parse(readFileSync(file(), 'utf8')) as Partial<Settings>;
      cache = { ...DEFAULTS, ...raw };
    } else {
      cache = { ...DEFAULTS };
    }
  } catch {
    cache = { ...DEFAULTS };
  }
  return cache;
}

export function updateSettings(patch: Partial<Settings>): Settings {
  const merged = { ...getSettings(), ...patch };
  cache = merged;
  try {
    writeFileSync(file(), JSON.stringify(merged, null, 2), 'utf8');
  } catch {
    // ignore
  }
  return merged;
}

export function resetSettings(): Settings {
  cache = { ...DEFAULTS };
  try {
    writeFileSync(file(), JSON.stringify(cache, null, 2), 'utf8');
  } catch {
    // ignore
  }
  return cache;
}