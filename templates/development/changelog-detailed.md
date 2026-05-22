# Changelog — [Project codename] (detailed)

This is the **long-form** changelog. For a TL;DR for users, see [release notes/announcement blog].

## Conventions in this file
- **RISK:** [Low/Med/High] — *operational risk for upgrades* (schema, protocol, SLOs).
- **MIG:** migration steps required: yes/no + link to guide.
- **OBS:** new metrics/logs/alerts worth monitoring post-upgrade.

## [Unreleased] — not deployed to production

### API / contract
- **BREAKING** — endpoint `[path]`: *reason*, `request`/`response` diffs, clients impacted: [list], timeline: [date].
- **ADDED** — new optional field `[name]`; defaults preserve compatibility.

### Data & persistence
- **MIG: yes** — new migration `[NNN]_[name].sql]`: *online/offline* strategy, *estimated duration*, *rollback caveats*.
- **INDEX** — new index on `[table(column)]` for query `[name]`; *watch write amplification* in `[env]`.

### Runtime & packaging
- **CONTAINER** — base image bump `[old] → [new]`: *CVEs addressed* `[CVE-…]` / *rebuild all tags* with `[date]`.
- **K8s** — Helm chart `appVersion: X.Y`, new values: `[values]`, defaults: `[..]`.

### Security
- **Fix** — authN bypass in `[module]`; affected versions: `[a..b]`, fix in `[X.Y.z]`, rotation steps: [link].

## [X.Y.0] — [YYYY-MM-DD] — *release train [name]*
*(summary paragraph for SRE/TLs)*: [2–3 sentences: theme, SLO focus, and customer-impacting flags].

### Rollout & verification
- Staged to `[canary%]` on `[date]`, metrics stable on `[SLOs]`.
- Kill switch / feature flag: `[flag]` default `[on/off]`, documented in [runbook].

### Subsystem A — [name]
- [Detailed bullets, links to ADRs, tickets].

### Subsystem B — [name]
- [Detailed bullets, links to ADRs, tickets].

## Appendix
- Historical releases: [link to page or git tags before this file existed].