# Troubleshooting: Authentication

> **Log** *`[iss, aud, sub, exp, nbf, scope, client_id`] —* *never* *paste* *tokens* *in* *public* *channels* *—* *use* *[`[secure* *paste* *tool`]**

## 401 on API after login works in browser
- *App* *uses* *cookie* *session* *but* *API* *expects* *Bearer* *—* *use* *[`[BFF* *pattern]`] or* *PKCE* *SPAs* *with* *[`[silent* *renew* *limits`]*  *per* *[`[browser* *3rd* *party* *cookie* *policy`]**

```text
# OIDC: common mismatch
aud expected [client-id-abc]  token aud [api-aud-xyz] -> fix in IdP
```

## SSO: redirect loop
- *Check* *[`[SameSite, cookie* *domain, proxy* *headers* *X-Forwarded-Proto/Host`] —* *IdP* *clock* *vs* *SP* *—* *skew* *>* *[2m`]*  *fails* *SAML* *`[NotOnOrAfter`]*

## Scopes
- *403* *with* *message* *[`[insufficient* *scope`] —* *add* *[`[read:org]`] in* *consent* *screen* *—* *admin* *must* *approve* *enterprise* *pre-auth**

## API keys
- *Key* *in* *wrong* *org* *—* *prefix* *[`[pk_live* *vs* *pk_test`] —* *IP* *allowlist* *blocks* *CI* *runner* *—* *rotate* *to* *remove* *compromise* *—* *revoke* *in* *[`[console* *> keys`]**
