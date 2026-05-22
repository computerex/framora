# GraphQL schema — [Service name]

> Machine-readable data graph for [product], served at `[POST /graphql]`.

## Entry points
| Operation | Use when |
| --- | --- |
| Query | Read, pagination, field selection |
| Mutation | State changes, returns affected nodes |
| Subscription | [real-time events, if supported] |

## Conventions
- **Global ID:** `[Type:opaqueId]` — [caching and node resolution]
- **Pagination:** [cursor/offset] — [first/last/after/before] fields on `[NodeConnection]`
- **Errors:** [partial data + errors array | strict failure]

## Core types
```graphql
type [Resource] implements Node {
  id: ID!
  name: String!
  status: [ResourceStatus!]!
  createdAt: DateTime!
}

enum [ResourceStatus] {
  DRAFT
  ACTIVE
  ARCHIVED
}
```

## Common queries
```graphql
query GetResource($id: ID!) {
  node(id: $id) {
    ... on [Resource] { id name }
  }
}
```

## Mutations
```graphql
mutation Create($input: [ResourceInput]!) {
  createResource(input: $input) {
    resource { id }
    userErrors { field message }
  }
}
```

## Rate limits
- **Operation cost:** [points per request / complexity]
- **Batching:** [max aliases | DataLoader pattern]

## Deprecations
| Field/arg | Replaced by | Remove after |
| --- | --- | --- |
| `[oldField]` | `[newField]` | [date/version] |
