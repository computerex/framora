#!/usr/bin/env npx tsx
/**
 * LLM Prompt Test Harness — Main Runner
 *
 * Usage:
 *   npx tsx test-harness/run.ts --model C:\models\Qwen3.5-2B.Q4_K_M.gguf
 *   npx tsx test-harness/run.ts --model C:\models\Qwen3.5-2B.Q4_K_M.gguf --test "Fix Grammar"
 *   npx tsx test-harness/run.ts --model C:\models\foo.gguf --tag grammar
 *   npx tsx test-harness/run.ts --all
 *   npx tsx test-harness/run.ts --all --tier 1
 *   npx tsx test-harness/run.ts --count          # just print test count
 */

import { startServer, loadModel, chat, shutdown } from './server';
import { TEST_CASES } from './test-cases';
import type { TestCase } from './test-cases';
import type { AssertionResult } from './score';
import { noRepetition } from './score';
import { postProcess } from './postprocess';

const TIER_1 = [
  'C:\\models\\Qwen3.5-9B-Q3_K_M.gguf',
  'C:\\models\\Phi-4-mini-instruct-Q3_K_M.gguf',
  'C:\\models\\Qwen3.5-2B.Q4_K_M.gguf',
];
const TIER_2 = [
  'C:\\models\\gemma-2-2b-it-Q4_K_M.gguf',
  'C:\\models\\smollm2-1.7b-instruct-q4_k_m.gguf',
  'C:\\models\\Llama-3.2-1B-Instruct-Q4_K_M.gguf',
];
const TIER_3 = [
  'C:\\models\\Qwen3.5-0.8B-Q8_0.gguf',
  'C:\\models\\gemma-3-1b-it-Q4_K_M.gguf',
  'C:\\models\\qwen2.5-0.5b-instruct-q4_k_m.gguf',
];

interface TestResult {
  testName: string;
  tag: string;
  passed: number;
  total: number;
  assertions: AssertionResult[];
  output: string;
  elapsedMs: number;
  tokenCount: number;
}

interface ModelReport {
  model: string;
  results: TestResult[];
  totalPassed: number;
  totalTests: number;
  totalAssertions: number;
  passedAssertions: number;
}

function modelName(path: string): string {
  return path.split(/[/\\]/).pop()!.replace(/\.gguf$/i, '');
}

async function runTestCase(tc: TestCase): Promise<TestResult> {
  try {
    const result = await chat(tc.messages, {
      maxTokens: tc.maxTokens,
      temperature: tc.temperature,
    });

    const output = postProcess(result.text);
    const allAssertions = [...tc.assertions, noRepetition()];
    const assertions: AssertionResult[] = allAssertions.map((a) => a(output));
    const passed = assertions.filter((a) => a.pass).length;

    return {
      testName: tc.name,
      tag: tc.tag,
      passed,
      total: assertions.length,
      assertions,
      output,
      elapsedMs: result.elapsedMs,
      tokenCount: result.tokenCount,
    };
  } catch (err) {
    return {
      testName: tc.name,
      tag: tc.tag,
      passed: 0,
      total: tc.assertions.length,
      assertions: [{ pass: false, name: 'ERROR', reason: String(err) }],
      output: '',
      elapsedMs: 0,
      tokenCount: 0,
    };
  }
}

async function runAllTests(modelPath: string, cases: TestCase[]): Promise<ModelReport> {
  const name = modelName(modelPath);
  console.log(`\n${'='.repeat(70)}`);
  console.log(`MODEL: ${name}  (${cases.length} tests)`);
  console.log(`${'='.repeat(70)}`);

  await loadModel(modelPath);

  const results: TestResult[] = [];
  let passCount = 0;
  let failCount = 0;

  for (let i = 0; i < cases.length; i++) {
    const tc = cases[i]!;
    const pct = Math.round(((i + 1) / cases.length) * 100);

    const result = await runTestCase(tc);
    results.push(result);

    const ok = result.passed === result.total;
    if (ok) passCount++;
    else failCount++;

    const status = ok ? 'PASS' : 'FAIL';
    const passStr = `${result.passed}/${result.total}`;

    // Progress bar for large runs
    if (cases.length > 30) {
      const bar = '='.repeat(Math.floor(pct / 5)) + '-'.repeat(20 - Math.floor(pct / 5));
      process.stdout.write(`\r  [${bar}] ${pct}%  ${passCount}ok/${failCount}fail  ${status} ${tc.name.slice(0, 50).padEnd(50)}`);
      if (!ok) {
        process.stdout.write('\n');
        for (const a of result.assertions) {
          if (!a.pass) console.log(`    ✗ ${a.name}: ${a.reason ?? 'failed'}`);
        }
      }
    } else {
      console.log(`\n  [${i + 1}/${cases.length}] ${tc.name}`);
      console.log(`  ${status} (${passStr}) — ${result.elapsedMs}ms, ${result.tokenCount} tokens`);
      for (const a of result.assertions) {
        if (!a.pass) console.log(`    ✗ ${a.name}: ${a.reason ?? 'failed'}`);
      }
      const preview = result.output.replace(/\n/g, '\\n').slice(0, 120);
      console.log(`    Output: "${preview}${result.output.length > 120 ? '...' : ''}"`);
    }
  }

  if (cases.length > 30) {
    console.log(''); // newline after progress bar
  }

  const totalPassed = results.filter((r) => r.passed === r.total).length;
  const totalAssertions = results.reduce((sum, r) => sum + r.total, 0);
  const passedAssertions = results.reduce((sum, r) => sum + r.passed, 0);

  return {
    model: name,
    results,
    totalPassed,
    totalTests: results.length,
    totalAssertions,
    passedAssertions,
  };
}

function printSummary(reports: ModelReport[]): void {
  console.log(`\n\n${'='.repeat(70)}`);
  console.log('SUMMARY');
  console.log(`${'='.repeat(70)}\n`);

  const modelColWidth = Math.max(30, ...reports.map((r) => r.model.length + 2));
  const header = `${'Model'.padEnd(modelColWidth)} Tests     Assertions  Score`;
  console.log(header);
  console.log('-'.repeat(header.length + 10));

  for (const r of reports) {
    const testScore = `${r.totalPassed}/${r.totalTests}`;
    const assertScore = `${r.passedAssertions}/${r.totalAssertions}`;
    const pct = r.totalAssertions > 0 ? Math.round((r.passedAssertions / r.totalAssertions) * 100) : 0;
    const bar = pct >= 95 ? 'EXCELLENT' : pct >= 80 ? 'GOOD' : pct >= 50 ? 'FAIR' : 'POOR';
    console.log(`${r.model.padEnd(modelColWidth)} ${testScore.padEnd(10)}${assertScore.padEnd(12)}${pct}% ${bar}`);
  }

  // Per-tag breakdown
  if (reports.length > 0) {
    const tags = [...new Set(reports[0]!.results.map((r) => r.tag))];
    console.log(`\nPer-tag breakdown:`);

    for (const tag of tags) {
      const row = reports.map((rep) => {
        const tagResults = rep.results.filter((r) => r.tag === tag);
        const passed = tagResults.filter((r) => r.passed === r.total).length;
        return `${passed}/${tagResults.length}`;
      });
      console.log(`  ${tag.padEnd(20)} ${row.map((r, i) => `${modelName(reports[i]!.model).slice(0, 15).padEnd(16)}${r}`).join('  ')}`);
    }
  }

  // Failure summary (collapsed)
  console.log(`\n\nFAILURES (by tag):`);
  console.log('-'.repeat(70));
  for (const r of reports) {
    const failures = r.results.filter((t) => t.passed < t.total);
    if (failures.length === 0) {
      console.log(`\n  ${r.model}: ALL PASSED`);
      continue;
    }

    const failByTag: Record<string, typeof failures> = {};
    for (const f of failures) {
      (failByTag[f.tag] ??= []).push(f);
    }

    console.log(`\n  ${r.model}: ${failures.length} failures`);
    for (const [tag, tagFails] of Object.entries(failByTag)) {
      console.log(`    [${tag}] ${tagFails.length} failed:`);
      for (const f of tagFails.slice(0, 5)) {
        const reasons = f.assertions.filter((a) => !a.pass).map((a) => a.name).join(', ');
        console.log(`      - ${f.testName.slice(0, 55)}: ${reasons}`);
      }
      if (tagFails.length > 5) {
        console.log(`      ... and ${tagFails.length - 5} more`);
      }
    }
  }
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);

  // --count: just print test count and exit
  if (args.includes('--count')) {
    const tags: Record<string, number> = {};
    for (const tc of TEST_CASES) {
      tags[tc.tag] = (tags[tc.tag] ?? 0) + 1;
    }
    console.log(`Total test cases: ${TEST_CASES.length}\n`);
    console.log('By tag:');
    for (const [tag, count] of Object.entries(tags).sort((a, b) => b[1] - a[1])) {
      console.log(`  ${tag.padEnd(20)} ${count}`);
    }
    return;
  }

  let models: string[] = [];
  let testFilter: string | undefined;
  let tagFilter: string | undefined;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--model' && args[i + 1]) {
      models.push(args[++i]!);
    } else if (args[i] === '--all') {
      // Next arg might be --tier
    } else if (args[i] === '--tier' && args[i + 1]) {
      const tier = parseInt(args[++i]!, 10);
      if (tier === 1) models = TIER_1;
      else if (tier === 2) models = [...TIER_1, ...TIER_2];
      else if (tier === 3) models = [...TIER_1, ...TIER_2, ...TIER_3];
    } else if (args[i] === '--test' && args[i + 1]) {
      testFilter = args[++i];
    } else if (args[i] === '--tag' && args[i + 1]) {
      tagFilter = args[++i];
    }
  }

  if (args.includes('--all') && models.length === 0) {
    models = [...TIER_1, ...TIER_2];
  }

  if (models.length === 0) {
    console.log('Usage:');
    console.log('  npx tsx test-harness/run.ts --model C:\\models\\Qwen3.5-2B.Q4_K_M.gguf');
    console.log('  npx tsx test-harness/run.ts --model <path> --tag grammar');
    console.log('  npx tsx test-harness/run.ts --model <path> --test "Fix Grammar"');
    console.log('  npx tsx test-harness/run.ts --all');
    console.log('  npx tsx test-harness/run.ts --all --tier 1');
    console.log('  npx tsx test-harness/run.ts --count');
    process.exit(1);
  }

  // Filter test cases
  let cases = TEST_CASES;
  if (testFilter) {
    cases = cases.filter((tc) => tc.name.toLowerCase().includes(testFilter!.toLowerCase()));
  }
  if (tagFilter) {
    cases = cases.filter((tc) => tc.tag === tagFilter);
  }

  console.log(`Selected ${cases.length} tests (of ${TEST_CASES.length} total)`);
  if (testFilter) console.log(`  Name filter: "${testFilter}"`);
  if (tagFilter) console.log(`  Tag filter: "${tagFilter}"`);

  if (cases.length === 0) {
    console.log('No matching tests found.');
    process.exit(1);
  }

  const fs = await import('fs');
  for (const m of models) {
    if (!fs.existsSync(m)) {
      console.error(`Model not found: ${m}`);
      process.exit(1);
    }
  }

  try {
    await startServer();

    const reports: ModelReport[] = [];
    for (const m of models) {
      const report = await runAllTests(m, cases);
      reports.push(report);
    }

    printSummary(reports);

    const allPassed = reports.every((r) => r.totalPassed === r.totalTests);
    process.exit(allPassed ? 0 : 1);
  } catch (err) {
    console.error('Fatal error:', err);
    process.exit(2);
  } finally {
    shutdown();
  }
}

main();
