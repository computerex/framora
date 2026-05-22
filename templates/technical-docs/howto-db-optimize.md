# Database optimization

> **Engine:** [Postgres 16 / MySQL 8] on **[managed: RDS/Cloud SQL]**

## Read path
- **EXPLAIN (ANALYZE, BUFFERS)** for **[slow query] —* *add* *composite* *index* *on* *`[tenant_id, created_at desc]`*
- *Covering* *index* *for* *hot* *list* *queries* *—* *watch* *write* *amplification* on *high* *churn* *tables* on *`[table]`

```sql
-- Example (adapt)
CREATE INDEX CONCURRENTLY idx_items_t_c ON items (tenant_id, created_at DESC) INCLUDE (id, title);
```

## Write path
- *Batch* *inserts* *where* *safe* *—* *partition* *by* *time* *if* *> [TB]*

## Ops
- **Autovacuum** *tune* for *[high* *update]* *tables* — *repack* *during* *window* *if* *bloat* *> [threshold]*
- **Replicas** *for* *read-only* *dashboards* *—* *lag* *alert* *>* *[s]*
