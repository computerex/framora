# Reference: Units & standards

> **Money* *—* *always* *integer* *in* *[`[minor* *units`]*  *—* *never* *float* *—* *currency* *code* *`[ISO* *4217`: [USD* *…] —* *see* *[`[Stripe* *docs* *pattern`] if* *undecided*]**

```json
{ "amountMinor": 1999, "currency": "USD" }
```

| Concept | API representation | UI display | Notes |
| --- | --- | --- | --- |
| *Instant* *in* *time*  | *string* *[`[RFC* *3339* *with* *offset* */* *Z`]*  | *User* *TZ* *from* *settings*  | *Store* *UTC* *—* *convert* *in* *UI*  |
| *Date* *only*  | *string* *`[YYYY* *-MM* *-DD` in* *[`[org* *TZ* *or* *UTC* *—* *document* *which* */* *bias*] | *date* *picker*  | *inclusive* *end* *dates* *—* *[`[half-open* *interval* *[)* *in* *reports* */* *see* *`[billing* *period* *doc`]**
| *Durations*  | *int* *seconds* *or* *string* *[`[ISO* *8601* *duration`] as* in *OpenAPI*  | *human* *readable*  | *clarify* *leap* *seconds* *—* *[`[N/A* *for* *business* *logic` if* *not* *needed*]**
