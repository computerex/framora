import React, { useState } from 'react';
import { FileTree } from './FileTree';
import { Outline } from './Outline';
import { SearchPanel } from './SearchPanel';
import type { FolderEntry } from '../../preload';

type Tab = 'files' | 'outline' | 'search';

interface SidebarProps {
  folder: { path: string; tree: FolderEntry } | null;
  currentPath: string | null;
  headings: Array<{ level: number; text: string; id: string }>;
  onOpenFile: (path: string) => void;
  onOpenFolder: () => void;
  onScrollToHeading: (id: string) => void;
  onRefreshFolder: () => void;
}

export function Sidebar({
  folder,
  currentPath,
  headings,
  onOpenFile,
  onOpenFolder,
  onScrollToHeading,
  onRefreshFolder
}: SidebarProps): JSX.Element {
  const [tab, setTab] = useState<Tab>(folder ? 'files' : 'outline');

  return (
    <aside className="fr-sidebar">
      <div className="fr-sidebar-tabs" role="tablist">
        <button
          role="tab"
          className={`fr-sidebar-tab ${tab === 'files' ? 'active' : ''}`}
          onClick={() => setTab('files')}
          title="Files"
        >
          Files
        </button>
        <button
          role="tab"
          className={`fr-sidebar-tab ${tab === 'outline' ? 'active' : ''}`}
          onClick={() => setTab('outline')}
          title="Outline"
        >
          Outline
        </button>
        <button
          role="tab"
          className={`fr-sidebar-tab ${tab === 'search' ? 'active' : ''}`}
          onClick={() => setTab('search')}
          title="Search"
        >
          Search
        </button>
      </div>

      <div className="fr-sidebar-body">
        {tab === 'files' && (
          <FileTree
            folder={folder}
            currentPath={currentPath}
            onOpenFile={onOpenFile}
            onOpenFolder={onOpenFolder}
            onRefresh={onRefreshFolder}
          />
        )}
        {tab === 'outline' && (
          <Outline headings={headings} onJump={onScrollToHeading} />
        )}
        {tab === 'search' && (
          <SearchPanel folder={folder?.path ?? null} onOpenHit={onOpenFile} />
        )}
      </div>
    </aside>
  );
}