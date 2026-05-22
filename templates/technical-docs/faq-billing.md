# Billing FAQ

> **Provider:** [Stripe/Billing system] **Currency:** *[USD, …]* **Tax** *[VATEU: reverse charge, …]*

## How are we charged?
- **Model:** [per seat / per usage / hybrid] — *billing* *cycle* *[`[monthly|annual]`]*

| Meter | What counts as 1 |
| --- | --- |
| [API call] | [definition] — *excludes* *[`[health]`]]* *200s* *if* *documented* |
| [Storage GB-mo] | *Daily* *average* *×* *rate* *—* *see* *invoice* *line* *detail* *download* *CSV* *—* *available* in *[path]* |

## Overage
- *Soft* *cap* *email* *at* *[%]* — *hard* *stop* *optional* *—* *requires* *[`[setting]` in [console]*

## Invoices
- *PDF* *and* *CSV* *—* *PO* *number* *field* *—* *credit* *card* *vs* *wire* *—* *Net* *[N]*

## Cancellations and refunds
- *Cancel* *anytime* *—* *access* *until* *period* *end* *—* *refund* *policy* *per* *[TOS* *section* *[x]]* — *pro-rated* *only* *if* *[jurisdiction* *rule]*

## Dunning
- *If* *payment* *fails* *—* *retry* *schedule* *—* *service* *restrictions* *after* *[D]* *days*
