# Tutorial — Advanced: [Hardening / scale path]

> For engineers comfortable with [Product APIs], [IaC], and **[production-like failures]**. **Time:** [2–4 h].

## Threat model (mini)
- **Asset:** [data X in env Y] — **adversary:** [insider, internet, bad dependency]
- **Controls you will implement:** [mTLS, key rotation, least privilege, circuit breaker]

## Lab topology
- **Accounts:** [dev/stage] — *same* *shape* as prod with **[smaller] quotas**
- **Dependencies:** [A], [B] — *versions pinned* in `[lockfile]`

## Scenarios
### 1) Surge (load)
- **Goal:** sustain **[RPS]** with p95 **[ms]** — *steps:* [k6/vegeta] script at `[path]` — *tune* [pool size, cache]

### 2) Degraded dependency
- **Chaos:** [block egress to] **[partner]** — *observe* **[fallback / DLQ / partial]** — *roll forward* after **[timeout policy]**

### 3) Key compromise (tabletop)
- **Rotate** `[API key|JWT signing key]` — *prove* **old** [requests fail] and **new** succeed — *time to safe:* **[SLO]**

## Artifacts to submit (internal)
- [Design note] — 1-pager: decisions + tradeoffs
- **Dashboard** links: [panel ids]
- **Runbook** update PR: [link or “N/A in sandbox”]

## Grading (coarse)
- **A:** All scenarios green + clear observability
- **B:** Works with acceptable tech debt *documented*
- **Rework:** *silent* data loss, *missing* [audit] trail

## Read next
- [How-to: set up monitoring] — [Architecture: scaling strategy]
