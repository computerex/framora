# Reference: HTTP status codes (internal)

> **We* *follow* *[`[RFC* *9110` *semantics* *—* *custom* *codes* *discouraged* in *public* *API* *—* *see* *[`[error* *catalog* *doc* */* *API` for* *app-specific* *payloads*]**

| Code | When to return | Do not use for | Example body `[type`]*  |
| --- | --- | --- | --- |
| `[200`]*  | *Success* *with* *body*  | *created* *resources*  | *N/A*  |
| `[201`]*  | *Resource* *created*  | *idempotent* *PUT*  | *object*  |
| `[202`]*  | *Async* *accepted*  | *synchronous* *success*  | *`[job* *id* */* *status* *URL`*  |
| `[204`]*  | *No* *content* *delete*  | *if* *client* *expects* *body*  | *empty*  |
| *[`[400* *–* *499`]*  | *Client* *correctable* *issues*  | *blame* *infrastructure* *without* *proof*  | *`[invalid_request* *…`*  |
| *[`[500* *–* *599`]*  | *Unexpected* *server* *failure*  | *user* *typos*  | *`[internal* *+ requestId`*  |

```text
# Mapping to `[problem+json`]
[table in API error codes doc] — this page is the HTTP layer only
```

## Caching
- *[`[304* *Not* *Modified`]*  *—* *requires* *ETag* *+` *If-None-Match* *on* *GET* *—* *see* *[`[caching* *guide`]:**  *
