# Language/runtime migration: [older] → [newer]

> *Example:* *Python* *3.8* *→* *3.12* *or* *Node* *18* *→* *20* *—* *binary* *extensions* *must* *rebuild* *—* *native* *ABI* *check* in *CI* *matrix* *[`[glibc* *vs* *musl`]*  *

## Inventory native deps
- *List* *`[wheel* */* *node* *prebuilds* */* *JNI` —* *verify* *support* *for* *target* *runtime* *on* *[`[ARM* *+ x86* *CI`]*  *

```text
# Version-specific breaks
- [stdlib removals]
- [default encoding changes]
- [new warnings as errors in CI?]
```

## Strangler
- *Extract* *[`[hot* *path* *as* *a* *gRPC* *microservice`] *in* *new* *lang* *—* *treat* *as* *black* *box* *with* *contract* *tests* *—* *delete* *old* *code* *when* *[`[traffic* *100%* *+ 2* *weeks* *stable`]*  *

## Rollout
- *Canary* *per* *[`[cluster* *or* *cell`] —* *auto* *rollback* *on* *[`[error* *rate* *>` SLO* —* *save* *JIT* *profiles* *if* *[`[warmup* *sensitive`]*  *

## Learning plan
- *Workshop* *recordings* *—* *lint* *with* *[`[ruff* *\|* *eslint* *with* *new* *plugin`]*  *in* *[`[CI`]*  *on* *first* *PR* *touching* *each* *module* *—* *pair* *for* *[`[security* *crypto* *changes`]*  *
