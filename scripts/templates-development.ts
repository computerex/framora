export interface TemplateSpec {
  id: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  content: string;
}

export const templates: TemplateSpec[] = [
  {
    id: "development-readme-basic",
    name: "README: Basic",
    category: "development",
    description: "A lightweight repository with a clear path from clone to first successful run.",
    tags: ["readme","documentation","onboarding","developer-experience"],
    content: `# [Project Name]

A lightweight repository with a clear path from clone to first successful run.

> Clarity, defaults, and links to the next actions after install.

## Badges (optional)
- CI: [badge url]
- Version: [semver or tag]

## Table of contents
- [Overview](#overview)
- [Install](#install)
- [Quick start](#quick-start)
- [Configuration](#configuration)
- [Scripts & tooling](#scripts--tooling)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Releases & compatibility](#releases--compatibility)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Overview
- **What it does:** [1–2 sentences]
- **For:** Developers and operators onboarding to a typical application or service.
- **Key outcomes:** [bullets]
- **Not in scope (yet):** [bullets]

## Install
\`\`\`bash
git clone [repo-url].git
cd [repo-name]
[package manager install command, e.g. pnpm i / pip install -e .]
\`\`\`

## Quick start
\`\`\`bash
npm test
# or
make check
[copy/paste a minimal command sequence users can run today]
\`\`\`

## Configuration
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| \`[ENV_1]\` | string | [value] | [purpose] |
| \`[ENV_2]\` | int/bool | [value] | [purpose] |

Additional files:
- \`[.env.example]\` / \`[config/*.yaml]\`
- \`[secrets/]\` *never commit secrets*

## Scripts & tooling
| Task | Command |
| --- | --- |
| build | \`[npm run build / make build]\` |
| test | \`[npm test / pytest]\` |
| lint | \`[npm run lint / ruff check]\` |
| typecheck | \`[tsc -p . / mypy .]\` |

## Testing
- **Local:** [how to run the fastest test suite]
- **CI parity:** [what must match CI]
- **Integration/e2e:** [when/where, plus credentials]

## Troubleshooting
| Symptom | Likely cause | Next step |
| --- | --- | --- |
| [symptom] | [log/metric/flag] | [action] |
- **Frequently asked issues:** [link to docs/FAQ]

## Releases & compatibility
- **Versioning policy:** [semver / calver / internal]
- **Support window:** [N] supported releases / EOL: [date or policy]
- **Changelog / release notes:** [path or process]

## Security
- **Report vulnerabilities:** [security contact / GitHub private advisory URL]
- **Hardening notes:** [threat model link if public]

## Contributing
- Guide: [CONTRIBUTING.md] — *expectations, reviews, and coding standards*
- **Code of conduct:** [link]
- **Local setup issues:** *open a discussion or issue with logs* [template link]

## License
- SPDX: \`[SPDX id]\` — see \`[LICENSE file]\` and \`[NOTICE file if applicable]\``,
  },
  {
    id: "development-readme-library",
    name: "README: Library",
    category: "development",
    description: "A reusable library you publish to a registry and consume as a dependency.",
    tags: ["readme","documentation","onboarding","developer-experience"],
    content: `# [Project Name]

A reusable library you publish to a registry and consume as a dependency.

> Stable APIs, explicit semver policy, and migration notes across releases.

## Badges (optional)
- CI: [badge url]
- Version: [semver or tag]

## Table of contents
- [Overview](#overview)
- [Install](#install)
- [Quick start](#quick-start)
- [Configuration](#configuration)
- [Scripts & tooling](#scripts--tooling)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Releases & compatibility](#releases--compatibility)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Overview
- **What it does:** [1–2 sentences]
- **For:** Downstream app authors and internal platform consumers.
- **Key outcomes:** [bullets]
- **Not in scope (yet):** [bullets]

## Install
\`\`\`bash
git clone [repo-url].git
cd [repo-name]
[package manager install command, e.g. pnpm i / pip install -e .]
\`\`\`

## Quick start
\`\`\`bash
npm run build && npm test
# or
python -m build && pytest
[copy/paste a minimal command sequence users can run today]
\`\`\`

## Configuration
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| \`[ENV_1]\` | string | [value] | [purpose] |
| \`[ENV_2]\` | int/bool | [value] | [purpose] |

Additional files:
- \`[.env.example]\` / \`[config/*.yaml]\`
- \`[secrets/]\` *never commit secrets*

## Scripts & tooling
| Task | Command |
| --- | --- |
| build | \`[npm run build / make build]\` |
| test | \`[npm test / pytest]\` |
| lint | \`[npm run lint / ruff check]\` |
| typecheck | \`[tsc -p . / mypy .]\` |

## Testing
- **Local:** [how to run the fastest test suite]
- **CI parity:** [what must match CI]
- **Integration/e2e:** [when/where, plus credentials]

## Troubleshooting
| Symptom | Likely cause | Next step |
| --- | --- | --- |
| [symptom] | [log/metric/flag] | [action] |
- **Frequently asked issues:** [link to docs/FAQ]

## Releases & compatibility
- **Versioning policy:** [semver / calver / internal]
- **Support window:** [N] supported releases / EOL: [date or policy]
- **Changelog / release notes:** [path or process]

## Security
- **Report vulnerabilities:** [security contact / GitHub private advisory URL]
- **Hardening notes:** [threat model link if public]

## Contributing
- Guide: [CONTRIBUTING.md] — *expectations, reviews, and coding standards*
- **Code of conduct:** [link]
- **Local setup issues:** *open a discussion or issue with logs* [template link]

## License
- SPDX: \`[SPDX id]\` — see \`[LICENSE file]\` and \`[NOTICE file if applicable]\``,
  },
  {
    id: "development-readme-cli-tool",
    name: "README: CLI tool",
    category: "development",
    description: "A command line interface with subcommands, flags, and help text.",
    tags: ["readme","documentation","onboarding","developer-experience"],
    content: `# [Project Name]

A command line interface with subcommands, flags, and help text.

> Predictable flags, good \`--help\`, and meaningful exit codes.

## Badges (optional)
- CI: [badge url]
- Version: [semver or tag]

## Table of contents
- [Overview](#overview)
- [Install](#install)
- [Quick start](#quick-start)
- [Configuration](#configuration)
- [Scripts & tooling](#scripts--tooling)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Releases & compatibility](#releases--compatibility)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Overview
- **What it does:** [1–2 sentences]
- **For:** Power users, CI jobs, and developers automating local workflows.
- **Key outcomes:** [bullets]
- **Not in scope (yet):** [bullets]

## Install
\`\`\`bash
git clone [repo-url].git
cd [repo-name]
[package manager install command, e.g. pnpm i / pip install -e .]
\`\`\`

## Quick start
\`\`\`bash
[binary] --help
[binary] [subcommand] --verbose
[copy/paste a minimal command sequence users can run today]
\`\`\`

## Configuration
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| \`[ENV_1]\` | string | [value] | [purpose] |
| \`[ENV_2]\` | int/bool | [value] | [purpose] |

Additional files:
- \`[.env.example]\` / \`[config/*.yaml]\`
- \`[secrets/]\` *never commit secrets*

## Scripts & tooling
| Task | Command |
| --- | --- |
| build | \`[npm run build / make build]\` |
| test | \`[npm test / pytest]\` |
| lint | \`[npm run lint / ruff check]\` |
| typecheck | \`[tsc -p . / mypy .]\` |

## Testing
- **Local:** [how to run the fastest test suite]
- **CI parity:** [what must match CI]
- **Integration/e2e:** [when/where, plus credentials]

## Troubleshooting
| Symptom | Likely cause | Next step |
| --- | --- | --- |
| [symptom] | [log/metric/flag] | [action] |
- **Frequently asked issues:** [link to docs/FAQ]

## Releases & compatibility
- **Versioning policy:** [semver / calver / internal]
- **Support window:** [N] supported releases / EOL: [date or policy]
- **Changelog / release notes:** [path or process]

## Security
- **Report vulnerabilities:** [security contact / GitHub private advisory URL]
- **Hardening notes:** [threat model link if public]

## Contributing
- Guide: [CONTRIBUTING.md] — *expectations, reviews, and coding standards*
- **Code of conduct:** [link]
- **Local setup issues:** *open a discussion or issue with logs* [template link]

## License
- SPDX: \`[SPDX id]\` — see \`[LICENSE file]\` and \`[NOTICE file if applicable]\``,
  },
  {
    id: "development-readme-api-service",
    name: "README: API service",
    category: "development",
    description: "An HTTP/GraphQL/gRPC service exposing a network API to clients.",
    tags: ["readme","documentation","onboarding","developer-experience"],
    content: `# [Project Name]

An HTTP/GraphQL/gRPC service exposing a network API to clients.

> Auth model, base URLs, idempotency, and rate limits.

## Badges (optional)
- CI: [badge url]
- Version: [semver or tag]

## Table of contents
- [Overview](#overview)
- [Install](#install)
- [Quick start](#quick-start)
- [Configuration](#configuration)
- [Scripts & tooling](#scripts--tooling)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Releases & compatibility](#releases--compatibility)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Overview
- **What it does:** [1–2 sentences]
- **For:** Client engineers and SREs integrating and operating the service.
- **Key outcomes:** [bullets]
- **Not in scope (yet):** [bullets]

## Install
\`\`\`bash
git clone [repo-url].git
cd [repo-name]
[package manager install command, e.g. pnpm i / pip install -e .]
\`\`\`

## Quick start
\`\`\`bash
curl -H 'Authorization: Bearer [token]' [baseUrl]/[path]
[copy/paste a minimal command sequence users can run today]
\`\`\`

## Configuration
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| \`[ENV_1]\` | string | [value] | [purpose] |
| \`[ENV_2]\` | int/bool | [value] | [purpose] |

Additional files:
- \`[.env.example]\` / \`[config/*.yaml]\`
- \`[secrets/]\` *never commit secrets*

## Scripts & tooling
| Task | Command |
| --- | --- |
| build | \`[npm run build / make build]\` |
| test | \`[npm test / pytest]\` |
| lint | \`[npm run lint / ruff check]\` |
| typecheck | \`[tsc -p . / mypy .]\` |

## Testing
- **Local:** [how to run the fastest test suite]
- **CI parity:** [what must match CI]
- **Integration/e2e:** [when/where, plus credentials]

## Troubleshooting
| Symptom | Likely cause | Next step |
| --- | --- | --- |
| [symptom] | [log/metric/flag] | [action] |
- **Frequently asked issues:** [link to docs/FAQ]

## Releases & compatibility
- **Versioning policy:** [semver / calver / internal]
- **Support window:** [N] supported releases / EOL: [date or policy]
- **Changelog / release notes:** [path or process]

## Security
- **Report vulnerabilities:** [security contact / GitHub private advisory URL]
- **Hardening notes:** [threat model link if public]

## Contributing
- Guide: [CONTRIBUTING.md] — *expectations, reviews, and coding standards*
- **Code of conduct:** [link]
- **Local setup issues:** *open a discussion or issue with logs* [template link]

## License
- SPDX: \`[SPDX id]\` — see \`[LICENSE file]\` and \`[NOTICE file if applicable]\``,
  },
  {
    id: "development-readme-monorepo",
    name: "README: Monorepo",
    category: "development",
    description: "A multi-package repository sharing tooling, CI, and often a release process.",
    tags: ["readme","documentation","onboarding","developer-experience"],
    content: `# [Project Name]

A multi-package repository sharing tooling, CI, and often a release process.

> Workspace boundaries, affected builds, and shared dependency upgrades.

## Badges (optional)
- CI: [badge url]
- Version: [semver or tag]

## Table of contents
- [Overview](#overview)
- [Install](#install)
- [Quick start](#quick-start)
- [Configuration](#configuration)
- [Scripts & tooling](#scripts--tooling)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Releases & compatibility](#releases--compatibility)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Overview
- **What it does:** [1–2 sentences]
- **For:** Teams building several related components from one place.
- **Key outcomes:** [bullets]
- **Not in scope (yet):** [bullets]

## Install
\`\`\`bash
git clone [repo-url].git
cd [repo-name]
[package manager install command, e.g. pnpm i / pip install -e .]
\`\`\`

## Quick start
\`\`\`bash
pnpm -r test
# or
turbo run test
[copy/paste a minimal command sequence users can run today]
\`\`\`

## Configuration
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| \`[ENV_1]\` | string | [value] | [purpose] |
| \`[ENV_2]\` | int/bool | [value] | [purpose] |

Additional files:
- \`[.env.example]\` / \`[config/*.yaml]\`
- \`[secrets/]\` *never commit secrets*

## Scripts & tooling
| Task | Command |
| --- | --- |
| build | \`[npm run build / make build]\` |
| test | \`[npm test / pytest]\` |
| lint | \`[npm run lint / ruff check]\` |
| typecheck | \`[tsc -p . / mypy .]\` |

## Testing
- **Local:** [how to run the fastest test suite]
- **CI parity:** [what must match CI]
- **Integration/e2e:** [when/where, plus credentials]

## Troubleshooting
| Symptom | Likely cause | Next step |
| --- | --- | --- |
| [symptom] | [log/metric/flag] | [action] |
- **Frequently asked issues:** [link to docs/FAQ]

## Releases & compatibility
- **Versioning policy:** [semver / calver / internal]
- **Support window:** [N] supported releases / EOL: [date or policy]
- **Changelog / release notes:** [path or process]

## Security
- **Report vulnerabilities:** [security contact / GitHub private advisory URL]
- **Hardening notes:** [threat model link if public]

## Contributing
- Guide: [CONTRIBUTING.md] — *expectations, reviews, and coding standards*
- **Code of conduct:** [link]
- **Local setup issues:** *open a discussion or issue with logs* [template link]

## License
- SPDX: \`[SPDX id]\` — see \`[LICENSE file]\` and \`[NOTICE file if applicable]\``,
  },
  {
    id: "development-readme-game",
    name: "README: Game",
    category: "development",
    description: "A game project with assets, build targets, and platform-specific output.",
    tags: ["readme","documentation","onboarding","developer-experience"],
    content: `# [Project Name]

A game project with assets, build targets, and platform-specific output.

> Engine version, build flavors, and platform-specific gotchas.

## Badges (optional)
- CI: [badge url]
- Version: [semver or tag]

## Table of contents
- [Overview](#overview)
- [Install](#install)
- [Quick start](#quick-start)
- [Configuration](#configuration)
- [Scripts & tooling](#scripts--tooling)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Releases & compatibility](#releases--compatibility)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Overview
- **What it does:** [1–2 sentences]
- **For:** Gameplay engineers, tools programmers, and build engineers.
- **Key outcomes:** [bullets]
- **Not in scope (yet):** [bullets]

## Install
\`\`\`bash
git clone [repo-url].git
cd [repo-name]
[package manager install command, e.g. pnpm i / pip install -e .]
\`\`\`

## Quick start
\`\`\`bash
open Project.sln
# or
./Build.sh -target Editor
[copy/paste a minimal command sequence users can run today]
\`\`\`

## Configuration
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| \`[ENV_1]\` | string | [value] | [purpose] |
| \`[ENV_2]\` | int/bool | [value] | [purpose] |

Additional files:
- \`[.env.example]\` / \`[config/*.yaml]\`
- \`[secrets/]\` *never commit secrets*

## Scripts & tooling
| Task | Command |
| --- | --- |
| build | \`[npm run build / make build]\` |
| test | \`[npm test / pytest]\` |
| lint | \`[npm run lint / ruff check]\` |
| typecheck | \`[tsc -p . / mypy .]\` |

## Testing
- **Local:** [how to run the fastest test suite]
- **CI parity:** [what must match CI]
- **Integration/e2e:** [when/where, plus credentials]

## Troubleshooting
| Symptom | Likely cause | Next step |
| --- | --- | --- |
| [symptom] | [log/metric/flag] | [action] |
- **Frequently asked issues:** [link to docs/FAQ]

## Releases & compatibility
- **Versioning policy:** [semver / calver / internal]
- **Support window:** [N] supported releases / EOL: [date or policy]
- **Changelog / release notes:** [path or process]

## Security
- **Report vulnerabilities:** [security contact / GitHub private advisory URL]
- **Hardening notes:** [threat model link if public]

## Contributing
- Guide: [CONTRIBUTING.md] — *expectations, reviews, and coding standards*
- **Code of conduct:** [link]
- **Local setup issues:** *open a discussion or issue with logs* [template link]

## License
- SPDX: \`[SPDX id]\` — see \`[LICENSE file]\` and \`[NOTICE file if applicable]\``,
  },
  {
    id: "development-readme-mobile-app",
    name: "README: Mobile app",
    category: "development",
    description: "A mobile application targeting iOS, Android, or both via a cross-platform stack.",
    tags: ["readme","documentation","onboarding","developer-experience"],
    content: `# [Project Name]

A mobile application targeting iOS, Android, or both via a cross-platform stack.

> Signing, store requirements, and device/OS matrix.

## Badges (optional)
- CI: [badge url]
- Version: [semver or tag]

## Table of contents
- [Overview](#overview)
- [Install](#install)
- [Quick start](#quick-start)
- [Configuration](#configuration)
- [Scripts & tooling](#scripts--tooling)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Releases & compatibility](#releases--compatibility)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Overview
- **What it does:** [1–2 sentences]
- **For:** Mobile engineers, QA, and release managers.
- **Key outcomes:** [bullets]
- **Not in scope (yet):** [bullets]

## Install
\`\`\`bash
git clone [repo-url].git
cd [repo-name]
[package manager install command, e.g. pnpm i / pip install -e .]
\`\`\`

## Quick start
\`\`\`bash
npx pod-install # iOS
cd android && ./gradlew assembleDebug
[copy/paste a minimal command sequence users can run today]
\`\`\`

## Configuration
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| \`[ENV_1]\` | string | [value] | [purpose] |
| \`[ENV_2]\` | int/bool | [value] | [purpose] |

Additional files:
- \`[.env.example]\` / \`[config/*.yaml]\`
- \`[secrets/]\` *never commit secrets*

## Scripts & tooling
| Task | Command |
| --- | --- |
| build | \`[npm run build / make build]\` |
| test | \`[npm test / pytest]\` |
| lint | \`[npm run lint / ruff check]\` |
| typecheck | \`[tsc -p . / mypy .]\` |

## Testing
- **Local:** [how to run the fastest test suite]
- **CI parity:** [what must match CI]
- **Integration/e2e:** [when/where, plus credentials]

## Troubleshooting
| Symptom | Likely cause | Next step |
| --- | --- | --- |
| [symptom] | [log/metric/flag] | [action] |
- **Frequently asked issues:** [link to docs/FAQ]

## Releases & compatibility
- **Versioning policy:** [semver / calver / internal]
- **Support window:** [N] supported releases / EOL: [date or policy]
- **Changelog / release notes:** [path or process]

## Security
- **Report vulnerabilities:** [security contact / GitHub private advisory URL]
- **Hardening notes:** [threat model link if public]

## Contributing
- Guide: [CONTRIBUTING.md] — *expectations, reviews, and coding standards*
- **Code of conduct:** [link]
- **Local setup issues:** *open a discussion or issue with logs* [template link]

## License
- SPDX: \`[SPDX id]\` — see \`[LICENSE file]\` and \`[NOTICE file if applicable]\``,
  },
  {
    id: "development-readme-desktop-app",
    name: "README: Desktop app",
    category: "development",
    description: "A desktop app distributed as installers, packages, or portable bundles.",
    tags: ["readme","documentation","onboarding","developer-experience"],
    content: `# [Project Name]

A desktop app distributed as installers, packages, or portable bundles.

> Auto-update policy, system permissions, and crash diagnostics.

## Badges (optional)
- CI: [badge url]
- Version: [semver or tag]

## Table of contents
- [Overview](#overview)
- [Install](#install)
- [Quick start](#quick-start)
- [Configuration](#configuration)
- [Scripts & tooling](#scripts--tooling)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Releases & compatibility](#releases--compatibility)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Overview
- **What it does:** [1–2 sentences]
- **For:** Desktop developers and support handling OS-specific issues.
- **Key outcomes:** [bullets]
- **Not in scope (yet):** [bullets]

## Install
\`\`\`bash
git clone [repo-url].git
cd [repo-name]
[package manager install command, e.g. pnpm i / pip install -e .]
\`\`\`

## Quick start
\`\`\`bash
npm start
# or
cmake --build out
[copy/paste a minimal command sequence users can run today]
\`\`\`

## Configuration
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| \`[ENV_1]\` | string | [value] | [purpose] |
| \`[ENV_2]\` | int/bool | [value] | [purpose] |

Additional files:
- \`[.env.example]\` / \`[config/*.yaml]\`
- \`[secrets/]\` *never commit secrets*

## Scripts & tooling
| Task | Command |
| --- | --- |
| build | \`[npm run build / make build]\` |
| test | \`[npm test / pytest]\` |
| lint | \`[npm run lint / ruff check]\` |
| typecheck | \`[tsc -p . / mypy .]\` |

## Testing
- **Local:** [how to run the fastest test suite]
- **CI parity:** [what must match CI]
- **Integration/e2e:** [when/where, plus credentials]

## Troubleshooting
| Symptom | Likely cause | Next step |
| --- | --- | --- |
| [symptom] | [log/metric/flag] | [action] |
- **Frequently asked issues:** [link to docs/FAQ]

## Releases & compatibility
- **Versioning policy:** [semver / calver / internal]
- **Support window:** [N] supported releases / EOL: [date or policy]
- **Changelog / release notes:** [path or process]

## Security
- **Report vulnerabilities:** [security contact / GitHub private advisory URL]
- **Hardening notes:** [threat model link if public]

## Contributing
- Guide: [CONTRIBUTING.md] — *expectations, reviews, and coding standards*
- **Code of conduct:** [link]
- **Local setup issues:** *open a discussion or issue with logs* [template link]

## License
- SPDX: \`[SPDX id]\` — see \`[LICENSE file]\` and \`[NOTICE file if applicable]\``,
  },
  {
    id: "development-readme-browser-extension",
    name: "README: Browser extension",
    category: "development",
    description: "A browser add-on (MV2/MV3) with background scripts, content scripts, and permissions.",
    tags: ["readme","documentation","onboarding","developer-experience"],
    content: `# [Project Name]

A browser add-on (MV2/MV3) with background scripts, content scripts, and permissions.

> Host permissions, remote code policy, and store packaging steps.

## Badges (optional)
- CI: [badge url]
- Version: [semver or tag]

## Table of contents
- [Overview](#overview)
- [Install](#install)
- [Quick start](#quick-start)
- [Configuration](#configuration)
- [Scripts & tooling](#scripts--tooling)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Releases & compatibility](#releases--compatibility)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Overview
- **What it does:** [1–2 sentences]
- **For:** Extension devs, security reviewers, and store reviewers.
- **Key outcomes:** [bullets]
- **Not in scope (yet):** [bullets]

## Install
\`\`\`bash
git clone [repo-url].git
cd [repo-name]
[package manager install command, e.g. pnpm i / pip install -e .]
\`\`\`

## Quick start
\`\`\`bash
npm run build:ext
Load unpacked from dist/
[copy/paste a minimal command sequence users can run today]
\`\`\`

## Configuration
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| \`[ENV_1]\` | string | [value] | [purpose] |
| \`[ENV_2]\` | int/bool | [value] | [purpose] |

Additional files:
- \`[.env.example]\` / \`[config/*.yaml]\`
- \`[secrets/]\` *never commit secrets*

## Scripts & tooling
| Task | Command |
| --- | --- |
| build | \`[npm run build / make build]\` |
| test | \`[npm test / pytest]\` |
| lint | \`[npm run lint / ruff check]\` |
| typecheck | \`[tsc -p . / mypy .]\` |

## Testing
- **Local:** [how to run the fastest test suite]
- **CI parity:** [what must match CI]
- **Integration/e2e:** [when/where, plus credentials]

## Troubleshooting
| Symptom | Likely cause | Next step |
| --- | --- | --- |
| [symptom] | [log/metric/flag] | [action] |
- **Frequently asked issues:** [link to docs/FAQ]

## Releases & compatibility
- **Versioning policy:** [semver / calver / internal]
- **Support window:** [N] supported releases / EOL: [date or policy]
- **Changelog / release notes:** [path or process]

## Security
- **Report vulnerabilities:** [security contact / GitHub private advisory URL]
- **Hardening notes:** [threat model link if public]

## Contributing
- Guide: [CONTRIBUTING.md] — *expectations, reviews, and coding standards*
- **Code of conduct:** [link]
- **Local setup issues:** *open a discussion or issue with logs* [template link]

## License
- SPDX: \`[SPDX id]\` — see \`[LICENSE file]\` and \`[NOTICE file if applicable]\``,
  },
  {
    id: "development-readme-vscode-extension",
    name: "README: VS Code extension",
    category: "development",
    description: "A VS Code extension with activation events, settings, and commands.",
    tags: ["readme","documentation","onboarding","developer-experience"],
    content: `# [Project Name]

A VS Code extension with activation events, settings, and commands.

> Engine compatibility, marketplace listing, and debug instructions.

## Badges (optional)
- CI: [badge url]
- Version: [semver or tag]

## Table of contents
- [Overview](#overview)
- [Install](#install)
- [Quick start](#quick-start)
- [Configuration](#configuration)
- [Scripts & tooling](#scripts--tooling)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Releases & compatibility](#releases--compatibility)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Overview
- **What it does:** [1–2 sentences]
- **For:** Editor users, extension devs, and release owners.
- **Key outcomes:** [bullets]
- **Not in scope (yet):** [bullets]

## Install
\`\`\`bash
git clone [repo-url].git
cd [repo-name]
[package manager install command, e.g. pnpm i / pip install -e .]
\`\`\`

## Quick start
\`\`\`bash
code --extensionDevelopmentPath=./
[copy/paste a minimal command sequence users can run today]
\`\`\`

## Configuration
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| \`[ENV_1]\` | string | [value] | [purpose] |
| \`[ENV_2]\` | int/bool | [value] | [purpose] |

Additional files:
- \`[.env.example]\` / \`[config/*.yaml]\`
- \`[secrets/]\` *never commit secrets*

## Scripts & tooling
| Task | Command |
| --- | --- |
| build | \`[npm run build / make build]\` |
| test | \`[npm test / pytest]\` |
| lint | \`[npm run lint / ruff check]\` |
| typecheck | \`[tsc -p . / mypy .]\` |

## Testing
- **Local:** [how to run the fastest test suite]
- **CI parity:** [what must match CI]
- **Integration/e2e:** [when/where, plus credentials]

## Troubleshooting
| Symptom | Likely cause | Next step |
| --- | --- | --- |
| [symptom] | [log/metric/flag] | [action] |
- **Frequently asked issues:** [link to docs/FAQ]

## Releases & compatibility
- **Versioning policy:** [semver / calver / internal]
- **Support window:** [N] supported releases / EOL: [date or policy]
- **Changelog / release notes:** [path or process]

## Security
- **Report vulnerabilities:** [security contact / GitHub private advisory URL]
- **Hardening notes:** [threat model link if public]

## Contributing
- Guide: [CONTRIBUTING.md] — *expectations, reviews, and coding standards*
- **Code of conduct:** [link]
- **Local setup issues:** *open a discussion or issue with logs* [template link]

## License
- SPDX: \`[SPDX id]\` — see \`[LICENSE file]\` and \`[NOTICE file if applicable]\``,
  },
  {
    id: "development-readme-npm-package",
    name: "README: npm package",
    category: "development",
    description: "A JavaScript/TypeScript package published to npm (or a private registry).",
    tags: ["readme","documentation","onboarding","developer-experience"],
    content: `# [Project Name]

A JavaScript/TypeScript package published to npm (or a private registry).

> Dual package hazards (CJS/ESM), \`exports\` map, and \`types\` fields.

## Badges (optional)
- CI: [badge url]
- Version: [semver or tag]

## Table of contents
- [Overview](#overview)
- [Install](#install)
- [Quick start](#quick-start)
- [Configuration](#configuration)
- [Scripts & tooling](#scripts--tooling)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Releases & compatibility](#releases--compatibility)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Overview
- **What it does:** [1–2 sentences]
- **For:** JS/TS consumers in Node, bundlers, and browsers (verify targets).
- **Key outcomes:** [bullets]
- **Not in scope (yet):** [bullets]

## Install
\`\`\`bash
git clone [repo-url].git
cd [repo-name]
[package manager install command, e.g. pnpm i / pip install -e .]
\`\`\`

## Quick start
\`\`\`bash
npm test
npm pack --dry-run
[copy/paste a minimal command sequence users can run today]
\`\`\`

## Configuration
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| \`[ENV_1]\` | string | [value] | [purpose] |
| \`[ENV_2]\` | int/bool | [value] | [purpose] |

Additional files:
- \`[.env.example]\` / \`[config/*.yaml]\`
- \`[secrets/]\` *never commit secrets*

## Scripts & tooling
| Task | Command |
| --- | --- |
| build | \`[npm run build / make build]\` |
| test | \`[npm test / pytest]\` |
| lint | \`[npm run lint / ruff check]\` |
| typecheck | \`[tsc -p . / mypy .]\` |

## Testing
- **Local:** [how to run the fastest test suite]
- **CI parity:** [what must match CI]
- **Integration/e2e:** [when/where, plus credentials]

## Troubleshooting
| Symptom | Likely cause | Next step |
| --- | --- | --- |
| [symptom] | [log/metric/flag] | [action] |
- **Frequently asked issues:** [link to docs/FAQ]

## Releases & compatibility
- **Versioning policy:** [semver / calver / internal]
- **Support window:** [N] supported releases / EOL: [date or policy]
- **Changelog / release notes:** [path or process]

## Security
- **Report vulnerabilities:** [security contact / GitHub private advisory URL]
- **Hardening notes:** [threat model link if public]

## Contributing
- Guide: [CONTRIBUTING.md] — *expectations, reviews, and coding standards*
- **Code of conduct:** [link]
- **Local setup issues:** *open a discussion or issue with logs* [template link]

## License
- SPDX: \`[SPDX id]\` — see \`[LICENSE file]\` and \`[NOTICE file if applicable]\``,
  },
  {
    id: "development-readme-python-package",
    name: "README: Python package",
    category: "development",
    description: "A Python project distributed via PyPI (or a private index).",
    tags: ["readme","documentation","onboarding","developer-experience"],
    content: `# [Project Name]

A Python project distributed via PyPI (or a private index).

> Supported Python versions, optional extras, and typing story.

## Badges (optional)
- CI: [badge url]
- Version: [semver or tag]

## Table of contents
- [Overview](#overview)
- [Install](#install)
- [Quick start](#quick-start)
- [Configuration](#configuration)
- [Scripts & tooling](#scripts--tooling)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Releases & compatibility](#releases--compatibility)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Overview
- **What it does:** [1–2 sentences]
- **For:** Python app authors and data engineers pulling your library.
- **Key outcomes:** [bullets]
- **Not in scope (yet):** [bullets]

## Install
\`\`\`bash
git clone [repo-url].git
cd [repo-name]
[package manager install command, e.g. pnpm i / pip install -e .]
\`\`\`

## Quick start
\`\`\`bash
pip install -e .[dev]
pytest -q
[copy/paste a minimal command sequence users can run today]
\`\`\`

## Configuration
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| \`[ENV_1]\` | string | [value] | [purpose] |
| \`[ENV_2]\` | int/bool | [value] | [purpose] |

Additional files:
- \`[.env.example]\` / \`[config/*.yaml]\`
- \`[secrets/]\` *never commit secrets*

## Scripts & tooling
| Task | Command |
| --- | --- |
| build | \`[npm run build / make build]\` |
| test | \`[npm test / pytest]\` |
| lint | \`[npm run lint / ruff check]\` |
| typecheck | \`[tsc -p . / mypy .]\` |

## Testing
- **Local:** [how to run the fastest test suite]
- **CI parity:** [what must match CI]
- **Integration/e2e:** [when/where, plus credentials]

## Troubleshooting
| Symptom | Likely cause | Next step |
| --- | --- | --- |
| [symptom] | [log/metric/flag] | [action] |
- **Frequently asked issues:** [link to docs/FAQ]

## Releases & compatibility
- **Versioning policy:** [semver / calver / internal]
- **Support window:** [N] supported releases / EOL: [date or policy]
- **Changelog / release notes:** [path or process]

## Security
- **Report vulnerabilities:** [security contact / GitHub private advisory URL]
- **Hardening notes:** [threat model link if public]

## Contributing
- Guide: [CONTRIBUTING.md] — *expectations, reviews, and coding standards*
- **Code of conduct:** [link]
- **Local setup issues:** *open a discussion or issue with logs* [template link]

## License
- SPDX: \`[SPDX id]\` — see \`[LICENSE file]\` and \`[NOTICE file if applicable]\``,
  },
  {
    id: "development-readme-docker-image",
    name: "README: Docker image",
    category: "development",
    description: "A container image with a well-defined process and config contract.",
    tags: ["readme","documentation","onboarding","developer-experience"],
    content: `# [Project Name]

A container image with a well-defined process and config contract.

> Ports, user context, read-only root, and healthcheck endpoints.

## Badges (optional)
- CI: [badge url]
- Version: [semver or tag]

## Table of contents
- [Overview](#overview)
- [Install](#install)
- [Quick start](#quick-start)
- [Configuration](#configuration)
- [Scripts & tooling](#scripts--tooling)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Releases & compatibility](#releases--compatibility)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Overview
- **What it does:** [1–2 sentences]
- **For:** Platform engineers and SREs running the image in clusters or VMs.
- **Key outcomes:** [bullets]
- **Not in scope (yet):** [bullets]

## Install
\`\`\`bash
git clone [repo-url].git
cd [repo-name]
[package manager install command, e.g. pnpm i / pip install -e .]
\`\`\`

## Quick start
\`\`\`bash
docker build -t [name]:[tag] .
docker run --rm -p 8080:8080 [name]:[tag]
[copy/paste a minimal command sequence users can run today]
\`\`\`

## Configuration
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| \`[ENV_1]\` | string | [value] | [purpose] |
| \`[ENV_2]\` | int/bool | [value] | [purpose] |

Additional files:
- \`[.env.example]\` / \`[config/*.yaml]\`
- \`[secrets/]\` *never commit secrets*

## Scripts & tooling
| Task | Command |
| --- | --- |
| build | \`[npm run build / make build]\` |
| test | \`[npm test / pytest]\` |
| lint | \`[npm run lint / ruff check]\` |
| typecheck | \`[tsc -p . / mypy .]\` |

## Testing
- **Local:** [how to run the fastest test suite]
- **CI parity:** [what must match CI]
- **Integration/e2e:** [when/where, plus credentials]

## Troubleshooting
| Symptom | Likely cause | Next step |
| --- | --- | --- |
| [symptom] | [log/metric/flag] | [action] |
- **Frequently asked issues:** [link to docs/FAQ]

## Releases & compatibility
- **Versioning policy:** [semver / calver / internal]
- **Support window:** [N] supported releases / EOL: [date or policy]
- **Changelog / release notes:** [path or process]

## Security
- **Report vulnerabilities:** [security contact / GitHub private advisory URL]
- **Hardening notes:** [threat model link if public]

## Contributing
- Guide: [CONTRIBUTING.md] — *expectations, reviews, and coding standards*
- **Code of conduct:** [link]
- **Local setup issues:** *open a discussion or issue with logs* [template link]

## License
- SPDX: \`[SPDX id]\` — see \`[LICENSE file]\` and \`[NOTICE file if applicable]\``,
  },
  {
    id: "development-readme-kubernetes-operator",
    name: "README: Kubernetes operator",
    category: "development",
    description: "A Kubernetes operator reconciling custom resources in-cluster.",
    tags: ["readme","documentation","onboarding","developer-experience"],
    content: `# [Project Name]

A Kubernetes operator reconciling custom resources in-cluster.

> CRD schema, RBAC, and safe upgrade/rollback of the controller.

## Badges (optional)
- CI: [badge url]
- Version: [semver or tag]

## Table of contents
- [Overview](#overview)
- [Install](#install)
- [Quick start](#quick-start)
- [Configuration](#configuration)
- [Scripts & tooling](#scripts--tooling)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Releases & compatibility](#releases--compatibility)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Overview
- **What it does:** [1–2 sentences]
- **For:** Cluster admins and app teams owning CRD-driven workflows.
- **Key outcomes:** [bullets]
- **Not in scope (yet):** [bullets]

## Install
\`\`\`bash
git clone [repo-url].git
cd [repo-name]
[package manager install command, e.g. pnpm i / pip install -e .]
\`\`\`

## Quick start
\`\`\`bash
kubectl apply -f config/crd/
make run
[copy/paste a minimal command sequence users can run today]
\`\`\`

## Configuration
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| \`[ENV_1]\` | string | [value] | [purpose] |
| \`[ENV_2]\` | int/bool | [value] | [purpose] |

Additional files:
- \`[.env.example]\` / \`[config/*.yaml]\`
- \`[secrets/]\` *never commit secrets*

## Scripts & tooling
| Task | Command |
| --- | --- |
| build | \`[npm run build / make build]\` |
| test | \`[npm test / pytest]\` |
| lint | \`[npm run lint / ruff check]\` |
| typecheck | \`[tsc -p . / mypy .]\` |

## Testing
- **Local:** [how to run the fastest test suite]
- **CI parity:** [what must match CI]
- **Integration/e2e:** [when/where, plus credentials]

## Troubleshooting
| Symptom | Likely cause | Next step |
| --- | --- | --- |
| [symptom] | [log/metric/flag] | [action] |
- **Frequently asked issues:** [link to docs/FAQ]

## Releases & compatibility
- **Versioning policy:** [semver / calver / internal]
- **Support window:** [N] supported releases / EOL: [date or policy]
- **Changelog / release notes:** [path or process]

## Security
- **Report vulnerabilities:** [security contact / GitHub private advisory URL]
- **Hardening notes:** [threat model link if public]

## Contributing
- Guide: [CONTRIBUTING.md] — *expectations, reviews, and coding standards*
- **Code of conduct:** [link]
- **Local setup issues:** *open a discussion or issue with logs* [template link]

## License
- SPDX: \`[SPDX id]\` — see \`[LICENSE file]\` and \`[NOTICE file if applicable]\``,
  },
  {
    id: "development-readme-terraform-module",
    name: "README: Terraform module",
    category: "development",
    description: "A reusable Terraform module with explicit inputs/outputs and provider pins.",
    tags: ["readme","documentation","onboarding","developer-experience"],
    content: `# [Project Name]

A reusable Terraform module with explicit inputs/outputs and provider pins.

> State assumptions, idempotency, and backward-compatible inputs.

## Badges (optional)
- CI: [badge url]
- Version: [semver or tag]

## Table of contents
- [Overview](#overview)
- [Install](#install)
- [Quick start](#quick-start)
- [Configuration](#configuration)
- [Scripts & tooling](#scripts--tooling)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Releases & compatibility](#releases--compatibility)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Overview
- **What it does:** [1–2 sentences]
- **For:** Infra teams composing stacks from shared building blocks.
- **Key outcomes:** [bullets]
- **Not in scope (yet):** [bullets]

## Install
\`\`\`bash
git clone [repo-url].git
cd [repo-name]
[package manager install command, e.g. pnpm i / pip install -e .]
\`\`\`

## Quick start
\`\`\`bash
terraform init
terraform plan -var-file=dev.tfvars
[copy/paste a minimal command sequence users can run today]
\`\`\`

## Configuration
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| \`[ENV_1]\` | string | [value] | [purpose] |
| \`[ENV_2]\` | int/bool | [value] | [purpose] |

Additional files:
- \`[.env.example]\` / \`[config/*.yaml]\`
- \`[secrets/]\` *never commit secrets*

## Scripts & tooling
| Task | Command |
| --- | --- |
| build | \`[npm run build / make build]\` |
| test | \`[npm test / pytest]\` |
| lint | \`[npm run lint / ruff check]\` |
| typecheck | \`[tsc -p . / mypy .]\` |

## Testing
- **Local:** [how to run the fastest test suite]
- **CI parity:** [what must match CI]
- **Integration/e2e:** [when/where, plus credentials]

## Troubleshooting
| Symptom | Likely cause | Next step |
| --- | --- | --- |
| [symptom] | [log/metric/flag] | [action] |
- **Frequently asked issues:** [link to docs/FAQ]

## Releases & compatibility
- **Versioning policy:** [semver / calver / internal]
- **Support window:** [N] supported releases / EOL: [date or policy]
- **Changelog / release notes:** [path or process]

## Security
- **Report vulnerabilities:** [security contact / GitHub private advisory URL]
- **Hardening notes:** [threat model link if public]

## Contributing
- Guide: [CONTRIBUTING.md] — *expectations, reviews, and coding standards*
- **Code of conduct:** [link]
- **Local setup issues:** *open a discussion or issue with logs* [template link]

## License
- SPDX: \`[SPDX id]\` — see \`[LICENSE file]\` and \`[NOTICE file if applicable]\``,
  },
  {
    id: "development-readme-github-action",
    name: "README: GitHub Action",
    category: "development",
    description: "A reusable action for GitHub Actions workflows and composite steps.",
    tags: ["readme","documentation","onboarding","developer-experience"],
    content: `# [Project Name]

A reusable action for GitHub Actions workflows and composite steps.

> Runner compatibility, inputs/outputs, and least-privileged tokens.

## Badges (optional)
- CI: [badge url]
- Version: [semver or tag]

## Table of contents
- [Overview](#overview)
- [Install](#install)
- [Quick start](#quick-start)
- [Configuration](#configuration)
- [Scripts & tooling](#scripts--tooling)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Releases & compatibility](#releases--compatibility)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Overview
- **What it does:** [1–2 sentences]
- **For:** Repo owners wiring CI/CD with a stable, versioned action interface.
- **Key outcomes:** [bullets]
- **Not in scope (yet):** [bullets]

## Install
\`\`\`bash
git clone [repo-url].git
cd [repo-name]
[package manager install command, e.g. pnpm i / pip install -e .]
\`\`\`

## Quick start
\`\`\`bash
act -j test
# or use workflow_dispatch in a fork
[copy/paste a minimal command sequence users can run today]
\`\`\`

## Configuration
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| \`[ENV_1]\` | string | [value] | [purpose] |
| \`[ENV_2]\` | int/bool | [value] | [purpose] |

Additional files:
- \`[.env.example]\` / \`[config/*.yaml]\`
- \`[secrets/]\` *never commit secrets*

## Scripts & tooling
| Task | Command |
| --- | --- |
| build | \`[npm run build / make build]\` |
| test | \`[npm test / pytest]\` |
| lint | \`[npm run lint / ruff check]\` |
| typecheck | \`[tsc -p . / mypy .]\` |

## Testing
- **Local:** [how to run the fastest test suite]
- **CI parity:** [what must match CI]
- **Integration/e2e:** [when/where, plus credentials]

## Troubleshooting
| Symptom | Likely cause | Next step |
| --- | --- | --- |
| [symptom] | [log/metric/flag] | [action] |
- **Frequently asked issues:** [link to docs/FAQ]

## Releases & compatibility
- **Versioning policy:** [semver / calver / internal]
- **Support window:** [N] supported releases / EOL: [date or policy]
- **Changelog / release notes:** [path or process]

## Security
- **Report vulnerabilities:** [security contact / GitHub private advisory URL]
- **Hardening notes:** [threat model link if public]

## Contributing
- Guide: [CONTRIBUTING.md] — *expectations, reviews, and coding standards*
- **Code of conduct:** [link]
- **Local setup issues:** *open a discussion or issue with logs* [template link]

## License
- SPDX: \`[SPDX id]\` — see \`[LICENSE file]\` and \`[NOTICE file if applicable]\``,
  },
  {
    id: "development-readme-microservice",
    name: "README: Microservice",
    category: "development",
    description: "A deployable service with a narrow boundary and an explicit public contract.",
    tags: ["readme","documentation","onboarding","developer-experience"],
    content: `# [Project Name]

A deployable service with a narrow boundary and an explicit public contract.

> SLIs/SLOs, dependency map, and backwards-compatible rollouts.

## Badges (optional)
- CI: [badge url]
- Version: [semver or tag]

## Table of contents
- [Overview](#overview)
- [Install](#install)
- [Quick start](#quick-start)
- [Configuration](#configuration)
- [Scripts & tooling](#scripts--tooling)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Releases & compatibility](#releases--compatibility)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Overview
- **What it does:** [1–2 sentences]
- **For:** Neighboring services and the platform team operating clusters.
- **Key outcomes:** [bullets]
- **Not in scope (yet):** [bullets]

## Install
\`\`\`bash
git clone [repo-url].git
cd [repo-name]
[package manager install command, e.g. pnpm i / pip install -e .]
\`\`\`

## Quick start
\`\`\`bash
docker compose up
# or run via service mesh with dev credentials
[copy/paste a minimal command sequence users can run today]
\`\`\`

## Configuration
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| \`[ENV_1]\` | string | [value] | [purpose] |
| \`[ENV_2]\` | int/bool | [value] | [purpose] |

Additional files:
- \`[.env.example]\` / \`[config/*.yaml]\`
- \`[secrets/]\` *never commit secrets*

## Scripts & tooling
| Task | Command |
| --- | --- |
| build | \`[npm run build / make build]\` |
| test | \`[npm test / pytest]\` |
| lint | \`[npm run lint / ruff check]\` |
| typecheck | \`[tsc -p . / mypy .]\` |

## Testing
- **Local:** [how to run the fastest test suite]
- **CI parity:** [what must match CI]
- **Integration/e2e:** [when/where, plus credentials]

## Troubleshooting
| Symptom | Likely cause | Next step |
| --- | --- | --- |
| [symptom] | [log/metric/flag] | [action] |
- **Frequently asked issues:** [link to docs/FAQ]

## Releases & compatibility
- **Versioning policy:** [semver / calver / internal]
- **Support window:** [N] supported releases / EOL: [date or policy]
- **Changelog / release notes:** [path or process]

## Security
- **Report vulnerabilities:** [security contact / GitHub private advisory URL]
- **Hardening notes:** [threat model link if public]

## Contributing
- Guide: [CONTRIBUTING.md] — *expectations, reviews, and coding standards*
- **Code of conduct:** [link]
- **Local setup issues:** *open a discussion or issue with logs* [template link]

## License
- SPDX: \`[SPDX id]\` — see \`[LICENSE file]\` and \`[NOTICE file if applicable]\``,
  },
  {
    id: "development-readme-serverless-function",
    name: "README: Serverless function",
    category: "development",
    description: "A function-as-a-service unit triggered by events (HTTP, queues, schedules).",
    tags: ["readme","documentation","onboarding","developer-experience"],
    content: `# [Project Name]

A function-as-a-service unit triggered by events (HTTP, queues, schedules).

> Cold starts, concurrency limits, and least-privileged roles.

## Badges (optional)
- CI: [badge url]
- Version: [semver or tag]

## Table of contents
- [Overview](#overview)
- [Install](#install)
- [Quick start](#quick-start)
- [Configuration](#configuration)
- [Scripts & tooling](#scripts--tooling)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Releases & compatibility](#releases--compatibility)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Overview
- **What it does:** [1–2 sentences]
- **For:** Application owners and security engineers reviewing IAM and data flows.
- **Key outcomes:** [bullets]
- **Not in scope (yet):** [bullets]

## Install
\`\`\`bash
git clone [repo-url].git
cd [repo-name]
[package manager install command, e.g. pnpm i / pip install -e .]
\`\`\`

## Quick start
\`\`\`bash
sam local invoke
# or use your cloud emulator
[copy/paste a minimal command sequence users can run today]
\`\`\`

## Configuration
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| \`[ENV_1]\` | string | [value] | [purpose] |
| \`[ENV_2]\` | int/bool | [value] | [purpose] |

Additional files:
- \`[.env.example]\` / \`[config/*.yaml]\`
- \`[secrets/]\` *never commit secrets*

## Scripts & tooling
| Task | Command |
| --- | --- |
| build | \`[npm run build / make build]\` |
| test | \`[npm test / pytest]\` |
| lint | \`[npm run lint / ruff check]\` |
| typecheck | \`[tsc -p . / mypy .]\` |

## Testing
- **Local:** [how to run the fastest test suite]
- **CI parity:** [what must match CI]
- **Integration/e2e:** [when/where, plus credentials]

## Troubleshooting
| Symptom | Likely cause | Next step |
| --- | --- | --- |
| [symptom] | [log/metric/flag] | [action] |
- **Frequently asked issues:** [link to docs/FAQ]

## Releases & compatibility
- **Versioning policy:** [semver / calver / internal]
- **Support window:** [N] supported releases / EOL: [date or policy]
- **Changelog / release notes:** [path or process]

## Security
- **Report vulnerabilities:** [security contact / GitHub private advisory URL]
- **Hardening notes:** [threat model link if public]

## Contributing
- Guide: [CONTRIBUTING.md] — *expectations, reviews, and coding standards*
- **Code of conduct:** [link]
- **Local setup issues:** *open a discussion or issue with logs* [template link]

## License
- SPDX: \`[SPDX id]\` — see \`[LICENSE file]\` and \`[NOTICE file if applicable]\``,
  },
  {
    id: "development-readme-ml-model",
    name: "README: ML model",
    category: "development",
    description: "A machine learning model or serving stack with training and inference artifacts.",
    tags: ["readme","documentation","onboarding","developer-experience"],
    content: `# [Project Name]

A machine learning model or serving stack with training and inference artifacts.

> Dataset access, model cards, and reproducible training configs.

## Badges (optional)
- CI: [badge url]
- Version: [semver or tag]

## Table of contents
- [Overview](#overview)
- [Install](#install)
- [Quick start](#quick-start)
- [Configuration](#configuration)
- [Scripts & tooling](#scripts--tooling)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Releases & compatibility](#releases--compatibility)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Overview
- **What it does:** [1–2 sentences]
- **For:** ML engineers, MLOps, and downstream app teams consuming predictions.
- **Key outcomes:** [bullets]
- **Not in scope (yet):** [bullets]

## Install
\`\`\`bash
git clone [repo-url].git
cd [repo-name]
[package manager install command, e.g. pnpm i / pip install -e .]
\`\`\`

## Quick start
\`\`\`bash
python -m venv .venv && pip install -r requirements-train.txt
# train and export
[copy/paste a minimal command sequence users can run today]
\`\`\`

## Configuration
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| \`[ENV_1]\` | string | [value] | [purpose] |
| \`[ENV_2]\` | int/bool | [value] | [purpose] |

Additional files:
- \`[.env.example]\` / \`[config/*.yaml]\`
- \`[secrets/]\` *never commit secrets*

## Scripts & tooling
| Task | Command |
| --- | --- |
| build | \`[npm run build / make build]\` |
| test | \`[npm test / pytest]\` |
| lint | \`[npm run lint / ruff check]\` |
| typecheck | \`[tsc -p . / mypy .]\` |

## Testing
- **Local:** [how to run the fastest test suite]
- **CI parity:** [what must match CI]
- **Integration/e2e:** [when/where, plus credentials]

## Troubleshooting
| Symptom | Likely cause | Next step |
| --- | --- | --- |
| [symptom] | [log/metric/flag] | [action] |
- **Frequently asked issues:** [link to docs/FAQ]

## Releases & compatibility
- **Versioning policy:** [semver / calver / internal]
- **Support window:** [N] supported releases / EOL: [date or policy]
- **Changelog / release notes:** [path or process]

## Security
- **Report vulnerabilities:** [security contact / GitHub private advisory URL]
- **Hardening notes:** [threat model link if public]

## Contributing
- Guide: [CONTRIBUTING.md] — *expectations, reviews, and coding standards*
- **Code of conduct:** [link]
- **Local setup issues:** *open a discussion or issue with logs* [template link]

## License
- SPDX: \`[SPDX id]\` — see \`[LICENSE file]\` and \`[NOTICE file if applicable]\``,
  },
  {
    id: "development-readme-data-pipeline",
    name: "README: Data pipeline",
    category: "development",
    description: "A batch or streaming data pipeline with sources, transforms, and sinks.",
    tags: ["readme","documentation","onboarding","developer-experience"],
    content: `# [Project Name]

A batch or streaming data pipeline with sources, transforms, and sinks.

> SLAs, late data, backfills, and data quality checks.

## Badges (optional)
- CI: [badge url]
- Version: [semver or tag]

## Table of contents
- [Overview](#overview)
- [Install](#install)
- [Quick start](#quick-start)
- [Configuration](#configuration)
- [Scripts & tooling](#scripts--tooling)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Releases & compatibility](#releases--compatibility)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Overview
- **What it does:** [1–2 sentences]
- **For:** Data engineers, analysts, and on-call for pipeline failures.
- **Key outcomes:** [bullets]
- **Not in scope (yet):** [bullets]

## Install
\`\`\`bash
git clone [repo-url].git
cd [repo-name]
[package manager install command, e.g. pnpm i / pip install -e .]
\`\`\`

## Quick start
\`\`\`bash
make run-pipeline-dry
# or trigger job in dev environment
[copy/paste a minimal command sequence users can run today]
\`\`\`

## Configuration
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| \`[ENV_1]\` | string | [value] | [purpose] |
| \`[ENV_2]\` | int/bool | [value] | [purpose] |

Additional files:
- \`[.env.example]\` / \`[config/*.yaml]\`
- \`[secrets/]\` *never commit secrets*

## Scripts & tooling
| Task | Command |
| --- | --- |
| build | \`[npm run build / make build]\` |
| test | \`[npm test / pytest]\` |
| lint | \`[npm run lint / ruff check]\` |
| typecheck | \`[tsc -p . / mypy .]\` |

## Testing
- **Local:** [how to run the fastest test suite]
- **CI parity:** [what must match CI]
- **Integration/e2e:** [when/where, plus credentials]

## Troubleshooting
| Symptom | Likely cause | Next step |
| --- | --- | --- |
| [symptom] | [log/metric/flag] | [action] |
- **Frequently asked issues:** [link to docs/FAQ]

## Releases & compatibility
- **Versioning policy:** [semver / calver / internal]
- **Support window:** [N] supported releases / EOL: [date or policy]
- **Changelog / release notes:** [path or process]

## Security
- **Report vulnerabilities:** [security contact / GitHub private advisory URL]
- **Hardening notes:** [threat model link if public]

## Contributing
- Guide: [CONTRIBUTING.md] — *expectations, reviews, and coding standards*
- **Code of conduct:** [link]
- **Local setup issues:** *open a discussion or issue with logs* [template link]

## License
- SPDX: \`[SPDX id]\` — see \`[LICENSE file]\` and \`[NOTICE file if applicable]\``,
  },
  {
    id: "development-readme-sdk",
    name: "README: SDK",
    category: "development",
    description: "An SDK that wraps a public API with idiomatic error handling and retries.",
    tags: ["readme","documentation","onboarding","developer-experience"],
    content: `# [Project Name]

An SDK that wraps a public API with idiomatic error handling and retries.

> Versioning, auth modes, and pagination or streaming semantics.

## Badges (optional)
- CI: [badge url]
- Version: [semver or tag]

## Table of contents
- [Overview](#overview)
- [Install](#install)
- [Quick start](#quick-start)
- [Configuration](#configuration)
- [Scripts & tooling](#scripts--tooling)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Releases & compatibility](#releases--compatibility)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Overview
- **What it does:** [1–2 sentences]
- **For:** Client developers integrating the API in multiple languages if applicable.
- **Key outcomes:** [bullets]
- **Not in scope (yet):** [bullets]

## Install
\`\`\`bash
git clone [repo-url].git
cd [repo-name]
[package manager install command, e.g. pnpm i / pip install -e .]
\`\`\`

## Quick start
\`\`\`bash
npm test
# or
go test ./...
[copy/paste a minimal command sequence users can run today]
\`\`\`

## Configuration
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| \`[ENV_1]\` | string | [value] | [purpose] |
| \`[ENV_2]\` | int/bool | [value] | [purpose] |

Additional files:
- \`[.env.example]\` / \`[config/*.yaml]\`
- \`[secrets/]\` *never commit secrets*

## Scripts & tooling
| Task | Command |
| --- | --- |
| build | \`[npm run build / make build]\` |
| test | \`[npm test / pytest]\` |
| lint | \`[npm run lint / ruff check]\` |
| typecheck | \`[tsc -p . / mypy .]\` |

## Testing
- **Local:** [how to run the fastest test suite]
- **CI parity:** [what must match CI]
- **Integration/e2e:** [when/where, plus credentials]

## Troubleshooting
| Symptom | Likely cause | Next step |
| --- | --- | --- |
| [symptom] | [log/metric/flag] | [action] |
- **Frequently asked issues:** [link to docs/FAQ]

## Releases & compatibility
- **Versioning policy:** [semver / calver / internal]
- **Support window:** [N] supported releases / EOL: [date or policy]
- **Changelog / release notes:** [path or process]

## Security
- **Report vulnerabilities:** [security contact / GitHub private advisory URL]
- **Hardening notes:** [threat model link if public]

## Contributing
- Guide: [CONTRIBUTING.md] — *expectations, reviews, and coding standards*
- **Code of conduct:** [link]
- **Local setup issues:** *open a discussion or issue with logs* [template link]

## License
- SPDX: \`[SPDX id]\` — see \`[LICENSE file]\` and \`[NOTICE file if applicable]\``,
  },
  {
    id: "development-readme-framework",
    name: "README: Framework",
    category: "development",
    description: "A development framework (UI or server) with conventions and extensibility points.",
    tags: ["readme","documentation","onboarding","developer-experience"],
    content: `# [Project Name]

A development framework (UI or server) with conventions and extensibility points.

> Plugin model, major upgrades, and compatibility guarantees.

## Badges (optional)
- CI: [badge url]
- Version: [semver or tag]

## Table of contents
- [Overview](#overview)
- [Install](#install)
- [Quick start](#quick-start)
- [Configuration](#configuration)
- [Scripts & tooling](#scripts--tooling)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Releases & compatibility](#releases--compatibility)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Overview
- **What it does:** [1–2 sentences]
- **For:** Product engineers building on top and maintainers curating the surface area.
- **Key outcomes:** [bullets]
- **Not in scope (yet):** [bullets]

## Install
\`\`\`bash
git clone [repo-url].git
cd [repo-name]
[package manager install command, e.g. pnpm i / pip install -e .]
\`\`\`

## Quick start
\`\`\`bash
npx [framework] create [app]
[framework] dev
[copy/paste a minimal command sequence users can run today]
\`\`\`

## Configuration
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| \`[ENV_1]\` | string | [value] | [purpose] |
| \`[ENV_2]\` | int/bool | [value] | [purpose] |

Additional files:
- \`[.env.example]\` / \`[config/*.yaml]\`
- \`[secrets/]\` *never commit secrets*

## Scripts & tooling
| Task | Command |
| --- | --- |
| build | \`[npm run build / make build]\` |
| test | \`[npm test / pytest]\` |
| lint | \`[npm run lint / ruff check]\` |
| typecheck | \`[tsc -p . / mypy .]\` |

## Testing
- **Local:** [how to run the fastest test suite]
- **CI parity:** [what must match CI]
- **Integration/e2e:** [when/where, plus credentials]

## Troubleshooting
| Symptom | Likely cause | Next step |
| --- | --- | --- |
| [symptom] | [log/metric/flag] | [action] |
- **Frequently asked issues:** [link to docs/FAQ]

## Releases & compatibility
- **Versioning policy:** [semver / calver / internal]
- **Support window:** [N] supported releases / EOL: [date or policy]
- **Changelog / release notes:** [path or process]

## Security
- **Report vulnerabilities:** [security contact / GitHub private advisory URL]
- **Hardening notes:** [threat model link if public]

## Contributing
- Guide: [CONTRIBUTING.md] — *expectations, reviews, and coding standards*
- **Code of conduct:** [link]
- **Local setup issues:** *open a discussion or issue with logs* [template link]

## License
- SPDX: \`[SPDX id]\` — see \`[LICENSE file]\` and \`[NOTICE file if applicable]\``,
  },
  {
    id: "development-readme-boilerplate",
    name: "README: Boilerplate",
    category: "development",
    description: "A starter repo meant to be copied, renamed, and customized quickly.",
    tags: ["readme","documentation","onboarding","developer-experience"],
    content: `# [Project Name]

A starter repo meant to be copied, renamed, and customized quickly.

> Clear replace-me tokens, and a short checklist to delete demo code.

## Badges (optional)
- CI: [badge url]
- Version: [semver or tag]

## Table of contents
- [Overview](#overview)
- [Install](#install)
- [Quick start](#quick-start)
- [Configuration](#configuration)
- [Scripts & tooling](#scripts--tooling)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Releases & compatibility](#releases--compatibility)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Overview
- **What it does:** [1–2 sentences]
- **For:** Teams bootstrapping new services with a known-good default layout.
- **Key outcomes:** [bullets]
- **Not in scope (yet):** [bullets]

## Install
\`\`\`bash
git clone [repo-url].git
cd [repo-name]
[package manager install command, e.g. pnpm i / pip install -e .]
\`\`\`

## Quick start
\`\`\`bash
pnpm i && pnpm dev
[copy/paste a minimal command sequence users can run today]
\`\`\`

## Configuration
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| \`[ENV_1]\` | string | [value] | [purpose] |
| \`[ENV_2]\` | int/bool | [value] | [purpose] |

Additional files:
- \`[.env.example]\` / \`[config/*.yaml]\`
- \`[secrets/]\` *never commit secrets*

## Scripts & tooling
| Task | Command |
| --- | --- |
| build | \`[npm run build / make build]\` |
| test | \`[npm test / pytest]\` |
| lint | \`[npm run lint / ruff check]\` |
| typecheck | \`[tsc -p . / mypy .]\` |

## Testing
- **Local:** [how to run the fastest test suite]
- **CI parity:** [what must match CI]
- **Integration/e2e:** [when/where, plus credentials]

## Troubleshooting
| Symptom | Likely cause | Next step |
| --- | --- | --- |
| [symptom] | [log/metric/flag] | [action] |
- **Frequently asked issues:** [link to docs/FAQ]

## Releases & compatibility
- **Versioning policy:** [semver / calver / internal]
- **Support window:** [N] supported releases / EOL: [date or policy]
- **Changelog / release notes:** [path or process]

## Security
- **Report vulnerabilities:** [security contact / GitHub private advisory URL]
- **Hardening notes:** [threat model link if public]

## Contributing
- Guide: [CONTRIBUTING.md] — *expectations, reviews, and coding standards*
- **Code of conduct:** [link]
- **Local setup issues:** *open a discussion or issue with logs* [template link]

## License
- SPDX: \`[SPDX id]\` — see \`[LICENSE file]\` and \`[NOTICE file if applicable]\``,
  },
  {
    id: "development-readme-starter-template",
    name: "README: Starter template",
    category: "development",
    description: "An opinionated template maintained over time, often via a generator.",
    tags: ["readme","documentation","onboarding","developer-experience"],
    content: `# [Project Name]

An opinionated template maintained over time, often via a generator.

> Update path from older template versions and migration tips.

## Badges (optional)
- CI: [badge url]
- Version: [semver or tag]

## Table of contents
- [Overview](#overview)
- [Install](#install)
- [Quick start](#quick-start)
- [Configuration](#configuration)
- [Scripts & tooling](#scripts--tooling)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Releases & compatibility](#releases--compatibility)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Overview
- **What it does:** [1–2 sentences]
- **For:** New contributors and teams wanting the latest maintained defaults.
- **Key outcomes:** [bullets]
- **Not in scope (yet):** [bullets]

## Install
\`\`\`bash
git clone [repo-url].git
cd [repo-name]
[package manager install command, e.g. pnpm i / pip install -e .]
\`\`\`

## Quick start
\`\`\`bash
pnpm create [generator]@latest [name]
cd [name] && pnpm i
[copy/paste a minimal command sequence users can run today]
\`\`\`

## Configuration
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| \`[ENV_1]\` | string | [value] | [purpose] |
| \`[ENV_2]\` | int/bool | [value] | [purpose] |

Additional files:
- \`[.env.example]\` / \`[config/*.yaml]\`
- \`[secrets/]\` *never commit secrets*

## Scripts & tooling
| Task | Command |
| --- | --- |
| build | \`[npm run build / make build]\` |
| test | \`[npm test / pytest]\` |
| lint | \`[npm run lint / ruff check]\` |
| typecheck | \`[tsc -p . / mypy .]\` |

## Testing
- **Local:** [how to run the fastest test suite]
- **CI parity:** [what must match CI]
- **Integration/e2e:** [when/where, plus credentials]

## Troubleshooting
| Symptom | Likely cause | Next step |
| --- | --- | --- |
| [symptom] | [log/metric/flag] | [action] |
- **Frequently asked issues:** [link to docs/FAQ]

## Releases & compatibility
- **Versioning policy:** [semver / calver / internal]
- **Support window:** [N] supported releases / EOL: [date or policy]
- **Changelog / release notes:** [path or process]

## Security
- **Report vulnerabilities:** [security contact / GitHub private advisory URL]
- **Hardening notes:** [threat model link if public]

## Contributing
- Guide: [CONTRIBUTING.md] — *expectations, reviews, and coding standards*
- **Code of conduct:** [link]
- **Local setup issues:** *open a discussion or issue with logs* [template link]

## License
- SPDX: \`[SPDX id]\` — see \`[LICENSE file]\` and \`[NOTICE file if applicable]\``,
  },
  {
    id: "development-readme-demo-project",
    name: "README: Demo project",
    category: "development",
    description: "A small demo showcasing features. Not a production hardening template.",
    tags: ["readme","documentation","onboarding","developer-experience"],
    content: `# [Project Name]

A small demo showcasing features. Not a production hardening template.

> What is real vs stubbed, and how to extend toward production quality.

## Badges (optional)
- CI: [badge url]
- Version: [semver or tag]

## Table of contents
- [Overview](#overview)
- [Install](#install)
- [Quick start](#quick-start)
- [Configuration](#configuration)
- [Scripts & tooling](#scripts--tooling)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Releases & compatibility](#releases--compatibility)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Overview
- **What it does:** [1–2 sentences]
- **For:** Evaluators, conference talks, and internal smoke tests.
- **Key outcomes:** [bullets]
- **Not in scope (yet):** [bullets]

## Install
\`\`\`bash
git clone [repo-url].git
cd [repo-name]
[package manager install command, e.g. pnpm i / pip install -e .]
\`\`\`

## Quick start
\`\`\`bash
pnpm i && pnpm demo
[copy/paste a minimal command sequence users can run today]
\`\`\`

## Configuration
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| \`[ENV_1]\` | string | [value] | [purpose] |
| \`[ENV_2]\` | int/bool | [value] | [purpose] |

Additional files:
- \`[.env.example]\` / \`[config/*.yaml]\`
- \`[secrets/]\` *never commit secrets*

## Scripts & tooling
| Task | Command |
| --- | --- |
| build | \`[npm run build / make build]\` |
| test | \`[npm test / pytest]\` |
| lint | \`[npm run lint / ruff check]\` |
| typecheck | \`[tsc -p . / mypy .]\` |

## Testing
- **Local:** [how to run the fastest test suite]
- **CI parity:** [what must match CI]
- **Integration/e2e:** [when/where, plus credentials]

## Troubleshooting
| Symptom | Likely cause | Next step |
| --- | --- | --- |
| [symptom] | [log/metric/flag] | [action] |
- **Frequently asked issues:** [link to docs/FAQ]

## Releases & compatibility
- **Versioning policy:** [semver / calver / internal]
- **Support window:** [N] supported releases / EOL: [date or policy]
- **Changelog / release notes:** [path or process]

## Security
- **Report vulnerabilities:** [security contact / GitHub private advisory URL]
- **Hardening notes:** [threat model link if public]

## Contributing
- Guide: [CONTRIBUTING.md] — *expectations, reviews, and coding standards*
- **Code of conduct:** [link]
- **Local setup issues:** *open a discussion or issue with logs* [template link]

## License
- SPDX: \`[SPDX id]\` — see \`[LICENSE file]\` and \`[NOTICE file if applicable]\``,
  },
  {
    id: "development-contributing-basic",
    name: "Contributing guide: Basic",
    category: "development",
    description: "Short, practical contribution expectations for a typical OSS-style repo.",
    tags: ["contributing","community","guidelines","pr"],
    content: `# Contributing (basic)

Thanks for helping improve [Project]! This guide is the default entry point.

## Ground rules
- **Be kind:** follow our [Code of Conduct link].
- **Start small:** typo fixes, docs, and tests are always welcome.
- **One PR = one change set:** [describe squashing / small PR policy].

## Before you code
1. Search existing issues/PRs for [keyword].
2. Open an issue (or comment) describing *what* and *why* unless it’s a trivial fix.
3. If it’s a big change, use the RFC/issue template: [link].

## Development setup
\`\`\`bash
git clone [url]
cd [repo]
[install dev deps]
[test command] # must pass before opening PR
\`\`\`

## How to make a good PR
- [ ] **Clear title** and description (problem/solution, screenshots if UI).
- [ ] **Tests** added/updated for behavior changes.
- [ ] **Docs** updated if user-facing or config changed.
- [ ] **Changelog** entry (if the project keeps one) under \`[Unreleased]\`.

## Review & merge
- Typical review SLA: [time window].
- Maintainers use labels like \`needs: tests\`, \`ready for review\`.
- Merge strategy: [squash / merge commit / rebase] — *explain briefly*`,
  },
  {
    id: "development-contributing-detailed",
    name: "Contributing guide: Detailed",
    category: "development",
    description: "Extended contribution workflow with triage, design, testing, and release steps.",
    tags: ["contributing","workflow","review","testing"],
    content: `# Contributing (detailed)

This is the *detailed* guide for [Project]. It complements the quick-start [README/CONTRIBUTING-basic].

## Roles & triage
- **Triage owner:** [team / on-call] — *labels issues within [SLA days]*
- **Backlog review cadence:** [weekly/ monthly] in [meeting or async doc]
- **P0/P1 meaning:** [definition used by the team]

## Issue lifecycle
1. **New** → add template fields (repro, expected, actual, env).
2. **Triage** → \`accepted\`, \`needs more info\`, or \`duplicate\`.
3. **Design** for risky changes: link a short design note or ADR: [link policy].
4. **Implementation** on a feature branch: \`[owner]/[short-name]\`.
5. **PR review** with at least [N] approvers for [areas].
6. **Release** from protected branches only: [release doc link].

## Branch & commit standards
- Branch from \`[default development branch]\`; **never** push directly to protected branches.
- Commit message format: [Conventional Commits / custom — paste example].
- Rebase vs merge: [team rule].

## Testing expectations
- **Unit** tests run locally as \`[command]\`.
- **Integration** tests require: \`[env vars, docker compose profile]\`.
- **E2E** (if any) runs in CI and/or a nightly build: [link to workflow].

## Security & privacy
- If you see a vulnerability, **do not** open a public issue—see [security policy].
- PII/secret handling: *never* paste tokens or customer data in issues/PRs.

## License & DCO/CLA (if required)
- [DCO sign-off] / [CLA] requirements: [link and instructions].

## Code review checklist (author)
- [ ] Explained **why** in the PR, linked issue/ticket.
- [ ] Self-reviewed diff; removed debug prints, TODOs, dead code (unless ticketed).
- [ ] Added metrics/logs where operational visibility matters.
- [ ] Updated docs/changelog; migration notes for breaking changes.

## After merge
- Verify CI on \`main\` is green; watch for release pipeline if applicable: [link].`,
  },
  {
    id: "development-contributing-first-timers",
    name: "Contributing guide: First-timers",
    category: "development",
    description: "Encourages first-time contributors with labeled issues and a friendly checklist.",
    tags: ["contributing","first-timers","good-first-issue","inclusive"],
    content: `# Welcome, first-time contributors

We’re happy you’re here. [Project] is built by people like you.

## Start here (15 minutes)
1. Read the [Code of Conduct].
2. Skim the [Project goals/roadmap] (short).
3. **Pick a starter issue** labeled: \`good first issue\` or \`help wanted\` → [search link].

## What to expect in your first PR
- A maintainer will **guide you** through style and tests—questions are expected.
- Small first PRs (docs/tests) often merge fastest.
- If you get stuck, comment on the issue: *it’s not interrupting*.

## Suggested first tasks
- Fix a small doc typo or add an example in \`[path/docs]\`.
- Add a unit test in \`[path/test]\` to lock down existing behavior.
- Improve an error message where users are confused: see issue \`#[N]\`.

## Local setup (copy/paste)
\`\`\`bash
git clone [url]
cd [repo]
[install]
npm test   # or: pytest, go test ./..., etc.
\`\`\`

## Asking for help (good examples)
- “I can reproduce the bug on [OS/Node], but the test won’t start—here is the log: [gist].”
- “I’m not sure if [API] should throw or return a Result—what’s the preferred pattern in this repo?”

## Recognition
- We credit contributors in [release notes/CHANGELOG/THANKS].
- Your first merge celebratory emoji is optional but encouraged \`[emoji]\`.`,
  },
  {
    id: "development-contributing-corporate",
    name: "Contributing guide: Corporate / inner source",
    category: "development",
    description: "Contribution rules suitable for an inner-source program with org boundaries.",
    tags: ["contributing","inner-source","governance","compliance"],
    content: `# Contributing (corporate / inner source)

This project is part of [Org]’s [program name]. This guide defines **org-specific** requirements beyond normal coding style.

## Eligibility & access
- **Who can contribute:** [employees / partners with NDAs] as listed in [source-of-truth system].
- **Entitlement to repo:** open an **Access request** in [ITSM] if you cannot push.
- **Data classification:** this repo is \`[Internal / Confidential]\`. *Do not* add customer data.

## Legal & compliance
- **Licensing** of inbound code: follow [org IP policy] and record exceptions in [tracker].
- **Open-source** releases require approval via [arch board / release council].
- **Security review** is required for changes touching: [auth, network boundaries, PII, crypto, …].

## Engineering controls
- **Default branch** protection: PR reviews \`[N]\`, required checks \`[list]\`, **no** force push.
- **CODEOWNERS** in \`[.github/CODEOWNERS]\`: *owners must approve* changes to \`[paths]\`.
- **Environment separation:** use \`[dev|stage|prod]\` according to the platform standards.

## Corporate workflow
1. Work from an internal issue tracker: \`[JIRA/ADO link pattern]\`.
2. Name branches \`[username]/[TICKET]-[slug]\` for traceability.
3. PR description must include **business justification** and **rollout/rollback** notes for risky changes.
4. Release windows & freezes follow [org calendar] — *coordinate with SRE* on migrations.

## Security & compliance checklist (PR author)
- [ ] No secrets, tokens, or internal hostnames in code/comments.
- [ ] Threat model / risk note attached if touching \`[sensitive subsystems]\`.
- [ ] Logging avoids PII; sampling documented if high volume.
- [ ] Feature flags in place for risky user-visible changes: \`[flag names]\`.

## Support
Questions about policy: [Slack/Teams channel] — *tag* \`[inner-source-owners]\`.`,
  },
  {
    id: "development-contributing-open-source",
    name: "Contributing guide: Open source",
    category: "development",
    description: "Community norms, maintainer response times, and governance for a public open-source project.",
    tags: ["contributing","open-source","maintainers","governance"],
    content: `# Contributing to [Project] (open source)

[Project] is **open** under \`[LICENSE]\`. This guide explains *how* we work in public: expectations, time zones, and maintainership.

## Values
- **Respect** time and experience levels; be explicit, assume good intent, disagree constructively.
- **Sustainability:** prefer maintainable design over one-off heroics; document as you go.
- **Inclusion:** we follow [Code of Conduct], enforced by [list of maintainers/alias].

## Maintainer capacity
- **Time zones** of active maintainers: [UTC offsets].
- **Typical triage time:** [X business days] for issues; *urgent* security: see [security policy].
- **Release cadence** (approximate): [monthly / on demand / LTS] — *see* [releases].

## Types of contribution
- **Code & tests** — the usual: fix bugs, add features, improve performance.
- **Docs** — tutorials, cookbooks, API examples, and translations (see [i18n policy]).
- **Design** — propose UX flows or architecture via RFC/ADR: [link].
- **Ops** — help with CI, packaging, and reproducible builds: [link to CI docs].

## Public communication
- Prefer **public issues/PRs** (not DMs) so everyone learns from the thread.
- When sharing logs, **redact** secrets and customer identifiers.
- If you are unsure whether something is a security issue, use **[security report channel]**.

## Project governance (lightweight)
- **Current maintainers** listed in \`[MAINTAINERS.md]\`.
- **Decisions** about direction happen via \`[RFC / discussion forum link]\`.
- **Deprecations** are announced in [CHANGELOG/announcements] with timelines.

## License & sign-off
- By opening a PR, you confirm your contribution is under the project license (\`[SPDX]\`).
- [DCO/CLA] as described in [Legal doc link].

## Gratitude
Thank you to everyone in \`[THANKS/CONTRIBUTORS]\`. *You make this project possible.*`,
  },
  {
    id: "development-changelog-keep-a-changelog",
    name: "Changelog: Keep a Changelog style",
    category: "development",
    description: "Changelog with Keep a Changelog sections: Added/Changed/Fixed/Removed/Security.",
    tags: ["changelog","release","semver","communication"],
    content: `# Changelog

All notable changes to **[Project name]** are documented here.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) [if applicable: say so].

## [Unreleased]

### Added
- [User-facing or developer-facing feature note]

### Changed
- [What changed, why it matters, migration hint if any]

### Fixed
- [Bug ID/issue link] — *short description*

### Removed
- [What was removed] — *include upgrade path*

### Security
- [CVE/severity if applicable, scope, and fixed versions]

## [X.Y.Z] - YYYY-MM-DD

### Added
- [Bullet]

### Changed
- [Bullet]

### Fixed
- [Bullet]

### Notes
- Migration guide: [link to docs/ADR] if breaking.`,
  },
  {
    id: "development-changelog-semantic",
    name: "Changelog: Conventional + semantic",
    category: "development",
    description: "Release notes derived from Conventional Commits, grouped for automation.",
    tags: ["changelog","conventional-commits","automation","ci"],
    content: `# Changelog (Conventional/semantic release)

This file is [generated/curated] from commit messages and PR titles following **Conventional Commits** with scopes.

## Release [vX.Y.Z] — [YYYY-MM-DD]

### Highlights
- **[area]:** [one sentence] ([PR #N])
- **[area]:** [one sentence] ([PR #N])

### Features (\`feat\` → minor)
- \`feat([scope])\`: [description] ([PR #N])
- \`feat([scope])\`: [description] ([PR #N])

### Bug fixes (\`fix\` → patch)
- \`fix([scope])\`: [description] ([PR #N])

### Performance & observability
- \`perf([scope])\` / \`chore(telemetry)\`: [description]

### Breaking changes (major)
BREAKING CHANGE: [explanation, migration, timeline]
- Deprecations removed: [item]
- Config rename: \`old\` → \`new\`

### Reverts & incidents
- Reverted \`[PR #N]\` because [link to postmortem or note].

### Contributors
Thanks to [@user1, @user2, …] — *generated from commits* or listed manually if desired.

### Artifacts & checksums
- [npm/PyPI/container digest links if you publish] — *optional*`,
  },
  {
    id: "development-changelog-simple",
    name: "Changelog: Simple dated list",
    category: "development",
    description: "Minimal, readable changelog: date, version, grouped bullets, no heavy structure.",
    tags: ["changelog","release","lightweight","docs"],
    content: `# Changelog

Short, human-friendly notes for [Project], grouped by version.

## v[X.Y] — [YYYY-MM-DD]
- **New** — [one line]
- **Improved** — [one line]
- **Fixed** — [one line, link issue \`#[N]\` if public]

## v[X.Y-1] — [YYYY-MM-DD]
- **New** — [one line]
- **Improved** — [one line]
- **Fixed** — [one line]

## v[X.Y-2] — [YYYY-MM-DD]
- **New** — [one line]
- **Improved** — [one line]
- **Fixed** — [one line]
- **Note** — [breaking/upgrade] *only if needed*

## Older releases
See [Git tags] or [archive section] for versions prior to v[X].

## Unreleased (draft)
- [Your notes while developing—move into dated section on release].

## Conventions (optional, keep short)
- **Improved** = behavior stays compatible but nicer/faster/more complete.
- **New** = additive capability, API surface, or user-visible behavior.
- **Fixed** = bug repair or spec alignment.

## License reminder
Project license: [SPDX id] — see [LICENSE] for the full text.`,
  },
  {
    id: "development-changelog-detailed",
    name: "Changelog: Detailed with subsystems & migrations",
    category: "development",
    description: "Long-form changelog for complex systems, with per-subsystem detail and deep links.",
    tags: ["changelog","migrations","platform","sre"],
    content: `# Changelog — [Project codename] (detailed)

This is the **long-form** changelog. For a TL;DR for users, see [release notes/announcement blog].

## Conventions in this file
- **RISK:** [Low/Med/High] — *operational risk for upgrades* (schema, protocol, SLOs).
- **MIG:** migration steps required: yes/no + link to guide.
- **OBS:** new metrics/logs/alerts worth monitoring post-upgrade.

## [Unreleased] — not deployed to production

### API / contract
- **BREAKING** — endpoint \`[path]\`: *reason*, \`request\`/\`response\` diffs, clients impacted: [list], timeline: [date].
- **ADDED** — new optional field \`[name]\`; defaults preserve compatibility.

### Data & persistence
- **MIG: yes** — new migration \`[NNN]_[name].sql]\`: *online/offline* strategy, *estimated duration*, *rollback caveats*.
- **INDEX** — new index on \`[table(column)]\` for query \`[name]\`; *watch write amplification* in \`[env]\`.

### Runtime & packaging
- **CONTAINER** — base image bump \`[old] → [new]\`: *CVEs addressed* \`[CVE-…]\` / *rebuild all tags* with \`[date]\`.
- **K8s** — Helm chart \`appVersion: X.Y\`, new values: \`[values]\`, defaults: \`[..]\`.

### Security
- **Fix** — authN bypass in \`[module]\`; affected versions: \`[a..b]\`, fix in \`[X.Y.z]\`, rotation steps: [link].

## [X.Y.0] — [YYYY-MM-DD] — *release train [name]*
*(summary paragraph for SRE/TLs)*: [2–3 sentences: theme, SLO focus, and customer-impacting flags].

### Rollout & verification
- Staged to \`[canary%]\` on \`[date]\`, metrics stable on \`[SLOs]\`.
- Kill switch / feature flag: \`[flag]\` default \`[on/off]\`, documented in [runbook].

### Subsystem A — [name]
- [Detailed bullets, links to ADRs, tickets].

### Subsystem B — [name]
- [Detailed bullets, links to ADRs, tickets].

## Appendix
- Historical releases: [link to page or git tags before this file existed].`,
  },
  {
    id: "development-pr-feature",
    name: "Development template: feature",
    category: "development",
    description: "Usable pr feature document with bracketed placeholders.",
    tags: ["pr","template","markdown"],
    content: `## [Pull request title]

> **Type:** \`feature\` (fill template fields below)

### Links
- Issue / ticket: [ID or URL]
- Spec / Figma: [if UI]

### Motivation & scope
- [Why this change; link customer pain or issue]
- **Non-goals for this PR:** [explicit boundaries]

### How to test locally
'\`bash
[command 1]
[command 2 — include env vars, no secrets in PR body]


### Test matrix
- [ ] **Unit** — [areas]
- [ ] **Integration** — [databases, queues, …]
- [ ] **E2E / manual** — [steps, browsers, or devices]

### Checklist (author)
- [ ] I updated or added **tests** and **docs** for user-visible or config changes.
- [ ] I described **rollout/rollback** (flags, feature gates, or revert PR).
- [ ] I attached **before/after** if UI, or **sample request/response** for APIs.`,
  },
  {
    id: "development-pr-bugfix",
    name: "Development template: bugfix",
    category: "development",
    description: "Usable pr bugfix document with bracketed placeholders.",
    tags: ["pr","template","markdown"],
    content: `## [Pull request title]

> **Type:** \`bugfix\` (fill template fields below)

### Links
- Issue / ticket: [ID or URL]
- Spec / Figma: [if UI]

### Motivation & scope
- [Why this change; link customer pain or issue]
- **Non-goals for this PR:** [explicit boundaries]

### How to test locally
'\`bash
[command 1]
[command 2 — include env vars, no secrets in PR body]


### Test matrix
- [ ] **Unit** — [areas]
- [ ] **Integration** — [databases, queues, …]
- [ ] **E2E / manual** — [steps, browsers, or devices]

### Checklist (author)
- [ ] I updated or added **tests** and **docs** for user-visible or config changes.
- [ ] I described **rollout/rollback** (flags, feature gates, or revert PR).
- [ ] I attached **before/after** if UI, or **sample request/response** for APIs.`,
  },
  {
    id: "development-pr-hotfix",
    name: "Development template: hotfix",
    category: "development",
    description: "Usable pr hotfix document with bracketed placeholders.",
    tags: ["pr","template","markdown"],
    content: `## [Pull request title]

> **Type:** \`hotfix\` (fill template fields below)

### Links
- Issue / ticket: [ID or URL]
- Spec / Figma: [if UI]

### Motivation & scope
- [Why this change; link customer pain or issue]
- **Non-goals for this PR:** [explicit boundaries]

### How to test locally
'\`bash
[command 1]
[command 2 — include env vars, no secrets in PR body]


### Test matrix
- [ ] **Unit** — [areas]
- [ ] **Integration** — [databases, queues, …]
- [ ] **E2E / manual** — [steps, browsers, or devices]

### Checklist (author)
- [ ] I updated or added **tests** and **docs** for user-visible or config changes.
- [ ] I described **rollout/rollback** (flags, feature gates, or revert PR).
- [ ] I attached **before/after** if UI, or **sample request/response** for APIs.`,
  },
  {
    id: "development-pr-refactor",
    name: "Development template: refactor",
    category: "development",
    description: "Usable pr refactor document with bracketed placeholders.",
    tags: ["pr","template","markdown"],
    content: `## [Pull request title]

> **Type:** \`refactor\` (fill template fields below)

### Links
- Issue / ticket: [ID or URL]
- Spec / Figma: [if UI]

### Motivation & scope
- [Why this change; link customer pain or issue]
- **Non-goals for this PR:** [explicit boundaries]

### How to test locally
'\`bash
[command 1]
[command 2 — include env vars, no secrets in PR body]


### Test matrix
- [ ] **Unit** — [areas]
- [ ] **Integration** — [databases, queues, …]
- [ ] **E2E / manual** — [steps, browsers, or devices]

### Checklist (author)
- [ ] I updated or added **tests** and **docs** for user-visible or config changes.
- [ ] I described **rollout/rollback** (flags, feature gates, or revert PR).
- [ ] I attached **before/after** if UI, or **sample request/response** for APIs.`,
  },
  {
    id: "development-pr-docs",
    name: "Development template: docs",
    category: "development",
    description: "Usable pr docs document with bracketed placeholders.",
    tags: ["pr","template","markdown"],
    content: `## [Pull request title]

> **Type:** \`docs\` (fill template fields below)

### Links
- Issue / ticket: [ID or URL]
- Spec / Figma: [if UI]

### Motivation & scope
- [Why this change; link customer pain or issue]
- **Non-goals for this PR:** [explicit boundaries]

### How to test locally
'\`bash
[command 1]
[command 2 — include env vars, no secrets in PR body]


### Test matrix
- [ ] **Unit** — [areas]
- [ ] **Integration** — [databases, queues, …]
- [ ] **E2E / manual** — [steps, browsers, or devices]

### Checklist (author)
- [ ] I updated or added **tests** and **docs** for user-visible or config changes.
- [ ] I described **rollout/rollback** (flags, feature gates, or revert PR).
- [ ] I attached **before/after** if UI, or **sample request/response** for APIs.`,
  },
  {
    id: "development-pr-dependency-update",
    name: "Development template: dependency update",
    category: "development",
    description: "Usable pr dependency update document with bracketed placeholders.",
    tags: ["pr","template","markdown"],
    content: `## [Pull request title]

> **Type:** \`dependency-update\` (fill template fields below)

### Links
- Issue / ticket: [ID or URL]
- Spec / Figma: [if UI]

### Motivation & scope
- [Why this change; link customer pain or issue]
- **Non-goals for this PR:** [explicit boundaries]

### How to test locally
'\`bash
[command 1]
[command 2 — include env vars, no secrets in PR body]


### Test matrix
- [ ] **Unit** — [areas]
- [ ] **Integration** — [databases, queues, …]
- [ ] **E2E / manual** — [steps, browsers, or devices]

### Checklist (author)
- [ ] I updated or added **tests** and **docs** for user-visible or config changes.
- [ ] I described **rollout/rollback** (flags, feature gates, or revert PR).
- [ ] I attached **before/after** if UI, or **sample request/response** for APIs.`,
  },
  {
    id: "development-pr-breaking-change",
    name: "Development template: breaking change",
    category: "development",
    description: "Usable pr breaking change document with bracketed placeholders.",
    tags: ["pr","template","markdown"],
    content: `## [Pull request title]

> **Type:** \`breaking-change\` (fill template fields below)

### Links
- Issue / ticket: [ID or URL]
- Spec / Figma: [if UI]

### Motivation & scope
- [Why this change; link customer pain or issue]
- **Non-goals for this PR:** [explicit boundaries]

### How to test locally
'\`bash
[command 1]
[command 2 — include env vars, no secrets in PR body]


### Test matrix
- [ ] **Unit** — [areas]
- [ ] **Integration** — [databases, queues, …]
- [ ] **E2E / manual** — [steps, browsers, or devices]

### Checklist (author)
- [ ] I updated or added **tests** and **docs** for user-visible or config changes.
- [ ] I described **rollout/rollback** (flags, feature gates, or revert PR).
- [ ] I attached **before/after** if UI, or **sample request/response** for APIs.`,
  },
  {
    id: "development-pr-rfc",
    name: "Development template: rfc",
    category: "development",
    description: "Usable pr rfc document with bracketed placeholders.",
    tags: ["pr","template","markdown"],
    content: `## [Pull request title]

> **Type:** \`rfc\` (fill template fields below)

### Links
- Issue / ticket: [ID or URL]
- Spec / Figma: [if UI]

### Motivation & scope
- [Why this change; link customer pain or issue]
- **Non-goals for this PR:** [explicit boundaries]

### How to test locally
'\`bash
[command 1]
[command 2 — include env vars, no secrets in PR body]


### Test matrix
- [ ] **Unit** — [areas]
- [ ] **Integration** — [databases, queues, …]
- [ ] **E2E / manual** — [steps, browsers, or devices]

### Checklist (author)
- [ ] I updated or added **tests** and **docs** for user-visible or config changes.
- [ ] I described **rollout/rollback** (flags, feature gates, or revert PR).
- [ ] I attached **before/after** if UI, or **sample request/response** for APIs.`,
  },
  {
    id: "development-issue-bug-report",
    name: "Development template: bug report",
    category: "development",
    description: "Usable issue bug report document with bracketed placeholders.",
    tags: ["issue","template","markdown"],
    content: `## [Short, specific title]

### Summary
- **What you expected:** [describe]
- **What happened instead:** [describe]
- **When:** [date / first bad version] — **Severity to you:** [P0–P3 or n/a]

### Environment
- OS: [e.g. Windows 11, Ubuntu 24.04]
- Runtime / version: [Node 22, Python 3.12, …] — *app version* [x.y.z, git SHA]
- Config: [env vars, feature flags, region, cluster]

### Reproduction
1. [step one]
2. [step two]
3. [observe]

### Evidence & diagnostics
- Logs: [link to gist, redact secrets]
- Metrics: [dashboard link, time range] — *optional*
- Screenshots / HAR: [or n/a]

### Workarounds
- [Anything that helped temporarily, or n/a]

### Possible follow-ups for maintainers
- **Likely area:** [component, based on your guess — optional]`,
  },
  {
    id: "development-issue-feature-request",
    name: "Development template: feature request",
    category: "development",
    description: "Usable issue feature request document with bracketed placeholders.",
    tags: ["issue","template","markdown"],
    content: `## [Short, specific title]

### Summary
- **What you expected:** [describe]
- **What happened instead:** [describe]
- **When:** [date / first bad version] — **Severity to you:** [P0–P3 or n/a]

### Environment
- OS: [e.g. Windows 11, Ubuntu 24.04]
- Runtime / version: [Node 22, Python 3.12, …] — *app version* [x.y.z, git SHA]
- Config: [env vars, feature flags, region, cluster]

### Reproduction
1. [step one]
2. [step two]
3. [observe]

### Evidence & diagnostics
- Logs: [link to gist, redact secrets]
- Metrics: [dashboard link, time range] — *optional*
- Screenshots / HAR: [or n/a]

### Workarounds
- [Anything that helped temporarily, or n/a]

### Possible follow-ups for maintainers
- **Likely area:** [component, based on your guess — optional]`,
  },
  {
    id: "development-issue-question",
    name: "Development template: question",
    category: "development",
    description: "Usable issue question document with bracketed placeholders.",
    tags: ["issue","template","markdown"],
    content: `## [Short, specific title]

### Summary
- **What you expected:** [describe]
- **What happened instead:** [describe]
- **When:** [date / first bad version] — **Severity to you:** [P0–P3 or n/a]

### Environment
- OS: [e.g. Windows 11, Ubuntu 24.04]
- Runtime / version: [Node 22, Python 3.12, …] — *app version* [x.y.z, git SHA]
- Config: [env vars, feature flags, region, cluster]

### Reproduction
1. [step one]
2. [step two]
3. [observe]

### Evidence & diagnostics
- Logs: [link to gist, redact secrets]
- Metrics: [dashboard link, time range] — *optional*
- Screenshots / HAR: [or n/a]

### Workarounds
- [Anything that helped temporarily, or n/a]

### Possible follow-ups for maintainers
- **Likely area:** [component, based on your guess — optional]`,
  },
  {
    id: "development-issue-security-vulnerability",
    name: "Development template: security vulnerability",
    category: "development",
    description: "Usable issue security vulnerability document with bracketed placeholders.",
    tags: ["issue","template","markdown"],
    content: `## [Short, specific title]

### Summary
- **What you expected:** [describe]
- **What happened instead:** [describe]
- **When:** [date / first bad version] — **Severity to you:** [P0–P3 or n/a]

### Environment
- OS: [e.g. Windows 11, Ubuntu 24.04]
- Runtime / version: [Node 22, Python 3.12, …] — *app version* [x.y.z, git SHA]
- Config: [env vars, feature flags, region, cluster]

### Reproduction
1. [step one]
2. [step two]
3. [observe]

### Evidence & diagnostics
- Logs: [link to gist, redact secrets]
- Metrics: [dashboard link, time range] — *optional*
- Screenshots / HAR: [or n/a]

### Workarounds
- [Anything that helped temporarily, or n/a]

### Possible follow-ups for maintainers
- **Likely area:** [component, based on your guess — optional]`,
  },
  {
    id: "development-issue-performance",
    name: "Development template: performance",
    category: "development",
    description: "Usable issue performance document with bracketed placeholders.",
    tags: ["issue","template","markdown"],
    content: `## [Short, specific title]

### Summary
- **What you expected:** [describe]
- **What happened instead:** [describe]
- **When:** [date / first bad version] — **Severity to you:** [P0–P3 or n/a]

### Environment
- OS: [e.g. Windows 11, Ubuntu 24.04]
- Runtime / version: [Node 22, Python 3.12, …] — *app version* [x.y.z, git SHA]
- Config: [env vars, feature flags, region, cluster]

### Reproduction
1. [step one]
2. [step two]
3. [observe]

### Evidence & diagnostics
- Logs: [link to gist, redact secrets]
- Metrics: [dashboard link, time range] — *optional*
- Screenshots / HAR: [or n/a]

### Workarounds
- [Anything that helped temporarily, or n/a]

### Possible follow-ups for maintainers
- **Likely area:** [component, based on your guess — optional]`,
  },
  {
    id: "development-issue-documentation",
    name: "Development template: documentation",
    category: "development",
    description: "Usable issue documentation document with bracketed placeholders.",
    tags: ["issue","template","markdown"],
    content: `## [Short, specific title]

### Summary
- **What you expected:** [describe]
- **What happened instead:** [describe]
- **When:** [date / first bad version] — **Severity to you:** [P0–P3 or n/a]

### Environment
- OS: [e.g. Windows 11, Ubuntu 24.04]
- Runtime / version: [Node 22, Python 3.12, …] — *app version* [x.y.z, git SHA]
- Config: [env vars, feature flags, region, cluster]

### Reproduction
1. [step one]
2. [step two]
3. [observe]

### Evidence & diagnostics
- Logs: [link to gist, redact secrets]
- Metrics: [dashboard link, time range] — *optional*
- Screenshots / HAR: [or n/a]

### Workarounds
- [Anything that helped temporarily, or n/a]

### Possible follow-ups for maintainers
- **Likely area:** [component, based on your guess — optional]`,
  },
  {
    id: "development-issue-regression",
    name: "Development template: regression",
    category: "development",
    description: "Usable issue regression document with bracketed placeholders.",
    tags: ["issue","template","markdown"],
    content: `## [Short, specific title]

### Summary
- **What you expected:** [describe]
- **What happened instead:** [describe]
- **When:** [date / first bad version] — **Severity to you:** [P0–P3 or n/a]

### Environment
- OS: [e.g. Windows 11, Ubuntu 24.04]
- Runtime / version: [Node 22, Python 3.12, …] — *app version* [x.y.z, git SHA]
- Config: [env vars, feature flags, region, cluster]

### Reproduction
1. [step one]
2. [step two]
3. [observe]

### Evidence & diagnostics
- Logs: [link to gist, redact secrets]
- Metrics: [dashboard link, time range] — *optional*
- Screenshots / HAR: [or n/a]

### Workarounds
- [Anything that helped temporarily, or n/a]

### Possible follow-ups for maintainers
- **Likely area:** [component, based on your guess — optional]`,
  },
  {
    id: "development-issue-compatibility",
    name: "Development template: compatibility",
    category: "development",
    description: "Usable issue compatibility document with bracketed placeholders.",
    tags: ["issue","template","markdown"],
    content: `## [Short, specific title]

### Summary
- **What you expected:** [describe]
- **What happened instead:** [describe]
- **When:** [date / first bad version] — **Severity to you:** [P0–P3 or n/a]

### Environment
- OS: [e.g. Windows 11, Ubuntu 24.04]
- Runtime / version: [Node 22, Python 3.12, …] — *app version* [x.y.z, git SHA]
- Config: [env vars, feature flags, region, cluster]

### Reproduction
1. [step one]
2. [step two]
3. [observe]

### Evidence & diagnostics
- Logs: [link to gist, redact secrets]
- Metrics: [dashboard link, time range] — *optional*
- Screenshots / HAR: [or n/a]

### Workarounds
- [Anything that helped temporarily, or n/a]

### Possible follow-ups for maintainers
- **Likely area:** [component, based on your guess — optional]`,
  },
  {
    id: "development-adr-basic",
    name: "Development template: basic",
    category: "development",
    description: "Usable adr basic document with bracketed placeholders.",
    tags: ["adr","template","markdown"],
    content: `# Adr Basic

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-adr-lightweight",
    name: "Development template: lightweight",
    category: "development",
    description: "Usable adr lightweight document with bracketed placeholders.",
    tags: ["adr","template","markdown"],
    content: `# Adr Lightweight

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-adr-madr",
    name: "Development template: madr",
    category: "development",
    description: "Usable adr madr document with bracketed placeholders.",
    tags: ["adr","template","markdown"],
    content: `# Adr Madr

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-adr-y-statement",
    name: "Development template: y statement",
    category: "development",
    description: "Usable adr y statement document with bracketed placeholders.",
    tags: ["adr","template","markdown"],
    content: `# Adr Y Statement

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-tech-spec-feature",
    name: "Development template: spec feature",
    category: "development",
    description: "Usable tech spec feature document with bracketed placeholders.",
    tags: ["tech","template","markdown"],
    content: `# Tech Spec Feature

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-tech-spec-system-design",
    name: "Development template: spec system design",
    category: "development",
    description: "Usable tech spec system design document with bracketed placeholders.",
    tags: ["tech","template","markdown"],
    content: `# Tech Spec System Design

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-tech-spec-api-design",
    name: "Development template: spec api design",
    category: "development",
    description: "Usable tech spec api design document with bracketed placeholders.",
    tags: ["tech","template","markdown"],
    content: `# Tech Spec Api Design

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-tech-spec-database-schema",
    name: "Development template: spec database schema",
    category: "development",
    description: "Usable tech spec database schema document with bracketed placeholders.",
    tags: ["tech","template","markdown"],
    content: `# Tech Spec Database Schema

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-tech-spec-data-migration",
    name: "Development template: spec data migration",
    category: "development",
    description: "Usable tech spec data migration document with bracketed placeholders.",
    tags: ["tech","template","markdown"],
    content: `# Tech Spec Data Migration

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-tech-spec-performance-optimization",
    name: "Development template: spec performance optimization",
    category: "development",
    description: "Usable tech spec performance optimization document with bracketed placeholders.",
    tags: ["tech","template","markdown"],
    content: `# Tech Spec Performance Optimization

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-tech-spec-security-review",
    name: "Development template: spec security review",
    category: "development",
    description: "Usable tech spec security review document with bracketed placeholders.",
    tags: ["tech","template","markdown"],
    content: `# Tech Spec Security Review

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-tech-spec-integration",
    name: "Development template: spec integration",
    category: "development",
    description: "Usable tech spec integration document with bracketed placeholders.",
    tags: ["tech","template","markdown"],
    content: `# Tech Spec Integration

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-runbook-deployment",
    name: "Development template: deployment",
    category: "development",
    description: "Usable runbook deployment document with bracketed placeholders.",
    tags: ["runbook","template","markdown"],
    content: `# Runbook: Deployment (\`deployment\`)

## When to use
- [Trigger: deploy, on-call, maintenance window, …]
- **Service / stack:** [names] — *blast radius* [user-facing / internal-only]

## Preconditions
- [ ] Approvals: [CAB, manager, SRE, …]
- [ ] Backups or snapshots: [id / timestamp]
- [ ] Maintenance banner / comms: [link or n/a]

## Procedure (ordered; edit for your org)
1. [Step] — *command* \`...\` — *expected output* [snippet]
2. [Step] — *verify metric* [name] in [dashboard]
3. [Step] — *notify* [stakeholder channel]

## Rollback / if something goes wrong
- [Immediate mitigation: scale down, feature flag, drain traffic, …]
- [Re-run previous release job / restore snapshot id …]

## Post-change checks
- SLO: [names] in range for [N min]
- **Synthetic:** [url or job] **green**
- Error rate / 5xx: [threshold]

## References & owners
- [Links to SOP, other runbooks, service catalog]
- **On-call & escalation:** [policy link]`,
  },
  {
    id: "development-runbook-rollback",
    name: "Development template: rollback",
    category: "development",
    description: "Usable runbook rollback document with bracketed placeholders.",
    tags: ["runbook","template","markdown"],
    content: `# Runbook: Rollback (\`rollback\`)

## When to use
- [Trigger: deploy, on-call, maintenance window, …]
- **Service / stack:** [names] — *blast radius* [user-facing / internal-only]

## Preconditions
- [ ] Approvals: [CAB, manager, SRE, …]
- [ ] Backups or snapshots: [id / timestamp]
- [ ] Maintenance banner / comms: [link or n/a]

## Procedure (ordered; edit for your org)
1. [Step] — *command* \`...\` — *expected output* [snippet]
2. [Step] — *verify metric* [name] in [dashboard]
3. [Step] — *notify* [stakeholder channel]

## Rollback / if something goes wrong
- [Immediate mitigation: scale down, feature flag, drain traffic, …]
- [Re-run previous release job / restore snapshot id …]

## Post-change checks
- SLO: [names] in range for [N min]
- **Synthetic:** [url or job] **green**
- Error rate / 5xx: [threshold]

## References & owners
- [Links to SOP, other runbooks, service catalog]
- **On-call & escalation:** [policy link]`,
  },
  {
    id: "development-runbook-scaling",
    name: "Development template: scaling",
    category: "development",
    description: "Usable runbook scaling document with bracketed placeholders.",
    tags: ["runbook","template","markdown"],
    content: `# Runbook: Scaling (\`scaling\`)

## When to use
- [Trigger: deploy, on-call, maintenance window, …]
- **Service / stack:** [names] — *blast radius* [user-facing / internal-only]

## Preconditions
- [ ] Approvals: [CAB, manager, SRE, …]
- [ ] Backups or snapshots: [id / timestamp]
- [ ] Maintenance banner / comms: [link or n/a]

## Procedure (ordered; edit for your org)
1. [Step] — *command* \`...\` — *expected output* [snippet]
2. [Step] — *verify metric* [name] in [dashboard]
3. [Step] — *notify* [stakeholder channel]

## Rollback / if something goes wrong
- [Immediate mitigation: scale down, feature flag, drain traffic, …]
- [Re-run previous release job / restore snapshot id …]

## Post-change checks
- SLO: [names] in range for [N min]
- **Synthetic:** [url or job] **green**
- Error rate / 5xx: [threshold]

## References & owners
- [Links to SOP, other runbooks, service catalog]
- **On-call & escalation:** [policy link]`,
  },
  {
    id: "development-runbook-incident-response",
    name: "Development template: incident response",
    category: "development",
    description: "Usable runbook incident response document with bracketed placeholders.",
    tags: ["runbook","template","markdown"],
    content: `# Runbook: Incident Response (\`incident-response\`)

## When to use
- [Trigger: deploy, on-call, maintenance window, …]
- **Service / stack:** [names] — *blast radius* [user-facing / internal-only]

## Preconditions
- [ ] Approvals: [CAB, manager, SRE, …]
- [ ] Backups or snapshots: [id / timestamp]
- [ ] Maintenance banner / comms: [link or n/a]

## Procedure (ordered; edit for your org)
1. [Step] — *command* \`...\` — *expected output* [snippet]
2. [Step] — *verify metric* [name] in [dashboard]
3. [Step] — *notify* [stakeholder channel]

## Rollback / if something goes wrong
- [Immediate mitigation: scale down, feature flag, drain traffic, …]
- [Re-run previous release job / restore snapshot id …]

## Post-change checks
- SLO: [names] in range for [N min]
- **Synthetic:** [url or job] **green**
- Error rate / 5xx: [threshold]

## References & owners
- [Links to SOP, other runbooks, service catalog]
- **On-call & escalation:** [policy link]`,
  },
  {
    id: "development-runbook-database-maintenance",
    name: "Development template: database maintenance",
    category: "development",
    description: "Usable runbook database maintenance document with bracketed placeholders.",
    tags: ["runbook","template","markdown"],
    content: `# Runbook: Database Maintenance (\`database-maintenance\`)

## When to use
- [Trigger: deploy, on-call, maintenance window, …]
- **Service / stack:** [names] — *blast radius* [user-facing / internal-only]

## Preconditions
- [ ] Approvals: [CAB, manager, SRE, …]
- [ ] Backups or snapshots: [id / timestamp]
- [ ] Maintenance banner / comms: [link or n/a]

## Procedure (ordered; edit for your org)
1. [Step] — *command* \`...\` — *expected output* [snippet]
2. [Step] — *verify metric* [name] in [dashboard]
3. [Step] — *notify* [stakeholder channel]

## Rollback / if something goes wrong
- [Immediate mitigation: scale down, feature flag, drain traffic, …]
- [Re-run previous release job / restore snapshot id …]

## Post-change checks
- SLO: [names] in range for [N min]
- **Synthetic:** [url or job] **green**
- Error rate / 5xx: [threshold]

## References & owners
- [Links to SOP, other runbooks, service catalog]
- **On-call & escalation:** [policy link]`,
  },
  {
    id: "development-runbook-cache-invalidation",
    name: "Development template: cache invalidation",
    category: "development",
    description: "Usable runbook cache invalidation document with bracketed placeholders.",
    tags: ["runbook","template","markdown"],
    content: `# Runbook: Cache Invalidation (\`cache-invalidation\`)

## When to use
- [Trigger: deploy, on-call, maintenance window, …]
- **Service / stack:** [names] — *blast radius* [user-facing / internal-only]

## Preconditions
- [ ] Approvals: [CAB, manager, SRE, …]
- [ ] Backups or snapshots: [id / timestamp]
- [ ] Maintenance banner / comms: [link or n/a]

## Procedure (ordered; edit for your org)
1. [Step] — *command* \`...\` — *expected output* [snippet]
2. [Step] — *verify metric* [name] in [dashboard]
3. [Step] — *notify* [stakeholder channel]

## Rollback / if something goes wrong
- [Immediate mitigation: scale down, feature flag, drain traffic, …]
- [Re-run previous release job / restore snapshot id …]

## Post-change checks
- SLO: [names] in range for [N min]
- **Synthetic:** [url or job] **green**
- Error rate / 5xx: [threshold]

## References & owners
- [Links to SOP, other runbooks, service catalog]
- **On-call & escalation:** [policy link]`,
  },
  {
    id: "development-runbook-certificate-renewal",
    name: "Development template: certificate renewal",
    category: "development",
    description: "Usable runbook certificate renewal document with bracketed placeholders.",
    tags: ["runbook","template","markdown"],
    content: `# Runbook: Certificate Renewal (\`certificate-renewal\`)

## When to use
- [Trigger: deploy, on-call, maintenance window, …]
- **Service / stack:** [names] — *blast radius* [user-facing / internal-only]

## Preconditions
- [ ] Approvals: [CAB, manager, SRE, …]
- [ ] Backups or snapshots: [id / timestamp]
- [ ] Maintenance banner / comms: [link or n/a]

## Procedure (ordered; edit for your org)
1. [Step] — *command* \`...\` — *expected output* [snippet]
2. [Step] — *verify metric* [name] in [dashboard]
3. [Step] — *notify* [stakeholder channel]

## Rollback / if something goes wrong
- [Immediate mitigation: scale down, feature flag, drain traffic, …]
- [Re-run previous release job / restore snapshot id …]

## Post-change checks
- SLO: [names] in range for [N min]
- **Synthetic:** [url or job] **green**
- Error rate / 5xx: [threshold]

## References & owners
- [Links to SOP, other runbooks, service catalog]
- **On-call & escalation:** [policy link]`,
  },
  {
    id: "development-runbook-dns-update",
    name: "Development template: dns update",
    category: "development",
    description: "Usable runbook dns update document with bracketed placeholders.",
    tags: ["runbook","template","markdown"],
    content: `# Runbook: Dns Update (\`dns-update\`)

## When to use
- [Trigger: deploy, on-call, maintenance window, …]
- **Service / stack:** [names] — *blast radius* [user-facing / internal-only]

## Preconditions
- [ ] Approvals: [CAB, manager, SRE, …]
- [ ] Backups or snapshots: [id / timestamp]
- [ ] Maintenance banner / comms: [link or n/a]

## Procedure (ordered; edit for your org)
1. [Step] — *command* \`...\` — *expected output* [snippet]
2. [Step] — *verify metric* [name] in [dashboard]
3. [Step] — *notify* [stakeholder channel]

## Rollback / if something goes wrong
- [Immediate mitigation: scale down, feature flag, drain traffic, …]
- [Re-run previous release job / restore snapshot id …]

## Post-change checks
- SLO: [names] in range for [N min]
- **Synthetic:** [url or job] **green**
- Error rate / 5xx: [threshold]

## References & owners
- [Links to SOP, other runbooks, service catalog]
- **On-call & escalation:** [policy link]`,
  },
  {
    id: "development-runbook-monitoring-setup",
    name: "Development template: monitoring setup",
    category: "development",
    description: "Usable runbook monitoring setup document with bracketed placeholders.",
    tags: ["runbook","template","markdown"],
    content: `# Runbook: Monitoring Setup (\`monitoring-setup\`)

## When to use
- [Trigger: deploy, on-call, maintenance window, …]
- **Service / stack:** [names] — *blast radius* [user-facing / internal-only]

## Preconditions
- [ ] Approvals: [CAB, manager, SRE, …]
- [ ] Backups or snapshots: [id / timestamp]
- [ ] Maintenance banner / comms: [link or n/a]

## Procedure (ordered; edit for your org)
1. [Step] — *command* \`...\` — *expected output* [snippet]
2. [Step] — *verify metric* [name] in [dashboard]
3. [Step] — *notify* [stakeholder channel]

## Rollback / if something goes wrong
- [Immediate mitigation: scale down, feature flag, drain traffic, …]
- [Re-run previous release job / restore snapshot id …]

## Post-change checks
- SLO: [names] in range for [N min]
- **Synthetic:** [url or job] **green**
- Error rate / 5xx: [threshold]

## References & owners
- [Links to SOP, other runbooks, service catalog]
- **On-call & escalation:** [policy link]`,
  },
  {
    id: "development-runbook-backup-restore",
    name: "Development template: backup restore",
    category: "development",
    description: "Usable runbook backup restore document with bracketed placeholders.",
    tags: ["runbook","template","markdown"],
    content: `# Runbook: Backup Restore (\`backup-restore\`)

## When to use
- [Trigger: deploy, on-call, maintenance window, …]
- **Service / stack:** [names] — *blast radius* [user-facing / internal-only]

## Preconditions
- [ ] Approvals: [CAB, manager, SRE, …]
- [ ] Backups or snapshots: [id / timestamp]
- [ ] Maintenance banner / comms: [link or n/a]

## Procedure (ordered; edit for your org)
1. [Step] — *command* \`...\` — *expected output* [snippet]
2. [Step] — *verify metric* [name] in [dashboard]
3. [Step] — *notify* [stakeholder channel]

## Rollback / if something goes wrong
- [Immediate mitigation: scale down, feature flag, drain traffic, …]
- [Re-run previous release job / restore snapshot id …]

## Post-change checks
- SLO: [names] in range for [N min]
- **Synthetic:** [url or job] **green**
- Error rate / 5xx: [threshold]

## References & owners
- [Links to SOP, other runbooks, service catalog]
- **On-call & escalation:** [policy link]`,
  },
  {
    id: "development-runbook-disaster-recovery",
    name: "Development template: disaster recovery",
    category: "development",
    description: "Usable runbook disaster recovery document with bracketed placeholders.",
    tags: ["runbook","template","markdown"],
    content: `# Runbook: Disaster Recovery (\`disaster-recovery\`)

## When to use
- [Trigger: deploy, on-call, maintenance window, …]
- **Service / stack:** [names] — *blast radius* [user-facing / internal-only]

## Preconditions
- [ ] Approvals: [CAB, manager, SRE, …]
- [ ] Backups or snapshots: [id / timestamp]
- [ ] Maintenance banner / comms: [link or n/a]

## Procedure (ordered; edit for your org)
1. [Step] — *command* \`...\` — *expected output* [snippet]
2. [Step] — *verify metric* [name] in [dashboard]
3. [Step] — *notify* [stakeholder channel]

## Rollback / if something goes wrong
- [Immediate mitigation: scale down, feature flag, drain traffic, …]
- [Re-run previous release job / restore snapshot id …]

## Post-change checks
- SLO: [names] in range for [N min]
- **Synthetic:** [url or job] **green**
- Error rate / 5xx: [threshold]

## References & owners
- [Links to SOP, other runbooks, service catalog]
- **On-call & escalation:** [policy link]`,
  },
  {
    id: "development-runbook-failover",
    name: "Development template: failover",
    category: "development",
    description: "Usable runbook failover document with bracketed placeholders.",
    tags: ["runbook","template","markdown"],
    content: `# Runbook: Failover (\`failover\`)

## When to use
- [Trigger: deploy, on-call, maintenance window, …]
- **Service / stack:** [names] — *blast radius* [user-facing / internal-only]

## Preconditions
- [ ] Approvals: [CAB, manager, SRE, …]
- [ ] Backups or snapshots: [id / timestamp]
- [ ] Maintenance banner / comms: [link or n/a]

## Procedure (ordered; edit for your org)
1. [Step] — *command* \`...\` — *expected output* [snippet]
2. [Step] — *verify metric* [name] in [dashboard]
3. [Step] — *notify* [stakeholder channel]

## Rollback / if something goes wrong
- [Immediate mitigation: scale down, feature flag, drain traffic, …]
- [Re-run previous release job / restore snapshot id …]

## Post-change checks
- SLO: [names] in range for [N min]
- **Synthetic:** [url or job] **green**
- Error rate / 5xx: [threshold]

## References & owners
- [Links to SOP, other runbooks, service catalog]
- **On-call & escalation:** [policy link]`,
  },
  {
    id: "development-runbook-load-testing",
    name: "Development template: load testing",
    category: "development",
    description: "Usable runbook load testing document with bracketed placeholders.",
    tags: ["runbook","template","markdown"],
    content: `# Runbook: Load Testing (\`load-testing\`)

## When to use
- [Trigger: deploy, on-call, maintenance window, …]
- **Service / stack:** [names] — *blast radius* [user-facing / internal-only]

## Preconditions
- [ ] Approvals: [CAB, manager, SRE, …]
- [ ] Backups or snapshots: [id / timestamp]
- [ ] Maintenance banner / comms: [link or n/a]

## Procedure (ordered; edit for your org)
1. [Step] — *command* \`...\` — *expected output* [snippet]
2. [Step] — *verify metric* [name] in [dashboard]
3. [Step] — *notify* [stakeholder channel]

## Rollback / if something goes wrong
- [Immediate mitigation: scale down, feature flag, drain traffic, …]
- [Re-run previous release job / restore snapshot id …]

## Post-change checks
- SLO: [names] in range for [N min]
- **Synthetic:** [url or job] **green**
- Error rate / 5xx: [threshold]

## References & owners
- [Links to SOP, other runbooks, service catalog]
- **On-call & escalation:** [policy link]`,
  },
  {
    id: "development-runbook-security-patch",
    name: "Development template: security patch",
    category: "development",
    description: "Usable runbook security patch document with bracketed placeholders.",
    tags: ["runbook","template","markdown"],
    content: `# Runbook: Security Patch (\`security-patch\`)

## When to use
- [Trigger: deploy, on-call, maintenance window, …]
- **Service / stack:** [names] — *blast radius* [user-facing / internal-only]

## Preconditions
- [ ] Approvals: [CAB, manager, SRE, …]
- [ ] Backups or snapshots: [id / timestamp]
- [ ] Maintenance banner / comms: [link or n/a]

## Procedure (ordered; edit for your org)
1. [Step] — *command* \`...\` — *expected output* [snippet]
2. [Step] — *verify metric* [name] in [dashboard]
3. [Step] — *notify* [stakeholder channel]

## Rollback / if something goes wrong
- [Immediate mitigation: scale down, feature flag, drain traffic, …]
- [Re-run previous release job / restore snapshot id …]

## Post-change checks
- SLO: [names] in range for [N min]
- **Synthetic:** [url or job] **green**
- Error rate / 5xx: [threshold]

## References & owners
- [Links to SOP, other runbooks, service catalog]
- **On-call & escalation:** [policy link]`,
  },
  {
    id: "development-runbook-data-recovery",
    name: "Development template: data recovery",
    category: "development",
    description: "Usable runbook data recovery document with bracketed placeholders.",
    tags: ["runbook","template","markdown"],
    content: `# Runbook: Data Recovery (\`data-recovery\`)

## When to use
- [Trigger: deploy, on-call, maintenance window, …]
- **Service / stack:** [names] — *blast radius* [user-facing / internal-only]

## Preconditions
- [ ] Approvals: [CAB, manager, SRE, …]
- [ ] Backups or snapshots: [id / timestamp]
- [ ] Maintenance banner / comms: [link or n/a]

## Procedure (ordered; edit for your org)
1. [Step] — *command* \`...\` — *expected output* [snippet]
2. [Step] — *verify metric* [name] in [dashboard]
3. [Step] — *notify* [stakeholder channel]

## Rollback / if something goes wrong
- [Immediate mitigation: scale down, feature flag, drain traffic, …]
- [Re-run previous release job / restore snapshot id …]

## Post-change checks
- SLO: [names] in range for [N min]
- **Synthetic:** [url or job] **green**
- Error rate / 5xx: [threshold]

## References & owners
- [Links to SOP, other runbooks, service catalog]
- **On-call & escalation:** [policy link]`,
  },
  {
    id: "development-code-review-checklist-general",
    name: "Development template: review checklist general",
    category: "development",
    description: "Usable code review checklist general document with bracketed placeholders.",
    tags: ["code","template","markdown"],
    content: `# Code Review Checklist General

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-code-review-checklist-security",
    name: "Development template: review checklist security",
    category: "development",
    description: "Usable code review checklist security document with bracketed placeholders.",
    tags: ["code","template","markdown"],
    content: `# Code Review Checklist Security

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-code-review-checklist-performance",
    name: "Development template: review checklist performance",
    category: "development",
    description: "Usable code review checklist performance document with bracketed placeholders.",
    tags: ["code","template","markdown"],
    content: `# Code Review Checklist Performance

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-code-review-checklist-accessibility",
    name: "Development template: review checklist accessibility",
    category: "development",
    description: "Usable code review checklist accessibility document with bracketed placeholders.",
    tags: ["code","template","markdown"],
    content: `# Code Review Checklist Accessibility

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-code-review-checklist-testing",
    name: "Development template: review checklist testing",
    category: "development",
    description: "Usable code review checklist testing document with bracketed placeholders.",
    tags: ["code","template","markdown"],
    content: `# Code Review Checklist Testing

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-release-notes-major",
    name: "Development template: notes major",
    category: "development",
    description: "Usable release notes major document with bracketed placeholders.",
    tags: ["release","template","markdown"],
    content: `# Release Notes Major

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-release-notes-minor",
    name: "Development template: notes minor",
    category: "development",
    description: "Usable release notes minor document with bracketed placeholders.",
    tags: ["release","template","markdown"],
    content: `# Release Notes Minor

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-release-notes-patch",
    name: "Development template: notes patch",
    category: "development",
    description: "Usable release notes patch document with bracketed placeholders.",
    tags: ["release","template","markdown"],
    content: `# Release Notes Patch

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-release-notes-pre-release",
    name: "Development template: notes pre release",
    category: "development",
    description: "Usable release notes pre release document with bracketed placeholders.",
    tags: ["release","template","markdown"],
    content: `# Release Notes Pre Release

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-release-notes-lts",
    name: "Development template: notes lts",
    category: "development",
    description: "Usable release notes lts document with bracketed placeholders.",
    tags: ["release","template","markdown"],
    content: `# Release Notes Lts

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-security-policy-basic",
    name: "Development template: policy basic",
    category: "development",
    description: "Usable security policy basic document with bracketed placeholders.",
    tags: ["security","template","markdown"],
    content: `# Security Policy Basic

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-security-policy-detailed",
    name: "Development template: policy detailed",
    category: "development",
    description: "Usable security policy detailed document with bracketed placeholders.",
    tags: ["security","template","markdown"],
    content: `# Security Policy Detailed

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-security-policy-enterprise",
    name: "Development template: policy enterprise",
    category: "development",
    description: "Usable security policy enterprise document with bracketed placeholders.",
    tags: ["security","template","markdown"],
    content: `# Security Policy Enterprise

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-cicd-github-actions",
    name: "Development template: github actions",
    category: "development",
    description: "Usable cicd github actions document with bracketed placeholders.",
    tags: ["cicd","template","markdown"],
    content: `# Cicd Github Actions

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-cicd-gitlab-ci",
    name: "Development template: gitlab ci",
    category: "development",
    description: "Usable cicd gitlab ci document with bracketed placeholders.",
    tags: ["cicd","template","markdown"],
    content: `# Cicd Gitlab Ci

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-cicd-jenkins",
    name: "Development template: jenkins",
    category: "development",
    description: "Usable cicd jenkins document with bracketed placeholders.",
    tags: ["cicd","template","markdown"],
    content: `# Cicd Jenkins

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-cicd-circleci",
    name: "Development template: circleci",
    category: "development",
    description: "Usable cicd circleci document with bracketed placeholders.",
    tags: ["cicd","template","markdown"],
    content: `# Cicd Circleci

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-dockerfile-node",
    name: "Development template: node",
    category: "development",
    description: "Usable dockerfile node document with bracketed placeholders.",
    tags: ["dockerfile","template","markdown"],
    content: `# Dockerfile Node

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-dockerfile-python",
    name: "Development template: python",
    category: "development",
    description: "Usable dockerfile python document with bracketed placeholders.",
    tags: ["dockerfile","template","markdown"],
    content: `# Dockerfile Python

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-dockerfile-go",
    name: "Development template: go",
    category: "development",
    description: "Usable dockerfile go document with bracketed placeholders.",
    tags: ["dockerfile","template","markdown"],
    content: `# Dockerfile Go

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-dockerfile-java",
    name: "Development template: java",
    category: "development",
    description: "Usable dockerfile java document with bracketed placeholders.",
    tags: ["dockerfile","template","markdown"],
    content: `# Dockerfile Java

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-dockerfile-multi-stage",
    name: "Development template: multi stage",
    category: "development",
    description: "Usable dockerfile multi stage document with bracketed placeholders.",
    tags: ["dockerfile","template","markdown"],
    content: `# Dockerfile Multi Stage

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-docker-compose-web-app",
    name: "Development template: compose web app",
    category: "development",
    description: "Usable docker compose web app document with bracketed placeholders.",
    tags: ["docker","template","markdown"],
    content: `# Docker Compose Web App

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-docker-compose-microservices",
    name: "Development template: compose microservices",
    category: "development",
    description: "Usable docker compose microservices document with bracketed placeholders.",
    tags: ["docker","template","markdown"],
    content: `# Docker Compose Microservices

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-docker-compose-dev-environment",
    name: "Development template: compose dev environment",
    category: "development",
    description: "Usable docker compose dev environment document with bracketed placeholders.",
    tags: ["docker","template","markdown"],
    content: `# Docker Compose Dev Environment

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-docker-compose-monitoring-stack",
    name: "Development template: compose monitoring stack",
    category: "development",
    description: "Usable docker compose monitoring stack document with bracketed placeholders.",
    tags: ["docker","template","markdown"],
    content: `# Docker Compose Monitoring Stack

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-makefile-basic",
    name: "Development template: basic",
    category: "development",
    description: "Usable makefile basic document with bracketed placeholders.",
    tags: ["makefile","template","markdown"],
    content: `# Makefile Basic

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-makefile-go",
    name: "Development template: go",
    category: "development",
    description: "Usable makefile go document with bracketed placeholders.",
    tags: ["makefile","template","markdown"],
    content: `# Makefile Go

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-makefile-python",
    name: "Development template: python",
    category: "development",
    description: "Usable makefile python document with bracketed placeholders.",
    tags: ["makefile","template","markdown"],
    content: `# Makefile Python

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-makefile-node",
    name: "Development template: node",
    category: "development",
    description: "Usable makefile node document with bracketed placeholders.",
    tags: ["makefile","template","markdown"],
    content: `# Makefile Node

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-gitignore-node",
    name: "Development template: node",
    category: "development",
    description: "Usable gitignore node document with bracketed placeholders.",
    tags: ["gitignore","template","markdown"],
    content: `# Gitignore Node

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-gitignore-python",
    name: "Development template: python",
    category: "development",
    description: "Usable gitignore python document with bracketed placeholders.",
    tags: ["gitignore","template","markdown"],
    content: `# Gitignore Python

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-gitignore-go",
    name: "Development template: go",
    category: "development",
    description: "Usable gitignore go document with bracketed placeholders.",
    tags: ["gitignore","template","markdown"],
    content: `# Gitignore Go

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-gitignore-java",
    name: "Development template: java",
    category: "development",
    description: "Usable gitignore java document with bracketed placeholders.",
    tags: ["gitignore","template","markdown"],
    content: `# Gitignore Java

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-gitignore-rust",
    name: "Development template: rust",
    category: "development",
    description: "Usable gitignore rust document with bracketed placeholders.",
    tags: ["gitignore","template","markdown"],
    content: `# Gitignore Rust

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-commit-message-conventional",
    name: "Development template: message conventional",
    category: "development",
    description: "Usable commit message conventional document with bracketed placeholders.",
    tags: ["commit","template","markdown"],
    content: `# Commit Message Conventional

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-commit-message-scoped",
    name: "Development template: message scoped",
    category: "development",
    description: "Usable commit message scoped document with bracketed placeholders.",
    tags: ["commit","template","markdown"],
    content: `# Commit Message Scoped

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-commit-message-team",
    name: "Development template: message team",
    category: "development",
    description: "Usable commit message team document with bracketed placeholders.",
    tags: ["commit","template","markdown"],
    content: `# Commit Message Team

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-branch-naming-gitflow",
    name: "Development template: naming gitflow",
    category: "development",
    description: "Usable branch naming gitflow document with bracketed placeholders.",
    tags: ["branch","template","markdown"],
    content: `# Branch Naming Gitflow

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-branch-naming-trunk-based",
    name: "Development template: naming trunk based",
    category: "development",
    description: "Usable branch naming trunk based document with bracketed placeholders.",
    tags: ["branch","template","markdown"],
    content: `# Branch Naming Trunk Based

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-code-style-typescript",
    name: "Development template: style typescript",
    category: "development",
    description: "Usable code style typescript document with bracketed placeholders.",
    tags: ["code","template","markdown"],
    content: `# Code Style Typescript

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-code-style-python",
    name: "Development template: style python",
    category: "development",
    description: "Usable code style python document with bracketed placeholders.",
    tags: ["code","template","markdown"],
    content: `# Code Style Python

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-code-style-go",
    name: "Development template: style go",
    category: "development",
    description: "Usable code style go document with bracketed placeholders.",
    tags: ["code","template","markdown"],
    content: `# Code Style Go

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-code-style-rust",
    name: "Development template: style rust",
    category: "development",
    description: "Usable code style rust document with bracketed placeholders.",
    tags: ["code","template","markdown"],
    content: `# Code Style Rust

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-code-style-css",
    name: "Development template: style css",
    category: "development",
    description: "Usable code style css document with bracketed placeholders.",
    tags: ["code","template","markdown"],
    content: `# Code Style Css

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-api-versioning-url-and-header",
    name: "Development template: versioning url and header",
    category: "development",
    description: "Usable api versioning url and header document with bracketed placeholders.",
    tags: ["api","template","markdown"],
    content: `# Api Versioning Url And Header

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-api-versioning-semantic-policy",
    name: "Development template: versioning semantic policy",
    category: "development",
    description: "Usable api versioning semantic policy document with bracketed placeholders.",
    tags: ["api","template","markdown"],
    content: `# Api Versioning Semantic Policy

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-dependency-update-policy-rolling",
    name: "Development template: update policy rolling",
    category: "development",
    description: "Usable dependency update policy rolling document with bracketed placeholders.",
    tags: ["dependency","template","markdown"],
    content: `# Dependency Update Policy Rolling

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-dependency-update-policy-pinned",
    name: "Development template: update policy pinned",
    category: "development",
    description: "Usable dependency update policy pinned document with bracketed placeholders.",
    tags: ["dependency","template","markdown"],
    content: `# Dependency Update Policy Pinned

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-testing-strategy-pyramid",
    name: "Development template: strategy pyramid",
    category: "development",
    description: "Usable testing strategy pyramid document with bracketed placeholders.",
    tags: ["testing","template","markdown"],
    content: `# Testing Strategy Pyramid

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-testing-strategy-contract",
    name: "Development template: strategy contract",
    category: "development",
    description: "Usable testing strategy contract document with bracketed placeholders.",
    tags: ["testing","template","markdown"],
    content: `# Testing Strategy Contract

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-testing-strategy-shift-right",
    name: "Development template: strategy shift right",
    category: "development",
    description: "Usable testing strategy shift right document with bracketed placeholders.",
    tags: ["testing","template","markdown"],
    content: `# Testing Strategy Shift Right

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-monitoring-strategies",
    name: "Monitoring strategies (observability + SLO/SLI)",
    category: "development",
    description: "Use RED/USE and SLIs/SLOs in one place; two approaches in a single long-running doc for small teams.",
    tags: ["monitoring","slo","sli","observability"],
    content: `# Monitoring strategies: RED/USE, SLIs, and SLOs

> Combine **workload** metrics, **serving** health, and **SLOs** in one program of record. Replace bracketed fields for your org.

## Part A — RED/USE and golden signals (operational)
- **R**ate, **E**rrors, **D**uration for each critical API or job queue: [name]
- **USE** for resources: **U**tilization, **S**aturation, **E**rrors: [per resource]
- **Dashboard links:** [Grafana / Datadog / ...]

| Signal | What “good” looks like (example) |
| --- | --- |
| p95 latency for \`/api/orders\` | [X ms] |
| Error rate (5xx) | [< Y% for Z minutes] |

## Part B — SLI/SLO program (user-facing)
- **SLO object:** e.g. “[99.9%] of [reads] return success in < [N ms] per calendar month]”
- **Error budget policy:** at [50%] remaining → [triage feature work]; at [0%] → [freeze, incident review]
- **SLO report cadence:** [monthly; owner: team X]

## On-call tie-in
- Page on **SLO burn** and **SRE-defined** “customer pain” only if [conditions].
- Runbook link for SLO policy exceptions: [link]`,
  },
  {
    id: "development-alerting-playbooks",
    name: "Alerting playbooks (noise control + severity routing)",
    category: "development",
    description: "Reduce alert fatigue and wire severities to pages and on-call in one runbook set.",
    tags: ["alerting","on-call","sre","incident"],
    content: `# Alerting playbooks: noise, severity, and ownership

## Part A — Reduce alert noise (tune before you add pages)
- **Aggregation:** [group by service + region, not by pod unless necessary].
- **Thresholds from SLO/SLA:** not from historical max + 5%.
- **Hysteresis / duration:** alert only if [condition] for [N] minutes (example).
- **Triage dashboard:** [link] for “top noisy alerts this week”

| Symptom | Root cause to check | Action |
| --- | --- | --- |
| Paging on CPU spikes that recover | [bad threshold / missing baseline] | [raise N or use anomaly] |

## Part B — Severity routing and escalation
- **P0 (wake people):** [customer-facing outage, data loss, security] — *page both* [Oncall + N]
- **P1 (business hours+):** [major degradation, workaround exists]
- **P2 (next day):** [non-critical, tech debt, noisy metric]
- **Escalation after [N] min without ack:** [manager, secondary on-call]
- **Staged communication:** [status page, internal #incident channel, legal if PII] — *links to templates*

## After-action
- Every paged alert should be **tunable, tunable, or wrong**: *document in* [tuning runbook].`,
  },
  {
    id: "development-oncall-handoff",
    name: "On-call handoff (shift + week)",
    category: "development",
    description: "Structured shift change plus weekly handoff: context, open incidents, and risky changes.",
    tags: ["oncall","handoff","sre","shift"],
    content: `# On-call handoff: shift and weekly

## Shift handoff (end of on-call block)
- **Oncall A → B, window:** [TZ], **handover time:** [date/time].
- **Open incidents / sev-? / links:** [list or “none”].
- **Ongoing changes / risk:** [canary, migration, feature flags].
- **Key dashboards / runbooks to watch:** [links].
- **Notable log patterns / “weird but stable” things:** [bullets].

## Weekly on-call report (asynchronous, optional for small teams)
- **P1/P2 count and themes:** [table or list]
- **Action items to reduce toil / alerts:** [owner + due].
- **Customer-impacting events:** *even if not sev* — *brief* [1-liners with links].

## Contact tree
| Role | Name / alias | How to page |
| --- | --- | --- |
| Primary on-call | [alias] | [phone / PagerDuty] |
| [Dependency owner] | [alias] | [Slack / phone] |`,
  },
  {
    id: "development-postmortem-blameless",
    name: "Blameless postmortem (two-severity pattern)",
    category: "development",
    description: "Postmortem for major and non-major incidents with timeline, impact, and follow-ups in one document.",
    tags: ["postmortem","sre","incident","rca"],
    content: `# Blameless postmortem (sev-1 and sev-2 pattern)

> Fill **one** of the two “severity” blocks below, or use both in the same document with clear headers.

## Metadata
- **Incident / ticket:** [P1-... / INC-...]
- **Time range (UTC):** [start] – [end]
- **Severity used:** [Sev-1: broad customer or revenue impact] **or** [Sev-2: limited blast radius, workaround].

## Summary (5 sentences max)
- **What customers saw** — [user-visible symptoms].
- **What broke** in **technical** terms — [1–2 sentences].
- **How we fixed / mitigated** — [stabilization, rollback, or flag].

## Timeline (UTC) — *append rows as you learn*
| Time (UTC) | Event |
| --- | --- |
| [T0] | [Symptom detected / page fired] |
| [T1] | [Action / discovery] |
| [T2] | [Service restored] |

## Root cause (5 whys, no blame to individuals — focus on systems)
- **Root cause category:** [config, deploy, capacity, code bug, dependency, human process gap]
- **Why it was possible:** [missed guardrail, lack of test, runbook gap]

## Follow-up actions (JIRA / tickets, owners, due dates)
| Action | Type | Owner | Due |
| --- | --- | --- | --- |
| [Prevent recurrence] | [code / process / runbook] | [name] | [date] |

## What went well / what to improve in response
- **Went well:** [coordination, rollback speed, comms].
- **Improve next time:** [tooling, access, on-call runbook].`,
  },
  {
    id: "development-technical-debt-sprint",
    name: "Development template: debt sprint",
    category: "development",
    description: "Usable technical debt sprint document with bracketed placeholders.",
    tags: ["technical","template","markdown"],
    content: `# Technical Debt Sprint

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-technical-debt-backlog",
    name: "Development template: debt backlog",
    category: "development",
    description: "Usable technical debt backlog document with bracketed placeholders.",
    tags: ["technical","template","markdown"],
    content: `# Technical Debt Backlog

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-deprecation-notice-api",
    name: "Development template: notice api",
    category: "development",
    description: "Usable deprecation notice api document with bracketed placeholders.",
    tags: ["deprecation","template","markdown"],
    content: `# Deprecation Notice Api

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-deprecation-notice-package",
    name: "Development template: notice package",
    category: "development",
    description: "Usable deprecation notice package document with bracketed placeholders.",
    tags: ["deprecation","template","markdown"],
    content: `# Deprecation Notice Package

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-migration-guide-library",
    name: "Development template: guide library",
    category: "development",
    description: "Usable migration guide library document with bracketed placeholders.",
    tags: ["migration","template","markdown"],
    content: `# Migration Guide Library

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-migration-guide-framework",
    name: "Development template: guide framework",
    category: "development",
    description: "Usable migration guide framework document with bracketed placeholders.",
    tags: ["migration","template","markdown"],
    content: `# Migration Guide Framework

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-migration-guide-database",
    name: "Development template: guide database",
    category: "development",
    description: "Usable migration guide database document with bracketed placeholders.",
    tags: ["migration","template","markdown"],
    content: `# Migration Guide Database

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-migration-guide-api-version",
    name: "Development template: guide api version",
    category: "development",
    description: "Usable migration guide api version document with bracketed placeholders.",
    tags: ["migration","template","markdown"],
    content: `# Migration Guide Api Version

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-environment-setup-macos",
    name: "Development template: setup macos",
    category: "development",
    description: "Usable environment setup macos document with bracketed placeholders.",
    tags: ["environment","template","markdown"],
    content: `# Environment Setup Macos

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-environment-setup-linux",
    name: "Development template: setup linux",
    category: "development",
    description: "Usable environment setup linux document with bracketed placeholders.",
    tags: ["environment","template","markdown"],
    content: `# Environment Setup Linux

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-environment-setup-windows",
    name: "Development template: setup windows",
    category: "development",
    description: "Usable environment setup windows document with bracketed placeholders.",
    tags: ["environment","template","markdown"],
    content: `# Environment Setup Windows

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-troubleshooting-availability",
    name: "Development template: availability",
    category: "development",
    description: "Usable troubleshooting availability document with bracketed placeholders.",
    tags: ["troubleshooting","template","markdown"],
    content: `# Troubleshooting Availability

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-troubleshooting-latency",
    name: "Development template: latency",
    category: "development",
    description: "Usable troubleshooting latency document with bracketed placeholders.",
    tags: ["troubleshooting","template","markdown"],
    content: `# Troubleshooting Latency

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-observability-dashboards",
    name: "Development template: dashboards",
    category: "development",
    description: "Usable observability dashboards document with bracketed placeholders.",
    tags: ["observability","template","markdown"],
    content: `# Observability Dashboards

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-observability-slo-budgets",
    name: "Development template: slo budgets",
    category: "development",
    description: "Usable observability slo budgets document with bracketed placeholders.",
    tags: ["observability","template","markdown"],
    content: `# Observability Slo Budgets

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-releases-feature-flags",
    name: "Development template: feature flags",
    category: "development",
    description: "Usable releases feature flags document with bracketed placeholders.",
    tags: ["releases","template","markdown"],
    content: `# Releases Feature Flags

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  },
  {
    id: "development-qa-benchmark-regression",
    name: "Development template: benchmark regression",
    category: "development",
    description: "Usable qa benchmark regression document with bracketed placeholders.",
    tags: ["qa","template","markdown"],
    content: `# Qa Benchmark Regression

> **Audience:** [engineers, SRE, security, product] — *replace with your team*

## Context
- **Current situation:** [2–3 sentences from reality, not marketing]
- **Decisions / constraints already fixed:** [list]

## Requirements
| Requirement | Status | Note |
| --- | --- | --- |
| [R1] | [must/should] | [details] |
| [R2] | [must/should] | [details] |

## Proposed approach
1. [Step or milestone] — *owner* [name]
2. [Step] — *owner* [name]
3. [Step] — *owner* [name]

## Risks & mitigations
- **Risk:** [text] — *Mitigation:* [text]
- **Risk:** [text] — *Mitigation:* [text]

## Validation
- **How we know it worked:** [metrics, checklists, sign-off from role X]
- **How we roll back:** [revert, flag, or manual steps]

## Links
- Design / tickets: [links]`,
  }];
