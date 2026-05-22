# Integration: Staging for partners

> *Never* *use* *prod* *PII* *in* *sandbox* *—* *[`[synthetic* *fixtures* */* *Faker* *seeds* */* *…`]**

```text
# Partner sandbox
Base URL: https://[sandbox].partner.example
Rate limit: [N]/min
Auth: [separate key header]
```

| Aspect | May differ from prod? | How we test |
| --- | --- | --- |
| *Features*  | *[`[new* *beta* *flags* */* *…`]*  | *contract* *tests*  |
| *Data*  | *yes*  | *refresh* *[`[daily/weekly`] —* *document* *deltas*  |
| *Uptime*  | *lower*  | *tolerate* *in* *[`[retry* *policy* */* *not* *in* *SLA`]**

- *Map* *environments* *1:1* *—* *[`[our* *stage* *↔* *their* *sandbox* */* *not* *mix`]**
