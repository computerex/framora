# Validation rules — [Form / file / event schema]

| Field | Check | On fail |
| --- | --- | --- |
| `email` | `regex + MX optional` | [error code E-EMAIL] |
| `amount` | `>=0, scale<=2, currency=ISO` | [error code] |

## Cross-field rules
- **Rule V1:** [if a then b must …] — **Rule V2:** [if type=X then allowlist …]
- **Uniqueness scope:** [per org / global] on `[fields]` with message […]

## Whitelist of codes
- **E-001** — [human copy] — **User action:** [fix input / contact support]

## Test matrix (sampling strategy)
| Class | # cases | Data source |
| --- | --: | --- |
| Happy path | [n] | [synthetic/anon prod sample] |

## Monitoring
- **KPIs:** [reject %, p95 check time, rule hit counts] — **Alert:** [SLO, channel]