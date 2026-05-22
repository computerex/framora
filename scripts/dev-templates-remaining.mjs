import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { c } from "./dev-template-helpers.mjs";

const __dir = dirname(fileURLToPath(import.meta.url));
const data = JSON.parse(
  readFileSync(join(__dir, "dev-templates-remaining.data.json"), "utf8"),
);

export function getRemaining() {
  if (data.length !== 116) {
    throw new Error(`getRemaining: expected 116, got ${data.length}`);
  }
  return data.map((d) => c(d.id, d.name, d.description, d.tags, d.lines));
}
