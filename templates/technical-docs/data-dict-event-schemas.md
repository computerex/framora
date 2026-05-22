# Data dictionary — Event schemas

> **Format* *[`[CloudEvents* *1.0* *+ *our* *extensions` **or* *proprietary* *[`[envelope* *vN`]*]**

## Envelope
```json
{ "id": "evt_...", "type": "com.[org].resource.verb", "time": "ISO-8601", "data": { }, "specversion": "1.0" }
```

| Field | Rules |
| --- | --- |
| `[id`]*  | *Globally* *unique* *—* *UUID* *v4* *or* *[`[ksuid`]*  |
| *[`[type`]*  | *Lowercase* *—* *reverse* *DNS* *—* *version* *in* *[`[data.schemaVersion`]*, *not* *in* *type* *string*  |
| *[`[data`]*  | *Must* *parse* *as* *[`[JSON* *<64KB* *default* */* *configurable* */* *enterprise* */* *1MB* */* *if* *large* *blob* *ref* *in* *`[data.attachment`]**

## Domain payload (example `[com.[org].order.placed`])
```json
{ "orderId": "[id]", "customerId": "[id]", "lineItems": [ { "sku": "...", "qty": 1 } ], "totals": { "currency": "USD", "amountMinor": 1000 } }
```

| Change type | Compat | Process |
| --- | --- | --- |
| *Add* *optional* *field*  | *forwards* *compatible*  | *no* *consumer* *change*  |
| *Rename* *or* *type* *change*  | *breaking*  | *bump* *`[schemaVersion` in* *[`[data` *—* *dual* *publish* *N* *days*  |
