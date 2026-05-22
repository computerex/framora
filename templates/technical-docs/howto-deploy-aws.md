# Deploy [Product] to AWS

> **Target:** [ECS/EKS/EC2/Lambda] in `[region]` with **[least-privilege] IAM** and [health checks + rollback].

## Prereqs
- AWS account: **[account id]**, *billing* [alert threshold]
- **CLI:** `[aws --version], terraform/opentofu, kubectl` as needed
- **Image:** `[ECR url]:[tag]` — *SBOM* attached in [link]

## Architecture choices
| Layer | Service | Rationale |
| --- | --- | --- |
| Compute | [ECS Fargate / EKS] | [ops burden vs cost] |
| Data | [RDS / Dynamo] | [consistency, RPO/RTO] |
| Ingress | [ALB + WAF] | [TLS, rules] |

```text
# Example env
AWS_REGION=[us-east-1]
CLUSTER_NAME=[prod-cluster]
```

## Deploy steps
1. **Build & push** image — *tag* `[git sha]`
2. **Plan** `[terraform plan]` — *peer review* for [state: s3+lock]
3. **Apply** during **[maintenance window]** — *or* *blue/green* with [target group swap]
4. **Migrate** [DB] if needed — *backup* `[snapshot id]` *before* * cutover*

## Post-deploy
- *Smoke* **[`[health] /[ready]`]** *from* *outside* *VPC* — [Route53 weighted]
- *Watch* **CloudWatch** *alarms* **[list]** — *PagerDuty* *route* *[team]*

## Rollback
- *Fast:* [revert to previous task definition] — *RTO* **[m] min**
- *Data:* [restore snapshot] *only* *if* *schema* *compatible* — *see* **[DR runbook]**
