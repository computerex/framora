# Alerting playbooks: noise, severity, and ownership

## Part A — Reduce alert noise (tune before you add pages)
- **Aggregation:** [group by service + region, not by pod unless necessary].
- **Thresholds from SLO/SLA:** not from historical max + 5%.
- **Hysteresis / duration:** alert only if [condition] for [N] minutes (example).
- **Triage dashboard:** [link] for “top noisy alerts this week”

| Symptom | Root cause to check | Action |
| --- | --- | --- |
| Paging on CPU spikes that recover | [bad threshold / missing baseline] | [raise N or use anomaly] |

## Part B — Severity routing and escalation
- **P0 (wake people):** [customer-facing outage, data loss, security] — *page both* [Oncall + N]
- **P1 (business hours+):** [major degradation, workaround exists]
- **P2 (next day):** [non-critical, tech debt, noisy metric]
- **Escalation after [N] min without ack:** [manager, secondary on-call]
- **Staged communication:** [status page, internal #incident channel, legal if PII] — *links to templates*

## After-action
- Every paged alert should be **tunable, tunable, or wrong**: *document in* [tuning runbook].