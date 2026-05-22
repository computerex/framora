# Advanced usage

> For teams ready to [compose workflows], [automate], and [optimize] across [workspaces].

## Multi-step workflows
- **Pattern A:** [import → validate → publish] with **[automation: rules / playbooks]**
- **Pattern B:** [fan-out] `[N]` [children] and track **[orchestrator screen]**

## Automation hooks
| Hook | Fires on | You can [script / rule] |
| --- | --- | --- |
| `[on.event]` | [state transition] | [webhook, queue message] |
| `[schedule:*]` | [cron] | [batch API call] |

```json
{ "name": "When [X], then [Y]", "enabled": true, "filters": { "tag": "vip" } }
```

## Performance patterns
- **Batch UI actions** using **[multi-select]** — [soft limit: N]
- **For large [tables]** — use [saved views, server-side sort] — *avoid* [load-all]

## Cross-resource
- **Linking:** `[type:id]` from [field] — [integrity rules, orphan policy]

## Quotas
- [Org-wide] [concurrency] — *symptoms* [when exceeded] — [remediation: upgrade, shard]

## When to use API/CLI
- [Operations > 1k rows] — [migrations, scripted audit] — see [Reference]([api doc])
