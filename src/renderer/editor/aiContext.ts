/**
 * Smart context extraction for LLM prompts.
 * Instead of dumping the whole document, these utilities extract
 * only the relevant context each task type needs.
 */

export function extractHeadings(source: string): string {
  return source
    .split('\n')
    .filter((line) => /^#{1,6}\s/.test(line))
    .join('\n');
}

export function extractTail(source: string, maxChars: number): string {
  if (source.length <= maxChars) return source;
  const sliced = source.slice(-maxChars);
  // Start at a line boundary so we don't send a partial first line
  const newline = sliced.indexOf('\n');
  return newline >= 0 ? sliced.slice(newline + 1) : sliced;
}

export function extractAroundCursor(
  source: string,
  cursorPos: number,
  charsBefore: number,
  charsAfter: number
): string {
  const start = Math.max(0, cursorPos - charsBefore);
  const end = Math.min(source.length, cursorPos + charsAfter);
  return source.slice(start, end);
}

export function extractSelection(selection: string): string {
  return selection.trim();
}

/**
 * Build a compact structural summary of the document without sending full content.
 * Gives the model awareness of what the doc contains.
 */
export function buildContextSummary(source: string): string {
  const lines = source.split('\n');
  const headings = lines.filter((l) => /^#{1,6}\s/.test(l));
  const tableCount = (source.match(/^\|.+\|$/gm) ?? []).length > 0
    ? source.split('\n').filter((l) => /^\s*\|.+\|\s*$/.test(l) && /^\s*\|[\s:|-]+\|\s*$/.test(l)).length
    : 0;
  const codeBlocks = (source.match(/^```/gm) ?? []).length / 2;
  const wordCount = source.trim().split(/\s+/).length;

  const parts: string[] = [];
  parts.push(`Document: ${wordCount} words, ${lines.length} lines`);
  if (headings.length > 0) {
    parts.push(`Sections: ${headings.map((h) => h.trim()).join(' | ')}`);
  }
  if (codeBlocks > 0) parts.push(`Code blocks: ~${Math.floor(codeBlocks)}`);
  if (tableCount > 0) parts.push(`Tables: ~${tableCount}`);
  return parts.join('. ');
}

/**
 * Get the current section heading for the cursor position.
 */
export function getCurrentSection(source: string, cursorPos: number): string {
  const before = source.slice(0, cursorPos);
  const lines = before.split('\n');
  for (let i = lines.length - 1; i >= 0; i--) {
    if (/^#{1,6}\s/.test(lines[i]!)) {
      return lines[i]!.trim();
    }
  }
  return '';
}
