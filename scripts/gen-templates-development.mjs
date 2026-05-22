import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getTemplates } from "./dev-templates-entries.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, "templates-development.ts");

const esc = (s) =>
  s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
const L = (a) => a.filter((x) => x != null).join("\n");

function T(o) {
  return `  {
    id: ${JSON.stringify(o.id)},
    name: ${JSON.stringify(o.name)},
    category: "development",
    description: ${JSON.stringify(o.description)},
    tags: ${JSON.stringify(o.tags)},
    content: \`${esc(o.content)}\`,
  }`;
}
const B = [];
const add = (o) => B.push(T(o));

function readme(t, d, g, f) {
  return L([
    "# [Project Name]",
    "",
    t,
    "",
    `> ${f}`,
    "",
    "## Badges (optional)",
    "- CI: [badge url]",
    "- Version: [semver or tag]",
    "",
    "## Table of contents",
    "- [Overview](#overview)",
    "- [Install](#install)",
    "- [Quick start](#quick-start)",
    "- [Configuration](#configuration)",
    "- [Scripts & tooling](#scripts--tooling)",
    "- [Testing](#testing)",
    "- [Troubleshooting](#troubleshooting)",
    "- [Releases & compatibility](#releases--compatibility)",
    "- [Security](#security)",
    "- [Contributing](#contributing)",
    "- [License](#license)",
    "",
    "## Overview",
    "- **What it does:** [1–2 sentences]",
    `- **For:** ${d}`,
    "- **Key outcomes:** [bullets]",
    "- **Not in scope (yet):** [bullets]",
    "",
    "## Install",
    "```bash",
    "git clone [repo-url].git",
    "cd [repo-name]",
    "[package manager install command, e.g. pnpm i / pip install -e .]",
    "```",
    "",
    "## Quick start",
    "```bash",
    g,
    "[copy/paste a minimal command sequence users can run today]",
    "```",
    "",
    "## Configuration",
    "| Name | Type | Default | Description |",
    "| --- | --- | --- | --- |",
    "| `[ENV_1]` | string | [value] | [purpose] |",
    "| `[ENV_2]` | int/bool | [value] | [purpose] |",
    "",
    "Additional files:",
    "- `[.env.example]` / `[config/*.yaml]`",
    "- `[secrets/]` *never commit secrets*",
    "",
    "## Scripts & tooling",
    "| Task | Command |",
    "| --- | --- |",
    "| build | `[npm run build / make build]` |",
    "| test | `[npm test / pytest]` |",
    "| lint | `[npm run lint / ruff check]` |",
    "| typecheck | `[tsc -p . / mypy .]` |",
    "",
    "## Testing",
    "- **Local:** [how to run the fastest test suite]",
    "- **CI parity:** [what must match CI]",
    "- **Integration/e2e:** [when/where, plus credentials]",
    "",
    "## Troubleshooting",
    "| Symptom | Likely cause | Next step |",
    "| --- | --- | --- |",
    "| [symptom] | [log/metric/flag] | [action] |",
    "- **Frequently asked issues:** [link to docs/FAQ]",
    "",
    "## Releases & compatibility",
    "- **Versioning policy:** [semver / calver / internal]",
    "- **Support window:** [N] supported releases / EOL: [date or policy]",
    "- **Changelog / release notes:** [path or process]",
    "",
    "## Security",
    "- **Report vulnerabilities:** [security contact / GitHub private advisory URL]",
    "- **Hardening notes:** [threat model link if public]",
    "",
    "## Contributing",
    "- Guide: [CONTRIBUTING.md] — *expectations, reviews, and coding standards*",
    "- **Code of conduct:** [link]",
    "- **Local setup issues:** *open a discussion or issue with logs* [template link]",
    "",
    "## License",
    "- SPDX: `[SPDX id]` — see `[LICENSE file]` and `[NOTICE file if applicable]`",
  ]);
}

const nameFix = {
  "development-readme-basic": "README: Basic",
  "development-readme-library": "README: Library",
  "development-readme-cli-tool": "README: CLI tool",
  "development-readme-api-service": "README: API service",
  "development-readme-monorepo": "README: Monorepo",
  "development-readme-game": "README: Game",
  "development-readme-mobile-app": "README: Mobile app",
  "development-readme-desktop-app": "README: Desktop app",
  "development-readme-browser-extension": "README: Browser extension",
  "development-readme-vscode-extension": "README: VS Code extension",
  "development-readme-npm-package": "README: npm package",
  "development-readme-python-package": "README: Python package",
  "development-readme-docker-image": "README: Docker image",
  "development-readme-kubernetes-operator": "README: Kubernetes operator",
  "development-readme-terraform-module": "README: Terraform module",
  "development-readme-github-action": "README: GitHub Action",
  "development-readme-microservice": "README: Microservice",
  "development-readme-serverless-function": "README: Serverless function",
  "development-readme-ml-model": "README: ML model",
  "development-readme-data-pipeline": "README: Data pipeline",
  "development-readme-sdk": "README: SDK",
  "development-readme-framework": "README: Framework",
  "development-readme-boilerplate": "README: Boilerplate",
  "development-readme-starter-template": "README: Starter template",
  "development-readme-demo-project": "README: Demo project",
};

const readmeSet = [
  {
    k: "basic",
    t: "A lightweight repository with a clear path from clone to first successful run.",
    d: "Developers and operators onboarding to a typical application or service.",
    f: "Clarity, defaults, and links to the next actions after install.",
    g: "npm test\n# or\nmake check",
  },
  {
    k: "library",
    t: "A reusable library you publish to a registry and consume as a dependency.",
    d: "Downstream app authors and internal platform consumers.",
    f: "Stable APIs, explicit semver policy, and migration notes across releases.",
    g: "npm run build && npm test\n# or\npython -m build && pytest",
  },
  {
    k: "cli-tool",
    t: "A command line interface with subcommands, flags, and help text.",
    d: "Power users, CI jobs, and developers automating local workflows.",
    f: "Predictable flags, good `--help`, and meaningful exit codes.",
    g: "[binary] --help\n[binary] [subcommand] --verbose",
  },
  {
    k: "api-service",
    t: "An HTTP/GraphQL/gRPC service exposing a network API to clients.",
    d: "Client engineers and SREs integrating and operating the service.",
    f: "Auth model, base URLs, idempotency, and rate limits.",
    g: "curl -H 'Authorization: Bearer [token]' [baseUrl]/[path]",
  },
  {
    k: "monorepo",
    t: "A multi-package repository sharing tooling, CI, and often a release process.",
    d: "Teams building several related components from one place.",
    f: "Workspace boundaries, affected builds, and shared dependency upgrades.",
    g: "pnpm -r test\n# or\nturbo run test",
  },
  {
    k: "game",
    t: "A game project with assets, build targets, and platform-specific output.",
    d: "Gameplay engineers, tools programmers, and build engineers.",
    f: "Engine version, build flavors, and platform-specific gotchas.",
    g: "open Project.sln\n# or\n./Build.sh -target Editor",
  },
  {
    k: "mobile-app",
    t: "A mobile application targeting iOS, Android, or both via a cross-platform stack.",
    d: "Mobile engineers, QA, and release managers.",
    f: "Signing, store requirements, and device/OS matrix.",
    g: "npx pod-install # iOS\ncd android && ./gradlew assembleDebug",
  },
  {
    k: "desktop-app",
    t: "A desktop app distributed as installers, packages, or portable bundles.",
    d: "Desktop developers and support handling OS-specific issues.",
    f: "Auto-update policy, system permissions, and crash diagnostics.",
    g: "npm start\n# or\ncmake --build out",
  },
  {
    k: "browser-extension",
    t: "A browser add-on (MV2/MV3) with background scripts, content scripts, and permissions.",
    d: "Extension devs, security reviewers, and store reviewers.",
    f: "Host permissions, remote code policy, and store packaging steps.",
    g: "npm run build:ext\nLoad unpacked from dist/",
  },
  {
    k: "vscode-extension",
    t: "A VS Code extension with activation events, settings, and commands.",
    d: "Editor users, extension devs, and release owners.",
    f: "Engine compatibility, marketplace listing, and debug instructions.",
    g: "code --extensionDevelopmentPath=./",
  },
  {
    k: "npm-package",
    t: "A JavaScript/TypeScript package published to npm (or a private registry).",
    d: "JS/TS consumers in Node, bundlers, and browsers (verify targets).",
    f: "Dual package hazards (CJS/ESM), `exports` map, and `types` fields.",
    g: "npm test\nnpm pack --dry-run",
  },
  {
    k: "python-package",
    t: "A Python project distributed via PyPI (or a private index).",
    d: "Python app authors and data engineers pulling your library.",
    f: "Supported Python versions, optional extras, and typing story.",
    g: "pip install -e .[dev]\npytest -q",
  },
  {
    k: "docker-image",
    t: "A container image with a well-defined process and config contract.",
    d: "Platform engineers and SREs running the image in clusters or VMs.",
    f: "Ports, user context, read-only root, and healthcheck endpoints.",
    g: "docker build -t [name]:[tag] .\ndocker run --rm -p 8080:8080 [name]:[tag]",
  },
  {
    k: "kubernetes-operator",
    t: "A Kubernetes operator reconciling custom resources in-cluster.",
    d: "Cluster admins and app teams owning CRD-driven workflows.",
    f: "CRD schema, RBAC, and safe upgrade/rollback of the controller.",
    g: "kubectl apply -f config/crd/\nmake run",
  },
  {
    k: "terraform-module",
    t: "A reusable Terraform module with explicit inputs/outputs and provider pins.",
    d: "Infra teams composing stacks from shared building blocks.",
    f: "State assumptions, idempotency, and backward-compatible inputs.",
    g: "terraform init\nterraform plan -var-file=dev.tfvars",
  },
  {
    k: "github-action",
    t: "A reusable action for GitHub Actions workflows and composite steps.",
    d: "Repo owners wiring CI/CD with a stable, versioned action interface.",
    f: "Runner compatibility, inputs/outputs, and least-privileged tokens.",
    g: "act -j test\n# or use workflow_dispatch in a fork",
  },
  {
    k: "microservice",
    t: "A deployable service with a narrow boundary and an explicit public contract.",
    d: "Neighboring services and the platform team operating clusters.",
    f: "SLIs/SLOs, dependency map, and backwards-compatible rollouts.",
    g: "docker compose up\n# or run via service mesh with dev credentials",
  },
  {
    k: "serverless-function",
    t: "A function-as-a-service unit triggered by events (HTTP, queues, schedules).",
    d: "Application owners and security engineers reviewing IAM and data flows.",
    f: "Cold starts, concurrency limits, and least-privileged roles.",
    g: "sam local invoke\n# or use your cloud emulator",
  },
  {
    k: "ml-model",
    t: "A machine learning model or serving stack with training and inference artifacts.",
    d: "ML engineers, MLOps, and downstream app teams consuming predictions.",
    f: "Dataset access, model cards, and reproducible training configs.",
    g: "python -m venv .venv && pip install -r requirements-train.txt\n# train and export",
  },
  {
    k: "data-pipeline",
    t: "A batch or streaming data pipeline with sources, transforms, and sinks.",
    d: "Data engineers, analysts, and on-call for pipeline failures.",
    f: "SLAs, late data, backfills, and data quality checks.",
    g: "make run-pipeline-dry\n# or trigger job in dev environment",
  },
  {
    k: "sdk",
    t: "An SDK that wraps a public API with idiomatic error handling and retries.",
    d: "Client developers integrating the API in multiple languages if applicable.",
    f: "Versioning, auth modes, and pagination or streaming semantics.",
    g: "npm test\n# or\ngo test ./...",
  },
  {
    k: "framework",
    t: "A development framework (UI or server) with conventions and extensibility points.",
    d: "Product engineers building on top and maintainers curating the surface area.",
    f: "Plugin model, major upgrades, and compatibility guarantees.",
    g: "npx [framework] create [app]\n[framework] dev",
  },
  {
    k: "boilerplate",
    t: "A starter repo meant to be copied, renamed, and customized quickly.",
    d: "Teams bootstrapping new services with a known-good default layout.",
    f: "Clear replace-me tokens, and a short checklist to delete demo code.",
    g: "pnpm i && pnpm dev",
  },
  {
    k: "starter-template",
    t: "An opinionated template maintained over time, often via a generator.",
    d: "New contributors and teams wanting the latest maintained defaults.",
    f: "Update path from older template versions and migration tips.",
    g: "pnpm create [generator]@latest [name]\ncd [name] && pnpm i",
  },
  {
    k: "demo-project",
    t: "A small demo showcasing features. Not a production hardening template.",
    d: "Evaluators, conference talks, and internal smoke tests.",
    f: "What is real vs stubbed, and how to extend toward production quality.",
    g: "pnpm i && pnpm demo",
  },
];

for (const r of readmeSet) {
  const id = `development-readme-${r.k}`;
  add({
    id,
    name: nameFix[id],
    description: r.t,
    tags: ["readme", "documentation", "onboarding", "developer-experience"],
    content: readme(r.t, r.d, r.g, r.f),
  });
}

for (const t of getTemplates()) {
  add({
    id: t.id,
    name: t.name,
    description: t.description,
    tags: t.tags,
    content: L(t.lines),
  });
}

if (B.length !== 150) {
  throw new Error(`Expected 150 templates, got ${B.length}`);
}

const header = `export interface TemplateSpec {
  id: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  content: string;
}

export const templates: TemplateSpec[] = [
`;

const footer = "];\n";
fs.writeFileSync(outPath, header + B.join(",\n") + footer, "utf8");
console.log("Wrote", outPath, "entries:", B.length);
