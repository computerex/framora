import React, { useCallback, useState } from 'react';
import type { SearchHit } from '../../preload';

interface SearchPanelProps {
  folder: string | null;
  onOpenHit: (path: string) => void;
}

export function SearchPanel({ folder, onOpenHit }: SearchPanelProps): JSX.Element {
  const [query, setQuery] = useState('');
  const [regex, setRegex] = useState(false);
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [results, setResults] = useState<SearchHit[]>([]);
  const [busy, setBusy] = useState(false);

  const run = useCallback(async () => {
    if (!folder || !query) {
      setResults([]);
      return;
    }
    setBusy(true);
    try {
      const hits = await window.framora.searchFolder({
        folder,
        query,
        regex,
        caseSensitive,
        maxResults: 500
      });
      setResults(hits);
    } finally {
      setBusy(false);
    }
  }, [folder, query, regex, caseSensitive]);

  if (!folder) {
    return <div className="fr-search-empty">Open a folder to search across files.</div>;
  }

  // Group by file
  const byFile = new Map<string, SearchHit[]>();
  for (const h of results) {
    const arr = byFile.get(h.path) ?? [];
    arr.push(h);
    byFile.set(h.path, arr);
  }

  return (
    <div className="fr-search">
      <div className="fr-search-controls">
        <input
          className="fr-input"
          type="search"
          placeholder="Search…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') void run();
          }}
        />
        <div className="fr-search-toggles">
          <label>
            <input type="checkbox" checked={caseSensitive} onChange={(e) => setCaseSensitive(e.target.checked)} />
            Aa
          </label>
          <label>
            <input type="checkbox" checked={regex} onChange={(e) => setRegex(e.target.checked)} />
            .*
          </label>
          <button className="fr-btn small" disabled={busy} onClick={() => void run()}>
            {busy ? '…' : 'Go'}
          </button>
        </div>
      </div>
      <div className="fr-search-results">
        {results.length === 0 && !busy && query && <div className="fr-search-empty">No matches.</div>}
        {Array.from(byFile.entries()).map(([path, hits]) => (
          <div key={path} className="fr-search-file">
            <div className="fr-search-file-name" title={path}>
              {path.split(/[/\\]/).pop()}
              <span className="fr-search-file-count">{hits.length}</span>
            </div>
            {hits.slice(0, 30).map((h, i) => (
              <div
                key={i}
                className="fr-search-hit"
                onClick={() => onOpenHit(path)}
                title={`${path}:${h.line}:${h.col}`}
              >
                <span className="fr-search-line">{h.line}</span>
                <span className="fr-search-preview">{h.preview}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}