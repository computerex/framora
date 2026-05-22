# Spec: API version sunset

> **Version* *[`[v1`] *sunset* *date* *[`[YYYY* *-MM* *-DD`] —* *replacement* *[`[v2`] *as* in *[`[migration* *doc`]:**  *

```text
# Timeline (example)
- T-6m: announce in changelog + email
- T-3m: add `[Deprecation: true, Sunset: date]` headers
- T-0: 410/404 with [doc link]
```

| Signal | When |
| --- | --- |
| *Traffic* *v1*  | *[`[<`]* *0.1%* *rolling* *7d* *before* *cut*  |
| *Support* *tickets*  | *[`[zero* *P1* *open* *for* *v1* *migration` for* *2* *weeks*  |

- *Exception* *process* *—* *[`[if* *large* *customer* *needs* *extension* */* *private* *offer* */* *…`] —* *not* *default*]**

## Verify post-cut
- *[`[synthetic* *probes* *still* *hitting* *v1`]*  *==* *0* *in* *[`[24h* *dashboard* */* *alert`]**
