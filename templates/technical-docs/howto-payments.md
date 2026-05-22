# Add payments

> **Provider:** [Stripe/Adyen/…] in **[mode: test|live]**.

## Scope
- *Never* *touch* *PAN* *—* *use* *[hosted fields / tokenization]*
- **Webhook** *endpoint* *signed* *with* *`[whsec_]` *—* *verify* *before* *mutations*

```ts
// Idempotency-Key on every user-initiated call
headers["Idempotency-Key"] = [stable key per user+intent+amount];
```

## States
- **State machine** *chart* in *[appendix link]* — *map* *provider* *status* *→* *internal* *`[OrderStatus]`

## Reconciliation
- *Nightly* *job* *vs* *provider* *—* *alert* *on* *mismatches* *>* *[threshold]*
- *Refunds* *require* *dual* *control* *in* *prod* *if* *amount* *>* *[$N]*
