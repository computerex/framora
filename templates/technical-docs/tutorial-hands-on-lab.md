# Hands-on lab: [Scenario codename]

> **Lab time:** [90 min] **Environment:** [provisioned by vendor | bring-your-cloud] **Support:** *TA* in [room], *Slack* [ch]

## Scenario
- **You are:** [role] at **[company type]** *fixing* **[incident type]** *by* *adding* *guardrail* [G]
- **Start state:** *broken* [metric] and *open* *incident* `[INC-000]` *in* [toy] *system*

## Objectives
1. *Detect* [anomaly] *using* [tooling] — *prove* *with* *screenshot* of [query]
2. *Mitigate* *within* **[SLO minutes]** *without* *data* *loss* — *document* *rollbacks*
3. *Prevent* *recurrence* *with* *config* *change* + *alert*

## Artifacts
| Artifact | Path / location | Reviewer sign-off |
| --- | --- | --- |
| Runbook addendum | [repo path] | [SRE] |
| Dashboard | [Grafana/DD link] | [Oncall] |
| Post-incident *draft* | [template] | [EM] (optional) |

## Steps (hide until attempt)
*Students:* *do* *not* *open* *Hints* *until* *30* *min* *elapsed*.

1. *Orient* in [UI] — *map* *entities* to the architecture diagram.
2. *Reproduce* the issue with the safe load script `[lab/scripts/repro.mjs]`.
3. *Apply* fix *A* (config) then fix *B* (code) — in order: [dependency order].
4. *Validate* SLO recovery on dashboard panel `[panelId]`.

## Hints (after 30 min)
- **H1:** Check [queue depth] before scaling workers.
- **H2:** Rollback order is [B] then [A], not the reverse.
- **H3:** Search traces for `[requestId]` from step 2.

## Teardown
- Archive deliverables to `[s3://lab/...]` and reset the org: `[lab admin reset --org [id]]`.
