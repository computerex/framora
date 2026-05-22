# Treemap (hierarchy + size) (source data)

> Replace bracketed values. Column names and units must stay consistent in your import pipeline.
| Path (parent/child) | [Size metric] | [Color metric?] |
| --- | --: | --- |
| [Root / A] | [0] | [0] |
| [Root / A / A1] | [0] | [0] |
| [Root / B] | [0] | [0] |

## Tree rules
- **Path delimiter:** [ `/` ] with **no orphan** children; **sum-to-parent** within **[ε] **; **fix** divergences in ETL [ticket] |
- **ID scheme** stable across refreshes: **[natural key]** + **[version] ** for **SCD2** if needed |

## Color and publication
- **Diverging palette** if color encodes a signed delta; **mask** small-N cells in **[k-anon] ** |
- **Export:** SVG/PNG in **[folder]** with **DPIA** and **PII** review before **[external] ** deck |