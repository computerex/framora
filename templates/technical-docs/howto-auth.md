# Implement authentication

> **Model:** *Users* via **[OIDC / password + MFA]**, *services* via **[mTLS / API key / workload identity]**.

## User auth (browser)
- **Redirect** *to* *IdP* — *`[state]`+*`[PKCE]`*
- **Session** *cookie* — `[HttpOnly, SameSite, Secure, path]` — *rotation* *on* *privilege* *change*

```text
# Callback URL allowlist
https://[app]/auth/callback
```

## APIs
- **Bearer** *JWT* *—* *validate* *iss, aud, exp, nbf* *and* *`[jku]` / *JWKS* *pinning* *policy**
- *Optional* *step-up* *MFA* *for* *[sensitive* *operations]*

## Service-to-service
- *Short-lived* *tokens* *from* **[STS]** — *no* *shared* *password* *between* *services*

## Audit
- *Log* *auth* *decisions* *with* *`[reason code]` — *redact* *secrets*
