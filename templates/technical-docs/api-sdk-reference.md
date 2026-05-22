# [Product] SDK — [Language]

> Idiomatic client for [public API] — package `[org/package-name]`.

## Install
```bash
# npm
npm install [package]
# or
[uv add package / pip install ...]
```

## Quick configuration
```[lang]
import { [Client] } from "[package]";

const client = new [Client]({
  apiKey: process.env.[[PRODUCT]_API_KEY], // or read from [path]
  baseURL: "https://[region].api.[domain]/[v1]",
  timeout: [30_000], // ms
  maxRetries: [3],   // for [429, 5xx]
});
```

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `[baseURL]` | string | [value] | Override environment |
| `[headers]` | object | [value] | Extra metadata |

## Main methods
| Method | Parameters | Returns | Throws |
| --- | --- | --- | --- |
| `[listX]` | `[params]` | `[Page<X>]` | `[ApiError]` on [codes] |
| `[createX]` | `[input]` | `[X]` | [validation] |

```[lang]
const page = await client.[listX]({ cursor: undefined, pageSize: 50 });
for await (const item of page) { /* ... */ }
```

## Error type
- **`[ApiError]`:** `code`, `message`, `requestId`, `[details]` — map to your UI

## Versioning
- **Semver** aligned with [API version] — see `[CHANGELOG link]` for breaking changes
