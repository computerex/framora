# Configuration

> Tune [Product] for [your team, regions, and compliance] without guesswork.

## Where settings are stored
| Layer | Location | Who can edit |
| --- | --- | --- |
| **Account** | [Web → Profile] | [self] |
| **Organization** | [Org → Settings] | [Admin] |
| **Resource** | [Resource → [tab]] | [Editor+] |

## Recommended profiles
- **Start simple:** [defaults table for SME]
- **Scale:** [enable features in order: [A], [B], [C]]

## Common settings
| Setting | What it does | Suggested value |
| --- | --- | --- |
| `[Default region]` | [data residency] | [eu-west-1] for [GDPR] |
| `[Session timeout]` | [user idle] | [30m] in regulated orgs |
| `[Audit]` | [log exports] | [on] |

## File-based config (if applicable)
```yaml
# [~/.[product]/config.yaml]
[product]:
  default_environment: "production"
  editor: "vscode"
```

## Environments
- **Map** `[prod/stage/dev]` to [URLs / keys] — *never* reuse prod keys in dev

## Change process
- **Test** in [staging] — [export configuration diff] — **announce** in [change channel]
