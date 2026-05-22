#!/usr/bin/env npx tsx
/**
 * Factual Knowledge Test — tests whether models can generate accurate
 * information about well-known topics without hallucinating.
 */

import { startServer, loadModel, chat, shutdown } from './server';
import { existsSync } from 'fs';

interface FactualTest {
  name: string;
  prompt: string;
  mustContain: string[];
  mustNotContain: string[];
  description: string;
}

const TESTS: FactualTest[] = [
  {
    name: 'Pit and Pendulum — setting',
    prompt: 'Expand on "The Pit and the Pendulum" by Edgar Allan Poe. Include the historical setting, main plot points, and themes. Be factually accurate.',
    mustContain: ['spanish inquisition', 'toledo'],
    mustNotContain: ['french revolution', 'reign of terror', '1794'],
    description: 'Must know it is set during the Spanish Inquisition in Toledo, NOT French Revolution',
  },
  {
    name: 'Pit and Pendulum — plot',
    prompt: 'Summarize the plot of "The Pit and the Pendulum" by Edgar Allan Poe in 3-4 paragraphs. Stick to what actually happens in the story.',
    mustContain: ['pendulum', 'pit'],
    mustNotContain: ['garrote', 'boîte'],
    description: 'Must mention the actual pendulum and pit, not invented devices',
  },
  {
    name: 'World War 2 — dates',
    prompt: 'When did World War 2 start and end? List the key dates and the countries involved in starting the war.',
    mustContain: ['1939', '1945'],
    mustNotContain: [],
    description: 'Must know WW2 was 1939-1945',
  },
  {
    name: 'Moon landing',
    prompt: 'Who were the first astronauts to land on the Moon and when did it happen?',
    mustContain: ['armstrong', '1969'],
    mustNotContain: [],
    description: 'Must know Neil Armstrong, 1969',
  },
  {
    name: 'Shakespeare — Hamlet',
    prompt: 'Summarize the plot of Hamlet by William Shakespeare. Be factually accurate — only include events that actually occur in the play.',
    mustContain: ['claudius', 'denmark'],
    mustNotContain: [],
    description: 'Must know Hamlet is set in Denmark, Claudius is the uncle',
  },
  {
    name: 'Photosynthesis',
    prompt: 'Explain the process of photosynthesis. What are the inputs and outputs?',
    mustContain: ['carbon dioxide', 'oxygen', 'light'],
    mustNotContain: [],
    description: 'Must know CO2 + light -> glucose + O2',
  },
  {
    name: 'Python creator',
    prompt: 'Who created the Python programming language and when?',
    mustContain: ['guido', 'rossum'],
    mustNotContain: [],
    description: 'Must know Guido van Rossum',
  },
  {
    name: 'Theory of Relativity',
    prompt: 'Who developed the theory of relativity and what are its two main parts?',
    mustContain: ['einstein', 'special', 'general'],
    mustNotContain: [],
    description: 'Must know Einstein, special and general relativity',
  },
];

const MODELS_TO_TEST = [
  'C:\\models\\Qwen3.5-9B-Q3_K_M.gguf',
  'C:\\models\\Phi-4-mini-instruct-Q3_K_M.gguf',
  'C:\\models\\Qwen3.5-2B.Q4_K_M.gguf',
  'C:\\models\\gpt-oss-20b-Q3_K_M.gguf',
  'C:\\models\\GLM-4.7-Flash-UD-TQ1_0.gguf',
  'C:\\models\\Qwen3-Coder-30B-A3B-Instruct-UD-IQ3_XXS.gguf',
  'C:\\models\\Qwen3.5-27B-Q3_K_M.gguf',
  'C:\\models\\Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf',
  'C:\\models\\Qwen3.5-35B-A3B-Q3_K_M.gguf',
  'C:\\models\\GLM-4.7-Flash-UD-Q4_K_XL.gguf',
];

function extractModelName(path: string): string {
  return path.split('\\').pop()!.replace('.gguf', '');
}

async function runTest(test: FactualTest): Promise<{ pass: boolean; reasons: string[]; output: string }> {
  const result = await chat([
    { role: 'system', content: 'You are a knowledgeable assistant. Provide factually accurate information. Do not make up quotes, dates, or events. If you are unsure about something, say so.' },
    { role: 'user', content: test.prompt },
  ], { maxTokens: 1024, temperature: 0.3 });
  const output = result.text;

  const lower = output.toLowerCase();
  const reasons: string[] = [];
  let pass = true;

  for (const term of test.mustContain) {
    if (!lower.includes(term.toLowerCase())) {
      reasons.push(`MISSING "${term}"`);
      pass = false;
    }
  }

  for (const term of test.mustNotContain) {
    if (lower.includes(term.toLowerCase())) {
      reasons.push(`HALLUCINATED "${term}"`);
      pass = false;
    }
  }

  return { pass, reasons, output };
}

async function main() {
  const modelArg = process.argv.find(a => a.startsWith('--model='));
  const models = modelArg
    ? [modelArg.split('=')[1]!]
    : MODELS_TO_TEST.filter(m => existsSync(m));

  if (models.length === 0) {
    console.error('No models found. Use --model=<path> or ensure models exist.');
    process.exit(1);
  }

  console.log(`\nFactual Knowledge Test — ${TESTS.length} tests × ${models.length} models\n`);
  console.log('='.repeat(80));

  await startServer();

  const results: Map<string, { passed: number; total: number; details: string[] }> = new Map();

  for (const modelPath of models) {
    const modelName = extractModelName(modelPath);
    console.log(`\n${'='.repeat(80)}`);
    console.log(`MODEL: ${modelName}`);
    console.log('='.repeat(80));

    try {
      await loadModel(modelPath);
    } catch (e) {
      console.log(`  Load failed: ${e} — restarting server and retrying...`);
      try {
        await shutdown();
        await new Promise(r => setTimeout(r, 3000));
        await startServer();
        await loadModel(modelPath);
      } catch (e2) {
        console.log(`  SKIP — still failed after restart: ${e2}`);
        continue;
      }
    }

    let passed = 0;
    const details: string[] = [];

    for (const test of TESTS) {
      process.stdout.write(`  ${test.name.padEnd(40)}`);
      try {
        const result = await runTest(test);
        if (result.pass) {
          passed++;
          console.log('PASS');
        } else {
          console.log(`FAIL  ${result.reasons.join(', ')}`);
          details.push(`${test.name}: ${result.reasons.join(', ')}`);
        }
        // Show first 200 chars of output for review
        const preview = result.output.replace(/\n/g, ' ').slice(0, 200);
        console.log(`    → ${preview}…`);
      } catch (e) {
        console.log(`ERROR  ${e}`);
        details.push(`${test.name}: ERROR ${e}`);
      }
    }

    results.set(modelName, { passed, total: TESTS.length, details });
    console.log(`\n  Score: ${passed}/${TESTS.length} (${Math.round(100 * passed / TESTS.length)}%)`);
  }

  // Summary
  console.log(`\n\n${'='.repeat(80)}`);
  console.log('FACTUAL KNOWLEDGE SUMMARY');
  console.log('='.repeat(80));
  console.log(`${'Model'.padEnd(50)} Score`);
  console.log('-'.repeat(80));

  const sorted = [...results.entries()].sort((a, b) => b[1].passed - a[1].passed);
  for (const [name, r] of sorted) {
    const pct = Math.round(100 * r.passed / r.total);
    const bar = pct >= 80 ? 'GOOD' : pct >= 50 ? 'FAIR' : 'POOR';
    console.log(`${name.padEnd(50)} ${r.passed}/${r.total} (${pct}%) ${bar}`);
    if (r.details.length > 0) {
      for (const d of r.details) {
        console.log(`    ✗ ${d}`);
      }
    }
  }

  await shutdown();
}

main().catch((e) => {
  console.error('Fatal:', e);
  process.exit(2);
});
