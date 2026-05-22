# Data dictionary — Database tables

> **Schema* *version* *[`[2025Q2`]*  *—* *managed* *by* *[`[migrations* */* *prisma* */* *flyway` in* *path* *[`[db/migrations* */* *…`]*  *

```text
# Legend
PK = primary key  FK = foreign key  UK = unique  IX = non-unique index
```

| Table | Purpose | Main keys | Notes |
| --- | --- | --- | --- |
| `[tenants`]*  | *Org* *tenant* *metadata*  | *PK* *`[id* *::uuid`]*, *UK* *`[slug`]*  | *Soft* *delete* *—* *[`[deleted_at`]*  *—* *RLS* *or* *app* *filter* *on* *every* *query*  |
| `[users`]*  | *User* *account*  | *PK* *`[id`]*, *FK* *`[tenant_id* *→* *tenants.id`]*  | *PII* *—* *encrypted* *at* *rest* *for* *[`[email`] *in* *[`[…`]*  *column*  |
| `[items`]*  | *Core* *domain* *row*  | *PK* *[`[id`],* *FK* *[`[tenant* *id* */* *owner* *id`]*, *IX* *[`[(tenant* *id,* *created* *at* *desc`] for* *lists*  | *version* *for* *optimistic* *concurrency* *—* *[`[xmin* *\|* *ver`] as* in *API*  |

```sql
-- Example FK integrity mode
[ON UPDATE CASCADE] [ON DELETE RESTRICT|SET NULL]
```

## Relations (ER excerpt)
*[`[users* *1—`** *n* *`[sessions`]*, *items* *n—* *1* *[`[folders` optional]*]**

## Retention
- *Purge* *[`[sessions`]*  *older* *than* *[`[N]* *days* *—* *keep* *[`[items`]*  *per* *[`[legal* *hold* *flag* *in* *`[items.meta`]*]*
