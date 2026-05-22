import React, { useEffect, useMemo, useRef, useState } from 'react';
import { renderMarkdown } from '../markdown/renderer';
import { mountMermaid } from '../markdown/mermaidMount';
import { ContextMenu, ContextMenuItem } from '../ui/ContextMenu';
import {
  findTables,
  replaceTable,
  insertRow,
  deleteRow,
  insertColumn,
  deleteColumn,
  setColumnAlign,
  deleteTable,
  Align
} from '../markdown/tableEdits';

interface PreviewProps {
  source: string;
  docPath?: string | null;
  onChangeSource?: (next: string) => void;
  onImageClick?: (src: string) => void;
}

interface CtxState {
  x: number;
  y: number;
  tableIdx: number;
  rowIdx: number;
  colIdx: number;
}

function resolveImageSrcs(html: string, docPath: string | null | undefined): string {
  if (!docPath) return html;
  const dirSep = docPath.lastIndexOf('/') >= 0 ? '/' : '\\';
  const dir = docPath.substring(0, docPath.lastIndexOf(dirSep));
  const baseUrl = 'file:///' + dir.replace(/\\/g, '/');
  return html.replace(
    /(<img\s[^>]*?\bsrc=")(?!https?:\/\/|data:|file:\/\/)([^"]+)(")/gi,
    (_m, pre, src, post) => `${pre}${baseUrl}/${src}${post}`
  );
}

export function Preview({ source, docPath, onChangeSource, onImageClick }: PreviewProps): JSX.Element {
  const result = useMemo(() => renderMarkdown(source), [source]);
  const html = useMemo(() => resolveImageSrcs(result.html, docPath), [result.html, docPath]);
  const ref = useRef<HTMLDivElement>(null);
  const [ctx, setCtx] = useState<CtxState | null>(null);

  useEffect(() => {
    if (ref.current) void mountMermaid(ref.current);
  }, [result.html]);

  // Open external links via OS browser
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const onClick = (e: MouseEvent): void => {
      const target = e.target as HTMLElement;
      const a = target.closest('a');
      if (a) {
        const href = a.getAttribute('href') ?? '';
        if (/^https?:\/\//i.test(href)) {
          e.preventDefault();
          void window.framora.openExternal(href);
        }
      }
      // Image click → lightbox
      const img = target.closest('img');
      if (img && onImageClick) {
        e.preventDefault();
        onImageClick((img as HTMLImageElement).src);
      }
    };
    root.addEventListener('click', onClick);
    return () => root.removeEventListener('click', onClick);
  }, [onImageClick]);

  // Right-click on table cells → context menu
  useEffect(() => {
    const root = ref.current;
    if (!root || !onChangeSource) return;
    const onContext = (e: MouseEvent): void => {
      const target = e.target as HTMLElement;
      const cell = target.closest('th, td') as HTMLTableCellElement | null;
      if (!cell) return;
      const tr = cell.parentElement as HTMLTableRowElement;
      const table = cell.closest('table') as HTMLTableElement;
      const allTables = Array.from(root.querySelectorAll('table'));
      const tableIdx = allTables.indexOf(table);
      // Determine row index: header row is rowIdx = -1
      const isHeader = cell.tagName === 'TH';
      let rowIdx = -1;
      if (!isHeader) {
        const tbody = tr.parentElement as HTMLTableSectionElement;
        rowIdx = Array.from(tbody.children).indexOf(tr);
      }
      const colIdx = Array.from(tr.children).indexOf(cell);
      e.preventDefault();
      setCtx({ x: e.clientX, y: e.clientY, tableIdx, rowIdx, colIdx });
    };
    root.addEventListener('contextmenu', onContext);
    return () => root.removeEventListener('contextmenu', onContext);
  }, [onChangeSource, source]);

  const applyTableEdit = (transform: (src: string) => string): void => {
    if (!onChangeSource) return;
    onChangeSource(transform(source));
  };

  const ctxItems = useMemo<ContextMenuItem[]>(() => {
    if (!ctx) return [];
    const tables = findTables(source);
    const t = tables[ctx.tableIdx];
    if (!t) return [];
    const isHeader = ctx.rowIdx < 0;
    const align = (a: Align): ContextMenuItem => ({
      label: a === 'none' ? 'Default' : a.charAt(0).toUpperCase() + a.slice(1),
      onClick: () =>
        applyTableEdit((s) => {
          const tt = findTables(s)[ctx.tableIdx]!;
          return replaceTable(s, ctx.tableIdx, setColumnAlign(tt, ctx.colIdx, a));
        })
    });
    return [
      {
        label: 'Insert row above',
        disabled: isHeader,
        onClick: () =>
          applyTableEdit((s) => {
            const tt = findTables(s)[ctx.tableIdx]!;
            return replaceTable(s, ctx.tableIdx, insertRow(tt, ctx.rowIdx, 'above'));
          })
      },
      {
        label: 'Insert row below',
        onClick: () =>
          applyTableEdit((s) => {
            const tt = findTables(s)[ctx.tableIdx]!;
            return replaceTable(s, ctx.tableIdx, insertRow(tt, ctx.rowIdx, 'below'));
          })
      },
      {
        label: 'Delete row',
        disabled: isHeader,
        onClick: () =>
          applyTableEdit((s) => {
            const tt = findTables(s)[ctx.tableIdx]!;
            return replaceTable(s, ctx.tableIdx, deleteRow(tt, ctx.rowIdx));
          })
      },
      { label: '', separator: true },
      {
        label: 'Insert column left',
        onClick: () =>
          applyTableEdit((s) => {
            const tt = findTables(s)[ctx.tableIdx]!;
            return replaceTable(s, ctx.tableIdx, insertColumn(tt, ctx.colIdx, 'left'));
          })
      },
      {
        label: 'Insert column right',
        onClick: () =>
          applyTableEdit((s) => {
            const tt = findTables(s)[ctx.tableIdx]!;
            return replaceTable(s, ctx.tableIdx, insertColumn(tt, ctx.colIdx, 'right'));
          })
      },
      {
        label: 'Delete column',
        onClick: () =>
          applyTableEdit((s) => {
            const tt = findTables(s)[ctx.tableIdx]!;
            return replaceTable(s, ctx.tableIdx, deleteColumn(tt, ctx.colIdx));
          })
      },
      { label: '', separator: true },
      {
        label: 'Column alignment',
        submenu: [align('left'), align('center'), align('right'), align('none')]
      },
      { label: '', separator: true },
      {
        label: 'Delete table',
        onClick: () => applyTableEdit((s) => deleteTable(s, ctx.tableIdx))
      }
    ];
  }, [ctx, source]);

  return (
    <div className="fr-preview">
      <article
        ref={ref}
        className="fr-rendered"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {ctx && (
        <ContextMenu
          x={ctx.x}
          y={ctx.y}
          items={ctxItems}
          onClose={() => setCtx(null)}
        />
      )}
    </div>
  );
}