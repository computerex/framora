# Batch operations

> Multiple actions in a **single** call with independent per-item success/failure.

## When to use
- **OK:** [ingest, bulk tag, fan-out updates] — [N items ≤ [limit]]
- **Avoid:** [long-running] — use [async job] instead

## Request
```http
POST [baseUrl]/[v1]/batch
Content-Type: application/json
```

```json
{ "items": [ { "op": "create|update|delete", "id": "...", "body": { } } ] }
```

| Rule | Value |
| --- | --- |
| **Max items** | [1000] (see `[BatchTooLarge]`) |
| **Order** | [order preserved] — [or undefined] (document) |
| **Transaction** | [all-or-nothing] vs [best-effort per item] (this API: [which]) |

## Response
- **Status:** [200/207/400] — [this API uses: [207 Multi-Status] with array]

```json
{ "items": [ { "index": 0, "status": 201, "result": { "id": "..." } },
             { "index": 1, "status": 400, "error": { "code": "..." } } ] }
```

## Client pattern
- **Partition** into safe chunk sizes; **retry** only idempotent [delete] + [idempotent-put]

## Limits
- **Payload** max [N MB] — prefer [parallel requests] for huge imports with [idempotency keys]
