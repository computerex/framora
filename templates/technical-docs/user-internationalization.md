# Internationalization (i18n)

> How [Product] handles **UI language** and **local formats** for [global teams].

## Supported locales
| Locale | UI | Date/time | First-day-of-week | Status |
| --- | --- | --- | --- | --- |
| `[en-US]` | [yes] | [yes] | Sunday | [GA] |
| `[de-DE]` | [yes] | [yes] | Monday | [GA] |
| `[xx-YY]` | [beta] | [yes] | [n/a] | [beta] |

- **Set per user** at [path] — *override* org default if [flag]

## Formats
- **Dates:** [ISO-8601 in API] — **display** with [user locale] — *timezone* = `[user|resource|org]` — [docs link]
- **Numbers & currency:** [Intl.NumberFormat] with `[currency code]` from [source field]

```ts
// Example: API is UTC; UI converts to [America/Los_Angeles] when [toggle] on
```

## User-generated content
- *Translation of your data* is **[not automatic]** — *export* for [TM tools] with [columns]
- *Right-to-left* (RTL) UI: [supported | partial] — [caveat in visual builder]

## Search & collation
- **Analyzer** for `[language]` in [index] — *mixed* language [notes]

## Gaps & roadmap
- [Locale] missing for [UI string category] — *vote* at [link]
