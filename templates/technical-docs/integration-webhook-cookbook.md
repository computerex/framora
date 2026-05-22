# Outbound webhooks: cookbook

> **Event* *types* *[`[enum* *in* *OpenAPI`] —* *at-least-once* *—* *[customer* *must* *dedup* *by* *`[id`]**

```http
POST [customer URL] HTTP/1.1
X-[Product]-Signature: t=[ts],v1=[hex]
X-[Product]-Id: wh_...
X-[Product]-Event: com.[org]...
```

```json
{ "id": "evt_...", "type": "...", "created": 0, "data": {} }
```

| Customer setup step | |
| --- | --- |
| *Return* *2xx* *in* *[`[30`]s*  |  |
| *Reply* *[`[200`] *with* *empty* *or* *json*  |  |

- *We* *retry* *with* *[`[exponential* *+ *jitter* */* *max* *attempts* */* *DLQ* *replay`] —* *see* *[`[main* *webhook* *doc* */* *API`]**
