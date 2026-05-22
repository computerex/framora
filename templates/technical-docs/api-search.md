# Search API

> Full-text and structured search over [entities] with [relevance] tuning.

## Endpoint
- **`[GET /v1/search]`:** `?q=...&type=...&[filters...]`
- **Auth:** [same as core API] — [scoped results]

## Query language
- **Phrases:** `"exact match"` — [boost]
- **Boolean:** `[term1 AND term2]` / `[OR]` / `[-exclude]` — [parser notes]
- **Field filters:** `[field:value]` in `[q]` or as dedicated params (document)

## Result item
```json
{ "id": "...", "type": "document", "title": "...", "snippet": "... [hit] ...", "score": 12.3 }
```

| Field | Notes |
| --- | --- |
| `snippet` | HTML-escaped, may contain `<em>` hits |
| `[facets]` | Only when `[includeFacets=true]` |

## Pagination
- **`[cursor]`** — [same contract as [pagination doc]]

## Relevance
- **Boosts:** [recency, popularity, your profile fields]
- **Language:** [analyzer for `[locale]`]

## Rate limits
- Heavier than CRUD — [separate] bucket [N rpm]

## Tuning
- For large exports use **[async report]** instead of paged search
