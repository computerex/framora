# Import template (CSV) — [Entity type]

| Column (exact header) | Type | Max len | Valid values | Example |
| --- | --- | ---: | --- | --- |
| `external_id` | string | [n] | [regex / enum] | `[value]` |
| `name` | string | [n] | [not empty] | `[value]` |
| `status` | enum | — | [active, archived] | `active` |

## Rules
- **Uniqueness:** [natural keys that must be unique] — **Upsert:** [on conflict behavior]
- **Delete semantics:** [soft vs hard, tombstone] — **Idempotency key:** [column]

## Dry-run and reporting
- **Pre-import validation:** [lint rules, row-by-row errors] — **Sample rows:** [min 2]
- **Error file:** `[errors]_[import_id].csv` with code + message

## Reconciliation
- **Expected count:** [n] after import — **Hash / checksum of file:** [algo + value on sample]