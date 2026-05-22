# Deploy [Product] on Azure

> **Landing zone:** [subscription], **region** `[region]` — **policy** *deny* *public* *blob* *unless* *[exception]*.

## Prereqs
- **SPN / MI:** `[name]` *roles:* **[Contributor? split to scoped]**
- **ACR** `[registry].azurecr.io` *with* *retention* *[days]*

```bash
az account set --subscription [id]
az acr login -n [registry]
```

## Pattern
- **App Service** *for* *simple* *web* — *or* **AKS** *for* *[scale / sidecars]*
- **Key Vault** *references* in *[ARM/Bicep]* — *rotation* *via* *Event Grid*

## Steps
1. **Build** *multi-stage* *Docker* — *scan* *with* *[Defender/ACR]*
2. **Deploy** `[az deployment/helm upgrade]` *with* *parameters* *from* *[key vault]*
3. **DB:** [Flexible Server] *+ firewall* *rules* *only* *[subnet]*

## Observability
- **App Insights** *sampling* *[rate]* — *confirm* *no* *PII* in *custom* *dimensions*

## Rollback
- **Slot swap** (App Service) *or* **AKS** *previous* *revision* *number*
