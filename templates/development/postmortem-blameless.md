# Blameless postmortem (sev-1 and sev-2 pattern)

> Fill **one** of the two “severity” blocks below, or use both in the same document with clear headers.

## Metadata
- **Incident / ticket:** [P1-... / INC-...]
- **Time range (UTC):** [start] – [end]
- **Severity used:** [Sev-1: broad customer or revenue impact] **or** [Sev-2: limited blast radius, workaround].

## Summary (5 sentences max)
- **What customers saw** — [user-visible symptoms].
- **What broke** in **technical** terms — [1–2 sentences].
- **How we fixed / mitigated** — [stabilization, rollback, or flag].

## Timeline (UTC) — *append rows as you learn*
| Time (UTC) | Event |
| --- | --- |
| [T0] | [Symptom detected / page fired] |
| [T1] | [Action / discovery] |
| [T2] | [Service restored] |

## Root cause (5 whys, no blame to individuals — focus on systems)
- **Root cause category:** [config, deploy, capacity, code bug, dependency, human process gap]
- **Why it was possible:** [missed guardrail, lack of test, runbook gap]

## Follow-up actions (JIRA / tickets, owners, due dates)
| Action | Type | Owner | Due |
| --- | --- | --- | --- |
| [Prevent recurrence] | [code / process / runbook] | [name] | [date] |

## What went well / what to improve in response
- **Went well:** [coordination, rollback speed, comms].
- **Improve next time:** [tooling, access, on-call runbook].