# Troubleshooting: Networking

> *Symptoms:* *timeout,* *SSLEOF,* *`[ECONNREFUSED`],* *partial* *TLS* *handshakes* *—* *always* *capture* `[openssl s_client] output when safe.*

## Checklist
1. *DNS* *resolution* *—* *[`[dig +trace]` vs* *authoritative* *—* *TTL* *after* *cutover* *stale* *resolver* *cache* *in* *[`[X]* *hours]**
2. *Certificate* *chain* *—* *full* *chain* *served* *—* *LE* *E1* *root* *in* *trust* *store* *on* *old* *devices* *?*
3. *Firewall* *egress* *from* *[`[subnet]`] —* *allow* *[`[443* *to* *host* *list* *in* *allowlist* *doc`]*  *—* *NO* *IP* *pinning* *unless* *doc’d**

```bash
# Safe external check (read-only)
curl -Iv https://[api-host]/[health]
```

## PrivateLink / peering
- *If* *[`[PrivateLink`]* *SNI* *mismatch* *—* *set* *[`[custom* *target* *hostname`] —* *verify* *route* *table* *for* *[`[VPC* *CIDR* *overlap`]*

## mTLS
- *Client* *cert* *expired* *or* *wrong* *intermediate* *—* *server* *logs* *show* *[`[alert* *47`] —* *rotate* *per* *[`[runbook* *link`]**
