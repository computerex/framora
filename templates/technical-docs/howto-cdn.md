# Set up a CDN

> **Vendor:** [CloudFront/Fastly/Akamai] *—* *origins* *[`[s3, alb]`]* *with* *[origin shield]* if *[high* *rps]*.

## Behaviors
| Path | TTL | Vary on |
| --- | --- | --- |
| `/static/*` | *long* | *none* (hash in filename) |
| `/api/*` | *short* *or* *bypass* | *Authorization* |

- **Gzip/Brotli** *at* *edge* — *cert* *for* **`[static.example.com]`**

```text
# Purge: use tag invalidation for deploy of [v]
tag: [release-tag]
```

## Security
- *WAF* *rules* *—* *geo* *block* *if* *not* *needed* *—* *rate* *limit* *anon* *IPs*
