# Install with a package manager

> **Name:** `[package]` *on* *[`[registry]`] —* *verifiable* *checksums* *—* *Air-gapped* *note* *at* *end* *

## [npm / pnpm / yarn]
```bash
[corepack enable] # if needed
npm i -g [package]@[version]
[product] --version
```

## [pip / uv] (python)
- **Extras* *—* *[`[pip* *install* *'[pkg][torch]`]* *—* *compatible* *Python* *[`[3.11* *–* *3.12`]*  *

```bash
uv tool install [name]==[version]
```

## [homebrew] (macOS)
```bash
brew install [tap]/[formula]
```

## Locking in apps
- *Commit* *`[package-lock.json* */* *pnpm-lock* */* *Cargo.lock* */* *uv.lock`] *per* *policy* in *[`[CONTRIBUTING.md`]*  *

## Verify integrity
- *`[npm* *audit* */* *pip* *check`] *—* *SLSA* *or* *cosign* *on* *release* *assets* *[`[link* *to* *provenance* *if* *any`]*  *

## Offline / private registry
- *Mirror* *[`[Verdaccio* */* *Artifactory`] *—* *set* *[`[.npmrc* */* *pip* *index-url`]*  *—* *document* *in* *[`[enterprise* *doc`]*  *
