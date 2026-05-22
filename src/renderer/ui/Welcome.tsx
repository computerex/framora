import React, { useEffect, useState } from 'react';

interface WelcomeProps {
  onOpen: () => void;
  onNew: () => void;
  onOpenRecent?: (path: string) => void;
  onBrowseTemplates?: () => void;
}

export function Welcome({ onOpen, onNew, onOpenRecent, onBrowseTemplates }: WelcomeProps): JSX.Element {
  const [recents, setRecents] = useState<string[]>([]);

  useEffect(() => {
    void window.framora.getRecents().then(setRecents);
  }, []);

  return (
    <div className="fr-welcome">
      <div className="fr-welcome-inner">
        <h1 className="fr-welcome-title">Framora</h1>
        <p className="fr-welcome-sub">A clean, hybrid live-preview Markdown editor.</p>
        <div className="fr-welcome-actions">
          <button className="fr-btn primary" onClick={onNew}>
            New Document
          </button>
          <button className="fr-btn" onClick={onOpen}>
            Open File…
          </button>
          {onBrowseTemplates && (
            <button className="fr-btn" onClick={onBrowseTemplates}>
              Browse Templates
            </button>
          )}
        </div>
        {recents.length > 0 && (
          <div className="fr-recents">
            <h3>Recent</h3>
            <ul>
              {recents.slice(0, 8).map((p) => (
                <li key={p}>
                  <button
                    className="fr-recent-btn"
                    title={p}
                    onClick={() => { if (onOpenRecent) onOpenRecent(p); }}
                  >
                    <span className="fr-recent-name">{p.split(/[/\\]/).pop()}</span>
                    <span className="fr-recent-path">{p}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}