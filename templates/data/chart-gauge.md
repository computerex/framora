# Gauge / single-KPI against target (source data)

> Replace bracketed values. Column names and units must stay consistent in your import pipeline.
| KPI | Value | Min | Max | Target | UoM | *As-of* |
| --- | --: | --: | --: | --: | --- | --- |
| [Utilization] | [0] | [0] | [100] | [85] | [%] | [date] |

## Scale & thresholds
- **RAG** bands: green **[a–b]**, yellow **[c–d]**, **else** **red** w/ **hysteresis** in **[+/-x]** in **HMI** spec **[link] ** w/ **accessibility** in **[contrast/VO] ** w/ **[WCAG] ** in **[§] ** |
- **Data pipeline delay** in **[+n min] ** and **alert** in **[#chan] ** if **stale** **>** **[n] ** w/ **SLO** in **[D] ** w/ **[error budget] ** |

## Narrative (what changed vs last read)
- **Delta vs** **[prior period] ** w/ **driver** in **[1 line] ** w/ **link** in **[tickets] ** w/ **[owner] ** w/ **ETA** w/ **$** w/ **customer** w/ **[refs] ** in **[NPS] ** if **[material] ** |