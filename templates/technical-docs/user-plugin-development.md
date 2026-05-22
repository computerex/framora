# Plugin development

> Build **[extensions]** that add UI panels, background jobs, and API actions to [Product].

## Architecture
- **Host:** [Product] enforces a **strict** API for [commands, context, events]
- **Your code:** [JS bundle / WASM / native helper] in **[isolated] runtime**

```jsonc
// /[manifest.json]
{ "id": "com.example.[name]", "version": "1.0.0", "permissions": ["[read:items]", "[ui.panel]"] }
```

## Capabilities
| Permission | Can access |
| --- | --- |
| `[read:items]` | [list resources]
| `[write:webhook]` | [register outbound URL]
| `[ui.panel]` | [sidebar slot]

## Local development
1. `[product] plugins init [name]`
2. `[product] plugins dev` — **watch** and hot-reload
3. **Connect** a **dev** org in **Settings → [Plugins] → [Load unpacked]**

## UI integration
- **Entry:** `[View contribution ID]` — *props:* `[context]` (user, org, [resourceId])

```ts
// pseudocode: render()
export function Panel(ctx: { orgId: string; resourceId?: string }) { /* ... */ }
```

## Publishing
- `[product] plugins publish` — *review* [1–2 days] — [policies, security scan]
- [Semver] — *breaking* changes require [new major] + [migration note]

## Sandboxing & safety
- **No [raw network] without** `[net:*]` — [CSP for HTML] — *secrets* via [secure storage API] only
