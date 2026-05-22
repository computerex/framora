# Deploy to Vercel

> For **[Next.js / static / serverless API]** in org **[`[team]` on Vercel]**.

## Connect repo
- **Import** [GitHub org/repo] — *Production* *branch* `[main]`
- **Root** *monorepo:* *set* *directory* `[apps/web]`

## Environment variables
| Name | Environment | Value source |
| --- | --- | --- |
| `[API_URL]` | **Production** | *encrypted* in dashboard |
| `[PREVIEW_ONLY]` | *Preview* | *optional* *feature* *flags* |

*Never* *commit* — *use* *Vercel* *secrets* *or* *integration* *with* *[env sync]*

## Domains
- **Production** `[app.example.com]` — *DNS* *CNAME* to **[cname.vercel-dns.com]**
- **Edge config** (if any): **[kv / middleware path]**

## Build settings
- **Node** **[20.x]**, *install* `[pnpm i --frozen]`, *output* *tracing* *enabled* for *[lambda size]*

## Checklist
- [ ] *Preview* *PR* *passes* **[e2e]**
- [ ] *Lighthouse* *budget* in **[CI]**
- [ ] *Security* *headers* *via* *[`vercel.json`]*

## Rollback
- *Instant:* *Promote* *previous* *deployment* *from* *Deployments* *tab* — *or* *`[vercel rollback]`*
