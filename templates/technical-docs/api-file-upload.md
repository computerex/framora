# File uploads

> Upload and attach files to [resources] with safe defaults.

## High-level flow
1. `[POST /uploads/sessions]` — returns `[uploadId]` and **constraints**
2. **PUT** to presigned URL(s) with correct `[Content-Type]` / [parts]
3. `[POST /uploads/.../complete]` — [checksum verification | virus scan]

## Constraints
| Limit | Value |
| --- | --- |
| Max file size | [N MB/GB] |
| Allowed types | [mime allowlist] |
| [Dimensions] (images) | [max W×H] |

## Create session
```json
{ "name": "report.pdf", "size": 120000, "contentType": "application/pdf" }
```

```json
{ "uploadId": "upl_...", "putUrl": "https://[signed]", "headers": { "Content-Type": "application/pdf" } }
```

## Direct upload (browser)
- Use `[XMLHttpRequest / fetch with progress]` — [CORS] preflight on [URL]

## Completion & attachment
- **`[POST /resources/.../files]`:** link `[uploadId]` — server checks [Etag match]

## Failures
| Symptom | Fix |
| --- | --- |
| `[403 on PUT]` | URL expired; request new `[putUrl]` |
| `[size_mismatch]` | Re-upload; verify content-length
