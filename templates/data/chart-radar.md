# Radar (multi-axis, same unit or normalized) (source data)

> Replace bracketed values. Column names and units must stay consistent in your import pipeline.
| Axis | [Series A] | [Series B] | [Weight] |
| --- | --: | --: | --: |
| [Speed] | [0-10] | [0-10] | [0.2] |
| [Quality] | [0-10] | [0-10] | [0.2] |
| [Cost] (invert) | [0-10] | [0-10] | [0.2] |

## Normalization
- **Higher = better** on all axes, except **[Cost]** (invert: use `10 - raw` in plot data with note) |
- **Min–max scale per series** (optional) if units differ: document formula in column `[norm_rule]` in source CSV |

## Display & accessibility
- **Provide a data table** next to the chart; **contrast** meets **[WCAG]**; **not color alone** for categories |
- **N =** [n] | **Cohort** [def] | **Analyst** [name] | **As-of** [date] |