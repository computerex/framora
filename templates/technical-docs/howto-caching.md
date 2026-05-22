# Add caching

> **Backends:** [Redis/Memcached/in-process] *—* *never* *cache* *per-user* *secrets* *without* *encryption* *+ *scope* in *key*.

## Key design
```text
[env]:[service]:[entity]:[id]:[projectionVersion]
```

- **TTL:** *stale* *while* *revalidate* *if* *acceptable* *—* *else* *hard* *TTL* *[s]*

## Invalidation
- *Event-driven* *on* *writes* *—* *version* *bump* *in* *DB* *for* *cheap* *miss* *detection* on *read*

```ts
if (row.cacheVersion > cachedVersion) { /* refresh */ }
```

## Thundering herd
- *Jitter* *TTL* *+ *singleflight* *on* *miss* *per* *key* *in* *app* *layer* — *or* *request* *coalescing* *in* *[proxy]*
