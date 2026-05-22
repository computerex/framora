import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildAllTemplates } from "./gen-templates-data-build.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, "templates-data.ts");

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");

const header = `export interface TemplateSpec {
  id: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  content: string;
}

`;

const rows = buildAllTemplates();
const body = rows.map(
  (t) => `  {
    id: ${JSON.stringify(t.id)},
    name: ${JSON.stringify(t.name)},
    category: ${JSON.stringify(t.category)},
    description: ${JSON.stringify(t.description)},
    tags: ${JSON.stringify(t.tags)},
    content: \`${esc(t.content)}\`,
  }`,
);

fs.writeFileSync(outPath, `${header}export const templates: TemplateSpec[] = [\n${body.join(",\n\n")}\n];\n`, "utf8");
// eslint-disable-next-line no-console
console.log(`Wrote ${outPath} (${rows.length} templates).`);
