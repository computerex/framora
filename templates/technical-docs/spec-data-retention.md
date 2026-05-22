# Spec: Data retention

> **Jurisdiction* *[`[list`] —* *DPA* *ref* *[`[id`] —* *DPO* *contact* in *[`[internal* *confluence* */* *…`]**

```text
# Data classes (excerpt)
- Account metadata
- User-generated content
- Logs & traces
- Backups
```

| Class | Retention (default) | Deletion on account close | Backups | Legal hold |
| --- | --- | --- | --- | --- |
| *Metadata*  | *[`[N]* *y`]*  | *[`[T]* *+30* *d`] hard* *delete*  | *rolling* *[`[7* *d/30* *d* */* *yr`]*  | *extends*  |
| *Content*  | *until* *user* *delete*  | *[`[T]* *+7* *d`] soft* *then* *purge*  | *same*  | *blocks*  |

- *Anonymization* *as* *alternative* *to* *delete* *where* *[`[legal* *permits* */* *stats* *need* *trend* */* *…`]*  |

## Erasure request SLA
- *[`[30* *days* *max* */* *jurisdiction* *override`] —* *export* *first* *—* *[`[right* *to* *portability* */* *see* *FAQ`]**
