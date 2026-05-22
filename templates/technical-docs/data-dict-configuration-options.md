# Data dictionary — Configuration options

> **Files* *[`[config* */* *default.yaml`] +* *[`[config* */* *$ENV.yaml` *overlay*] —* *CLI* *flags* *override* *with* *[`[--set* *k=v`] if* *supported*]**

```yaml
# excerpt
[service]:
  [feature]:
    enabled: [true]
    [timeoutMs]: [5000]
```

| Key (dot path) | Type | Default | Hot reload | When to tune |
| --- | --- | --- | --- | --- |
| `[service.feature.enabled`]*  | *bool*  | *true*  | *yes*  | *Kill* *switch* *during* *incidents*  |
| *[`[service.timeouts`.…`]*  | *duration*  | *5s*  | *no*  | *If* *downstream* *p99* *>* *[`[X`] *—* *requires* *restart*  |
| *[`[log.level`]*  | *enum*  | *info*  | *yes*  | *`[debug` for* *short* *oncall* *debug* *—* *revert* *to* *info*  |

## Validation
- *JSON* *schema* *or* *[`[cue* */* *zod* */* *go* *struct* *tags* */* *…` at* *boot* *—* *fail* *fast* *if* *invalid*  |

## Security
- *Secret* *refs* *[`[secretRef* *:name`] not* *inline* *values* *—* *rotation* *without* *redeploy* *if* *using* *[`[CSI* *driver* */* *Vault* *agent`]**
