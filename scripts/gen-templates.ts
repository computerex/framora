import * as fs from 'fs';
import * as path from 'path';

import { templates as businessTemplates } from './templates-business';
import { templates as developmentTemplates } from './templates-development';
import { templates as technicalTemplates } from './templates-technical';
import { templates as writingTemplates } from './templates-writing';
import { templates as personalTemplates } from './templates-personal';
import { templates as dataTemplates } from './templates-data';

interface ManifestEntry {
  id: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  file: string;
}

const allTemplates = [
  ...businessTemplates,
  ...developmentTemplates,
  ...technicalTemplates,
  ...writingTemplates,
  ...personalTemplates,
  ...dataTemplates,
];

const outDir = path.resolve(__dirname, '..', 'templates');

const seenIds = new Set<string>();
const manifest: ManifestEntry[] = [];
let written = 0;

for (const t of allTemplates) {
  if (seenIds.has(t.id)) {
    console.warn(`DUPLICATE id skipped: ${t.id}`);
    continue;
  }
  seenIds.add(t.id);

  const catDir = path.join(outDir, t.category);
  fs.mkdirSync(catDir, { recursive: true });

  const slug = t.id.replace(`${t.category}-`, '');
  const filename = `${slug}.md`;
  const relPath = `${t.category}/${filename}`;

  fs.writeFileSync(path.join(catDir, filename), t.content, 'utf-8');

  manifest.push({
    id: t.id,
    name: t.name,
    category: t.category,
    description: t.description,
    tags: t.tags,
    file: relPath,
  });
  written++;
}

fs.writeFileSync(
  path.join(outDir, 'index.json'),
  JSON.stringify(manifest, null, 2),
  'utf-8'
);

console.log(`Generated ${written} templates across ${new Set(manifest.map(m => m.category)).size} categories`);
console.log(`Manifest written to templates/index.json`);

const cats = new Map<string, number>();
for (const m of manifest) {
  cats.set(m.category, (cats.get(m.category) || 0) + 1);
}
for (const [cat, count] of [...cats.entries()].sort()) {
  console.log(`  ${cat}: ${count}`);
}
