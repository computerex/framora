# Network topology — [Estate]

> **CIDR* *planner* *—* *no* *overlap* *for* *future* *peering* *—* *this* *doc* *is* *[`[region* *eu-west-1* *exemplar* */* *repeat* *per* *active* *region`]*  *

```text
# Example layout
10.[env].0.0/16  main VPC
  10.x.0.0/20    public: ALB, NAT
  10.x.16.0/20   private-app: EKS nodes
  10.x.32.0/20   data: RDS, Redis
```

| Path | From | To | Port | SG rule id |
| --- | --- | --- | --- | --- |
| *Admin* *SSH* *jump* *—* *discouraged* *—* *use* *[`[SSM* *Session* *Manager`]*  *instead*  | *[`[bastion* *SG`]*  | *[`[nodes* *+` *tag* *[`[role* *=…`]*  | 22 | *[`[sg* *rare` or* *closed*] |
| *App* *→* *DB*  | *[`[app* *SG`]*  | *[`[rds* *SG`]*  | 5432 | *[`[sg* *`+ ref] |

## Peering
- *To* *[`[partner* *VPC* *for* *PrivateLink` on* *service* *[`[name`]*  *—* *routes* *in* *[`[TGW* *\|* *peering* *route* *tables* */* *NFW` if* *required*]**

## Egress
- *Default* *deny* *0.0.0.0/0* *from* *app* *—* *only* *via* *[`[NAT* *in* *public* *subnet* */* *Egress* *gateway` to* *[`[allowlisted* *destinations* *doc`]*  *—* *break-glass* *ticket* *for* *[`[widen* *egress* *>`0* *days* *max*]**

## ZTNA
- *No* *VPN* *to* *prod* *by* *default* *—* *access* *via* *[`[Okta* *→* *AWS* *SSO* *→* *IAM* *role* *assume` to* *[`[read-only* *prod* *role`]*  *—* *session* *recorded* *in* *[`[cloudtrail* */* *vendor* *log`]*  *
