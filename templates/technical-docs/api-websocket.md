# WebSocket API — [Channel name]

> Bidirectional events between clients and [service] at `[wss://host/path]`.

## Connection
- **URL:** `[wss://...]` — [which environments]
- **Subprotocols:** `[v1.framora]` | [fallback]
- **Auth:** [query token | first message] — **never** log credentials

## Handshake
1. Client opens socket with `[headers]` / `[auth]`
2. Server responds `[101 Switching]` and sends `[ready payload]`
3. Client subscribes with `[subscribe message]`

## Message envelope
```json
{ "v": 1, "type": "event|ack|error|ping", "id": "[correlation]", "ts": 1710000000, "payload": {} }
```

| Field | Description |
| --- | --- |
| `v` | Wire format version |
| `type` | Semantic category |
| `id` | Correlates with REST calls / UI actions |

## Heartbeats
- **Client → server:** `[ping every N s]` — server closes after `[M]` missed
- **Server → client:** [idle timeout policy]

## Backoff & reconnection
| Situation | Client behavior |
| --- | --- |
| Network drop | Exponential backoff [100ms, 2s cap], jitter [±20%] |
| 401 on auth | Refresh token, then reconnect |
| 429/503 from HTTP upgrade | Respect `Retry-After` |

## Security
- **Origin:** [allowed origins] — CORS/WS same-origin story
- **Payload size:** [max bytes] per message

## Example (browser)
```ts
const ws = new WebSocket(url, ["v1.framora"]);
ws.onmessage = (e) => { /* parse JSON, route by `type` */ };
```
