# Theming & white-label

> Align the **customer-facing** and **in-app** experience with your brand in [Product].

## Where branding appears
- **App shell:** [logo, app name, favicon]
- **Auth pages:** [login, SSO, error pages] — *when* [using hosted IdP, limited]
- **Email:** [invites, alerts] — *footer, reply-to*

## Brand assets
| Asset | Spec | Upload |
| --- | --- | --- |
| **Logo (light/dark)** | [SVG, max width] | [Path → …] |
| **Favicon** | [32/48 multi] | [Path → …] |
| **[Login background]** | [JPG, size cap] | [Path → …] |

## Color tokens
- **Primary** `[#hex]` — *used* for [buttons, links, focus] — we compute **contrast** with [AA]
- **Accent** for [badges, charts] — *avoid* [clashing] with [data viz palette]

```text
# Preview checklist
- [ ] Focus ring visible
- [ ] Deuteranopia-friendly charts (enable [a11y mode])
- [ ] Mobile nav contrast
```

## Email
- **From:** `[brand] <noreply@...>` — *SPF/DKIM* set by [domain verification]

## Multi-brand (if available)
- **Mapping:** [subdomain, domain, region] → [brand set]
- **Fallback** when not matched: [default org brand]
