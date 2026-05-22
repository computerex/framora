# Data export (CSV) — [System / object]

| Column (header) | Type | Example | Required | Note |
| --- | --- | --- | ---: | --- |
| `id` | string | `[uuid or natural key]` | yes | [stable id] |
| `created_at` | datetime | `[ISO-8601]` | [yes/no] | [source tz] |
| `[attr1]` | string | `…` | yes | [validation] |

## File naming & layout
- **Name:** `[prefix]_[date].csv` — **Encoding:** UTF-8, comma-separated, no BOM [unless required]
- **Line endings:** [LF/CRLF] — **Quoting:** [RFC rules / quote all] — **Null:** empty or `NULL`

## Quotas, pagination, delta
- **If large:** [batch size] — **Cursor / watermark field:** [field] — **Delta from:** [timestamp]
- **PITR / replays:** [how resync works]

## PII & classification
- **Columns redacted in export for role [x]:** [list] — **Approval:** [owner + ticket]