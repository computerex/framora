# Monitoring strategies: RED/USE, SLIs, and SLOs

> Combine **workload** metrics, **serving** health, and **SLOs** in one program of record. Replace bracketed fields for your org.

## Part A — RED/USE and golden signals (operational)
- **R**ate, **E**rrors, **D**uration for each critical API or job queue: [name]
- **USE** for resources: **U**tilization, **S**aturation, **E**rrors: [per resource]
- **Dashboard links:** [Grafana / Datadog / ...]

| Signal | What “good” looks like (example) |
| --- | --- |
| p95 latency for `/api/orders` | [X ms] |
| Error rate (5xx) | [< Y% for Z minutes] |

## Part B — SLI/SLO program (user-facing)
- **SLO object:** e.g. “[99.9%] of [reads] return success in < [N ms] per calendar month]”
- **Error budget policy:** at [50%] remaining → [triage feature work]; at [0%] → [freeze, incident review]
- **SLO report cadence:** [monthly; owner: team X]

## On-call tie-in
- Page on **SLO burn** and **SRE-defined** “customer pain” only if [conditions].
- Runbook link for SLO policy exceptions: [link]