# [Resource name] `[METHOD] /path`

> Contract for a single [product] REST endpoint.

## Overview
- **Purpose:** [one-line description]
- **Stability:** [beta | stable | deprecated] since [version]
- **Idempotency:** [required | not applicable] (for `Idempotency-Key`)

## Authentication
- **Schemes:** [Bearer / API key / mTLS]
- **Scopes:** `[read:items]` — [rationale]

## Path & query
| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| [id] | path | string (uuid) | yes | [resource id] |
| [q] | query | string | no | [search filter] |

## Request body
```http
[METHOD] [baseUrl]/[v1]/[resource]/{[id]}?cursor=[next]
Content-Type: application/json
```

```json
{ "name": "[string]", "options": { "[key]": true } }
```

## Responses
| Status | Body | When |
| --- | --- | --- |
| 200 | [Resource] | Success |
| 400 | Error | Validation |
| 401 | Error | Auth failure |
| 429 | Error | Throttled (see `Retry-After`) |

```json
{ "id": "[uuid]", "createdAt": "[ISO-8601]" }
```

## Error model
- **Type:** [problem+json URL or internal code]
- **Retryable:** [yes for 429/5xx with backoff | no for 4xx except 429]

## Examples
- **cURL**
```bash
curl -sS -X [METHOD] -H "Authorization: Bearer $TOKEN" \
  "[baseUrl]/[path]"
```
- **Changelog (endpoint-level):** [version] — [behavior change]
