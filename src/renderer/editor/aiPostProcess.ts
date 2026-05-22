/**
 * Post-processing pipeline for LLM output.
 * Cleans up broken Unicode, model artifacts, and markdown structure issues
 * that small local models commonly produce.
 */

const REPLACEMENT_CHAR = '\uFFFD';

const BOX_DRAWING_REPLACEMENTS: Array<[RegExp, string]> = [
  [/\uFFFD+──/g, '|--'],
  [/\uFFFD+─/g, '|--'],
  [/├──/g, '|--'],
  [/└──/g, '\\--'],
  [/│/g, '|'],
  [/┌/g, '+'],
  [/┐/g, '+'],
  [/┘/g, '+'],
  [/┘/g, '+'],
  [/─/g, '-'],
  [/═/g, '='],
  [/╔/g, '+'],
  [/╗/g, '+'],
  [/╚/g, '+'],
  [/╝/g, '+'],
  [/║/g, '|'],
  [/╠/g, '+'],
  [/╣/g, '+'],
  [/╦/g, '+'],
  [/╩/g, '+'],
  [/╬/g, '+'],
];

function fixBrokenUnicode(text: string): string {
  let result = text;

  for (const [pattern, replacement] of BOX_DRAWING_REPLACEMENTS) {
    result = result.replace(pattern, replacement);
  }

  // Replace clusters of replacement characters with empty string
  result = result.replace(/\uFFFD{2,}/g, '');
  // Single replacement chars that aren't adjacent to known patterns — remove
  result = result.replace(/\uFFFD/g, '');

  return result;
}

function stripModelArtifacts(text: string): string {
  let result = text;

  // Remove thinking/analysis blocks (Qwen, DeepSeek style)
  result = result.replace(/<think>[\s\S]*?<\/think>\s*/g, '');
  result = result.replace(/<\|think\|>[\s\S]*?<\|\/think\|>\s*/g, '');
  result = result.replace(/<analysis>[\s\S]*?<\/analysis>\s*/g, '');
  result = result.replace(/<reflection>[\s\S]*?<\/reflection>\s*/g, '');
  // Orphaned closing tags (opening tag was consumed by streaming or hidden)
  result = result.replace(/<\/think>\s*/g, '');
  result = result.replace(/<\/analysis>\s*/g, '');
  result = result.replace(/<\/reflection>\s*/g, '');
  // Orphaned opening tags (model started thinking but never closed)
  result = result.replace(/<think>\s*/g, '');
  result = result.replace(/<analysis>\s*/g, '');
  result = result.replace(/<reflection>\s*/g, '');

  // Remove common stop/control tokens
  const artifacts = [
    '<|im_end|>',
    '<|im_start|>',
    '<|endoftext|>',
    '<|end|>',
    '<|eot_id|>',
    '<|start_header_id|>',
    '<|end_header_id|>',
    '</s>',
    '<s>',
    '[INST]',
    '[/INST]',
    '<<SYS>>',
    '<</SYS>>',
  ];
  for (const tok of artifacts) {
    while (result.includes(tok)) {
      result = result.replace(tok, '');
    }
  }

  // Remove role markers that leak through
  result = result.replace(/^(assistant|user|system):\s*/gim, '');

  return result;
}

function fixMarkdownStructure(text: string): string {
  let result = text;

  // Close unclosed fenced code blocks
  const fenceMatches = result.match(/^```/gm);
  if (fenceMatches && fenceMatches.length % 2 !== 0) {
    result = result.trimEnd() + '\n```';
  }

  // Trim trailing incomplete table row (no closing pipe)
  const lines = result.split('\n');
  while (lines.length > 0) {
    const last = lines[lines.length - 1]!;
    const trimmed = last.trim();
    // If the last line starts with a pipe but doesn't end with one, it's incomplete
    if (trimmed.startsWith('|') && !trimmed.endsWith('|') && trimmed.length > 1) {
      lines.pop();
      continue;
    }
    // If the last line is just a stray pipe or whitespace
    if (trimmed === '|' || trimmed === '') {
      lines.pop();
      continue;
    }
    break;
  }
  result = lines.join('\n');

  return result;
}

function normalizeWhitespace(text: string): string {
  let result = text;

  // Collapse 3+ consecutive blank lines to 2
  result = result.replace(/\n{4,}/g, '\n\n\n');

  // Trim trailing whitespace on each line
  result = result
    .split('\n')
    .map((line) => line.trimEnd())
    .join('\n');

  // Trim leading/trailing whitespace from the whole output
  result = result.trim();

  return result;
}

/**
 * Strip common explanation patterns that small models prepend/append to their output.
 * Used for edit tasks where we only want the corrected content, not "Here's the fix:".
 */
export function stripExplanation(text: string): string {
  let result = text;

  // Common preamble patterns: "Here's the corrected version:", "Sure! Here is...", etc.
  const preamblePatterns = [
    /^(?:here(?:'s| is) (?:the |a |my )?(?:corrected|fixed|improved|simplified|rewritten|updated|formal|casual) (?:version|text|output|content|result)[:\s]*\n+)/i,
    /^(?:sure[!.]?\s*(?:here(?:'s| is)[^.]*[.:]?\s*\n+)?)/i,
    /^(?:of course[!.]?\s*(?:here(?:'s| is)[^.]*[.:]?\s*\n+)?)/i,
    /^(?:certainly[!.]?\s*(?:here(?:'s| is)[^.]*[.:]?\s*\n+)?)/i,
    /^(?:the (?:corrected|fixed|improved|simplified|rewritten) (?:text|version|content) is[:\s]*\n+)/i,
    /^(?:i've (?:corrected|fixed|improved|simplified|rewritten)[^.]*[.:]?\s*\n+)/i,
    /^(?:below is[^.]*[.:]?\s*\n+)/i,
    /^(?:output[:\s]*\n+)/i,
    /^(?:result[:\s]*\n+)/i,
    /^(?:fixed[:\s]*\n+)/i,
    /^(?:rewritten[:\s]*\n*)/i,
    /^(?:revised[:\s]*\n*)/i,
    /^(?:corrected[:\s]*\n*)/i,
    /^(?:translated[:\s]*\n*)/i,
    /^(?:simplified[:\s]*\n*)/i,
    /^(?:expanded[:\s]*\n*)/i,
    /^(?:converted[:\s]*\n*)/i,
    /^(?:formatted[:\s]*\n*)/i,
    /^(?:updated[:\s]*\n*)/i,
    /^(?:rewritten (?:text|version|in)[^:]*[:\s]*\n*)/i,
  ];

  for (const pat of preamblePatterns) {
    result = result.replace(pat, '');
  }

  // Strip trailing explanations: "This ensures...", "I've also...", "Note:"
  const trailingPatterns = [
    /\n+(?:this (?:ensures|fixes|corrects|makes|improves)[^\n]*\.?\s*)$/i,
    /\n+(?:i(?:'ve| have) (?:also |)(?:corrected|fixed|improved|simplified|rewritten|converted)[^\n]*\.?\s*)$/i,
    /\n+(?:note:\s*[^\n]*\.?\s*)$/i,
    /\n+(?:explanation[:\s]*[\s\S]*)$/i,
    /\n+(?:changes (?:made|include)[:\s]*[\s\S]*)$/i,
    /\n+(?:\*\*explanation[^\n]*\*\*[\s\S]*)$/i,
    /\n+(?:\*\*analysis[^\n]*\*\*[\s\S]*)$/i,
    /\n+(?:---\s*\n+\*\*[\s\S]*)$/i,
    /\n+(?:the original[^\n]*(?:had|was|is|contained)[^\n]*[\s\S]*)$/i,
  ];

  for (const pat of trailingPatterns) {
    result = result.replace(pat, '');
  }

  return result.trim();
}

function truncateDegenerateRepetition(text: string): string {
  const lines = text.split('\n');
  const seen = new Map<string, number>();
  let cutoff = lines.length;

  for (let i = 0; i < lines.length; i++) {
    const normalized = lines[i]!.trim();
    if (normalized.length <= 10 || /^[-*|:\s]+$/.test(normalized)) continue;
    const count = (seen.get(normalized) ?? 0) + 1;
    seen.set(normalized, count);
    if (count >= 4) {
      cutoff = i;
      break;
    }
  }

  if (cutoff < lines.length) {
    return lines.slice(0, cutoff).join('\n');
  }

  const words = text.toLowerCase().split(/\s+/);
  for (let i = 0; i < words.length - 5; i++) {
    if (words[i] === words[i + 1] && words[i] === words[i + 2] && words[i] === words[i + 3] && words[i] === words[i + 4] && (words[i]?.length ?? 0) >= 3) {
      const charPos = text.toLowerCase().indexOf(words.slice(i, i + 5).join(' '));
      if (charPos > 0) return text.slice(0, charPos).trimEnd();
    }
  }

  return text;
}

export function postProcessLlmOutput(raw: string): string {
  let text = raw;
  text = stripModelArtifacts(text);
  text = fixBrokenUnicode(text);
  text = truncateDegenerateRepetition(text);
  text = fixMarkdownStructure(text);
  text = normalizeWhitespace(text);
  return text;
}

/**
 * Heavier post-processing for edit tasks: also strips explanation text.
 */
export function postProcessEditOutput(raw: string): string {
  let text = postProcessLlmOutput(raw);
  text = stripExplanation(text);
  return text;
}
