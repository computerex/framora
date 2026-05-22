# Contributing (corporate / inner source)

This project is part of [Org]’s [program name]. This guide defines **org-specific** requirements beyond normal coding style.

## Eligibility & access
- **Who can contribute:** [employees / partners with NDAs] as listed in [source-of-truth system].
- **Entitlement to repo:** open an **Access request** in [ITSM] if you cannot push.
- **Data classification:** this repo is `[Internal / Confidential]`. *Do not* add customer data.

## Legal & compliance
- **Licensing** of inbound code: follow [org IP policy] and record exceptions in [tracker].
- **Open-source** releases require approval via [arch board / release council].
- **Security review** is required for changes touching: [auth, network boundaries, PII, crypto, …].

## Engineering controls
- **Default branch** protection: PR reviews `[N]`, required checks `[list]`, **no** force push.
- **CODEOWNERS** in `[.github/CODEOWNERS]`: *owners must approve* changes to `[paths]`.
- **Environment separation:** use `[dev|stage|prod]` according to the platform standards.

## Corporate workflow
1. Work from an internal issue tracker: `[JIRA/ADO link pattern]`.
2. Name branches `[username]/[TICKET]-[slug]` for traceability.
3. PR description must include **business justification** and **rollout/rollback** notes for risky changes.
4. Release windows & freezes follow [org calendar] — *coordinate with SRE* on migrations.

## Security & compliance checklist (PR author)
- [ ] No secrets, tokens, or internal hostnames in code/comments.
- [ ] Threat model / risk note attached if touching `[sensitive subsystems]`.
- [ ] Logging avoids PII; sampling documented if high volume.
- [ ] Feature flags in place for risky user-visible changes: `[flag names]`.

## Support
Questions about policy: [Slack/Teams channel] — *tag* `[inner-source-owners]`.