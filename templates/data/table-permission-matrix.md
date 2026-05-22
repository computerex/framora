# Permission matrix — [App name] | [Environment]

| Permission key | [Role: Admin] | [Manager] | [User] | [Read-only] |
| --- | ---: | ---: | ---: | ---: |
| `org.read` | Y | Y | Y | Y |
| `user.invite` | Y | Y | N | N |
| `billing.manage` | Y | N | N | N |

## Role definitions (1-liners)
- **Admin:** [full org control, …] — **Manager:** [team-scoped, …] — **User:** […] — **Read-only:** […]

## Cross-cutting constraints
- **MFA for elevation:** [yes/no] — **Break-glass / admin-by-request:** [policy link]

## SoD & audits
- **SoD rules:** [who can’t combine X+Y] — **Audit log:** [retention, export] — **Review cycle:** [quarterly/annual]