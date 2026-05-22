# Component architecture

> *Notation* *C4* *level* *2* *—* *code* *modules* *may* *map* *1:1* *or* *N:1* *to* *containers* *in* *[`[C4* *L3* *in* *k8s* *map`]*  *

```mermaid
flowchart LR
  subgraph [Bounded context A]
    A1[Module: auth] -->|HTTP| A2[Module: org]
  end
  subgraph [Bounded context B]
    B1[Module: search]
  end
  A2 -->|gRPC| B1
```

| Component | Public API (stable) | Consumes (allowed) | Must not import |
| --- | --- | --- | --- |
| `[package/auth]` | `[UserSession, Policy]` | *[`[org/...]`]*, *shared/* | *`[package/payments* *directly`]*  |
| *[`[search/indexer`]*  | *[`[Index* *events`]*  | *[`[bus* *subscription`]*, *config* *—* *[`[no* *SQL* *from* *HTTP* *handlers`]*  |

## Versioning
- *Modules* *publish* * semver* *—* *deprecated* *API* *[warning* *+ *ADRs* *link]**

## Test doubles
- *In* *CI* *—* *[`[wiremock* */* *testcontainers`] *per* *component* *boundary* *—* *forbid* *[`[sleep* *in* *tests* *>`0ms* *except* *[`[retry* *helper`]*  *
