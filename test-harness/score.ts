/**
 * Output scoring/assertion functions.
 * Each returns { pass, reason? } so the runner can build a clear report.
 */

export interface AssertionResult {
  pass: boolean;
  name: string;
  reason?: string;
}

export type Assertion = (output: string) => AssertionResult;

const EXPLANATION_PATTERNS = [
  /^here(?:'s| is) (?:the |a |my )?(?:corrected|fixed|improved|simplified|rewritten)/im,
  /^sure[!.]/im,
  /^of course[!.]/im,
  /^certainly[!.]/im,
  /^i(?:'ve| have) (?:corrected|fixed|improved|simplified|rewritten)/im,
  /^below is/im,
  /^## analysis/im,
  /^### problems? identified/im,
  /^### solution/im,
  /this ensures/im,
  /^explanation:/im,
  /^changes (?:made|include)/im,
  /^note:/im,
  /^let me/im,
  /^i'll /im,
  /^rewritten:/im,
  /^revised:/im,
  /^corrected:/im,
  /^result:/im,
  /^output:/im,
  /^translated:/im,
  /^simplified:/im,
  /^expanded:/im,
  /^converted:/im,
  /^formatted:/im,
  /^updated:/im,
  /^modified text:/im,
  /^edited version:/im,
  /^the (?:corrected|fixed|rewritten|updated) (?:text|version) is/im,
  /^(?:in|for) (?:this|the) (?:corrected|fixed|rewritten|updated)/im,
];

const BOX_DRAWING = /[─│┌┐└┘├┤┬┴┼═║╔╗╚╝╠╣╦╩╬►←]/;

export function noEcho(existingText: string): Assertion {
  return (output: string) => {
    const lines = existingText.split('\n').filter((l) => l.trim().length > 20);
    for (const line of lines) {
      const normalized = line.trim();
      if (output.includes(normalized)) {
        return {
          pass: false,
          name: 'noEcho',
          reason: `Output contains existing doc line: "${normalized.slice(0, 60)}..."`,
        };
      }
    }
    return { pass: true, name: 'noEcho' };
  };
}

export function noExplanation(): Assertion {
  return (output: string) => {
    for (const pat of EXPLANATION_PATTERNS) {
      const match = output.match(pat);
      if (match) {
        return {
          pass: false,
          name: 'noExplanation',
          reason: `Found explanation pattern: "${match[0]}"`,
        };
      }
    }
    return { pass: true, name: 'noExplanation' };
  };
}

export function validTable(): Assertion {
  return (output: string) => {
    const lines = output.trim().split('\n').filter((l) => l.trim().length > 0);
    if (lines.length < 3) {
      return { pass: false, name: 'validTable', reason: `Only ${lines.length} non-empty lines (need >=3)` };
    }
    for (let i = 0; i < lines.length; i++) {
      const t = lines[i]!.trim();
      if (!t.startsWith('|') || !t.endsWith('|')) {
        return { pass: false, name: 'validTable', reason: `Line ${i + 1} not a pipe row: "${t.slice(0, 50)}"` };
      }
    }
    const sep = lines[1]!.trim();
    if (!/^\|[\s:|-]+\|$/.test(sep)) {
      return { pass: false, name: 'validTable', reason: `Line 2 is not a separator: "${sep}"` };
    }
    return { pass: true, name: 'validTable' };
  };
}

export function validMermaid(): Assertion {
  return (output: string) => {
    if (!output.includes('```mermaid')) {
      return { pass: false, name: 'validMermaid', reason: 'No ```mermaid fence found' };
    }
    const fenceCount = (output.match(/^```/gm) ?? []).length;
    if (fenceCount % 2 !== 0) {
      return { pass: false, name: 'validMermaid', reason: `Unclosed fences (${fenceCount} backtick lines)` };
    }
    const mermaidKeywords = /\b(graph|flowchart|sequenceDiagram|classDiagram|stateDiagram|erDiagram|gantt|pie|mindmap)\b/;
    if (!mermaidKeywords.test(output)) {
      return { pass: false, name: 'validMermaid', reason: 'No mermaid diagram type keyword found' };
    }
    return { pass: true, name: 'validMermaid' };
  };
}

export function validMarkdown(): Assertion {
  return (output: string) => {
    const fenceCount = (output.match(/^```/gm) ?? []).length;
    if (fenceCount % 2 !== 0) {
      return { pass: false, name: 'validMarkdown', reason: `Unclosed fences (${fenceCount} backtick lines)` };
    }
    if (BOX_DRAWING.test(output)) {
      const match = output.match(BOX_DRAWING);
      return { pass: false, name: 'validMarkdown', reason: `Box-drawing char: "${match![0]}" (U+${match![0].charCodeAt(0).toString(16).toUpperCase()})` };
    }
    return { pass: true, name: 'validMarkdown' };
  };
}

export function maxLength(n: number): Assertion {
  return (output: string) => {
    if (output.length > n) {
      return { pass: false, name: `maxLength(${n})`, reason: `Output is ${output.length} chars` };
    }
    return { pass: true, name: `maxLength(${n})` };
  };
}

export function minLength(n: number): Assertion {
  return (output: string) => {
    if (output.length < n) {
      return { pass: false, name: `minLength(${n})`, reason: `Output is ${output.length} chars (need >=${n})` };
    }
    return { pass: true, name: `minLength(${n})` };
  };
}

export function containsText(str: string): Assertion {
  return (output: string) => {
    if (!output.toLowerCase().includes(str.toLowerCase())) {
      return { pass: false, name: `contains("${str}")`, reason: `Text not found in output` };
    }
    return { pass: true, name: `contains("${str}")` };
  };
}

export function notContainsText(str: string): Assertion {
  return (output: string) => {
    if (output.toLowerCase().includes(str.toLowerCase())) {
      return { pass: false, name: `notContains("${str}")`, reason: `Text "${str}" found in output but should not be` };
    }
    return { pass: true, name: `notContains("${str}")` };
  };
}

export function noHeading(heading: string): Assertion {
  return (output: string) => {
    const pattern = new RegExp(`^#{1,6}\\s+${escapeRegex(heading.replace(/^#+\s*/, ''))}`, 'im');
    if (pattern.test(output)) {
      return { pass: false, name: `noHeading("${heading}")`, reason: `Output repeats existing heading` };
    }
    return { pass: true, name: `noHeading("${heading}")` };
  };
}

export function validList(): Assertion {
  return (output: string) => {
    const lines = output.trim().split('\n').filter((l) => l.trim().length > 0);
    if (lines.length < 2) {
      return { pass: false, name: 'validList', reason: `Only ${lines.length} items` };
    }
    for (let i = 0; i < lines.length; i++) {
      const t = lines[i]!.trim();
      if (!/^[-*+]\s/.test(t) && !/^\d+\.\s/.test(t)) {
        return { pass: false, name: 'validList', reason: `Line ${i + 1} not a list item: "${t.slice(0, 40)}"` };
      }
    }
    return { pass: true, name: 'validList' };
  };
}

export function validCodeBlock(): Assertion {
  return (output: string) => {
    const trimmed = output.trim();
    if (!trimmed.startsWith('```')) {
      return { pass: false, name: 'validCodeBlock', reason: 'Does not start with ```' };
    }
    if (!trimmed.endsWith('```')) {
      return { pass: false, name: 'validCodeBlock', reason: 'Does not end with ```' };
    }
    const fenceCount = (trimmed.match(/^```/gm) ?? []).length;
    if (fenceCount !== 2) {
      return { pass: false, name: 'validCodeBlock', reason: `Expected 2 fences, got ${fenceCount}` };
    }
    return { pass: true, name: 'validCodeBlock' };
  };
}

export function shorterThan(original: string): Assertion {
  return (output: string) => ({
    pass: output.length < original.length,
    name: 'shorterThan',
    reason: `Output (${output.length}) not shorter than input (${original.length})`,
  });
}

export function tableRowCount(min: number, max?: number): Assertion {
  return (output: string) => {
    const dataRows = output.trim().split('\n').filter(
      (l) => l.trim().startsWith('|') && !/^\|[\s:|-]+\|$/.test(l.trim())
    );
    const count = dataRows.length;
    if (count < min) {
      return { pass: false, name: `tableRowCount(>=${min})`, reason: `Only ${count} data rows (need >=${min})` };
    }
    if (max !== undefined && count > max) {
      return { pass: false, name: `tableRowCount(<=${max})`, reason: `${count} data rows (need <=${max})` };
    }
    return { pass: true, name: `tableRows(${count})` };
  };
}

export function tableColumnCount(expected: number): Assertion {
  return (output: string) => {
    const firstRow = output.trim().split('\n')[0] ?? '';
    const cols = firstRow.split('|').filter((c) => c.trim().length > 0).length;
    if (cols !== expected) {
      return { pass: false, name: `tableCols(${expected})`, reason: `Header has ${cols} columns, expected ${expected}` };
    }
    return { pass: true, name: `tableCols(${expected})` };
  };
}

export function listItemCount(min: number, max?: number): Assertion {
  return (output: string) => {
    const items = output.trim().split('\n').filter(
      (l) => /^\s*[-*+]\s/.test(l) || /^\s*\d+\.\s/.test(l)
    );
    if (items.length < min) {
      return { pass: false, name: `listItems(>=${min})`, reason: `Only ${items.length} items (need >=${min})` };
    }
    if (max !== undefined && items.length > max) {
      return { pass: false, name: `listItems(<=${max})`, reason: `${items.length} items (need <=${max})` };
    }
    return { pass: true, name: `listItems(${items.length})` };
  };
}

export function matchesRegex(pattern: RegExp, label?: string): Assertion {
  return (output: string) => ({
    pass: pattern.test(output),
    name: label ?? `regex(${pattern.source.slice(0, 30)})`,
    reason: `Pattern /${pattern.source.slice(0, 50)}/ not found`,
  });
}

export function notMatchesRegex(pattern: RegExp, label?: string): Assertion {
  return (output: string) => ({
    pass: !pattern.test(output),
    name: label ?? `noRegex(${pattern.source.slice(0, 30)})`,
    reason: `Pattern /${pattern.source.slice(0, 50)}/ found but should not be`,
  });
}

export function nonEmpty(): Assertion {
  return (output: string) => ({
    pass: output.trim().length > 0,
    name: 'nonEmpty',
    reason: 'Output is empty',
  });
}

export function lineCount(min: number, max?: number): Assertion {
  return (output: string) => {
    const count = output.trim().split('\n').length;
    if (count < min) {
      return { pass: false, name: `lineCount(>=${min})`, reason: `Only ${count} lines (need >=${min})` };
    }
    if (max !== undefined && count > max) {
      return { pass: false, name: `lineCount(<=${max})`, reason: `${count} lines (need <=${max})` };
    }
    return { pass: true, name: `lineCount(${count})` };
  };
}

export function noCodeFence(): Assertion {
  return (output: string) => {
    if (/^```/m.test(output)) {
      return { pass: false, name: 'noCodeFence', reason: 'Output contains a code fence but should not' };
    }
    return { pass: true, name: 'noCodeFence' };
  };
}

export function startsWithHeading(level: number): Assertion {
  return (output: string) => {
    const pat = new RegExp(`^#{${level}}\\s+\\S`);
    return {
      pass: pat.test(output.trim()),
      name: `startsWithH${level}`,
      reason: `Output does not start with an h${level} heading`,
    };
  };
}

export function containsLink(): Assertion {
  return (output: string) => ({
    pass: /\[.+?\]\(.+?\)/.test(output) || /https?:\/\/\S+/.test(output),
    name: 'containsLink',
    reason: 'No markdown link or URL found',
  });
}

export function containsImage(): Assertion {
  return (output: string) => ({
    pass: /!\[.*?\]\(.+?\)/.test(output),
    name: 'containsImage',
    reason: 'No markdown image syntax found',
  });
}

/**
 * Output must be meaningfully different from the input text.
 * Catches cases where the model echoes the input unchanged.
 */
export function notIdenticalTo(input: string): Assertion {
  return (output: string) => {
    const normIn = input.trim().replace(/\s+/g, ' ').toLowerCase();
    const normOut = output.trim().replace(/\s+/g, ' ').toLowerCase();
    if (normIn === normOut) {
      return { pass: false, name: 'notIdentical', reason: 'Output is identical to input — model did nothing' };
    }
    const similarity = longestCommonSubstringRatio(normIn, normOut);
    if (similarity > 0.9 && normIn.length > 30) {
      return { pass: false, name: 'notIdentical', reason: `Output is ${Math.round(similarity * 100)}% similar to input` };
    }
    return { pass: true, name: 'notIdentical' };
  };
}

/**
 * Output must not be just a rephrasing of the instruction itself.
 * Catches "add roadmap" → "Project Roadmap: Q1-Q4 Milestones" with zero actual content.
 */
export function notJustInstruction(instruction: string): Assertion {
  return (output: string) => {
    const instrWords = new Set(instruction.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter((w) => w.length > 3));
    const outWords = output.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter((w) => w.length > 3);
    if (outWords.length === 0) {
      return { pass: false, name: 'notJustInstruction', reason: 'Output has no meaningful words' };
    }
    const overlap = outWords.filter((w) => instrWords.has(w)).length;
    const ratio = overlap / outWords.length;
    if (ratio > 0.8 && outWords.length < 15) {
      return { pass: false, name: 'notJustInstruction', reason: `Output is ${Math.round(ratio * 100)}% instruction words — likely just echoing the request` };
    }
    return { pass: true, name: 'notJustInstruction' };
  };
}

/**
 * Output must have substantive content, not just a heading or one-liner.
 * minLines = minimum non-empty lines, minWords = minimum total words.
 */
export function substantive(minWords: number, minLines = 1): Assertion {
  return (output: string) => {
    const lines = output.trim().split('\n').filter((l) => l.trim().length > 0);
    const words = output.trim().split(/\s+/).length;
    if (lines.length < minLines) {
      return { pass: false, name: `substantive(${minWords}w,${minLines}l)`, reason: `Only ${lines.length} lines (need >=${minLines})` };
    }
    if (words < minWords) {
      return { pass: false, name: `substantive(${minWords}w,${minLines}l)`, reason: `Only ${words} words (need >=${minWords})` };
    }
    return { pass: true, name: `substantive(${words}w,${lines.length}l)` };
  };
}

/**
 * Output must not contain placeholder/generic fillers.
 */
export function noPlaceholders(): Assertion {
  const PLACEHOLDERS = [
    /\bFeature [A-F]\b/,
    /\bItem [A-F]\b/,
    /\bThing [A-F]\b/,
    /<<[^>]+>>/,
    /\bTODO\b/i,
    /\bTBD\b/,
    /\blorem ipsum\b/i,
    /\bfoo\b.*\bbar\b.*\bbaz\b/i,
  ];
  return (output: string) => {
    for (const pat of PLACEHOLDERS) {
      if (pat.test(output)) {
        const match = output.match(pat);
        return { pass: false, name: 'noPlaceholders', reason: `Found placeholder: "${match![0]}"` };
      }
    }
    return { pass: true, name: 'noPlaceholders' };
  };
}

/**
 * Detects degenerate repetitive output — a model stuck in a loop.
 * Checks for repeated words, repeated phrases, and repeated lines.
 */
export function noRepetition(): Assertion {
  return (output: string) => {
    // Check for word-level repetition (same word 5+ times in a row)
    const wordRepeat = output.match(/\b(\w{3,})\b(?:\s+\1\b){4,}/i);
    if (wordRepeat) {
      return { pass: false, name: 'noRepetition', reason: `Word "${wordRepeat[1]}" repeated 5+ times consecutively` };
    }

    // Check for phrase-level repetition (same 3+ word phrase repeated 3+ times)
    // Exclude structural markdown patterns (list markers, table cells, checkboxes)
    const words = output.toLowerCase().split(/\s+/);
    if (words.length > 20) {
      for (let phraseLen = 3; phraseLen <= 6; phraseLen++) {
        const phraseCounts = new Map<string, number>();
        for (let i = 0; i <= words.length - phraseLen; i++) {
          const phrase = words.slice(i, i + phraseLen).join(' ');
          if (phrase.includes('|') || phrase.includes('- [') || phrase.includes('- [ ]') || phrase.includes('- [x]')) continue;
          phraseCounts.set(phrase, (phraseCounts.get(phrase) ?? 0) + 1);
        }
        for (const [phrase, count] of phraseCounts) {
          if (count >= 4 && !['output only the', 'the text below'].includes(phrase)) {
            return { pass: false, name: 'noRepetition', reason: `Phrase "${phrase}" repeated ${count} times` };
          }
        }
      }
    }

    // Check for line-level repetition (same line repeated 3+ times)
    // Exclude short structural lines (list bullets, table separators, blank-ish)
    const lines = output.trim().split('\n').map(l => l.trim()).filter(l => l.length > 10 && !/^[-*+|:\s]+$/.test(l));
    const lineCounts = new Map<string, number>();
    for (const line of lines) {
      lineCounts.set(line, (lineCounts.get(line) ?? 0) + 1);
    }
    for (const [line, count] of lineCounts) {
      if (count >= 4) {
        return { pass: false, name: 'noRepetition', reason: `Line "${line.slice(0, 60)}..." repeated ${count} times` };
      }
    }

    return { pass: true, name: 'noRepetition' };
  };
}

function longestCommonSubstringRatio(a: string, b: string): number {
  if (a.length === 0 || b.length === 0) return 0;
  const shorter = a.length <= b.length ? a : b;
  const longer = a.length > b.length ? a : b;
  let maxLen = 0;
  for (let i = 0; i < shorter.length && shorter.length - i > maxLen; i++) {
    for (let len = shorter.length - i; len > maxLen; len--) {
      if (longer.includes(shorter.substring(i, i + len))) {
        maxLen = len;
        break;
      }
    }
  }
  return maxLen / shorter.length;
}

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
