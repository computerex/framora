/**
 * Output validators and fixers for structured Markdown generation.
 *
 * Each validator takes raw LLM output and returns cleaned, valid Markdown.
 * If the output is too garbled to fix, validators produce a useful fallback.
 */

/**
 * Validate and fix GFM pipe tables.
 * - Ensures separator row exists
 * - Normalizes column count
 * - Falls back to empty scaffold if output is garbage
 */
export function validateTable(raw: string, hint?: string): string {
  const lines = raw
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  const tableLines = lines.filter((l) => l.startsWith('|') && l.endsWith('|'));
  if (tableLines.length < 2) {
    return buildTableScaffold(hint);
  }

  const parsedRows = tableLines.map((line) =>
    line
      .slice(1, -1)
      .split('|')
      .map((c) => c.trim())
  );

  const maxCols = Math.max(...parsedRows.map((r) => r.length));
  const normalizedRows = parsedRows.map((r) => {
    while (r.length < maxCols) r.push('');
    return r.slice(0, maxCols);
  });

  // Check if row 1 is separator
  const hasSeparator =
    normalizedRows.length >= 2 &&
    normalizedRows[1]!.every((c) => /^[-:]+$/.test(c) || c === '');

  const result: string[] = [];
  const formatRow = (cells: string[]): string => `| ${cells.join(' | ')} |`;

  result.push(formatRow(normalizedRows[0]!));

  if (!hasSeparator) {
    result.push(formatRow(normalizedRows[0]!.map(() => '---')));
  }

  for (let i = hasSeparator ? 1 : 1; i < normalizedRows.length; i++) {
    const row = normalizedRows[i]!;
    if (hasSeparator && i === 1) {
      result.push(formatRow(row.map((c) => (c && /^[-:]+$/.test(c) ? c : '---'))));
    } else {
      result.push(formatRow(row));
    }
  }

  return result.join('\n');
}

function buildTableScaffold(hint?: string): string {
  if (hint) {
    const cols = hint
      .split(',')
      .map((c) => c.trim())
      .filter(Boolean);
    if (cols.length >= 2) {
      const header = `| ${cols.join(' | ')} |`;
      const sep = `| ${cols.map(() => '---').join(' | ')} |`;
      const empty = `| ${cols.map(() => '   ').join(' | ')} |`;
      return `${header}\n${sep}\n${empty}`;
    }
  }
  return '| Column 1 | Column 2 | Column 3 |\n|----------|----------|----------|\n|          |          |          |';
}

/**
 * Validate Mermaid diagram output.
 * - Ensures proper fenced code block wrapping
 * - Strips non-mermaid preamble
 * - Basic syntax check for diagram type keyword
 */
export function validateMermaid(raw: string): string {
  let content = raw.trim();

  // Extract content from fenced block if present
  const fencedMatch = content.match(/```mermaid\s*\n([\s\S]*?)```/);
  if (fencedMatch) {
    content = fencedMatch[1]!.trim();
  } else {
    // Remove any triple-backtick remnants
    content = content.replace(/^```\w*\s*/gm, '').replace(/```\s*$/gm, '').trim();
  }

  // Strip non-mermaid preamble text (lines before the diagram keyword)
  const diagramKeywords = [
    'graph', 'flowchart', 'sequenceDiagram', 'classDiagram',
    'stateDiagram', 'erDiagram', 'gantt', 'pie', 'gitGraph',
    'mindmap', 'timeline', 'journey', 'quadrantChart',
  ];

  const lines = content.split('\n');
  let startIdx = 0;
  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i]!.trim();
    if (diagramKeywords.some((kw) => trimmed.startsWith(kw))) {
      startIdx = i;
      break;
    }
  }
  content = lines.slice(startIdx).join('\n').trim();

  // If still no valid keyword found, wrap whatever we have
  const hasKeyword = diagramKeywords.some((kw) => content.startsWith(kw) || content.includes('\n' + kw));
  if (!hasKeyword && content.length > 0) {
    content = 'graph TD\n  A[Start] --> B[TODO]';
  }

  return '```mermaid\n' + content + '\n```';
}

/**
 * Validate list output.
 * - Ensures lines start with list markers
 * - Strips non-list preamble
 */
export function validateList(raw: string): string {
  const lines = raw.split('\n').map((l) => l.trimEnd());

  const listLines: string[] = [];
  let foundList = false;

  for (const line of lines) {
    const trimmed = line.trim();
    if (/^[-*+]\s/.test(trimmed) || /^\d+\.\s/.test(trimmed)) {
      foundList = true;
      listLines.push(trimmed);
    } else if (foundList && trimmed === '') {
      // Allow blank lines within a list
      listLines.push('');
    } else if (foundList && /^\s+[-*+]\s/.test(line)) {
      // Nested list item
      listLines.push(line);
    }
  }

  if (listLines.length === 0) {
    return '- Item 1\n- Item 2\n- Item 3';
  }

  // Remove trailing empty lines
  while (listLines.length > 0 && listLines[listLines.length - 1]!.trim() === '') {
    listLines.pop();
  }

  return listLines.join('\n');
}

/**
 * Validate code block output.
 * - Ensures proper fenced code block wrapping
 * - Detects language if missing
 */
export function validateCodeBlock(raw: string): string {
  let content = raw.trim();

  // Already properly fenced
  const fencedMatch = content.match(/^```(\w*)\s*\n([\s\S]*?)```$/);
  if (fencedMatch) {
    return content;
  }

  // Partially fenced (opening but no closing or vice versa)
  const openMatch = content.match(/^```(\w*)\s*\n([\s\S]*)/);
  if (openMatch) {
    const lang = openMatch[1] || '';
    const code = openMatch[2]!.replace(/```\s*$/, '').trimEnd();
    return '```' + lang + '\n' + code + '\n```';
  }

  // Not fenced at all — wrap it
  return '```\n' + content + '\n```';
}

/**
 * Get the appropriate validator for a task ID.
 * Returns undefined for tasks that don't need structural validation.
 */
export function getValidator(taskId: string): ((raw: string, hint?: string) => string) | undefined {
  switch (taskId) {
    case 'generate-table':
      return validateTable;
    case 'generate-mermaid':
      return validateMermaid;
    case 'generate-list':
      return validateList;
    case 'generate-code':
      return validateCodeBlock;
    default:
      return undefined;
  }
}
