# Database migration: [From engine] → [To engine or schema]

> *RTO* *[`[M]* *min`] *RPO* *[`[S]* *sec`]*  *—* *rollback* *via* *[`[restore* *snapshot* *id`]*  *captured* *at* *[`[T0`]*  *

## Strategies
- **Option* *A* *—* *Logical* *replication* *or* *CDC* *([Debezium* */* *native* */* *DMS`* ) *—* *low* *downtime**
- *Option* *B* *—* *pg_dump* */* *restore* */* *major* *version* *[`[upgrade`]*  *—* *brief* *lock* *on* *cutover* *

```text
# Cutover runbook
T-60m: pause batch jobs, confirm replication lag < [N]s
T-15m: enable read-only on [source]
T-0:   repoint [connection string] in [secret]
T+5m:  run verification SQL below
T+10m: disable read-only, resume jobs
```

## Schema transforms
- *Map* *types* *[`[time* *zone* *columns* */* *UUID* *v7* */* *enum`]*  *per* *[`[migration* *N.sql`]*  *—* *order* *matters* *—* *test* *in* *staging* *with* *[`[prod-snapshot* *sanitized`]*  *

```sql
-- checksum rows after cutover
SELECT [tenant_id], COUNT(*), max([updated_at]) FROM [table] GROUP BY 1;
```

## Drills
- *Tabletop* *quarterly* *—* *unplug* *network* *for* *[`[replica`] *and* *verify* *failover* *—* *doc* *in* *[`[DR* *exercise* *id`]*  *
