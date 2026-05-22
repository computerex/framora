# Authentication

> How [product] verifies identity and enforces [least privilege] for [API / dashboard / webhooks].

## Supported schemes
| Scheme | When to use | Secret storage |
| --- | --- | --- |
| OAuth 2.0 / OIDC | User-delegated access | [short-lived tokens, refresh] |
| API key | Service-to-service | [vault / env, never in repo] |
| mTLS | High-trust B2B | [cert rotation] |

## Obtaining tokens
1. [Register app / create integration] in [console URL]
2. [Authorization code] flow: redirect to `[authorize?...]` — callback receives `code`
3. Exchange for tokens at `[POST /token]`

```http
POST [baseUrl]/oauth/token
Content-Type: application/x-www-form-urlencoded
grant_type=authorization_code&code=[...]&client_id=[...]
```

## Using tokens
- **Header:** `Authorization: Bearer <access_token>`
- **Clock skew:** allow [±5 min] for `exp` claims

## Scopes
| Scope | Allows |
| --- | --- |
| `[read:data]` | [GET/POST read-only] |
| `[write:data]` | [mutations] |
| `[admin:org]` | [dangerous] — document approval flow |

## Rotation & revocation
- **API keys:** [rotate in console] — old key valid for [N hours]
- **Incidents:** [revocation endpoint] + [notify security]

## Denied requests
- **401** — missing/invalid — include `[WWW-Authenticate]` where required
- **403** — valid identity, insufficient scope
