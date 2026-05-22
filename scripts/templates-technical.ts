export interface TemplateSpec {
  id: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  content: string;
}

export const templates: TemplateSpec[] = [
  {
    id: "technical-docs-api-rest-endpoint",
    name: "API reference: REST endpoint",
    category: "technical-docs",
    description: "Document a single HTTP route: method, path, auth, request/response bodies, and errors.",
    tags: ["api","rest","reference","http"],
    content: `# [Resource name] \`[METHOD] /path\`

> Contract for a single [product] REST endpoint.

## Overview
- **Purpose:** [one-line description]
- **Stability:** [beta | stable | deprecated] since [version]
- **Idempotency:** [required | not applicable] (for \`Idempotency-Key\`)

## Authentication
- **Schemes:** [Bearer / API key / mTLS]
- **Scopes:** \`[read:items]\` — [rationale]

## Path & query
| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| [id] | path | string (uuid) | yes | [resource id] |
| [q] | query | string | no | [search filter] |

## Request body
\`\`\`http
[METHOD] [baseUrl]/[v1]/[resource]/{[id]}?cursor=[next]
Content-Type: application/json
\`\`\`

\`\`\`json
{ "name": "[string]", "options": { "[key]": true } }
\`\`\`

## Responses
| Status | Body | When |
| --- | --- | --- |
| 200 | [Resource] | Success |
| 400 | Error | Validation |
| 401 | Error | Auth failure |
| 429 | Error | Throttled (see \`Retry-After\`) |

\`\`\`json
{ "id": "[uuid]", "createdAt": "[ISO-8601]" }
\`\`\`

## Error model
- **Type:** [problem+json URL or internal code]
- **Retryable:** [yes for 429/5xx with backoff | no for 4xx except 429]

## Examples
- **cURL**
\`\`\`bash
curl -sS -X [METHOD] -H "Authorization: Bearer $TOKEN" \\
  "[baseUrl]/[path]"
\`\`\`
- **Changelog (endpoint-level):** [version] — [behavior change]
`,
  },
  {
    id: "technical-docs-api-graphql-schema",
    name: "API reference: GraphQL schema",
    category: "technical-docs",
    description: "Document types, fields, root operations, and conventions for a GraphQL API.",
    tags: ["graphql","schema","api","types"],
    content: `# GraphQL schema — [Service name]

> Machine-readable data graph for [product], served at \`[POST /graphql]\`.

## Entry points
| Operation | Use when |
| --- | --- |
| Query | Read, pagination, field selection |
| Mutation | State changes, returns affected nodes |
| Subscription | [real-time events, if supported] |

## Conventions
- **Global ID:** \`[Type:opaqueId]\` — [caching and node resolution]
- **Pagination:** [cursor/offset] — [first/last/after/before] fields on \`[NodeConnection]\`
- **Errors:** [partial data + errors array | strict failure]

## Core types
\`\`\`graphql
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
\`\`\`

## Common queries
\`\`\`graphql
query GetResource($id: ID!) {
  node(id: $id) {
    ... on [Resource] { id name }
  }
}
\`\`\`

## Mutations
\`\`\`graphql
mutation Create($input: [ResourceInput]!) {
  createResource(input: $input) {
    resource { id }
    userErrors { field message }
  }
}
\`\`\`

## Rate limits
- **Operation cost:** [points per request / complexity]
- **Batching:** [max aliases | DataLoader pattern]

## Deprecations
| Field/arg | Replaced by | Remove after |
| --- | --- | --- |
| \`[oldField]\` | \`[newField]\` | [date/version] |
`,
  },
  {
    id: "technical-docs-api-websocket",
    name: "API reference: WebSocket",
    category: "technical-docs",
    description: "Describe the WebSocket URL, subprotocol, auth, message envelopes, and reconnection policy.",
    tags: ["websocket","realtime","api","streaming"],
    content: `# WebSocket API — [Channel name]

> Bidirectional events between clients and [service] at \`[wss://host/path]\`.

## Connection
- **URL:** \`[wss://...]\` — [which environments]
- **Subprotocols:** \`[v1.framora]\` | [fallback]
- **Auth:** [query token | first message] — **never** log credentials

## Handshake
1. Client opens socket with \`[headers]\` / \`[auth]\`
2. Server responds \`[101 Switching]\` and sends \`[ready payload]\`
3. Client subscribes with \`[subscribe message]\`

## Message envelope
\`\`\`json
{ "v": 1, "type": "event|ack|error|ping", "id": "[correlation]", "ts": 1710000000, "payload": {} }
\`\`\`

| Field | Description |
| --- | --- |
| \`v\` | Wire format version |
| \`type\` | Semantic category |
| \`id\` | Correlates with REST calls / UI actions |

## Heartbeats
- **Client → server:** \`[ping every N s]\` — server closes after \`[M]\` missed
- **Server → client:** [idle timeout policy]

## Backoff & reconnection
| Situation | Client behavior |
| --- | --- |
| Network drop | Exponential backoff [100ms, 2s cap], jitter [±20%] |
| 401 on auth | Refresh token, then reconnect |
| 429/503 from HTTP upgrade | Respect \`Retry-After\` |

## Security
- **Origin:** [allowed origins] — CORS/WS same-origin story
- **Payload size:** [max bytes] per message

## Example (browser)
\`\`\`ts
const ws = new WebSocket(url, ["v1.framora"]);
ws.onmessage = (e) => { /* parse JSON, route by \`type\` */ };
\`\`\`
`,
  },
  {
    id: "technical-docs-api-grpc",
    name: "API reference: gRPC / Protocol Buffers",
    category: "technical-docs",
    description: "List services, RPCs, request/response messages, deadlines, and error codes.",
    tags: ["grpc","protobuf","rpc","api"],
    content: `# gRPC API — [Package name]

> \`[package][.version]\` — served on \`[host:port]\` with [TLS / mutual TLS] policy.

## Services & RPCs
\`\`\`protobuf
service [ItemService] {
  rpc GetItem (GetItemRequest) returns (GetItemResponse) {}
  rpc ListItems (ListItemsRequest) returns (stream [Item]) {}
}
\`\`\`

| RPC | Idempotent | Semantics | Notes |
| --- | --- | --- | --- |
| \`GetItem\` | yes | at-most-once | [cache-friendly] |
| \`ListItems\` | yes | [server stream] | [backpressure: flow control] |

## Messages
\`\`\`protobuf
message GetItemRequest { string id = 1; }
message GetItemResponse { [Item] item = 1; [google.rpc.Status] error = 2; }
\`\`\`

## Metadata (headers)
| Key | Carried in | Value |
| --- | --- | --- |
| \`authorization\` | Call credentials | [Bearer] |
| \`[x-request-id]\` | Request | [UUID] — propagate for tracing
| \`[x-deadline-ms]\` | [optional] | [relative deadline] |

## Status & errors
- **Mapping:** gRPC [code] → [user-facing string / HTTP 502]
- **Details:** [google.rpc.ErrorInfo / LocalizedMessage] in \`[Status.details]\`

## Versioning
- **Compatibility:** [wire-compatible field adds | reserved tags]
- **Breaking change process:** [bump \`[package]\` with migration guide link]

## Client example
\`\`\`ts
import { [ItemServiceClient] } from "[generated/path]";
const c = new [ItemServiceClient]("[host:port]", creds, { "grpc.max_receive_message_length": 8 << 20 });
\`\`\`
`,
  },
  {
    id: "technical-docs-api-sdk-reference",
    name: "API reference: SDK",
    category: "technical-docs",
    description: "Language-specific SDK: installation, configuration, and core method documentation.",
    tags: ["sdk","api","client","library"],
    content: `# [Product] SDK — [Language]

> Idiomatic client for [public API] — package \`[org/package-name]\`.

## Install
\`\`\`bash
# npm
npm install [package]
# or
[uv add package / pip install ...]
\`\`\`

## Quick configuration
\`\`\`[lang]
import { [Client] } from "[package]";

const client = new [Client]({
  apiKey: process.env.[[PRODUCT]_API_KEY], // or read from [path]
  baseURL: "https://[region].api.[domain]/[v1]",
  timeout: [30_000], // ms
  maxRetries: [3],   // for [429, 5xx]
});
\`\`\`

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| \`[baseURL]\` | string | [value] | Override environment |
| \`[headers]\` | object | [value] | Extra metadata |

## Main methods
| Method | Parameters | Returns | Throws |
| --- | --- | --- | --- |
| \`[listX]\` | \`[params]\` | \`[Page<X>]\` | \`[ApiError]\` on [codes] |
| \`[createX]\` | \`[input]\` | \`[X]\` | [validation] |

\`\`\`[lang]
const page = await client.[listX]({ cursor: undefined, pageSize: 50 });
for await (const item of page) { /* ... */ }
\`\`\`

## Error type
- **\`[ApiError]\`:** \`code\`, \`message\`, \`requestId\`, \`[details]\` — map to your UI

## Versioning
- **Semver** aligned with [API version] — see \`[CHANGELOG link]\` for breaking changes
`,
  },
  {
    id: "technical-docs-api-authentication",
    name: "API guide: Authentication",
    category: "technical-docs",
    description: "How clients authenticate, rotate secrets, and scope access for the API.",
    tags: ["authentication","security","oauth","api"],
    content: `# Authentication

> How [product] verifies identity and enforces [least privilege] for [API / dashboard / webhooks].

## Supported schemes
| Scheme | When to use | Secret storage |
| --- | --- | --- |
| OAuth 2.0 / OIDC | User-delegated access | [short-lived tokens, refresh] |
| API key | Service-to-service | [vault / env, never in repo] |
| mTLS | High-trust B2B | [cert rotation] |

## Obtaining tokens
1. [Register app / create integration] in [console URL]
2. [Authorization code] flow: redirect to \`[authorize?...]\` — callback receives \`code\`
3. Exchange for tokens at \`[POST /token]\`

\`\`\`http
POST [baseUrl]/oauth/token
Content-Type: application/x-www-form-urlencoded
grant_type=authorization_code&code=[...]&client_id=[...]
\`\`\`

## Using tokens
- **Header:** \`Authorization: Bearer <access_token>\`
- **Clock skew:** allow [±5 min] for \`exp\` claims

## Scopes
| Scope | Allows |
| --- | --- |
| \`[read:data]\` | [GET/POST read-only] |
| \`[write:data]\` | [mutations] |
| \`[admin:org]\` | [dangerous] — document approval flow |

## Rotation & revocation
- **API keys:** [rotate in console] — old key valid for [N hours]
- **Incidents:** [revocation endpoint] + [notify security]

## Denied requests
- **401** — missing/invalid — include \`[WWW-Authenticate]\` where required
- **403** — valid identity, insufficient scope
`,
  },
  {
    id: "technical-docs-api-rate-limiting",
    name: "API guide: Rate limiting",
    category: "technical-docs",
    description: "Limits, response headers, retry guidance, and quota increases.",
    tags: ["rate-limit","throttling","api","quotas"],
    content: `# Rate limiting

> Protects [product] and fair use across [tenants / regions].

## Default limits
| Dimension | Free | Pro | Enterprise |
| --- | --- | --- | --- |
| Requests / min | [N] | [M] | [custom] |
| Concurrent connections | [N] | [M] | [custom] |
| [Burst] | [window] | [window] | [custom] |

## How limits are applied
- **Algorithm:** [token bucket / sliding window] on \`[key: tenantId | apiKey | ip]\`
- **Scope:** [per endpoint] vs [global] — [weighted costs for heavy routes]

## Response when limited
- **Status:** \`429 Too Many Requests\`
- **Headers:**
  - \`Retry-After: [seconds]\`
  - \`X-RateLimit-Limit: [N]\` / \`X-RateLimit-Remaining: [M]\` / \`X-RateLimit-Reset: [epoch]\`

\`\`\`http
HTTP/1.1 429 Too Many Requests
Retry-After: 3
X-RateLimit-Remaining: 0
\`\`\`

## Client behavior
- **Backoff:** [exponential with jitter] — never busy-loop
- **Categorize:** [only retry 429, 5xx, and [list]]

## Quota increases
- **Process:** [support doc / form]
- **SLA:** [time to respond]

## Overage
- **Webhooks** may [pause | still deliver with delay] when over quota
`,
  },
  {
    id: "technical-docs-api-error-codes",
    name: "Reference: API error codes",
    category: "technical-docs",
    description: "Complete catalog of error codes, HTTP status mapping, and remediation.",
    tags: ["errors","api","reference","troubleshooting"],
    content: `# API error codes

> Canonical \`[code]\` and \`[type]\` values for [product] APIs.

## Error object
\`\`\`json
{
  "error": {
    "type": "invalid_request|auth|forbidden|not_found|...",
    "code": "[[PRODUCT]_...]",
    "message": "Human-readable summary",
    "requestId": "req_[...]",
    "doc": "https://[docs]/errors/[[code]]"
  }
}
\`\`\`

| HTTP | \`type\` | When |
| --- | --- | --- |
| 400 | \`invalid_request\` | JSON/schema/parameter issue |
| 401 | \`auth\` | Token missing/invalid |
| 403 | \`forbidden\` | Scope / policy block |
| 404 | \`not_found\` | Resource missing |
| 409 | \`conflict\` | Version / idempotency conflict |
| 429 | \`rate_limited\` | Throttle |
| 5xx | \`[internal|upstream]\` | Retry with backoff |

## Code catalog
| \`code\` | HTTP | Remediation |
| --- | --- | --- |
| \`[PRODUCT]_INVALID_PARAM\` | 400 | Fix \`[field path]\` — see \`[details.param]\` |
| \`[PRODUCT]_STALE_VERSION\` | 409 | Re-fetch, merge, and retry with \`[If-Match]\` |
| \`[PRODUCT]_CAPACITY\` | 503 | Exponential backoff; [status page] |

## Logging for support
- Always send \`[requestId]\` to support — [how to find in SDK exception]

## i18n
- **Message:** for humans — **rely** on \`code\` for programmatic branching
`,
  },
  {
    id: "technical-docs-api-pagination",
    name: "API guide: Pagination",
    category: "technical-docs",
    description: "Offset, cursor, and keyset strategies with examples and performance notes.",
    tags: ["pagination","api","performance","cursors"],
    content: `# Pagination

> How to list large collections from [API] without timing out or skipping rows.

## Supported styles
| Style | Use when | Drawbacks |
| --- | --- | --- |
| **Cursor** | [dynamic, append-heavy feeds] | [cannot jump to page N] |
| **Offset** | [static sort, small tables] | [slower for deep pages] |
| **Keyset** | [very large ordered tables] | [requires order columns] |

## Request parameters
- **Limit:** \`[limit]=[default 20, max 100]\` — [document server caps]
- **Cursor:** \`[cursor]=[opaque]\` from previous response
- **Sort:** \`[order]=created_at:desc\` — [stable tie-breaker: id]

## Response shape
\`\`\`json
{
  "data": [ { "id": "[1]" } ],
  "pageInfo": {
    "nextCursor": "eyJ...",
    "hasNextPage": true
  }
}
\`\`\`

## Client loop
\`\`\`ts
let cursor: string | undefined;
do {
  const res = await client.list({ cursor, limit: 100 });
  for (const row of res.data) { /* process */ }
  cursor = res.pageInfo.hasNextPage ? res.pageInfo.nextCursor : undefined;
} while (cursor);
\`\`\`

## Consistency
- **Mid-list inserts:** [may appear | not appear] during iteration — for strong guarantees use [keyset on updated_at+id]
- **Total count:** [expensive; optional] — \`[includeTotal: true]\`

## Performance tips
- Prefer **projection** and **field masks** to reduce bytes per page
`,
  },
  {
    id: "technical-docs-api-webhooks",
    name: "API guide: Webhooks",
    category: "technical-docs",
    description: "Subscribe to events, verify signatures, retries, and payload schemas.",
    tags: ["webhooks","events","api","security"],
    content: `# Webhooks

> HTTP callbacks for \`[resource.*]\` events in near real time.

## Registration
- **Create endpoint:** [console] → [URL], \`[events[]]\` — [HTTPS required]
- **Secret:** \`[whsec_...]\` per endpoint — [rotate without downtime]

## Delivery
- **Method:** \`POST\` with \`[application/json]\`
- **Headers:** \`[X-[Product]-Signature: t=, v1=]\`, \`[X-Request-Id]\`, \`[X-Delivery-Attempt: n]\`
- **Timeout:** [30s] to respond \`2xx\` — or [retries with backoff]

## Verifying signature
1. Read raw body (do **not** re-serialize JSON)
2. Build \`[signed_payload] = t + '.' + body\`
3. HMAC-SHA256 with secret → compare in **constant time**

\`\`\`ts
// pseudocode
const ok = timingSafeEqual(expectedMac, hmac_sha256(secret, signed_payload));
\`\`\`

## Payload
\`\`\`json
{ "id": "evt_...", "type": "resource.updated", "created": 1710000000, "data": { "object": {} } }
\`\`\`

## Retries
| Attempt | When | Backoff |
| --- | --- | --- |
| 1 | Non-2xx, timeout, TLS error | immediate |
| 2+ | same | [exponential, max delay] |
| [DLQ] | [after N] | [manual replay] |

## Idempotency
- Use \`[id]\` (event id) to deduplicate in your system
`,
  },
  {
    id: "technical-docs-api-batch-operations",
    name: "API guide: Batch operations",
    category: "technical-docs",
    description: "Batched create/update/delete with per-item errors and transactional semantics.",
    tags: ["batch","api","bulk","performance"],
    content: `# Batch operations

> Multiple actions in a **single** call with independent per-item success/failure.

## When to use
- **OK:** [ingest, bulk tag, fan-out updates] — [N items ≤ [limit]]
- **Avoid:** [long-running] — use [async job] instead

## Request
\`\`\`http
POST [baseUrl]/[v1]/batch
Content-Type: application/json
\`\`\`

\`\`\`json
{ "items": [ { "op": "create|update|delete", "id": "...", "body": { } } ] }
\`\`\`

| Rule | Value |
| --- | --- |
| **Max items** | [1000] (see \`[BatchTooLarge]\`) |
| **Order** | [order preserved] — [or undefined] (document) |
| **Transaction** | [all-or-nothing] vs [best-effort per item] (this API: [which]) |

## Response
- **Status:** [200/207/400] — [this API uses: [207 Multi-Status] with array]

\`\`\`json
{ "items": [ { "index": 0, "status": 201, "result": { "id": "..." } },
             { "index": 1, "status": 400, "error": { "code": "..." } } ] }
\`\`\`

## Client pattern
- **Partition** into safe chunk sizes; **retry** only idempotent [delete] + [idempotent-put]

## Limits
- **Payload** max [N MB] — prefer [parallel requests] for huge imports with [idempotency keys]
`,
  },
  {
    id: "technical-docs-api-file-upload",
    name: "API guide: File uploads",
    category: "technical-docs",
    description: "Presigned URLs, multipart uploads, MIME validation, and virus scanning status.",
    tags: ["upload","files","s3","api"],
    content: `# File uploads

> Upload and attach files to [resources] with safe defaults.

## High-level flow
1. \`[POST /uploads/sessions]\` — returns \`[uploadId]\` and **constraints**
2. **PUT** to presigned URL(s) with correct \`[Content-Type]\` / [parts]
3. \`[POST /uploads/.../complete]\` — [checksum verification | virus scan]

## Constraints
| Limit | Value |
| --- | --- |
| Max file size | [N MB/GB] |
| Allowed types | [mime allowlist] |
| [Dimensions] (images) | [max W×H] |

## Create session
\`\`\`json
{ "name": "report.pdf", "size": 120000, "contentType": "application/pdf" }
\`\`\`

\`\`\`json
{ "uploadId": "upl_...", "putUrl": "https://[signed]", "headers": { "Content-Type": "application/pdf" } }
\`\`\`

## Direct upload (browser)
- Use \`[XMLHttpRequest / fetch with progress]\` — [CORS] preflight on [URL]

## Completion & attachment
- **\`[POST /resources/.../files]\`:** link \`[uploadId]\` — server checks [Etag match]

## Failures
| Symptom | Fix |
| --- | --- |
| \`[403 on PUT]\` | URL expired; request new \`[putUrl]\` |
| \`[size_mismatch]\` | Re-upload; verify content-length
`,
  },
  {
    id: "technical-docs-api-search",
    name: "API reference: Search",
    category: "technical-docs",
    description: "Query syntax, index coverage, relevancy, and highlighting for search APIs.",
    tags: ["search","api","query","relevance"],
    content: `# Search API

> Full-text and structured search over [entities] with [relevance] tuning.

## Endpoint
- **\`[GET /v1/search]\`:** \`?q=...&type=...&[filters...]\`
- **Auth:** [same as core API] — [scoped results]

## Query language
- **Phrases:** \`"exact match"\` — [boost]
- **Boolean:** \`[term1 AND term2]\` / \`[OR]\` / \`[-exclude]\` — [parser notes]
- **Field filters:** \`[field:value]\` in \`[q]\` or as dedicated params (document)

## Result item
\`\`\`json
{ "id": "...", "type": "document", "title": "...", "snippet": "... [hit] ...", "score": 12.3 }
\`\`\`

| Field | Notes |
| --- | --- |
| \`snippet\` | HTML-escaped, may contain \`<em>\` hits |
| \`[facets]\` | Only when \`[includeFacets=true]\` |

## Pagination
- **\`[cursor]\`** — [same contract as [pagination doc]]

## Relevance
- **Boosts:** [recency, popularity, your profile fields]
- **Language:** [analyzer for \`[locale]\`]

## Rate limits
- Heavier than CRUD — [separate] bucket [N rpm]

## Tuning
- For large exports use **[async report]** instead of paged search
`,
  },
  {
    id: "technical-docs-api-filtering",
    name: "API guide: Filtering & operators",
    category: "technical-docs",
    description: "Filter parameters, supported operators, and encoding for list endpoints.",
    tags: ["filtering","api","query","operators"],
    content: `# Filtering (list endpoints)

> Narrow \`[GET /[resources]]\` with composable field filters.

## Query parameters
- **\`[filter]\`:** [expression] — **or** flat params \`[field_op]=[value]\` (this API: [style])

## Operators
| Op | Example | SQL-like meaning |
| --- | --- | --- |
| \`eq\` | \`status_eq=active\` | \`=\` |
| \`ne\` | \`status_ne=archived\` | \`<>\` |
| \`in\` | \`id_in=[a,b]\` | \`IN\` — [array encoding: repeated param / JSON] |
| \`[gt, gte, lt, lte]\` | \`[created_gte=]\` | Range on [date/number] |
| \`[contains]\` | \`[name_contains=]\` | [substring, case-] — [COLLATION]

## AND / OR
- **Default:** [all filters are AND] — [OR: use \`$or: [...]\` in [filter] JSON] (document your grammar)

\`\`\`text
# Example: JSON filter
filter={"$and":[{"status":{"$eq":"active"}},{"size":{"$gte":1000}}]}
\`\`\`

## Sorting
- \`[sort]=[-]field\` — [multiple: comma, repeated param, etc.]
- **Stable** sort required for cursor pagination: add \`[id]\` as last key

## Encoding
- **URL encoding:** [RFC 3986] — [spaces as %20, +] — [date format ISO-8601]

## Errors
- **400** \`[InvalidFilterField]\` — [supported fields] listed in [OpenAPI or doc table]
`,
  },
  {
    id: "technical-docs-api-sorting",
    name: "API guide: Sorting",
    category: "technical-docs",
    description: "List endpoint sort fields, order, stability, and index implications.",
    tags: ["sorting","api","query","performance"],
    content: `# Sorting

> Control the order of items returned from \`[GET /[resource]]\`.

## Parameter
- **\`[sort]\`:** e.g. \`[-createdAt,id]\` — [minus prefix] means descending

## Default order
- If **omitted:** \`[default: -updatedAt, id]\` — [OLTP-friendly]

## Index-backed fields
| Field | Index | Notes |
| --- | --- | --- |
| \`[createdAt]\` | [yes] | [fast] |
| \`[popularity]\` | [partial] | [stale] — [recompute] |

## Stability
- **Tie-break** with unique \`[id]\` — [required for] cursor and export consistency

\`\`\`ts
// Example
GET /[resources]?sort=-priority,title
\`\`\`

## Locale / collation
- String sorts use [locale] — [document when locale differs from API region]

## Limitations
- **Computed fields** may [not] be sortable in [REST] — [use] \`[GraphQL / export]\` instead
`,
  },
  {
    id: "technical-docs-api-versioning-changelog",
    name: "Versioning & changelog (APIs)",
    category: "technical-docs",
    description: "API version policy, deprecation window, and how changes are announced.",
    tags: ["versioning","changelog","deprecation","api"],
    content: `# API versioning & changelog

> How [product] evolves APIs without surprise breaks.

## Version scheme
- **Path:** \`[ /v1 /v2 ]\` — [major] bump for **breaking** wire changes
- **Header (optional):** \`[Accept-Version: 2024-10-15]\` — for [date-based] (document)

## Breaking vs non-breaking
| Change | Classification |
| --- | --- |
| Add optional field/parameter | [non-breaking] |
| Tighten validation | [often breaking] for invalid-but-accepted data |
| Remove/rename | [breaking] |
| [Enum] value add | [non-breaking] — value remove: [breaking] |

## Deprecation policy
- **Announce:** in [changelog, email, in-response header \`[Deprecation: true]\` / \`[Sunset]\`]
- **Window:** [min N months] from deprecation to removal — [case-by-case] for [security]

| Stage | What you see | Action |
| --- | --- | --- |
| \`[stable]\` | — | [none] |
| \`[deprecated]\` | Warnings, docs | Migrate to [replacement] |
| \`[removed]\` | 4xx/redirect | [must be on] \`[v2]\` |

## Changelog
- **Subscribe:** [RSS/Atom, email, Slack]
- **Format:** [keep-a-changelog] with API section — [link: URL]

\`\`\`md
## [1.2.0] - [YYYY-MM-DD]
### API
- **BREAKING:** [endpoint] [change] — migration: [link]
- **Added:** [new optional field]
\`\`\`

## Your checklists
- [ ] **Pin** integration tests to a **supported** [version] range
- [ ] **Log** and alert on [deprecation] headers
`,
  },
  {
    id: "technical-docs-user-getting-started",
    name: "User guide: Getting started",
    category: "technical-docs",
    description: "First-time product orientation: key concepts, UI map, and next steps.",
    tags: ["onboarding","user-guide","product","basics"],
    content: `# Getting started with [Product]

> A short path from "signed in" to **first successful task** in [N minutes].

## What is [Product]?
- **In one sentence:** [value proposition]
- **Who it is for:** [personas: builder, admin, operator]

## Key concepts
| Concept | What it means here |
| --- | --- |
| **[Workspace/Org]** | [billing & permissions boundary] |
| **[Project]** | [where resources live] |
| **Environment** | [prod/staging/dev] — [isolation] |

## UI map
- **Home:** [dashboard cards] — [alerts, shortcuts]
- **[Resources]:** [list/create/settings]
- **Settings:** [profile, org, security, plans]

## Your first 5 minutes
1. [Create] \`[thing]\` with **[button label]**
2. [Connect] \`[integration]\` in **[path in UI]**
3. [Run] a **[job/test]** and open **[results page]**

## Requirements
- **Browser:** [Chrome/Edge N+, Safari M+] — [WebGL / workers if needed]
- **Roles needed:** [Member vs Admin] — *Admin only:* [list]

## Next steps
- [Quick start]([link]) — [time estimate]
- [User guide: Basic usage]([link])
- [Install / configure]([link]) if you use [CLI/self-host]

## Need help?
- [Support: email/chat] | [status page] | [known issues]
`,
  },
  {
    id: "technical-docs-user-quick-start",
    name: "User guide: Quick start",
    category: "technical-docs",
    description: "Minimal clicks and commands to a working end-to-end flow.",
    tags: ["quickstart","tutorial","user-guide","onboarding"],
    content: `# Quick start

> The shortest [happy path] to **[deliverable]** in [~15 minutes].

## Prerequisites
- [Account] with [role: Member+]
- [API key] or [integration] credentials — [link to where to get]

## 1) Create [resource A]
- **UI:** [Navigation → New → [Name]]  
- **Fields:** [name], [region], [template]

## 2) Connect [B]
- **UI:** [Settings → Integrations → [B]]  
- **Paste** \`[token]\` and **Test connection**

## 3) Run [action]
- **UI:** [Action button] — you should see [success state / job id]  
- **Time:** [typical duration]

\`\`\`text
# Expected output / status
[Job state: succeeded] — [resource link]
\`\`\`

## 4) Verify
- [Checklist: UI spot + optional API call]

## 5) Clean up (optional)
- [How to delete / archive to avoid cost]

## Common issues
- **[Symptom]** → [link to FAQ / triage] — [1-line fix]

## Where next
- [Full configuration guide] — [Advanced usage] — [Security checklist]
`,
  },
  {
    id: "technical-docs-user-installation",
    name: "User guide: Installation (client)",
    category: "technical-docs",
    description: "Install local apps, CLIs, or agents with OS-specific notes.",
    tags: ["install","cli","desktop","user-guide"],
    content: `# Installation (client)

> Install **[Product component]** on [OS list] to [local dev / run jobs / sync files].

## Download
| Platform | Package | Checksum |
| --- | --- | --- |
| Windows | [Product]-[version].msi | [sha256] |
| macOS | [Product].pkg (Apple silicon + Intel) | [sha256] |
| Linux | [deb] / [rpm] / [AppImage] | [sha256] |

## Windows
1. Run installer — [install path, service option]
2. \`[Product]\` in Start Menu
3. First launch: [sign in / device link]

\`\`\`powershell
# Optional: winget
winget install [Id]
\`\`\`

## macOS
- [Gatekeeper: right-click open] if unsigned build  
- [Homebrew: \`brew install --cask [tap]\`]

## Linux dependencies
- \`[lib...]\` — [apt/yum one-liners]

## Verify
\`\`\`bash
[product] --version
[product] doctor
\`\`\`

## Uninstall
- [OS-specific: remove, retain config at \`[path]\`]

## Autoupdate
- **Channel:** [stable | beta] — [opt-in] — [rollback policy]
`,
  },
  {
    id: "technical-docs-user-configuration",
    name: "User guide: Configuration",
    category: "technical-docs",
    description: "Where settings live, recommended profiles, and safe change process.",
    tags: ["configuration","settings","user-guide","security"],
    content: `# Configuration

> Tune [Product] for [your team, regions, and compliance] without guesswork.

## Where settings are stored
| Layer | Location | Who can edit |
| --- | --- | --- |
| **Account** | [Web → Profile] | [self] |
| **Organization** | [Org → Settings] | [Admin] |
| **Resource** | [Resource → [tab]] | [Editor+] |

## Recommended profiles
- **Start simple:** [defaults table for SME]
- **Scale:** [enable features in order: [A], [B], [C]]

## Common settings
| Setting | What it does | Suggested value |
| --- | --- | --- |
| \`[Default region]\` | [data residency] | [eu-west-1] for [GDPR] |
| \`[Session timeout]\` | [user idle] | [30m] in regulated orgs |
| \`[Audit]\` | [log exports] | [on] |

## File-based config (if applicable)
\`\`\`yaml
# [~/.[product]/config.yaml]
[product]:
  default_environment: "production"
  editor: "vscode"
\`\`\`

## Environments
- **Map** \`[prod/stage/dev]\` to [URLs / keys] — *never* reuse prod keys in dev

## Change process
- **Test** in [staging] — [export configuration diff] — **announce** in [change channel]
`,
  },
  {
    id: "technical-docs-user-basic-usage",
    name: "User guide: Basic usage",
    category: "technical-docs",
    description: "Everyday tasks: navigation, create/edit, and collaboration basics.",
    tags: ["basics","user-guide","product","workflow"],
    content: `# Basic usage

> **Day-to-day** tasks most users need in the first [week] with [Product].

## Navigation
- **Global search** (\`[Cmd/Ctrl+K]\`): jump to [resources, docs, people]
- **Breadcrumbs** [on/off] for deep hierarchies
- **Recents** [path in UI] — [N items] — [how to pin]

## Create & edit
- **New [entity]:** [path] — required fields: [list]
- **Save behavior:** [auto-save] — [version history link]
- **Validation:** [inline errors] — *fix* [typical: required, format]

\`\`\`
Field tips:
- [Field X]: [placeholder format]
- [Field Y]: [max length, allowed characters]
\`\`\`

## Collaboration
- **Share:** [Share button] — [view vs edit] link — [expiry] — [public vs org-only]
- **Mentions** \`@name\` — [where notifications go]

## Permissions you need
| Action | Min role | Notes |
| --- | --- | --- |
| View | [Reader] | [row-level if enabled] |
| Edit | [Editor] | [locks, concurrent] |
| Admin | [Admin] | [settings, secrets] |

## Exports
- [CSV/PDF] from **[menu path]** — [row limits, columns]

## Daily tips
- [Keyboard shortcut] for [frequent action] — [where listed]
`,
  },
  {
    id: "technical-docs-user-advanced-usage",
    name: "User guide: Advanced usage",
    category: "technical-docs",
    description: "Power features: automation hooks, cross-resource workflows, and performance patterns.",
    tags: ["advanced","automation","user-guide","productivity"],
    content: `# Advanced usage

> For teams ready to [compose workflows], [automate], and [optimize] across [workspaces].

## Multi-step workflows
- **Pattern A:** [import → validate → publish] with **[automation: rules / playbooks]**
- **Pattern B:** [fan-out] \`[N]\` [children] and track **[orchestrator screen]**

## Automation hooks
| Hook | Fires on | You can [script / rule] |
| --- | --- | --- |
| \`[on.event]\` | [state transition] | [webhook, queue message] |
| \`[schedule:*]\` | [cron] | [batch API call] |

\`\`\`json
{ "name": "When [X], then [Y]", "enabled": true, "filters": { "tag": "vip" } }
\`\`\`

## Performance patterns
- **Batch UI actions** using **[multi-select]** — [soft limit: N]
- **For large [tables]** — use [saved views, server-side sort] — *avoid* [load-all]

## Cross-resource
- **Linking:** \`[type:id]\` from [field] — [integrity rules, orphan policy]

## Quotas
- [Org-wide] [concurrency] — *symptoms* [when exceeded] — [remediation: upgrade, shard]

## When to use API/CLI
- [Operations > 1k rows] — [migrations, scripted audit] — see [Reference]([api doc])
`,
  },
  {
    id: "technical-docs-user-customization",
    name: "User guide: Customization",
    category: "technical-docs",
    description: "Custom fields, views, and notifications to fit your process.",
    tags: ["customization","user-guide","fields","views"],
    content: `# Customization

> Make [Product] match **your process** with [modular options] and **sane defaults**.

## Custom fields
- **Types supported:** [text, number, select, multi, date, person, link]
- **Scoping:** [per project | global] — *who* can [create schema]

| Add field | Use case |
| --- | --- |
| \`[cf_priority]\` | [WSJF / triage] |
| \`[cf_contract_id]\` | [ERP handoff] |

## Views & saved filters
- **Save** current table state as \`[View name]\` — [share] with [org / link]
- **Default view** for role [Editor]: [set by Admin] at [path]

## Notification rules
- **Channels:** [email, in-app, mobile, Slack, Teams]
- **Rule:** *When* \`[event]\` *and* \`[filter]\` *then* \`[channel]\` — *digest* [daily]

## Theming
- [Logo, accent color] in **[branding] tab** — [preview, contrast checks]

## Limitations
- [Max custom fields: N] — [naming reserved prefixes: \`sys__\`]
- [Pipelines] may [ignore unknown fields] — [map in integration]
`,
  },
  {
    id: "technical-docs-user-theming",
    name: "User guide: Theming & white-label",
    category: "technical-docs",
    description: "Brand colors, logos, email footers, and customer-facing style.",
    tags: ["theming","branding","white-label","ui"],
    content: `# Theming & white-label

> Align the **customer-facing** and **in-app** experience with your brand in [Product].

## Where branding appears
- **App shell:** [logo, app name, favicon]
- **Auth pages:** [login, SSO, error pages] — *when* [using hosted IdP, limited]
- **Email:** [invites, alerts] — *footer, reply-to*

## Brand assets
| Asset | Spec | Upload |
| --- | --- | --- |
| **Logo (light/dark)** | [SVG, max width] | [Path → …] |
| **Favicon** | [32/48 multi] | [Path → …] |
| **[Login background]** | [JPG, size cap] | [Path → …] |

## Color tokens
- **Primary** \`[#hex]\` — *used* for [buttons, links, focus] — we compute **contrast** with [AA]
- **Accent** for [badges, charts] — *avoid* [clashing] with [data viz palette]

\`\`\`text
# Preview checklist
- [ ] Focus ring visible
- [ ] Deuteranopia-friendly charts (enable [a11y mode])
- [ ] Mobile nav contrast
\`\`\`

## Email
- **From:** \`[brand] <noreply@...>\` — *SPF/DKIM* set by [domain verification]

## Multi-brand (if available)
- **Mapping:** [subdomain, domain, region] → [brand set]
- **Fallback** when not matched: [default org brand]
`,
  },
  {
    id: "technical-docs-user-plugin-development",
    name: "User guide: Plugin development (extensions)",
    category: "technical-docs",
    description: "Create extensions: manifest, permissions, and publishing checklist.",
    tags: ["plugins","extensions","sdk","user-guide"],
    content: `# Plugin development

> Build **[extensions]** that add UI panels, background jobs, and API actions to [Product].

## Architecture
- **Host:** [Product] enforces a **strict** API for [commands, context, events]
- **Your code:** [JS bundle / WASM / native helper] in **[isolated] runtime**

\`\`\`jsonc
// /[manifest.json]
{ "id": "com.example.[name]", "version": "1.0.0", "permissions": ["[read:items]", "[ui.panel]"] }
\`\`\`

## Capabilities
| Permission | Can access |
| --- | --- |
| \`[read:items]\` | [list resources]
| \`[write:webhook]\` | [register outbound URL]
| \`[ui.panel]\` | [sidebar slot]

## Local development
1. \`[product] plugins init [name]\`
2. \`[product] plugins dev\` — **watch** and hot-reload
3. **Connect** a **dev** org in **Settings → [Plugins] → [Load unpacked]**

## UI integration
- **Entry:** \`[View contribution ID]\` — *props:* \`[context]\` (user, org, [resourceId])

\`\`\`ts
// pseudocode: render()
export function Panel(ctx: { orgId: string; resourceId?: string }) { /* ... */ }
\`\`\`

## Publishing
- \`[product] plugins publish\` — *review* [1–2 days] — [policies, security scan]
- [Semver] — *breaking* changes require [new major] + [migration note]

## Sandboxing & safety
- **No [raw network] without** \`[net:*]\` — [CSP for HTML] — *secrets* via [secure storage API] only
`,
  },
  {
    id: "technical-docs-user-cli-reference",
    name: "User guide: CLI reference (essentials)",
    category: "technical-docs",
    description: "Most-used CLI commands, global flags, and exit codes.",
    tags: ["cli","command-line","user-guide","automation"],
    content: `# CLI — essentials

> Command \`[product]\` for [automation, CI, and local workflows].

## Install & update
\`\`\`bash
# See installation guide; verify:
[product] version
[product] update   # or package manager: [command]
\`\`\`

## Global flags
| Flag | Purpose |
| --- | --- |
| \`--[profile]\` | Use named profile \`[name]\` from config |
| \`--[org]\` | Default org: \`[orgId]\` |
| \`--[json]\` | Machine-readable output |
| \`--[no-color]\` | [CI / logs] |
| \`-v / --verbose\` | [trace HTTP, timings] — *may* print secrets: [masking policy]

## Core commands
\`\`\`bash
# Auth
[product] auth login
[product] auth status

# Resources
[product] [resource] list --page-size 100
[product] [resource] get [id]
[product] [resource] create --file [path.yaml]

# Jobs
[product] [job] run --[wait]
\`\`\`

## Config file
- **Path:** \`[~/.[product]/config]\` or \`[$[PRODUCT]_CONFIG]\` — *see* [User guide: Configuration]

## Exit codes
| Code | Meaning |
| --- | --- |
| 0 | Success |
| 1 | [Generic failure] — see stderr |
| 2 | [User error / bad args] |
| 3 | [Auth / permission] — run \`[auth login]\` |
| 4 | [Rate limited] — retry with backoff |

## Shell completion
- **bash/zsh/fish/pwsh** — \`[product] completion -h\`
`,
  },
  {
    id: "technical-docs-user-keyboard-shortcuts",
    name: "User guide: Keyboard shortcuts",
    category: "technical-docs",
    description: "Discoverable shortcuts for navigation, tables, and editor surfaces.",
    tags: ["shortcuts","accessibility","user-guide","productivity"],
    content: `# Keyboard shortcuts

> [Product] supports **accessibility**-friendly shortcuts. Platform: [macOS/Windows] labels below as **[Cmd|Ctrl]**.

## Global
| Shortcut | Action |
| --- | --- |
| \`[Cmd/Ctrl]+K\` | Command palette / search |
| \`[Cmd/Ctrl]+/\` | *This* shortcut help |
| \`[Cmd/Ctrl]+B\` | Toggle sidebar |
| \`[Cmd/Ctrl]+Shift+[\` / \`]\` | Previous / next [area] |
| \`[Esc]\` | Close modal / defocus field |

## Lists & tables
- \`J / K\` or \`[Arrow keys]\` — [move focus row] — *hold* [Shift] for [multi]
- \`X\` — [toggle select] (when not typing)
- \`E\` — [open editor] for focused row
- \`# / Cmd+F\` — [filter within table] — [?]

## Editable fields
- \`[Cmd/Ctrl]+Enter\` — [save] — \`[Cmd/Ctrl]+.\` — [open AI assist] if [enabled]
- \`[Tab] / [Shift+Tab]\` — *trap* inside [modal] — *see* [A11Y]

## Rebinding (if supported)
- **Path:** [Settings → Keyboard] — *export/import* [JSON] — *conflicts* [highlighted]

## Screen reader
- **Virtual cursor** in [grids] — [roving tabindex] model — *docs:* [WAI-ARIA pattern link]
`,
  },
  {
    id: "technical-docs-user-accessibility",
    name: "User guide: Accessibility",
    category: "technical-docs",
    description: "WCAG alignment, screen reader support, and known gaps.",
    tags: ["accessibility","a11y","wcag","user-guide"],
    content: `# Accessibility

> We aim to meet **WCAG [2.2 AA]** for core flows. This page tracks **practical** guidance and **known** gaps for [version].

## Supported assistive technology
- **Screen readers:** [NVDA+Chrome, VoiceOver+Safari, JAWS+Edge] on [supported] versions
- **Zoom:** [up to 200%] *without* horizontal scroll for [key pages]
- **Color:** [contrast] on text and *focus rings* in [default theme] — [low-contrast] themes marked

## How we implement
- **Labels:** *every* [control] has [programmatic name] — *errors* linked with \`[aria-describedby]\`
- **Focus:** *visible* focus, **not** [outline:none] *without* [replacement] — *modal* *traps* focus
- **Live regions** for [async updates, save status] — [polite] vs [assertive]

\`\`\`text
# Quick tests (userland)
- Tab through [form] — order matches visual order? [Y/N + fix path]
- Run [WAVE/axe] on [url] before release
\`\`\`

## Keyboard-only paths
- [Critical flows] completable: [A], [B], [C] — *escape hatches* from [wizards, drawers]

## Known issues
| Area | Status | Workaround | ETA |
| --- | --- | --- | --- |
| [Data grid] | [partial] | [Use list view] | [Qn] |
| [Charts] | [summary table alt] | [export CSV] | [Qn+1] |

## Feedback
- **Report a11y bugs:** [email] — *include* [OS, AT, [Product] build]
`,
  },
  {
    id: "technical-docs-user-internationalization",
    name: "User guide: Internationalization (i18n)",
    category: "technical-docs",
    description: "Locales, date/number formats, and translation of user content.",
    tags: ["i18n","locales","translation","user-guide"],
    content: `# Internationalization (i18n)

> How [Product] handles **UI language** and **local formats** for [global teams].

## Supported locales
| Locale | UI | Date/time | First-day-of-week | Status |
| --- | --- | --- | --- | --- |
| \`[en-US]\` | [yes] | [yes] | Sunday | [GA] |
| \`[de-DE]\` | [yes] | [yes] | Monday | [GA] |
| \`[xx-YY]\` | [beta] | [yes] | [n/a] | [beta] |

- **Set per user** at [path] — *override* org default if [flag]

## Formats
- **Dates:** [ISO-8601 in API] — **display** with [user locale] — *timezone* = \`[user|resource|org]\` — [docs link]
- **Numbers & currency:** [Intl.NumberFormat] with \`[currency code]\` from [source field]

\`\`\`ts
// Example: API is UTC; UI converts to [America/Los_Angeles] when [toggle] on
\`\`\`

## User-generated content
- *Translation of your data* is **[not automatic]** — *export* for [TM tools] with [columns]
- *Right-to-left* (RTL) UI: [supported | partial] — [caveat in visual builder]

## Search & collation
- **Analyzer** for \`[language]\` in [index] — *mixed* language [notes]

## Gaps & roadmap
- [Locale] missing for [UI string category] — *vote* at [link]
`,
  },
  {
    id: "technical-docs-user-data-import-export",
    name: "User guide: Data import & export",
    category: "technical-docs",
    description: "Formats, size limits, validation, and how to run bulk in/out operations.",
    tags: ["import","export","csv","data"],
    content: `# Data import & export

> Move [entities] in and out of [Product] with **repeatable** jobs and **clear** error reporting.

## Formats
| Format | Import | Export | Notes |
| --- | --- | --- | --- |
| **CSV** | [yes] | [yes] | [UTF-8, RFC4180, headers required] |
| **XLSX** | [optional] | [optional] | [row limits, macros stripped] |
| **JSONL** | [API/bulk] | [API] | [one object per line] for [ETL] |

## Import flow
1. **Download** [template] from [path] — *includes* [required col order]
2. **Map** fields — [fuzzy match] and **[saved mapping profiles]**
3. **Validate** (dry run) — [error report with row, column, code]
4. **Commit** — *async job* for [>N rows]

\`\`\`text
# Example row error
Row 12, 'email': INVALID_FORMAT (expected: RFC 5322-like)
\`\`\`

## Export flow
- **From UI** — [row cap for sync export] — *for* large sets use **[async export]**
- **Schedule** [daily/weekly] to [S3, SFTP, email link]

## Quotas
- [Max import size, max concurrent jobs] — *enterprise* [higher, SLA]

## Security
- PII in files — [at-rest encryption, link expiry, role gate for export] — *see* [compliance] doc
`,
  },
  {
    id: "technical-docs-tutorial-beginner",
    name: "Tutorial: Beginner",
    category: "technical-docs",
    description: "Hands-on intro with checkpoints and expected results.",
    tags: ["tutorial","beginner","learning","workshop"],
    content: `# Tutorial — Beginner: [Task title]

> **Time:** [30–45 min] · **Level:** beginner · **Outcome:** [concrete deliverable you can show]

## You will need
- [Account type] and role: […]
- [Tooling]: [browser / CLI] — *optional:* [code editor]
- A **[sample data pack]** (download: [url]) *or* the empty template

## Before you start
- Read **Key concepts** in 3 bullets: [A], [B], [C]
- Open **[starting URL]** — you should see **[screenshot desc]**

## Part 1 — [Milestone 1] ([~10 min])
1. [Click path + exact label]
2. Enter: \`[value]\` in **[[field]]** — *expected* [validation] passes
3. **Checkpoint:** you see [status/badge] and id \`[id pattern]\`

## Part 2 — [Milestone 2] ([~15 min])
- [2–3 steps] — *if* stuck, expand:

\`\`\`ts
// Optional hint (do not copy blindly)
[snippet showing shape, not full solution]
\`\`\`

- **Checkpoint:** [API/ UI evidence of success] — e.g. \`[HTTP 201]\` with \`[id]\`

## Part 3 — [Milestone 3] ([~10 min])
- [Undo/cleanup/verify] — [observability: where to look]

## Wrap-up
- **What you built:** [bullets] — *compare* with [reference solution: link or repo]
- **Next:** [intermediate tutorial] or [user guide: advanced]
`,
  },
  {
    id: "technical-docs-tutorial-intermediate",
    name: "Tutorial: Intermediate",
    category: "technical-docs",
    description: "Multi-component exercise with real constraints and test criteria.",
    tags: ["tutorial","intermediate","exercise","learning"],
    content: `# Tutorial — Intermediate: [System slice]

> **Prereq:** [beginner tutorial] *or* [6 months] using [Product]. **Outcome:** A working [integration slice].

## Scope & constraints
- You **must** use \`[v2 API]\` — *no* [legacy] endpoints
- **Data:** **do not** use real customer PII — *use* the provided **[fixture org]**
- **SLA to yourself:** [finish] within **[timebox]** — *pause* at checkpoints

## Architecture snapshot
\`\`\`mermaid
flowchart LR
  A[Client] --> B[[Product API]]
  B --> C[Worker]
  C --> D[(Queue)]
\`\`\`

*Explain in words:* [1 paragraph tying boxes to *your* task]

## Exercise
### Step A — [Name]
- Implement [A1], [A2] — *assert* with **[test ID / log line]**
### Step B — [Name] — *failure mode*
- Intentionally trigger **[error case]** then **recover** using **[doc link]**
### Step C — [Name] — *observability*
- Add [metric/log/trace] — view in [observability UI] — *capture* screenshot [not required] / **paste** request id

## Rubric (self-check)
| Criterion | Pass |
| --- | --- |
| Idempotent re-run | [no dupes] |
| Auth | [uses least scope] |
| Timeouts & retries | [backoff] visible |
| [Check 4] | [result] |

## Solution & diff
- **Branch/tag:** [reference] — *compare* *only after* you attempt — *spoiler* policy: [on honor]

## Extension (optional)
- [Harder] — [1 paragraph]
`,
  },
  {
    id: "technical-docs-tutorial-advanced",
    name: "Tutorial: Advanced",
    category: "technical-docs",
    description: "Deep dive: scaling, security edge cases, and custom automation.",
    tags: ["tutorial","advanced","expert","scale"],
    content: `# Tutorial — Advanced: [Hardening / scale path]

> For engineers comfortable with [Product APIs], [IaC], and **[production-like failures]**. **Time:** [2–4 h].

## Threat model (mini)
- **Asset:** [data X in env Y] — **adversary:** [insider, internet, bad dependency]
- **Controls you will implement:** [mTLS, key rotation, least privilege, circuit breaker]

## Lab topology
- **Accounts:** [dev/stage] — *same* *shape* as prod with **[smaller] quotas**
- **Dependencies:** [A], [B] — *versions pinned* in \`[lockfile]\`

## Scenarios
### 1) Surge (load)
- **Goal:** sustain **[RPS]** with p95 **[ms]** — *steps:* [k6/vegeta] script at \`[path]\` — *tune* [pool size, cache]

### 2) Degraded dependency
- **Chaos:** [block egress to] **[partner]** — *observe* **[fallback / DLQ / partial]** — *roll forward* after **[timeout policy]**

### 3) Key compromise (tabletop)
- **Rotate** \`[API key|JWT signing key]\` — *prove* **old** [requests fail] and **new** succeed — *time to safe:* **[SLO]**

## Artifacts to submit (internal)
- [Design note] — 1-pager: decisions + tradeoffs
- **Dashboard** links: [panel ids]
- **Runbook** update PR: [link or “N/A in sandbox”]

## Grading (coarse)
- **A:** All scenarios green + clear observability
- **B:** Works with acceptable tech debt *documented*
- **Rework:** *silent* data loss, *missing* [audit] trail

## Read next
- [How-to: set up monitoring] — [Architecture: scaling strategy]
`,
  },
  {
    id: "technical-docs-tutorial-code-along",
    name: "Tutorial: Code-along",
    category: "technical-docs",
    description: "Synchronous session with branches, timecodes, and checkpoints.",
    tags: ["tutorial","code-along","live","workshop"],
    content: `# Code-along: [Session title]

> **Format:** [live/recorded] **Duration:** [60 min] **Companion repo:** [url] \`[branch: codealong/main]\`

## Before class (5 min)
- Install: [Node N+, Docker, product CLI] per [setup doc]
- **Run:** \`[./scripts/verify.mjs]\` — *all green* = ready
- **Slack/Discord channel:** [link] — *Q&A* during *breakpoints*

## Agenda & timecodes
| Time | Topic | What you type |
| --- | --- | --- |
| 0:00 | Intro, goals | *watch* — **no** typing |
| 0:10 | Repo tour | \`[ls, tree shallow]\` |
| 0:25 | \`[feature A]\` | *follow* *Part 1* in \`[README#part-1]\` |
| 0:40 | \`[feature B] + test\` | *optional stretch* if ahead |
| 0:55 | Wrap, homework | *fill* *retro form* [link] |

## Instructor checkpoints (facilitator copy)
- **C1 (10m):** everyone has \`[version]\` — *if not* → [Triage: …]
- **C2 (25m):** *visible* [green test / UI state]
- **C3 (40m):** *pair* for [stuck] — *reveal* **hint 2** only after **[poll]**

## During-pause activities
- **3-min stretch** at [time]
- *Poll:* [Slido link] "Where are you: on-track / need help?"

## After class
- **Recording:** [URL] (expires: [date])  
- **PR template** to submit *your* variant: [link] — *review policy:* [peers/self]
`,
  },
  {
    id: "technical-docs-tutorial-video-companion",
    name: "Tutorial: Video companion notes",
    category: "technical-docs",
    description: "Chapters, commands from the video, and differences vs current UI.",
    tags: ["tutorial","video","learning","notes"],
    content: `# Video companion: [Title]

> **Video:** [URL] (length: [mm:ss]) **Captions:** [yes, languages] **Last reviewed with product:** [version]

## Chapters
| T | Section | Takeaway |
| --- | --- | --- |
| 0:00 | Intro & scope | [1 sentence] |
| 3:12 | Setup | [env vars, login] — *commands below* |
| 10:40 | [Feature A] | *UI path changed:* see *Diffs* |
| 24:00 | [Feature B] | [Caveat about limits] |
| 35:20 | Q&A (highlight) | *watch for* [idempotency detail] |

## Copy/paste: commands (verified [date])
\`\`\`bash
# macOS / Linux; see Windows tab in transcript
[export FOO=bar]
[product] auth login --profile [demo]
[product] [cmd] [args...]
\`\`\`

\`\`\`powershell
# Windows
$env:FOO = "bar"
# ...
\`\`\`

## UI diffs since recording
| Was (video) | Now ([version]) | What to do instead |
| --- | --- | --- |
| [old menu path] | [new path] | [2-step replacement] |
| [label X] | [renamed] | *same* underlying API |

## Knowledge check
- [ ] I can [outcome 1] without the video
- [ ] I can [outcome 2] with *only* this doc
- [ ] I know *when* to use [A] vs [B]

## Transcript
- [Download .vtt] — *search* for *keywords:* \`[error code]\`, \`[caveat]\` — *instructor email:* [for factual fixes]
`,
  },
  {
    id: "technical-docs-tutorial-workshop",
    name: "Workshop: Facilitator runbook",
    category: "technical-docs",
    description: "Agenda, materials, breakout prompts, and safety rails for a technical workshop.",
    tags: ["workshop","facilitator","training","agenda"],
    content: `# Workshop: [Name] (facilitator)

> **Audience:** [roles] (n=[15–30]) **Length:** [half-day] **Format:** *mix* of *demo*, *hands-on*, *debrief*.

## Learning objectives
- **O1:** [verb] *with* [tool]
- **O2:** [diagnose] *using* [signal]
- **O3:** [decide] *under* [constraint] — *evidence* [artifact]

## Prereq survey (D-7)
- *Send* [form link] — *gate:* [version], [OS], *comfort* 1–5 on [topic]

## Room & accounts
- **Projector:** 1080p min — *facilitator* [laptop] on [HDMI/USB-C]
- **Tables:** 4–5 people — *one* **[shared org]** per table — *creds* in [sealed envelope] / *QR login*

## Agenda (detailed)
| Block | Time | Modality | Content |
| --- | --- | --- | --- |
| A | 0:00–0:20 | demo | *happy path* + *pitfalls* |
| B | 0:20–1:20 | **hands-on** *solo* | [Exercise 1] — *TAs* roam |
| C | 1:20–1:35 | break | *photos opt-out sign* |
| D | 1:35–2:20 | breakouts (3 groups) | [Prompt cards printed] — *one* *scribe* each |
| E | 2:20–2:50 | share-out | 3 *mins* *each* *group* |
| F | 2:50–3:00 | survey + next steps | [link] + [office hours] |

## Material packs
- **URL zip:** [static hosting] *includes* *slides PDF*, *solutions* *locked* *until* [E]

## Safety rails
- *No* production keys — *use* fixtures — *TAs* *watch* for [PII paste] in screen shares
- *Incident* *during* *class:* [on-call] *phone* [X], *if* *region down* *read* *status* [Y]

## Facilitator debrief (internal)
- *What* *worked* / *flopped* : [retro doc template]
`,
  },
  {
    id: "technical-docs-tutorial-hands-on-lab",
    name: "Hands-on lab: Lab guide",
    category: "technical-docs",
    description: "Scenario-driven lab with objectives, success metrics, and teardown.",
    tags: ["lab","hands-on","exercise","practice"],
    content: `# Hands-on lab: [Scenario codename]

> **Lab time:** [90 min] **Environment:** [provisioned by vendor | bring-your-cloud] **Support:** *TA* in [room], *Slack* [ch]

## Scenario
- **You are:** [role] at **[company type]** *fixing* **[incident type]** *by* *adding* *guardrail* [G]
- **Start state:** *broken* [metric] and *open* *incident* \`[INC-000]\` *in* [toy] *system*

## Objectives
1. *Detect* [anomaly] *using* [tooling] — *prove* *with* *screenshot* of [query]
2. *Mitigate* *within* **[SLO minutes]** *without* *data* *loss* — *document* *rollbacks*
3. *Prevent* *recurrence* *with* *config* *change* + *alert*

## Artifacts
| Artifact | Path / location | Reviewer sign-off |
| --- | --- | --- |
| Runbook addendum | [repo path] | [SRE] |
| Dashboard | [Grafana/DD link] | [Oncall] |
| Post-incident *draft* | [template] | [EM] (optional) |

## Steps (hide until attempt)
*Students:* *do* *not* *open* *Hints* *until* *30* *min* *elapsed*.

1. *Orient* in [UI] — *map* *entities* to the architecture diagram.
2. *Reproduce* the issue with the safe load script \`[lab/scripts/repro.mjs]\`.
3. *Apply* fix *A* (config) then fix *B* (code) — in order: [dependency order].
4. *Validate* SLO recovery on dashboard panel \`[panelId]\`.

## Hints (after 30 min)
- **H1:** Check [queue depth] before scaling workers.
- **H2:** Rollback order is [B] then [A], not the reverse.
- **H3:** Search traces for \`[requestId]\` from step 2.

## Teardown
- Archive deliverables to \`[s3://lab/...]\` and reset the org: \`[lab admin reset --org [id]]\`.
`,
  },
  {
    id: "technical-docs-tutorial-kata",
    name: "Tutorial: Kata (deliberate practice)",
    category: "technical-docs",
    description: "Short, repeatable exercise with variations to build muscle memory.",
    tags: ["kata","practice","tutorial","drill"],
    content: `# Kata: [Name]

> **Time:** 20–40 min · **Skill:** [API design | debugging | performance] — repeat weekly.

## Given / When / Then
- **Given** [fixture, branch, org id]
- **When** you [action] (constraint: [docs only | no team chat])
- **Then** you meet [checklist: tests | OpenAPI | log line]

| Acceptance | |
| --- | --- |
| A | [criterion] |
| B | [criterion] |

## Variation A (harder)
- Change [input] to [edge case] — same acceptance.

## Variation B (degraded)
- Block [dependency] — use fallback from [doc link] — document recovery time.

## Retro (5 min)
- What will you reuse tomorrow? Post in [channel] with [template].

## Tag
- Solution branch (private): \`[kata/YYYY-MM/topic/solution]\`
`,
  },
  {
    id: "technical-docs-howto-deploy-aws",
    name: "How-to: Deploy to AWS",
    category: "technical-docs",
    description: "Runbook for production deployment on AWS with regions, IAM, and rollback.",
    tags: ["aws","deploy","infrastructure","how-to"],
    content: `# Deploy [Product] to AWS

> **Target:** [ECS/EKS/EC2/Lambda] in \`[region]\` with **[least-privilege] IAM** and [health checks + rollback].

## Prereqs
- AWS account: **[account id]**, *billing* [alert threshold]
- **CLI:** \`[aws --version], terraform/opentofu, kubectl\` as needed
- **Image:** \`[ECR url]:[tag]\` — *SBOM* attached in [link]

## Architecture choices
| Layer | Service | Rationale |
| --- | --- | --- |
| Compute | [ECS Fargate / EKS] | [ops burden vs cost] |
| Data | [RDS / Dynamo] | [consistency, RPO/RTO] |
| Ingress | [ALB + WAF] | [TLS, rules] |

\`\`\`text
# Example env
AWS_REGION=[us-east-1]
CLUSTER_NAME=[prod-cluster]
\`\`\`

## Deploy steps
1. **Build & push** image — *tag* \`[git sha]\`
2. **Plan** \`[terraform plan]\` — *peer review* for [state: s3+lock]
3. **Apply** during **[maintenance window]** — *or* *blue/green* with [target group swap]
4. **Migrate** [DB] if needed — *backup* \`[snapshot id]\` *before* * cutover*

## Post-deploy
- *Smoke* **[\`[health] /[ready]\`]** *from* *outside* *VPC* — [Route53 weighted]
- *Watch* **CloudWatch** *alarms* **[list]** — *PagerDuty* *route* *[team]*

## Rollback
- *Fast:* [revert to previous task definition] — *RTO* **[m] min**
- *Data:* [restore snapshot] *only* *if* *schema* *compatible* — *see* **[DR runbook]**
`,
  },
  {
    id: "technical-docs-howto-deploy-gcp",
    name: "How-to: Deploy to GCP",
    category: "technical-docs",
    description: "GKE or Cloud Run deployment with service accounts, VPC, and secrets.",
    tags: ["gcp","deploy","cloud-run","how-to"],
    content: `# Deploy [Product] to Google Cloud

> **Primary:** [Cloud Run / GKE Autopilot] in \`[project] / [region]\`.

## Prereqs
- **APIs enabled:** [list: run, container, sqladmin, ...]
- **Service account:** \`[sa@]roles/[minimal]\` — *WIF* for CI if [GitHub Actions]

\`\`\`bash
gcloud config set project [PROJECT_ID]
gcloud auth application-default login  # local only
\`\`\`

## Networking
- **VPC:** [connector / peering] for [private] [Cloud SQL / Redis]
- **Egress:** [Cloud NAT] — *deny* *0.0.0.0/0* *from* *SA* *except* [egress list]

## Deploy
1. \`[gcloud run deploy] | [skaffold run]\` with **\`[IMAGE]\`**
2. **Secrets** from **Secret Manager** *refs* — *never* *inline* in YAML
3. **HPA** / *min instances* = **[N]** for *latency* SLO

## Verify
- **Load test** [k6] *against* **[URL]** — p95 < **[ms]**
- **Audit:** *ensure* *SA* *cannot* *[forbidden action]* — *periodic* **[IAM recommender]**

## Rollback
- *Revisions:* [Cloud Run: traffic split] — *GKE:* *[helm rollback]*
`,
  },
  {
    id: "technical-docs-howto-deploy-azure",
    name: "How-to: Deploy to Azure",
    category: "technical-docs",
    description: "App Service, AKS, or Container Apps with managed identity and key vault.",
    tags: ["azure","deploy","aks","how-to"],
    content: `# Deploy [Product] on Azure

> **Landing zone:** [subscription], **region** \`[region]\` — **policy** *deny* *public* *blob* *unless* *[exception]*.

## Prereqs
- **SPN / MI:** \`[name]\` *roles:* **[Contributor? split to scoped]**
- **ACR** \`[registry].azurecr.io\` *with* *retention* *[days]*

\`\`\`bash
az account set --subscription [id]
az acr login -n [registry]
\`\`\`

## Pattern
- **App Service** *for* *simple* *web* — *or* **AKS** *for* *[scale / sidecars]*
- **Key Vault** *references* in *[ARM/Bicep]* — *rotation* *via* *Event Grid*

## Steps
1. **Build** *multi-stage* *Docker* — *scan* *with* *[Defender/ACR]*
2. **Deploy** \`[az deployment/helm upgrade]\` *with* *parameters* *from* *[key vault]*
3. **DB:** [Flexible Server] *+ firewall* *rules* *only* *[subnet]*

## Observability
- **App Insights** *sampling* *[rate]* — *confirm* *no* *PII* in *custom* *dimensions*

## Rollback
- **Slot swap** (App Service) *or* **AKS** *previous* *revision* *number*
`,
  },
  {
    id: "technical-docs-howto-deploy-vercel",
    name: "How-to: Deploy to Vercel",
    category: "technical-docs",
    description: "Serverless/edge app with env vars, preview deploys, and custom domains.",
    tags: ["vercel","deploy","serverless","how-to"],
    content: `# Deploy to Vercel

> For **[Next.js / static / serverless API]** in org **[\`[team]\` on Vercel]**.

## Connect repo
- **Import** [GitHub org/repo] — *Production* *branch* \`[main]\`
- **Root** *monorepo:* *set* *directory* \`[apps/web]\`

## Environment variables
| Name | Environment | Value source |
| --- | --- | --- |
| \`[API_URL]\` | **Production** | *encrypted* in dashboard |
| \`[PREVIEW_ONLY]\` | *Preview* | *optional* *feature* *flags* |

*Never* *commit* — *use* *Vercel* *secrets* *or* *integration* *with* *[env sync]*

## Domains
- **Production** \`[app.example.com]\` — *DNS* *CNAME* to **[cname.vercel-dns.com]**
- **Edge config** (if any): **[kv / middleware path]**

## Build settings
- **Node** **[20.x]**, *install* \`[pnpm i --frozen]\`, *output* *tracing* *enabled* for *[lambda size]*

## Checklist
- [ ] *Preview* *PR* *passes* **[e2e]**
- [ ] *Lighthouse* *budget* in **[CI]**
- [ ] *Security* *headers* *via* *[\`vercel.json\`]*

## Rollback
- *Instant:* *Promote* *previous* *deployment* *from* *Deployments* *tab* — *or* *\`[vercel rollback]\`*
`,
  },
  {
    id: "technical-docs-howto-deploy-railway",
    name: "How-to: Deploy to Railway",
    category: "technical-docs",
    description: "Container or Nixpacks deploy with services, variables, and volumes.",
    tags: ["railway","deploy","paas","how-to"],
    content: `# Deploy to Railway

> **Project** \`[name]\` — *stacks* *for* *API + worker +* *[managed DB if offered]*

## Prereqs
- **Install** *CLI* \`[npm i -g @railway/cli]\` — *\`[railway login]\`*

\`\`\`bash
cd [app-dir]
railway init
railway up
\`\`\`

## Services
- **\`[api]\`:** *public* *HTTP* *port* **[8080]**
- **\`[worker]\`:** *no* *public* *port* *—* *CRON* *or* *queue* *consumer*
- **\`[db]\`:** *plugin* *or* *external* *URL* *with* *TLS*

## Environment
- *Group* *variables* *per* *environment* **[dev/stage/prod]** — *reference* *shared* *\`[JWT_ISSUER]\`*
- *Attach* *volumes* *only* *for* **[cache/ ephemeral]** — *S3-compatible* for *durable* *files*

## Health
- *Define* **[health check path]** *—* *startup* *probe* *timeout* [s]

## Cost guardrails
- *Set* *usage* *limits* and *alarms* *in* *billing* *—* *scale* *to* *zero* *where* *safe*
`,
  },
  {
    id: "technical-docs-howto-cicd",
    name: "How-to: Set up CI/CD",
    category: "technical-docs",
    description: "Branch policy, test gates, deploy stages, and artifact promotion.",
    tags: ["cicd","pipeline","automation","how-to"],
    content: `# CI/CD for [Product]

> **VCS:** [GitHub/GitLab/ADO] — *trunk-based* *with* *short-lived* *feature* *branches*.

## Pipeline stages
| Stage | Triggers | Gates |
| --- | --- | --- |
| **CI** | *PR* *and* *main* push | *lint, unit, *[\`[typecheck]\`], *SAST* |
| **Build** | *main* *merge* | *SBOM* *+ *image* *sign* *[\`[cosign]\`]* |
| **Deploy: staging** | *auto* *from* *main* | *smoke* *+ *contract* *tests* |
| **Deploy: prod** | *tag* *or* *manual* *approval* | *change* *window* *+ *canary* |

\`\`\`yaml
# .github/workflows/[example].yml  (excerpt)
on:
  push:
    branches: [ main ]
jobs:
  [job]:
    steps: [ checkout, test, build, deploy ]
\`\`\`

## Secrets
- *Use* *[OIDC]* to cloud — *not* *long-lived* *keys* in *CI*

## Artifacts
- *Immutable* *tags* \`[sha]\` *only* in *registry* *—* *promote* *same* *digest* *across* *stages*
`,
  },
  {
    id: "technical-docs-howto-monitoring",
    name: "How-to: Configure monitoring",
    category: "technical-docs",
    description: "SLIs, dashboards, SLOs, and alert routing to reduce false positives.",
    tags: ["monitoring","observability","slo","how-to"],
    content: `# Configure monitoring

> **Stack:** [Datadog / Grafana+Prometheus / Cloud-native] for **[service]**.

## Golden signals
- **Rate / Errors / Duration / Saturation** — *exemplars* *for* *high* *cardinality* *sampling* on **[endpoint]**
- *Dashboard* **UIDs:** **[links]** — *owner* *team* *[oncall]*

\`\`\`text
# Example SLI query (adapt)
histogram_quantile(0.95, sum(rate([metric]_seconds_bucket[5m])) by (le, route))
\`\`\`

## SLOs
| Objective | Target | Error budget / month |
| --- | --- | --- |
| API availability | [99.9%] | [43m] |
| p95 latency | [< [ms]] | *[burn* *rate* *alerts]* |

## Alerting
- *Route* *by* *severity* — *P1* *pages* *only* *[symptoms]* *not* *causes* *unless* *[rare]*
- *Runbook* *link* *required* *in* *every* *page*

## Synthetic checks
- *From* *multiple* *regions* *—* *auth* *via* *dedicated* *test* *user* *with* *least* *scope*
`,
  },
  {
    id: "technical-docs-howto-logging",
    name: "How-to: Set up logging",
    category: "technical-docs",
    description: "Structured logs, PII redaction, retention, and log-based metrics.",
    tags: ["logging","observability","security","how-to"],
    content: `# Set up logging

> **Transport:** *stdout* JSON in **[prod]** — *ship* *to* **[sink]** with **[TLS]**.

## Log schema
\`\`\`json
{ "t": "ISO-8601", "lvl": "info|warn|error", "svc": "[name]", "trace": "[id]", "msg": "...", "ctx": { } }
\`\`\`

- **PII** *fields* *deny-list* *or* *mask* *before* *emit* — *compliance* *[GDPR/…]*

## Correlation
- **Trace id** in *HTTP* *response* *header* \`[X-Request-Id]\` *and* *every* *log* *line* *when* *available*
- *Join* *with* *metrics* *via* *shared* *labels* \`[service, version, env]\`

## Retention & cost
- **Hot** [3d] **Warm** [30d] **Cold** *archive* [1y] — *sampling* *on* *debug* *after* *volume* *spike*
`,
  },
  {
    id: "technical-docs-howto-auth",
    name: "How-to: Implement authentication",
    category: "technical-docs",
    description: "Sessions vs JWT, OIDC, passwordless, and service accounts for apps.",
    tags: ["authentication","security","oauth","how-to"],
    content: `# Implement authentication

> **Model:** *Users* via **[OIDC / password + MFA]**, *services* via **[mTLS / API key / workload identity]**.

## User auth (browser)
- **Redirect** *to* *IdP* — *\`[state]\`+*\`[PKCE]\`*
- **Session** *cookie* — \`[HttpOnly, SameSite, Secure, path]\` — *rotation* *on* *privilege* *change*

\`\`\`text
# Callback URL allowlist
https://[app]/auth/callback
\`\`\`

## APIs
- **Bearer** *JWT* *—* *validate* *iss, aud, exp, nbf* *and* *\`[jku]\` / *JWKS* *pinning* *policy**
- *Optional* *step-up* *MFA* *for* *[sensitive* *operations]*

## Service-to-service
- *Short-lived* *tokens* *from* **[STS]** — *no* *shared* *password* *between* *services*

## Audit
- *Log* *auth* *decisions* *with* *\`[reason code]\` — *redact* *secrets*
`,
  },
  {
    id: "technical-docs-howto-payments",
    name: "How-to: Add payments",
    category: "technical-docs",
    description: "PCI scope, webhooks, idempotency, and reconciliation for billing flows.",
    tags: ["payments","billing","pci","how-to"],
    content: `# Add payments

> **Provider:** [Stripe/Adyen/…] in **[mode: test|live]**.

## Scope
- *Never* *touch* *PAN* *—* *use* *[hosted fields / tokenization]*
- **Webhook** *endpoint* *signed* *with* *\`[whsec_]\` *—* *verify* *before* *mutations*

\`\`\`ts
// Idempotency-Key on every user-initiated call
headers["Idempotency-Key"] = [stable key per user+intent+amount];
\`\`\`

## States
- **State machine** *chart* in *[appendix link]* — *map* *provider* *status* *→* *internal* *\`[OrderStatus]\`

## Reconciliation
- *Nightly* *job* *vs* *provider* *—* *alert* *on* *mismatches* *>* *[threshold]*
- *Refunds* *require* *dual* *control* *in* *prod* *if* *amount* *>* *[$N]*
`,
  },
  {
    id: "technical-docs-howto-emails",
    name: "How-to: Send emails",
    category: "technical-docs",
    description: "Transactional email with templates, bounces, and deliverability best practices.",
    tags: ["email","deliverability","notifications","how-to"],
    content: `# Send email

> **Provider:** [SendGrid/SES/Postmark] — *domain* *\`[mail.example.com]\` *verified* *with* *SPF+DKIM+DMARC*.

## Message types
| Type | Template id | Throttle / consent |
| --- | --- | --- |
| *Password reset* | \`[tmpl_…]\` | *rate* *limit* *per* *IP* |
| *Invoice* | \`[…]\` | *record* *legal* *basis* |

\`\`\`http
POST /v3/mail/send
{ "from": { "email": "noreply@..." }, "subject": "...", "personalizations": [...] }
\`\`\`

## Bounces & complaints
- *Webhook* *updates* *user* *\`[emailStatus]\` — *suppression* *list* *wins* *over* *sends*
- *Retry* *5xx* *only* *with* *backoff* — *4xx* *fix* *payload*

## Content
- *Plain* *text* *alternative* *required* — *link* *tracking* *[off]* *in* *regulated* *orgs*
`,
  },
  {
    id: "technical-docs-howto-websockets",
    name: "How-to: Use WebSockets in production",
    category: "technical-docs",
    description: "Sticky sessions, backpressure, auth at connect, and safe fan-out patterns.",
    tags: ["websocket","realtime","scaling","how-to"],
    content: `# Use WebSockets in production

> **Path:** *Upgrade* *to* *[\`[wss://…]\`]* *behind* *[\`[ALB/ingress]\`]* *with* *optional* *sticky* *sessions*.

## Auth
- *Issue* *short* *lived* *ticket* *over* *HTTPS* *first* *—* *validate* *in* *first* *WS* *frame* *or* *subproto*

\`\`\`text
# Forbidden
Query string secrets in logs, unbounded room joins
\`\`\`

## Scale
- **Pub/sub** *bus* for *multi-node* *fan-out* — *partition* *by* *\`[roomId] mod N\`*
- **Backpressure:** *drop* *to* *sampled* *updates* *if* *client* *read* *buffer* *full* — *log* *metric* *[dropped]*
`,
  },
  {
    id: "technical-docs-howto-search",
    name: "How-to: Implement search",
    category: "technical-docs",
    description: "Indexing, analyzers, ranking, and operational playbooks for search services.",
    tags: ["search","elasticsearch","opensearch","how-to"],
    content: `# Implement search

> **Engine:** [OpenSearch/Elastic/Typesense/Meili] *cluster* *in* *\`[vpc]\`**.

## Ingest
- *CDC* *from* *[DB]* *→* *queue* *→* *bulk* *index* *with* *\`[version]\` *field* for *ordering*
- *Language* *analyzer* *per* *\`[locale]\` *field*

## Query
- **Hybrid** *BM25* *+* *[vector?]* *—* *filters* *as* *\`[term]\` *queries* *on* *keyword* *fields* on *\`[status]\`*
- *Pagination* *cursor* *only* *—* *avoid* *deep* *offset* on *large* *indexes*

\`\`\`json
{ "query": { "bool": { "must": [...], "filter": [{ "term": { "orgId": "..." } }] } } }
\`\`\`

## Ops
- *Forcemerge* *policy* *—* *snapshot* *to* *S3* *before* *major* *mapping* *change*
- *SLO* *on* *p95* *query* *latency* *[ms]* *at* *\`[QPS]\`*
`,
  },
  {
    id: "technical-docs-howto-caching",
    name: "How-to: Add caching",
    category: "technical-docs",
    description: "Cache keys, TTLs, invalidation, and stampede protection.",
    tags: ["caching","redis","performance","how-to"],
    content: `# Add caching

> **Backends:** [Redis/Memcached/in-process] *—* *never* *cache* *per-user* *secrets* *without* *encryption* *+ *scope* in *key*.

## Key design
\`\`\`text
[env]:[service]:[entity]:[id]:[projectionVersion]
\`\`\`

- **TTL:** *stale* *while* *revalidate* *if* *acceptable* *—* *else* *hard* *TTL* *[s]*

## Invalidation
- *Event-driven* *on* *writes* *—* *version* *bump* *in* *DB* *for* *cheap* *miss* *detection* on *read*

\`\`\`ts
if (row.cacheVersion > cachedVersion) { /* refresh */ }
\`\`\`

## Thundering herd
- *Jitter* *TTL* *+ *singleflight* *on* *miss* *per* *key* *in* *app* *layer* — *or* *request* *coalescing* *in* *[proxy]*
`,
  },
  {
    id: "technical-docs-howto-cdn",
    name: "How-to: Set up a CDN",
    category: "technical-docs",
    description: "Origins, cache rules, TLS, and purge strategy for static and API edge caching.",
    tags: ["cdn","edge","cache","how-to"],
    content: `# Set up a CDN

> **Vendor:** [CloudFront/Fastly/Akamai] *—* *origins* *[\`[s3, alb]\`]* *with* *[origin shield]* if *[high* *rps]*.

## Behaviors
| Path | TTL | Vary on |
| --- | --- | --- |
| \`/static/*\` | *long* | *none* (hash in filename) |
| \`/api/*\` | *short* *or* *bypass* | *Authorization* |

- **Gzip/Brotli** *at* *edge* — *cert* *for* **\`[static.example.com]\`**

\`\`\`text
# Purge: use tag invalidation for deploy of [v]
tag: [release-tag]
\`\`\`

## Security
- *WAF* *rules* *—* *geo* *block* *if* *not* *needed* *—* *rate* *limit* *anon* *IPs*
`,
  },
  {
    id: "technical-docs-howto-db-optimize",
    name: "How-to: Database optimization",
    category: "technical-docs",
    description: "Indexes, query plans, vacuum/maintenance, and read replicas.",
    tags: ["database","performance","sql","how-to"],
    content: `# Database optimization

> **Engine:** [Postgres 16 / MySQL 8] on **[managed: RDS/Cloud SQL]**

## Read path
- **EXPLAIN (ANALYZE, BUFFERS)** for **[slow query] —* *add* *composite* *index* *on* *\`[tenant_id, created_at desc]\`*
- *Covering* *index* *for* *hot* *list* *queries* *—* *watch* *write* *amplification* on *high* *churn* *tables* on *\`[table]\`

\`\`\`sql
-- Example (adapt)
CREATE INDEX CONCURRENTLY idx_items_t_c ON items (tenant_id, created_at DESC) INCLUDE (id, title);
\`\`\`

## Write path
- *Batch* *inserts* *where* *safe* *—* *partition* *by* *time* *if* *> [TB]*

## Ops
- **Autovacuum** *tune* for *[high* *update]* *tables* — *repack* *during* *window* *if* *bloat* *> [threshold]*
- **Replicas** *for* *read-only* *dashboards* *—* *lag* *alert* *>* *[s]*
`,
  },
  {
    id: "technical-docs-howto-rate-limit-impl",
    name: "How-to: Implement rate limiting (app)",
    category: "technical-docs",
    description: "Token bucket, sliding window, and distributed stores with correct clocks.",
    tags: ["rate-limit","redis","reliability","how-to"],
    content: `# Implement rate limiting (application)

> **Algoritm:** *token* *bucket* *per* *[\`[apiKey|ip|user]\`]* *in* *[\`[Redis key]\`]*.

\`\`\`text
# Key
[env]:rl:[dimension]:[id]
\`\`\`

- **Response:** *return* *429* *+* *\`[Retry-After]\` *+* *remaining* *headers* *per* *[design doc]**

## Clocks
- *NTP* *synced* *nodes* *—* *if* *using* *wall* *clock* *in* *Lua* *script* *treat* *skew* *as* *[\`[±ms]\`]*

## Test
- *Property* *tests* *for* *burst* *then* *steady* *—* *chaos* *with* *Redis* *failover* *degrades* *to* *[\`[fail open|closed]\`]* *policy**
`,
  },
  {
    id: "technical-docs-howto-file-upload-impl",
    name: "How-to: Add file uploads (app)",
    category: "technical-docs",
    description: "Validation, storage, signed URLs, and malware scanning in the pipeline.",
    tags: ["upload","files","security","how-to"],
    content: `# Add file uploads (application)

> **Policy:** *Allow* *[mime] only]* *and* *max* *[N]* *MB* *—* *scan* *before* *attach* to *[\`[Record]\`]*.

## Flow
1. *Client* *requests* *\`[POST /uploads/sessions]\`*
2. *Server* *returns* *presigned* *URL* *+* *required* *headers* *+ *\`[sha256] expected\`*
3. *After* *PUT* *complete* *+ *\`[antivirus]\` *pass* *—* *link* *file* *to* *resource*

\`\`\`ts
if (!allowedMime.has(file.type)) return 400;
if (file.size > MAX_BYTES) return 413;
\`\`\`

## Storage
- *Private* *bucket* *—* *short-lived* *signed* *GET* *for* *download* *—* *audit* *log* *who* *accessed*
`,
  },
  {
    id: "technical-docs-faq-product",
    name: "FAQ: Product",
    category: "technical-docs",
    description: "High-level product questions, positioning, and what is not included.",
    tags: ["faq","product","overview","sales"],
    content: `# Product FAQ

> For **[Product name] [version]**. *Last* *updated* *[date]*

## What problem does it solve?
- **[Value]:** [2–3 sentences] — *see* *also* *[comparison guide]*

## What is in / out of scope (today)?
| In scope | Out of scope (roadmap / partner) |
| --- | --- |
| [A] | [B] — *workaround* *[link]* |
| [C] | [D] |

## Who is the primary user?
- **[Persona]**: *[typical* *workflows* — *roles* *needed* *from* *IT]**

## Uptime, regions, and data residency
- **SLA:** [link] — *RPO/RTO* *for* *[offering tier]**
- **Regions** \`[list]\` — *data* *at* *rest* *in* *[place]* *—* *subprocessors* *in* *[DPA]**

## How do I get an account or trial?
- **Sign-up:** [URL] — *enterprise* *contact* *[form]* — *onboarding* *expectations* *[days]*

## Where can I request features?
- **[Portal/forum] — *voting* *and* *public* *roadmap* *cadence* *[quarterly]**
`,
  },
  {
    id: "technical-docs-faq-technical",
    name: "FAQ: Technical",
    category: "technical-docs",
    description: "Deep technical how/why, limits, and compatibility for practitioners.",
    tags: ["faq","technical","limits","compatibility"],
    content: `# Technical FAQ

> **Stack:** [languages, frameworks, OS] — *supported* *to* *version* *N* *only* as *listed*.

## Protocols and APIs
- **We support** \`[REST, GraphQL, gRPC: …]\` — *legacy* *SOAP* *: [no]*
- **Webhooks** *delivery* *semantics* *—* *at-least-once* *—* *dedup* *by* *\`[event id]\`**

## Limits
| Item | Free | Enterprise |
| --- | --- | --- |
| API req/min | [N] | [M] or *custom* |
| Max [resource] size | [MB] | [GB] |
| [Concurrent jobs] | [J] | [J'] |

\`\`\`text
# Example hard limit
Request body: [4 MB] except [upload session]
\`\`\`

## Compatibility
- **Browser** [min versions] — *no* *IE* *support* *as* *of* *[date]**
- **Mobile** *apps* *—* *parity* *with* *web* *for* *[list]* *—* *known* *gaps* *in* *[AR feature]*

## Self-hosting / private cloud
- *Supported* *images* *—* *minimum* *k8s* *—* *required* *egress* *allowlist* — *[if not offered, say "not available"]**
`,
  },
  {
    id: "technical-docs-faq-billing",
    name: "FAQ: Billing & plans",
    category: "technical-docs",
    description: "Plans, overages, invoices, and tax for finance stakeholders.",
    tags: ["faq","billing","pricing","invoices"],
    content: `# Billing FAQ

> **Provider:** [Stripe/Billing system] **Currency:** *[USD, …]* **Tax** *[VATEU: reverse charge, …]*

## How are we charged?
- **Model:** [per seat / per usage / hybrid] — *billing* *cycle* *[\`[monthly|annual]\`]*

| Meter | What counts as 1 |
| --- | --- |
| [API call] | [definition] — *excludes* *[\`[health]\`]]* *200s* *if* *documented* |
| [Storage GB-mo] | *Daily* *average* *×* *rate* *—* *see* *invoice* *line* *detail* *download* *CSV* *—* *available* in *[path]* |

## Overage
- *Soft* *cap* *email* *at* *[%]* — *hard* *stop* *optional* *—* *requires* *[\`[setting]\` in [console]*

## Invoices
- *PDF* *and* *CSV* *—* *PO* *number* *field* *—* *credit* *card* *vs* *wire* *—* *Net* *[N]*

## Cancellations and refunds
- *Cancel* *anytime* *—* *access* *until* *period* *end* *—* *refund* *policy* *per* *[TOS* *section* *[x]]* — *pro-rated* *only* *if* *[jurisdiction* *rule]*

## Dunning
- *If* *payment* *fails* *—* *retry* *schedule* *—* *service* *restrictions* *after* *[D]* *days*
`,
  },
  {
    id: "technical-docs-faq-onboarding",
    name: "FAQ: Onboarding & accounts",
    category: "technical-docs",
    description: "Invites, SSO, and first-week expectations for new teams.",
    tags: ["faq","onboarding","sso","accounts"],
    content: `# Onboarding FAQ

> **Time-to-value target:** *[N]* *days* for *[persona]**.

## How do I invite my team?
- **Admin* *path* *—* *[\`[Settings → People → Invite]\`]* *—* *roles* *\`[admin|member|read]\` — *SSO* *just-in-time* *vs* *SCIM* *optional**

## Can we use SSO (SAML/OIDC)?
- *Plans* *that* *include* *SSO* *—* *IdP* *metadata* *upload* *—* *attribute* *mapping* *\`[email, groups→roles]\` — *MFA* *enforced* *at* *IdP* *recommended* *—* *break-glass* *local* *account* *policy**

## Import from [legacy tool]?
- *Supported* *formats* *—* *id* *mapping* *—* *dry-run* *with* *report* *in* *[\`[.csv* *errors* *file]\`]*

## What happens in the first 7 days?
- **Day* *1* *—* *connect* *[\`[integration]\`]**
- *Day* *2–3* *—* *configure* *[\`[policy|workflow]\`]**
- *Day* *4–5* *—* *run* *[\`[pilot]\`]**

## Deprovisioning users
- *On* *remove* *—* *tokens* *revoke* *—* *audit* *retains* *[\`[N]* *years* *configurable]**
`,
  },
  {
    id: "technical-docs-faq-security",
    name: "FAQ: Security",
    category: "technical-docs",
    description: "Vulnerability handling, encryption, and customer responsibilities.",
    tags: ["faq","security","encryption","compliance"],
    content: `# Security FAQ

> **Our posture:** *[least privilege, default deny, defense in depth]*

## Is data encrypted in transit and at rest?
- **In transit** *TLS* *1.2+* *—* *optional* *mTLS* *for* *[B2B API]**
- *At* *rest* *—* *AES-256* *KMS* *managed* *keys* *—* *per-tenant* *CMK* *on* *[plan]*

\`\`\`text
# External evidence
- Pen-test summary: [year] (under NDA)
- SOC2 Type II: [link or request process]
\`\`\`

## How do I report a vulnerability?
- *Email* **[security@]** *or* *H1* *program* **[URL] —* *PGP* *key* *—* *SLA* *for* *ack* *[h]* *and* *fix* *cadence* *per* *severity* *matrix**

## What is shared responsibility?
- *You* *manage* *[\`[IAM in your project]\`]* *and* *[\`[secrets rotation]\`]* — *we* *manage* *[\`[control plane hardening]\`]**

## DDoS and abuse
- *Edge* *rate* *limits* *—* *WAF* *rules* *—* *report* *abuse* *to* *[abuse@]**
`,
  },
  {
    id: "technical-docs-faq-compliance",
    name: "FAQ: Compliance",
    category: "technical-docs",
    description: "GDPR, HIPAA eligibility, and data processing locations.",
    tags: ["faq","compliance","gdpr","privacy"],
    content: `# Compliance FAQ

> **DPA** *[link]* **Sub-processors** *[link]* *updated* *[\`[quarterly]\`]*

## GDPR
- *Roles* *—* *we* *are* *[\`[processor|controller]\`]* for *[feature]* — *DPA* *signed* *via* *[\`[flow]\`]* — *SCC* *if* *transfer* *outside* *EEA* *per* *[\`[module]\`]**

## Data location and transfers
- *Region* *selection* *at* *org* *creation* *—* *replication* *cross-region* *[\`[optional|not]\`]**

## Can we use for HIPAA/PHI?
- *BAA* *available* *on* *[\`[plan]\`]* *—* *configuration* *checklist* *—* *features* *not* *permitted* *with* *PHI* *marked* *in* *[\`[doc]\`]**

## Retention
- *Default* *retention* *per* *data* *class* *—* *deletion* *API* *and* *SLA* *—* *legal* *hold* *process*

## Certifications
| Cert | Status | Report access |
| --- | --- | --- |
| ISO 27001 | [yes/no] | [NDA/portal] |
| SOC2 | [type] | [request] |
| FedRMP | [n/a/roadmap] | — |
`,
  },
  {
    id: "technical-docs-faq-integration",
    name: "FAQ: Integrations & ecosystem",
    category: "technical-docs",
    description: "Which tools connect, maintenance windows, and app marketplace support.",
    tags: ["faq","integrations","ecosystem","connectors"],
    content: `# Integration FAQ

> **Catalog** *[link]* *—* *community* *vs* *official* *connectors* *badges*

## Which [CRM/IdP/…] are supported?
- **Tier 1* *—* *[\`[Slack,…]\`]* *with* *SLA* *on* *breaking* *changes* *—* *Tier* *2* *best-effort**

## How often do integrations break?
- *Vendor* *API* *changes* *—* *our* *version* *pinning* *policy* *—* *incident* *comms* *via* *[\`[status+email]\`]*

## Scopes and least privilege
- *OAuth* *scopes* *we* *request* *—* *why* *each* *—* *optional* *scopes* *for* *[\`[feature]\`]**

\`\`\`text
# Example: minimal Slack scopes
[commands, chat:write, …]
\`\`\`

## Can we build a private integration?
- *API* *key* *types* *—* *webhook* *IP* *allowlist* *—* *sample* *code* *repo* *[url]*

## Deprecation
- *Public* *timeline* *for* *[\`[legacy* *connector]\`] —* *migration* *guide* *[link]**
`,
  },
  {
    id: "technical-docs-faq-migration",
    name: "FAQ: Migration from other products",
    category: "technical-docs",
    description: "Downtime, export formats, and what cannot be moved automatically.",
    tags: ["faq","migration","import","switching"],
    content: `# Migration FAQ

> **From** *[competitor]* *to* *[Product] —* *typical* *project* *length* *[weeks]**

## Can you migrate automatically?
- *Supported* *objects* *—* *id* *mapping* *—* *manual* *steps* *for* *[\`[permissions|labels]\`]* *—* *tooling* *[\`[CLI* *or* *services partner]\`]**

## How much downtime?
- *Read-only* *window* *—* *DNS* *\`[CNAME\` *swap* *—* *rollback* *plan* *RTO* *[m]*

## Can we run in parallel (dual write)?
- *Supported* *patterns* *—* *conflict* *resolution* *rule* *[\`[last* *writer* *wins|source* *wins]\`]**

## Data we cannot migrate
- *[\`[binary blobs without export API]\`] —* *workaround* *—* *cost* *implications* *if* *manual* *—* *contact* *[\`[PS]\`]**

## Post-migration validation
- *Report* *[\`[row* *counts* *+ checksum]\`] —* *UAT* *script* *checklist* *—* *sign-off* *template* *[Confluence* *page]**
`,
  },
  {
    id: "technical-docs-troubleshoot-common-errors",
    name: "Troubleshooting: Common errors",
    category: "technical-docs",
    description: "Symptom to cause matrix for the most frequent error strings and HTTP codes.",
    tags: ["troubleshooting","errors","support","debugging"],
    content: `# Troubleshooting: Common errors

> **Log query** *—* *[\`[requestId, errorCode, userId, route]\`]* *—* *retention* *[days]**

| Symptom | Code / message | Most likely cause | Next step |
| --- | --- | --- | --- |
| Blank screen after login | \`[AUTH_SESSION_EXPIRED]\` | Clock skew or blocked cookies | *Check* *[\`[SameSite]\`],* *NTP* *—* *try* *incognito* *—* *clear* *site* *data* |
| \`[400] on POST\` | *[\`[FIELD_REQUIRED]\`]* | Client missing field | *Compare* *with* *[\`[OpenAPI]\`] —* *fix* *[\`[body.path]\`]**
| \`[429] everywhere\` | *rate_limited* | Test traffic or misconfigured key | *Inspect* *[\`[X-RateLimit-*\` headers* —* *raise* *quota* *or* *fix* *client* *loop* |
| *Webhook* *never* *arrives* | *verify* *fail* or *2xx* *not* *from* *app* | *Bad* *signature* *or* *WAF* *block* | *Verify* *raw* *body* *HMAC* *—* *open* *firewall* *for* *[\`[provider* *IPs]* —* *replay* *test* *with* *[\`[curl]\`]**

\`\`\`text
# Quick triage order
1) Request id
2) User/org context
3) Upstream [dependency] health
4) Recent deploy? Check [change log] correlation
\`\`\`

## Still stuck
- *Open* *ticket* *with* *[\`[HAR]+timestamp]\`* *or* *[\`[server* *logs* *bundle]\`]**
`,
  },
  {
    id: "technical-docs-troubleshoot-performance",
    name: "Troubleshooting: Performance",
    category: "technical-docs",
    description: "Latencies, load patterns, and profiling hooks for the platform and client.",
    tags: ["troubleshooting","performance","latency","profiling"],
    content: `# Troubleshooting: Performance

> **SLO* *p95* *[\`[API* *latency]\`]* *<* *[X]* *ms* *—* *track* *burn* *rate* *[\`[dashboard* *link]**

## If p95 is high
- **Is it us or an integration?** *Use* *[\`[trace* *waterfall] —* *if* *external* *> [Y]%* *of* *span* *—* *open* *vendor* *ticket* *with* *[\`[trace* *id]*
- *Database* *—* *top* *queries* *by* *[\`[total* *time\`]* *in* *[\`[pg_stat]\`] —* *missing* *index* *candidate* *[\`[table.col]\`]*

\`\`\`text
# Example: compare regions
[region: latency table]
\`\`\`

## Client slowness
- *Lighthouse* *profile* *—* *LCP* *—* *large* *bundle* *—* *enable* *[\`[code* *split* *route]**

## Caching false hits
- *Check* *[\`[Age]\`] *and* *[\`[Vary] **headers* *—* *stale* *HTML* *served* *from* *CDN* *—* *purge* *by* *tag* *[\`[release]\`]**

## Load tests
- *Use* *[\`[k6* *script* *in* *repo/perf]\`] —* *ramp* *per* *step* *—* *never* *against* *prod* *without* *approval* *[\`[ticket* *ID\`]* *
`,
  },
  {
    id: "technical-docs-troubleshoot-networking",
    name: "Troubleshooting: Networking",
    category: "technical-docs",
    description: "DNS, TLS, firewalls, and mTLS for hybrid connectivity issues.",
    tags: ["troubleshooting","network","dns","tls"],
    content: `# Troubleshooting: Networking

> *Symptoms:* *timeout,* *SSLEOF,* *\`[ECONNREFUSED\`],* *partial* *TLS* *handshakes* *—* *always* *capture* \`[openssl s_client] output when safe.*

## Checklist
1. *DNS* *resolution* *—* *[\`[dig +trace]\` vs* *authoritative* *—* *TTL* *after* *cutover* *stale* *resolver* *cache* *in* *[\`[X]* *hours]**
2. *Certificate* *chain* *—* *full* *chain* *served* *—* *LE* *E1* *root* *in* *trust* *store* *on* *old* *devices* *?*
3. *Firewall* *egress* *from* *[\`[subnet]\`] —* *allow* *[\`[443* *to* *host* *list* *in* *allowlist* *doc\`]*  *—* *NO* *IP* *pinning* *unless* *doc’d**

\`\`\`bash
# Safe external check (read-only)
curl -Iv https://[api-host]/[health]
\`\`\`

## PrivateLink / peering
- *If* *[\`[PrivateLink\`]* *SNI* *mismatch* *—* *set* *[\`[custom* *target* *hostname\`] —* *verify* *route* *table* *for* *[\`[VPC* *CIDR* *overlap\`]*

## mTLS
- *Client* *cert* *expired* *or* *wrong* *intermediate* *—* *server* *logs* *show* *[\`[alert* *47\`] —* *rotate* *per* *[\`[runbook* *link\`]**
`,
  },
  {
    id: "technical-docs-troubleshoot-authentication",
    name: "Troubleshooting: Authentication",
    category: "technical-docs",
    description: "SSO, token expiry, and scope mismatches in auth flows.",
    tags: ["troubleshooting","auth","sso","tokens"],
    content: `# Troubleshooting: Authentication

> **Log** *\`[iss, aud, sub, exp, nbf, scope, client_id\`] —* *never* *paste* *tokens* *in* *public* *channels* *—* *use* *[\`[secure* *paste* *tool\`]**

## 401 on API after login works in browser
- *App* *uses* *cookie* *session* *but* *API* *expects* *Bearer* *—* *use* *[\`[BFF* *pattern]\`] or* *PKCE* *SPAs* *with* *[\`[silent* *renew* *limits\`]*  *per* *[\`[browser* *3rd* *party* *cookie* *policy\`]**

\`\`\`text
# OIDC: common mismatch
aud expected [client-id-abc]  token aud [api-aud-xyz] -> fix in IdP
\`\`\`

## SSO: redirect loop
- *Check* *[\`[SameSite, cookie* *domain, proxy* *headers* *X-Forwarded-Proto/Host\`] —* *IdP* *clock* *vs* *SP* *—* *skew* *>* *[2m\`]*  *fails* *SAML* *\`[NotOnOrAfter\`]*

## Scopes
- *403* *with* *message* *[\`[insufficient* *scope\`] —* *add* *[\`[read:org]\`] in* *consent* *screen* *—* *admin* *must* *approve* *enterprise* *pre-auth**

## API keys
- *Key* *in* *wrong* *org* *—* *prefix* *[\`[pk_live* *vs* *pk_test\`] —* *IP* *allowlist* *blocks* *CI* *runner* *—* *rotate* *to* *remove* *compromise* *—* *revoke* *in* *[\`[console* *> keys\`]**
`,
  },
  {
    id: "technical-docs-troubleshoot-database",
    name: "Troubleshooting: Database",
    category: "technical-docs",
    description: "Connection storms, lock waits, and replication lag triage for operators.",
    tags: ["troubleshooting","database","postgres","locks"],
    content: `# Troubleshooting: Database

> **Read-only* *replica* *lag* *alert* *>* *[N]* *s* *—* *action* *tree* *below* *applies* *to* *[\`[Postgres]\`]**

## High lock wait time
- *Find* *blocker* *with* *[\`[pg_locks* *+_ pg_stat_activity\`] —* *long* *open* *transactions* *from* *[\`[app* *pool* *misconfig\`] —* *set* *[\`[idle_in_transaction* *session* *timeout\`]*  *tighter* in *[\`[ms\`]*

\`\`\`sql
-- Example: blockers
SELECT * FROM pg_stat_activity WHERE state = 'active' ORDER BY query_start;
\`\`\`

## Connection limit exceeded
- *Pgbouncer* *in* *transaction* *mode* *—* *reduce* *max* *connections* *per* *pod* *or* *raise* *instance* *class* *—* *chart* *[\`[connections* *vs* *cpu\`]**

## Replication lag
- *Check* *[\`[wal* *send/recv\`] *rates* *—* *large* *batch* *job* *on* *primary* *—* *move* *to* *read* *replica* *aware* *routing* *or* *pause* *job**

## Bloat
- *Dead* *tuple* *ratio* *>* *[N]%* *on* *[\`[table\`] —* *autovacuum* *tuning* *—* *hot* *update* *split* *into* *[\`[detail* *table+FK\`]**

## Data corruption (rare)
- *If* *checksum* *error* *—* *failover* *per* *[\`[runbook* *RTO\`] —* *do* *not* *delete* *WAL* *manually* *—* *call* *[\`[DBA* *on* *call\`]**
`,
  },
  {
    id: "technical-docs-troubleshoot-deployment",
    name: "Troubleshooting: Deployment & releases",
    category: "technical-docs",
    description: "Failed rollouts, image pull issues, and config drift in clusters.",
    tags: ["troubleshooting","deploy","kubernetes","releases"],
    content: `# Troubleshooting: Deployment

> *Deploy* *tool* *[\`[helm* */ argo / ci]\`] —* *see* *[\`[release* *version\`] *on* *pod* *label* *[\`[app.version\`]*  *—* *compare* *to* *[\`[git* *tag\`]*  *expected* *

## ImagePullBackOff
- *Registry* *auth* *—* *[\`[imagePullSecret\`] *in* *namespace* *—* *cross* *account* *ECR* *policy* *—* *tag* *exists* *?* *typos* *in* *\`[values.yaml\`]*  *

\`\`\`text
# Quick checks
kubectl -n [ns] describe pod [name]
\`\`\`

## CrashLoopBackOff
- *App* *exit* *code* *[\`[1]\` vs* *OOME* *—* *memory* *limit* *too* *low* *—* *fix* *[\`[resources* *limits* *vs* *requests\`] —* *readiness* *probe* *fails* *when* *DB* *down* *—* *split* *liveness* / *readiness* *

## Config drift
- *\`[helm* *diff* *or* *kubectl* *diff\`] —* *if* *manual* *kubectl* *edits* *—* *freeze* *—* *move* *to* *gitops* *in* *[\`[Qn\`]*  *

## Rollback did not work
- *DB* *migration* *irreversible* *—* *forward* *fix* *required* *—* *feature* *flag* *\`[kill* *switch* *new* *code\`] —* *see* *[\`[release* *policy* *doc\`]**
`,
  },
  {
    id: "technical-docs-troubleshoot-browser",
    name: "Troubleshooting: Browser compatibility",
    category: "technical-docs",
    description: "Polyfills, extension conflicts, and storage quotas for end users.",
    tags: ["troubleshooting","browser","compatibility","frontend"],
    content: `# Troubleshooting: Browser

> *Supported* *browsers* *[\`[Chrome* *M+,* *Edge, Safari, Firefox* *E\`]*  *—* *not* *supported* *on* *[\`[old* *WebView\`]*  *for* *[\`[in-app* *browsers* *X\`]*  *

## Blank or broken UI
- *Disable* *extensions* *[\`[adblock* *+ privacy\`] —* *try* *private* *window* *—* *check* *[\`[Content* *Security* *Policy* *violations* *in* *console\`]**

## Storage quota exceeded
- *Error* *[\`[QuotaExceededError\`] —* *User* *clears* *site* *data* *or* *we* *compress* *cached* *payloads* *—* *limit* *[\`[IndexedDB* *usage* *per* *feature\`]*  *in* *[\`[next* *release\`]**

## CORS
- *Browser* *blocks* *[\`[preflight\`] *—* *server* *must* *allow* *[\`[OPTIONS\`] *+ \`[Access-Control-Allow-*\`]*  for *[\`[origin* *list\`] —* *dev* *proxy* *via* *[\`[vite* *config\`]**

## WebRTC / WebGL
- *Some* *corporate* *proxies* *block* *UDP* *—* *fallback* *to* *[\`[TURN* *server* *only\`] —* *if* *WebGL* *disabled* *use* *[\`[canvas* *software* *mode\`] *flag* in *[\`[settings* *> advanced\`]**
`,
  },
  {
    id: "technical-docs-troubleshoot-mobile",
    name: "Troubleshooting: Mobile apps",
    category: "technical-docs",
    description: "Push delivery, background sync, and OS-specific issues.",
    tags: ["troubleshooting","mobile","ios","android"],
    content: `# Troubleshooting: Mobile

> **Builds* *[\`[iOS* *M+,* *Android* *API* *L+\`] —* *min* *OS* *noted* *in* *store* *listing* *

## Push not received
- *FCM* *vs* *APNs* *tokens* *—* *expired* *device* *token* *—* *user* *disabled* *permission* *—* *check* *[\`[delivery* *receipt* *API* *status\`] —* *payload* *too* *large* *for* *[\`[APNs* *4KB\`]*  *

\`\`\`text
# Token lifecycle
[register, refresh, invalidate on logout, multi-device]
\`\`\`

## Background sync fails
- *iOS* *BGTask* *scheduling* *—* *app* *must* *call* *[\`[setMinimumBackgroundFetch\`] —* *Android* *Doze* *—* *exempt* *via* *[\`[user* *action* *only\`] —* *document* *reliable* *sync* *when* *foreground* *

## Deep link does not open app
- *Android* *App* *Links* *[\`[asset* *links* *JSON\`] *host* *mismatch* *—* *iOS* *universal* *links* *[\`[AASA* *path\`] *include* *[\`[trailing* *slash* *rule\`]*  *

## Crash on startup
- *Symbolicated* *stack* *in* *[\`[Sentry* */ Firebase\`] —* *if* *native* *lib* *ABI* *mismatch* *in* *[\`[bundle* *split* *or* *M1* *sim* *x86\`]*  *—* *fix* *in* *[\`[hotfix* *H.N\`]**
`,
  },
  {
    id: "technical-docs-install-source",
    name: "Installation: From source",
    category: "technical-docs",
    description: "Clone, bootstrap toolchains, and build from a development checkout.",
    tags: ["install","source","dev","build"],
    content: `# Install from source

> **Stack:** [Rust/Node/Go/…] — *supported* *OS* *[\`[mac, linux, wsl2\`]*  *—* *time* *to* *first* *build* *~* *[M]* *min* *

## 1) Clone
\`\`\`bash
git clone [repo]
cd [name]
git submodule update --init --recursive
\`\`\`

## 2) Toolchains
- **Version* *pins* *—* *[\`[asdf* */ mise / nvm / rustup\`] *—* *see* *\`[.tool-versions\`]** / *\`[rust-toolchain.toml\`]*  *

\`\`\`bash
# example
[tool] install
\`\`\`

## 3) Dependencies
- *System* *packages* *(\`[apt* *install* *…\`])*  *—* *optional* *GPU* *drivers* *for* *[\`[local* *ML* *tests\`]*  *

## 4) Build
\`\`\`bash
[make all | cargo build | pnpm build]
\`\`\`

## 5) Test
- *\`[make test]\` *—* *integration* *needs* *[\`[docker* *compose* *up* *-d\`]*  *in* *[\`[services/]\`]**

## 6) Local config
- *Copy* *\`[.env.example* *→* *.env\`] —* *generate* *keys* *with* *\`[script]\` *—* *never* *commit* *secrets* *

## Dev tips
- *Watch* *mode* *[\`[pnpm* *dev* */* *cargo* *watch\`] —* *pre-commit* *hooks* *if* *[\`[.pre-commit* *config* *present\`]*  *
`,
  },
  {
    id: "technical-docs-install-package-manager",
    name: "Installation: Package manager",
    category: "technical-docs",
    description: "Install the CLI or library via registries: npm, pypi, cargo, and lockfiles.",
    tags: ["install","package-manager","cli","dependencies"],
    content: `# Install with a package manager

> **Name:** \`[package]\` *on* *[\`[registry]\`] —* *verifiable* *checksums* *—* *Air-gapped* *note* *at* *end* *

## [npm / pnpm / yarn]
\`\`\`bash
[corepack enable] # if needed
npm i -g [package]@[version]
[product] --version
\`\`\`

## [pip / uv] (python)
- **Extras* *—* *[\`[pip* *install* *'[pkg][torch]\`]* *—* *compatible* *Python* *[\`[3.11* *–* *3.12\`]*  *

\`\`\`bash
uv tool install [name]==[version]
\`\`\`

## [homebrew] (macOS)
\`\`\`bash
brew install [tap]/[formula]
\`\`\`

## Locking in apps
- *Commit* *\`[package-lock.json* */* *pnpm-lock* */* *Cargo.lock* */* *uv.lock\`] *per* *policy* in *[\`[CONTRIBUTING.md\`]*  *

## Verify integrity
- *\`[npm* *audit* */* *pip* *check\`] *—* *SLSA* *or* *cosign* *on* *release* *assets* *[\`[link* *to* *provenance* *if* *any\`]*  *

## Offline / private registry
- *Mirror* *[\`[Verdaccio* */* *Artifactory\`] *—* *set* *[\`[.npmrc* */* *pip* *index-url\`]*  *—* *document* *in* *[\`[enterprise* *doc\`]*  *
`,
  },
  {
    id: "technical-docs-install-docker",
    name: "Installation: Docker",
    category: "technical-docs",
    description: "Compose, images, healthchecks, and volume layout for local or single-node use.",
    tags: ["install","docker","compose","containers"],
    content: `# Install with Docker

> **Registries* *[\`[ghcr.io* */* *docker* *hub* *with* *org\`] —* *signed* *images* *when* *available* *—* *SBOM* *link* in *[\`[release* *page\`]*  *

\`\`\`bash
docker pull [org]/[image]:[tag]
docker run --rm -p [port]:[port] -e [ENV]=[value] [org]/[image]:[tag]
\`\`\`

## docker compose (local)
\`\`\`yaml
# services: api, worker, [db], [redis] — from [compose file path]
# volumes: [named volumes for data], bind mount for [dev] only
\`\`\`

- **Healthchecks* *—* *[\`[curl* *-f* *http* *localhost:*/*/health\`] *interval* *[\`[10s\`],* *retries* *[\`[3\`]*  *

## Ports & secrets
| Service | Port | Secret ref |
| --- | --- | --- |
| api | 8080 | *env* *file* *only* *on* *host* |
| db | 5432 | *not* *exposed* *publicly* in *prod* *compose* *profile* *—* *local* *only* in *dev* *profile* *[\`[--profile* *dev\`]*  *

## Upgrades
- *Pin* *tags* *\`[major.minor]\` *—* *read* *[\`[BREAKING* *migrations* *in* *compose* *v2* *->* *v3\`]*  *if* *any* *—* *backup* *volumes* *before* *[\`[docker* *compose* *down* *-v\`]*  *
`,
  },
  {
    id: "technical-docs-install-binary",
    name: "Installation: Binary release",
    category: "technical-docs",
    description: "Download static binaries, verify checksums, and install system-wide.",
    tags: ["install","binary","release","cli"],
    content: `# Install from binary

> **Download* *dir* *[\`[releases* */* *assets* *page* *or* *S3* *mirror\`] —* *gpg* *or* *cosign* *where* *published* *—* *min* *glibc* *[\`[X.Y\`]*  *or* *musl* *build* for *[\`[alpine* *users\`]*  *

\`\`\`bash
[OS=linux; ARCH=amd64]
curl -fL -o [bin] "https://[...]/[product]_[v]_[OS]_[ARCH][.ext]"
# verify (example with sha256)
[sha256sum|shasum -a 256] [bin] | [cmp with published CHECKSUMS]
[chmod +x [bin] && mv [bin] [install_path]]
\`\`\`

| Platform | Package | Notes |
| --- | --- | --- |
| **Windows** | \`[.zip|msi]\` | *Use* *PowerShell* *\`[Get-FileHash\`]*  *—* *install* *to* *[\`[Program* *Files* */* *user* *local* *bin\`]*  |
| **macOS** | \`[.tar.gz|pkg]\` | *Notarize* *gatekeeper* *—* *arm64* *vs* *x86* *fat* *binary* *flag* in *name* *[\`[…-darwin-arm64\`]*  |

## PATH
- *\`[install* *to* *~/.*local/bin\`] *or* *[\`[brew* *--prefix\`]*  *and* *add* *to* *shell* *rc* *file* *—* *Windows* *\`[User* *Path\`]*  *GUI* *or* *[\`[setx\`]*  *

## Auto-update
- *Built-in* *\`[version* *check\`] *—* *opt-in* *—* *CI* *users* *should* *pin* *with* *[\`[checksum\`]*  *in* *[script]**
`,
  },
  {
    id: "technical-docs-install-cloud-marketplace",
    name: "Installation: Cloud marketplace",
    category: "technical-docs",
    description: "Subscribe via AWS/GCP/Azure marketplace and connect billing to the product.",
    tags: ["install","marketplace","aws","billing"],
    content: `# Install from a cloud marketplace

> **Listings* *—* *[\`[AWS* *MP* *product* *ID* */* *GCP* *private* *offer* */* *Azure* *plan\`] —* *entitlements* *sync* *on* *[\`[hourly|subscription\`]*  *

## Onboarding flow
1. *Click* *[\`[Subscribe* *on* *[marketplace]\`]*  *in* *[\`[cloud* *console\`]*  *—* *pick* *plan* *[\`[seat|usage\`]*  *—* *IAM* *role* *for* *entitlement* *if* *required**
2. *Open* *[\`[SaaS* *fulfillment* *URL* *from* *listing\`]*  *to* *link* *[\`[cloud* *account* *id\`] *to* *[\`[Product* *org\`]*  *
3. *SSO* *or* *invite* *first* *admin* *—* *verify* *in* *[\`[Billing* *>* *Invoices* *show* *[marketplace\`]*  *id* *line** *

## Entitlement problems
- *If* *[\`[pending* *for* *>24h\`] *—* *open* *marketplace* *support* *ticket* *with* *[\`[subscription* *ID\`]*  *—* *reconciler* *job* *runs* *[\`[every* *15* *min\`]*  *

## Cancel / private offers
- *From* *marketplace* *only* *—* *not* *SaaS* *UI* *—* *or* *contact* *[\`[partner* *manager\`]*  *for* *\`[private* *offer* *terms\`]*  *

## Diagram
\`\`\`mermaid
flowchart LR
  M[Cloud marketplace] --> P[[Product] billing]
  P --> A[Entitlement service]
  A --> O[Your org in app]
\`\`\`
`,
  },
  {
    id: "technical-docs-migration-v1-to-v2",
    name: "Migration: API v1 to v2",
    category: "technical-docs",
    description: "Map endpoints, field renames, and a phased client rollout plan.",
    tags: ["migration","versioning","api","breaking-changes"],
    content: `# Migration: [Product] v1 → v2

> *Goal:* *no* *data* *loss* *—* *rollback* *possible* *until* *[\`[cut* *date\`]*  *using* *feature* *flags* *—* *see* *[\`[compat* *matrix* *PDF\`]*  *

| v1 | v2 | Note |
| --- | --- | --- |
| \`[GET /v1/items]\` | \`[GET /v2/items]\` | *Pagination* *cursor* *only* *—* *remove* *[\`[offset\`]*  *
| *field* *\`[renamed]\` *|* *\`[new* *name\`]* | *JSON* *shape* *change* in *[\`[OpenAPI* *v2\`]*  *

\`\`\`ts
// Adapter idea (pseudocode)
const v1Response = /* ... */;
return mapV1ItemToV2(v1Response);
\`\`\`

## Phased rollout
1. **Dual* *read* *—* *clients* *accept* *either* *shape* *via* *[\`[Content-Negotiation* *or* *feature* *flag\`]**
2. **Write* *v2* *only* *for* *new* *data* *—* *backfill* *job* *[\`[job* *id* *monitor\`]*  *
3. **Decommission* *v1* *on* *[\`[date\`]*  *—* *HTTP* *\`[410\` on* *v1* *routes* *with* *link* to *[\`[sunset* *doc\`]*  *

## Testing
- *Contract* *tests* *against* *[\`[golden* *fixtures* *dir\`]*  *—* *include* *edge* *cases* *[\`[null, empty* *string,  max* *length\`]*  *

## Support
- *Migration* *office* *hours* *[\`[calendar* *link\`] —* *queue* *depth* *visible* in *[\`[status\`]*  *page* *as* *[\`[v1* *trailing* *traffic%]*  *
`,
  },
  {
    id: "technical-docs-migration-database",
    name: "Migration: Database",
    category: "technical-docs",
    description: "Online vs offline cutover, backfills, and verification queries.",
    tags: ["migration","database","cutover","replication"],
    content: `# Database migration: [From engine] → [To engine or schema]

> *RTO* *[\`[M]* *min\`] *RPO* *[\`[S]* *sec\`]*  *—* *rollback* *via* *[\`[restore* *snapshot* *id\`]*  *captured* *at* *[\`[T0\`]*  *

## Strategies
- **Option* *A* *—* *Logical* *replication* *or* *CDC* *([Debezium* */* *native* */* *DMS\`* ) *—* *low* *downtime**
- *Option* *B* *—* *pg_dump* */* *restore* */* *major* *version* *[\`[upgrade\`]*  *—* *brief* *lock* *on* *cutover* *

\`\`\`text
# Cutover runbook
T-60m: pause batch jobs, confirm replication lag < [N]s
T-15m: enable read-only on [source]
T-0:   repoint [connection string] in [secret]
T+5m:  run verification SQL below
T+10m: disable read-only, resume jobs
\`\`\`

## Schema transforms
- *Map* *types* *[\`[time* *zone* *columns* */* *UUID* *v7* */* *enum\`]*  *per* *[\`[migration* *N.sql\`]*  *—* *order* *matters* *—* *test* *in* *staging* *with* *[\`[prod-snapshot* *sanitized\`]*  *

\`\`\`sql
-- checksum rows after cutover
SELECT [tenant_id], COUNT(*), max([updated_at]) FROM [table] GROUP BY 1;
\`\`\`

## Drills
- *Tabletop* *quarterly* *—* *unplug* *network* *for* *[\`[replica\`] *and* *verify* *failover* *—* *doc* *in* *[\`[DR* *exercise* *id\`]*  *
`,
  },
  {
    id: "technical-docs-migration-cloud-provider",
    name: "Migration: Cloud provider",
    category: "technical-docs",
    description: "Move accounts and data between cloud vendors with a dependency map.",
    tags: ["migration","cloud","multicloud","infrastructure"],
    content: `# Cloud provider migration: [A] → [B]

> *Drivers:* *[\`[cost* */* *data* *residency* */* *feature* *parity\`]*  *—* *freeze* *new* *dependencies* *on* *A-specific* *services* *not* *available* *on* *B* *or* *replace* *with* *[\`[abstraction* *layer* *M\`]*  *

## Dependency map
| Current (A) | Target (B) | Migration approach |
| --- | --- | --- |
| *[\`[S3\`]*  | *[\`[GCS* *or* *Blob\`]*  | *rclone* */* *native* *transfer* *job* *with* *CRC* *compare* *—* *see* *[\`[bytes* *transferred* *dashboard\`]*  *
| *[\`[RDS* *+* *Aurora\`]*  | *[\`[Spanner* *or* *Cloud* *SQL\`]*  | *DMS* */ *\`[import* *via* *dump\` —* *cutover* *as* in *[\`[DB* *migration* *doc\`]*  *

\`\`\`mermaid
flowchart TB
  A[App on A] -->|move container images| B[App on B]
  A -->|data sync| S[(Object store)]
\`\`\`

## Network
- *VPN* *or* *PrivateLink* *peering* *during* *sync* *—* *tight* *NACL* *to* *[\`[ops* *CIDR* *only\`]*  *

## DNS & TLS
- *Lower* *[\`[TTL* *to* *60\`]*  *3* *days* *before* *—* *validate* *cert* *on* *B* *in* *[\`[staging* *name\`]*  *—* *flip* *CNAME* *at* *[\`[T0\`]*  *

## Exit checklist
- [ ] *Decommission* *A* *backups* *per* *[\`[retention* *policy* *exception\`]*  *approved* *by* *[\`[legal\`]*  *
- [ ] *Remove* *A* *IAM* *roles* *—* *prove* *no* *cross* *cloud* *egress* *in* *[\`[NPM* *cost* *view\`]*  *
`,
  },
  {
    id: "technical-docs-migration-framework",
    name: "Migration: Application framework",
    category: "technical-docs",
    description: "Upgrade e.g. Next.js, Rails, or Spring with codemods and test matrix.",
    tags: ["migration","framework","upgrade","refactor"],
    content: `# Framework migration: [X major] → [Y major]

> *Risk:* *[\`[breaking* *router* *API* */* *DI* *container* *changes* */* *auth* *middleware\`]*  *—* *allocate* *[\`[S]* *eng-weeks* *+ *QA\`]*  *—* *pin* *deps* in *[\`[renovate* *pr\`]*  *

## Inventory
- *Search* *for* *deprecated* *imports* *[\`[grep* *pattern* *list* *in* *repo* */* *eslint* *rule* *ids* */* *compiler* *warnings* *\\]**

\`\`\`bash
# example
[tool] [codemod] [path] --[flags]
\`\`\`

## Migration steps
1. **Dep* *bump* *in* *[\`[feature* *branch\`] —* *CI* *with* *[\`[matrix* *node* *LTS\`]*  *only* *on* *patch* *first**
2. **Fix* *type* *errors* *—* *enable* *[\`[strict* *mode* *incremental\`]*  *file* *by* *file* *if* *needed* *—* *document* *\`[// @allow-legacy* *exception\`]*  *rare* *sparingly* *
3. **Replace* *[\`[removed* *hook* *API\`] *with* *[\`[new* *pattern* *link* *to* *guide\`]*  *

## Tests
- *Unit* *+* *integration* *+* *[\`[e2e* *in* *CI* *against* *docker* *compose* *or* *k8s* *smoke\`]*  *—* *flaky* *rate* *must* *stay* *<* *[\`[0.1%* *per* *suite\`]*  *

## Rollout
- *Feature* *flag* *\`[framework* *rollout%]* *in* *[\`[edge* *config* */* *LaunchDarkly\`]*  *—* *rollback* *is* *flag* *off* *if* *no* *schema* *migration* *occurred* *
`,
  },
  {
    id: "technical-docs-migration-language",
    name: "Migration: Programming language / runtime",
    category: "technical-docs",
    description: "Move a service between language versions with FFI and strangler patterns.",
    tags: ["migration","language","runtime","polyglot"],
    content: `# Language/runtime migration: [older] → [newer]

> *Example:* *Python* *3.8* *→* *3.12* *or* *Node* *18* *→* *20* *—* *binary* *extensions* *must* *rebuild* *—* *native* *ABI* *check* in *CI* *matrix* *[\`[glibc* *vs* *musl\`]*  *

## Inventory native deps
- *List* *\`[wheel* */* *node* *prebuilds* */* *JNI\` —* *verify* *support* *for* *target* *runtime* *on* *[\`[ARM* *+ x86* *CI\`]*  *

\`\`\`text
# Version-specific breaks
- [stdlib removals]
- [default encoding changes]
- [new warnings as errors in CI?]
\`\`\`

## Strangler
- *Extract* *[\`[hot* *path* *as* *a* *gRPC* *microservice\`] *in* *new* *lang* *—* *treat* *as* *black* *box* *with* *contract* *tests* *—* *delete* *old* *code* *when* *[\`[traffic* *100%* *+ 2* *weeks* *stable\`]*  *

## Rollout
- *Canary* *per* *[\`[cluster* *or* *cell\`] —* *auto* *rollback* *on* *[\`[error* *rate* *>\` SLO* —* *save* *JIT* *profiles* *if* *[\`[warmup* *sensitive\`]*  *

## Learning plan
- *Workshop* *recordings* *—* *lint* *with* *[\`[ruff* *\\|* *eslint* *with* *new* *plugin\`]*  *in* *[\`[CI\`]*  *on* *first* *PR* *touching* *each* *module* *—* *pair* *for* *[\`[security* *crypto* *changes\`]*  *
`,
  },
  {
    id: "technical-docs-architecture-system-overview",
    name: "Architecture: System overview",
    category: "technical-docs",
    description: "Context diagram, major subsystems, and trust boundaries at a glance.",
    tags: ["architecture","overview","context","diagrams"],
    content: `# System overview — [Product]

> **Audience:** *new* *engineers* *and* *security* *reviewers* — *not* *a* *deployment* *runbook* *—* *see* *[deployment* *for* *hosts]*

\`\`\`mermaid
flowchart TB
  U[Users & API clients] -->|HTTPS| G[API gateway / WAF]
  G --> S[Service mesh / ingress]
  S --> SVC[[Core service]]
  SVC --> DB[(Primary DB)]
  SVC --> Q[[Queue / bus]]
  Q --> W[Workers]
\`\`\`

## Subsystems
| Subsystem | Responsibility | SLO (summary) | Owner |
| --- | --- | --- | --- |
| **\`[ingest\`]** | *Accept* *writes* *—* *validate* *schema* *—* *emit* *events* *—* *[\`[p99* *<\`]* | *[team]* |
| **\`[index\`]** | *Search* *index* *rebuild* *—* *[\`[freshness* *<]* | *[team]* |
| **\`[notifier\`]** | *Push* *emails* *+* *webhooks* *—* *at-least-once* *delivery* *—* *[\`[retry* *policy\`]*  | *[team]* |

## Trust boundaries
- **Unauthenticated* *to* *[\`[gateway\`]* *—* *only* *public* *routes* *[\`[list* *in* *OAS\`]*  *
- **Service-to-service* *—* *[\`[mTLS* *+\` *SPIFFE* *IDs* *—* *no* *lateral* *movement* *without* *[\`[policy* *X\`]*  *

## Non-goals (this doc)
- *Per-table* *schema* *—* *use* *[\`[data* *dictionary* *doc\`]*  *—* *sequence* *details* *—* *see* *[\`[sequence* *diagram* *doc\`]*  *
`,
  },
  {
    id: "technical-docs-architecture-component-diagram",
    name: "Architecture: Component diagram",
    category: "technical-docs",
    description: "Logical components, their interfaces, and dependency rules.",
    tags: ["architecture","components","modularity","c4"],
    content: `# Component architecture

> *Notation* *C4* *level* *2* *—* *code* *modules* *may* *map* *1:1* *or* *N:1* *to* *containers* *in* *[\`[C4* *L3* *in* *k8s* *map\`]*  *

\`\`\`mermaid
flowchart LR
  subgraph [Bounded context A]
    A1[Module: auth] -->|HTTP| A2[Module: org]
  end
  subgraph [Bounded context B]
    B1[Module: search]
  end
  A2 -->|gRPC| B1
\`\`\`

| Component | Public API (stable) | Consumes (allowed) | Must not import |
| --- | --- | --- | --- |
| \`[package/auth]\` | \`[UserSession, Policy]\` | *[\`[org/...]\`]*, *shared/* | *\`[package/payments* *directly\`]*  |
| *[\`[search/indexer\`]*  | *[\`[Index* *events\`]*  | *[\`[bus* *subscription\`]*, *config* *—* *[\`[no* *SQL* *from* *HTTP* *handlers\`]*  |

## Versioning
- *Modules* *publish* * semver* *—* *deprecated* *API* *[warning* *+ *ADRs* *link]**

## Test doubles
- *In* *CI* *—* *[\`[wiremock* */* *testcontainers\`] *per* *component* *boundary* *—* *forbid* *[\`[sleep* *in* *tests* *>\`0ms* *except* *[\`[retry* *helper\`]*  *
`,
  },
  {
    id: "technical-docs-architecture-data-flow",
    name: "Architecture: Data flow",
    category: "technical-docs",
    description: "How data moves through ingestion, storage, and export with classification.",
    tags: ["architecture","data-flow","pipeline","privacy"],
    content: `# Data flow — [End-to-end]

> **Data classes:** *Public* *|* *Internal* *|* *Confidential* *|* *Restricted* *—* *see* *[\`[handling* *matrix\`]*  *—* *this* *page* *is* *flow* *only* *

\`\`\`mermaid
flowchart LR
  S[Source] -->|PII? [yes] strip before log| I[Ingestion API]
  I -->|append-only| A[(Object store: encrypted)]
  I -->|normalized row| T[(OLTP)]
  T -->|CDC| Srh[(Search index)]
  Srh -->|query| U[User browser]
\`\`\`

| Stage | Where PII can appear | Minimization |
| --- | --- | --- |
| *Ingest* | *Request* *body* *fields* *[\`[email* */* *name* */* *address\`]*  | *Store* *only* *[\`[hashed* *email* *+\` *reversible* *vault* *ref* *if* *needed* *for* *support* *only*] |
| *Logs* | *None* *—* *[\`[request* *id* *+\` *redacted* *fields* *only* *—* *[\`[pseudonymous* *user* *id\`]*  |
| *Analytics* | *Event* *[\`[feature* *used, duration\`]*  *—* *no* *raw* *content* *—* *[\`[DMP* *consent* *flag* *=\`1] |

## Exports
- *Customer* *export* *—* *async* *job* *—* *signed* *URL* *—* *audit* *row* in *[\`[export_audit\` table]*  *

## Retention
- *Drop* *[\`[A]* *and* *B\`]* *on* *[\`[N]* *day* *schedule* *—* *legal* *hold* *overrides* *—* *see* *[\`[legal* *runbook\`]*  *
`,
  },
  {
    id: "technical-docs-architecture-sequence-diagram",
    name: "Architecture: Sequence diagram (pattern)",
    category: "technical-docs",
    description: "Document a critical user journey with lifelines, alt blocks, and failure cases.",
    tags: ["architecture","sequence","uml","reliability"],
    content: `# Sequence: [User journey name]

> **ID:** *[\`[SEQ-00\`]*  *—* *related* *APIs* *[\`[GET* */* *POST* *links\`]*  *—* *idempotency* *key* *on* *side* *effects* *where* *marked* *

\`\`\`mermaid
sequenceDiagram
  actor U as User
  participant B as Browser
  participant A as API
  participant Q as Queue
  participant W as Worker
  U->>B: [action]
  B->>A: [HTTP] + Idempotency-Key: [k]
  alt validation fails
    A-->>B: 400 + error
  else ok
    A->>Q: enqueue job
    A-->>B: 202 + jobId
  end
  Q-->>W: deliver
  W->>A: [callback / internal] update [status]
\`\`\`

| Step | Invariant / timeout | Compensating action |
| --- | --- | --- |
| *Enqueue* | *must* *be* *[\`[at-least-once\`,* *de-dupe* *by* *[\`[job* *id\`]*  | *Re-process* *safe* *or* *mark* *[\`[dead* *letter\`]*  |
| *User* *notification* *email* *—* *best-effort* *—* *if* *[\`[SMTP* *down\`]*  *N* *times*  | *Retry* *with* *[\`[exponential* *backoff\` + *in-app* *banner* *fallback*  |

## Failure note
- *If* *[\`[clock* *skew\`]*  *—* *JWT* *[\`[nbf\`]*  *fails* *—* *see* *troubleshoot* *auth* *—* *not* *shown* *as* *alt* *block* *if* *rare* *—* *link* *instead* *—* *[\`[FAQ\`]*  *
`,
  },
  {
    id: "technical-docs-architecture-deployment-diagram",
    name: "Architecture: Deployment diagram",
    category: "technical-docs",
    description: "Runtime mapping to clusters, cells, and regions for ops teams.",
    tags: ["architecture","deployment","kubernetes","cells"],
    content: `# Deployment view — [Service]

> **Environments* *[\`[dev* */* *stage* */* *prod\`]*  *—* *prod* *is* *[\`[N]* *active* *[\`[cell\`]*s*  *in* *[\`[regions* *A,B\`]:**  *—* *one* *chart* *per* *cluster* *owner* in *[\`[Grafana* *folder* *…\`]*  *

\`\`\`mermaid
flowchart TB
  subgraph Region [r1]
    subgraph k8s [EKS/AKS/GKE: cluster id]
      ing[ingest] -->|same AZ DB| p[(Primary)]
      w[workers] -->|outbox| p
    end
  end
  r2[Region r2: cold standby + async replica]
\`\`\`

| Cell | What runs | Scaled by | Draining |
| --- | --- | --- | --- |
| \`[c1\`]*  | *[\`[stateless* *API* *+ *worker* *pool* *A\`]*  | *HPA* *on* *[\`[CPU* *+\` *RPS* *from* *ingress*  | *Set* *[\`[drain* *=true\` in* *[\`[cell* *configmap\`]*  *—* *wait* *for* *[\`[queue* *depth* *0\` for* *[T]*  |

## Data placement
- **Primary* *in* *[\`[region* *with* *largest* *write* *share\`]*  *—* *read* *replica* *in* *[\`[region* *B\`]*  *for* *[\`[dashboard* *readers* *only\`]*  *—* *lag* *SLO* *[\`[N]* *s* *max* *—* *alert* *in* *[\`[panel* *…\`]*  *

## Deploy mechanics
- *Helm* *release* *[\`[chart* *1.2\` —* *values* *per* *cell* *in* *git* *path* *[\`[cells/…/values.yaml\` —* *Argo* *sync* *policy* *[\`[manual* *vs* *auto\`]:**  *—* *per* *[\`[RTO* *RPO\` in* *cell* *runbook* *—* *see* *[\`[diaster* *recovery\` if* *regional* *outage* *playbook* *required*]**
`,
  },
  {
    id: "technical-docs-architecture-network-topology",
    name: "Architecture: Network topology",
    category: "technical-docs",
    description: "VPCs, subnets, peering, and security groups for the production footprint.",
    tags: ["architecture","network","vpc","zero-trust"],
    content: `# Network topology — [Estate]

> **CIDR* *planner* *—* *no* *overlap* *for* *future* *peering* *—* *this* *doc* *is* *[\`[region* *eu-west-1* *exemplar* */* *repeat* *per* *active* *region\`]*  *

\`\`\`text
# Example layout
10.[env].0.0/16  main VPC
  10.x.0.0/20    public: ALB, NAT
  10.x.16.0/20   private-app: EKS nodes
  10.x.32.0/20   data: RDS, Redis
\`\`\`

| Path | From | To | Port | SG rule id |
| --- | --- | --- | --- | --- |
| *Admin* *SSH* *jump* *—* *discouraged* *—* *use* *[\`[SSM* *Session* *Manager\`]*  *instead*  | *[\`[bastion* *SG\`]*  | *[\`[nodes* *+\` *tag* *[\`[role* *=…\`]*  | 22 | *[\`[sg* *rare\` or* *closed*] |
| *App* *→* *DB*  | *[\`[app* *SG\`]*  | *[\`[rds* *SG\`]*  | 5432 | *[\`[sg* *\`+ ref] |

## Peering
- *To* *[\`[partner* *VPC* *for* *PrivateLink\` on* *service* *[\`[name\`]*  *—* *routes* *in* *[\`[TGW* *\\|* *peering* *route* *tables* */* *NFW\` if* *required*]**

## Egress
- *Default* *deny* *0.0.0.0/0* *from* *app* *—* *only* *via* *[\`[NAT* *in* *public* *subnet* */* *Egress* *gateway\` to* *[\`[allowlisted* *destinations* *doc\`]*  *—* *break-glass* *ticket* *for* *[\`[widen* *egress* *>\`0* *days* *max*]**

## ZTNA
- *No* *VPN* *to* *prod* *by* *default* *—* *access* *via* *[\`[Okta* *→* *AWS* *SSO* *→* *IAM* *role* *assume\` to* *[\`[read-only* *prod* *role\`]*  *—* *session* *recorded* *in* *[\`[cloudtrail* */* *vendor* *log\`]*  *
`,
  },
  {
    id: "technical-docs-architecture-security-architecture",
    name: "Architecture: Security architecture",
    category: "technical-docs",
    description: "Threat model summary, controls, and dependency on IdP and KMS.",
    tags: ["architecture","security","threat-model","compliance"],
    content: `# Security architecture

> **StrIDE* *light* *—* *STRIDE* *full* *in* *[\`[threat* *model* *repo* *link* */* *LUCRA\` *if* *customer* *shared*]**

| Threat | Mitigation (design) | Evidence |
| --- | --- | --- |
| *Spoofing* *IdP* *users* | *OIDC* *+ *SSO* *only* *—* *[\`[cert* *pin* *in* *[mobile]* */* *[\`[JWKS* *cache* *TTL* *+\` *kid* *rotation* *tests* in *CI*  | *[\`[pen* *test* *section* *2.1* */* *zap* *report* *…\`]*  |
| *Tampering* *—* *webhook* *body*  | *HMAC* *with* *[\`[whsec* *+\` *rolling* *keys*  | *Unit* *+* *[replay* *tests* *—* *[\`[signature* *verify* *property* *test\`]*  |
| *Info* *disclosure* *—* *logs*  | *Redaction* *pipeline* *—* *[\`[pii* *fields* *list* *in* *schema\`]*  *—* *access* *to* *raw* *logs* *role* *[\`[L4* *oncall* *only\` *with* *break* *glass*] |

\`\`\`mermaid
flowchart TB
  U[User] -->|MFA| IdP[IdP]
  IdP -->|OIDC| APP[App]
  APP -->|wrapped DEK| KMS[(KMS CMK + rotation)]
\`\`\`

## Dependency chain
- *Uptime* *of* *[\`[KMS* */* *IdP* */* *CA\` *—* *see* *[\`[vendor* *SLA* *links* */* *SCD\` in* *BCP*]**

## Exceptions
- *[\`[legacy* *endpoint* *without* *auth\` *—* *kill* *date* *[\`[YYYY* *-* *MM\` *—* *compensating* *[\`[IP* *allowlist* *+\` *WAF* *rate* *limit* *only* *until* *then*]**
`,
  },
  {
    id: "technical-docs-architecture-scaling-strategy",
    name: "Architecture: Scaling strategy",
    category: "technical-docs",
    description: "Horizontal scale, sharding, autoscaling parameters, and cost tradeoffs.",
    tags: ["architecture","scaling","capacity","cost"],
    content: `# Scaling strategy — [Service]

> **Tiers* *—* *[\`[S* *< *10k* *RPS* */* *M* *10–100k* */* *L* *100k* *+\`]*  *—* *this* *page* *maps* *knobs* *per* *tier* *—* *load* *test* *in* *[\`[perf* *harness* *repo* */* *tag\` each* *quarter*]**

| Knob | S | M | L | Rationale / tradeoff |
| --- | --- | --- | --- | --- |
| *App* *replicas* *[\`[min* */* *max* */* *HPA* *CPU\`]*  | *[\`[2* */* *10* */* *70%*\`]*  | *[\`[…\`]*  | *[\`[…\`]*  | *Add* *before* *DB* *—* *watch* *[\`[p95* *DB* *connection* *wait\`]*  |
| *DB* *—* *scale-up* *vs* *read* *replicas* *vs* *shard*  | *vertical*  | *+replicas*  | *[\`[Citus* *\\|* *partition* *by* *tenant* *\` for* *hot* *keys*  | *Shard* *migrations* *—* *[\`[6* *+ *month* *project\` —* *prefer* *queue* *offload* *first*  |
| *Cache* *—* *Redis* *cluster*  | *single*  | *3* *nodes*  | *N* *nodes* *with* *[\`[replica* *per* *AZ\` and* *[\`[cluster* *mode\`]  | *—* *memory* *bound* *—* *eviction* *policy* *[\`[volatile* *lru\`]  |

\`\`\`text
# Autoscaling target signal (example)
If (ingress_p95 > [ms] for [5] min) AND (cpu < [80%]) then scale = dependency bound -> investigate DB, not more pods
\`\`\`

## Cost
- *[\`[$* *per* *1M* *requests\` *at* *tier* *M* *—* *[\`[spot* *for* *workers* *only* *with* *checkpointing* *in* *queue\`]  *—* *see* *FinOps* *dashboard* *[\`[link* */* *tag* *owner\`]  *
`,
  },
  {
    id: "technical-docs-data-dict-database-tables",
    name: "Data dictionary: Database tables",
    category: "technical-docs",
    description: "Table catalog with keys, relations, and retention for OLTP core schema.",
    tags: ["data-dictionary","sql","schema","metadata"],
    content: `# Data dictionary — Database tables

> **Schema* *version* *[\`[2025Q2\`]*  *—* *managed* *by* *[\`[migrations* */* *prisma* */* *flyway\` in* *path* *[\`[db/migrations* */* *…\`]*  *

\`\`\`text
# Legend
PK = primary key  FK = foreign key  UK = unique  IX = non-unique index
\`\`\`

| Table | Purpose | Main keys | Notes |
| --- | --- | --- | --- |
| \`[tenants\`]*  | *Org* *tenant* *metadata*  | *PK* *\`[id* *::uuid\`]*, *UK* *\`[slug\`]*  | *Soft* *delete* *—* *[\`[deleted_at\`]*  *—* *RLS* *or* *app* *filter* *on* *every* *query*  |
| \`[users\`]*  | *User* *account*  | *PK* *\`[id\`]*, *FK* *\`[tenant_id* *→* *tenants.id\`]*  | *PII* *—* *encrypted* *at* *rest* *for* *[\`[email\`] *in* *[\`[…\`]*  *column*  |
| \`[items\`]*  | *Core* *domain* *row*  | *PK* *[\`[id\`],* *FK* *[\`[tenant* *id* */* *owner* *id\`]*, *IX* *[\`[(tenant* *id,* *created* *at* *desc\`] for* *lists*  | *version* *for* *optimistic* *concurrency* *—* *[\`[xmin* *\\|* *ver\`] as* in *API*  |

\`\`\`sql
-- Example FK integrity mode
[ON UPDATE CASCADE] [ON DELETE RESTRICT|SET NULL]
\`\`\`

## Relations (ER excerpt)
*[\`[users* *1—\`** *n* *\`[sessions\`]*, *items* *n—* *1* *[\`[folders\` optional]*]**

## Retention
- *Purge* *[\`[sessions\`]*  *older* *than* *[\`[N]* *days* *—* *keep* *[\`[items\`]*  *per* *[\`[legal* *hold* *flag* *in* *\`[items.meta\`]*]*
`,
  },
  {
    id: "technical-docs-data-dict-api-fields",
    name: "Data dictionary: API resource fields",
    category: "technical-docs",
    description: "Field-level types, nullability, and deprecation for public REST/JSON resources.",
    tags: ["data-dictionary","api","json","types"],
    content: `# Data dictionary — API [Resource name]

> **OpenAPI* *tag* *[\`[tag]\` *—* *version* *\`[v2\` —* *content-type* *\`[application* */* *json* */* *UTF-8\`]*  *

| JSON path | Type | Required | Read-only | Description |
| --- | --- | --- | --- | --- |
| \`[.id\`]*  | *string* *(uuid* *v4)*  | *yes*  | *yes*  | *Stable* *id*  |
| *[\`[.name\`]*  | *string* *1–* *[\`[N\`]*  | *create*  | *no*  | *Display* *name*  |
| *[\`[.status\`]*  | *enum* *\`[…\` values]*  | *no*  | *no*  | *State* *—* *see* *state* *machine* *[\`[link\`]*  |
| *[\`[.settings.theme\`]*  | *string* *\`[…\`]*  | *no*  | *no*  | *one* *of* *[\`[light|dark|auto\`]*; *default* *[\`[auto\`]*  |
| *[\`[.metadata.$key\`]*  | *map* *<string, string>*  | *no*  | *—*  | *Max* *[\`[M\`]* *keys, * *values* *≤* *[\`[1k\`]* *chars*  |

\`\`\`json
{ "id": "[uuid]", "name": "Example", "status": "active", "settings": { "theme": "dark" } }
\`\`\`

## Deprecations
| Field | Deprecated since | Remove after | Use instead |
| --- | --- | --- | --- |
| *[\`[.legacy\` fields]*  | *[\`[1.2.0\`]*  | *[\`[2.0.0\`]*  | *[\`[.newPath\`]*  |

## Validation
- *Regex* *for* *[\`[name\`]*: *\`[pattern\` in* *OpenAPI* *—* *custom* *errors* *[\`[CODE]\` in* *[\`[error* *catalog* *doc\`]:**  *—* *i18n* *message* *keys* *[\`[api.field* *…\`]*  *
`,
  },
  {
    id: "technical-docs-data-dict-event-schemas",
    name: "Data dictionary: Event / wire schemas",
    category: "technical-docs",
    description: "Versioned event envelopes for queues and webhooks with compatibility rules.",
    tags: ["data-dictionary","events","schema","versioning"],
    content: `# Data dictionary — Event schemas

> **Format* *[\`[CloudEvents* *1.0* *+ *our* *extensions\` **or* *proprietary* *[\`[envelope* *vN\`]*]**

## Envelope
\`\`\`json
{ "id": "evt_...", "type": "com.[org].resource.verb", "time": "ISO-8601", "data": { }, "specversion": "1.0" }
\`\`\`

| Field | Rules |
| --- | --- |
| \`[id\`]*  | *Globally* *unique* *—* *UUID* *v4* *or* *[\`[ksuid\`]*  |
| *[\`[type\`]*  | *Lowercase* *—* *reverse* *DNS* *—* *version* *in* *[\`[data.schemaVersion\`]*, *not* *in* *type* *string*  |
| *[\`[data\`]*  | *Must* *parse* *as* *[\`[JSON* *<64KB* *default* */* *configurable* */* *enterprise* */* *1MB* */* *if* *large* *blob* *ref* *in* *\`[data.attachment\`]**

## Domain payload (example \`[com.[org].order.placed\`])
\`\`\`json
{ "orderId": "[id]", "customerId": "[id]", "lineItems": [ { "sku": "...", "qty": 1 } ], "totals": { "currency": "USD", "amountMinor": 1000 } }
\`\`\`

| Change type | Compat | Process |
| --- | --- | --- |
| *Add* *optional* *field*  | *forwards* *compatible*  | *no* *consumer* *change*  |
| *Rename* *or* *type* *change*  | *breaking*  | *bump* *\`[schemaVersion\` in* *[\`[data\` *—* *dual* *publish* *N* *days*  |
`,
  },
  {
    id: "technical-docs-data-dict-configuration-options",
    name: "Data dictionary: Configuration options",
    category: "technical-docs",
    description: "Static config (YAML) keys with defaults, validation, and hot-reload support.",
    tags: ["data-dictionary","config","yaml","ops"],
    content: `# Data dictionary — Configuration options

> **Files* *[\`[config* */* *default.yaml\`] +* *[\`[config* */* *$ENV.yaml\` *overlay*] —* *CLI* *flags* *override* *with* *[\`[--set* *k=v\`] if* *supported*]**

\`\`\`yaml
# excerpt
[service]:
  [feature]:
    enabled: [true]
    [timeoutMs]: [5000]
\`\`\`

| Key (dot path) | Type | Default | Hot reload | When to tune |
| --- | --- | --- | --- | --- |
| \`[service.feature.enabled\`]*  | *bool*  | *true*  | *yes*  | *Kill* *switch* *during* *incidents*  |
| *[\`[service.timeouts\`.…\`]*  | *duration*  | *5s*  | *no*  | *If* *downstream* *p99* *>* *[\`[X\`] *—* *requires* *restart*  |
| *[\`[log.level\`]*  | *enum*  | *info*  | *yes*  | *\`[debug\` for* *short* *oncall* *debug* *—* *revert* *to* *info*  |

## Validation
- *JSON* *schema* *or* *[\`[cue* */* *zod* */* *go* *struct* *tags* */* *…\` at* *boot* *—* *fail* *fast* *if* *invalid*  |

## Security
- *Secret* *refs* *[\`[secretRef* *:name\`] not* *inline* *values* *—* *rotation* *without* *redeploy* *if* *using* *[\`[CSI* *driver* */* *Vault* *agent\`]**
`,
  },
  {
    id: "technical-docs-data-dict-environment-variables",
    name: "Data dictionary: Environment variables",
    category: "technical-docs",
    description: "Required env vars per deployment target with example safe values.",
    tags: ["data-dictionary","env","12-factor","ops"],
    content: `# Data dictionary — Environment variables

> **Convention* *—* *ALL_CAPS* *—* *prefix* *\`[PRODUCT* *_\` —* *never* *log* *values* *in* *non-debug* *logs*]**

| Name | Required | Description | Example (non-secret) | Secret? |
| --- | --- | --- | --- | --- |
| \`[PRODUCT* *_ENV\`]*  | *yes*  | *dev|stage|prod*  | *prod*  | *no*  |
| *[\`[PRODUCT* *_PORT\`]*  | *no*  | *bind*  | *8080*  | *no*  |
| *[\`[PRODUCT* *_DATABASE_URL\`]*  | *yes*  | *Postgres* *DSN*  | *postgres://* *…*  | *yes*  |
| *[\`[PRODUCT* *_OAUTH* *_CLIENT* *_ID\`]*  | *if* *SSO*  | *IdP* *client* *id*  | *\`[abc\`]  | *no*  |
| *[\`[PRODUCT* *_OAUTH* *_CLIENT* *_SECRET\`]*  | *if* *SSO*  | *IdP* *secret*  | *\`[****\`]  | *yes*  |

\`\`\`bash
# .env.local (development only — not committed)
export [PRODUCT]_[KEY]="[value]"
\`\`\`

## Mapping to config file
- *If* *both* *env* *and* *YAML* *set* *same* *key* *—* *[\`[precedence* *env* *>\` yaml* *default*] —* *documented* *in* *[\`[config* *merge* *order\`]**

## 12-factor notes
- *Config* *in* *env* *—* *build* *is* *immutable* *—* *release* *stage* *injects* *env* *per* *[\`[k8s* *secret* */* *param* *store\`]**
`,
  },
  {
    id: "technical-docs-data-dict-feature-flags",
    name: "Data dictionary: Feature flags",
    category: "technical-docs",
    description: "Flags, audiences, and kill switches with evaluation defaults.",
    tags: ["data-dictionary","feature-flags","rollout","config"],
    content: `# Data dictionary — Feature flags

> **System* *[\`[LaunchDarkly* */* *config* *cat* */* *homegrown\`] —* *naming* *\`[ff.\`] *or* *[\`[product* *area]_[kebab]\`]**

\`\`\`text
# Flag key
ff.checkout.shipping_v2
\`\`\`

| Key | Type | Default | Environments | Owner team |
| --- | --- | --- | --- | --- |
| \`[ff.payments* *.…\`]*  | *bool*  | *false*  | *stage* *on* *—* *prod* *%* *ramp*  | *[\`[payments\`]*  |
| *[\`[ff.ui.*.beta\`]*  | *bool*  | *false*  | *all* *off*  | *[\`[fe\`]*  |
| *[\`[ff.api.new_limiter\`]*  | *int*  | *1000*  | *tunable* *per* *cell*  | *[\`[sre\`]*  |

## Targeting
- *Rules* *—* *[\`[user* *email* *domain* */* *tenant* *id* *in* *list* */* *random* *%\`] —* *order* *matters* *—* *first* *match* *wins* *in* *[\`[provider* *X* *semantics* */* *see* *\`[docs* *to* *…\`]*]**

## Kill switch runbook
- *If* *incident* *—* *set* *[\`[ff* *.*.enabled\` →* *false* *globally* *—* *verify* *metric* *[\`[error* *rate* *drops* */* *queue* *depth* *stabilize\` in* *panel* *[\`[link\`] —* *link* *to* *postmortem*  |

## Deprecation
- *Remove* *flag* *code* *after* *[\`[2* *weeks* *at* *100%* *\`+ *1* *release* *buffer*] —* *track* *in* *tech* *debt* *[\`[ticket* *query* */* *label* *:flag* *cleanup\`]*  *
`,
  },
  {
    id: "technical-docs-ref-http-status-codes",
    name: "Reference: HTTP status codes (usage)",
    category: "technical-docs",
    description: "When to use common HTTP codes in our APIs and error object mapping.",
    tags: ["reference","http","api","errors"],
    content: `# Reference: HTTP status codes (internal)

> **We* *follow* *[\`[RFC* *9110\` *semantics* *—* *custom* *codes* *discouraged* in *public* *API* *—* *see* *[\`[error* *catalog* *doc* */* *API\` for* *app-specific* *payloads*]**

| Code | When to return | Do not use for | Example body \`[type\`]*  |
| --- | --- | --- | --- |
| \`[200\`]*  | *Success* *with* *body*  | *created* *resources*  | *N/A*  |
| \`[201\`]*  | *Resource* *created*  | *idempotent* *PUT*  | *object*  |
| \`[202\`]*  | *Async* *accepted*  | *synchronous* *success*  | *\`[job* *id* */* *status* *URL\`*  |
| \`[204\`]*  | *No* *content* *delete*  | *if* *client* *expects* *body*  | *empty*  |
| *[\`[400* *–* *499\`]*  | *Client* *correctable* *issues*  | *blame* *infrastructure* *without* *proof*  | *\`[invalid_request* *…\`*  |
| *[\`[500* *–* *599\`]*  | *Unexpected* *server* *failure*  | *user* *typos*  | *\`[internal* *+ requestId\`*  |

\`\`\`text
# Mapping to \`[problem+json\`]
[table in API error codes doc] — this page is the HTTP layer only
\`\`\`

## Caching
- *[\`[304* *Not* *Modified\`]*  *—* *requires* *ETag* *+\` *If-None-Match* *on* *GET* *—* *see* *[\`[caching* *guide\`]:**  *
`,
  },
  {
    id: "technical-docs-ref-mime-types",
    name: "Reference: MIME types (uploads & APIs)",
    category: "technical-docs",
    description: "Allowed content types for requests, responses, and file handling.",
    tags: ["reference","mime","http","uploads"],
    content: `# Reference: MIME types

> **Default* *request* *body* *in* *REST* *API* *is* *[\`[application* */* *json* */* *charset=utf-8\`] —* *multipart* *only* *where* *noted*]**

\`\`\`text
# Upload session flow (summary)
1) application/json  -> create session
2) application/octet-stream  -> put bytes
3) text/csv, application/pdf, image/png ... -> allowed list per resource
\`\`\`

| MIME | API usage | Max size (default) | Server validation |
| --- | --- | --- | --- |
| \`[application* */* *json\`]*  | *CRUD* *bodies*  | *4* *MB*  | *json* *schema*  |
| *[\`[multipart* */* *form* *-* *data\`]*  | *legacy* *upload*  | *20* *MB*  | *per-part* *types*  |
| *[\`[text* */* *csv* */* *charset=utf* *-* *8\`]*  | *bulk* *import*  | *per* *job*  | *row* *parser*  |

## Response types
- *[\`[application* */* *openxmlformats* *…\`]*  *—* *export* *endpoints* *—* *[\`[Content* *-Disposition* *: *attachment* *;* *filename* *=…\`*  *

## Reject
- *[\`[text* */* *html\`]*  *in* *API* *bodies* *—* *[\`[415* *Unsupported* *Media* *Type\`] —* *unless* *import* *of* *[\`[sanitized* *html\`] *in* *[\`[feature* *X* *only* */* *admin\`]**
`,
  },
  {
    id: "technical-docs-ref-iso-and-units",
    name: "Reference: Units, time, and money",
    category: "technical-docs",
    description: "Conventions for currencies, time zones, and measurement units in APIs.",
    tags: ["reference","iso","currency","api"],
    content: `# Reference: Units & standards

> **Money* *—* *always* *integer* *in* *[\`[minor* *units\`]*  *—* *never* *float* *—* *currency* *code* *\`[ISO* *4217\`: [USD* *…] —* *see* *[\`[Stripe* *docs* *pattern\`] if* *undecided*]**

\`\`\`json
{ "amountMinor": 1999, "currency": "USD" }
\`\`\`

| Concept | API representation | UI display | Notes |
| --- | --- | --- | --- |
| *Instant* *in* *time*  | *string* *[\`[RFC* *3339* *with* *offset* */* *Z\`]*  | *User* *TZ* *from* *settings*  | *Store* *UTC* *—* *convert* *in* *UI*  |
| *Date* *only*  | *string* *\`[YYYY* *-MM* *-DD\` in* *[\`[org* *TZ* *or* *UTC* *—* *document* *which* */* *bias*] | *date* *picker*  | *inclusive* *end* *dates* *—* *[\`[half-open* *interval* *[)* *in* *reports* */* *see* *\`[billing* *period* *doc\`]**
| *Durations*  | *int* *seconds* *or* *string* *[\`[ISO* *8601* *duration\`] as* in *OpenAPI*  | *human* *readable*  | *clarify* *leap* *seconds* *—* *[\`[N/A* *for* *business* *logic\` if* *not* *needed*]**
`,
  },
  {
    id: "technical-docs-ref-unicode-and-slugs",
    name: "Reference: Slugs, unicode, and identifiers",
    category: "technical-docs",
    description: "Rules for public IDs, slugs, and case sensitivity across systems.",
    tags: ["reference","unicode","identifiers","api"],
    content: `# Reference: Identifiers

> **Resource* *ids* *—* *opaque* *[\`[uuid* *v4* */* *v7* */* *ksuid\`]*  *—* *never* *encode* *semantics* *—* *sortable* *ids* *if* *list* *order* *matters* *—* *[\`[v7* */* *ksuid\`]**

## Slugs
- *Pattern* *[\`[a* *-z* *0* *-9* *+ hyphens\`]*, *1–* *[\`[N\`]*, *no* *leading* *or* *trailing* *hyphen*  |
- *Uniqueness* *scope* *—* *[\`[global* *per* *tenants.id\` vs* *[\`[per* *parent* *folder\` —* *API* *returns* *[\`[409* *conflict\`] on* *collision*  |

\`\`\`text
# Example
/tenants/{tenantSlug}/items/{itemId}
# itemId: opaque, slug: human, both stable
\`\`\`

## Case sensitivity
- *Path* *segments* *—* *case* *sensitive* *—* *query* *param* *names* *—* *lower* *as* in *[\`[OpenAPI\`] —* *query* *values* *for* *case-insensitive* *search* *—* *document* *in* *[\`[search* *doc\`]:**  *
`,
  },
  {
    id: "technical-docs-compare-caching-strategies",
    name: "Comparison: Caching strategies",
    category: "technical-docs",
    description: "When to use CDN edge, Redis, in-process, and stampede control patterns.",
    tags: ["comparison","caching","architecture","performance"],
    content: `# Compare: Caching strategies

> **Scenarios* *—* *[\`[public* *assets* *vs* *auth* *API* *read* *vs* *write* *behind* *…\`]*  *—* *pick* *one* *row* *per* *slice*]**

| Strategy | Best for | Cons | Staleness | Ops burden |
| --- | --- | --- | --- | --- |
| **CDN* *edge*  | *Static* *+ *immut* *path*  | *Not* *for* *private* *HTML*  | *Minutes* *–* *days*  | *Low*  |
| **Redis* *shared*  | *Per-key* *hot* *objects*  | *Network* *hop*  | *Seconds*  | *Med*  |
| **In-process* *LRU*  | *Config* *read* *many* *times*  | *No* *cross-node*  | *ms*  | *Low*  |
| **Write-through* *DB*  | *Read-your-writes*  | *Slower* *writes*  | *—*  | *High*  |

\`\`\`mermaid
flowchart LR
  C[Client] --> E[Edge]
  E -->|miss| A[App]
  A --> R[Redis] -->|miss| D[(DB)]
\`\`\`

## Decision tree (short)
- *If* *cacheable* *and* *public* *and* *immutable* *URL* *—* *[\`[CDN\`] first*  |
- *If* *per* *user* *or* *tenant* *—* *[\`[Redis* *+ key* *with* *tenant* *id\`] not* *CDN*  |
- *If* *stampede* *risk* *—* *add* *[\`[singleflight* */* *request* *coalescing\`]**

## When not to
- *Strong* *read-after-write* *consistency* *for* *money* *—* *skip* *cache* *on* *hot* *path* *or* *use* *very* *short* *TTL* *+\` *ver* *field*  |
`,
  },
  {
    id: "technical-docs-compare-sql-vs-nosql",
    name: "Comparison: Relational vs document store",
    category: "technical-docs",
    description: "Tradeoffs for greenfield and migration scenarios with examples.",
    tags: ["comparison","database","sql","nosql"],
    content: `# Compare: SQL vs document (for [use case])

> *Not* *a* *one-size* *—* *hybrid* *is* *common* *—* *this* *table* *assumes* *OLTP* *on* *[\`[Postgres* *vs* *Mongo* */* *Dynamo* *…\`]*]**

| Dimension | Relational (SQL) | Document (wide-column / doc) | Winner here |
| --- | --- | --- | --- |
| *Ad-hoc* *joins* *+* *integrity*  | *Strong*  | *Weaker* *or* *app-enforced*  | *SQL*  |
| *Schema* *flex* *in* *early* *product*  | *Migrations*  | *Faster* *iterations*  | *Document*  |
| *Scale-out* *patterns*  | *Read* *replicas* *+* *shard* *if* *needed*  | *Native* *partition* *keys*  | *Contextual*  |
| *Ops*  | *Mature* *tooling*  | *Varies*  | *—*  |

\`\`\`text
# Example: store nested JSONB in SQL when you need both
CREATE TABLE [t] ( id uuid, data jsonb, ... );
\`\`\`

## Migration note
- *If* *choose* *document* *now* *—* *plan* *for* *[\`[analytical* *exports* *to* *warehouse* */* *parquet* */* *columnar* */* *later\` —* *avoid* *losing* *queryability*]**

## Suggested default for [our product]
- *[\`[Start* *on* *Postgres* *+ jsonb* *for* *flex* *+ *migrations* *…\` or* *[\`[Mongo* *if* *team* *deep* *expertise\`]*  *—* *justify* in *[\`[ADR* *NN\`]**
`,
  },
  {
    id: "technical-docs-compare-sync-async-processing",
    name: "Comparison: Synchronous vs asynchronous processing",
    category: "technical-docs",
    description: "Request–response, jobs, and streaming when building features.",
    tags: ["comparison","async","queues","api-design"],
    content: `# Compare: Sync vs async in APIs

> **User-facing* *SLA* *drives* *this* *—* *if* *[\`[>2s* *p95\` for* *human* *—* *usually* *async* *job*]**

| Pattern | UX | Complex parts | When |
| --- | --- | --- | --- |
| *Sync* *HTTP*  | *Simple*  | *Timeouts* *—* *cascades*  | *[\`[<500ms* *back-end* *work\`]*  |
| *202* *+* *poll*  | *OK*  | *State* *machine*  | *[\`[seconds* *–* *minutes\`]*  |
| *Webhooks*  | *N/A*  | *Delivery* *+\` *verify*  | *Partner* *integrations*  |
| *Streams*  | *Live*  | *Backpressure*  | *Events* *+\` *huge* *volume*  |

\`\`\`mermaid
flowchart TB
  R[Request] -->|fast| S[response]
  R -->|slow| J[job] --> N[notify user]
\`\`\`

## Pitfalls
- *Polling* *too* *fast* *—* *[\`[429* *client* *DDoS* *yourself\` —* *exponential* *backoff*  |
- *Idempotency* *on* *job* *creation* *—* *[\`[POST* *with* *Idempotency* *-Key\`] required*]**
`,
  },
  {
    id: "technical-docs-compare-iac-tools",
    name: "Comparison: Infrastructure-as-code options",
    category: "technical-docs",
    description: "Quick contrast of Terraform, Pulumi, and vendor-native for team skill fit.",
    tags: ["comparison","iac","terraform","devops"],
    content: `# Compare: IaC in our org

> *Criteria* *[\`[multi-cloud* *vs* *single* *cloud* *native* *…\`]*]**

| Option | Pros | Cons | Best fit here |
| --- | --- | --- | --- |
| **Terraform* */* *OpenTofu*  | *Ecosystem* *mature*  | *HCL* *context*  | *Default*  |
| **Pulumi*  | *TypeScript*  | *Licensing*  | *If* *TS* *everywhere*  |
| **Bicep* *\\|* *CloudFormation*  | *Fidelity*  | *Portability*  | *If* *single* *cloud* *+\` *deep*  |

- *Guideline* *—* *modules* *in* *[\`[repo* *iac\`] —* *state* *remote* *with* *lock*  |

## When to use vendor UI
- *Hobby* *only* *—* *for* *prod* *import* *to* *[\`[code* *after* *spike* */* *capture* *in* *PR\`]:**  *
`,
  },
  {
    id: "technical-docs-benchmark-api-latency",
    name: "Benchmark: API latency (methodology)",
    category: "technical-docs",
    description: "How we measure p50/p95 and publish results for a reference workload.",
    tags: ["benchmark","performance","latency","methodology"],
    content: `# Benchmark: API latency

> **Workload* *[\`[k6* *script* *in* *repo* */* *...\`]*  *—* *environment* *[\`[staging* *isolated* *…\`]*]**

## Setup
- *Region* *pairing* *—* *client* *in* *[\`[same* *region* *as* *API* */* *cross-region* *for* *RUM* *comparison\`]*  |
- *Auth* *—* *[\`[service* *account* *token* */* *no* *auth* *for* *public* *path* */* *…\`]*  |
- *Fixed* *RPS* *ramp* *—* *[\`[0* *->* *N* *over* *T* *min\`] —* *sustained* *[\`[M* *min* *at* *N\`]**

| Metric | Value (run [id]) | Notes |
| --- | --- | --- |
| *p50*  | *[\`[X\`]* *ms*  | *per* *route* *A*  |
| *p95*  | *[\`[Y\`]* *ms*  | *SLO* *[\`[S\`]*  |
| *error* *%*  | *[\`[0.0%]* *<*\`* *0.1%*  | *4xx* *excluded*  |

\`\`\`text
# Example output line (k6)
http_req_duration....: avg=[...] p(95)=[Y]
\`\`\`

## Caveats
- *Cold* *start* *—* *first* *[\`[N\`]* *req* *excluded* *or* *noted* *—* *container* *scale* *from* *zero* *—* *[\`[separate* *benchmark\`]**

## Reproduce
- *[\`[docker* *compose* *up* *perf* *&&* *./scripts/bench* *…\` —* *hash* *images* *[\`[sha* *in* *lock\`]**
`,
  },
  {
    id: "technical-docs-benchmark-throughput",
    name: "Benchmark: Throughput and saturation",
    category: "technical-docs",
    description: "RPS/MBps ceilings before errors or throttling for core endpoints.",
    tags: ["benchmark","throughput","load-testing","capacity"],
    content: `# Benchmark: Throughput (saturation)

> **Target* *—* *find* *[\`[knee* *of* *the* *curve\`] —* *not* *a* *bragging* *number*]**

\`\`\`mermaid
flowchart LR
  rps[RPS ramp] --> err[Error rate & p95]
\`\`\`

| Phase | RPS | Duration | What we record |
| --- | --- | --- | --- |
| *1*  | *0* *- >* *[\`[A\`]*  | *5* *min*  | *p95* *per* *step*  |
| *2*  | *hold* *[\`[A\`]*  | *30* *min*  | *CPU* *+ *throttle* *events*  |

- *Sustain* *[\`[A\` RPS* *with* *[\`[E* *%* *errors* *<\`]*  *0.1%* *—* *document* *bottleneck* *[\`[DB* *CPU* */* *pool* *…\`]**

\`\`\`text
# Example observation
Bottleneck: DB connections at 80% pool; before CPU saturated
\`\`\`

## Compare runs
- *Table* *—* *[\`[before* *tuning* *vs* *after* *index* */* *cache\`] —* *date* *+\` *git* *sha*  *
`,
  },
  {
    id: "technical-docs-benchmark-cost-per-request",
    name: "Benchmark: Cost per request (FinOps slice)",
    category: "technical-docs",
    description: "Approximate variable cost of a request from observability and cloud bills.",
    tags: ["benchmark","finops","unit-economics","cost"],
    content: `# Benchmark: Cost per request (model)

> **Inputs* *—* *[\`[monthly* *bill* *by* *tag\`] +* *RPS* *from* *metrics* *—* *not* *for* *GAAP* *—* *±* *[\`[N\`]%* *uncertainty*]**

| Line item | Monthly $ | % of total for [service] | Driver |
| --- | --- | --- | --- |
| *Compute*  | *[\`[$…\`]*  | *x%*  | *RPS* *+\` *CPU*  |
| *Egress*  | *$…*  | *y%*  | *Bytes*  |

\`\`\`text
# Simple model
cost_per_request ≈ (service_monthly_cost) / (successful_requests in month)
\`\`\`

- *Excludes* *sunk* *R&D* *—* *separate* *line*  |

## Sensitivity
- *If* *RPS* *doubles* *—* *[\`[which* *component* *hits* *first* */* *autoscale* *lag\`] —* *see* *[\`[capacity* *plan* *sheet\`]**
`,
  },
  {
    id: "technical-docs-spec-availability-slo",
    name: "Spec: Availability and error budget (template)",
    category: "technical-docs",
    description: "Define SLO, measurement window, and budget policy in one place.",
    tags: ["spec","slo","reliability","template"],
    content: `# Spec: Availability SLO

> **Service* *name* *[\`[SVC\`] —* *users* *[\`[internal* *+\` *externally* *facing* */* *…\` —* *owner* *[\`[team* *+\` *oncall* *rot*]**

| Field | Value |
| --- | --- |
| **Objective**  | *[\`[99.9%* *of* *OK* *responses* *per* *month* */* *excluding* *[\`[vendor* *A\` outage\`]*] |
| *Measurement*  | *HTTP* *2xx* *+\` *3xx* *excluding* *[\`[404* *if* *idempotent* *GET\`]*  *on* *[\`[ingress* *metric* *label* *=…\`]*  |
| *Exclusions*  | *Planned* *maintenance* *in* *[\`[status* *page* *as* *[window]\`] —* *client* *errors* *4xx*  |
| *Error* *budget*  | *43.2* *min* *-\`* *month* *at* *99.9%*  *—* *burn* *alerts* *[\`[see* *panel\`]*  |

\`\`\`mermaid
flowchart LR
  Good[OK responses] --> Num[Count]
  All[All] --> Den[Count]
\`\`\`

## Policy when budget is burned
- *Freeze* *non-essential* *deploys* *—* *[\`[except* *P0* *sev* *fix\`] —* *triage* *in* *[\`[weekly* *reliability* *meeting* */* *link\`] —* *postmortem* *if* *[\`[root* *cause* *in* *our* *control\`]**
`,
  },
  {
    id: "technical-docs-spec-data-retention",
    name: "Spec: Data retention and deletion (template)",
    category: "technical-docs",
    description: "Categories of data, retention, legal holds, and deletion SLAs.",
    tags: ["spec","retention","gdpr","compliance"],
    content: `# Spec: Data retention

> **Jurisdiction* *[\`[list\`] —* *DPA* *ref* *[\`[id\`] —* *DPO* *contact* in *[\`[internal* *confluence* */* *…\`]**

\`\`\`text
# Data classes (excerpt)
- Account metadata
- User-generated content
- Logs & traces
- Backups
\`\`\`

| Class | Retention (default) | Deletion on account close | Backups | Legal hold |
| --- | --- | --- | --- | --- |
| *Metadata*  | *[\`[N]* *y\`]*  | *[\`[T]* *+30* *d\`] hard* *delete*  | *rolling* *[\`[7* *d/30* *d* */* *yr\`]*  | *extends*  |
| *Content*  | *until* *user* *delete*  | *[\`[T]* *+7* *d\`] soft* *then* *purge*  | *same*  | *blocks*  |

- *Anonymization* *as* *alternative* *to* *delete* *where* *[\`[legal* *permits* */* *stats* *need* *trend* */* *…\`]*  |

## Erasure request SLA
- *[\`[30* *days* *max* */* *jurisdiction* *override\`] —* *export* *first* *—* *[\`[right* *to* *portability* */* *see* *FAQ\`]**
`,
  },
  {
    id: "technical-docs-spec-api-version-sunset",
    name: "Spec: API version sunset (template)",
    category: "technical-docs",
    description: "Communication window, header warnings, and hard removal criteria.",
    tags: ["spec","versioning","deprecation","api"],
    content: `# Spec: API version sunset

> **Version* *[\`[v1\`] *sunset* *date* *[\`[YYYY* *-MM* *-DD\`] —* *replacement* *[\`[v2\`] *as* in *[\`[migration* *doc\`]:**  *

\`\`\`text
# Timeline (example)
- T-6m: announce in changelog + email
- T-3m: add \`[Deprecation: true, Sunset: date]\` headers
- T-0: 410/404 with [doc link]
\`\`\`

| Signal | When |
| --- | --- |
| *Traffic* *v1*  | *[\`[<\`]* *0.1%* *rolling* *7d* *before* *cut*  |
| *Support* *tickets*  | *[\`[zero* *P1* *open* *for* *v1* *migration\` for* *2* *weeks*  |

- *Exception* *process* *—* *[\`[if* *large* *customer* *needs* *extension* */* *private* *offer* */* *…\`] —* *not* *default*]**

## Verify post-cut
- *[\`[synthetic* *probes* *still* *hitting* *v1\`]*  *==* *0* *in* *[\`[24h* *dashboard* */* *alert\`]**
`,
  },
  {
    id: "technical-docs-integration-patterns-catalog",
    name: "Integration patterns catalog",
    category: "technical-docs",
    description: "Common connection patterns: polling, webhooks, batch files, and reverse ETL.",
    tags: ["integration","patterns","etl","reference"],
    content: `# Integration patterns catalog

> *Pick* *a* *row* *per* *connector* *—* *document* *in* *[\`[connector* *spec* *per* *partner* */* *…\`]*]**

| Pattern | When | At-least/Exactly once | Our components |
| --- | --- | --- | --- |
| *Real-time* *webhook*  | *Partner* *pushes*  | *at-least*  | *HMAC* *verify*  |
| *Scheduled* *poll*  | *No* *webhooks*  | *at-least*  | *idempotent* *upsert*  |
| *S3* *file* *drop*  | *Batch*  | *exactly* *once* *per* *file*  | *ETL* *job*  |
| *Reverse* *ETL*  | *Data* *warehouse* *→* *app*  | *nightly*  | *outbox*  |

\`\`\`mermaid
flowchart LR
  P[Partner] -->|file| S[(Bucket)]
  S --> E[ETL] --> T[(OLTP)]
\`\`\`

## Partner checklist
- *[\`[test* *sandbox* *endpoints* */* *prod* *allowlist* *IPs* */* *rate* *limits* */* *contact* *oncall* */* *…\`] —* *link* *to* *[\`[vendor* *status* *page\`]:**  *
`,
  },
  {
    id: "technical-docs-integration-error-handling",
    name: "Integration: Error handling and retries (cross-system)",
    category: "technical-docs",
    description: "Classifier for transient vs permanent errors across HTTP and file pipelines.",
    tags: ["integration","reliability","retries","errors"],
    content: `# Integration: Error handling

> **Idempotency* *key* *on* *every* *outbound* *mutation* *—* *[\`[dedupe* *table* */* *natural* *keys\`] as* *documented* in *each* *connector*]**

| Class | Example | Backoff | DLQ? |
| --- | --- | --- | --- |
| *4xx* *except* *429*  | *Bad* *payload*  | *no*  | *yes* *—* *fix*  |
| *429*  | *Throttled*  | *exponential* *+\` *Retry-After*  | *after* *max*  |
| *5xx*  | *Partner* *down*  | *jitter*  | *yes*  |

\`\`\`ts
if (e instanceof [PartnerError] && e.retryable) { await sleep(backoff(n)); return retry(); }
\`\`\`

- *Correlate* *with* *[\`[partner* *incident* *id* */* *request* *id* */* *our* *trace\`] in* *tickets*  |
`,
  },
  {
    id: "technical-docs-integration-partner-staging",
    name: "Integration: Partner testing environments",
    category: "technical-docs",
    description: "Sandbox URLs, data refresh cadence, and feature parity vs production.",
    tags: ["integration","sandbox","testing","partner"],
    content: `# Integration: Staging for partners

> *Never* *use* *prod* *PII* *in* *sandbox* *—* *[\`[synthetic* *fixtures* */* *Faker* *seeds* */* *…\`]**

\`\`\`text
# Partner sandbox
Base URL: https://[sandbox].partner.example
Rate limit: [N]/min
Auth: [separate key header]
\`\`\`

| Aspect | May differ from prod? | How we test |
| --- | --- | --- |
| *Features*  | *[\`[new* *beta* *flags* */* *…\`]*  | *contract* *tests*  |
| *Data*  | *yes*  | *refresh* *[\`[daily/weekly\`] —* *document* *deltas*  |
| *Uptime*  | *lower*  | *tolerate* *in* *[\`[retry* *policy* */* *not* *in* *SLA\`]**

- *Map* *environments* *1:1* *—* *[\`[our* *stage* *↔* *their* *sandbox* */* *not* *mix\`]**
`,
  },
  {
    id: "technical-docs-integration-webhook-cookbook",
    name: "Integration: Webhook cookbook (internal standard)",
    category: "technical-docs",
    description: "Headers, body schema, and verification for our outbound webhooks to customers.",
    tags: ["integration","webhooks","hmac","cookbook"],
    content: `# Outbound webhooks: cookbook

> **Event* *types* *[\`[enum* *in* *OpenAPI\`] —* *at-least-once* *—* *[customer* *must* *dedup* *by* *\`[id\`]**

\`\`\`http
POST [customer URL] HTTP/1.1
X-[Product]-Signature: t=[ts],v1=[hex]
X-[Product]-Id: wh_...
X-[Product]-Event: com.[org]...
\`\`\`

\`\`\`json
{ "id": "evt_...", "type": "...", "created": 0, "data": {} }
\`\`\`

| Customer setup step | |
| --- | --- |
| *Return* *2xx* *in* *[\`[30\`]s*  |  |
| *Reply* *[\`[200\`] *with* *empty* *or* *json*  |  |

- *We* *retry* *with* *[\`[exponential* *+ *jitter* */* *max* *attempts* */* *DLQ* *replay\`] —* *see* *[\`[main* *webhook* *doc* */* *API\`]**
`,
  },
  {
    id: "technical-docs-changelog-policy-public",
    name: "Changelog policy: Public product changelog",
    category: "technical-docs",
    description: "Style, audience, and release cadence for user-visible release notes.",
    tags: ["changelog","release-notes","policy","communication"],
    content: `# Changelog policy: Public

> *Inspired* *by* *[\`[Keep* *a* *Changelog\`] —* *[\`[semver* *for* *API* */* *cal* *ver* *for* *app* */* *…\`] —* *pick* *one* *narrative*]**

\`\`\`md
## [1.2.0] - YYYY-MM-DD
### Added
- [feature]
### Fixed
- [bug]
\`\`\`

| Rule | |
| --- | --- |
| *Audience*  | *end* *users* *—* *no* *internal* *ticket* *ids*  |
| *Language*  | *present* *tense* *—* *what* *changed*  |
| *Breaking*  | *H2* *section* *+ *migration* *link*  |

- *Publish* *to* *[\`[site/changelog* */* *RSS* */* *in-app* *bell* */* *email* *opt-in* */* *…\`] on* *[\`[same* *day* *as* *tag* */* *±* *1* *d\`]**
`,
  },
  {
    id: "technical-docs-changelog-policy-internal",
    name: "Changelog policy: Internal build notes",
    category: "technical-docs",
    description: "What engineers log per build vs what support shares with customers.",
    tags: ["changelog","internal","release-engineering","process"],
    content: `# Changelog policy: Internal

> **Confluence* */* *Notion* */* *github* *releases* *private* *—* *link* *from* *[\`[deploy* *ticket* */* *JIRA\`]**

\`\`\`text
# Required fields per [service] [version]
- Git SHA, image digest
- Migrations: yes/no + id list
- Feature flags: default changes
- Rollback: one-click or manual steps
- Known issues: link
\`\`\`

| | Public changelog | Internal |
| --- | --- | --- |
| *Code* *names*  | *use* *marketing* *name*  | *repo* *branch* *+\` *JIRA*  |
| *Incidents*  | *if* *user-visible*  | *all* *+\` *RCA* *link*  |

- *On* *[\`[hotfix* */* *rollback\`] —* *update* *internal* *within* *[\`[1h* */* *same* *day\`] —* *public* *only* *after* *stabilize*]**
`,
  },
  {
    id: "technical-docs-glossary-product-terms",
    name: "Glossary: Product terminology",
    category: "technical-docs",
    description: "Canonical terms for the domain model to align docs, UI, and support.",
    tags: ["glossary","terminology","product","ux"],
    content: `# Glossary: [Product] terms

> *Alphabetical* *—* *if* *two* *terms* *conflict* *with* *common* *English* *we* *mark* *domain* *meaning*]**

\`\`\`text
# Style: Title Case in UI, code_case in API where noted
\`\`\`

| Term | Definition | Avoid / deprecated synonym |
| --- | --- | --- |
| **Workspace* */* *Organization*  | *Billing* *and* *RBAC* *root*  | *"account"* *ambiguous*  |
| **Project*  | *Data* *partition* *under* *workspace*  | *"folder"* *in* *API*  |
| *[\`[Resource* *A\`]*  | *…*  | *old* *name* *[\`[…\` until* *v3]*  |
| *[\`[Event* *B\`]*  | *…*  | *—*  |

- *When* *introducing* *new* *term* *—* *update* *[\`[glossary* */* *i18n* *glossary* */* *support* *macros* */* *…\`] in* *one* *PR*]**

## Pronunciation (optional)
- *[\`[Product* *X\`]*  *—* *[\`[zee* *\\|* *zed\`] —* *audio* *clip* in *[\`[brand* *kit\`]**
`,
  },
  {
    id: "technical-docs-glossary-engineering-terms",
    name: "Glossary: Engineering & ops shorthand",
    category: "technical-docs",
    description: "Acronyms and internal code names for cross-team writing consistency.",
    tags: ["glossary","engineering","jargon","onboarding"],
    content: `# Glossary: Engineering shorthand

> *For* *new* *hires* *and* *docs* *reviewers* *—* *not* *for* *customer* *facing* *strings*]**

\`\`\`text
# Examples
ALB = Application Load Balancer
MTTR = mean time to recovery
PITR = point-in-time recovery
\`\`\`

| Acronym / term | Meaning here | Do not assume |
| --- | --- | --- |
| *RCA*  | *root* *cause* *analysis* *doc*  | *not* *“confidential* *area*”*  |
| *CR*  | *change* *request* *template*  | *not* *container* *registry*  |
| *[\`[project* *codename* *\\|* *Greek* *letter\`]*  | *[\`[refers* *to* *which* *service* */* *initiative\`]*  | *outdated* *after* *[\`[YYYY* *-MM* */* *rename* */* *…\`]*  |

- *Add* *new* *codenames* *to* *[\`[wiki* *page* */* *#proj* *-* **channel\`] before* *using* in *external* *slides*]**
`,
  },
  {
    id: "technical-docs-style-voice-and-tone",
    name: "Style guide: Voice and tone (technical docs)",
    category: "technical-docs",
    description: "How we sound in product docs: clear, direct, and inclusive by default.",
    tags: ["style","writing","voice","docs"],
    content: `# Style: Voice and tone

> **We* *are* *helpful* *and* *precise* *—* *we* *avoid* *marketing* *hyperbole* in *reference* *pages*]**

\`\`\`text
# Principles
- Active voice; short sentences; one idea per paragraph
- "You" for tasks the reader does; "we" for what the product does if needed
- No shame language ("just", "obviously", "simply")
\`\`\`

| Do | Don't |
| --- | --- |
| *"Run* *the* *next* *command"**  | *"Simply* *run…"*  |
| *"This* *can* *fail* *if* *[\`[condition\`] —* *see* *[\`[…\`]"*  | *"Invalid* *input"** *only*  |

- *Punctuation* *—* *Oxford* *comma* *[\`[yes* */* *no* */* *…\` as* *in* *[\`[org* *style* */* *…\`] —* *heading* *case* *[\`[sentence* *case* */* *…\`]**

## Inclusive & accessible language
- *Use* *[\`[person-first* *or* *identity* *—* *follow* *[house* *guide]* */* *…\`] —* *alt* *text* *for* *images* in *docs* *—* *see* *[\`[a11y* *…\`]**
`,
  },
  {
    id: "technical-docs-style-code-and-diagrams",
    name: "Style guide: Code and diagrams in technical docs",
    category: "technical-docs",
    description: "Conventions for fences, line length, mermaid, and copy-pastability.",
    tags: ["style","markdown","diagrams","code-samples"],
    content: `# Style: Code and diagrams

> *Samples* *must* *compile* *or* *run* *in* *[\`[documented* *version* */* *docker* *image* */* *…\`] —* *mark* *pseudocode* *explicitly*]**

\`\`\`ts
// Good: file path in comment, realistic names
// examples/auth/login.test.ts
import { [Thing] } from "[package]";
\`\`\`

| Element | Rule |
| --- | --- |
| *Fences*  | *Language* *tag* *required* *—* *no* *huge* *blocks* *—* *link* *to* *repo* *for* *long*  |
| *Line* *length*  | *~* *80* *in* *prose* *—* *wider* *ok* in *code*  |
| *Mermaid*  | *version* *pin* *if* *using* *new* *syntax* *—* *test* in *CI* *or* *preview*  |

- *Avoid* *[\`[real* *passwords* */* *tokens* */* *customer* *domains\`] —* *use* *[\`[…\`]* *or* *[\`[example* *.com* */* *…\`]**

\`\`\`mermaid
flowchart LR
  A[Start] --> B[End]
\`\`\`

## Screenshots
- *Narrow* *to* *relevant* *—* *annotate* *with* *numbers* *referencing* *steps*  |
`,
  }
];
