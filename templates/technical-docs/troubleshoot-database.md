# Troubleshooting: Database

> **Read-only* *replica* *lag* *alert* *>* *[N]* *s* *—* *action* *tree* *below* *applies* *to* *[`[Postgres]`]**

## High lock wait time
- *Find* *blocker* *with* *[`[pg_locks* *+_ pg_stat_activity`] —* *long* *open* *transactions* *from* *[`[app* *pool* *misconfig`] —* *set* *[`[idle_in_transaction* *session* *timeout`]*  *tighter* in *[`[ms`]*

```sql
-- Example: blockers
SELECT * FROM pg_stat_activity WHERE state = 'active' ORDER BY query_start;
```

## Connection limit exceeded
- *Pgbouncer* *in* *transaction* *mode* *—* *reduce* *max* *connections* *per* *pod* *or* *raise* *instance* *class* *—* *chart* *[`[connections* *vs* *cpu`]**

## Replication lag
- *Check* *[`[wal* *send/recv`] *rates* *—* *large* *batch* *job* *on* *primary* *—* *move* *to* *read* *replica* *aware* *routing* *or* *pause* *job**

## Bloat
- *Dead* *tuple* *ratio* *>* *[N]%* *on* *[`[table`] —* *autovacuum* *tuning* *—* *hot* *update* *split* *into* *[`[detail* *table+FK`]**

## Data corruption (rare)
- *If* *checksum* *error* *—* *failover* *per* *[`[runbook* *RTO`] —* *do* *not* *delete* *WAL* *manually* *—* *call* *[`[DBA* *on* *call`]**
