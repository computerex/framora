# Troubleshooting: Deployment

> *Deploy* *tool* *[`[helm* */ argo / ci]`] —* *see* *[`[release* *version`] *on* *pod* *label* *[`[app.version`]*  *—* *compare* *to* *[`[git* *tag`]*  *expected* *

## ImagePullBackOff
- *Registry* *auth* *—* *[`[imagePullSecret`] *in* *namespace* *—* *cross* *account* *ECR* *policy* *—* *tag* *exists* *?* *typos* *in* *`[values.yaml`]*  *

```text
# Quick checks
kubectl -n [ns] describe pod [name]
```

## CrashLoopBackOff
- *App* *exit* *code* *[`[1]` vs* *OOME* *—* *memory* *limit* *too* *low* *—* *fix* *[`[resources* *limits* *vs* *requests`] —* *readiness* *probe* *fails* *when* *DB* *down* *—* *split* *liveness* / *readiness* *

## Config drift
- *`[helm* *diff* *or* *kubectl* *diff`] —* *if* *manual* *kubectl* *edits* *—* *freeze* *—* *move* *to* *gitops* *in* *[`[Qn`]*  *

## Rollback did not work
- *DB* *migration* *irreversible* *—* *forward* *fix* *required* *—* *feature* *flag* *`[kill* *switch* *new* *code`] —* *see* *[`[release* *policy* *doc`]**
