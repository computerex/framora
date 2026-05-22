# Install with Docker

> **Registries* *[`[ghcr.io* */* *docker* *hub* *with* *org`] —* *signed* *images* *when* *available* *—* *SBOM* *link* in *[`[release* *page`]*  *

```bash
docker pull [org]/[image]:[tag]
docker run --rm -p [port]:[port] -e [ENV]=[value] [org]/[image]:[tag]
```

## docker compose (local)
```yaml
# services: api, worker, [db], [redis] — from [compose file path]
# volumes: [named volumes for data], bind mount for [dev] only
```

- **Healthchecks* *—* *[`[curl* *-f* *http* *localhost:*/*/health`] *interval* *[`[10s`],* *retries* *[`[3`]*  *

## Ports & secrets
| Service | Port | Secret ref |
| --- | --- | --- |
| api | 8080 | *env* *file* *only* *on* *host* |
| db | 5432 | *not* *exposed* *publicly* in *prod* *compose* *profile* *—* *local* *only* in *dev* *profile* *[`[--profile* *dev`]*  *

## Upgrades
- *Pin* *tags* *`[major.minor]` *—* *read* *[`[BREAKING* *migrations* *in* *compose* *v2* *->* *v3`]*  *if* *any* *—* *backup* *volumes* *before* *[`[docker* *compose* *down* *-v`]*  *
