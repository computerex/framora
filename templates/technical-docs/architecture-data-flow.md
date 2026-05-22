# Data flow — [End-to-end]

> **Data classes:** *Public* *|* *Internal* *|* *Confidential* *|* *Restricted* *—* *see* *[`[handling* *matrix`]*  *—* *this* *page* *is* *flow* *only* *

```mermaid
flowchart LR
  S[Source] -->|PII? [yes] strip before log| I[Ingestion API]
  I -->|append-only| A[(Object store: encrypted)]
  I -->|normalized row| T[(OLTP)]
  T -->|CDC| Srh[(Search index)]
  Srh -->|query| U[User browser]
```

| Stage | Where PII can appear | Minimization |
| --- | --- | --- |
| *Ingest* | *Request* *body* *fields* *[`[email* */* *name* */* *address`]*  | *Store* *only* *[`[hashed* *email* *+` *reversible* *vault* *ref* *if* *needed* *for* *support* *only*] |
| *Logs* | *None* *—* *[`[request* *id* *+` *redacted* *fields* *only* *—* *[`[pseudonymous* *user* *id`]*  |
| *Analytics* | *Event* *[`[feature* *used, duration`]*  *—* *no* *raw* *content* *—* *[`[DMP* *consent* *flag* *=`1] |

## Exports
- *Customer* *export* *—* *async* *job* *—* *signed* *URL* *—* *audit* *row* in *[`[export_audit` table]*  *

## Retention
- *Drop* *[`[A]* *and* *B`]* *on* *[`[N]* *day* *schedule* *—* *legal* *hold* *overrides* *—* *see* *[`[legal* *runbook`]*  *
