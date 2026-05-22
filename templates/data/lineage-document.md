# Data lineage — [Data product or column set]

```mermaid
flowchart LR
S[Source: [sys]] --> T[Transform [job id]]
T --> M[(Mart [tbl])]
M --> C[Consumer: [app/BI]]
```

## Field-level (attach spreadsheet id)
| Column | SCD | PK/FK | Transform | PII? |
| --- | --- | --- | --- | --- |
| [col1] | [0/1/2] | [yes/no] | [expr] | [Y/N] |

## PII, cross-border, and sub-processors
- **DPA, SCC, BAA, ROPA row** and **transfers** with **documentation link** in **[GRC tool]** |
- **CDC / watermark / lag (SLA):** [n min] with **DRI** [name] for **on-call** |

## Test & evidence of lineage
- **Last ETL test:** [date] with **reconciliation** to **[sum]** in **[n]** tolerance |