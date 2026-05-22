# Troubleshooting: Performance

> **SLO* *p95* *[`[API* *latency]`]* *<* *[X]* *ms* *—* *track* *burn* *rate* *[`[dashboard* *link]**

## If p95 is high
- **Is it us or an integration?** *Use* *[`[trace* *waterfall] —* *if* *external* *> [Y]%* *of* *span* *—* *open* *vendor* *ticket* *with* *[`[trace* *id]*
- *Database* *—* *top* *queries* *by* *[`[total* *time`]* *in* *[`[pg_stat]`] —* *missing* *index* *candidate* *[`[table.col]`]*

```text
# Example: compare regions
[region: latency table]
```

## Client slowness
- *Lighthouse* *profile* *—* *LCP* *—* *large* *bundle* *—* *enable* *[`[code* *split* *route]**

## Caching false hits
- *Check* *[`[Age]`] *and* *[`[Vary] **headers* *—* *stale* *HTML* *served* *from* *CDN* *—* *purge* *by* *tag* *[`[release]`]**

## Load tests
- *Use* *[`[k6* *script* *in* *repo/perf]`] —* *ramp* *per* *step* *—* *never* *against* *prod* *without* *approval* *[`[ticket* *ID`]* *
