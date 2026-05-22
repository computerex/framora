# API error codes

> Canonical `[code]` and `[type]` values for [product] APIs.

## Error object
```json
{
  "error": {
    "type": "invalid_request|auth|forbidden|not_found|...",
    "code": "[[PRODUCT]_...]",
    "message": "Human-readable summary",
    "requestId": "req_[...]",
    "doc": "https://[docs]/errors/[[code]]"
  }
}
```

| HTTP | `type` | When |
| --- | --- | --- |
| 400 | `invalid_request` | JSON/schema/parameter issue |
| 401 | `auth` | Token missing/invalid |
| 403 | `forbidden` | Scope / policy block |
| 404 | `not_found` | Resource missing |
| 409 | `conflict` | Version / idempotency conflict |
| 429 | `rate_limited` | Throttle |
| 5xx | `[internal|upstream]` | Retry with backoff |

## Code catalog
| `code` | HTTP | Remediation |
| --- | --- | --- |
| `[PRODUCT]_INVALID_PARAM` | 400 | Fix `[field path]` — see `[details.param]` |
| `[PRODUCT]_STALE_VERSION` | 409 | Re-fetch, merge, and retry with `[If-Match]` |
| `[PRODUCT]_CAPACITY` | 503 | Exponential backoff; [status page] |

## Logging for support
- Always send `[requestId]` to support — [how to find in SDK exception]

## i18n
- **Message:** for humans — **rely** on `code` for programmatic branching
