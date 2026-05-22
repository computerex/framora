# Histogram (bins) (source data)

> Replace bracketed values. Column names and units must stay consistent in your import pipeline.
| Bin (range) | Count | % of n | Cumulative % |
| --- | --: | --: | --: |
| [0 – a) | [n] | [0%] | [0%] |
| [a – b) | [n] | [0%] | [0%] |

## Parameters
- **n =** [N] | **bin width =** [w] or Sturges / Freedman–Diaconis; **excluded outliers:** [count] with rule: [IQR, cap, or domain] |
- **If weighted:** weight column = [w] and **design effect** (if complex survey) = [n] (document method) |

## Use
- **Primary audience for skew / tail interpretation:** [role] with **P95 / P99** in caption if service-level related |
- **Reproducibility:** seed = [n], code notebook [link], raw export file [name] in [object store] |