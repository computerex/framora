# Reference: Identifiers

> **Resource* *ids* *—* *opaque* *[`[uuid* *v4* */* *v7* */* *ksuid`]*  *—* *never* *encode* *semantics* *—* *sortable* *ids* *if* *list* *order* *matters* *—* *[`[v7* */* *ksuid`]**

## Slugs
- *Pattern* *[`[a* *-z* *0* *-9* *+ hyphens`]*, *1–* *[`[N`]*, *no* *leading* *or* *trailing* *hyphen*  |
- *Uniqueness* *scope* *—* *[`[global* *per* *tenants.id` vs* *[`[per* *parent* *folder` —* *API* *returns* *[`[409* *conflict`] on* *collision*  |

```text
# Example
/tenants/{tenantSlug}/items/{itemId}
# itemId: opaque, slug: human, both stable
```

## Case sensitivity
- *Path* *segments* *—* *case* *sensitive* *—* *query* *param* *names* *—* *lower* *as* in *[`[OpenAPI`] —* *query* *values* *for* *case-insensitive* *search* *—* *document* *in* *[`[search* *doc`]:**  *
