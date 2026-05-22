# Funnel (stage counts) (source data)

> Replace bracketed values. Column names and units must stay consistent in your import pipeline.
| Stage | Count | % of top | *Drop-off vs prior* | *Median time in stage* |
| --- | --: | --: | ---: | ---: |
| [Aware] | [0] | [100%] | — | [n days] |
| [Interest] | [0] | [0%] | [0%] | [n days] |
| [Decision] | [0] | [0%] | [0%] | [n days] |
| [Won/Converted] | [0] | [0%] | [0%] | [n days] |

## Cohorting & dedupe
- **Cohort =** [def] by **[date]** and **dedupe** by **[id]** | **re-entry** **allowed?** [Y/N] w/ cap [n] |
- **Data fix window** in **[+n days] ** **after** **stage** **exit** w/ **owner** in **[RevOps] ** and **GTM** and **MQL** **source** in **[ref]** |

## Forecast note
- **To-go** in **[Q]** w/ **stage** **prob** model **[v] ** in **[sheet] ** w/ **owner** in **[name] ** on **[date] ** w/ **±** in **[+/-$]** |