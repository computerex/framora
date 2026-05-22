# Set up logging

> **Transport:** *stdout* JSON in **[prod]** — *ship* *to* **[sink]** with **[TLS]**.

## Log schema
```json
{ "t": "ISO-8601", "lvl": "info|warn|error", "svc": "[name]", "trace": "[id]", "msg": "...", "ctx": { } }
```

- **PII** *fields* *deny-list* *or* *mask* *before* *emit* — *compliance* *[GDPR/…]*

## Correlation
- **Trace id** in *HTTP* *response* *header* `[X-Request-Id]` *and* *every* *log* *line* *when* *available*
- *Join* *with* *metrics* *via* *shared* *labels* `[service, version, env]`

## Retention & cost
- **Hot** [3d] **Warm** [30d] **Cold** *archive* [1y] — *sampling* *on* *debug* *after* *volume* *spike*
