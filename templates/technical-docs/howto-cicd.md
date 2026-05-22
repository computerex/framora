# CI/CD for [Product]

> **VCS:** [GitHub/GitLab/ADO] — *trunk-based* *with* *short-lived* *feature* *branches*.

## Pipeline stages
| Stage | Triggers | Gates |
| --- | --- | --- |
| **CI** | *PR* *and* *main* push | *lint, unit, *[`[typecheck]`], *SAST* |
| **Build** | *main* *merge* | *SBOM* *+ *image* *sign* *[`[cosign]`]* |
| **Deploy: staging** | *auto* *from* *main* | *smoke* *+ *contract* *tests* |
| **Deploy: prod** | *tag* *or* *manual* *approval* | *change* *window* *+ *canary* |

```yaml
# .github/workflows/[example].yml  (excerpt)
on:
  push:
    branches: [ main ]
jobs:
  [job]:
    steps: [ checkout, test, build, deploy ]
```

## Secrets
- *Use* *[OIDC]* to cloud — *not* *long-lived* *keys* in *CI*

## Artifacts
- *Immutable* *tags* `[sha]` *only* in *registry* *—* *promote* *same* *digest* *across* *stages*
