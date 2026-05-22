# Data import & export

> Move [entities] in and out of [Product] with **repeatable** jobs and **clear** error reporting.

## Formats
| Format | Import | Export | Notes |
| --- | --- | --- | --- |
| **CSV** | [yes] | [yes] | [UTF-8, RFC4180, headers required] |
| **XLSX** | [optional] | [optional] | [row limits, macros stripped] |
| **JSONL** | [API/bulk] | [API] | [one object per line] for [ETL] |

## Import flow
1. **Download** [template] from [path] — *includes* [required col order]
2. **Map** fields — [fuzzy match] and **[saved mapping profiles]**
3. **Validate** (dry run) — [error report with row, column, code]
4. **Commit** — *async job* for [>N rows]

```text
# Example row error
Row 12, 'email': INVALID_FORMAT (expected: RFC 5322-like)
```

## Export flow
- **From UI** — [row cap for sync export] — *for* large sets use **[async export]**
- **Schedule** [daily/weekly] to [S3, SFTP, email link]

## Quotas
- [Max import size, max concurrent jobs] — *enterprise* [higher, SLA]

## Security
- PII in files — [at-rest encryption, link expiry, role gate for export] — *see* [compliance] doc
