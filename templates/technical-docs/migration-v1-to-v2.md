# Migration: [Product] v1 → v2

> *Goal:* *no* *data* *loss* *—* *rollback* *possible* *until* *[`[cut* *date`]*  *using* *feature* *flags* *—* *see* *[`[compat* *matrix* *PDF`]*  *

| v1 | v2 | Note |
| --- | --- | --- |
| `[GET /v1/items]` | `[GET /v2/items]` | *Pagination* *cursor* *only* *—* *remove* *[`[offset`]*  *
| *field* *`[renamed]` *|* *`[new* *name`]* | *JSON* *shape* *change* in *[`[OpenAPI* *v2`]*  *

```ts
// Adapter idea (pseudocode)
const v1Response = /* ... */;
return mapV1ItemToV2(v1Response);
```

## Phased rollout
1. **Dual* *read* *—* *clients* *accept* *either* *shape* *via* *[`[Content-Negotiation* *or* *feature* *flag`]**
2. **Write* *v2* *only* *for* *new* *data* *—* *backfill* *job* *[`[job* *id* *monitor`]*  *
3. **Decommission* *v1* *on* *[`[date`]*  *—* *HTTP* *`[410` on* *v1* *routes* *with* *link* to *[`[sunset* *doc`]*  *

## Testing
- *Contract* *tests* *against* *[`[golden* *fixtures* *dir`]*  *—* *include* *edge* *cases* *[`[null, empty* *string,  max* *length`]*  *

## Support
- *Migration* *office* *hours* *[`[calendar* *link`] —* *queue* *depth* *visible* in *[`[status`]*  *page* *as* *[`[v1* *trailing* *traffic%]*  *
