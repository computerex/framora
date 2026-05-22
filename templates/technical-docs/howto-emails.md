# Send email

> **Provider:** [SendGrid/SES/Postmark] — *domain* *`[mail.example.com]` *verified* *with* *SPF+DKIM+DMARC*.

## Message types
| Type | Template id | Throttle / consent |
| --- | --- | --- |
| *Password reset* | `[tmpl_…]` | *rate* *limit* *per* *IP* |
| *Invoice* | `[…]` | *record* *legal* *basis* |

```http
POST /v3/mail/send
{ "from": { "email": "noreply@..." }, "subject": "...", "personalizations": [...] }
```

## Bounces & complaints
- *Webhook* *updates* *user* *`[emailStatus]` — *suppression* *list* *wins* *over* *sends*
- *Retry* *5xx* *only* *with* *backoff* — *4xx* *fix* *payload*

## Content
- *Plain* *text* *alternative* *required* — *link* *tracking* *[off]* *in* *regulated* *orgs*
