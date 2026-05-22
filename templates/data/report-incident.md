# Incident report (IT / product) — [Org / product] — [Post-stabilization management summary, not the full IR]

## Incident ID and title
- **ID:** [INC-####] | **SEV:** [1-4] | **Window (UTC & local for customers if global):** [start–end] with **SLO/contract impact** and **#users/%rev at risk (estimate)** |
- **Service(s) / region(s) / versions affected:** [list] |

## Customer impact and communication (external-safe if shared)
- **What users saw, error rates, and **data** **at risk of loss/integrity;** if **none, state** **confidently** and **caveat** on **incomplete** **logs** |
- **Comms: status page updates (timestamps 1-liners), in-app, email, support macros** list |

## Timeline (UTC) and actions
- **T-120** — [event] by [actor/system] | **T+0** — [detect/alert] | **T+15**—[mitigate/rollback] with **DRI/role** in each |
- **Escalation path used (manager, exec, legal, PR) and** **gaps** in **runbook** |

## Root cause (5-whys) and contributing factors (no blame, fix system)
- **Primary cause:** [text] with **repro in staging**? [Y/N] and **defense-in-depth** **misses** (monitoring, change control) |
- **Code/config/deployment/data change links** in [VCS, CMDB, change ticket] |

## Corrective & preventive (CAPA register subset)
| Action | Type (C or P) | Owner | By date | Verif/Metric |
| --- | --- | --- | --- | --- |
| [Add SLO, add alert, canary, …] | C/P | [name] | [date] | [how we know fixed] |

## Finance / contracts / DPA touchpoints (if any credit or SLA claim)
- **RFO published to customers on** [date] and **credits/SLA** per [contract] with **AR/AP** ticket [ref] and **DRI** [RevOps/Finance] |
- **Lessons in blameless** **postmortem** in [confluence] version [n] and **Q&A** in next **RCA** **forum** on [date] |