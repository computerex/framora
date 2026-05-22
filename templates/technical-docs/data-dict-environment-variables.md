# Data dictionary — Environment variables

> **Convention* *—* *ALL_CAPS* *—* *prefix* *`[PRODUCT* *_` —* *never* *log* *values* *in* *non-debug* *logs*]**

| Name | Required | Description | Example (non-secret) | Secret? |
| --- | --- | --- | --- | --- |
| `[PRODUCT* *_ENV`]*  | *yes*  | *dev|stage|prod*  | *prod*  | *no*  |
| *[`[PRODUCT* *_PORT`]*  | *no*  | *bind*  | *8080*  | *no*  |
| *[`[PRODUCT* *_DATABASE_URL`]*  | *yes*  | *Postgres* *DSN*  | *postgres://* *…*  | *yes*  |
| *[`[PRODUCT* *_OAUTH* *_CLIENT* *_ID`]*  | *if* *SSO*  | *IdP* *client* *id*  | *`[abc`]  | *no*  |
| *[`[PRODUCT* *_OAUTH* *_CLIENT* *_SECRET`]*  | *if* *SSO*  | *IdP* *secret*  | *`[****`]  | *yes*  |

```bash
# .env.local (development only — not committed)
export [PRODUCT]_[KEY]="[value]"
```

## Mapping to config file
- *If* *both* *env* *and* *YAML* *set* *same* *key* *—* *[`[precedence* *env* *>` yaml* *default*] —* *documented* *in* *[`[config* *merge* *order`]**

## 12-factor notes
- *Config* *in* *env* *—* *build* *is* *immutable* *—* *release* *stage* *injects* *env* *per* *[`[k8s* *secret* */* *param* *store`]**
