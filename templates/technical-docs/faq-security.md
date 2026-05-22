# Security FAQ

> **Our posture:** *[least privilege, default deny, defense in depth]*

## Is data encrypted in transit and at rest?
- **In transit** *TLS* *1.2+* *—* *optional* *mTLS* *for* *[B2B API]**
- *At* *rest* *—* *AES-256* *KMS* *managed* *keys* *—* *per-tenant* *CMK* *on* *[plan]*

```text
# External evidence
- Pen-test summary: [year] (under NDA)
- SOC2 Type II: [link or request process]
```

## How do I report a vulnerability?
- *Email* **[security@]** *or* *H1* *program* **[URL] —* *PGP* *key* *—* *SLA* *for* *ack* *[h]* *and* *fix* *cadence* *per* *severity* *matrix**

## What is shared responsibility?
- *You* *manage* *[`[IAM in your project]`]* *and* *[`[secrets rotation]`]* — *we* *manage* *[`[control plane hardening]`]**

## DDoS and abuse
- *Edge* *rate* *limits* *—* *WAF* *rules* *—* *report* *abuse* *to* *[abuse@]**
