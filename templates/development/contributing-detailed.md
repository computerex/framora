# Contributing (detailed)

This is the *detailed* guide for [Project]. It complements the quick-start [README/CONTRIBUTING-basic].

## Roles & triage
- **Triage owner:** [team / on-call] — *labels issues within [SLA days]*
- **Backlog review cadence:** [weekly/ monthly] in [meeting or async doc]
- **P0/P1 meaning:** [definition used by the team]

## Issue lifecycle
1. **New** → add template fields (repro, expected, actual, env).
2. **Triage** → `accepted`, `needs more info`, or `duplicate`.
3. **Design** for risky changes: link a short design note or ADR: [link policy].
4. **Implementation** on a feature branch: `[owner]/[short-name]`.
5. **PR review** with at least [N] approvers for [areas].
6. **Release** from protected branches only: [release doc link].

## Branch & commit standards
- Branch from `[default development branch]`; **never** push directly to protected branches.
- Commit message format: [Conventional Commits / custom — paste example].
- Rebase vs merge: [team rule].

## Testing expectations
- **Unit** tests run locally as `[command]`.
- **Integration** tests require: `[env vars, docker compose profile]`.
- **E2E** (if any) runs in CI and/or a nightly build: [link to workflow].

## Security & privacy
- If you see a vulnerability, **do not** open a public issue—see [security policy].
- PII/secret handling: *never* paste tokens or customer data in issues/PRs.

## License & DCO/CLA (if required)
- [DCO sign-off] / [CLA] requirements: [link and instructions].

## Code review checklist (author)
- [ ] Explained **why** in the PR, linked issue/ticket.
- [ ] Self-reviewed diff; removed debug prints, TODOs, dead code (unless ticketed).
- [ ] Added metrics/logs where operational visibility matters.
- [ ] Updated docs/changelog; migration notes for breaking changes.

## After merge
- Verify CI on `main` is green; watch for release pipeline if applicable: [link].