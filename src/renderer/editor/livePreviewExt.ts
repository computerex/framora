/**
 * Live Preview extension for CodeMirror 6.
 *
 * Implements Obsidian/Typora-style inline rendering where markdown syntax
 * characters (e.g. **, #, `) are HIDDEN on lines that do NOT contain the
 * cursor, and SHOWN as ghost tags on the line that DOES contain it.
 *
 * Inline formatting (bold, italic, code, headings, links) is styled in place
 * via CSS marks, so the editor reads as the rendered document while you type.
 *
 * Tables get a special treatment: when the cursor is OUTSIDE the table they
 * are replaced wholesale with a rendered <table> block widget; when the
 * cursor is INSIDE the table the raw markdown is shown for editing.
 */
import { syntaxTree } from '@codemirror/language';
import { Range, RangeSetBuilder } from '@codemirror/state';
import {
  Decoration,
  DecorationSet,
  EditorView,
  ViewPlugin,
  ViewUpdate,
  WidgetType
} from '@codemirror/view';

const hideDeco = Decoration.replace({});

const headingClass: Record<string, string> = {
  ATXHeading1: 'fr-lp-h1',
  ATXHeading2: 'fr-lp-h2',
  ATXHeading3: 'fr-lp-h3',
  ATXHeading4: 'fr-lp-h4',
  ATXHeading5: 'fr-lp-h5',
  ATXHeading6: 'fr-lp-h6'
};

const inlineClass: Record<string, string> = {
  StrongEmphasis: 'fr-lp-strong',
  Emphasis: 'fr-lp-em',
  InlineCode: 'fr-lp-code',
  Strikethrough: 'fr-lp-strike',
  // Link is handled explicitly below (widget replacement when inactive)
};

/** Mark nodes whose marker tokens (HeaderMark / EmphasisMark / CodeMark / LinkMark / etc.) should be hidden. */
const hideMarkerNames = new Set([
  'HeaderMark',
  'EmphasisMark',
  'CodeMark',
  'StrikethroughMark',
  'LinkMark',
  'QuoteMark',
  'ListMark'
]);

// ---------- Table widget ----------

type Align = 'left' | 'center' | 'right' | 'none';

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Render the inline markdown allowed inside a table cell. */
function renderCellInline(src: string): string {
  // Escape first, then re-introduce the allowed inline constructs.
  let s = escapeHtml(src);
  // Inline code: `x`  — process before * and ** so backticks aren't molested
  s = s.replace(/`([^`]+)`/g, (_m, c) => `<code>${c}</code>`);
  // Images: ![alt](url)
  s = s.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_m, alt, url) => `<img alt="${alt}" src="${url}">`);
  // Links: [text](url)
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, t, u) => `<a href="${u}">${t}</a>`);
  // Bold: **x** (before italic)
  s = s.replace(/\*\*([^*]+)\*\*/g, (_m, c) => `<strong>${c}</strong>`);
  s = s.replace(/__([^_]+)__/g, (_m, c) => `<strong>${c}</strong>`);
  // Italic: *x* / _x_
  s = s.replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, (_m, p, c) => `${p}<em>${c}</em>`);
  s = s.replace(/(^|[^_])_([^_\n]+)_(?!_)/g, (_m, p, c) => `${p}<em>${c}</em>`);
  // Strikethrough: ~~x~~
  s = s.replace(/~~([^~]+)~~/g, (_m, c) => `<del>${c}</del>`);
  return s;
}

/** Split a `| a | b | c |` row into cells, respecting backslash-escaped pipes. */
function splitRow(line: string): string[] {
  // Strip a single leading and trailing pipe if present.
  let l = line.trim();
  if (l.startsWith('|')) l = l.slice(1);
  if (l.endsWith('|')) l = l.slice(0, -1);
  const cells: string[] = [];
  let buf = '';
  for (let i = 0; i < l.length; i++) {
    const c = l[i];
    if (c === '\\' && l[i + 1] === '|') {
      buf += '|';
      i++;
    } else if (c === '|') {
      cells.push(buf.trim());
      buf = '';
    } else {
      buf += c;
    }
  }
  cells.push(buf.trim());
  return cells;
}

function parseAlignments(delim: string): Align[] {
  return splitRow(delim).map((cell) => {
    const c = cell.trim();
    const left = c.startsWith(':');
    const right = c.endsWith(':');
    if (left && right) return 'center';
    if (right) return 'right';
    if (left) return 'left';
    return 'none';
  });
}

/**
 * Per-line widget for one row of a markdown table. Each table source line
 * is replaced with its own single-line block widget — never a multi-line
 * widget — so CodeMirror's line counting and viewport measurement stay
 * perfectly synchronized with the underlying document.
 *
 * Adjacent row widgets line up visually because they all use CSS Grid with
 * the same `grid-template-columns` value (computed from column count + per-
 * column alignment).
 */
type RowKind = 'header' | 'delim' | 'body';

class TableRowWidget extends WidgetType {
  constructor(
    readonly source: string,
    readonly aligns: Align[],
    readonly columns: number,
    readonly kind: RowKind,
    readonly position: 'first' | 'middle' | 'last' | 'only'
  ) {
    super();
  }

  eq(other: WidgetType): boolean {
    return (
      other instanceof TableRowWidget &&
      other.source === this.source &&
      other.kind === this.kind &&
      other.position === this.position &&
      other.columns === this.columns &&
      other.aligns.length === this.aligns.length &&
      other.aligns.every((a, i) => a === this.aligns[i])
    );
  }

  toDOM(): HTMLElement {
    const row = document.createElement('div');
    const posClass =
      this.position === 'first' ? ' fr-lp-trow-first'
      : this.position === 'last' ? ' fr-lp-trow-last'
      : this.position === 'only' ? ' fr-lp-trow-first fr-lp-trow-last'
      : '';
    row.className = `fr-lp-trow fr-lp-trow-${this.kind}${posClass}`;
    row.style.gridTemplateColumns = `repeat(${this.columns}, minmax(0, 1fr))`;

    // The delimiter row collapses to a thin divider — no cell content.
    if (this.kind === 'delim') {
      row.classList.add('fr-lp-trow-delim');
      // Keep DOM with 0 cells; styling makes it appear as a sub-pixel band.
      return row;
    }

    const cells = splitRow(this.source);
    for (let i = 0; i < this.columns; i++) {
      const cell = document.createElement('div');
      cell.className = 'fr-lp-tcell';
      const a = this.aligns[i] ?? 'none';
      if (a !== 'none') cell.style.textAlign = a;
      cell.innerHTML = renderCellInline(cells[i] ?? '');
      row.appendChild(cell);
    }
    return row;
  }

  ignoreEvent(): boolean {
    return false;
  }
}

/**
 * Walk the Table node's children to collect each line's [from, to] range
 * along with its kind (header / delim / body). Returns null if the structure
 * doesn't look like a valid table.
 */
function collectTableLines(
  view: EditorView,
  tableFrom: number,
  tableTo: number
): { lines: Array<{ from: number; to: number; text: string; kind: RowKind }>; aligns: Align[]; columns: number } | null {
  const doc = view.state.doc;
  const firstLineNum = doc.lineAt(tableFrom).number;
  const lastLineNum = doc.lineAt(Math.min(tableTo, doc.length)).number;

  const out: Array<{ from: number; to: number; text: string; kind: RowKind }> = [];
  let delimSeen = false;
  let aligns: Align[] = [];

  for (let n = firstLineNum; n <= lastLineNum; n++) {
    const line = doc.line(n);
    const text = line.text;
    if (!text.includes('|')) continue;
    let kind: RowKind;
    // Delimiter line looks like  |---|:---:|...|  (only |, :, -, space)
    if (!delimSeen && /^[\s|:\-]+$/.test(text) && text.includes('-')) {
      kind = 'delim';
      delimSeen = true;
      aligns = parseAlignments(text);
    } else if (!delimSeen) {
      kind = 'header';
    } else {
      kind = 'body';
    }
    out.push({ from: line.from, to: line.to, text, kind });
  }

  if (out.length < 2 || !delimSeen) return null;
  const columns = aligns.length;
  return { lines: out, aligns, columns };
}

// ---------- Link widget ----------

/**
 * Replaces a `[text](url)` span with a rendered anchor element when the
 * cursor is not on the link's line.  Clicking opens the URL via Electron's
 * shell.openExternal so it always opens in the default browser.
 */
class LinkWidget extends WidgetType {
  constructor(readonly display: string, readonly href: string) {
    super();
  }

  eq(other: WidgetType): boolean {
    return (
      other instanceof LinkWidget &&
      other.display === this.display &&
      other.href === this.href
    );
  }

  toDOM(): HTMLElement {
    const a = document.createElement('a');
    a.className = 'fr-lp-link-widget';
    a.textContent = this.display;
    a.title = this.href;
    a.setAttribute('data-href', this.href);
    a.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (this.href) void window.framora.openExternal(this.href);
    });
    return a;
  }

  ignoreEvent(): boolean {
    return false; // allow click events
  }
}

/** Extract display text and href from a `[text](url)` source string. */
function parseLinkSrc(src: string): { display: string; href: string } | null {
  // Match [display](href) — href may contain parens if balanced, but we take
  // the simplest greedy approach: first `)` that closes the `(`.
  const m = src.match(/^\[([^\]]*)\]\(([^)]*)\)/);
  if (!m) return null;
  // Strip optional title: `url "title"` → `url`
  const href = m[2].trim().replace(/\s+"[^"]*"$/, '').trim();
  return { display: m[1], href };
}

// ---------- Decoration builder ----------

interface BuiltDecorations {
  inline: DecorationSet;
  block: DecorationSet;
  atomic: DecorationSet;
}

function buildDecorations(view: EditorView): BuiltDecorations {
  const inlineRanges: Array<Range<Decoration>> = [];
  const blockRanges: Array<Range<Decoration>> = [];
  const atomicRanges: Array<Range<Decoration>> = [];

  // Determine all "active" lines: any line that intersects a selection range.
  const activeLines = new Set<number>();
  for (const r of view.state.selection.ranges) {
    const from = view.state.doc.lineAt(r.from).number;
    const to = view.state.doc.lineAt(r.to).number;
    for (let i = from; i <= to; i++) activeLines.add(i);
  }

  const isActiveLine = (pos: number): boolean =>
    activeLines.has(view.state.doc.lineAt(pos).number);

  const isTableActive = (from: number, to: number): boolean => {
    const first = view.state.doc.lineAt(from).number;
    const last = view.state.doc.lineAt(Math.min(to, view.state.doc.length)).number;
    for (let i = first; i <= last; i++) {
      if (activeLines.has(i)) return true;
    }
    return false;
  };

  // Tracks Table ranges that we've already replaced as a block widget, so the
  // iterate callback knows to skip styling decorations inside them.
  const replacedTables: Array<{ from: number; to: number }> = [];
  const insideReplacedTable = (pos: number): boolean => {
    for (const t of replacedTables) {
      if (pos >= t.from && pos < t.to) return true;
    }
    return false;
  };

  for (const { from, to } of view.visibleRanges) {
    syntaxTree(view.state).iterate({
      from,
      to,
      enter: (node) => {
        const name = node.name;

        // ---- Tables are handled by a dedicated extension (tableExt.ts) ----
        // We skip the whole subtree here so this plugin doesn't fight the
        // table StateField's block decorations.
        if (name === 'Table') {
          replacedTables.push({ from: node.from, to: node.to });
          return false;
        }
        if (insideReplacedTable(node.from)) return false;
        void blockRanges;
        void isTableActive;

        // Block-level: heading container → add class for whole range
        if (headingClass[name]) {
          inlineRanges.push(
            Decoration.mark({ class: headingClass[name] }).range(node.from, node.to)
          );
          return;
        }

        // Inline formatting containers → add class
        if (inlineClass[name]) {
          if (node.from < node.to) {
            inlineRanges.push(
              Decoration.mark({ class: inlineClass[name] }).range(node.from, node.to)
            );
          }
          return;
        }

        // ---- Links: widget when inactive, raw + ghost when active ----
        if (name === 'Link') {
          if (!isActiveLine(node.from)) {
            // Replace the entire [text](url) span with a rendered anchor.
            // Using a widget replacement avoids the CM6 overlap issue where
            // mixing mark + replace decorations on the same range silently
            // discards the visible text.
            const src = view.state.doc.sliceString(node.from, node.to);
            const link = parseLinkSrc(src);
            if (link) {
              inlineRanges.push(
                Decoration.replace({ widget: new LinkWidget(link.display, link.href) })
                  .range(node.from, node.to)
              );
            }
            return false; // children already consumed by the replacement
          } else {
            // Active line: show raw markdown styled in accent colour.
            inlineRanges.push(
              Decoration.mark({ class: 'fr-lp-link' }).range(node.from, node.to)
            );
            // fall through → children visited so LinkMark/URL get ghost marks
          }
          return;
        }

        // Marker tokens (the * # ` etc.) → hide unless the line is active
        if (hideMarkerNames.has(name)) {
          if (!isActiveLine(node.from)) {
            // For HeaderMark also eat the trailing space after it
            let end = node.to;
            if (name === 'HeaderMark') {
              const ch = view.state.doc.sliceString(end, end + 1);
              if (ch === ' ') end += 1;
            }
            if (node.from < end) {
              const r = hideDeco.range(node.from, end);
              inlineRanges.push(r);
              atomicRanges.push(r);
            }
          } else {
            // Show as ghost on the active line
            inlineRanges.push(
              Decoration.mark({ class: 'fr-lp-ghost' }).range(node.from, node.to)
            );
          }
          return;
        }

        // Hide URL part of links when not on active line: [text](url)
        if (name === 'URL') {
          if (!isActiveLine(node.from)) {
            const r = hideDeco.range(node.from, node.to);
            inlineRanges.push(r);
            atomicRanges.push(r);
          } else {
            inlineRanges.push(
              Decoration.mark({ class: 'fr-lp-ghost' }).range(node.from, node.to)
            );
          }
          return;
        }

        // Fenced code: style block
        if (name === 'FencedCode') {
          inlineRanges.push(
            Decoration.mark({ class: 'fr-lp-fenced' }).range(node.from, node.to)
          );
          return;
        }
      }
    });
  }

  // Decorations must be sorted by `from`, then by `startSide`.
  const sortFn = (a: Range<Decoration>, b: Range<Decoration>): number =>
    a.from - b.from || a.value.startSide - b.value.startSide;
  inlineRanges.sort(sortFn);
  blockRanges.sort(sortFn);
  atomicRanges.sort(sortFn);

  const inlineBuilder = new RangeSetBuilder<Decoration>();
  for (const r of inlineRanges) inlineBuilder.add(r.from, r.to, r.value);
  const blockBuilder = new RangeSetBuilder<Decoration>();
  for (const r of blockRanges) blockBuilder.add(r.from, r.to, r.value);
  const atomicBuilder = new RangeSetBuilder<Decoration>();
  for (const r of atomicRanges) atomicBuilder.add(r.from, r.to, r.value);

  return {
    inline: inlineBuilder.finish(),
    block: blockBuilder.finish(),
    atomic: atomicBuilder.finish()
  };
}

/**
 * Main plugin — computes inline, block, and atomic decoration sets and
 * exposes the INLINE set via its own `decorations` field. A companion
 * plugin below exposes the BLOCK set as a separate decoration source
 * (CodeMirror requires block and inline decorations to live in different
 * sources or it mis-renders).
 */
const livePreviewInlinePlugin = ViewPlugin.fromClass(
  class {
    inline: DecorationSet;
    block: DecorationSet;
    atomic: DecorationSet;
    constructor(view: EditorView) {
      const built = buildDecorations(view);
      this.inline = built.inline;
      this.block = built.block;
      this.atomic = built.atomic;
    }
    update(u: ViewUpdate): void {
      if (u.docChanged || u.viewportChanged || u.selectionSet) {
        const built = buildDecorations(u.view);
        this.inline = built.inline;
        this.block = built.block;
        this.atomic = built.atomic;
      }
    }
  },
  {
    decorations: (v) => v.inline,
    provide: (plugin) =>
      EditorView.atomicRanges.of(
        (view) => view.plugin(plugin)?.atomic ?? Decoration.none
      )
  }
);

/** Companion plugin: mirrors the block decoration set from the main plugin. */
const livePreviewBlockPlugin = ViewPlugin.fromClass(
  class {
    decorations: DecorationSet;
    constructor(view: EditorView) {
      this.decorations = view.plugin(livePreviewInlinePlugin)?.block ?? Decoration.none;
    }
    update(u: ViewUpdate): void {
      this.decorations =
        u.view.plugin(livePreviewInlinePlugin)?.block ?? Decoration.none;
    }
  },
  {
    decorations: (v) => v.decorations
  }
);

/** Combined extension — register both plugins together. */
export const livePreviewPlugin = [livePreviewInlinePlugin, livePreviewBlockPlugin];

/** Theme that styles the inline marks added by the plugin. */
export const livePreviewTheme = EditorView.theme({
  '.fr-lp-h1': { fontSize: '1.9em', fontWeight: '700', lineHeight: '1.25' },
  '.fr-lp-h2': { fontSize: '1.55em', fontWeight: '700', lineHeight: '1.3' },
  '.fr-lp-h3': { fontSize: '1.3em', fontWeight: '700' },
  '.fr-lp-h4': { fontSize: '1.1em', fontWeight: '700' },
  '.fr-lp-h5': { fontSize: '1.0em', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em' },
  '.fr-lp-h6': { fontSize: '0.95em', fontWeight: '700', color: 'var(--fr-fg-muted)' },
  '.fr-lp-strong': { fontWeight: '700' },
  '.fr-lp-em': { fontStyle: 'italic' },
  '.fr-lp-strike': { textDecoration: 'line-through', color: 'var(--fr-fg-muted)' },
  '.fr-lp-code': {
    fontFamily: 'var(--fr-font-mono)',
    background: 'var(--fr-code-bg)',
    padding: '1px 4px',
    borderRadius: '3px',
    fontSize: '0.9em'
  },
  '.fr-lp-link': { color: 'var(--fr-accent)' },
  '.fr-lp-link-widget': {
    color: 'var(--fr-accent)',
    textDecoration: 'underline',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: 'inherit'
  },
  '.fr-lp-ghost': { color: 'var(--fr-fg-muted)', opacity: '0.55' },
  '.fr-lp-fenced': {
    fontFamily: 'var(--fr-font-mono)',
    background: 'var(--fr-code-bg)',
    display: 'block',
    borderRadius: '4px'
  },
  // Per-line table row widgets (inline replace, displayed as blocks)
  '.fr-lp-trow': {
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
  '.fr-lp-trow-first': {
    borderTop: '1px solid var(--fr-border)',
    borderTopLeftRadius: '6px',
    borderTopRightRadius: '6px'
  },
  '.fr-lp-trow-last': {
    borderBottom: '1px solid var(--fr-border)',
    borderBottomLeftRadius: '6px',
    borderBottomRightRadius: '6px'
  },
  '.fr-lp-trow-header': {
    background: 'var(--fr-code-bg)',
    fontWeight: '700'
  },
  '.fr-lp-trow-body': {
    borderTop: '1px solid var(--fr-border)'
  },
  '.fr-lp-trow-delim': {
    display: 'block',
    height: '2px',
    background: 'var(--fr-border)',
    padding: '0',
    borderTop: 'none'
  },
  '.fr-lp-tcell': {
    padding: '8px 12px',
    borderRight: '1px solid var(--fr-border)',
    overflow: 'hidden',
    whiteSpace: 'normal',
    wordBreak: 'break-word',
    minWidth: '0'
  },
  '.fr-lp-tcell:last-child': {
    borderRight: 'none'
  },
  '.fr-lp-tcell code': {
    fontFamily: 'var(--fr-font-mono)',
    background: 'var(--fr-code-bg)',
    padding: '1px 4px',
    borderRadius: '3px',
    fontSize: '0.9em'
  },
  '.fr-lp-tcell strong': { fontWeight: '700' },
  '.fr-lp-tcell em': { fontStyle: 'italic' },
  '.fr-lp-tcell a': {
    color: 'var(--fr-accent)',
    textDecoration: 'none'
  }
});
