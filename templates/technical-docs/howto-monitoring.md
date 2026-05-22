# Configure monitoring

> **Stack:** [Datadog / Grafana+Prometheus / Cloud-native] for **[service]**.

## Golden signals
- **Rate / Errors / Duration / Saturation** — *exemplars* *for* *high* *cardinality* *sampling* on **[endpoint]**
- *Dashboard* **UIDs:** **[links]** — *owner* *team* *[oncall]*

```text
# Example SLI query (adapt)
histogram_quantile(0.95, sum(rate([metric]_seconds_bucket[5m])) by (le, route))
```

## SLOs
| Objective | Target | Error budget / month |
| --- | --- | --- |
| API availability | [99.9%] | [43m] |
| p95 latency | [< [ms]] | *[burn* *rate* *alerts]* |

## Alerting
- *Route* *by* *severity* — *P1* *pages* *only* *[symptoms]* *not* *causes* *unless* *[rare]*
- *Runbook* *link* *required* *in* *every* *page*

## Synthetic checks
- *From* *multiple* *regions* *—* *auth* *via* *dedicated* *test* *user* *with* *least* *scope*
