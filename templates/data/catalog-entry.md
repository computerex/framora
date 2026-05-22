# Data catalog entry — [Entity / business object] — v[ver]

| Field | Value |
| --- | --- |
| **Business name** | [name] |
| **Technical (table/topic/api)** | [db.schema.tbl, …] |
| **Owner (B/T)** | [names, emails] |
| **Classification** | [PII, fin, health, public] with **DPIA/PIA** [id] |

## Purpose, retention, and lawful basis
- **Intended / prohibited uses** (ML training, resale, re-identification) | **Lawful basis** (GDPR art.6 / contract) | **retention** event + period per **[policy §]** |
- **RTO/RPO** and **BCP/DR** region(s): [list] with **RPO =** [n h] and **RTO =** [n h] |

## Consumers, lineage, and DQ
- **Active consumers:** [list of apps/reports/ML] with **RACI** for new consumers |
- **Key DQ rules** and **target score** with **on-call** for breaks [rotation link] |

## Versioning and review
- **Changelog (semver)**: [1.0.0] — [date] — [note] | **Next triennial** catalog review: [Q] with **DRI** [name] |