# Troubleshooting: Common errors

> **Log query** *—* *[`[requestId, errorCode, userId, route]`]* *—* *retention* *[days]**

| Symptom | Code / message | Most likely cause | Next step |
| --- | --- | --- | --- |
| Blank screen after login | `[AUTH_SESSION_EXPIRED]` | Clock skew or blocked cookies | *Check* *[`[SameSite]`],* *NTP* *—* *try* *incognito* *—* *clear* *site* *data* |
| `[400] on POST` | *[`[FIELD_REQUIRED]`]* | Client missing field | *Compare* *with* *[`[OpenAPI]`] —* *fix* *[`[body.path]`]**
| `[429] everywhere` | *rate_limited* | Test traffic or misconfigured key | *Inspect* *[`[X-RateLimit-*` headers* —* *raise* *quota* *or* *fix* *client* *loop* |
| *Webhook* *never* *arrives* | *verify* *fail* or *2xx* *not* *from* *app* | *Bad* *signature* *or* *WAF* *block* | *Verify* *raw* *body* *HMAC* *—* *open* *firewall* *for* *[`[provider* *IPs]* —* *replay* *test* *with* *[`[curl]`]**

```text
# Quick triage order
1) Request id
2) User/org context
3) Upstream [dependency] health
4) Recent deploy? Check [change log] correlation
```

## Still stuck
- *Open* *ticket* *with* *[`[HAR]+timestamp]`* *or* *[`[server* *logs* *bundle]`]**
