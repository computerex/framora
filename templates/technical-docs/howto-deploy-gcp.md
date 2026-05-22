# Deploy [Product] to Google Cloud

> **Primary:** [Cloud Run / GKE Autopilot] in `[project] / [region]`.

## Prereqs
- **APIs enabled:** [list: run, container, sqladmin, ...]
- **Service account:** `[sa@]roles/[minimal]` — *WIF* for CI if [GitHub Actions]

```bash
gcloud config set project [PROJECT_ID]
gcloud auth application-default login  # local only
```

## Networking
- **VPC:** [connector / peering] for [private] [Cloud SQL / Redis]
- **Egress:** [Cloud NAT] — *deny* *0.0.0.0/0* *from* *SA* *except* [egress list]

## Deploy
1. `[gcloud run deploy] | [skaffold run]` with **`[IMAGE]`**
2. **Secrets** from **Secret Manager** *refs* — *never* *inline* in YAML
3. **HPA** / *min instances* = **[N]** for *latency* SLO

## Verify
- **Load test** [k6] *against* **[URL]** — p95 < **[ms]**
- **Audit:** *ensure* *SA* *cannot* *[forbidden action]* — *periodic* **[IAM recommender]**

## Rollback
- *Revisions:* [Cloud Run: traffic split] — *GKE:* *[helm rollback]*
