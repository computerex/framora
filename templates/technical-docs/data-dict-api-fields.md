# Data dictionary — API [Resource name]

> **OpenAPI* *tag* *[`[tag]` *—* *version* *`[v2` —* *content-type* *`[application* */* *json* */* *UTF-8`]*  *

| JSON path | Type | Required | Read-only | Description |
| --- | --- | --- | --- | --- |
| `[.id`]*  | *string* *(uuid* *v4)*  | *yes*  | *yes*  | *Stable* *id*  |
| *[`[.name`]*  | *string* *1–* *[`[N`]*  | *create*  | *no*  | *Display* *name*  |
| *[`[.status`]*  | *enum* *`[…` values]*  | *no*  | *no*  | *State* *—* *see* *state* *machine* *[`[link`]*  |
| *[`[.settings.theme`]*  | *string* *`[…`]*  | *no*  | *no*  | *one* *of* *[`[light|dark|auto`]*; *default* *[`[auto`]*  |
| *[`[.metadata.$key`]*  | *map* *<string, string>*  | *no*  | *—*  | *Max* *[`[M`]* *keys, * *values* *≤* *[`[1k`]* *chars*  |

```json
{ "id": "[uuid]", "name": "Example", "status": "active", "settings": { "theme": "dark" } }
```

## Deprecations
| Field | Deprecated since | Remove after | Use instead |
| --- | --- | --- | --- |
| *[`[.legacy` fields]*  | *[`[1.2.0`]*  | *[`[2.0.0`]*  | *[`[.newPath`]*  |

## Validation
- *Regex* *for* *[`[name`]*: *`[pattern` in* *OpenAPI* *—* *custom* *errors* *[`[CODE]` in* *[`[error* *catalog* *doc`]:**  *—* *i18n* *message* *keys* *[`[api.field* *…`]*  *
