# Source → target field mapping — [From system] to [To system]

| Source (path) | Type | Target (path) | Transform | Null / default | Notes |
| --- | --- | --- | --- | --- | --- |
| `user.email` | string | `contact_email` | lower(trim(x)) | skip row if empty | [PII] |
| `order.total` | decimal | `order_total` | `round2(x * fx)` | 0.00 if missing | [currency] |

## Reference data
- **Value maps (lookup):** [table name or sheet link] — **Owner of reference:** [team]
- **Tie-break / precedence when joins multiply:** [rule]

## Edge cases & exceptions
- **Time zones:** [store in UTC, display in profile TZ] — **Legacy IDs:** [prefix rules]
- **Rejects & quarantine:** [quarantine id field for manual fix]

## Sign-off (before ETL to prod)
- **Data owner (business):** [name] [date] — **Engineer:** [name] — **QA (spot checks):** [name] | [date]