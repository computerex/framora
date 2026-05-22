# Benchmark: API latency

> **Workload* *[`[k6* *script* *in* *repo* */* *...`]*  *—* *environment* *[`[staging* *isolated* *…`]*]**

## Setup
- *Region* *pairing* *—* *client* *in* *[`[same* *region* *as* *API* */* *cross-region* *for* *RUM* *comparison`]*  |
- *Auth* *—* *[`[service* *account* *token* */* *no* *auth* *for* *public* *path* */* *…`]*  |
- *Fixed* *RPS* *ramp* *—* *[`[0* *->* *N* *over* *T* *min`] —* *sustained* *[`[M* *min* *at* *N`]**

| Metric | Value (run [id]) | Notes |
| --- | --- | --- |
| *p50*  | *[`[X`]* *ms*  | *per* *route* *A*  |
| *p95*  | *[`[Y`]* *ms*  | *SLO* *[`[S`]*  |
| *error* *%*  | *[`[0.0%]* *<*`* *0.1%*  | *4xx* *excluded*  |

```text
# Example output line (k6)
http_req_duration....: avg=[...] p(95)=[Y]
```

## Caveats
- *Cold* *start* *—* *first* *[`[N`]* *req* *excluded* *or* *noted* *—* *container* *scale* *from* *zero* *—* *[`[separate* *benchmark`]**

## Reproduce
- *[`[docker* *compose* *up* *perf* *&&* *./scripts/bench* *…` —* *hash* *images* *[`[sha* *in* *lock`]**
