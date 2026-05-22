# On-call handoff: shift and weekly

## Shift handoff (end of on-call block)
- **Oncall A → B, window:** [TZ], **handover time:** [date/time].
- **Open incidents / sev-? / links:** [list or “none”].
- **Ongoing changes / risk:** [canary, migration, feature flags].
- **Key dashboards / runbooks to watch:** [links].
- **Notable log patterns / “weird but stable” things:** [bullets].

## Weekly on-call report (asynchronous, optional for small teams)
- **P1/P2 count and themes:** [table or list]
- **Action items to reduce toil / alerts:** [owner + due].
- **Customer-impacting events:** *even if not sev* — *brief* [1-liners with links].

## Contact tree
| Role | Name / alias | How to page |
| --- | --- | --- |
| Primary on-call | [alias] | [phone / PagerDuty] |
| [Dependency owner] | [alias] | [Slack / phone] |