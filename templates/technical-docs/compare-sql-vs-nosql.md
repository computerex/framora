# Compare: SQL vs document (for [use case])

> *Not* *a* *one-size* *—* *hybrid* *is* *common* *—* *this* *table* *assumes* *OLTP* *on* *[`[Postgres* *vs* *Mongo* */* *Dynamo* *…`]*]**

| Dimension | Relational (SQL) | Document (wide-column / doc) | Winner here |
| --- | --- | --- | --- |
| *Ad-hoc* *joins* *+* *integrity*  | *Strong*  | *Weaker* *or* *app-enforced*  | *SQL*  |
| *Schema* *flex* *in* *early* *product*  | *Migrations*  | *Faster* *iterations*  | *Document*  |
| *Scale-out* *patterns*  | *Read* *replicas* *+* *shard* *if* *needed*  | *Native* *partition* *keys*  | *Contextual*  |
| *Ops*  | *Mature* *tooling*  | *Varies*  | *—*  |

```text
# Example: store nested JSONB in SQL when you need both
CREATE TABLE [t] ( id uuid, data jsonb, ... );
```

## Migration note
- *If* *choose* *document* *now* *—* *plan* *for* *[`[analytical* *exports* *to* *warehouse* */* *parquet* */* *columnar* */* *later` —* *avoid* *losing* *queryability*]**

## Suggested default for [our product]
- *[`[Start* *on* *Postgres* *+ jsonb* *for* *flex* *+ *migrations* *…` or* *[`[Mongo* *if* *team* *deep* *expertise`]*  *—* *justify* in *[`[ADR* *NN`]**
