# Sorting

> Control the order of items returned from `[GET /[resource]]`.

## Parameter
- **`[sort]`:** e.g. `[-createdAt,id]` — [minus prefix] means descending

## Default order
- If **omitted:** `[default: -updatedAt, id]` — [OLTP-friendly]

## Index-backed fields
| Field | Index | Notes |
| --- | --- | --- |
| `[createdAt]` | [yes] | [fast] |
| `[popularity]` | [partial] | [stale] — [recompute] |

## Stability
- **Tie-break** with unique `[id]` — [required for] cursor and export consistency

```ts
// Example
GET /[resources]?sort=-priority,title
```

## Locale / collation
- String sorts use [locale] — [document when locale differs from API region]

## Limitations
- **Computed fields** may [not] be sortable in [REST] — [use] `[GraphQL / export]` instead
