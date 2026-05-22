/**
 * Table rendering & editing extension for CodeMirror 6.
 *
 * Strategy:
 *   - Use a StateField (not a ViewPlugin) to drive block-level decorations,
 *     which is the architecturally correct CM6 pattern for block widgets.
 *   - Replace each source line of a markdown table with its OWN single-line
 *     block widget (`Decoration.replace({widget, block: true})`). Per-line
 *     replacement keeps CM's line accounting in lockstep with the document.
 *   - Each widget provides an explicit `estimatedHeight` so the viewport
 *     manager can lay out content correctly before measurement — without
 *     this hint CM mis-sizes widgets and produces white-screen / partial-
 *     scroll regressions.
 *   - Widgets use CSS Grid (`grid-template-columns: repeat(N, 1fr)`); all
 *     rows in a table share the same column count so they line up perfectly.
 *   - Click any rendered cell to drop the cursor right into that cell's
 *     source position — the widgets for the table then suppress themselves
 *     (because the cursor is now "inside" the table) and the user edits the
 *     raw markdown for that one table. Click outside to snap back to the
 *     rendered view.
 */
import { syntaxTree } from '@codemirror/language';
import {
  EditorState,
  Range,
  RangeSetBuilder,
  StateField
} from '@codemirror/state';
import {
  Decoration,
  DecorationSet,
  EditorView,
  WidgetType
} from '@codemirror/view';

// ---------- helpers ----------

type Align = 'left' | 'center' | 'right' | 'none';
type RowKind = 'header' | 'delim' | 'body';

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Render the allowed inline markdown inside a table cell. */
function renderCellInline(src: string): string {
  let s = escapeHtml(src);
  s = s.replace(/`([^`]+)`/g, (_m, c) => `<code>${c}</code>`);
  s = s.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_m, alt, url) => `<img alt="${alt}" src="${url}">`);
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, t, u) => `<a href="${u}">${t}</a>`);
  s = s.replace(/\*\*([^*]+)\*\*/g, (_m, c) => `<strong>${c}</strong>`);
  s = s.replace(/__([^_]+)__/g, (_m, c) => `<strong>${c}</strong>`);
  s = s.replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, (_m, p, c) => `${p}<em>${c}</em>`);
  s = s.replace(/(^|[^_])_([^_\n]+)_(?!_)/g, (_m, p, c) => `${p}<em>${c}</em>`);
  s = s.replace(/~~([^~]+)~~/g, (_m, c) => `<del>${c}</del>`);
  return s;
}

/**
 * Split a `| a | b | c |` row into cells AND return the source offset
 * (relative to the start of the line text) where each cell's content begins.
 * Handles `\|` escapes.
 */
function splitRowWithOffsets(line: string): Array<{ text: string; offset: number }> {
  let start = 0;
  let end = line.length;
  if (line[start] === '|') start++;
  if (line[end - 1] === '|') end--;
  const cells: Array<{ text: string; offset: number }> = [];
  let buf = '';
  let cellStart = start;
  let i = start;
  while (i < end) {
    const c = line[i]!;
    if (c === '\\' && line[i + 1] === '|') {
      buf += '|';
      i += 2;
      continue;
    }
    if (c === '|') {
      // Trim leading whitespace by adjusting offset
      const trimmedLeft = buf.replace(/^\s+/, '');
      const offsetAdj = buf.length - trimmedLeft.length;
      cells.push({ text: trimmedLeft.replace(/\s+$/, ''), offset: cellStart + offsetAdj });
      buf = '';
      i++;
      cellStart = i;
      continue;
    }
    buf += c;
    i++;
  }
  const trimmedLeft = buf.replace(/^\s+/, '');
  const offsetAdj = buf.length - trimmedLeft.length;
  cells.push({ text: trimmedLeft.replace(/\s+$/, ''), offset: cellStart + offsetAdj });
  return cells;
}

function parseAlignments(delim: string): Align[] {
  return splitRowWithOffsets(delim).map(({ text }) => {
    const c = text.trim();
    const left = c.startsWith(':');
    const right = c.endsWith(':');
    if (left && right) return 'center';
    if (right) return 'right';
    if (left) return 'left';
    return 'none';
  });
}

// ---------- widget ----------

class TableRowWidget extends WidgetType {
  constructor(
    readonly source: string,
    readonly aligns: Align[],
    readonly columns: number,
    readonly kind: RowKind,
    readonly position: 'first' | 'middle' | 'last' | 'only',
    /** Absolute document position where this line's text begins. */
    readonly lineStart: number
  ) {
    super();
  }

  eq(other: WidgetType): boolean {
    return (
      other instanceof TableRowWidget &&
      this.source === other.source &&
      this.kind === other.kind &&
      this.position === other.position &&
      this.columns === other.columns &&
      this.lineStart === other.lineStart &&
      this.aligns.length === other.aligns.length &&
      this.aligns.every((a, i) => a === other.aligns[i])
    );
  }

  /**
   * Critical for CM viewport math: tell CodeMirror roughly how tall the
   * widget is BEFORE it gets a chance to measure. Without this hint multi-
   * widget blocks regress to white-screen rendering.
   */
  get estimatedHeight(): number {
    if (this.kind === 'delim') return 2;
    return 38;
  }

  toDOM(view: EditorView): HTMLElement {
    const posClass =
      this.position === 'first' ? ' fr-tbl-first'
      : this.position === 'last' ? ' fr-tbl-last'
      : this.position === 'only' ? ' fr-tbl-first fr-tbl-last'
      : '';
    const row = document.createElement('div');
    row.className = `fr-tbl-row fr-tbl-row-${this.kind}${posClass}`;

    if (this.kind === 'delim') {
      // Render the delimiter row as a thin divider, no cells.
      return row;
    }

    row.style.gridTemplateColumns = `repeat(${this.columns}, minmax(0, 1fr))`;

    const cells = splitRowWithOffsets(this.source);
    for (let i = 0; i < this.columns; i++) {
      const cellInfo = cells[i] ?? { text: '', offset: 0 };
      const cell = document.createElement('div');
      cell.className = 'fr-tbl-cell';
      const a = this.aligns[i] ?? 'none';
      if (a !== 'none') cell.style.textAlign = a;
      cell.innerHTML = renderCellInline(cellInfo.text);

      // Click → move cursor to the source position of this cell's content,
      // which makes the StateField re-evaluate and suppress widgets for
      // this table (cursor is "inside" now), revealing the raw markdown for
      // editing exactly where the user clicked.
      cell.addEventListener('mousedown', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const pos = this.lineStart + cellInfo.offset;
        view.dispatch({
          selection: { anchor: pos },
          scrollIntoView: true
        });
        view.focus();
      });

      row.appendChild(cell);
    }

    return row;
  }

  ignoreEvent(_event: Event): boolean {
    return false;
  }
}

// ---------- decoration computation ----------

interface TableLineInfo {
  from: number;
  to: number;
  text: string;
  kind: RowKind;
}

interface ParsedTable {
  lines: TableLineInfo[];
  aligns: Align[];
  columns: number;
}

function parseTable(
  state: EditorState,
  tableFrom: number,
  tableTo: number
): ParsedTable | null {
  const doc = state.doc;
  const firstLineNum = doc.lineAt(tableFrom).number;
  const lastLineNum = doc.lineAt(Math.min(tableTo, doc.length)).number;
  const lines: TableLineInfo[] = [];
  let delimSeen = false;
  let aligns: Align[] = [];

  for (let n = firstLineNum; n <= lastLineNum; n++) {
    const line = doc.line(n);
    if (!line.text.includes('|')) continue;
    let kind: RowKind;
    if (!delimSeen && /^[\s|:\-]+$/.test(line.text) && line.text.includes('-')) {
      kind = 'delim';
      delimSeen = true;
      aligns = parseAlignments(line.text);
    } else if (!delimSeen) {
      kind = 'header';
    } else {
      kind = 'body';
    }
    lines.push({ from: line.from, to: line.to, text: line.text, kind });
  }

  if (lines.length < 2 || !delimSeen) return null;
  return { lines, aligns, columns: aligns.length };
}

function buildTableDecorations(state: EditorState): DecorationSet {
  const ranges: Array<Range<Decoration>> = [];

  // Active line set from cursor positions
  const activeLines = new Set<number>();
  for (const r of state.selection.ranges) {
    const fromLine = state.doc.lineAt(r.from).number;
    const toLine = state.doc.lineAt(r.to).number;
    for (let i = fromLine; i <= toLine; i++) activeLines.add(i);
  }

  syntaxTree(state).iterate({
    enter(node) {
      if (node.name !== 'Table') return;

      const parsed = parseTable(state, node.from, node.to);
      if (!parsed) return;

      // Cursor inside this table? → don't render widgets, show raw markdown.
      const firstLineNum = state.doc.lineAt(node.from).number;
      const lastLineNum = state.doc.lineAt(Math.min(node.to, state.doc.length)).number;
      let active = false;
      for (let i = firstLineNum; i <= lastLineNum; i++) {
        if (activeLines.has(i)) { active = true; break; }
      }
      if (active) return;

      const lastIdx = parsed.lines.length - 1;
      parsed.lines.forEach((ln, idx) => {
        if (ln.from === ln.to) return; // skip empty lines
        const position: 'first' | 'middle' | 'last' | 'only' =
          parsed.lines.length === 1 ? 'only'
          : idx === 0 ? 'first'
          : idx === lastIdx ? 'last'
          : 'middle';
        const widget = new TableRowWidget(
          ln.text,
          parsed.aligns,
          parsed.columns,
          ln.kind,
          position,
          ln.from
        );
        const deco = Decoration.replace({ widget, block: true });
        ranges.push(deco.range(ln.from, ln.to));
      });
    }
  });

  ranges.sort((a, b) => a.from - b.from || a.value.startSide - b.value.startSide);
  const builder = new RangeSetBuilder<Decoration>();
  for (const r of ranges) builder.add(r.from, r.to, r.value);
  return builder.finish();
}

// ---------- state field + extension ----------

export const tableField = StateField.define<DecorationSet>({
  create(state) {
    return buildTableDecorations(state);
  },
  update(decos, tr) {
    if (tr.docChanged || tr.selection) {
      return buildTableDecorations(tr.state);
    }
    return decos;
  },
  provide: (f) => EditorView.decorations.from(f)
});

export const tableTheme = EditorView.theme({
  '.fr-tbl-row': {
    display: 'grid',
    fontFamily: 'var(--fr-user-font-family, var(--fr-font-sans))',
    fontSize: '0.95em',
    background: 'var(--fr-bg)',
    borderLeft: '1px solid var(--fr-border)',
    borderRight: '1px solid var(--fr-border)',
    width: '100%',
    boxSizing: 'border-box',
    lineHeight: '1.5'
  },
  '.fr-tbl-row-body': {
    borderTop: '1px solid var(--fr-border)'
  },
  '.fr-tbl-row-header': {
    background: 'var(--fr-code-bg)',
    fontWeight: '700'
  },
  '.fr-tbl-first': {
    borderTop: '1px solid var(--fr-border)',
    borderTopLeftRadius: '6px',
    borderTopRightRadius: '6px',
    marginTop: '0.6em'
  },
  '.fr-tbl-last': {
    borderBottom: '1px solid var(--fr-border)',
    borderBottomLeftRadius: '6px',
    borderBottomRightRadius: '6px',
    marginBottom: '0.6em'
  },
  '.fr-tbl-row-delim': {
    display: 'block',
    height: '0',
    padding: '0',
    margin: '0',
    border: 'none',
    background: 'transparent',
    width: '100%',
    boxSizing: 'border-box'
  },
  '.fr-tbl-cell': {
    padding: '8px 12px',
    borderRight: '1px solid var(--fr-border)',
    overflow: 'hidden',
    whiteSpace: 'normal',
    wordBreak: 'break-word',
    minWidth: '0',
    cursor: 'text'
  },
  '.fr-tbl-cell:last-child': {
    borderRight: 'none'
  },
  '.fr-tbl-cell:hover': {
    background: 'var(--fr-code-bg)'
  },
  '.fr-tbl-cell code': {
    fontFamily: 'var(--fr-font-mono)',
    background: 'var(--fr-code-bg)',
    padding: '1px 4px',
    borderRadius: '3px',
    fontSize: '0.9em'
  },
  '.fr-tbl-cell strong': { fontWeight: '700' },
  '.fr-tbl-cell em': { fontStyle: 'italic' },
  '.fr-tbl-cell a': {
    color: 'var(--fr-accent)',
    textDecoration: 'none'
  },
  '.fr-tbl-cell a:hover': {
    textDecoration: 'underline'
  }
});

export const tableExtension = [tableField, tableTheme];