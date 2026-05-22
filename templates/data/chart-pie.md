# Pie / donut · part-to-whole (source data)

> Replace bracketed values. Column names and units must stay consistent in your import pipeline.
| [Slice] | [Value] | [Percent of total] | [Notes] |
| --- | --: | --: | --- |
| [A] | [0] | [0%] | […] |
| [B] | [0] | [0%] | […] |
| *Other* | [0] | [0%] | [residual] |

## Data quality
- **Total check:** A+B+Other = [100%] within rounding — **Exclusions (double count):** [list] |
- **Label for *Other* if >[n%]:** break out sub-slices; **sensitivity to bucketing** [note] |

## Context for readers
- **Cohort and filters:** [who is in] — **ETL version:** [n] and **as-of** [timestamp] in [TZ] with **refresh** [daily/weekly] |