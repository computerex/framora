# Webhooks

> HTTP callbacks for `[resource.*]` events in near real time.

## Registration
- **Create endpoint:** [console] → [URL], `[events[]]` — [HTTPS required]
- **Secret:** `[whsec_...]` per endpoint — [rotate without downtime]

## Delivery
- **Method:** `POST` with `[application/json]`
- **Headers:** `[X-[Product]-Signature: t=, v1=]`, `[X-Request-Id]`, `[X-Delivery-Attempt: n]`
- **Timeout:** [30s] to respond `2xx` — or [retries with backoff]

## Verifying signature
1. Read raw body (do **not** re-serialize JSON)
2. Build `[signed_payload] = t + '.' + body`
3. HMAC-SHA256 with secret → compare in **constant time**

```ts
// pseudocode
const ok = timingSafeEqual(expectedMac, hmac_sha256(secret, signed_payload));
```

## Payload
```json
{ "id": "evt_...", "type": "resource.updated", "created": 1710000000, "data": { "object": {} } }
```

## Retries
| Attempt | When | Backoff |
| --- | --- | --- |
| 1 | Non-2xx, timeout, TLS error | immediate |
| 2+ | same | [exponential, max delay] |
| [DLQ] | [after N] | [manual replay] |

## Idempotency
- Use `[id]` (event id) to deduplicate in your system
