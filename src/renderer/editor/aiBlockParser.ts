/**
 * Parse LLM markdown output into discrete, selectable blocks.
 *
 * Small models often wrap the actual useful content in explanation text.
 * By splitting output into blocks, the user can insert only the parts they want
 * (e.g., just the table, not the "Here's the corrected version:" preamble).
 */

export type BlockType = 'table' | 'code' | 'heading' | 'list' | 'text';

export interface OutputBlock {
  id: number;
  type: BlockType;
  content: string;
  /** Short label shown in the UI (e.g. "Table", "Code (python)", "Heading") */
  label: string;
}

/**
 * Parse a markdown string into an array of logical blocks.
 * Each block is a self-contained piece of markdown that the user can
 * independently insert into their document.
 */
export function parseOutputBlocks(markdown: string): OutputBlock[] {
  const lines = markdown.split('\n');
  const blocks: OutputBlock[] = [];
  let id = 0;

  let i = 0;
  while (i < lines.length) {
    // Skip blank lines between blocks
    if (lines[i]!.trim() === '' || lines[i]!.trim() === '---') {
      i++;
      continue;
    }

    // Fenced code block (``` ... ```)
    if (lines[i]!.trimStart().startsWith('```')) {
      const langMatch = lines[i]!.match(/```(\w*)/);
      const lang = langMatch?.[1] || '';
      const codeLines: string[] = [lines[i]!];
      i++;
      while (i < lines.length && !lines[i]!.trimStart().startsWith('```')) {
        codeLines.push(lines[i]!);
        i++;
      }
      if (i < lines.length) {
        codeLines.push(lines[i]!);
        i++;
      }
      blocks.push({
        id: id++,
        type: 'code',
        content: codeLines.join('\n'),
        label: lang ? `Code (${lang})` : 'Code block',
      });
      continue;
    }

    // Table (consecutive lines starting and ending with |)
    if (isTableLine(lines[i]!)) {
      const tableLines: string[] = [];
      while (i < lines.length && isTableLine(lines[i]!)) {
        tableLines.push(lines[i]!);
        i++;
      }
      if (tableLines.length >= 2) {
        blocks.push({
          id: id++,
          type: 'table',
          content: tableLines.join('\n'),
          label: `Table (${countTableRows(tableLines)} rows)`,
        });
      } else {
        blocks.push({ id: id++, type: 'text', content: tableLines.join('\n'), label: 'Text' });
      }
      continue;
    }

    // Heading
    if (/^#{1,6}\s/.test(lines[i]!)) {
      blocks.push({
        id: id++,
        type: 'heading',
        content: lines[i]!,
        label: 'Heading',
      });
      i++;
      continue;
    }

    // List (consecutive lines starting with - , * , + , or 1. )
    if (isListLine(lines[i]!)) {
      const listLines: string[] = [];
      while (
        i < lines.length &&
        (isListLine(lines[i]!) || (lines[i]!.trim() === '' && i + 1 < lines.length && isListLine(lines[i + 1]!)))
      ) {
        listLines.push(lines[i]!);
        i++;
      }
      blocks.push({
        id: id++,
        type: 'list',
        content: listLines.join('\n').trimEnd(),
        label: `List (${listLines.filter((l) => isListLine(l)).length} items)`,
      });
      continue;
    }

    // Text paragraph — collect consecutive non-blank, non-special lines
    const textLines: string[] = [];
    while (
      i < lines.length &&
      lines[i]!.trim() !== '' &&
      lines[i]!.trim() !== '---' &&
      !lines[i]!.trimStart().startsWith('```') &&
      !isTableLine(lines[i]!) &&
      !/^#{1,6}\s/.test(lines[i]!) &&
      !isListLine(lines[i]!)
    ) {
      textLines.push(lines[i]!);
      i++;
    }
    if (textLines.length > 0) {
      blocks.push({
        id: id++,
        type: 'text',
        content: textLines.join('\n'),
        label: 'Text',
      });
    }
  }

  return blocks;
}

function isTableLine(line: string): boolean {
  const trimmed = line.trim();
  return trimmed.startsWith('|') && trimmed.endsWith('|') && trimmed.length > 2;
}

function isListLine(line: string): boolean {
  const trimmed = line.trim();
  return /^[-*+]\s/.test(trimmed) || /^\d+\.\s/.test(trimmed);
}

function countTableRows(lines: string[]): number {
  // Exclude separator rows (|---|---|)
  return lines.filter((l) => !l.trim().match(/^\|[\s:|-]+\|$/)).length;
}

/**
 * Check if the output looks like it's mostly explanation with some content blocks.
 * Returns true if there are at least 2 block types (e.g., text + table),
 * meaning the user likely wants only certain blocks.
 */
export function hasMultipleBlockTypes(blocks: OutputBlock[]): boolean {
  const types = new Set(blocks.map((b) => b.type));
  return types.size >= 2 || blocks.length >= 3;
}
