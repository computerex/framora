# Heatmap (matrix) (source data)

> Replace bracketed values. Column names and units must stay consistent in your import pipeline.
|  | [Col1] | [Col2] | [Col3] |
| --- | --: | --: | --: |
| [Row1] | [0.0-1.0] | [0.0-1.0] | [0.0-1.0] |
| [Row2] | [0.0-1.0] | [0.0-1.0] | [0.0-1.0] |

## Color scale and normalization
- **Scale:** [linear/log] from **[min] to** **[max]**, colorbrewer **[scheme]**; **row/column** **cluster** **order =** [hclust** **linkage**] or **original** |
- **Z-score** per row/col if [yesNo] to compare **magnitudes**; **NAs** = **[treatment]** |

## Source matrix file
- **Tidy CSV in** [path] with **melt** key **[id]** and **value**; **DPIA** and **[mask]** for **<[n] ** in **any** **cell** for **[geo]** **publishing** in **[deck]** |