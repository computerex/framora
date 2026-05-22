# Deploy to Railway

> **Project** `[name]` — *stacks* *for* *API + worker +* *[managed DB if offered]*

## Prereqs
- **Install** *CLI* `[npm i -g @railway/cli]` — *`[railway login]`*

```bash
cd [app-dir]
railway init
railway up
```

## Services
- **`[api]`:** *public* *HTTP* *port* **[8080]**
- **`[worker]`:** *no* *public* *port* *—* *CRON* *or* *queue* *consumer*
- **`[db]`:** *plugin* *or* *external* *URL* *with* *TLS*

## Environment
- *Group* *variables* *per* *environment* **[dev/stage/prod]** — *reference* *shared* *`[JWT_ISSUER]`*
- *Attach* *volumes* *only* *for* **[cache/ ephemeral]** — *S3-compatible* for *durable* *files*

## Health
- *Define* **[health check path]** *—* *startup* *probe* *timeout* [s]

## Cost guardrails
- *Set* *usage* *limits* and *alarms* *in* *billing* *—* *scale* *to* *zero* *where* *safe*
