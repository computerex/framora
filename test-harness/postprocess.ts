/**
 * Minimal post-processing for test harness — mirrors what Framora applies.
 * Kept separate from Framora's aiPostProcess.ts to avoid DOM/Electron deps.
 */

const ARTIFACTS = [
  /<think>[\s\S]*?<\/think>\s*/g,
  /<\|think\|>[\s\S]*?<\|\/think\|>\s*/g,
  /<analysis>[\s\S]*?<\/analysis>\s*/g,
  /<reflection>[\s\S]*?<\/reflection>\s*/g,
];

const ARTIFACT_TOKENS = [
  '<|im_end|>', '<|im_start|>', '<|endoftext|>', '<|end|>',
  '<|eot_id|>', '<|start_header_id|>', '<|end_header_id|>',
  '</s>', '<s>', '[INST]', '[/INST]', '<<SYS>>', '<</SYS>>',
];

const PREAMBLE_PATTERNS = [
  /^(?:here(?:'s| is) (?:the |a |my )?(?:corrected|fixed|improved|simplified|rewritten|updated|formal|casual|converted) (?:version|text|output|content|result|table)[:\s]*\n+)/i,
  /^(?:sure[!.]?\s*(?:here(?:'s| is)[^.]*[.:]?\s*\n+)?)/i,
  /^(?:of course[!.]?\s*(?:here(?:'s| is)[^.]*[.:]?\s*\n+)?)/i,
  /^(?:certainly[!.]?\s*(?:here(?:'s| is)[^.]*[.:]?\s*\n+)?)/i,
  /^(?:i've (?:corrected|fixed|improved|simplified|rewritten|converted)[^.]*[.:]?\s*\n+)/i,
  /^(?:below is[^.]*[.:]?\s*\n+)/i,
  /^(?:rewritten:\s*\n*)/i,
  /^(?:revised:\s*\n*)/i,
  /^(?:corrected:\s*\n*)/i,
  /^(?:result:\s*\n*)/i,
  /^(?:output:\s*\n*)/i,
  /^(?:translated:\s*\n*)/i,
  /^(?:simplified:\s*\n*)/i,
  /^(?:expanded:\s*\n*)/i,
  /^(?:converted:\s*\n*)/i,
  /^(?:formatted:\s*\n*)/i,
  /^(?:updated:\s*\n*)/i,
];

const TRAILING_PATTERNS = [
  /\n+(?:this ensures[^\n]*\.?\s*)$/i,
  /\n+(?:i(?:'ve| have) (?:also |)(?:corrected|fixed|improved|simplified|rewritten|converted)[^\n]*\.?\s*)$/i,
  /\n+(?:note:\s*[^\n]*\.?\s*)$/i,
  /\n+(?:explanation[:\s]*[\s\S]*)$/i,
  /\n+(?:changes (?:made|include)[:\s]*[\s\S]*)$/i,
  /\n+(?:\*\*explanation[^\n]*\*\*[\s\S]*)$/i,
  /\n+(?:\*\*analysis[^\n]*\*\*[\s\S]*)$/i,
  /\n+(?:---\s*\n+\*\*[\s\S]*)$/i,
  /\n+(?:the original[^\n]*(?:had|was|is|contained)[^\n]*[\s\S]*)$/i,
];

export function postProcess(raw: string): string {
  let text = raw;

  // Strip thinking/analysis blocks
  for (const pat of ARTIFACTS) {
    text = text.replace(pat, '');
  }
  // Strip orphaned opening/closing think tags
  text = text.replace(/<\/?think>\s*/g, '');
  text = text.replace(/<\/?analysis>\s*/g, '');
  text = text.replace(/<\/?reflection>\s*/g, '');

  // Strip control tokens
  for (const tok of ARTIFACT_TOKENS) {
    while (text.includes(tok)) text = text.replace(tok, '');
  }

  // Strip role markers
  text = text.replace(/^(assistant|user|system):\s*/gim, '');

  // Strip preamble
  for (const pat of PREAMBLE_PATTERNS) {
    text = text.replace(pat, '');
  }

  // Strip trailing explanations
  for (const pat of TRAILING_PATTERNS) {
    text = text.replace(pat, '');
  }

  // Fix unclosed fences
  const fenceCount = (text.match(/^```/gm) ?? []).length;
  if (fenceCount % 2 !== 0) {
    text = text.trimEnd() + '\n```';
  }

  // Trim trailing incomplete table rows
  const lines = text.split('\n');
  while (lines.length > 0) {
    const last = lines[lines.length - 1]!.trim();
    if (last.startsWith('|') && !last.endsWith('|') && last.length > 1) { lines.pop(); continue; }
    if (last === '|' || last === '') { lines.pop(); continue; }
    break;
  }
  text = lines.join('\n');

  // Collapse excessive blank lines
  text = text.replace(/\n{4,}/g, '\n\n\n');
  text = text.split('\n').map((l) => l.trimEnd()).join('\n');

  return text.trim();
}
