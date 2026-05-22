# Scaling strategy — [Service]

> **Tiers* *—* *[`[S* *< *10k* *RPS* */* *M* *10–100k* */* *L* *100k* *+`]*  *—* *this* *page* *maps* *knobs* *per* *tier* *—* *load* *test* *in* *[`[perf* *harness* *repo* */* *tag` each* *quarter*]**

| Knob | S | M | L | Rationale / tradeoff |
| --- | --- | --- | --- | --- |
| *App* *replicas* *[`[min* */* *max* */* *HPA* *CPU`]*  | *[`[2* */* *10* */* *70%*`]*  | *[`[…`]*  | *[`[…`]*  | *Add* *before* *DB* *—* *watch* *[`[p95* *DB* *connection* *wait`]*  |
| *DB* *—* *scale-up* *vs* *read* *replicas* *vs* *shard*  | *vertical*  | *+replicas*  | *[`[Citus* *\|* *partition* *by* *tenant* *` for* *hot* *keys*  | *Shard* *migrations* *—* *[`[6* *+ *month* *project` —* *prefer* *queue* *offload* *first*  |
| *Cache* *—* *Redis* *cluster*  | *single*  | *3* *nodes*  | *N* *nodes* *with* *[`[replica* *per* *AZ` and* *[`[cluster* *mode`]  | *—* *memory* *bound* *—* *eviction* *policy* *[`[volatile* *lru`]  |

```text
# Autoscaling target signal (example)
If (ingress_p95 > [ms] for [5] min) AND (cpu < [80%]) then scale = dependency bound -> investigate DB, not more pods
```

## Cost
- *[`[$* *per* *1M* *requests` *at* *tier* *M* *—* *[`[spot* *for* *workers* *only* *with* *checkpointing* *in* *queue`]  *—* *see* *FinOps* *dashboard* *[`[link* */* *tag* *owner`]  *
