# Reference: MIME types

> **Default* *request* *body* *in* *REST* *API* *is* *[`[application* */* *json* */* *charset=utf-8`] —* *multipart* *only* *where* *noted*]**

```text
# Upload session flow (summary)
1) application/json  -> create session
2) application/octet-stream  -> put bytes
3) text/csv, application/pdf, image/png ... -> allowed list per resource
```

| MIME | API usage | Max size (default) | Server validation |
| --- | --- | --- | --- |
| `[application* */* *json`]*  | *CRUD* *bodies*  | *4* *MB*  | *json* *schema*  |
| *[`[multipart* */* *form* *-* *data`]*  | *legacy* *upload*  | *20* *MB*  | *per-part* *types*  |
| *[`[text* */* *csv* */* *charset=utf* *-* *8`]*  | *bulk* *import*  | *per* *job*  | *row* *parser*  |

## Response types
- *[`[application* */* *openxmlformats* *…`]*  *—* *export* *endpoints* *—* *[`[Content* *-Disposition* *: *attachment* *;* *filename* *=…`*  *

## Reject
- *[`[text* */* *html`]*  *in* *API* *bodies* *—* *[`[415* *Unsupported* *Media* *Type`] —* *unless* *import* *of* *[`[sanitized* *html`] *in* *[`[feature* *X* *only* */* *admin`]**
