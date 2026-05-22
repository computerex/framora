# CLI — essentials

> Command `[product]` for [automation, CI, and local workflows].

## Install & update
```bash
# See installation guide; verify:
[product] version
[product] update   # or package manager: [command]
```

## Global flags
| Flag | Purpose |
| --- | --- |
| `--[profile]` | Use named profile `[name]` from config |
| `--[org]` | Default org: `[orgId]` |
| `--[json]` | Machine-readable output |
| `--[no-color]` | [CI / logs] |
| `-v / --verbose` | [trace HTTP, timings] — *may* print secrets: [masking policy]

## Core commands
```bash
# Auth
[product] auth login
[product] auth status

# Resources
[product] [resource] list --page-size 100
[product] [resource] get [id]
[product] [resource] create --file [path.yaml]

# Jobs
[product] [job] run --[wait]
```

## Config file
- **Path:** `[~/.[product]/config]` or `[$[PRODUCT]_CONFIG]` — *see* [User guide: Configuration]

## Exit codes
| Code | Meaning |
| --- | --- |
| 0 | Success |
| 1 | [Generic failure] — see stderr |
| 2 | [User error / bad args] |
| 3 | [Auth / permission] — run `[auth login]` |
| 4 | [Rate limited] — retry with backoff |

## Shell completion
- **bash/zsh/fish/pwsh** — `[product] completion -h`
