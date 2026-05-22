# Runbook: Rollback (`rollback`)

## When to use
- [Trigger: deploy, on-call, maintenance window, …]
- **Service / stack:** [names] — *blast radius* [user-facing / internal-only]

## Preconditions
- [ ] Approvals: [CAB, manager, SRE, …]
- [ ] Backups or snapshots: [id / timestamp]
- [ ] Maintenance banner / comms: [link or n/a]

## Procedure (ordered; edit for your org)
1. [Step] — *command* `...` — *expected output* [snippet]
2. [Step] — *verify metric* [name] in [dashboard]
3. [Step] — *notify* [stakeholder channel]

## Rollback / if something goes wrong
- [Immediate mitigation: scale down, feature flag, drain traffic, …]
- [Re-run previous release job / restore snapshot id …]

## Post-change checks
- SLO: [names] in range for [N min]
- **Synthetic:** [url or job] **green**
- Error rate / 5xx: [threshold]

## References & owners
- [Links to SOP, other runbooks, service catalog]
- **On-call & escalation:** [policy link]