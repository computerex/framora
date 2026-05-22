import React, { useEffect, useMemo, useRef, useState } from 'react';
import type { FolderEntry } from '../../preload';

interface OpenQuicklyProps {
  folder: { path: string; tree: FolderEntry } | null;
  recents: string[];
  onPick: (path: string) => void;
  onClose: () => void;
}

interface Item {
  name: string;
  path: string;
}

function flatten(tree: FolderEntry, out: Item[] = []): Item[] {
  if (tree.isDirectory) {
    for (const c of tree.children ?? []) flatten(c, out);
  } else {
    out.push({ name: tree.name, path: tree.path });
  }
  return out;
}

function fuzzyScore(query: string, target: string): number {
  // Simple subsequence scoring: characters in order, prefer earlier matches
  // and contiguous runs.  Returns -1 if not a subsequence.
  const q = query.toLowerCase();
  const t = target.toLowerCase();
  let score = 0;
  let prevIdx = -1;
  for (let i = 0; i < q.length; i++) {
    const idx = t.indexOf(q[i]!, prevIdx + 1);
    if (idx === -1) return -1;
    score += idx === prevIdx + 1 ? 5 : 1;
    if (idx === 0 || /[/\\._-]/.test(t[idx - 1] ?? '')) score += 3;
    prevIdx = idx;
  }
  return score - target.length * 0.01; // mild preference for shorter paths
}

export function OpenQuickly({ folder, recents, onPick, onClose }: OpenQuicklyProps): JSX.Element {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const items = useMemo<Item[]>(() => {
    const fromTree = folder ? flatten(folder.tree) : [];
    const fromRecents = recents.map((p) => ({ name: p.split(/[/\\]/).pop() ?? p, path: p }));
    // Dedupe (folder takes precedence)
    const seen = new Set(fromTree.map((i) => i.path));
    return [...fromTree, ...fromRecents.filter((r) => !seen.has(r.path))];
  }, [folder, recents]);

  const filtered = useMemo(() => {
    if (!query) return items.slice(0, 50);
    const scored = items
      .map((i) => ({ i, s: Math.max(fuzzyScore(query, i.name), fuzzyScore(query, i.path)) }))
      .filter((x) => x.s >= 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 50)
      .map((x) => x.i);
    return scored;
  }, [items, query]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  return (
    <div className="fr-modal-backdrop" onClick={onClose}>
      <div className="fr-modal fr-open-quickly" onClick={(e) => e.stopPropagation()}>
        <input
          ref={inputRef}
          className="fr-input large"
          type="search"
          placeholder="Search files by name…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') onClose();
            else if (e.key === 'ArrowDown') {
              e.preventDefault();
              setActive((a) => Math.min(a + 1, filtered.length - 1));
            } else if (e.key === 'ArrowUp') {
              e.preventDefault();
              setActive((a) => Math.max(a - 1, 0));
            } else if (e.key === 'Enter') {
              if (filtered[active]) {
                onPick(filtered[active]!.path);
                onClose();
              }
            }
          }}
        />
        <ul className="fr-quickly-list">
          {filtered.length === 0 && <li className="fr-quickly-empty">No files.</li>}
          {filtered.map((it, idx) => (
            <li
              key={it.path}
              className={`fr-quickly-item ${idx === active ? 'active' : ''}`}
              onMouseEnter={() => setActive(idx)}
              onClick={() => {
                onPick(it.path);
                onClose();
              }}
            >
              <span className="fr-quickly-name">{it.name}</span>
              <span className="fr-quickly-path">{it.path}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}