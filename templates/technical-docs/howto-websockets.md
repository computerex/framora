# Use WebSockets in production

> **Path:** *Upgrade* *to* *[`[wss://…]`]* *behind* *[`[ALB/ingress]`]* *with* *optional* *sticky* *sessions*.

## Auth
- *Issue* *short* *lived* *ticket* *over* *HTTPS* *first* *—* *validate* *in* *first* *WS* *frame* *or* *subproto*

```text
# Forbidden
Query string secrets in logs, unbounded room joins
```

## Scale
- **Pub/sub** *bus* for *multi-node* *fan-out* — *partition* *by* *`[roomId] mod N`*
- **Backpressure:** *drop* *to* *sampled* *updates* *if* *client* *read* *buffer* *full* — *log* *metric* *[dropped]*
