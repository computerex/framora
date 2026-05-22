# Pagination

> How to list large collections from [API] without timing out or skipping rows.

## Supported styles
| Style | Use when | Drawbacks |
| --- | --- | --- |
| **Cursor** | [dynamic, append-heavy feeds] | [cannot jump to page N] |
| **Offset** | [static sort, small tables] | [slower for deep pages] |
| **Keyset** | [very large ordered tables] | [requires order columns] |

## Request parameters
- **Limit:** `[limit]=[default 20, max 100]` — [document server caps]
- **Cursor:** `[cursor]=[opaque]` from previous response
- **Sort:** `[order]=created_at:desc` — [stable tie-breaker: id]

## Response shape
```json
{
  "data": [ { "id": "[1]" } ],
  "pageInfo": {
    "nextCursor": "eyJ...",
    "hasNextPage": true
  }
}
```

## Client loop
```ts
let cursor: string | undefined;
do {
  const res = await client.list({ cursor, limit: 100 });
  for (const row of res.data) { /* process */ }
  cursor = res.pageInfo.hasNextPage ? res.pageInfo.nextCursor : undefined;
} while (cursor);
```

## Consistency
- **Mid-list inserts:** [may appear | not appear] during iteration — for strong guarantees use [keyset on updated_at+id]
- **Total count:** [expensive; optional] — `[includeTotal: true]`

## Performance tips
- Prefer **projection** and **field masks** to reduce bytes per page
