import React from 'react';

interface StatusBarProps {
  content: string;
  path: string | null;
  dirty: boolean;
  mode: string;
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
  aiPanelOpen: boolean;
  onToggleAi: () => void;
}

function countWords(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}

export function StatusBar({
  content,
  path,
  dirty,
  mode,
  sidebarOpen,
  onToggleSidebar,
  aiPanelOpen,
  onToggleAi
}: StatusBarProps): JSX.Element {
  const words = countWords(content);
  const chars = content.length;
  const lines = content.split('\n').length;
  const name = path ? path.split(/[/\\]/).pop() : 'Untitled';

  return (
    <div className="fr-statusbar">
      <span className="fr-status-left">
        <button
          className="fr-icon-btn"
          title={sidebarOpen ? 'Hide sidebar' : 'Show sidebar'}
          onClick={onToggleSidebar}
        >
          {sidebarOpen ? '◧' : '◨'}
        </button>
        <span className="fr-status-file">{name}</span>
        {dirty && <span className="fr-dot">●</span>}
      </span>
      <span className="fr-status-right">
        <span
          className="fr-status-ai"
          onClick={onToggleAi}
          title={aiPanelOpen ? 'Hide AI assistant' : 'Show AI assistant'}
        >
          ✦ AI
        </span>
        <span>{mode === 'split' ? 'Split View' : mode === 'source' ? 'Editor' : 'Preview'}</span>
        <span>{lines} lines</span>
        <span>{words} words</span>
        <span>{chars} chars</span>
      </span>
    </div>
  );
}