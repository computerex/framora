# Benchmark: Cost per request (model)

> **Inputs* *—* *[`[monthly* *bill* *by* *tag`] +* *RPS* *from* *metrics* *—* *not* *for* *GAAP* *—* *±* *[`[N`]%* *uncertainty*]**

| Line item | Monthly $ | % of total for [service] | Driver |
| --- | --- | --- | --- |
| *Compute*  | *[`[$…`]*  | *x%*  | *RPS* *+` *CPU*  |
| *Egress*  | *$…*  | *y%*  | *Bytes*  |

```text
# Simple model
cost_per_request ≈ (service_monthly_cost) / (successful_requests in month)
```

- *Excludes* *sunk* *R&D* *—* *separate* *line*  |

## Sensitivity
- *If* *RPS* *doubles* *—* *[`[which* *component* *hits* *first* */* *autoscale* *lag`] —* *see* *[`[capacity* *plan* *sheet`]**
