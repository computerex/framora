# KPI dashboard (definition sheet) — [Org / product] — [Use with BI; this doc is the contract]

## Purpose and audience
- **For:** [exec team / function leads] | **Refreshed:** [daily/weekly] | **RAG on:** [R/Y/G vs band on each card] |

## KPI deck (one row per card)
| ID | Name | Owner | Business question | Def (formula) | Source system | Latency | Band green/yellow/red |
| --- | --- | --- | --- | --- | --- | --- | --- |
| K01 | [name] | [name] | [question] | [formula] | [Snowflake/…] | [T+0] | [thresholds] |

## Drill path & grain
- **Default grain:** [org/day] — **Drill to:** [region, segment] where **RID** of user checked — **Cohort** definitions: [date anchor] |

## Incidents and overrides
- **When metric is frozen / backfilled / restated — log here:** [table with ticket id] |

## Retention and access (internal only)
- **Who can export / embed:** [roles] | **PII in underlying:** [N — aggregate only; exception process **link**] |
- **Changelog of definitions:** [semver or date-stamped] — **DRI to approve changes:** [data council role] by [quarter] |