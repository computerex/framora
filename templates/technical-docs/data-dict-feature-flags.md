# Data dictionary — Feature flags

> **System* *[`[LaunchDarkly* */* *config* *cat* */* *homegrown`] —* *naming* *`[ff.`] *or* *[`[product* *area]_[kebab]`]**

```text
# Flag key
ff.checkout.shipping_v2
```

| Key | Type | Default | Environments | Owner team |
| --- | --- | --- | --- | --- |
| `[ff.payments* *.…`]*  | *bool*  | *false*  | *stage* *on* *—* *prod* *%* *ramp*  | *[`[payments`]*  |
| *[`[ff.ui.*.beta`]*  | *bool*  | *false*  | *all* *off*  | *[`[fe`]*  |
| *[`[ff.api.new_limiter`]*  | *int*  | *1000*  | *tunable* *per* *cell*  | *[`[sre`]*  |

## Targeting
- *Rules* *—* *[`[user* *email* *domain* */* *tenant* *id* *in* *list* */* *random* *%`] —* *order* *matters* *—* *first* *match* *wins* *in* *[`[provider* *X* *semantics* */* *see* *`[docs* *to* *…`]*]**

## Kill switch runbook
- *If* *incident* *—* *set* *[`[ff* *.*.enabled` →* *false* *globally* *—* *verify* *metric* *[`[error* *rate* *drops* */* *queue* *depth* *stabilize` in* *panel* *[`[link`] —* *link* *to* *postmortem*  |

## Deprecation
- *Remove* *flag* *code* *after* *[`[2* *weeks* *at* *100%* *`+ *1* *release* *buffer*] —* *track* *in* *tech* *debt* *[`[ticket* *query* */* *label* *:flag* *cleanup`]*  *
