# API versioning & changelog

> How [product] evolves APIs without surprise breaks.

## Version scheme
- **Path:** `[ /v1 /v2 ]` — [major] bump for **breaking** wire changes
- **Header (optional):** `[Accept-Version: 2024-10-15]` — for [date-based] (document)

## Breaking vs non-breaking
| Change | Classification |
| --- | --- |
| Add optional field/parameter | [non-breaking] |
| Tighten validation | [often breaking] for invalid-but-accepted data |
| Remove/rename | [breaking] |
| [Enum] value add | [non-breaking] — value remove: [breaking] |

## Deprecation policy
- **Announce:** in [changelog, email, in-response header `[Deprecation: true]` / `[Sunset]`]
- **Window:** [min N months] from deprecation to removal — [case-by-case] for [security]

| Stage | What you see | Action |
| --- | --- | --- |
| `[stable]` | — | [none] |
| `[deprecated]` | Warnings, docs | Migrate to [replacement] |
| `[removed]` | 4xx/redirect | [must be on] `[v2]` |

## Changelog
- **Subscribe:** [RSS/Atom, email, Slack]
- **Format:** [keep-a-changelog] with API section — [link: URL]

```md
## [1.2.0] - [YYYY-MM-DD]
### API
- **BREAKING:** [endpoint] [change] — migration: [link]
- **Added:** [new optional field]
```

## Your checklists
- [ ] **Pin** integration tests to a **supported** [version] range
- [ ] **Log** and alert on [deprecation] headers
