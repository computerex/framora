# Technical FAQ

> **Stack:** [languages, frameworks, OS] — *supported* *to* *version* *N* *only* as *listed*.

## Protocols and APIs
- **We support** `[REST, GraphQL, gRPC: …]` — *legacy* *SOAP* *: [no]*
- **Webhooks** *delivery* *semantics* *—* *at-least-once* *—* *dedup* *by* *`[event id]`**

## Limits
| Item | Free | Enterprise |
| --- | --- | --- |
| API req/min | [N] | [M] or *custom* |
| Max [resource] size | [MB] | [GB] |
| [Concurrent jobs] | [J] | [J'] |

```text
# Example hard limit
Request body: [4 MB] except [upload session]
```

## Compatibility
- **Browser** [min versions] — *no* *IE* *support* *as* *of* *[date]**
- **Mobile** *apps* *—* *parity* *with* *web* *for* *[list]* *—* *known* *gaps* *in* *[AR feature]*

## Self-hosting / private cloud
- *Supported* *images* *—* *minimum* *k8s* *—* *required* *egress* *allowlist* — *[if not offered, say "not available"]**
