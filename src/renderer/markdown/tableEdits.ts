/**
 * Markdown table editor helpers.
 *
 * GFM tables look like:
 *   | h1 | h2 | h3 |
 *   |----|:--:|---:|
 *   | a  | b  | c  |
 *   | d  | e  | f  |
 *
 * We locate the Nth table in the source by scanning lines, then modify its
 * row/col structure and emit the edited source.
 */

export type Align = 'left' | 'center' | 'right' | 'none';

export interface TableLocation {
  startLine: number; // 0-based — line index of the header row
  endLine: number;   // 0-based — last data row line index (inclusive)
}

export interface ParsedTable {
  loc: TableLocation;
  header: string[];
  align: Align[];
  rows: string[][];
}

const TABLE_LINE = /^\s*\|.+\|\s*$/;
const SEPARATOR_LINE = /^\s*\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)+\|?\s*$/;

function splitRow(line: string): string[] {
  // Strip optional leading/trailing pipe and split
  let s = line.trim();
  if (s.startsWith('|')) s = s.slice(1);
  if (s.endsWith('|')) s = s.slice(0, -1);
  return s.split('|').map((c) => c.trim());
}

function parseAlign(separatorRow: string): Align[] {
  return splitRow(separatorRow).map((cell) => {
    const left = cell.startsWith(':');
    const right = cell.endsWith(':');
    if (left && right) return 'center';
    if (right) return 'right';
    if (left) return 'left';
    return 'none';
  });
}

function emitAlignRow(align: Align[]): string {
  const cells = align.map((a) => {
    switch (a) {
      case 'left':   return ':---';
      case 'right':  return '---:';
      case 'center': return ':---:';
      default:       return '---';
    }
  });
  return '| ' + cells.join(' | ') + ' |';
}

function emitRow(cells: string[]): string {
  return '| ' + cells.join(' | ') + ' |';
}

/** Find all GFM tables in the source. */
export function findTables(source: string): ParsedTable[] {
  const lines = source.split('\n');
  const tables: ParsedTable[] = [];
  let i = 0;
  while (i < lines.length - 1) {
    if (TABLE_LINE.test(lines[i]!) && SEPARATOR_LINE.test(lines[i + 1]!)) {
      const header = splitRow(lines[i]!);
      const align = parseAlign(lines[i + 1]!);
      const startLine = i;
      let j = i + 2;
      const rows: string[][] = [];
      while (j < lines.length && TABLE_LINE.test(lines[j]!)) {
        rows.push(splitRow(lines[j]!));
        j++;
      }
      tables.push({
        loc: { startLine, endLine: j - 1 },
        header,
        align,
        rows
      });
      i = j;
    } else {
      i++;
    }
  }
  return tables;
}

/** Replace the table at index `tableIdx` with new contents. */
export function replaceTable(source: string, tableIdx: number, t: ParsedTable): string {
  const tables = findTables(source);
  if (tableIdx < 0 || tableIdx >= tables.length) return source;
  const target = tables[tableIdx]!;
  const lines = source.split('\n');
  const newBlock = [
    emitRow(t.header),
    emitAlignRow(t.align),
    ...t.rows.map(emitRow)
  ];
  const before = lines.slice(0, target.loc.startLine);
  const after = lines.slice(target.loc.endLine + 1);
  return [...before, ...newBlock, ...after].join('\n');
}

// ---------- High-level operations ----------

function clone(t: ParsedTable): ParsedTable {
  return {
    loc: { ...t.loc },
    header: [...t.header],
    align: [...t.align],
    rows: t.rows.map((r) => [...r])
  };
}

function ensureWidth(t: ParsedTable, width: number): void {
  while (t.header.length < width) t.header.push('');
  while (t.align.length < width) t.align.push('none');
  for (const r of t.rows) {
    while (r.length < width) r.push('');
  }
}

export function insertRow(table: ParsedTable, atRowIdx: number, position: 'above' | 'below'): ParsedTable {
  const t = clone(table);
  const w = t.header.length;
  ensureWidth(t, w);
  const newRow = new Array<string>(w).fill('');
  // atRowIdx -1 means the header row (only "below" makes sense — inserts as first data row)
  if (atRowIdx < 0) {
    if (position === 'below') t.rows.unshift(newRow);
    return t;
  }
  const insertAt = position === 'above' ? atRowIdx : atRowIdx + 1;
  t.rows.splice(insertAt, 0, newRow);
  return t;
}

export function deleteRow(table: ParsedTable, atRowIdx: number): ParsedTable {
  const t = clone(table);
  if (atRowIdx >= 0 && atRowIdx < t.rows.length) t.rows.splice(atRowIdx, 1);
  return t;
}

export function insertColumn(table: ParsedTable, atColIdx: number, position: 'left' | 'right'): ParsedTable {
  const t = clone(table);
  const insertAt = position === 'left' ? atColIdx : atColIdx + 1;
  t.header.splice(insertAt, 0, '');
  t.align.splice(insertAt, 0, 'none');
  for (const r of t.rows) r.splice(insertAt, 0, '');
  return t;
}

export function deleteColumn(table: ParsedTable, atColIdx: number): ParsedTable {
  const t = clone(table);
  if (atColIdx >= 0 && atColIdx < t.header.length) {
    t.header.splice(atColIdx, 1);
    t.align.splice(atColIdx, 1);
    for (const r of t.rows) r.splice(atColIdx, 1);
  }
  return t;
}

export function setColumnAlign(table: ParsedTable, atColIdx: number, align: Align): ParsedTable {
  const t = clone(table);
  if (atColIdx >= 0 && atColIdx < t.align.length) t.align[atColIdx] = align;
  return t;
}

export function deleteTable(source: string, tableIdx: number): string {
  const tables = findTables(source);
  if (tableIdx < 0 || tableIdx >= tables.length) return source;
  const target = tables[tableIdx]!;
  const lines = source.split('\n');
  const before = lines.slice(0, target.loc.startLine);
  const after = lines.slice(target.loc.endLine + 1);
  return [...before, ...after].join('\n');
}