# Troubleshooting: Mobile

> **Builds* *[`[iOS* *M+,* *Android* *API* *L+`] —* *min* *OS* *noted* *in* *store* *listing* *

## Push not received
- *FCM* *vs* *APNs* *tokens* *—* *expired* *device* *token* *—* *user* *disabled* *permission* *—* *check* *[`[delivery* *receipt* *API* *status`] —* *payload* *too* *large* *for* *[`[APNs* *4KB`]*  *

```text
# Token lifecycle
[register, refresh, invalidate on logout, multi-device]
```

## Background sync fails
- *iOS* *BGTask* *scheduling* *—* *app* *must* *call* *[`[setMinimumBackgroundFetch`] —* *Android* *Doze* *—* *exempt* *via* *[`[user* *action* *only`] —* *document* *reliable* *sync* *when* *foreground* *

## Deep link does not open app
- *Android* *App* *Links* *[`[asset* *links* *JSON`] *host* *mismatch* *—* *iOS* *universal* *links* *[`[AASA* *path`] *include* *[`[trailing* *slash* *rule`]*  *

## Crash on startup
- *Symbolicated* *stack* *in* *[`[Sentry* */ Firebase`] —* *if* *native* *lib* *ABI* *mismatch* *in* *[`[bundle* *split* *or* *M1* *sim* *x86`]*  *—* *fix* *in* *[`[hotfix* *H.N`]**
