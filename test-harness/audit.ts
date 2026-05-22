#!/usr/bin/env npx tsx
/**
 * Audit tool: runs tests and dumps FULL outputs for manual review.
 * Specifically designed to catch tests that "pass" assertions but
 * produce garbage output a real user would reject.
 *
 * Usage:
 *   npx tsx test-harness/audit.ts --model C:\models\foo.gguf --tag custom-edit
 *   npx tsx test-harness/audit.ts --model C:\models\foo.gguf --tag custom-gen --sample 10
 */

import { startServer, loadModel, chat, shutdown } from './server';
import { TEST_CASES } from './test-cases';
import type { TestCase } from './test-cases';
import { postProcess } from './postprocess';

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  let modelPath = '';
  let tagFilter = '';
  let testFilter = '';
  let sample = 0;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--model' && args[i + 1]) modelPath = args[++i]!;
    else if (args[i] === '--tag' && args[i + 1]) tagFilter = args[++i]!;
    else if (args[i] === '--test' && args[i + 1]) testFilter = args[++i]!;
    else if (args[i] === '--sample' && args[i + 1]) sample = parseInt(args[++i]!, 10);
  }

  if (!modelPath) {
    console.log('Usage: npx tsx test-harness/audit.ts --model <path> [--tag <tag>] [--test <name>] [--sample N]');
    process.exit(1);
  }

  let cases = TEST_CASES;
  if (tagFilter) cases = cases.filter((tc) => tc.tag === tagFilter);
  if (testFilter) cases = cases.filter((tc) => tc.name.toLowerCase().includes(testFilter.toLowerCase()));
  if (sample > 0 && cases.length > sample) {
    const shuffled = [...cases].sort(() => Math.random() - 0.5);
    cases = shuffled.slice(0, sample);
  }

  console.log(`Auditing ${cases.length} tests\n`);

  await startServer();
  await loadModel(modelPath);

  for (let i = 0; i < cases.length; i++) {
    const tc = cases[i]!;
    console.log(`${'━'.repeat(70)}`);
    console.log(`[${i + 1}/${cases.length}] ${tc.name}`);
    console.log(`Tag: ${tc.tag} | maxTokens: ${tc.maxTokens} | temp: ${tc.temperature}`);
    console.log(`${'─'.repeat(70)}`);

    // Show the prompt
    const userMsg = tc.messages.find((m) => m.role === 'user');
    if (userMsg) {
      const promptPreview = userMsg.content.length > 300
        ? userMsg.content.slice(0, 300) + '...'
        : userMsg.content;
      console.log(`PROMPT:\n${promptPreview}`);
    }
    console.log(`${'─'.repeat(70)}`);

    try {
      const result = await chat(tc.messages, { maxTokens: tc.maxTokens, temperature: tc.temperature });
      const raw = result.text;
      const processed = postProcess(raw);

      // Run assertions
      const allAssertions = [...tc.assertions, (await import('./score')).noRepetition()];
      const results = allAssertions.map((a) => a(processed));
      const passed = results.filter((r) => r.pass).length;
      const failed = results.filter((r) => !r.pass);

      console.log(`RAW OUTPUT (${result.tokenCount} tokens, ${result.elapsedMs}ms):`);
      console.log('```');
      console.log(raw);
      console.log('```');

      if (raw !== processed) {
        console.log(`\nPOST-PROCESSED:`);
        console.log('```');
        console.log(processed);
        console.log('```');
      }

      console.log(`\nASSERTIONS: ${passed}/${results.length} passed`);
      for (const r of results) {
        const icon = r.pass ? '✓' : '✗';
        console.log(`  ${icon} ${r.name}${r.reason && !r.pass ? ': ' + r.reason : ''}`);
      }

      if (failed.length === 0) {
        console.log(`\n⚠  MANUAL CHECK: Does this output look correct to a real user?`);
      }
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }

    console.log('');
  }

  shutdown();
}

main();
