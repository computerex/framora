import { promises as fs } from 'fs';
import { join } from 'path';

export interface FolderEntry {
  name: string;
  path: string;
  isDirectory: boolean;
  children?: FolderEntry[];
}

const MD_EXT = /\.(md|markdown|mdown|mkd|mkdn|qmd)$/i;

const IGNORE = new Set<string>([
  'node_modules',
  '.git',
  '.svn',
  '.hg',
  '.idea',
  '.vscode',
  'dist',
  'build',
  'out',
  '.next',
  '.cache',
  '__pycache__'
]);

/**
 * Recursively list the contents of a folder, returning only directories
 * and Markdown files.  Hidden directories and obvious build folders are
 * skipped.  Symlinks are not followed.
 */
export async function listFolder(
  rootPath: string,
  maxDepth = 8
): Promise<FolderEntry> {
  const stat = await fs.stat(rootPath);
  if (!stat.isDirectory()) {
    return {
      name: rootPath.split(/[/\\]/).pop() ?? rootPath,
      path: rootPath,
      isDirectory: false
    };
  }
  return walk(rootPath, maxDepth);
}

async function walk(dir: string, depth: number): Promise<FolderEntry> {
  const name = dir.split(/[/\\]/).pop() ?? dir;
  const entry: FolderEntry = {
    name,
    path: dir,
    isDirectory: true,
    children: []
  };
  if (depth <= 0) return entry;

  let items: string[] = [];
  try {
    items = await fs.readdir(dir);
  } catch {
    return entry;
  }

  const subdirs: FolderEntry[] = [];
  const files: FolderEntry[] = [];

  for (const item of items) {
    if (item.startsWith('.') || IGNORE.has(item)) continue;
    const full = join(dir, item);
    let s: import('fs').Stats;
    try {
      s = await fs.lstat(full);
    } catch {
      continue;
    }
    if (s.isSymbolicLink()) continue;
    if (s.isDirectory()) {
      subdirs.push(await walk(full, depth - 1));
    } else if (s.isFile() && MD_EXT.test(item)) {
      files.push({ name: item, path: full, isDirectory: false });
    }
  }

  // Sort: directories first (alpha), then files (alpha) — natural sort
  const cmp = (a: FolderEntry, b: FolderEntry): number =>
    a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' });
  subdirs.sort(cmp);
  files.sort(cmp);

  // Drop empty subdirs to keep the tree tidy
  entry.children = [...subdirs.filter((d) => (d.children?.length ?? 0) > 0), ...files];
  return entry;
}