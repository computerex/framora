# Install from source

> **Stack:** [Rust/Node/Go/…] — *supported* *OS* *[`[mac, linux, wsl2`]*  *—* *time* *to* *first* *build* *~* *[M]* *min* *

## 1) Clone
```bash
git clone [repo]
cd [name]
git submodule update --init --recursive
```

## 2) Toolchains
- **Version* *pins* *—* *[`[asdf* */ mise / nvm / rustup`] *—* *see* *`[.tool-versions`]** / *`[rust-toolchain.toml`]*  *

```bash
# example
[tool] install
```

## 3) Dependencies
- *System* *packages* *(`[apt* *install* *…`])*  *—* *optional* *GPU* *drivers* *for* *[`[local* *ML* *tests`]*  *

## 4) Build
```bash
[make all | cargo build | pnpm build]
```

## 5) Test
- *`[make test]` *—* *integration* *needs* *[`[docker* *compose* *up* *-d`]*  *in* *[`[services/]`]**

## 6) Local config
- *Copy* *`[.env.example* *→* *.env`] —* *generate* *keys* *with* *`[script]` *—* *never* *commit* *secrets* *

## Dev tips
- *Watch* *mode* *[`[pnpm* *dev* */* *cargo* *watch`] —* *pre-commit* *hooks* *if* *[`[.pre-commit* *config* *present`]*  *
