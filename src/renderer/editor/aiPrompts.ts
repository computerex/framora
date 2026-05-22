/**
 * Task-specific prompt registry for small local LLMs.
 *
 * Design principles:
 * - The model outputs ONLY the new/changed content (the delta)
 * - Never send raw document content that the model might echo back
 * - Send structural hints (headings, section name) instead of full text
 * - Edit tasks: input is the selection, output is the replacement
 * - Generate tasks: output is content to insert at cursor — nothing else
 */

import {
  extractTail,
  extractHeadings,
  buildContextSummary,
  getCurrentSection
} from './aiContext';

export type ContextStrategy =
  | 'selection'
  | 'tail'
  | 'around-cursor'
  | 'headings-only'
  | 'custom-input'
  | 'none';

export interface TaskContext {
  source: string;
  selection: string;
  cursorPos: number;
  customInput: string;
}

export interface BuiltPrompt {
  system: string;
  user: string;
  maxTokens: number;
  temperature: number;
}

export interface AiTask {
  id: string;
  label: string;
  description: string;
  category: 'edit' | 'generate';
  needsSelection: boolean;
  needsCustomInput: boolean;
  inputPlaceholder?: string;
  buildPrompt: (ctx: TaskContext) => BuiltPrompt;
}

const EDIT_SYSTEM = `You are a Markdown text editor. You receive text and return the edited version.
RULES:
- Output ONLY the edited text
- Do NOT add explanations, analysis, or commentary
- Do NOT wrap output in code blocks
- Preserve Markdown formatting`;

const GEN_SYSTEM = `You are a Markdown content generator. You produce content to be inserted into a document.
RULES:
- Output ONLY the requested content — nothing else
- Do NOT repeat or echo any existing document content
- Do NOT add explanations before or after
- Do NOT wrap output in code blocks unless the task is a code block`;

export const AI_TASKS: AiTask[] = [
  // --- Selection-based edits ---
  {
    id: 'fix-grammar',
    label: 'Fix Grammar',
    description: 'Fix spelling and grammar',
    category: 'edit',
    needsSelection: true,
    needsCustomInput: false,
    buildPrompt: (ctx) => ({
      system: EDIT_SYSTEM,
      user: `Fix all grammar, spelling, and punctuation errors in this text. Output ONLY the corrected text.\n\n${ctx.selection}`,
      maxTokens: Math.max(200, Math.ceil(ctx.selection.length / 2)),
      temperature: 0.2,
    }),
  },
  {
    id: 'improve',
    label: 'Improve',
    description: 'Improve clarity and readability',
    category: 'edit',
    needsSelection: true,
    needsCustomInput: false,
    buildPrompt: (ctx) => ({
      system: EDIT_SYSTEM,
      user: `Improve this text for clarity and readability. Keep the same meaning. Output ONLY the improved text.\n\n${ctx.selection}`,
      maxTokens: Math.max(300, Math.ceil(ctx.selection.length / 2) + 100),
      temperature: 0.4,
    }),
  },
  {
    id: 'simplify',
    label: 'Simplify',
    description: 'Make text simpler and shorter',
    category: 'edit',
    needsSelection: true,
    needsCustomInput: false,
    buildPrompt: (ctx) => ({
      system: EDIT_SYSTEM,
      user: `Simplify this text. Use shorter sentences and simpler words. Output ONLY the simplified text.\n\n${ctx.selection}`,
      maxTokens: Math.max(200, ctx.selection.length),
      temperature: 0.3,
    }),
  },
  {
    id: 'formal',
    label: 'Formal',
    description: 'Make text more formal',
    category: 'edit',
    needsSelection: true,
    needsCustomInput: false,
    buildPrompt: (ctx) => ({
      system: EDIT_SYSTEM,
      user: `Rewrite in a formal, professional tone. Output ONLY the rewritten text.\n\n${ctx.selection}`,
      maxTokens: Math.max(300, Math.ceil(ctx.selection.length / 2) + 100),
      temperature: 0.4,
    }),
  },
  {
    id: 'casual',
    label: 'Casual',
    description: 'Make text more casual',
    category: 'edit',
    needsSelection: true,
    needsCustomInput: false,
    buildPrompt: (ctx) => ({
      system: EDIT_SYSTEM,
      user: `Rewrite in a casual, friendly tone. Output ONLY the rewritten text.\n\n${ctx.selection}`,
      maxTokens: Math.max(300, Math.ceil(ctx.selection.length / 2) + 100),
      temperature: 0.5,
    }),
  },

  // --- Generation commands ---
  {
    id: 'continue',
    label: 'Continue Writing',
    description: 'Continue from where the text ends',
    category: 'generate',
    needsSelection: false,
    needsCustomInput: false,
    buildPrompt: (ctx) => {
      const tail = extractTail(ctx.source, 400);
      const section = getCurrentSection(ctx.source, ctx.cursorPos);
      const sectionHint = section ? ` You are in section: "${section}".` : '';
      return {
        system: GEN_SYSTEM,
        user: `Continue writing 2-3 sentences after this text.${sectionHint} Output ONLY the new sentences.\n\n...${tail}`,
        maxTokens: 300,
        temperature: 0.7,
      };
    },
  },
  {
    id: 'generate-table',
    label: 'Insert Table',
    description: 'Generate a Markdown table',
    category: 'generate',
    needsSelection: false,
    needsCustomInput: true,
    inputPlaceholder: 'Describe your table (e.g. "3 columns: Name, Age, City")',
    buildPrompt: (ctx) => ({
      system: `You generate Markdown tables. Output ONLY a GFM pipe table using ASCII characters. No text before or after. No explanations.`,
      user: `Generate this table: ${ctx.customInput}\n\nFormat:\n| Col1 | Col2 |\n|------|------|\n| data | data |`,
      maxTokens: 600,
      temperature: 0.3,
    }),
  },
  {
    id: 'generate-list',
    label: 'Insert List',
    description: 'Generate a Markdown list',
    category: 'generate',
    needsSelection: false,
    needsCustomInput: true,
    inputPlaceholder: 'Describe your list (e.g. "5 benefits of exercise")',
    buildPrompt: (ctx) => ({
      system: `You generate Markdown lists. Output ONLY bullet items starting with "- ". No text before or after.`,
      user: `Generate this list: ${ctx.customInput}`,
      maxTokens: 400,
      temperature: 0.5,
    }),
  },
  {
    id: 'generate-mermaid',
    label: 'Insert Diagram',
    description: 'Generate a Mermaid diagram',
    category: 'generate',
    needsSelection: false,
    needsCustomInput: true,
    inputPlaceholder: 'Describe the diagram (e.g. "flowchart of user login process")',
    buildPrompt: (ctx) => ({
      system: `You generate Mermaid diagrams. Output ONLY valid Mermaid syntax inside a fenced code block. Start with \`\`\`mermaid and end with \`\`\`. No text before or after.`,
      user: `Generate: ${ctx.customInput}\n\nExample:\n\`\`\`mermaid\ngraph TD\n  A[Start] --> B[End]\n\`\`\``,
      maxTokens: 500,
      temperature: 0.4,
    }),
  },
  {
    id: 'generate-code',
    label: 'Insert Code',
    description: 'Generate a code block',
    category: 'generate',
    needsSelection: false,
    needsCustomInput: true,
    inputPlaceholder: 'Describe the code (e.g. "Python function to sort a list")',
    buildPrompt: (ctx) => ({
      system: `You generate code. Output ONLY a fenced Markdown code block with the appropriate language tag. No explanations.`,
      user: `Generate: ${ctx.customInput}`,
      maxTokens: 500,
      temperature: 0.3,
    }),
  },
  {
    id: 'summarize',
    label: 'Summarize',
    description: 'Summarize document or selection',
    category: 'generate',
    needsSelection: false,
    needsCustomInput: false,
    buildPrompt: (ctx) => {
      const content = ctx.selection || extractHeadings(ctx.source) || extractTail(ctx.source, 1500);
      return {
        system: GEN_SYSTEM,
        user: `Write a brief summary (3-5 sentences) of this content. Output ONLY the summary.\n\n${content}`,
        maxTokens: 250,
        temperature: 0.4,
      };
    },
  },
  {
    id: 'custom',
    label: 'Custom',
    description: 'Ask anything',
    category: 'generate',
    needsSelection: false,
    needsCustomInput: true,
    inputPlaceholder: 'What would you like to write?',
    buildPrompt: (ctx) => {
      if (ctx.selection) {
        return {
          system: `You are a Markdown text editor. Follow the user's instruction exactly.
RULES:
- Output ONLY the final result — no explanations, no commentary
- If the instruction says to change, replace, or convert something, rewrite the entire content from scratch to match
- If the instruction says to remove or delete something, output the text WITHOUT that content — do NOT generate new content to replace it
- Do NOT keep old content that contradicts the instruction
- Do NOT wrap output in code blocks`,
          user: `Instruction: ${ctx.customInput}\n\nRewrite the text below according to the instruction. Output ONLY the rewritten text.\n\nOriginal:\n${ctx.selection}`,
          maxTokens: 800,
          temperature: 0.5,
        };
      }

      const section = getCurrentSection(ctx.source, ctx.cursorPos);
      let placement = 'The content will be inserted at the cursor position in the document.';
      if (section) {
        placement = `The content will be inserted under the existing heading "${section}". Do NOT include that heading — it already exists.`;
      }

      return {
        system: GEN_SYSTEM,
        user: `${ctx.customInput}\n\n${placement}\nOutput ONLY the new content. Do NOT add any headings that already exist. Do NOT repeat existing text.`,
        maxTokens: 800,
        temperature: 0.6,
      };
    },
  },
];

export function getTask(id: string): AiTask | undefined {
  return AI_TASKS.find((t) => t.id === id);
}

export function getEditTasks(): AiTask[] {
  return AI_TASKS.filter((t) => t.category === 'edit');
}

export function getGenerateTasks(): AiTask[] {
  return AI_TASKS.filter((t) => t.category === 'generate');
}
