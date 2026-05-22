import { app } from 'electron';
import { join } from 'path';
import { readFileSync, writeFileSync, existsSync } from 'fs';

const MAX_RECENTS = 20;
let cache: string[] | null = null;

function file(): string {
  return join(app.getPath('userData'), 'recents.json');
}

function load(): string[] {
  if (cache) return cache;
  try {
    if (existsSync(file())) {
      cache = JSON.parse(readFileSync(file(), 'utf8')) as string[];
    } else {
      cache = [];
    }
  } catch {
    cache = [];
  }
  return cache!;
}

function save(): void {
  try {
    writeFileSync(file(), JSON.stringify(cache ?? []), 'utf8');
  } catch {
    // ignore
  }
}

export function addRecent(path: string): void {
  const list = load();
  const filtered = list.filter((p) => p !== path);
  filtered.unshift(path);
  cache = filtered.slice(0, MAX_RECENTS);
  save();
}

export function getRecents(): string[] {
  return [...load()];
}

export function clearRecents(): void {
  cache = [];
  save();
}