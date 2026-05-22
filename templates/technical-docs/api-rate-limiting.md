# Rate limiting

> Protects [product] and fair use across [tenants / regions].

## Default limits
| Dimension | Free | Pro | Enterprise |
| --- | --- | --- | --- |
| Requests / min | [N] | [M] | [custom] |
| Concurrent connections | [N] | [M] | [custom] |
| [Burst] | [window] | [window] | [custom] |

## How limits are applied
- **Algorithm:** [token bucket / sliding window] on `[key: tenantId | apiKey | ip]`
- **Scope:** [per endpoint] vs [global] — [weighted costs for heavy routes]

## Response when limited
- **Status:** `429 Too Many Requests`
- **Headers:**
  - `Retry-After: [seconds]`
  - `X-RateLimit-Limit: [N]` / `X-RateLimit-Remaining: [M]` / `X-RateLimit-Reset: [epoch]`

```http
HTTP/1.1 429 Too Many Requests
Retry-After: 3
X-RateLimit-Remaining: 0
```

## Client behavior
- **Backoff:** [exponential with jitter] — never busy-loop
- **Categorize:** [only retry 429, 5xx, and [list]]

## Quota increases
- **Process:** [support doc / form]
- **SLA:** [time to respond]

## Overage
- **Webhooks** may [pause | still deliver with delay] when over quota
