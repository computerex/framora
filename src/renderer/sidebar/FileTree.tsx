import React, { useState } from 'react';
import type { FolderEntry } from '../../preload';

interface FileTreeProps {
  folder: { path: string; tree: FolderEntry } | null;
  currentPath: string | null;
  onOpenFile: (path: string) => void;
  onOpenFolder: () => void;
  onRefresh: () => void;
}

export function FileTree({
  folder,
  currentPath,
  onOpenFile,
  onOpenFolder,
  onRefresh
}: FileTreeProps): JSX.Element {
  if (!folder) {
    return (
      <div className="fr-tree-empty">
        <p>No folder open.</p>
        <button className="fr-btn small" onClick={onOpenFolder}>
          Open Folder…
        </button>
      </div>
    );
  }
  return (
    <div className="fr-tree">
      <div className="fr-tree-header">
        <span className="fr-tree-root" title={folder.path}>
          {folder.tree.name}
        </span>
        <button className="fr-icon-btn" title="Refresh" onClick={onRefresh}>
          ⟳
        </button>
        <button className="fr-icon-btn" title="Open another folder" onClick={onOpenFolder}>
          📁
        </button>
      </div>
      <ul className="fr-tree-list">
        {(folder.tree.children ?? []).map((c) => (
          <TreeNode
            key={c.path}
            node={c}
            depth={0}
            currentPath={currentPath}
            onOpenFile={onOpenFile}
          />
        ))}
      </ul>
    </div>
  );
}

interface TreeNodeProps {
  node: FolderEntry;
  depth: number;
  currentPath: string | null;
  onOpenFile: (path: string) => void;
}

function TreeNode({ node, depth, currentPath, onOpenFile }: TreeNodeProps): JSX.Element {
  const [open, setOpen] = useState(depth < 1);
  const isActive = !node.isDirectory && currentPath === node.path;
  const indent = { paddingLeft: 8 + depth * 14 };

  if (node.isDirectory) {
    return (
      <li>
        <div
          className="fr-tree-row dir"
          style={indent}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="fr-tree-caret">{open ? '▾' : '▸'}</span>
          <span className="fr-tree-name">{node.name}</span>
        </div>
        {open && node.children && (
          <ul>
            {node.children.map((c) => (
              <TreeNode
                key={c.path}
                node={c}
                depth={depth + 1}
                currentPath={currentPath}
                onOpenFile={onOpenFile}
              />
            ))}
          </ul>
        )}
      </li>
    );
  }
  return (
    <li>
      <div
        className={`fr-tree-row file ${isActive ? 'active' : ''}`}
        style={indent}
        onClick={() => onOpenFile(node.path)}
        title={node.path}
      >
        <span className="fr-tree-name">{node.name}</span>
      </div>
    </li>
  );
}