# Integration: Error handling

> **Idempotency* *key* *on* *every* *outbound* *mutation* *—* *[`[dedupe* *table* */* *natural* *keys`] as* *documented* in *each* *connector*]**

| Class | Example | Backoff | DLQ? |
| --- | --- | --- | --- |
| *4xx* *except* *429*  | *Bad* *payload*  | *no*  | *yes* *—* *fix*  |
| *429*  | *Throttled*  | *exponential* *+` *Retry-After*  | *after* *max*  |
| *5xx*  | *Partner* *down*  | *jitter*  | *yes*  |

```ts
if (e instanceof [PartnerError] && e.retryable) { await sleep(backoff(n)); return retry(); }
```

- *Correlate* *with* *[`[partner* *incident* *id* */* *request* *id* */* *our* *trace`] in* *tickets*  |
