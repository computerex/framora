/**
 * Framora Markdown rendering pipeline.
 *
 * Pure function: source string → sanitized HTML string.
 * Math, mermaid, and syntax highlighting are all handled.
 *
 * Math syntax supported:  $inline$  $$block$$  \(inline\)  \[block\]
 * Diagram fences:         ```mermaid ...```
 * Alerts (GFM-style):     > [!NOTE] | TIP | IMPORTANT | WARNING | CAUTION
 * Front-matter:           YAML between leading --- ... ---
 */
import MarkdownIt from 'markdown-it';
import anchor from 'markdown-it-anchor';
import toc from 'markdown-it-toc-done-right';
import footnote from 'markdown-it-footnote';
import mark from 'markdown-it-mark';
import sub from 'markdown-it-sub';
import sup from 'markdown-it-sup';
import deflist from 'markdown-it-deflist';
import abbr from 'markdown-it-abbr';
import attrs from 'markdown-it-attrs';
import { full as emoji } from 'markdown-it-emoji';
import taskLists from 'markdown-it-task-lists';
import katex from 'katex';
import hljs from 'highlight.js';
import DOMPurify from 'dompurify';
import slugger from 'github-slugger';

/**
 * Minimal YAML front-matter stripper — gray-matter depends on Node's Buffer
 * and fails silently in the renderer.  We only need to detect the leading
 * `---\n…\n---\n` block and remove it; we surface the raw key/value pairs
 * for any consumer that wants them.
 */
function parseFrontMatter(src: string): { body: string; data: Record<string, unknown> } {
  if (!src.startsWith('---')) return { body: src, data: {} };
  // Front-matter must be terminated by a line consisting of exactly --- (or ...)
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n(?:---|\.\.\.)\r?\n?/);
  if (!m) return { body: src, data: {} };
  const yaml = m[1] ?? '';
  const data: Record<string, unknown> = {};
  for (const line of yaml.split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z0-9_.-]+)\s*:\s*(.*)$/);
    if (kv) {
      let v: string = (kv[2] ?? '').trim();
      // strip surrounding quotes
      if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
        v = v.slice(1, -1);
      }
      data[kv[1]!] = v;
    }
  }
  return { body: src.slice(m[0].length), data };
}

// ---------- Math plugin (inline + block, $...$ / $$...$$ / \(...\) / \[...\]) ----------

function isEscaped(state: { src: string }, pos: number): boolean {
  let backslashes = 0;
  let i = pos - 1;
  while (i >= 0 && state.src[i] === '\\') {
    backslashes++;
    i--;
  }
  return backslashes % 2 === 1;
}

function mathInline(md: MarkdownIt): void {
  md.inline.ruler.after('escape', 'math_inline', (state, silent) => {
    const src = state.src;
    const start = state.pos;
    let open = '';
    let close = '';
    if (src[start] === '$' && src[start + 1] !== '$') {
      open = '$';
      close = '$';
    } else if (src[start] === '\\' && src[start + 1] === '(') {
      open = '\\(';
      close = '\\)';
    } else {
      return false;
    }
    if (open === '$' && isEscaped(state, start)) return false;
    const contentStart = start + open.length;
    const end = src.indexOf(close, contentStart);
    if (end < 0) return false;
    const content = src.slice(contentStart, end);
    if (!content.trim()) return false;
    if (open === '$' && /\s/.test(src[contentStart] ?? '')) return false;
    if (open === '$' && /\s/.test(src[end - 1] ?? '')) return false;
    if (!silent) {
      const token = state.push('math_inline', 'math', 0);
      token.markup = open;
      token.content = content;
    }
    state.pos = end + close.length;
    return true;
  });

  md.renderer.rules.math_inline = (tokens, idx) => {
    try {
      return katex.renderToString(tokens[idx]!.content, {
        throwOnError: false,
        displayMode: false,
        output: 'html'
      });
    } catch (e) {
      return `<span class="fr-math-error">${escapeHtml(String(e))}</span>`;
    }
  };
}

function mathBlock(md: MarkdownIt): void {
  md.block.ruler.before('fence', 'math_block', (state, startLine, endLine, silent) => {
    const startPos = state.bMarks[startLine]! + state.tShift[startLine]!;
    const maxPos = state.eMarks[startLine]!;
    const line = state.src.slice(startPos, maxPos);

    let open = '';
    let close = '';
    if (line.startsWith('$$')) {
      open = '$$';
      close = '$$';
    } else if (line.startsWith('\\[')) {
      open = '\\[';
      close = '\\]';
    } else {
      return false;
    }

    // Find the closing delimiter
    let nextLine = startLine;
    let found = false;
    let firstLineContent = line.slice(open.length);
    if (firstLineContent.endsWith(close) && firstLineContent.length > 0) {
      // Single-line block
      found = true;
      firstLineContent = firstLineContent.slice(0, -close.length);
    } else {
      while (++nextLine < endLine) {
        const lineStart = state.bMarks[nextLine]! + state.tShift[nextLine]!;
        const lineEnd = state.eMarks[nextLine]!;
        const txt = state.src.slice(lineStart, lineEnd);
        if (txt.trim().endsWith(close)) {
          found = true;
          break;
        }
      }
    }
    if (!found) return false;
    if (silent) return true;

    let content: string;
    if (nextLine === startLine) {
      content = firstLineContent;
    } else {
      const linesAbove = state.src.slice(
        state.bMarks[startLine]! + state.tShift[startLine]! + open.length,
        state.eMarks[startLine]!
      );
      const middle = state.src.slice(
        state.bMarks[startLine + 1]!,
        state.bMarks[nextLine]!
      );
      const lastLineRaw = state.src.slice(
        state.bMarks[nextLine]! + state.tShift[nextLine]!,
        state.eMarks[nextLine]!
      );
      const lastLine = lastLineRaw.replace(new RegExp(escapeRegExp(close) + '$'), '');
      content = [linesAbove, middle, lastLine].filter(Boolean).join('\n');
    }

    const token = state.push('math_block', 'math', 0);
    token.block = true;
    token.markup = open;
    token.content = content.trim();
    token.map = [startLine, nextLine + 1];

    state.line = nextLine + 1;
    return true;
  });

  md.renderer.rules.math_block = (tokens, idx) => {
    try {
      return (
        '<div class="fr-math-block">' +
        katex.renderToString(tokens[idx]!.content, {
          throwOnError: false,
          displayMode: true,
          output: 'html'
        }) +
        '</div>'
      );
    } catch (e) {
      return `<div class="fr-math-error">${escapeHtml(String(e))}</div>`;
    }
  };
}

// ---------- Alerts plugin ( > [!NOTE] etc.) ----------

const ALERT_TYPES = ['note', 'tip', 'important', 'warning', 'caution'];

function alerts(md: MarkdownIt): void {
  const defaultRender =
    md.renderer.rules.blockquote_open ?? ((tokens, idx, options, _env, self) =>
      self.renderToken(tokens, idx, options));

  md.renderer.rules.blockquote_open = (tokens, idx, options, env, self) => {
    // Look for first inline token after open
    let i = idx + 1;
    while (i < tokens.length && tokens[i]!.type !== 'inline') i++;
    const inline = tokens[i];
    if (inline) {
      const m = inline.content.match(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*\n?/i);
      if (m) {
        const type = m[1]!.toLowerCase();
        if (ALERT_TYPES.includes(type)) {
          inline.content = inline.content.slice(m[0].length);
          // Re-tokenize the children since we mutated content
          inline.children = md.parseInline(inline.content, env)[0]?.children ?? null;
          tokens[idx]!.attrJoin('class', `fr-alert fr-alert-${type}`);
          // Inject a label paragraph by rendering a header inline
          const header = `<p class="fr-alert-title">${type.charAt(0).toUpperCase() + type.slice(1)}</p>`;
          return defaultRender(tokens, idx, options, env, self) + header;
        }
      }
    }
    return defaultRender(tokens, idx, options, env, self);
  };
}

// ---------- Mermaid placeholder (rendered client-side after HTML mounts) ----------

function mermaidFence(md: MarkdownIt): void {
  const orig = md.renderer.rules.fence!;
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx]!;
    const info = token.info.trim();
    if (info === 'mermaid') {
      const code = token.content.trim();
      // The actual SVG is rendered client-side by mountMermaid()
      return `<div class="fr-mermaid" data-source="${escapeHtmlAttr(code)}">${escapeHtml(
        code
      )}</div>`;
    }
    return orig(tokens, idx, options, env, self);
  };
}

// ---------- Helpers ----------

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function escapeHtmlAttr(s: string): string {
  return escapeHtml(s).replace(/"/g, '&quot;');
}
function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ---------- Singleton MarkdownIt instance ----------

let mdInstance: MarkdownIt | null = null;

function getMd(): MarkdownIt {
  if (mdInstance) return mdInstance;
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    breaks: false,
    highlight: (code, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return (
            '<pre class="hljs"><code class="language-' +
            lang +
            '">' +
            hljs.highlight(code, { language: lang, ignoreIllegals: true }).value +
            '</code></pre>'
          );
        } catch {
          /* fall through */
        }
      }
      return (
        '<pre class="hljs"><code>' + escapeHtml(code) + '</code></pre>'
      );
    }
  });

  const slug = new slugger();
  md.use(anchor, {
    slugify: (s: string) => slug.slug(s),
    permalink: anchor.permalink.headerLink({ safariReaderFix: true })
  });
  md.use(toc, { listType: 'ul' });
  md.use(footnote);
  md.use(mark);
  md.use(sub);
  md.use(sup);
  md.use(deflist);
  md.use(abbr);
  md.use(attrs, { allowedAttributes: ['id', 'class', /^data-.*$/] });
  md.use(emoji);
  md.use(taskLists, { enabled: true, label: false });
  mathInline(md);
  mathBlock(md);
  alerts(md);
  mermaidFence(md);

  mdInstance = md;
  return md;
}

export interface RenderResult {
  html: string;
  frontMatter: Record<string, unknown>;
  headings: Array<{ level: number; text: string; id: string }>;
}

export function renderMarkdown(source: string): RenderResult {
  const { body, data } = parseFrontMatter(source);
  const md = getMd();
  const env: { headings?: unknown[] } = {};
  const rawHtml = md.render(body, env);

  const clean = DOMPurify.sanitize(rawHtml, {
    ADD_TAGS: ['details', 'summary', 'mark', 'sub', 'sup', 'dl', 'dt', 'dd', 'svg', 'g', 'path', 'foreignObject', 'span', 'div', 'use'],
    ADD_ATTR: [
      'target',
      'id',
      'class',
      'data-source',
      'data-line',
      'aria-hidden',
      'viewBox',
      'xmlns',
      'fill',
      'stroke',
      'd',
      'role',
      'style'
    ],
    ALLOW_DATA_ATTR: true
  });

  // Extract headings for outline (parse the sanitized HTML)
  const headings = extractHeadings(clean);

  return { html: clean, frontMatter: data, headings };
}

function extractHeadings(html: string): RenderResult['headings'] {
  const out: RenderResult['headings'] = [];
  const re = /<h([1-6])[^>]*\bid="([^"]*)"[^>]*>([\s\S]*?)<\/h\1>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    const level = parseInt(m[1]!, 10);
    const id = m[2]!;
    const text = m[3]!.replace(/<[^>]+>/g, '').trim();
    out.push({ level, id, text });
  }
  return out;
}