# Filtering (list endpoints)

> Narrow `[GET /[resources]]` with composable field filters.

## Query parameters
- **`[filter]`:** [expression] — **or** flat params `[field_op]=[value]` (this API: [style])

## Operators
| Op | Example | SQL-like meaning |
| --- | --- | --- |
| `eq` | `status_eq=active` | `=` |
| `ne` | `status_ne=archived` | `<>` |
| `in` | `id_in=[a,b]` | `IN` — [array encoding: repeated param / JSON] |
| `[gt, gte, lt, lte]` | `[created_gte=]` | Range on [date/number] |
| `[contains]` | `[name_contains=]` | [substring, case-] — [COLLATION]

## AND / OR
- **Default:** [all filters are AND] — [OR: use `$or: [...]` in [filter] JSON] (document your grammar)

```text
# Example: JSON filter
filter={"$and":[{"status":{"$eq":"active"}},{"size":{"$gte":1000}}]}
```

## Sorting
- `[sort]=[-]field` — [multiple: comma, repeated param, etc.]
- **Stable** sort required for cursor pagination: add `[id]` as last key

## Encoding
- **URL encoding:** [RFC 3986] — [spaces as %20, +] — [date format ISO-8601]

## Errors
- **400** `[InvalidFilterField]` — [supported fields] listed in [OpenAPI or doc table]
