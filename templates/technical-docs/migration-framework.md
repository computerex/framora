# Framework migration: [X major] → [Y major]

> *Risk:* *[`[breaking* *router* *API* */* *DI* *container* *changes* */* *auth* *middleware`]*  *—* *allocate* *[`[S]* *eng-weeks* *+ *QA`]*  *—* *pin* *deps* in *[`[renovate* *pr`]*  *

## Inventory
- *Search* *for* *deprecated* *imports* *[`[grep* *pattern* *list* *in* *repo* */* *eslint* *rule* *ids* */* *compiler* *warnings* *\]**

```bash
# example
[tool] [codemod] [path] --[flags]
```

## Migration steps
1. **Dep* *bump* *in* *[`[feature* *branch`] —* *CI* *with* *[`[matrix* *node* *LTS`]*  *only* *on* *patch* *first**
2. **Fix* *type* *errors* *—* *enable* *[`[strict* *mode* *incremental`]*  *file* *by* *file* *if* *needed* *—* *document* *`[// @allow-legacy* *exception`]*  *rare* *sparingly* *
3. **Replace* *[`[removed* *hook* *API`] *with* *[`[new* *pattern* *link* *to* *guide`]*  *

## Tests
- *Unit* *+* *integration* *+* *[`[e2e* *in* *CI* *against* *docker* *compose* *or* *k8s* *smoke`]*  *—* *flaky* *rate* *must* *stay* *<* *[`[0.1%* *per* *suite`]*  *

## Rollout
- *Feature* *flag* *`[framework* *rollout%]* *in* *[`[edge* *config* */* *LaunchDarkly`]*  *—* *rollback* *is* *flag* *off* *if* *no* *schema* *migration* *occurred* *
