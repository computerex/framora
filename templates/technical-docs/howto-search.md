# Implement search

> **Engine:** [OpenSearch/Elastic/Typesense/Meili] *cluster* *in* *`[vpc]`**.

## Ingest
- *CDC* *from* *[DB]* *→* *queue* *→* *bulk* *index* *with* *`[version]` *field* for *ordering*
- *Language* *analyzer* *per* *`[locale]` *field*

## Query
- **Hybrid** *BM25* *+* *[vector?]* *—* *filters* *as* *`[term]` *queries* *on* *keyword* *fields* on *`[status]`*
- *Pagination* *cursor* *only* *—* *avoid* *deep* *offset* on *large* *indexes*

```json
{ "query": { "bool": { "must": [...], "filter": [{ "term": { "orgId": "..." } }] } } }
```

## Ops
- *Forcemerge* *policy* *—* *snapshot* *to* *S3* *before* *major* *mapping* *change*
- *SLO* *on* *p95* *query* *latency* *[ms]* *at* *`[QPS]`*
