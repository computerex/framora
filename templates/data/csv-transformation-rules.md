# Transformation rules — [Job / stream name]

| Step | When | Input | Output | Rule (pseudo) | Idempotent? |
| ---: | --- | --- | --- | --- | ---: |
| 1 | on insert | [raw] | [norm] | `norm_email(x)` | yes |
| 2 | on update | [norm] | [view] | `merge(prior, x)` | yes |

## State & watermarks
- **State store:** [topic/table] — **Key:** [id] — **At-least / exactly-once:** [guarantee + dedupe] — **Lag SLO:** [n min]

## Error handling & DLQ
- **Policy:** [retry n, backoff, poison pill] — **DLQ path:** [queue/table] — **Replay:** [playbook id]

## Test vectors
| Scenario | In | Out |
| --- | --- | --- |
| [dup email] | [row] | [action] |

## Versioning & rollback
- **This ruleset version:** [semver] — **Schema registry:** [link] — **Rollback to [v-1] owner:** [name]