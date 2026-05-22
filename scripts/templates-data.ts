export interface TemplateSpec {
  id: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  content: string;
}

export const templates: TemplateSpec[] = [
  {
    id: "data-table-comparison",
    name: "Comparison table",
    category: "data",
    description: "Side-by-side comparison of options, criteria, and notes.",
    tags: ["table","comparison","decision"],
    content: `# Comparison: [Option A] vs [Option B] vs [Option C]

| Criterion | Weight | [A] | [B] | [C] | Notes |
| --- | --: | --- | --- | --- | --- |
| [Cost] | [0–1] | [x] | [x] | [x] | [assumptions] |
| [Performance] | [0–1] | [x] | [x] | [x] | [evidence] |
| [Risk] | [0–1] | [x] | [x] | [x] | [mitigations] |

## Weighting method
- [Describe scoring (e.g. 1–5) and how weights sum to 1.0.]

## Assumptions
- [Assumption 1] · Owner: [name]
- [Assumption 2] · Data as of: [date]

## Decision
- **Selected:** [Option / none yet]
- **Rationale (3 bullets):** [ ] [ ] [ ]
- **Follow-up:** [ ] Action · [ ] Owner · [ ] Due [date]`,
  },

  {
    id: "data-table-pricing-basic",
    name: "Pricing table (basic)",
    category: "data",
    description: "Simple one-tier pricing and totals for quotes.",
    tags: ["table","pricing","quote"],
    content: `# Pricing (basic) — [Product / service]

| Line item | Qty | Unit | Unit price | Subtotal |
| --- | --: | --- | --: | --: |
| [Base] | [n] | [unit] | $[0.00] | $[0.00] |
| [Add-on] | [n] | [unit] | $[0.00] | $[0.00] |
| | | **Subtotal** | | **$[0.00]** |
| | | Tax [rate] % | | $[0.00] |
| | | **Total** | | **$[0.00]** |

## Inclusions & exclusions
- **Includes:** [bullets]
- **Excludes:** [bullets]

## Commercial terms
- **Currency:** [ISO] · **Valid until:** [date]
- **Contact:** [name, email, phone]`,
  },

  {
    id: "data-table-pricing-tiered",
    name: "Pricing table (tiered)",
    category: "data",
    description: "Multi-plan tier comparison with add-ons and notes.",
    tags: ["table","pricing","tiers"],
    content: `# Tiered pricing — [Product family]

| Feature / limit | [Starter] | [Pro] | [Business] | [Enterprise] |
| --- | --- | --- | --- | --- |
| **Price (monthly)** | $[0] | $[0] | $[0] | [Custom] |
| Seats / users | [n] | [n] | [n] | [n / unlimited] |
| API calls / mo | [n] | [n] | [n] | [n + SLA] |
| Support | [email] | [email + chat] | [24×5] | [24×7 + TAM] |

## Who should pick which tier
- **Starter:** [1–2 sentence ICP and limits]
- **Pro:** […] · **Business:** […] · **Enterprise:** […]

## Add-ons (all tiers)
| Add-on | Price | Note |
| --- | ---: | --- |
| [Extra storage pack] | $[0]/[period] | [size] |

## Order notes
- **Proration / trials:** [policy]
- **Contract minimum:** [if any]`,
  },

  {
    id: "data-table-pricing-enterprise",
    name: "Pricing table (enterprise)",
    category: "data",
    description: "Complex enterprise pricing, approvals, and deal levers.",
    tags: ["table","pricing","enterprise"],
    content: `# Enterprise pricing worksheet — [Customer]

| Area | Line item | Annual (USD) | One-time (USD) | Term |
| --- | --- | --: | --: | --- |
| **Subscription** | [Platform fee] | [0] | [0] | [1–3 yr] |
| | [Module A] / seat | [0] | [0] | [per seat count] |
| | [Premium support] | [0] | [0] | [incl. / extra] |
| **Services** | [Implementation] | [0] | [0] | [SOW ref] |

## Volume & levers (internal)
- **ACV / TCV target:** $[0] — **Floor / walk-away:** $[0]
- **Discount bands:** [table or % off list by tier]
- **True-ups:** [rule] · **Renewal uplift cap:** [ % ]

## Approvals (sign-off)
| Role | Name | Date | Notes |
| --- | --- | --- | --- |
| Rep | [name] | [date] | […] |
| RevOps / deal desk | [name] | [date] | […] |
| Legal (redlines) | [name] | [date] | [DPA, BAU, etc.] |

## Assumptions
- **Usage model:** [org-wide / per seat / usage-based] — **Ramp:** [timeline]`,
  },

  {
    id: "data-table-feature-matrix",
    name: "Feature matrix",
    category: "data",
    description: "Matrix of modules and capabilities by SKU or release.",
    tags: ["table","features","roadmap"],
    content: `# Feature matrix — [Product line] · [vX.Y]

| Module | [Area A] | [Area B] | [Area C] |
| --- | --- | --- | --- |
| **Core** | [yes/partial/roadmap] | […] | […] |
| **Integrations** | [Connector list] | […] | […] |

| Capability | [SKU 1] | [SKU 2] | [SKU 3] |
| --- | ---: | ---: | ---: |
| [API access] | ✓ / — | […] | […] |
| [SSO] | […] | […] | […] |
| [Audit log retention] | [n days] | [n days] | [n + export] |

## Legend
- **✓** — GA · **(β)** — beta · **R** — roadmap [quarter] · **—** — not planned

## Roadmap (high level)
- [Now] — [1–2 bullets] · [Next] — [1–2 bullets] · [Later] — [1–2 bullets]

## Open gaps
- [ ] [Parity with competitor] — [owner] [date]`,
  },

  {
    id: "data-table-feature-comparison",
    name: "Feature comparison (vs competition)",
    category: "data",
    description: "Competitive feature comparison with proof links.",
    tags: ["table","features","compete"],
    content: `# Feature comparison vs [Competitor / baseline]

| Dimension | Us ([Product]) | [Alt A] | [Alt B] | Proof / link |
| --- | --- | --- | --- | --- |
| [Dimension 1] | [1-line] | [1-line] | [1-line] | [link or doc §] |
| [Dimension 2] | [1-line] | [1-line] | [1-line] | [link] |

## Positioning (external-safe)
- **Headline:** [1 sentence]
- **3 proof points (each with a link):** [1] [2] [3]

## Caveats (internal only)
- [Where the comparison is not apples-to-apples or date-sensitive] · **Last verified:** [date]

## GTM / links
- **Battlecard owner:** [name] — **Source data:** [sheet ID]`,
  },

  {
    id: "data-table-inventory-list",
    name: "Inventory list",
    category: "data",
    description: "SKU-level inventory, movements, and exceptions.",
    tags: ["table","inventory","ops"],
    content: `# Inventory list — [Site / warehouse] · as of [date]

| SKU | Description | UOM | On hand | Reserved | Available | Reorder at | Loc |
| --- | --- | --- | --: | --: | --: | --: | --- |
| [SKU-001] | [desc] | [ea] | [0] | [0] | [0] | [0] | [A-01] |

## Movements (period [start]–[end])
| Type | Qty | Ref | Note |
| --- | --: | --- | --- |
| Receipt | +[n] | [PO-…] | […] |
| Shipment | −[n] | [SO-…] | […] |

## Exceptions & counts
- **Damaged / quarantine:** [n] in [location] — **Cycle count next:** [date]
- **Discrepancy log:** [link to register]`,
  },

  {
    id: "data-table-employee-directory",
    name: "Employee directory (table)",
    category: "data",
    description: "Internal directory row layout with PII policy reminders.",
    tags: ["table","people","hr"],
    content: `# Employee directory — [Org] · [Internal use]

| Name | Title | Team | Office / TZ | Email | Ext | Manager |
| --- | --- | --- | --- | --- | --- | --- |
| [Name] | [Title] | [Team] | [City / GMT±n] | [email] | [ext] | [Name] |

## Org context
- **Function:** [Engineering, Sales, …] · **Cost center:** [code]
- **Hiring & open roles:** [link]

## How to use
- **Update cadence:** [monthly] — **Owner:** [HRIS admin]
- **Pronouns / name preference:** [field policy]
- **PII note:** [Do not republish without approval]`,
  },

  {
    id: "data-table-contact-list",
    name: "Contact list (stakeholders)",
    category: "data",
    description: "Project or account contact grid with escalations.",
    tags: ["table","stakeholders","crm"],
    content: `# Contact list — [Project / account name]

| Stakeholder | Role | Company | Email | Phone | Time zone |
| --- | --- | --- | --- | --- | --- |
| [Name] | [Role] | [Co] | [e] | [p] | [tz] |

## Escalation (internal)
| Level | When | Person |
| --- | --- | --- |
| L1 | [issue types] | [name] |
| L2 | [SLO miss / P1] | [name] |

## Meeting & updates
- **Status cadence:** [weekly] — **Channel:** [Slack/Teams] — **Doc hub:** [URL]

## Data handling
- **Source of truth:** [CRM / HR] — **Do not export:** [policy]`,
  },

  {
    id: "data-table-product-catalog",
    name: "Product catalog (table)",
    category: "data",
    description: "List/catalog format with EOL, bundles, and media links.",
    tags: ["table","catalog","pim"],
    content: `# Product catalog — [Season / year] | [Channel]

| ID | Name | Family | List price | UOM | Status |
| --- | --- | --- | --: | --- | --- |
| [CAT-100] | [Name] | [Line] | $[0.00] | [ea] | [active / EOL] |

| SKU | Key attributes (short) | Dependencies |
| --- | --- | --- |
| [SKU] | [size/color/volt] | [req. accessories] |

## Merchandising
- **MAP / promo rules:** [summary or link]
- **Bundles:** [ID] = [A + B] at [price]

## Media & data sheets
- **PIM link:** [URL] — **3D / CAD:** [link]

## EOL & replacements
| Old | Replacement | End of sale | Support until |
| --- | --- | --- | --- |
| [SKU] | [SKU-NEW] | [date] | [date] |`,
  },

  {
    id: "data-table-schedule-weekly",
    name: "Schedule (weekly)",
    category: "data",
    description: "Week view by hours with on-call and standing meetings.",
    tags: ["table","schedule","week"],
    content: `# Weekly schedule — [Team / class] | Week of [date]

| Day | 08:00 | 10:00 | 12:00 | 14:00 | 16:00 |
| --- | --- | --- | --- | --- | --- |
| Mon | [block] | [block] | [lunch] | [block] | [block] |
| Tue | […] | […] | […] | […] | […] |
| Wed | […] | […] | […] | […] | […] |

## Standing meetings
| When | What | Attendees | Location / link |
| --- | --- | --- | --- |
| [Dow, time] | [sync] | [list] | [room / URL] |

## Focus / on-call
- **This week’s priority:** [one line]
- **On-call / backup:** [name] (primary) · [name] (secondary)

## Time off / conflicts
- [Name] — [OOF dates] — **Coverage:** [name]`,
  },

  {
    id: "data-table-schedule-monthly",
    name: "Schedule (monthly)",
    category: "data",
    description: "Month program grid with milestones and change log.",
    tags: ["table","schedule","month"],
    content: `# Monthly schedule — [Program name] | [Year]-[MM]

| Wk | Mon | Tue | Wed | Thu | Fri |
| ---: | --- | --- | --- | --- | --- |
| 1 | [event/owner] | […] | […] | […] | […] |
| 2 | […] | […] | […] | […] | […] |

## Milestones
- **[Date]** — [deliverable] — Owner: [name] — Deps: [list]
- **[Date]** — [review] — Stakeholders: [list]

## Blackout & holidays
- **No releases:** [dates] — **Holidays:** [region list with dates]

## Change log
| Date | What changed | By |
| --- | --- | --- |
| [date] | [change] | [name] |`,
  },

  {
    id: "data-table-timetable",
    name: "Timetable (classes or sessions)",
    category: "data",
    description: "Slot grid with instructors, rooms, and key dates.",
    tags: ["table","timetable","events"],
    content: `# Timetable — [Term / event] [YYYY] · [Group]

| Slot | Mon | Tue | Wed | Thu | Fri |
| --- | --- | --- | --- | --- | --- |
| 09:00–10:00 | [subject/room] | […] | […] | […] | […] |
| 10:00–11:00 | […] | […] | […] | […] | […] |

## Instructors & rooms
| Code | What | Room | Lead |
| --- | --- | --- | --- |
| [A101] | [title] | [Bldg-…] | [name] |

## Key dates (exams, breaks)
- **[date]** — [exam / no class / field trip] — [notes]

## Contingency
- **Inclement weather:** [policy/URL] — **Substitute:** [name]`,
  },

  {
    id: "data-table-scorecard",
    name: "Scorecard (initiative)",
    category: "data",
    description: "KPI scorecard with RAG, variance, and follow-ups.",
    tags: ["table","kpi","review"],
    content: `# Scorecard — [Initiative] · [Quarter YYYY-Qn]

| Pillar | Metric | Unit | Target | Actual | RAG |
| --- | --- | --- | ---: | ---: | --- |
| [Growth] | [MRR] | $ | [x] | [x] | [G|A|R] |
| [Efficiency] | [Burn multiple] | — | [x] | [x] | [G|A|R] |
| [Reliability] | [P95 latency] | ms | [x] | [x] | [G|A|R] |

## Top drivers of variance
- **Favorable vs plan:** [2 bullets with quant]
- **Unfavorable vs plan:** [2 bullets with actions]

## Decisions (from review)
| Decision | Who | When |
| --- | --- | --- |
| […] | [name] | [date] |

## Next period focus
- [ ] [Top priority] — Owner: [name] | Due: [date]`,
  },

  {
    id: "data-table-leaderboard",
    name: "Leaderboard",
    category: "data",
    description: "Rankings with scoring, ties, and prizes.",
    tags: ["table","game","ranking"],
    content: `# Leaderboard — [Event / program] | [Season]

| Rank | Team / player | Key stat | Notes |
| ---: | --- | --: | --- |
| 1 | [Name] | [0] | [streak, prize tier, …] |
| 2 | [Name] | [0] | […] |
| 3 | [Name] | [0] | […] |

## Scoring & tie-breaks
- **Points:** [how earned] — **Tie:** [1st, 2nd, …] — **Protests:** [deadline, email]

## Eligibility & ethics
- [Rules URL] — **Anti-cheat:** [how verified]

## Prizes (if any)
| Rank | Prize | Fulfillment by |
| ---: | --- | --- |
| 1 | [prize] | [date/owner] |`,
  },

  {
    id: "data-table-grading",
    name: "Grading table (course)",
    category: "data",
    description: "Weights, scores, and grade letters for a cohort.",
    tags: ["table","grades","education"],
    content: `# Grading table — [Course / cohort] | [term]

| Student ID | Name | A1 | A2 | Mid | Final | **Course %** | Letter |
| --- | --- | --: | --: | --: | --: | --: | --- |
| [id] | [name] | [0] | [0] | [0] | [0] | [0.0] | [A–F] |

## Weights (must sum to 100 %)
| Item | Weight |
| --- | --: |
| Assignments (avg) | [n]% |
| Midterm | [n]% |
| Final | [n]% |

## Curve & rounding
- **Curve policy:** [none / target median / …] — **Rounding:** [2 decimal / nearest half-step]

## Deferrals & incomplete
| Name | Code | Work due |
| --- | --- | --- |
| [name] | I / W | [date] |`,
  },

  {
    id: "data-table-compatibility-matrix",
    name: "Compatibility matrix",
    category: "data",
    description: "Environment and version compatibility grid.",
    tags: ["table","compatibility","qa"],
    content: `# Compatibility matrix — [Client app] x [Environments / versions]

|  | [Env A] [ver] | [Env B] [ver] | [Env C] [ver] |
| --- | ---: | ---: | ---: |
| **OS** | [Win 11] | [macOS 14+] | [Ubuntu 22.04] |
| **Browser** | [Edge 1xx] | [Chrome 1xx] | [Safari 17] |
| **Server API** | [v2 min] | [v2.1] | [v3 beta] |

## Legend
- **Y** = supported and tested — **(β)** = best-effort — **N** = unsupported — **TBD** = unknown

## Test evidence
- **Test matrix (internal):** [link] — **Last full pass:** [date]

## Gaps & mitigations
- [Gap 1] — [workaround] — [ETA]`,
  },

  {
    id: "data-table-requirements-traceability",
    name: "Requirements traceability (table)",
    category: "data",
    description: "Links requirements, tests, and builds.",
    tags: ["table","requirements","qa"],
    content: `# Requirements traceability — [Project] · [Release]

| Req ID | User story (short) | Priority | Test case(s) | Build | Status |
| --- | --- | --- | --- | --- | --- |
| REQ-001 | [As a …, I want …] | P1 | [TC-10, 11] | [JIRA-..] | [open/done] |

| Risk / gap | Affected ID(s) | Mitigation | Owner |
| --- | --- | --- | --- |
| [Ambiguous acceptance] | REQ-0xx | [clarify in workshop] | [name] |

## Trace to non-functionals (sample)
| NFR (security/perf) | Map | Evidence |
| --- | --- | --- |
| [Auth] | [REQ-..] | [test report link] |

## Sign-off (product)
- **PM:** [name] [date] — **EM:** [name] [date] — **QA lead:** [name] [date]`,
  },

  {
    id: "data-table-test-matrix",
    name: "Test matrix",
    category: "data",
    description: "Cross-browser and API test result matrix for a build.",
    tags: ["table","testing","release"],
    content: `# Test matrix — [Build / version] [x.y.z] | [Sprint/rel]

| ID | Area | Test case | Type | [Browser A] | [Browser B] | [API] |
| --- | --- | --- | --- | ---: | ---: | ---: |
| TC-01 | [auth] | [Login happy path] | F | Pass | Pass | n/a |

| ID | Test case | Notes / defects |
| --- | --- | --- |
| TC-0x | [name] | [BUG-…] or clean |

## Test data & env
- **Config:** [region, flags] — **Accounts:** [roles used] — **Clock:** [simulated?]

## Exit criteria (release)
- [ ] P0/1 defects = 0 open · [ ] Regression suite green on [nightly build]

## Residual risk
- [Known issue] — **Workaround:** […] — **Ship decision:** [PM name, date]`,
  },

  {
    id: "data-table-permission-matrix",
    name: "Permission matrix (RBAC/ABAC)",
    category: "data",
    description: "Roles vs permissions in an application or service.",
    tags: ["table","security","rbac"],
    content: `# Permission matrix — [App name] | [Environment]

| Permission key | [Role: Admin] | [Manager] | [User] | [Read-only] |
| --- | ---: | ---: | ---: | ---: |
| \`org.read\` | Y | Y | Y | Y |
| \`user.invite\` | Y | Y | N | N |
| \`billing.manage\` | Y | N | N | N |

## Role definitions (1-liners)
- **Admin:** [full org control, …] — **Manager:** [team-scoped, …] — **User:** […] — **Read-only:** […]

## Cross-cutting constraints
- **MFA for elevation:** [yes/no] — **Break-glass / admin-by-request:** [policy link]

## SoD & audits
- **SoD rules:** [who can’t combine X+Y] — **Audit log:** [retention, export] — **Review cycle:** [quarterly/annual]`,
  },

  {
    id: "data-csv-data-export-template",
    name: "Data export (CSV) template",
    category: "data",
    description: "Column contract for exporting data for BI or handoff.",
    tags: ["csv","export","etl"],
    content: `# Data export (CSV) — [System / object]

| Column (header) | Type | Example | Required | Note |
| --- | --- | --- | ---: | --- |
| \`id\` | string | \`[uuid or natural key]\` | yes | [stable id] |
| \`created_at\` | datetime | \`[ISO-8601]\` | [yes/no] | [source tz] |
| \`[attr1]\` | string | \`…\` | yes | [validation] |

## File naming & layout
- **Name:** \`[prefix]_[date].csv\` — **Encoding:** UTF-8, comma-separated, no BOM [unless required]
- **Line endings:** [LF/CRLF] — **Quoting:** [RFC rules / quote all] — **Null:** empty or \`NULL\`

## Quotas, pagination, delta
- **If large:** [batch size] — **Cursor / watermark field:** [field] — **Delta from:** [timestamp]
- **PITR / replays:** [how resync works]

## PII & classification
- **Columns redacted in export for role [x]:** [list] — **Approval:** [owner + ticket]`,
  },

  {
    id: "data-csv-import-template",
    name: "Import template (CSV)",
    category: "data",
    description: "Headers, validation, and idempotency for bulk imports.",
    tags: ["csv","import","etl"],
    content: `# Import template (CSV) — [Entity type]

| Column (exact header) | Type | Max len | Valid values | Example |
| --- | --- | ---: | --- | --- |
| \`external_id\` | string | [n] | [regex / enum] | \`[value]\` |
| \`name\` | string | [n] | [not empty] | \`[value]\` |
| \`status\` | enum | — | [active, archived] | \`active\` |

## Rules
- **Uniqueness:** [natural keys that must be unique] — **Upsert:** [on conflict behavior]
- **Delete semantics:** [soft vs hard, tombstone] — **Idempotency key:** [column]

## Dry-run and reporting
- **Pre-import validation:** [lint rules, row-by-row errors] — **Sample rows:** [min 2]
- **Error file:** \`[errors]_[import_id].csv\` with code + message

## Reconciliation
- **Expected count:** [n] after import — **Hash / checksum of file:** [algo + value on sample]`,
  },

  {
    id: "data-csv-mapping-document",
    name: "Field mapping (source → target)",
    category: "data",
    description: "Transform rules and value maps for migration or sync.",
    tags: ["csv","mapping","integration"],
    content: `# Source → target field mapping — [From system] to [To system]

| Source (path) | Type | Target (path) | Transform | Null / default | Notes |
| --- | --- | --- | --- | --- | --- |
| \`user.email\` | string | \`contact_email\` | lower(trim(x)) | skip row if empty | [PII] |
| \`order.total\` | decimal | \`order_total\` | \`round2(x * fx)\` | 0.00 if missing | [currency] |

## Reference data
- **Value maps (lookup):** [table name or sheet link] — **Owner of reference:** [team]
- **Tie-break / precedence when joins multiply:** [rule]

## Edge cases & exceptions
- **Time zones:** [store in UTC, display in profile TZ] — **Legacy IDs:** [prefix rules]
- **Rejects & quarantine:** [quarantine id field for manual fix]

## Sign-off (before ETL to prod)
- **Data owner (business):** [name] [date] — **Engineer:** [name] — **QA (spot checks):** [name] | [date]`,
  },

  {
    id: "data-csv-transformation-rules",
    name: "Transformation rules (data pipeline)",
    category: "data",
    description: "Stepwise transforms, idempotency, and DLQ strategy.",
    tags: ["csv","etl","pipeline"],
    content: `# Transformation rules — [Job / stream name]

| Step | When | Input | Output | Rule (pseudo) | Idempotent? |
| ---: | --- | --- | --- | --- | ---: |
| 1 | on insert | [raw] | [norm] | \`norm_email(x)\` | yes |
| 2 | on update | [norm] | [view] | \`merge(prior, x)\` | yes |

## State & watermarks
- **State store:** [topic/table] — **Key:** [id] — **At-least / exactly-once:** [guarantee + dedupe] — **Lag SLO:** [n min]

## Error handling & DLQ
- **Policy:** [retry n, backoff, poison pill] — **DLQ path:** [queue/table] — **Replay:** [playbook id]

## Test vectors
| Scenario | In | Out |
| --- | --- | --- |
| [dup email] | [row] | [action] |

## Versioning & rollback
- **This ruleset version:** [semver] — **Schema registry:** [link] — **Rollback to [v-1] owner:** [name]`,
  },

  {
    id: "data-csv-validation-rules",
    name: "Validation rules (schema & cross-field)",
    category: "data",
    description: "Field checks, error codes, and test sampling strategy.",
    tags: ["csv","validation","quality"],
    content: `# Validation rules — [Form / file / event schema]

| Field | Check | On fail |
| --- | --- | --- |
| \`email\` | \`regex + MX optional\` | [error code E-EMAIL] |
| \`amount\` | \`>=0, scale<=2, currency=ISO\` | [error code] |

## Cross-field rules
- **Rule V1:** [if a then b must …] — **Rule V2:** [if type=X then allowlist …]
- **Uniqueness scope:** [per org / global] on \`[fields]\` with message […]

## Whitelist of codes
- **E-001** — [human copy] — **User action:** [fix input / contact support]

## Test matrix (sampling strategy)
| Class | # cases | Data source |
| --- | --: | --- |
| Happy path | [n] | [synthetic/anon prod sample] |

## Monitoring
- **KPIs:** [reject %, p95 check time, rule hit counts] — **Alert:** [SLO, channel]`,
  },

  {
    id: "data-survey-customer-satisfaction",
    name: "Survey: customer satisfaction (CSAT)",
    category: "data",
    description: "Post-interaction CSAT with drivers and consent.",
    tags: ["survey","csat","feedback"],
    content: `# Customer satisfaction survey

> Scale: 1 (very poor) to 5 (excellent) unless noted. Replace [brackets] before use.

## 1) Overall [product/service interaction]
- Overall satisfaction: [1–5] — *Why?* (optional, max 200 chars) [text]
- Likelihood to return / renew: [1–5] — *Open feedback:* [text]

## 2) Specific drivers
| Area | Score | What went well? | What to improve? |
| --- | --: | --- | --- |
| Quality / fit | [1–5] | [text] | [text] |
| Value for money | [1–5] | [text] | [text] |
| Support / comms | [1–5] | [text] | [text] |

## 3) Customer context (optional, non-PII where possible)
- Segment: [B2B/B2C] — Role: [end user, buyer, etc.] — Region: [area]
- Consent: [I agree to be contacted] — Contact email (optional): [email]

## 4) Close
- Thank you. Reference: [SUR-CSAT-####] — Owner: [team] — Close date: [date]`,
  },

  {
    id: "data-survey-employee-engagement",
    name: "Survey: employee engagement (pulse)",
    category: "data",
    description: "Likert pulse, comments, and workload signals.",
    tags: ["survey","hr","engagement"],
    content: `# Employee engagement pulse

> Anonymity: [aggregated by team of ≥5 / fully anonymous] — Period: [Q/YYYY]

## Core items (Likert: strongly disagree–strongly agree)
1. I understand how my work ties to [company/team] goals. [1–5]
2. I have the resources to do my job well. [1–5]
3. I receive useful feedback. [1–5]
4. I feel [psychological safety / belonging]. [1–5]

## Open comments (optional, max 500 chars per box)
- **Start / stop / continue (one each):** [text] [text] [text]
- **If you could change one process next quarter:** [text]

## Workload & wellbeing
- **Burnout flags (optional multi-select):** [none / occasional / frequent] — **Preferred support:** [coaching, time off, tools]
- **Optional manager conversation:** [yes/no] — **If yes,** manager email (optional): [email]

## Governance
- **DRI / HRBP:** [name] — **Data retention of raw comments:** [days] — **PII redaction policy:** [link]

## Analysis plan (internal)
- **N≥[n] rule for breakouts,** themes via [process], results by [date]`,
  },

  {
    id: "data-survey-nps",
    name: "Survey: NPS and follow-up",
    category: "data",
    description: "0–10 NPS, reasons, and service recovery path.",
    tags: ["survey","nps","feedback"],
    content: `# Net Promoter®-style (NPS) follow-up

1. On a 0–10 scale, how likely are you to recommend [product/brand] to a friend or colleague? **[0–10]**
2. What is the **primary** reason for your score? (140 chars) [text]
3. What one thing would make you [increase] your score? [text]

## Categorization (auto + manual for edge cases)
- **0–6 Detractor** — 7–8 **Passive** — 9–10 **Promoter** (adjust labels to your policy and locale).
- **Cohort / account tags:** [plan tier] [region] [vertical] (non-PII if possible).

## Consent and channel
- **Channel sent:** [email / in-app] — **Unsubscribe / opt-out id:** [id] — **Incentive?** [none / link to terms]

## Service recovery (if detractor and opted in)
- **Route to:** [queue] within [SLA] — **Owner of outreach:** [role]
- **Log outcome:** [resolved / WONT / need product fix] in [CRM ticket schema]

## Reporting (internal)
- **NPS = % promoters − % detractors** (with confidence interval for small n) — **Window:** [rolling 30d] — **Dashboard owner:** [name]

## Trademarks / usage
- **If using “NPS” or Net Promoter publicly,** follow Satmetrix/licensor guidance. **Internal-only:** label as *likelihood to recommend* if unsure.`,
  },

  {
    id: "data-survey-product-feedback",
    name: "Survey: product feedback (bugs & UX)",
    category: "data",
    description: "Repro, severity, and workaround capture template.",
    tags: ["survey","product","ux"],
    content: `# Product feedback — [Feature / area]

## 1) Context
- **Product + version / env:** [name] [v] on [iOS / web / server]
- **User goal / job-to-be-done:** [one or two lines]
- **What were you trying to do?** [text] — *What actually happened?* [text]

## 2) Severity and frequency
- **Impact:** [blocker / high / med / low] — **Repro rate:** [always / often / sometimes / once]
- **Data loss / security?** [yes/no] — if yes, *stop* and open **security channel per policy** [link].

## 3) Reproduction (best effort)
1. [Step-by-step, numbered]
2. **Expected result:** [text] | **Actual result:** [text] |
3. **Attachments / links:** [logs, HAR, screen recording, sample file]

## 4) Workarounds and satisfaction
- **Workaround?** [yes/no]— **If yes,** describe: [text]
- **Satisfaction with resolution path so far (1–5):** [score]

## 5) Routing and SLAs (internal ticket footer)
- **ID:** [FB-####] — **Queue:** [name] — **SLA first response / resolution:** [times] — **On-call if P1:** [name]`,
  },

  {
    id: "data-survey-event-feedback",
    name: "Survey: event feedback",
    category: "data",
    description: "Sessions, logistics, and lead-capture (opt-in).",
    tags: ["survey","event","feedback"],
    content: `# Event feedback — [Event name] · [date] · [venue / virtual link]

## 1) Overall
- Overall experience (1–5): **[score]** — *Would you attend again?* [yes / maybe / no]
- Net recommendation (0–10) if using same scale as NPS: **[score]** (optional).

## 2) Content & format
| Session | Relevance (1–5) | Clarity of speaker (1–5) | Suggested next topic |
| --- | --: | --: | --- |
| [Keynote] | [1–5] | [1–5] | [text] |
| [Breakout A] | [1–5] | [1–5] | [text] |

## 3) Logistics
- **Registration, venue, A/V, food, accessibility (1–5 each):** [score row or notes]
- **What to improve for next time?** (max 500 chars) [text]

## 4) Lead / consent (only if you host follow-ups)
- **I want a follow-up about:** [solutions, pricing, content] — *Best email:* [email] — *Opt-in to partner comms* [y/n].

## 5) Close / privacy (footer)
- **DPO contact / privacy page:** [link] — **Retention of responses:** [days] — **Aggregated public report on:** [date]`,
  },

  {
    id: "data-survey-market-research",
    name: "Survey: market research (screener+topic guide)",
    category: "data",
    description: "Quotas, stimuli, and incentive ethics.",
    tags: ["survey","research","mrx"],
    content: `# Market research screener + topic guide

## Screener (disqual / quota)
1. Age range / region: [buckets] — **Quotas by segment:** [table]
2. Role: [icp role list] — **Decision authority:** [none / recommender / budget holder] — **DQI note:** [fraud / speed checks] |

## Stimulus and tasks
- **Stimulus (A/B, pricing ladder, or concept boards):** [link / attach ids]
- **Task 1 (max 3 minutes):** [read concept] — *Then answer:* [Kano-style or forced choice]
- **Task 2 (max 2 minutes):** *Rank features:* [list] — *Explain top pick in one sentence* [text]

## Open-ended probes
- **Pains and substitutes today:** [text] | **Price sensitivity (Van Westendorp or Gabor-Granger):** [script link]
- **Objections to paying:** [text] | **Unmet needs in adjacent categories:** [text]

## Incentive & method
- **Incentive & ethics:** [amount / type / link to policy] | **Not recorded:** PII in audio beyond consent scope
- **Mode:** [30m Zoom, async survey, in-person] — **Recording:** [y/n, consent] — **Data handling:** [where stored, redaction, retention]

## Synthesis (internal, after fieldwork)
- **# completes target:** [n] | **# achieved:** [n] | **Top 3 takeaways (draft):** [bullets] | **Next study:** [idea]`,
  },

  {
    id: "data-survey-user-experience",
    name: "Survey / script: user experience (moderated)",
    category: "data",
    description: "Tasks, SUS/SEQ, and evidence pack for synthesis.",
    tags: ["survey","ux","research"],
    content: `# User experience (UX) research — session script

## 1) Intros (2 min)
- **NDA & recording consent:** [Y/N, link to form] | **Incentive / honorarium:** [details]
- **Session goals (share aloud, 3 bullets):** [goal 1] [goal 2] [goal 3] |

## 2) Context questions (5 min)
- *Walk me through* how you [job story in their words] today—tools, workarounds, who else is involved. [notes]
- *How do you know you succeeded?* [text] | *How often?* [freq bucket]

## 3) Task + think-aloud (15–20 min, neutral prompts)
| # | Task | Start URL / state | Success criteria (observer) |
| --: | --- | --- | --- |
| 1 | [task name] | [url or prototype id] | [what “done” means] |
| 2 | [task name] | [url] | […] |

## 4) Debrief and ratings
- **SUS/SEQ (pick one) / custom 1–5 ease:** [scale template] | **Top friction:** [text] | **Would you rely on this weekly?** [Y/N+why]

## 5) Analysis pack (fill post-session); **PII in separate vault** if needed
- **Clips w/ highlight reel:** [link] | **Key quotes (verbatim + ts):** [list] | **Severity (P0–3, frequency):** [table] | **Recommendations (must/ should/ could/ won’t):** [list]

## 6) Repository
- **Study id:** [UX-####] | **DRI researcher:** [name] | **Participant id:** [P###] (pseudonym in reports)`,
  },

  {
    id: "data-survey-accessibility-audit",
    name: "Worksheet: accessibility audit (WCAG-oriented)",
    category: "data",
    description: "Scope, sample flows, and findings with severity.",
    tags: ["survey","a11y","wcag"],
    content: `# Accessibility audit worksheet (WCAG-oriented)

## Scope and profile
- **App / URL + route list:** [links] | **Viewports:** [320, 768, 1280] + **Zoom** 200% + **reflow** check
- **Assistive tech:** [NVDA+Chrome, JAWS+Edge, TalkBack + Chrome, etc.] + **keyboard only** (no pointer)
- **User stories / core flows to cover:** [list] | **Audit date / auditor:** [date] [name]

## Findings (repeat per item)
| # | Page / comp | Criterion (WCAG) | Issue | User impact | Severity | Suggested fix | Retest? |
| --: | --- | --- | --- | --- | --- | --- | --- |
| 1 | [route] | [1.3.1] | [desc] | […] | [P0-3] | [fix] | [Y/N] |

## Media & forms quick checks (examples)
- **Images:** meaningful \`alt\` / decorative empty — **Video:** captions + audio description as needed | **Forms:** labels, error association, not color-only | **Focus:** visible, order, skip links | **Motion:** reduced-motion toggle honored |

## Report-out
- **# issues by severity & principle:** [summary table] | **Known vendor exceptions:** [list with plan] |
- **Next audit window:** [date] | **Owner of backlog grooming:** [name] |

## Evidence pack
- **Screens, clips, HTML snippets, logs;** store in [restricted folder] with [retention] days. **Do not** attach PII in public tickets.`,
  },

  {
    id: "data-survey-website-usability",
    name: "Test plan: website usability (lightweight)",
    category: "data",
    description: "Hypothesis, tasks, and summary table for sessions.",
    tags: ["survey","usability","web"],
    content: `# Website / product usability test — lightweight

## Hypothesis and tasks
- **Hypothesis:** *If* we [change], *then* [metric] *because* [reason] | **Primary metric (quant):** [time on task, success %, error rate, SEQ]
- **Tasks (3–5):** 1) […] 2) […] 3) […] | **Data capture:** [session replay id / moderated notes] |

## Participant plan
- **# sessions:** [n] | **Recruit criteria:** [novice/ power / mixed; locale] | **Incentive:** [rule] | **Screening to avoid pro testers:** [DQI] |

## Script (moderator)
- *Warm intro (NDA, recording, think-aloud)* | *Neutral prompts* (“what are you looking at?”, *then*) | *Rescue only after [n] minutes* | *Post-task: confidence 1–5* | *Debrief: top friction in one line* |

## Raw notes (per task)
| Task | Pass/Fail/Partial | Time (s) | Errors | Verbatim quotes |
| --- | --- | --: | --- | --- |
| T1 | [P/F/∂] | [s] | [list] | [quotes] |

## Results summary (synthesize across sessions); **no PII in public slide deck** |
- **Key findings (3–5):** [bullets] | **Design recommendations:** [list with effort & risk] | **Next test:** [rough date/scope] |
- **Attribution of impact on roadmap:** [PM name, date] |`,
  },

  {
    id: "data-survey-onboarding",
    name: "Survey: onboarding (0/7/30)",
    category: "data",
    description: "Milestones, friction, and instrumentation alignment.",
    tags: ["survey","onboarding","product"],
    content: `# Onboarding survey — [product / org role]

## Day 0–3 (immediately after signup / hire)
- *How did you hear about us?* [list + other] | *What outcome do you need in 7 days?* [text] | *Confidence you can get there (1–5):* [score] |
- *Any blockers during signup?* [text] (route to [support] if P0 words used).

## Day 7 milestone check
- *Did you complete: [milestone A/B/C]?* [Y/Partial/N] + *Time spent approx [hours].* | *Biggest time sink:* [text] |
- *NPS/CSAT (optional):* [0–10 or 1–5] *with one-line reason* [text] | *Would you like a 15m onboarding call?* [Y/N, schedule link] |

## Day 30 outcomes
- *Value realized vs expectation:* [1–5] *Examples of wins/gaps* [text] | *Features still confusing:* [checklist+other] | *Referral or case study interest?* [Y/N, contact] |

## Instrumentation alignment (for PM)
- **Events used for funnels in analytics:** [list of event names, properties] | **Known gaps/bugs in logging:** [link] |
- **Cohort for experiment analysis:** [flag names] | **Owner to close loop on top issues:** [name] by [date] |

## Data handling; **separate** HR vs product for employee onboarding
- **PII / classification:** [list] | **Retention of raw free text:** [days] | **Opt-out of follow-up comms** honored within [n] business days. |`,
  },

  {
    id: "data-report-quarterly",
    name: "Report: quarterly (business/ops)",
    category: "data",
    description: "Executive summary, OKR table, and outlook.",
    tags: ["report","quarterly","business"],
    content: `# Quarterly report — [Org / product] — [YYYY-Qn period]

## Executive summary (≤1 page for leadership)
- **Revenue & margin vs plan:** [+/- %, drivers in one line] — **Key risks (top 3) with owner:** [list]
- **Strategic bet outcome:** [hypothesis, result, next step] | **Customer/employee highlights:** [2 bullets] |

## Results vs OKRs / KPIs
| Pillar / OKR | Target | Actual | Δ | RAG | Narrative (why) |
| --- | ---: | ---: | ---: | --- | --- |
| [O1: Growth] | [n] | [n] | [±%] | [G/A/R] | [1–2 sentences] |
| [O2: Efficiency] | [n] | [n] | [±%] | [G/A/R] | […] |

## Finance snapshot
- **P&L (high level):** [table or link] — **Cash / runway (if material):** [summary] | **Forecast to year-end (range):** [low–high] with **confidence** [H/M/L] |

## Product, GTM, operations
- **What shipped and adoption:** [GA features, N users, NPS/CSAT changes] | **Pipeline / funnel:** [MQL→SQL, win rate, cycle] |
- **Ops / quality / incidents (if any P1s):** [summary, post-inc link] |

## Outlook & ask
- **Next quarter focus (3 bets max):** [1] [2] [3] with **measures of success** |
- **Asks to board/exec:** [funding, headcount, policy] — **Data sources:** [links to sheets, BI] — **Owner / date:** [name] [date] |`,
  },

  {
    id: "data-report-annual",
    name: "Report: annual (stakeholder)",
    category: "data",
    description: "Year in review, risks, and financials pointer.",
    tags: ["report","annual","stakeholder"],
    content: `# Annual report — [Org / product] — [FY [YYYY]]

## Letter to stakeholders (excerpt; full letter may be PDF front matter)
- **Year in one paragraph:** [theme] + **biggest win** + **biggest lesson** |
- **2026 focus in one line:** [direction] with **3 measurable outcomes** [bullets] |

## Performance overview
- **Y/Y revenue, gross margin, EBITDA or operating result:** [table] — **Segment mix / geography (if B2B):** [insight] |
- **Strategic progress vs 3y plan:** [green/yellow/red by initiative] with **citations to evidence** (products, case studies) |

## Risk & governance (summary)
- **Top 5 risks (likelihood/impact) & mitigations:** [table] — **Audit / control themes:** [brief] (details in annex) |
- **Sustainability / ESG (if material):** [1–2 KPIs, trend, limitation of data] |

## People & culture
- **Headcount / diversity / engagement:** [n, trend, 1 key initiative] | **Retention / attrition in critical roles:** [n] and **backfills** [status] |

## Financial statements & notes
- **Where to read:** [link] — **Accounting policies changed?** [Y/N + if Y, one line] — **Cautionary re forward-looking** [standard disclaimer reference] |

## Thank-you & contact
- **Prepared by:** [CFO/CEO/team] — **Inquiries:** [ir@ / press@] — **Filing / publication date:** [date] in [jurisdictions] |`,
  },

  {
    id: "data-report-monthly-metrics",
    name: "Report: monthly metrics pack",
    category: "data",
    description: "One-pager of KPIs, anomalies, and definitions.",
    tags: ["report","monthly","metrics"],
    content: `# Monthly metrics pack — [Org / product] — [YYYY-MM and trailing TTM if noted]

## One-page table (all owners fill by EOD [D])
| Metric (canonical name) | Unit | MoM | YoY or vs budget | owner |
| --- | --- | ---: | ---: | --- |
| [New ARR] | $ | [+/-%] | [+/-%] | [name] |
| [Churn] | $ or % | […] | […] | […] |
| [Active users] | n | […] | […] | […] |

## Commentary (1 paragraph each)
- **GTM (sales+marketing):** [what changed in funnel] | **Product:** [adoption, incidents] | **Finance:** [DSO, margin bridge] |

## Anomalies and follow-ups (bullets, max 5)
- [Spike in X] — **root cause (working hypothesis):** [text] — **Owner to close loop by** [date] |

## Data quality & definitions
- **Data freeze time:** [UTC] — **Known gaps/late feeds:** [list] | **Metric dictionary version:** [doc link] |

## Distribution (internal)
- **Slack/Email distribution list or portal:** [name] | **PII/segment breakouts** follow [DLP policy **link**] with **minimum cell size** [n] for external decks |`,
  },

  {
    id: "data-report-kpi-dashboard",
    name: "KPI definitions (for dashboards)",
    category: "data",
    description: "KPI card contract: owners, bands, and drill path.",
    tags: ["report","kpi","bi"],
    content: `# KPI dashboard (definition sheet) — [Org / product] — [Use with BI; this doc is the contract]

## Purpose and audience
- **For:** [exec team / function leads] | **Refreshed:** [daily/weekly] | **RAG on:** [R/Y/G vs band on each card] |

## KPI deck (one row per card)
| ID | Name | Owner | Business question | Def (formula) | Source system | Latency | Band green/yellow/red |
| --- | --- | --- | --- | --- | --- | --- | --- |
| K01 | [name] | [name] | [question] | [formula] | [Snowflake/…] | [T+0] | [thresholds] |

## Drill path & grain
- **Default grain:** [org/day] — **Drill to:** [region, segment] where **RID** of user checked — **Cohort** definitions: [date anchor] |

## Incidents and overrides
- **When metric is frozen / backfilled / restated — log here:** [table with ticket id] |

## Retention and access (internal only)
- **Who can export / embed:** [roles] | **PII in underlying:** [N — aggregate only; exception process **link**] |
- **Changelog of definitions:** [semver or date-stamped] — **DRI to approve changes:** [data council role] by [quarter] |`,
  },

  {
    id: "data-report-financial-summary",
    name: "Report: financial summary (management)",
    category: "data",
    description: "P&L bridge, cash, and forward range.",
    tags: ["report","finance","management"],
    content: `# Financial summary (management) — [Org / product] — [Internal or board-safe depending on [audience]]

## P&L bridge (simplified; replace with your chart of accounts mapping)
| Line (mapped) | [Period A] $ | [Period B] $ | Δ $ | % | Notes |
| --- | --: | --: | --: | --: | --- |
| Revenue (recognized) | [0] | [0] | [0] | [0%] | [NRR effect, one-offs] |
| COGS | [0] | [0] | [0] | [0%] | [mix, vendor] |
| OpEx (grouped) | [0] | [0] | [0] | [0%] | [HCap, S&M, R&D, G&A] |
| **EBIT / Op income** | [0] | [0] | [0] | [0%] | […] |

## Cash & working capital (if B2B / inventory heavy)
- **Operating cash flow:** [0] | **DPO/DSO/DIO:** [days] and **narrative** on [working capital] |
- **Capex and depreciation:** [summary] — **debt/leases:** [covenants status] |

## Forward view (12–18 mo)
- **Base / upside / downside** [ranges] with **assumptions** (macro, headcount, win rate) in **one table** and **sensitivities** to [top 2 levers] |

## Controls & close process
- **Close calendar:** [D+n] with **rec accrual items** [list] | **Materiality for notes:** [$ or %] |
- **File attachments:** [GL extract, BvA] under **[restricted folder id]** with **version** [n] and **approver** [CFO/FC] on [date] |`,
  },

  {
    id: "data-report-sales",
    name: "Report: sales (pipeline & forecast)",
    category: "data",
    description: "Quota, forecast, and deal desk / marketing alignment.",
    tags: ["report","sales","pipeline"],
    content: `# Sales report — [Org / product] — [Pipeline, forecast, and deal desk notes]

## Quota and attainment (by segment / pod)
| Pod / AE | Quota (commit) | Bookings QTD / Q | Attainment | Coverage (≥3x?) | Funnel slippage |
| --- | --: | --: | --: | --: | --- |
| [NA Mid] | $[0] | $[0] | [n%] | [n.x] | [late-stage push risk] |

## Forecast roll-up (this week’s change vs last)
- **Open pipeline by stage and **exit quarter** (commit/best/upsides):** [table] |
- **Largest 5 in-play deals (no customer names in external doc):** [ID, $, next step, risk, champion strength] |

## Marketing ↔ sales alignment (this period)
- **MQL→SQL, SQL win rate, ACV, cycle** vs prior period; **key campaigns** and **CPL/ROI** if tracked |
- **Revenue marketing sourced vs sales sourced vs partner:** [split %] and **quality flags** (disputes) |

## Comp / SPIFF / headcount (internal)
- **Hires / ramp, attrition, capacity model vs plan:** [1 paragraph] with **OJE status** and **Qnext hiring plan** |
- **Exception requests (discounts, terms, SOWs):** [log link] | **CR notes** in [SFDC object] |

## Risks to number & asks
- **Top 3 things that would miss commit:** [1] [2] [3] and **mitigation** |
- **Asks to deal desk, legal, product:** [list] with **DRI/ETA** and **governance of SLAs** [link] |`,
  },

  {
    id: "data-report-marketing",
    name: "Report: marketing (channel ROI)",
    category: "data",
    description: "Spend, funnel, and budget reallocation notes.",
    tags: ["report","marketing","roi"],
    content: `# Marketing report — [Org / product] — [Channel mix, program ROI, and brand health]

## Summary vs goals for [period]
- **Revenue or pipeline $ influenced / sourced (define):** [n] | **Target:** [n] with **% achieve** |
- **CPL and pipeline per $ and payback (if B2B SaaS):** [table] |
- **NPS/brand (if running tracker):** [number] vs [prior] in **[geo/segment]** |

## Channel performance (repeat rows per main channel)
| Channel / program | Spend $ | MQLs | CAC proxy | Key creative / learnings | Next test |
| --- | --: | --: | --: | --- | --- |
| Paid search | [0] | [0] | [0] | [2 bullets] | [test plan] |
| **Owned** (content/SEO) | […] | […] | […] | […] | […] |

## Product marketing & GTM
- **ICP and messaging tests:** [what changed, win/loss pattern] | **Competitive** **battlecards** updated? [Y/N, link] |
- **Event/webinar/field:** [FTE-days, $, # meetings, **pipeline created**] |

## Budget & reallocation (internal)
- **YTD vs plan by GL bucket:** [+/-%] and **Qnext ** **re-forecast** and **virement** if needed (process **link**) |
- **Data stack / attribution** caveats: [iOS, dark funnel, self-reported, multi-touch model version] |

## Compliance & brand safety (footer)
- **UPL / CAN-SPAM / CASL** checks on sends: [owner] with **unsub and preference center** [link] |
- **Influencer / partner** **disclaimers** and **#ad** as applicable — **DRI legal review** for [jurisdiction] in [Q] |`,
  },

  {
    id: "data-report-operations",
    name: "Report: operations (SLAs & supply chain)",
    category: "data",
    description: "SLO/OLA, capacity, and vendor posture.",
    tags: ["report","operations","sla"],
    content: `# Operations report — [Org / product] — [Service delivery, throughput, and supplier / inventory]

## Service levels & on-time % (choose applicable KPIs)
| Service line | SLO/OLA (target) | Achieved (period) | Incidents (P1-P3) | Backlog (aging) |
| --- | --- | ---: | --: | --- |
| [Fulfillment] | [99% 2d ship] | [98.1%] | [P1-0 P2-2] | [2d+ skew reason] |
| [Support] | [FRT, CSAT, backlog] | […] | […] | […] |

## Capacity, staffing, and productivity
- **FTE, OT, temp, automation savings:** [table or narrative] with **bottlenecks** at [node] |
- **5S/LEAN / CI initiatives completed:** [2 bullets] and **$ saved or hours reduced** (method note) |

## Supply chain & inventory (if relevant)
- **On-hand, DOH, service level, stockouts, expiries, supplier OTIF, force majeure** [1 paragraph each if material] |
- **Counterfeit / audit / returns:** [Y/N; log ref] and **RMA** root causes top 3 |

## Cost & opex in ops
- **Waste, scrap, freight, 3P logistics vs budget:** [bridge] and **savings levers** [list] with **owner/ETA** |
- **Capex in ops (automation, WMS, packaging):** [status vs plan] and **go-live risks** [list] |

## Forward risks & interlocks
- **Interlocks w/ product (feature freeze), GTM (promised dates), finance (invoicing, rev rec):** [bullets] with **DRI/forum** to resolve |
- **Next period focus:** [1–2 operational excellence themes] and **KPIs** to watch weekly |`,
  },

  {
    id: "data-report-hr",
    name: "Report: HR (aggregated, confidential)",
    category: "data",
    description: "Headcount, comp themes, and compliance signals.",
    tags: ["report","hr","confidential"],
    content: `# HR report (people metrics) — [Org / product] — [Confidential; distribute per policy]

## Headcount, composition, and movement (as of [date], cut by [legal entity / region where allowed])
- **FTE, contractors, open reqs, TTF, acceptance rate, regrettable vs non-reg attrition, diversity where measured:** [one summary table; link to detail in HRIS] |
- **Reorgs, transfers, and critical role risk:** [list] with **succession** status and **DRI of plan** on each |

## Pay, equity, and recognition (no individual numbers in a shared template)
- **Merit & promo cycle vs budget:** [summary only] and **anomalies or calibration themes** in aggregate |
- **LTI / option refresh policy this round:** [high level] and **jurisdictional notes** if cross-border |

## Learning, engagement, relations
- **Engagement/ENPS, participation in surveys, and action plan themes (aggregated):** [text] with **2 actions** in flight and **DRI/ETA** |
- **Grievances / cases opened closed (count only) and **trends**; **OHS** near-miss/recordables if in scope; **refer to legal** for detail |

## Compliance and policy
- **I-9, background checks, pay equity studies, timeclock/OT rules, training completion % by policy:** [table or narrative] and **gaps w/ plan** |
- **Visa/immigration** pipeline for **critical hires** in **[countries]**: [status, external counsel, risks] (internal only) |

## Forward focus & asks
- **3 people priorities** for [next Q] and **resourcing/tech asks** to leadership with **RACI** for PeopleBP vs COO vs legal |
- **Data handling / retention of this report:** [internal only; destroy after] per [**policy**] and **DPA** for vendors |`,
  },

  {
    id: "data-report-it-status",
    name: "Report: IT status (services & changes)",
    category: "data",
    description: "Incidents, change freeze, and cloud/vendor posture.",
    tags: ["report","it","incidents"],
    content: `# IT status report — [Org / product] — [Services, change, and risk snapshot]

## Service health and incidents (this period)
- **P1–P2 summary with customer impact, duration, RFO link, and preventive actions in flight:** [table] |
- **SLO achievement by major system (IdP, email, network, colo, SaaS backbones) vs target and error budget if used** |

## Change, release, and patch posture
- **CAB-approved changes, emergency changes, and upcoming freeze windows (retail, quarter-end, etc.):** [list] |
- **OS/firmware/dependency** **EOL** in next [90] days: [list] and **remediation** owners |

## Security & identity (teaser; details in ISMS)
- **MFA roll-out, device compliance %, DLP, phishing sim results, EDR, vuln open items by severity, secrets hygiene:** [summary + link to Vuln mgmt] |
- **Access reviews / JML completion % for** **privileged** **roles** [date] |

## Capacity, costs, and vendor / cloud
- **On-prem vs public cloud $ run-rate vs budget, forecast drivers (storage growth, Egress, reserved instances, license true-ups):** [bridge] |
- **Top vendor RFPs, renewals, and exit plans** in next [2 quarters] and **BCP/exit clause** check |

## Backlog, tech debt, and interlocks (roadmap, finance)
- **Backlog in days at current velocity for internal apps and shared platforms:** [n] and **top 5 tech debt** items w/ [biz case ref] |
- **Interlocks w/ app owners on incidents/perf:** [RACI] and **next steering** on [date] to align **RPO/RTO** tests |`,
  },

  {
    id: "data-report-security",
    name: "Report: security (executive)",
    category: "data",
    description: "Risk, detect/respond, and exception register pointer.",
    tags: ["report","security","ciso"],
    content: `# Security report (executive) — [Org / product] — [CISO/Head IT; not a full IR report unless § IR references below]

## Risk posture and appetite reminder
- **Inherent / residual** **risk heatmap** [link] version [v] and **materiality** in [currency] and **tolerance** vs **actuals** in **[cyber, fraud, physical]** |
- **This period’s** **vuln / exposure** **trends** and **exploit in wild** for **CKE** in our stack: [1 paragraph] with **TIX** to tickets |

## Detect / respond (SIEM, IR, BCP/DR test)
- **MTTD/MTTR for SEV-1, drills completed, after-action themes:** [list] and **DRI** for [gap1] with **ETA** |
- **BCP/DR** **tabletop** or **test** in [Q]: [pass/fail] and **RTO/RPO** **vs actual** in test |

## Identity, data, and appsec
- **MFA, IdP, least privilege, PAM for admin, data classification coverage %, DLP, key mgmt, appsec in SDLC (SAST/DAST/bug bounty):** [status table] |
- **Third party / supply chain (SBOM, vendor access, SOC2 reports, cloud shared responsibility):** [summary and exceptions] |

## Program management & metrics
- **OKRs and milestones in security roadmap vs **budget**; **FTE/contractor** and **open reqs**; **key audit findings** [open/closed] |
- **Exception register** (risk acceptance) **top 5** w/ [expiry] and **compensating controls** |

## If referencing active incident, use IR pointer only
- **This section does** **not** **contain** **customer PII**; **formal** **IR** **number** [INC-#] and **comm plan** in [link] and **DPA/breach** **process** per [policy] and **DRI** [name] and **regulator** **timeline** if any |`,
  },

  {
    id: "data-report-incident",
    name: "Report: IT/product incident (management)",
    category: "data",
    description: "Impact, RFO, CAPA, and customer credit pointers.",
    tags: ["report","incident","postmortem"],
    content: `# Incident report (IT / product) — [Org / product] — [Post-stabilization management summary, not the full IR]

## Incident ID and title
- **ID:** [INC-####] | **SEV:** [1-4] | **Window (UTC & local for customers if global):** [start–end] with **SLO/contract impact** and **#users/%rev at risk (estimate)** |
- **Service(s) / region(s) / versions affected:** [list] |

## Customer impact and communication (external-safe if shared)
- **What users saw, error rates, and **data** **at risk of loss/integrity;** if **none, state** **confidently** and **caveat** on **incomplete** **logs** |
- **Comms: status page updates (timestamps 1-liners), in-app, email, support macros** list |

## Timeline (UTC) and actions
- **T-120** — [event] by [actor/system] | **T+0** — [detect/alert] | **T+15**—[mitigate/rollback] with **DRI/role** in each |
- **Escalation path used (manager, exec, legal, PR) and** **gaps** in **runbook** |

## Root cause (5-whys) and contributing factors (no blame, fix system)
- **Primary cause:** [text] with **repro in staging**? [Y/N] and **defense-in-depth** **misses** (monitoring, change control) |
- **Code/config/deployment/data change links** in [VCS, CMDB, change ticket] |

## Corrective & preventive (CAPA register subset)
| Action | Type (C or P) | Owner | By date | Verif/Metric |
| --- | --- | --- | --- | --- |
| [Add SLO, add alert, canary, …] | C/P | [name] | [date] | [how we know fixed] |

## Finance / contracts / DPA touchpoints (if any credit or SLA claim)
- **RFO published to customers on** [date] and **credits/SLA** per [contract] with **AR/AP** ticket [ref] and **DRI** [RevOps/Finance] |
- **Lessons in blameless** **postmortem** in [confluence] version [n] and **Q&A** in next **RCA** **forum** on [date] |`,
  },

  {
    id: "data-report-audit",
    name: "Report: internal audit (assurance)",
    category: "data",
    description: "Scope, opinion, findings table, and retest plan.",
    tags: ["report","audit","assurance"],
    content: `# Internal audit / assurance report — [Org / product] — [High-level, attestation-style]

## Scope, objective, and criteria (audit charter reference)
- **Scope period & population:** [process/system], **exclusions (with rationale):** [list] |
- **Framework/criteria (COSO, ISO, SOX, contract SLAs) and** **materiality** for findings |

## Overall opinion / conclusion and rating
- **Conclusion in one line** (e.g. controls **effective w/ **qualifications**) and **3–4 sentence** **narrative** and **RAG** **rating** and **trend** vs **prior** **audit** |
- **Key themes across findings:** [themes] and **concentration** in **[area]** |

## Findings and agreed actions (ID format AUD-#)
| ID | Control ref | Nature (deficiency/significant) | Management response | DRI | Due | Retest |
| --- | --- | --- | --- | --- | --- | --- |
| AUD-1 | [C-4.1] | [text] | [response] | [name] | [date] | [Q] |

## Evidence, sampling, and limitations
- **Files/workpapers location** (read-only for mgmt) and **sampling** **method and** **N**; **inherent** **limitations** (scope creep refused, no fraud investigation unless scoped) |
- **Reliance on** **ISAE/SOC2** and **CSP** **in-scope** for **IaaS** with **citation** in report appendix |

## Follow-up in governance
- **Next audit cycle** in **[Q]** on **[topic]** and **open items** to **[audit committee] ** **date** with **DRI of CAPA** **tracking** in **[GRC tool]** and **trending** of **repeat** **findings** (target **zero**) |
- **Document classification:** [C2/Internal/Conf] per [**policy**] and **retention** [years] |`,
  },

  {
    id: "data-report-compliance",
    name: "Report: compliance program status",
    category: "data",
    description: "Framework obligations, control testing, and exceptions.",
    tags: ["report","compliance","grc"],
    content: `# Compliance program status report (multi-framework) — [Org / product] — [Not legal advice]

## Applicable requirements (laws, regs, standards, customer DPAs) this period
- **Jurisdictions in scope, material changes in law/guidance, and new DPAs/BAAs or DPAs w/ [Art 28, SCCs, etc.]:** [table of refs] and **DRI** per framework |
- **Obligations** **due** in **[period]** (filings, SARs stats, BCR, DPIA) with **RAG** on each |

## Control evidence & testing program
- **% controls tested on schedule, exceptions, and **remediation** **burn-down**; **sample size** and **EPE** in **GRC** [link] |
- **Key metrics by domain** (PAM, logging, DLP, vendor risk, BCP) with **target vs actual** in **KPIs** and **RAG** |

## Issues and exceptions (including risk acceptance for delays)
- **GRC** **tickets** **top 5** w/ [rating], [owner], [due] and **link** to **residual** **risk** **calc** in **ERM** and **if** **on** **exco** **exception** **log** for **$ or brand** |
- **Whistle/helpline, conflicts, ABAC** **trends (counts only)** w/ **referrals** to **legal/HR** as needed |

## Customer / regulator touchpoints in period
- **DPIAs/ROPA/records of processing, SCC/DPA, audit questionnaires from customers, regulator letters — status** w/ **one-liner** each and **DRI** [role] and **redlines** in **[repo]** for **RFX** and **M&A** |
- **Upcoming** **assurance** (ISO, SOC) **window** in **[Q]** and **gaps to close** on **[list]** with **resource ask** to **steerco** |

## Outlook & resourcing (internal)
- **2–3 program priorities** next **[Q]** and **FTE/contractor** and **Tool** **budget** needs for **GRC, privacy, and security** to **sustain** **program** w/ **RACI** in **RASCI** in **[confluence page]** and **DPIA** for **[new product]** in **[Q]** |
- **Disclaimer:** This is **an operational** **compliance** **status** **narrative**; **independent** **opinion** in **[audit]** **or** **external** **certs** **supersedes** for **certain** **claims** |`,
  },

  {
    id: "data-report-project-closure",
    name: "Report: project closure (handover & benefits)",
    category: "data",
    description: "Sponsor sign-off, handover, and archive pointers.",
    tags: ["report","project","closure"],
    content: `# Project closure report — [Org / product] — [Before formal archive & lessons learned are mandatory]

## Project identity and sponsor sign-off (Go / No-Go to close)
- **Name / business case ID / PMO ID:** [x] with **Sponsor (exec):** [name] **stating** **acceptance of** **scope & benefits** and **residual** **caveats** in **1 paragraph** |
- **Original vs final scope, schedule, and budget (currency):** [table] with **CPI/SPI** if you used EVM, else **% variance** and **NCR** to original approved CRs |

## Deliverables and handover (run-state)
- **List of** **tangible** **deliverables** **with** **location** in **[repo/DMS/CMDB]**, **owner in ops**, **SLA/OLA** **started**, **support model** and **BCP** **RTO** **tests** for **[service] ** **done?** [Y/N] w/ ref |
- **Training, runbooks, known issues with workarounds, and** **L2/L3** **ramp** **complete?** with **DRI in ops** and **hypercare** end date [date] |

## Benefits realization (year 1) and follow-on BAU actions
- **Metrics / $$ against baselines, **leading/lagging,** and **re-measure** **plan in** [Q+n] w/ **owner in finance/ops** and **CFO** **sign-off** on **$** (if in scope) |
- **Unrealized** **items** w/ **reason** and **separate** **mini-CR** in **[PMO]** if **still** **funded** |

## Lessons learned, archive, and legal/IP
- **3 things that went well, 3 to improve, 3 never-again,** **with** **owners** in **LCL** in **[wiki]** and **tags** in **PMO** for **search** in **[future] ** **projects** |
- **Project ** **archive** **location** in **[DMS]**, **retention** [years] per **[policy]**, and **licenses, IP, third code** in **BOM/SPDX** w/ **legal** sign-off; **SOW/MSA** **closure** w/ **vendor** in **[A/P]** |

## Final financial close (trivial vs material)
- **Punch list $0/€0 or open** **POs/retention** w/ [refs] in **[ERP]** and **DRI in finance**; **WBS** and **EAC** to **$0** and **RPA** in **[system]** |
- **Risks/assumptions** from **RMP** that **re-open** a **new** **initiative** go to **[portfolio] ** on **[date] ** w/ **new** **id**; **formal** **PMO** **closure** **record** in **[#]** |`,
  },

  {
    id: "data-chart-bar",
    name: "Chart data: bar (categories vs series)",
    category: "data",
    description: "Tabular data ready for a bar/ column chart import.",
    tags: ["chart","bar","viz"],
    content: `# Bar · categorical comparison (source data)

> Replace bracketed values. Column names and units must stay consistent in your import pipeline.
| [Series/Category] | [Q1 24] | [Q2 24] | [Q3 24] | [Q4 24] |
| --- | --- | --- | --- | --- |
| [Label A] | [v] | [v] | [v] | [v] |
| [Label B] | [v] | [v] | [v] | [v] |
| [Label C] | [v] | [v] | [v] | [v] |`,
  },

  {
    id: "data-chart-line",
    name: "Chart data: line (time series)",
    category: "data",
    description: "Rows as series, columns as time buckets.",
    tags: ["chart","line","time"],
    content: `# Line · time series (source data)

> Replace bracketed values. Column names and units must stay consistent in your import pipeline.
| [Series/Category] | T0 | T+1d | T+1w | T+1m |
| --- | --- | --- | --- | --- |
| [Label A] | [v] | [v] | [v] | [v] |
| [Label B] | [v] | [v] | [v] | [v] |
| [Label C] | [v] | [v] | [v] | [v] |`,
  },

  {
    id: "data-chart-pie",
    name: "Chart data: pie (part-to-whole)",
    category: "data",
    description: "Slices with checks for totals and 'Other' handling.",
    tags: ["chart","pie","share"],
    content: `# Pie / donut · part-to-whole (source data)

> Replace bracketed values. Column names and units must stay consistent in your import pipeline.
| [Slice] | [Value] | [Percent of total] | [Notes] |
| --- | --: | --: | --- |
| [A] | [0] | [0%] | […] |
| [B] | [0] | [0%] | […] |
| *Other* | [0] | [0%] | [residual] |

## Data quality
- **Total check:** A+B+Other = [100%] within rounding — **Exclusions (double count):** [list] |
- **Label for *Other* if >[n%]:** break out sub-slices; **sensitivity to bucketing** [note] |

## Context for readers
- **Cohort and filters:** [who is in] — **ETL version:** [n] and **as-of** [timestamp] in [TZ] with **refresh** [daily/weekly] |`,
  },

  {
    id: "data-chart-scatter",
    name: "Chart data: scatter (x vs y)",
    category: "data",
    description: "Points with optional z/color and outlier policy.",
    tags: ["chart","scatter","correlation"],
    content: `# Scatter / bubble (two numeric axes) (source data)

> Replace bracketed values. Column names and units must stay consistent in your import pipeline.
| Point ID | [X metric] | [Y metric] | [Z size?] | [Color category] |
| --- | --: | --: | --: | --- |
| p1 | [0] | [0] | [0] | [A] |
| p2 | [0] | [0] | [0] | [B] |

## Regression or clustering (if used, optional block)
- **R², slope, p-value, or cluster id:** [n] — **Outlier cut rule:** [e.g. IQR, z-score, domain cap] |
- **Caveat on causality** — *correlation* only unless experiment ref [A/B, DID] in [link] |

## Repro in notebook
- **Notebook/Sheet:** [id] with **seeds=**[n] and **library versions** in **pip lock** in [link] and **DPIA** for **[PII] ** **none/anon** in **file** as **per** **[policy] ** |`,
  },

  {
    id: "data-chart-histogram",
    name: "Chart data: histogram (bins)",
    category: "data",
    description: "Binning parameters and cumulative % metadata.",
    tags: ["chart","histogram","distribution"],
    content: `# Histogram (bins) (source data)

> Replace bracketed values. Column names and units must stay consistent in your import pipeline.
| Bin (range) | Count | % of n | Cumulative % |
| --- | --: | --: | --: |
| [0 – a) | [n] | [0%] | [0%] |
| [a – b) | [n] | [0%] | [0%] |

## Parameters
- **n =** [N] | **bin width =** [w] or Sturges / Freedman–Diaconis; **excluded outliers:** [count] with rule: [IQR, cap, or domain] |
- **If weighted:** weight column = [w] and **design effect** (if complex survey) = [n] (document method) |

## Use
- **Primary audience for skew / tail interpretation:** [role] with **P95 / P99** in caption if service-level related |
- **Reproducibility:** seed = [n], code notebook [link], raw export file [name] in [object store] |`,
  },

  {
    id: "data-chart-heatmap",
    name: "Chart data: heatmap (matrix)",
    category: "data",
    description: "Row/column matrix with color scale and masking notes.",
    tags: ["chart","heatmap","matrix"],
    content: `# Heatmap (matrix) (source data)

> Replace bracketed values. Column names and units must stay consistent in your import pipeline.
|  | [Col1] | [Col2] | [Col3] |
| --- | --: | --: | --: |
| [Row1] | [0.0-1.0] | [0.0-1.0] | [0.0-1.0] |
| [Row2] | [0.0-1.0] | [0.0-1.0] | [0.0-1.0] |

## Color scale and normalization
- **Scale:** [linear/log] from **[min] to** **[max]**, colorbrewer **[scheme]**; **row/column** **cluster** **order =** [hclust** **linkage**] or **original** |
- **Z-score** per row/col if [yesNo] to compare **magnitudes**; **NAs** = **[treatment]** |

## Source matrix file
- **Tidy CSV in** [path] with **melt** key **[id]** and **value**; **DPIA** and **[mask]** for **<[n] ** in **any** **cell** for **[geo]** **publishing** in **[deck]** |`,
  },

  {
    id: "data-chart-funnel",
    name: "Chart data: funnel (stages)",
    category: "data",
    description: "Stage counts, drop-off, and time-in-stage field.",
    tags: ["chart","funnel","pipeline"],
    content: `# Funnel (stage counts) (source data)

> Replace bracketed values. Column names and units must stay consistent in your import pipeline.
| Stage | Count | % of top | *Drop-off vs prior* | *Median time in stage* |
| --- | --: | --: | ---: | ---: |
| [Aware] | [0] | [100%] | — | [n days] |
| [Interest] | [0] | [0%] | [0%] | [n days] |
| [Decision] | [0] | [0%] | [0%] | [n days] |
| [Won/Converted] | [0] | [0%] | [0%] | [n days] |

## Cohorting & dedupe
- **Cohort =** [def] by **[date]** and **dedupe** by **[id]** | **re-entry** **allowed?** [Y/N] w/ cap [n] |
- **Data fix window** in **[+n days] ** **after** **stage** **exit** w/ **owner** in **[RevOps] ** and **GTM** and **MQL** **source** in **[ref]** |

## Forecast note
- **To-go** in **[Q]** w/ **stage** **prob** model **[v] ** in **[sheet] ** w/ **owner** in **[name] ** on **[date] ** w/ **±** in **[+/-$]** |`,
  },

  {
    id: "data-chart-gauge",
    name: "Chart data: gauge (single KPI vs band)",
    category: "data",
    description: "Target/bands and as-of time for a KPI readout.",
    tags: ["chart","gauge","kpi"],
    content: `# Gauge / single-KPI against target (source data)

> Replace bracketed values. Column names and units must stay consistent in your import pipeline.
| KPI | Value | Min | Max | Target | UoM | *As-of* |
| --- | --: | --: | --: | --: | --- | --- |
| [Utilization] | [0] | [0] | [100] | [85] | [%] | [date] |

## Scale & thresholds
- **RAG** bands: green **[a–b]**, yellow **[c–d]**, **else** **red** w/ **hysteresis** in **[+/-x]** in **HMI** spec **[link] ** w/ **accessibility** in **[contrast/VO] ** w/ **[WCAG] ** in **[§] ** |
- **Data pipeline delay** in **[+n min] ** and **alert** in **[#chan] ** if **stale** **>** **[n] ** w/ **SLO** in **[D] ** w/ **[error budget] ** |

## Narrative (what changed vs last read)
- **Delta vs** **[prior period] ** w/ **driver** in **[1 line] ** w/ **link** in **[tickets] ** w/ **[owner] ** w/ **ETA** w/ **$** w/ **customer** w/ **[refs] ** in **[NPS] ** if **[material] ** |`,
  },

  {
    id: "data-chart-radar",
    name: "Chart data: radar (multi-axis)",
    category: "data",
    description: "Normalized series across axes; accessibility note.",
    tags: ["chart","radar","compare"],
    content: `# Radar (multi-axis, same unit or normalized) (source data)

> Replace bracketed values. Column names and units must stay consistent in your import pipeline.
| Axis | [Series A] | [Series B] | [Weight] |
| --- | --: | --: | --: |
| [Speed] | [0-10] | [0-10] | [0.2] |
| [Quality] | [0-10] | [0-10] | [0.2] |
| [Cost] (invert) | [0-10] | [0-10] | [0.2] |

## Normalization
- **Higher = better** on all axes, except **[Cost]** (invert: use \`10 - raw\` in plot data with note) |
- **Min–max scale per series** (optional) if units differ: document formula in column \`[norm_rule]\` in source CSV |

## Display & accessibility
- **Provide a data table** next to the chart; **contrast** meets **[WCAG]**; **not color alone** for categories |
- **N =** [n] | **Cohort** [def] | **Analyst** [name] | **As-of** [date] |`,
  },

  {
    id: "data-chart-treemap",
    name: "Chart data: treemap (hierarchy + size)",
    category: "data",
    description: "Parent/child paths and rollup rules.",
    tags: ["chart","treemap","hierarchy"],
    content: `# Treemap (hierarchy + size) (source data)

> Replace bracketed values. Column names and units must stay consistent in your import pipeline.
| Path (parent/child) | [Size metric] | [Color metric?] |
| --- | --: | --- |
| [Root / A] | [0] | [0] |
| [Root / A / A1] | [0] | [0] |
| [Root / B] | [0] | [0] |

## Tree rules
- **Path delimiter:** [ \`/\` ] with **no orphan** children; **sum-to-parent** within **[ε] **; **fix** divergences in ETL [ticket] |
- **ID scheme** stable across refreshes: **[natural key]** + **[version] ** for **SCD2** if needed |

## Color and publication
- **Diverging palette** if color encodes a signed delta; **mask** small-N cells in **[k-anon] ** |
- **Export:** SVG/PNG in **[folder]** with **DPIA** and **PII** review before **[external] ** deck |`,
  },

  {
    id: "data-catalog-entry",
    name: "Data catalog entry (dataset)",
    category: "data",
    description: "One dataset’s owners, class, and consumers in catalog form.",
    tags: ["data","governance","catalog"],
    content: `# Data catalog entry — [Entity / business object] — v[ver]

| Field | Value |
| --- | --- |
| **Business name** | [name] |
| **Technical (table/topic/api)** | [db.schema.tbl, …] |
| **Owner (B/T)** | [names, emails] |
| **Classification** | [PII, fin, health, public] with **DPIA/PIA** [id] |

## Purpose, retention, and lawful basis
- **Intended / prohibited uses** (ML training, resale, re-identification) | **Lawful basis** (GDPR art.6 / contract) | **retention** event + period per **[policy §]** |
- **RTO/RPO** and **BCP/DR** region(s): [list] with **RPO =** [n h] and **RTO =** [n h] |

## Consumers, lineage, and DQ
- **Active consumers:** [list of apps/reports/ML] with **RACI** for new consumers |
- **Key DQ rules** and **target score** with **on-call** for breaks [rotation link] |

## Versioning and review
- **Changelog (semver)**: [1.0.0] — [date] — [note] | **Next triennial** catalog review: [Q] with **DRI** [name] |`,
  },

  {
    id: "data-lineage-document",
    name: "Data lineage (diagram + field notes)",
    category: "data",
    description: "Mermaid sketch plus field/PII and CDC notes.",
    tags: ["data","lineage","governance"],
    content: `# Data lineage — [Data product or column set]

\`\`\`mermaid
flowchart LR
S[Source: [sys]] --> T[Transform [job id]]
T --> M[(Mart [tbl])]
M --> C[Consumer: [app/BI]]
\`\`\`

## Field-level (attach spreadsheet id)
| Column | SCD | PK/FK | Transform | PII? |
| --- | --- | --- | --- | --- |
| [col1] | [0/1/2] | [yes/no] | [expr] | [Y/N] |

## PII, cross-border, and sub-processors
- **DPA, SCC, BAA, ROPA row** and **transfers** with **documentation link** in **[GRC tool]** |
- **CDC / watermark / lag (SLA):** [n min] with **DRI** [name] for **on-call** |

## Test & evidence of lineage
- **Last ETL test:** [date] with **reconciliation** to **[sum]** in **[n]** tolerance |`,
  },

  {
    id: "data-quality-report",
    name: "Data quality report (periodic)",
    category: "data",
    description: "Rules, pass rates, and remediation owners.",
    tags: ["data","quality","dq"],
    content: `# Data quality report — [Domain] — [period]

| Rule ID | What it checks | Target | Achieved | Trend | DRI |
| --- | --- | ---: | ---: | --- | --- |
| DQ-01 | [completeness] | [n%] | [n%] | [↑/↓/→] | [name] |

## Root causes and remediation (top 5)
- [Issue] — [cause] — [fix] — **ETA** [date] |
- **Data steward forum** on [date] to close **open** items |

## Source systems and change windows
- **Feeds** [list] with **change freeze** [dates] and **version** of **contracts** in **[repo]** |

## Sign-off (optional)
- **DGO / CDO:** [name] [date] with **residual** risk note if **below** target in **[category] ** |`,
  },

  {
    id: "data-governance-policy",
    name: "Data governance policy (operating)",
    category: "data",
    description: "Roles, principles, and tools/ enforcement hooks.",
    tags: ["data","governance","policy"],
    content: `# Data governance policy (operational) — [scope]

## 1) Roles: steering, DGO, data owners, custodians, stewards
- **RACI** in **[link] ** with **term** and **voting** for **exception** to **[principle] ** on **[topic] ** |
- **DGO meeting cadence** [monthly] with **agenda** template in **[confluence] ** |

## 2) Principles: minimization, purpose limitation, default deny
- **List** with **enforcement in SDLC (design review) ** and **breach of principle** = **[escalation path] ** |
- **Data products** and **OKRs** for **% cataloged** and **% with **SLA** on **quality** |

## 3) Tools and enforcement
- **Glossary, catalog, lineage, access** tools [list] and **SME** for each; **KPIs** in **[BI dashboard] ** |
- **This policy** version **[v] **; **next review** [date]; **DRI legal** for **reg** mapping in **[jurisdiction] ** |

## 4) Exceptions and audit
- **RACI** for **granting** a **governance** **exception** w/ **expiry** and **compensating** controls |`,
  },

  {
    id: "data-retention-schedule",
    name: "Retention schedule (by category)",
    category: "data",
    description: "Categories, legal holds, and backup relationship.",
    tags: ["data","retention","compliance"],
    content: `# Data retention schedule — [Jurisdiction] — [v]

| Category | **Examples** | **Lawful** hold? | **Ret period** | **Disposal** |
| --- | --- | --- | --- | --- |
| [HR records] | […] | [Y/N, cite] | [n y] | [shred, delete, anon] |

## Legal & litigation hold (override)
- **Matter** [id] with **DRI** [legal] and **do-not-destroy** tag in **[DMS/backup catalog] ** until **[date/event] ** |
- **If conflict** with **row above**, **this section** wins; **log** in **[register] ** |

## Backup vs primary retention
- **Backups** retain for **[n] ** days; **purge** **independent** of **primary** per **[nightly job id] ** |
- **Regulatory** **citation** per **row** in **[annex] ** (non-exhaustive) |

## Attestation and review (annual)
- **DGO sign-off** [name] [date] with **evidence** of **sample** purges in **[ticketing] ** |`,
  },

  {
    id: "data-backup-schedule",
    name: "Backup schedule (RPO/RTO + tests)",
    category: "data",
    description: "Schedules, regions, and restore test evidence pointer.",
    tags: ["data","backup","dr"],
    content: `# Backup schedule — [System / data class]

| Tier | RPO | RTO | **Schedule** (UTC) | **Target** (region/store) | Last OK |
| --- | ---: | ---: | --- | --- | --- |
| T1 (critical) | [15m] | [1h] | [*/15 * * *] | [geo-A] | [ts] |

## Encryption, immutability, and restore tests
- **At rest / in flight** keys: **[KMS ref] **; **WORM** / **GFS** for **ransomware** resilience |
- **Last restore test** [date] with **RTO** **met?** [Y/N] and **gaps** [link] |

## Off-site / cross-region / air-gap
- **3-2-1** or **NIST**-aligned: **2** media, **1** off-line if **[requirement] ** from **[insurer/ regulator] ** |
- **DRI** [name] for **BCP/DR** **exercise** in **[Q] ** w/ **executive** **readout** |

## Exclusions and cost guardrails
- **Not backed up** (ephemeral, derived): [list] with **rebuild** SLO; **$ cap** and **approver** for **unbounded** log volume |`,
  },

  {
    id: "data-archival-policy",
    name: "Archival policy (cold + rehydration)",
    category: "data",
    description: "Triggers, index metadata, and destruction after legal + fiscal hold.",
    tags: ["data","archive","compliance"],
    content: `# Archival policy — [retention class] & storage tier

## 1) When data moves to archive
- **Trigger** (age, business close, product EOL) with **ticket** template **[ARCH-#] ** and **DRI** [role] |
- **Index/metadata** (searchable) required: **[fields] **; **PII** **masked** or **tokenized** in **[index] ** |

## 2) Access and rehydration
- **SLO to retrieve** from cold: **[n h] ** with **approver** [role] and **audit** log to **[SIEM] ** |
- **Export** format **[tar/parquet/…] ** with **checksum** and **chain** in **[hash] ** |

## 3) Destruction after legal + fiscal windows
- **Purge** job **[cron id] ** w/ **certificate** of **destruction** for **[vendor] ** if **3rd party** |
- **M&A** **data room** **handling** w/ **redlines** in **[legal] ** for **sensitive** **excerpts** |

## 4) Cost & compliance (footer)
- **$ / TB / month** and **S3 IA/Glacier** (example) with **DRI** in **FinOps** for **tiering** review **[quarterly] ** |`,
  },

  {
    id: "data-purge-criteria",
    name: "Purge runbook (delete data safely)",
    category: "data",
    description: "Pre-checks, idempotent job, and approvals with audit log.",
    tags: ["data","purge","ops"],
    content: `# Purge criteria and runbook — [Dataset]

## Scope (in / out)
- **In scope:** [tables/partitions] with **PK** range or **tenant** = [x] | **Out:** [legal hold, audit sample] in **[exclusion] ** |

## Pre-purge checks (must be green)
- [ ] **Backup** job **[id] ** OK in **[last] ** [n] days | [ ] **No** open **L/hold** in **[#matter] ** | [ ] **Downstream** **replica** / **export** / **S3** **list** in **[checklist] ** |

## Execution & verification
- **Idempotent** **SQL / job** in **[id] ** with **dry-run** on **[date] ** and **rowcount** = [n] (expected) |
- **Post-verify:** \`COUNT(*)\` and **max(ts)** = **NULL** in **[n]** critical columns |

## Rollback (if error)
- **From backup** **[id] ** only if **< [n] h**; **DRI** [on-call] and **RFO** in **[#inc] ** if **customer** **visible** |

## Approvals and audit trail
- **CAB / DGO** **sign-off** [name] [date] with **ticket** **[#] ** and **GRC** log **[id] ** |`,
  },

  {
    id: "data-sla-metrics",
    name: "Data / pipeline SLAs and error budget",
    category: "data",
    description: "SLO/SLA table, dependencies, and escalation.",
    tags: ["data","sla","sre"],
    content: `# Data & pipeline SLA metrics — [Product / integration]

| SLO (metric) | Target | **Alert** | This period | **Error budget** left |
| --- | ---: | --- | ---: | ---: |
| Freshness p95 [lag] | [n min] | [page] | [n min] | [n%] |

## Dependencies (external SLAs)
- **Vendor** [A] SLO: [x] w/ **penalty** [clause ref] and **DRI** [vendor mgr] for **RFO** in **[#] ** if **miss** |
- **We owe** to **downstream** per **[contract] **: **DRI** [name] w/ **joint** postmortem on **joint** SEV-1 |

## Reporting and retro
- **Monthly** SRE/DS review with **trend** and **toil** from **paging**; **automation** **items** in **[backlog] ** |
- **RFO** to **customers** if **external** SLO; **DPA** **DPIA** **link** in **[footer] ** for **subproc** if **vendor**-caused |

## If below SLO: escalation
- **Gameday** in **[+n] ** days with **DRI** [name] and **RCA** by **[date] ** w/ **CAPA** in **[#] ** |`,
  },

  {
    id: "data-access-request",
    name: "Data access request (DAR) workflow",
    category: "data",
    description: "Justification, approvers, and re-cert for sensitive access.",
    tags: ["data","access","governance"],
    content: `# Data access request (internal workflow) — [Requester] — [date]

| Field | Value |
| --- | --- |
| **Request ID** | [DAR-####] |
| **Requester (role, manager)** | [name] |
| **Data set / app / region** | [id] |
| **Business justification** | [text, min 1 line] |

## Approvals (fill before grant)
- **Data owner** [Y/N, name, date] with **DPIA/PIA** if **sensitive** | **Infosec** for **PAM/ABAC** [Y/N, date] |
- **JML** in **[IdP] ** with **MFA** and **end date** of **access** (must have) |

## Grant & log
- **Group / role** [id] in **[IdP] **; **query** / **row filter** in **[Ranger/Snow] ** w/ **mask** for **[PII] ** if **need-to-know** |
- **Log** in **[SIEM] ** with **ticket** in **[#] ** and **QBR** attestation in **[GRC] ** |

## Re-certification
- **90-day** (or your policy) **re-attest** with **DRI** [name] in **[#] ** or **auto-revoke** in **[d] ** days |

## If denied / partial
- **Rationale (safe for employee file):** [text] w/ **appeal** in **[to DGO] ** in **[+n] ** days |`,
  },

  {
    id: "snippets-header-document-formal",
    name: "Document header (formal)",
    category: "snippets",
    description: "Centered cover-style header with classification line.",
    tags: ["header","formal","doc"],
    content: `<!-- Insert at top of \`README.md\` or print cover -->

<div align="center">

# [Organization or project name]

**[Subtitle — one line, Title Case]**

---

[Department / program] · [Internal reference: DOC-##] · [Version: vX.Y] · [Date: YYYY-MM-DD]

*Prepared for: [Executive sponsor / client]* · *Classification: [Internal - Confidential / …]*

</div>

[Optional: logo URL or brand lockup; follow brand guidelines. Remove if external publication.]`,
  },

  {
    id: "snippets-header-document-casual",
    name: "Document header (casual)",
    category: "snippets",
    description: "Lightweight top matter with status and links.",
    tags: ["header","casual","doc"],
    content: `# [Doc title] · [Product name]

_Hey [team] — quick context: [1–2 sentences on why this page exists.]_

- **Status:** [Draft / In review / Shipped] · **Next touchpoint:** [date or meeting] · **DRI:** [name]
- **Link hub:** [Notion/Confluence/…] for **full** background; this file is the **tldr** for newcomers.

## In this page
- [Point 1] | [Point 2] | [Point 3] — *pick up where we left off in [Slack thread / meeting]*.

---

_P.S. [Optional humor or CTA, still professional.]_ |`,
  },

  {
    id: "snippets-header-document-minimal",
    name: "Document header (minimal)",
    category: "snippets",
    description: "Title + one-line owner and date for fast pages.",
    tags: ["header","minimal","doc"],
    content: `# [Title]

[One-line purpose.] · *Owner: [name] · Last updated: [date] (commit [hash] if from repo) · Source of truth: [link]*

---

`,
  },

  {
    id: "snippets-footer-page-standard",
    name: "Page footer (standard)",
    category: "snippets",
    description: "Copyright, links, and internal routing disclaimer.",
    tags: ["footer","layout","web"],
    content: `<!-- Page footer: paste before closing main content or in theme footer template -->

---

© [Year] [Legal entity]. All rights reserved. · [Address line or registered office, if public]
[Privacy policy] · [Terms] · [Contact / security contact]

Internal: [IT service desk] · [on-call: pager schedule link] — **no** PII in public footers; mask project codenames in external sites.

`,
  },

  {
    id: "snippets-footer-page-with-links",
    name: "Page footer (with link columns)",
    category: "snippets",
    description: "Multi-column sitemap / legal / company links (wire).",
    tags: ["footer","nav","web"],
    content: `<!-- Page footer with quick links; align with site IA -->

---

| [Product] | [Resources] | [Company] | [Legal] |
| --- | --- | --- | --- |
| [Features] [Pricing] [Docs] | [Blog] [Changelog] [Status] | [About] [Careers] [Press] | [Privacy] [Terms] [DPA] |

Social (optional, external-safe): [LinkedIn] [X] [GitHub] | **Trademark** notice if needed: *“[name] is a [registered] trademark of [holder].*”*

© [Y] [Entity]. [Locale-specific copyright line if any.]

`,
  },

  {
    id: "snippets-letterhead",
    name: "Letterhead (print / PDF cover)",
    category: "snippets",
    description: "Logo, address, To/Re lines for business letters.",
    tags: ["letterhead","print","brand"],
    content: `<!-- For PDF/print: keep margins; embed fonts per brand policy -->

<div class="letterhead">

[Logo · left or centered per brand] · **[Legal name]** · [tagline, optional, one line]

[Street] · [City, ST ZIP] · [phone] · [www.example.com] · [email: general or department]

</div>

[Date, full written out or ISO per locale] · *Reference: [REF-#]*

**To:** [Addressee name, title, org]  
**Re:** [Subject line, concise]

Dear [Name],

[Body starts here. Keep margin [n] in / [n] mm per template.]

`,
  },

  {
    id: "snippets-memo-header",
    name: "Memo header (To/From/Subject)",
    category: "snippets",
    description: "Inter-office / engineering memo with classification.",
    tags: ["memo","internal","header"],
    content: `<!-- Inter-office / engineering memo; adjust distribution list to policy -->

| **MEMORANDUM** | | |
| --- | --- | --- |
| **To:** | [distribution list, roles, or *All engineering*] | |
| **From:** | [name, title] | |
| **Date:** | [YYYY-MM-DD] | |
| **Subject:** | [Imperative subject, ≤1 line] | |
| **CC:** | [optional, names] | |

**Classification / handling:** [Internal / Attorney-client / …] — **retention** per [record schedule id]

**Summary (2–3 lines):** [what decision or FYI, why now, and what you need from readers.]

---

`,
  },

  {
    id: "snippets-callout-note",
    name: "Callout: note",
    category: "snippets",
    description: "GFM-style callout for neutral notes and references.",
    tags: ["callout","admonition","docs"],
    content: `> [!NOTE]
> [One-line lead for the note block, audience-specific.]
>
> - **Context:** [when this applies, or *skip if obvious*]
> - **Detail:** [2–3 sentences or a mini-table if comparing options.]
>
> | Option | Pro | Con |
> | --- | --- | --- |
> | A | […] | […] |
>
> **Action:** [what reader should do next, or *none* if FYI only.]
>
> *References: [doc §], [ADR-#], [runbook] — PII/secret-free in public repos.* |`,
  },

  {
    id: "snippets-callout-tip",
    name: "Callout: tip",
    category: "snippets",
    description: "Short tip with optional mini-table and actions.",
    tags: ["callout","tip","docs"],
    content: `> [!TIP]
> [One-line lead for the tip block, audience-specific.]
>
> - **Context:** [when this applies, or *skip if obvious*]
> - **Detail:** [2–3 sentences or a mini-table if comparing options.]
>
> | Option | Pro | Con |
> | --- | --- | --- |
> | A | […] | […] |
>
> **Action:** [what reader should do next, or *none* if FYI only.]
>
> *References: [doc §], [ADR-#], [runbook] — PII/secret-free in public repos.* |`,
  },

  {
    id: "snippets-callout-warning",
    name: "Callout: warning",
    category: "snippets",
    description: "Warning with risk framing and follow-ups.",
    tags: ["callout","warning","docs"],
    content: `> [!WARNING]
> [One-line lead for the warning block, audience-specific.]
>
> - **Context:** [when this applies, or *skip if obvious*]
> - **Detail:** [2–3 sentences or a mini-table if comparing options.]
>
> | Option | Pro | Con |
> | --- | --- | --- |
> | A | […] | […] |
>
> **Action:** [what reader should do next, or *none* if FYI only.]
>
> *References: [doc §], [ADR-#], [runbook] — PII/secret-free in public repos.* |`,
  },

  {
    id: "snippets-callout-danger",
    name: "Callout: danger",
    category: "snippets",
    description: "High-severity / destructive op warning.",
    tags: ["callout","danger","safety"],
    content: `> [!DANGER]
> [One-line lead for the danger block, audience-specific.]
>
> - **Context:** [when this applies, or *skip if obvious*]
> - **Detail:** [2–3 sentences or a mini-table if comparing options.]
>
> | Option | Pro | Con |
> | --- | --- | --- |
> | A | […] | […] |
>
> **Action:** [what reader should do next, or *none* if FYI only.]
>
> *References: [doc §], [ADR-#], [runbook] — PII/secret-free in public repos.* |`,
  },

  {
    id: "snippets-callout-info",
    name: "Callout: info",
    category: "snippets",
    description: "Informational admonition with context bullets.",
    tags: ["callout","info","docs"],
    content: `> [!INFO]
> [One-line lead for the info block, audience-specific.]
>
> - **Context:** [when this applies, or *skip if obvious*]
> - **Detail:** [2–3 sentences or a mini-table if comparing options.]
>
> | Option | Pro | Con |
> | --- | --- | --- |
> | A | […] | […] |
>
> **Action:** [what reader should do next, or *none* if FYI only.]
>
> *References: [doc §], [ADR-#], [runbook] — PII/secret-free in public repos.* |`,
  },

  {
    id: "snippets-callout-success",
    name: "Callout: success",
    category: "snippets",
    description: "Positive confirmation / rollout win pattern.",
    tags: ["callout","success","docs"],
    content: `> [!SUCCESS]
> [One-line lead for the success block, audience-specific.]
>
> - **Context:** [when this applies, or *skip if obvious*]
> - **Detail:** [2–3 sentences or a mini-table if comparing options.]
>
> | Option | Pro | Con |
> | --- | --- | --- |
> | A | […] | […] |
>
> **Action:** [what reader should do next, or *none* if FYI only.]
>
> *References: [doc §], [ADR-#], [runbook] — PII/secret-free in public repos.* |`,
  },

  {
    id: "snippets-callout-important",
    name: "Callout: important",
    category: "snippets",
    description: "Emphasize must-read context before steps.",
    tags: ["callout","important","docs"],
    content: `> [!IMPORTANT]
> [One-line lead for the important block, audience-specific.]
>
> - **Context:** [when this applies, or *skip if obvious*]
> - **Detail:** [2–3 sentences or a mini-table if comparing options.]
>
> | Option | Pro | Con |
> | --- | --- | --- |
> | A | […] | […] |
>
> **Action:** [what reader should do next, or *none* if FYI only.]
>
> *References: [doc §], [ADR-#], [runbook] — PII/secret-free in public repos.* |`,
  },

  {
    id: "snippets-callout-caution",
    name: "Callout: caution",
    category: "snippets",
    description: "Caution (non-destructive) for subtle pitfalls.",
    tags: ["callout","caution","docs"],
    content: `> [!CAUTION]
> [One-line lead for the caution block, audience-specific.]
>
> - **Context:** [when this applies, or *skip if obvious*]
> - **Detail:** [2–3 sentences or a mini-table if comparing options.]
>
> | Option | Pro | Con |
> | --- | --- | --- |
> | A | […] | […] |
>
> **Action:** [what reader should do next, or *none* if FYI only.]
>
> *References: [doc §], [ADR-#], [runbook] — PII/secret-free in public repos.* |`,
  },

  {
    id: "snippets-callout-example",
    name: "Callout: example",
    category: "snippets",
    description: "Worked example in a callout (keep PII out).",
    tags: ["callout","example","docs"],
    content: `> [!EXAMPLE]
> [One-line lead for the example block, audience-specific.]
>
> - **Context:** [when this applies, or *skip if obvious*]
> - **Detail:** [2–3 sentences or a mini-table if comparing options.]
>
> | Option | Pro | Con |
> | --- | --- | --- |
> | A | […] | […] |
>
> **Action:** [what reader should do next, or *none* if FYI only.]
>
> *References: [doc §], [ADR-#], [runbook] — PII/secret-free in public repos.* |`,
  },

  {
    id: "snippets-callout-quote",
    name: "Callout: quote",
    category: "snippets",
    description: "Pull quote block with attribution for blogs.",
    tags: ["callout","quote","content"],
    content: `> [!QUOTE]
> [One-line lead for the quote block, audience-specific.]
>
> - **Context:** [when this applies, or *skip if obvious*]
> - **Detail:** [2–3 sentences or a mini-table if comparing options.]
>
> | Option | Pro | Con |
> | --- | --- | --- |
> | A | […] | […] |
>
> **Action:** [what reader should do next, or *none* if FYI only.]
>
> *References: [doc §], [ADR-#], [runbook] — PII/secret-free in public repos.* |`,
  },

  {
    id: "snippets-callout-abstract",
    name: "Callout: abstract",
    category: "snippets",
    description: "TL;DR abstract block for long posts.",
    tags: ["callout","abstract","content"],
    content: `> [!ABSTRACT]
> [One-line lead for the abstract block, audience-specific.]
>
> - **Context:** [when this applies, or *skip if obvious*]
> - **Detail:** [2–3 sentences or a mini-table if comparing options.]
>
> | Option | Pro | Con |
> | --- | --- | --- |
> | A | […] | […] |
>
> **Action:** [what reader should do next, or *none* if FYI only.]
>
> *References: [doc §], [ADR-#], [runbook] — PII/secret-free in public repos.* |`,
  },

  {
    id: "snippets-callout-bug",
    name: "Callout: bug (known issue)",
    category: "snippets",
    description: "Link to issues and workarounds for known bugs.",
    tags: ["callout","bug","support"],
    content: `> [!BUG]
> [One-line lead for the bug block, audience-specific.]
>
> - **Context:** [when this applies, or *skip if obvious*]
> - **Detail:** [2–3 sentences or a mini-table if comparing options.]
>
> | Option | Pro | Con |
> | --- | --- | --- |
> | A | […] | […] |
>
> **Action:** [what reader should do next, or *none* if FYI only.]
>
> *References: [doc §], [ADR-#], [runbook] — PII/secret-free in public repos.* |`,
  },

  {
    id: "snippets-callout-question",
    name: "Callout: question (FAQ item)",
    category: "snippets",
    description: "FAQ-style Q/A in a scannable admonition.",
    tags: ["callout","faq","help"],
    content: `> [!QUESTION]
> [One-line lead for the question block, audience-specific.]
>
> - **Context:** [when this applies, or *skip if obvious*]
> - **Detail:** [2–3 sentences or a mini-table if comparing options.]
>
> | Option | Pro | Con |
> | --- | --- | --- |
> | A | […] | […] |
>
> **Action:** [what reader should do next, or *none* if FYI only.]
>
> *References: [doc §], [ADR-#], [runbook] — PII/secret-free in public repos.* |`,
  },

  {
    id: "snippets-callout-todo",
    name: "Callout: todo (authoring)",
    category: "snippets",
    description: "Visible TODOs for open docs tasks.",
    tags: ["callout","todo","authoring"],
    content: `> [!TODO]
> [One-line lead for the todo block, audience-specific.]
>
> - **Context:** [when this applies, or *skip if obvious*]
> - **Detail:** [2–3 sentences or a mini-table if comparing options.]
>
> | Option | Pro | Con |
> | --- | --- | --- |
> | A | […] | […] |
>
> **Action:** [what reader should do next, or *none* if FYI only.]
>
> *References: [doc §], [ADR-#], [runbook] — PII/secret-free in public repos.* |`,
  },

  {
    id: "snippets-callout-deprecated",
    name: "Callout: deprecated",
    category: "snippets",
    description: "Deprecations with replacement pointers.",
    tags: ["callout","deprecation","docs"],
    content: `> [!DEPRECATED]
> [One-line lead for the deprecated block, audience-specific.]
>
> - **Context:** [when this applies, or *skip if obvious*]
> - **Detail:** [2–3 sentences or a mini-table if comparing options.]
>
> | Option | Pro | Con |
> | --- | --- | --- |
> | A | […] | […] |
>
> **Action:** [what reader should do next, or *none* if FYI only.]
>
> *References: [doc §], [ADR-#], [runbook] — PII/secret-free in public repos.* |`,
  },

  {
    id: "snippets-badge-build-status",
    name: "Badge: build status",
    category: "snippets",
    description: "Shields-style CI / build table row pattern.",
    tags: ["badge","ci","readme"],
    content: `<!-- Shields.io style; update URLs to your org’s live endpoints. Place badges in one row under the title. -->

[![Build](https://img.shields.io/badge/build-passing-brightgreen?style=flat-square)](https://example.com/build-status)  

Badges in this project typically link to: CI dashboard, package registry, license file, and release page.

| Badge | Resolves to | When to show |
| --- | --- | --- |
| Build | [CI pipeline URL] | On every public repo with CI |
| Coverage | [Codecov/cover URL] | When tests exist and you publish % |

Accessibility: do **not** convey status by color **alone**; repeat status in the adjacent \`alt\` and link text for screen-reader users.

*Replace \`example.com\` with real \`openapi.example.com/health\` or your CI’s badge endpoint where applicable.* |`,
  },

  {
    id: "snippets-badge-coverage",
    name: "Badge: test coverage",
    category: "snippets",
    description: "Coverage percent badge and policy note.",
    tags: ["badge","coverage","qa"],
    content: `<!-- Shields.io style; update URLs to your org’s live endpoints. Place badges in one row under the title. -->

[![Coverage](https://img.shields.io/badge/coverage-80%25-green?style=flat-square)](https://example.com/coverage)  

Badges in this project typically link to: CI dashboard, package registry, license file, and release page.

| Badge | Resolves to | When to show |
| --- | --- | --- |
| Build | [CI pipeline URL] | On every public repo with CI |
| Coverage | [Codecov/cover URL] | When tests exist and you publish % |

Accessibility: do **not** convey status by color **alone**; repeat status in the adjacent \`alt\` and link text for screen-reader users.

*Replace \`example.com\` with real \`openapi.example.com/health\` or your CI’s badge endpoint where applicable.* |`,
  },

  {
    id: "snippets-badge-license",
    name: "Badge: license (SPDX)",
    category: "snippets",
    description: "License summary badge in README header.",
    tags: ["badge","license","readme"],
    content: `<!-- Shields.io style; update URLs to your org’s live endpoints. Place badges in one row under the title. -->

[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://example.com/license)  

Badges in this project typically link to: CI dashboard, package registry, license file, and release page.

| Badge | Resolves to | When to show |
| --- | --- | --- |
| Build | [CI pipeline URL] | On every public repo with CI |
| Coverage | [Codecov/cover URL] | When tests exist and you publish % |

Accessibility: do **not** convey status by color **alone**; repeat status in the adjacent \`alt\` and link text for screen-reader users.

*Replace \`example.com\` with real \`openapi.example.com/health\` or your CI’s badge endpoint where applicable.* |`,
  },

  {
    id: "snippets-badge-version",
    name: "Badge: version / semver",
    category: "snippets",
    description: "Release or package version line.",
    tags: ["badge","version","release"],
    content: `<!-- Shields.io style; update URLs to your org’s live endpoints. Place badges in one row under the title. -->

[![Version](https://img.shields.io/badge/version-1.0.0-blue?style=flat-square)](https://example.com/version)  

Badges in this project typically link to: CI dashboard, package registry, license file, and release page.

| Badge | Resolves to | When to show |
| --- | --- | --- |
| Build | [CI pipeline URL] | On every public repo with CI |
| Coverage | [Codecov/cover URL] | When tests exist and you publish % |

Accessibility: do **not** convey status by color **alone**; repeat status in the adjacent \`alt\` and link text for screen-reader users.

*Replace \`example.com\` with real \`openapi.example.com/health\` or your CI’s badge endpoint where applicable.* |`,
  },

  {
    id: "snippets-badge-downloads",
    name: "Badge: downloads",
    category: "snippets",
    description: "Generic download or pull counter badge scaffod.",
    tags: ["badge","downloads","package"],
    content: `<!-- Shields.io style; update URLs to your org’s live endpoints. Place badges in one row under the title. -->

[![Downloads](https://img.shields.io/badge/downloads-1.2M-green?style=flat-square)](https://example.com/downloads)  

Badges in this project typically link to: CI dashboard, package registry, license file, and release page.

| Badge | Resolves to | When to show |
| --- | --- | --- |
| Build | [CI pipeline URL] | On every public repo with CI |
| Coverage | [Codecov/cover URL] | When tests exist and you publish % |

Accessibility: do **not** convey status by color **alone**; repeat status in the adjacent \`alt\` and link text for screen-reader users.

*Replace \`example.com\` with real \`openapi.example.com/health\` or your CI’s badge endpoint where applicable.* |`,
  },

  {
    id: "snippets-badge-npm",
    name: "Badge: npm",
    category: "snippets",
    description: "Package registry / npm line.",
    tags: ["badge","npm","js"],
    content: `<!-- Shields.io style; update URLs to your org’s live endpoints. Place badges in one row under the title. -->

[![npm](https://img.shields.io/badge/npm-v1.0.0-blue?style=flat-square)](https://example.com/npm)  

Badges in this project typically link to: CI dashboard, package registry, license file, and release page.

| Badge | Resolves to | When to show |
| --- | --- | --- |
| Build | [CI pipeline URL] | On every public repo with CI |
| Coverage | [Codecov/cover URL] | When tests exist and you publish % |

Accessibility: do **not** convey status by color **alone**; repeat status in the adjacent \`alt\` and link text for screen-reader users.

*Replace \`example.com\` with real \`openapi.example.com/health\` or your CI’s badge endpoint where applicable.* |`,
  },

  {
    id: "snippets-badge-pypi",
    name: "Badge: PyPI",
    category: "snippets",
    description: "Package registry / PyPI line.",
    tags: ["badge","pypi","python"],
    content: `<!-- Shields.io style; update URLs to your org’s live endpoints. Place badges in one row under the title. -->

[![PyPI](https://img.shields.io/badge/pypi-v0.0.0-blue?style=flat-square)](https://example.com/pypi)  

Badges in this project typically link to: CI dashboard, package registry, license file, and release page.

| Badge | Resolves to | When to show |
| --- | --- | --- |
| Build | [CI pipeline URL] | On every public repo with CI |
| Coverage | [Codecov/cover URL] | When tests exist and you publish % |

Accessibility: do **not** convey status by color **alone**; repeat status in the adjacent \`alt\` and link text for screen-reader users.

*Replace \`example.com\` with real \`openapi.example.com/health\` or your CI’s badge endpoint where applicable.* |`,
  },

  {
    id: "snippets-badge-docker",
    name: "Badge: Docker",
    category: "snippets",
    description: "Container pulls or image reference pattern.",
    tags: ["badge","docker","ops"],
    content: `<!-- Shields.io style; update URLs to your org’s live endpoints. Place badges in one row under the title. -->

[![Docker](https://img.shields.io/badge/docker-pulls-10k-blue?style=flat-square)](https://example.com/docker)  

Badges in this project typically link to: CI dashboard, package registry, license file, and release page.

| Badge | Resolves to | When to show |
| --- | --- | --- |
| Build | [CI pipeline URL] | On every public repo with CI |
| Coverage | [Codecov/cover URL] | When tests exist and you publish % |

Accessibility: do **not** convey status by color **alone**; repeat status in the adjacent \`alt\` and link text for screen-reader users.

*Replace \`example.com\` with real \`openapi.example.com/health\` or your CI’s badge endpoint where applicable.* |`,
  },

  {
    id: "snippets-badge-contributors",
    name: "Badge: contributors",
    category: "snippets",
    description: "Contributor count and CoC / contribution pointer.",
    tags: ["badge","community","oss"],
    content: `<!-- Shields.io style; update URLs to your org’s live endpoints. Place badges in one row under the title. -->

[![Contributors](https://img.shields.io/badge/contributors-25-orange?style=flat-square)](https://example.com/contributors)  

Badges in this project typically link to: CI dashboard, package registry, license file, and release page.

| Badge | Resolves to | When to show |
| --- | --- | --- |
| Build | [CI pipeline URL] | On every public repo with CI |
| Coverage | [Codecov/cover URL] | When tests exist and you publish % |

Accessibility: do **not** convey status by color **alone**; repeat status in the adjacent \`alt\` and link text for screen-reader users.

*Replace \`example.com\` with real \`openapi.example.com/health\` or your CI’s badge endpoint where applicable.* |`,
  },

  {
    id: "snippets-badge-last-commit",
    name: "Badge: last commit",
    category: "snippets",
    description: "Staleness / recency of repo activity (replace URL).",
    tags: ["badge","activity","oss"],
    content: `<!-- Shields.io style; update URLs to your org’s live endpoints. Place badges in one row under the title. -->

[![Last commit](https://img.shields.io/badge/last%20commit-today-brightgreen?style=flat-square)](https://example.com/last-commit)  

Badges in this project typically link to: CI dashboard, package registry, license file, and release page.

| Badge | Resolves to | When to show |
| --- | --- | --- |
| Build | [CI pipeline URL] | On every public repo with CI |
| Coverage | [Codecov/cover URL] | When tests exist and you publish % |

Accessibility: do **not** convey status by color **alone**; repeat status in the adjacent \`alt\` and link text for screen-reader users.

*Replace \`example.com\` with real \`openapi.example.com/health\` or your CI’s badge endpoint where applicable.* |`,
  },

  {
    id: "snippets-badge-code-size",
    name: "Badge: code size",
    category: "snippets",
    description: "LoC/zip or bundle size (methodology in footnote).",
    tags: ["badge","size","oss"],
    content: `<!-- Shields.io style; update URLs to your org’s live endpoints. Place badges in one row under the title. -->

[![Code size](https://img.shields.io/badge/code%20size-1.2MB-blue?style=flat-square)](https://example.com/code-size)  

Badges in this project typically link to: CI dashboard, package registry, license file, and release page.

| Badge | Resolves to | When to show |
| --- | --- | --- |
| Build | [CI pipeline URL] | On every public repo with CI |
| Coverage | [Codecov/cover URL] | When tests exist and you publish % |

Accessibility: do **not** convey status by color **alone**; repeat status in the adjacent \`alt\` and link text for screen-reader users.

*Replace \`example.com\` with real \`openapi.example.com/health\` or your CI’s badge endpoint where applicable.* |`,
  },

  {
    id: "snippets-badge-dependencies",
    name: "Badge: dependencies",
    category: "snippets",
    description: "Dependency freshness / audit badge hook.",
    tags: ["badge","security","deps"],
    content: `<!-- Shields.io style; update URLs to your org’s live endpoints. Place badges in one row under the title. -->

[![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen?style=flat-square)](https://example.com/dependencies)  

Badges in this project typically link to: CI dashboard, package registry, license file, and release page.

| Badge | Resolves to | When to show |
| --- | --- | --- |
| Build | [CI pipeline URL] | On every public repo with CI |
| Coverage | [Codecov/cover URL] | When tests exist and you publish % |

Accessibility: do **not** convey status by color **alone**; repeat status in the adjacent \`alt\` and link text for screen-reader users.

*Replace \`example.com\` with real \`openapi.example.com/health\` or your CI’s badge endpoint where applicable.* |`,
  },

  {
    id: "snippets-badge-platform-support",
    name: "Badge: platform support",
    category: "snippets",
    description: "OS/Arch matrix in badge form.",
    tags: ["badge","platform","compat"],
    content: `<!-- Shields.io style; update URLs to your org’s live endpoints. Place badges in one row under the title. -->

[![Platform](https://img.shields.io/badge/platform-win%7Clin%7Cmac-lightgrey?style=flat-square)](https://example.com/platform-support)  

Badges in this project typically link to: CI dashboard, package registry, license file, and release page.

| Badge | Resolves to | When to show |
| --- | --- | --- |
| Build | [CI pipeline URL] | On every public repo with CI |
| Coverage | [Codecov/cover URL] | When tests exist and you publish % |

Accessibility: do **not** convey status by color **alone**; repeat status in the adjacent \`alt\` and link text for screen-reader users.

*Replace \`example.com\` with real \`openapi.example.com/health\` or your CI’s badge endpoint where applicable.* |`,
  },

  {
    id: "snippets-badge-stars",
    name: "Badge: stars",
    category: "snippets",
    description: "Git host stars and social proof note (optional).",
    tags: ["badge","stars","oss"],
    content: `<!-- Shields.io style; update URLs to your org’s live endpoints. Place badges in one row under the title. -->

[![Stars](https://img.shields.io/badge/stars-1.2k-blue?style=flat-square)](https://example.com/stars)  

Badges in this project typically link to: CI dashboard, package registry, license file, and release page.

| Badge | Resolves to | When to show |
| --- | --- | --- |
| Build | [CI pipeline URL] | On every public repo with CI |
| Coverage | [Codecov/cover URL] | When tests exist and you publish % |

Accessibility: do **not** convey status by color **alone**; repeat status in the adjacent \`alt\` and link text for screen-reader users.

*Replace \`example.com\` with real \`openapi.example.com/health\` or your CI’s badge endpoint where applicable.* |`,
  },

  {
    id: "snippets-badge-forks",
    name: "Badge: forks",
    category: "snippets",
    description: "Forks count and forking / governance note.",
    tags: ["badge","forks","oss"],
    content: `<!-- Shields.io style; update URLs to your org’s live endpoints. Place badges in one row under the title. -->

[![Forks](https://img.shields.io/badge/forks-200-blue?style=flat-square)](https://example.com/forks)  

Badges in this project typically link to: CI dashboard, package registry, license file, and release page.

| Badge | Resolves to | When to show |
| --- | --- | --- |
| Build | [CI pipeline URL] | On every public repo with CI |
| Coverage | [Codecov/cover URL] | When tests exist and you publish % |

Accessibility: do **not** convey status by color **alone**; repeat status in the adjacent \`alt\` and link text for screen-reader users.

*Replace \`example.com\` with real \`openapi.example.com/health\` or your CI’s badge endpoint where applicable.* |`,
  },

  {
    id: "snippets-license-mit",
    name: "License block: MIT",
    category: "snippets",
    description: "Standard MIT License text in Markdown.",
    tags: ["license","oss","mit"],
    content: `# The MIT License (MIT)

Copyright (c) [YEAR] [COPYRIGHT HOLDERS]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

Repository placement: add this as \`LICENSE\` in the repo root. Adjust \`[YEAR]\` and \`[HOLDERS]\` in the first line of the license text above.

`,
  },

  {
    id: "snippets-license-apache-2-0",
    name: "License block: Apache 2.0 (header + NOTICE)",
    category: "snippets",
    description: "Apache-2.0 short block with NOTICE template.",
    tags: ["license","oss","apache"],
    content: `# Apache License, Version 2.0 (summary block for \`NOTICE\`)

_Full text: https://www.apache.org/licenses/LICENSE-2.0 — replace bracketed project lines below._

Copyright [yyyy] [name of copyright owner]

Licensed under the Apache License, Version 2.0 (the “License”); you may not use this file except in compliance with the License. You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an “AS IS” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

## NOTICE file template (append to \`NOTICE\`)

[Project name]  
Copyright [yyyy] [holder]  
This product includes software developed at [The Apache Software Foundation / …].  

[List third-party notices per dependency SPDX ids in your SBOM export.]  

`,
  },

  {
    id: "snippets-license-gpl-3-0",
    name: "License block: GPL v3 (summary)",
    category: "snippets",
    description: "GPL-3.0 key paragraphs with counsel disclaimer.",
    tags: ["license","oss","gpl"],
    content: `# GNU General Public License v3 — excerpt for README

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but **without any warranty**; without even the implied warranty of **merchantability** or **fitness for a particular purpose**. See the GNU General Public License for more details: https://www.gnu.org/licenses/gpl-3.0.html

You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.

## If you link / combine: consult counsel
GPLv3’s **copyleft** may affect how you distribute combined works. [Your legal team] should review static vs dynamic linking and SaaS use cases. **This block is not legal advice.** |

## For source offer (GPL §6): add your physical or network offer here
- **Source offer valid for** [3 years] from distribution; **contact** [email] for source tarball / repo URL |

`,
  },

  {
    id: "snippets-license-bsd-2-clause",
    name: "License block: BSD 2-clause",
    category: "snippets",
    description: "Two-clause BSD for small libraries.",
    tags: ["license","oss","bsd"],
    content: `BSD 2-Clause License (simplified; verify full text for your org)

Copyright (c) [YEAR], [OWNER]. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.  
2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” […] **(See full 2-clause text in your LICENSE file).**  

---  

Use in headers of small libraries; pair with a **root \`LICENSE\` file** and **SPDX: BSD-2-Clause** in \`package.json\` / \`pyproject.toml\` if applicable.  

`,
  },

  {
    id: "snippets-license-bsd-3-clause",
    name: "License block: BSD 3-clause",
    category: "snippets",
    description: "Three-clause BSD with no-endorsement line.",
    tags: ["license","oss","bsd"],
    content: `BSD 3-Clause License (header block; include full text in \`LICENSE\` file)

Copyright (c) [YEAR], [OWNER].  
All rights reserved.  

Redistribution and use in source and binary forms, with or without modification, are permitted provided that: (1) source retains copyright & disclaimer; (2) binary **reproduces** them; (3) **neither the name of [OWNER] nor its contributors** may be used to endorse or promote without permission.

DISCLAIMER OF WARRANTY & LIMITATION OF LIABILITY: **See full 3-clause text.**

SPDX: \`BSD-3-Clause\`  

## Third-party: ensure NOTICE aggregation if you redistribute bundles  
- List components with BSD-3 and **include** their **copyright** lines in **one** \`THIRD_PARTY_NOTICES\` file.  
- **Link** to **SBOM** JSON in your release assets.  

`,
  },

  {
    id: "snippets-license-isc",
    name: "License block: ISC",
    category: "snippets",
    description: "ISC License full text, common for small npm packages.",
    tags: ["license","oss","isc"],
    content: `ISC License

Copyright (c) [YEAR], [COPYRIGHT HOLDERS]

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED “AS IS” AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

— Permissive, common for small **npm** packages. **Pair** with a **root \`LICENSE\`** and **file-level** **headers** in **entry** files only if your policy **requires** it.  

`,
  },

  {
    id: "snippets-license-mpl-2-0",
    name: "License block: MPL 2.0",
    category: "snippets",
    description: "MPL-2.0 per-file notice and counsel notes.",
    tags: ["license","oss","mozilla"],
    content: `Mozilla Public License 2.0 (short notice for a **single** covered file; full MPL in \`LICENSE\`.)

This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.

## If you **modify** MPL’d files: **Exhibit A**-style notice per MPL §3.3 as needed (your counsel).  
- **Larger** works may **combine** MPL and proprietary under **MPL**’s **file-level** **copyleft**; **separate** **proprietary** files in **other** **directories** as **per** **MPL** **FAQ** **high-level** **(not** **advice** **—** **lawyer**).  

## For binaries:  
- **Offer** **source** as **MPL** **§** **3.2** when **you** **distribute** **binaries** **(details** in **MPL** **text**).  

`,
  },

  {
    id: "snippets-license-cc-by-4-0",
    name: "License block: CC BY 4.0 (content)",
    category: "snippets",
    description: "Human-readable + attribution line for open content.",
    tags: ["license","content","cc"],
    content: `Creative Commons Attribution 4.0 International (CC BY 4.0) — **human-readable** **summary** (not a substitute for the **legal** text).

**You are free to:**  
- **Share** — copy and redistribute the material in any medium or format  
- **Adapt** — remix, transform, and build upon the material for any purpose, even **commercially**  

Under the following terms:  
- **Attribution** — You must give **appropriate credit**, provide a **link to the license**, and indicate if **changes** were made.  

Full license: https://creativecommons.org/licenses/by/4.0/legalcode  

## Suggested **attribution** line for **docs** / **README**:  
“[Title]” by [Author] is licensed under **CC BY 4.0** · [link to original]  

`,
  },

  {
    id: "snippets-license-cc-by-sa-4-0",
    name: "License block: CC BY-SA 4.0 (content)",
    category: "snippets",
    description: "ShareAlike for creative works (not a software license by default).",
    tags: ["license","content","cc"],
    content: `Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0) — **notice** (not legal advice).  

Same as **CC BY**, plus: **If you remix, transform, or build upon the material,** you must **distribute your contributions under the same license** as the original (ShareAlike).  

Full text: https://creativecommons.org/licenses/by-sa/4.0/legalcode  

## Implications for **code**  
- **CC** licenses are **rarely** used for **software**; **often** for **content**. **For** code, **prefer** **OSI-approved** licenses. **This** **block** is for **prose, curriculum, and images.**  

## Attribution  
- **TASL**: Title, Author, Source, License — **in** a **caption** or **README** **section**.  

`,
  },

  {
    id: "snippets-license-unlicense",
    name: "License block: The Unlicense",
    category: "snippets",
    description: "Public domain dedication text.",
    tags: ["license","oss","unlicense"],
    content: `The Unlicense  

This is free and unencumbered software released into the public domain.  

Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.  

For more information, please refer to <https://unlicense.org>  

— Use **only** when **all** **contributors** **agree**; **and** you’ve **cleared** **non-code** **assets** with **separate** **licenses** if **any** **(fonts,** **data,** **icons).  

`,
  },

  {
    id: "snippets-license-wtfpl",
    name: "License block: WTFPL (not work-safe name)",
    category: "snippets",
    description: "Polymorphic permissive; OSPO/ counsel review advised.",
    tags: ["license","oss","humor"],
    content: `        DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE  
                    Version 2, December 2004  

 Copyright (C) [YEAR] [name]  

 Everyone is permitted to copy and distribute verbatim or modified copies of this license document.  

            DO WHAT THE FUCK YOU WANT TO.  

— **Provocative** **name**; **corporate** **repos** **often** **prefer** **MIT/Apache** **for** **policy** **reasons.** **This** is **a** **real** **license** **text,** not **a** **placeholder**, but **get** **approval** from **OSPO**.  

`,
  },

  {
    id: "snippets-license-proprietary",
    name: "License block: proprietary (all rights reserved)",
    category: "snippets",
    description: "Tight internal / commercial “no use without agreement” block.",
    tags: ["license","proprietary","ip"],
    content: `PROPRIETARY — ALL RIGHTS RESERVED  

Copyright (c) [YEAR] [ENTITY].  
Unauthorized copying, **distribution**, **modification,** **or** **use** of this software, **in** **whole** or **in** **part,** is **strictly** **prohibited** **except** **as** **expressly** **permitted** **in** **a** **separate** **written** **agreement** **between** you and [ENTITY].  

If you did **not** receive a **signed** **license,** you **may** **not** **possess,** **compile,** **or** **run** **this** **code.**  

## Internal distribution  
- **Nexus/Artifactory** with **per-user** **license** **attestation**; **log** access in **[SIEM]**; **DLP** on **exfil**.  
- **For** **customers:** **EULA** **in** **contract** **§** [x] supersedes **this** **header** in **any** **conflict** **(counsel** **review**).  

`,
  },

  {
    id: "snippets-toc-autogen-note",
    name: "TOC: auto-generated (note for authors)",
    category: "snippets",
    description: "Explains to rely on SSG/anchors vs hand TOC.",
    tags: ["toc","docs","ssg"],
    content: `<!-- If your SSG/ doc tool auto-builds a TOC, keep this as a one-line note for authors. -->  

*(Table of contents is **auto-generated** from headings by [tool] on build. **Do** **not** **hand-edit** the **numbered** list **below** **in** the **source**; **or** set \`toc: false\` in front matter if the **tool** **supports** it.)*  

Preview (local only):  
- Run \`npm run docs:build\` (or your equivalent) to **verify** **anchor** **links** **match** **slug** **rules** (GitHub, GitLab, Docusaurus differ).  
- **H2** and **H3** **depth** is **[2]** in \`config\` — **bump** if **API** **ref** is **long**.  
- **a11y:** ensure **landmarks** and **“skip to content”** **still** work **with** a **long** **TOC** nav.  

`,
  },

  {
    id: "snippets-toc-manual-simple",
    name: "TOC: manual (simple list)",
    category: "snippets",
    description: "Short anchor list and slug reminder.",
    tags: ["toc","docs","anchors"],
    content: `## Table of contents  
- [Section A — short](#section-a--short)  
- [Section B — details](#section-b--details)  
- [Section C — references](#section-c--references)  

*(Anchor slugs: **lowercase**, **hyphens**; **re-check** if **titles** **change**.)*  

Optional one-liner under each in **some** org styles (keep **tight** for **print**):  
- **A:** *Setup and prerequisites*  
- **B:** *Step-by-step*  
- **C:** *Further reading*  

Version control: after **editing** **headings**, run **link** **check** in **CI** to **catch** **404** **anchors** **on** \`main\`.  

`,
  },

  {
    id: "snippets-toc-manual-detailed",
    name: "TOC: manual (numbered, deep)",
    category: "snippets",
    description: "Numbered top-levels with subordinate nesting.",
    tags: ["toc","docs","book"],
    content: `## Table of contents (full)  
1. [Introduction](#1-introduction)  
2. [Architecture](#2-architecture)  
   1. [Subcomponent X](#21-subcomponent-x)  
   2. [Subcomponent Y](#22-subcomponent-y)  
3. [API](#3-api)  
4. [Operations](#4-operations)  
5. [Security](#5-security)  
6. [Changelog & roadmap](#6-changelog--roadmap)  

> **Numbered** TOCs: **re-number** in **one** pass when **adding** a **new** **H2** **to** **avoid** **drift** with **stale** **numbers** in **PDF** **exports** **(some** **tools** **re-number** **automatically** **in** **print**).  

Cross-document: link to **[other-doc.md#anchor]** for **tight** **coupling**; **prefer** **relative** paths in **repos** **(portable** **forks).  

`,
  },

  {
    id: "snippets-toc-multilevel",
    name: "TOC: multilevel (nested bullets)",
    category: "snippets",
    description: "Deep nested bullet outline for dense docs (web-only).",
    tags: ["toc","outline","longform"],
    content: `<!-- Use when deep nesting is unavoidable; consider splitting into multiple files instead. -->  

- **Root**  
  - **Branch A**  
    - Leaf A1  
    - Leaf A2  
  - **Branch B**  
    - Leaf B1  

Markdown: align **indent** with **list** **markers** only as **per** your **linter** (CommonMark, MDX).  

If you **exceed** **4** **levels,** add **a** **separate** **“See** also”** for **jumps** **to** **appendices** **to** **reduce** **cognitive** **load** **(Nielsen** **heuristic** on **scannability**).  

Screen readers: **use** real **headings** **for** **sections**; **do** **not** **fake** **hierarchy** with **bold** **alone** **(WCAG** **2.4**).  

`,
  },

  {
    id: "snippets-toc-with-icons",
    name: "TOC: with icons/emoji in links",
    category: "snippets",
    description: "Optional emoji markers with a11y cautions for landings.",
    tags: ["toc","ux","markdown"],
    content: `## Contents  
- :rocket: [Quick start](#quick-start)  
- :gear: [Configuration](#configuration)  
- :lock: [Security notes](#security-notes)  
- :books: [Further reading](#further-reading)  

*Emoji/ icons are **decorative** in **many** UIs: repeat **the** **section** **name** in the **link** text **(already** **done** **here)**. **In** some **jurisdictions,** **emoji** in **formal** **docs** is **not** used — **remove** in **\`legal/\`** **trees.*  

Favicon / icon set: align with **Open** **Graph** / **PWA** **manifest** in **[site] ** (see \`/public\`).  

Print CSS: add \`@media print { .icon { display: none; } }\` if you **export** to **PDF** **(optional).  

`,
  },

  {
    id: "snippets-nav-breadcrumb",
    name: "Navigation: breadcrumb (wire + SEO)",
    category: "snippets",
    description: "Text breadcrumb and optional JSON-LD note.",
    tags: ["nav","breadcrumb","ux"],
    content: `<!-- Breadcrumb: keep microdata for SEO; adjust base URL. -->  

[Home](/) &rsaquo; [Docs](/docs) &rsaquo; [API](/docs/api) &rsaquo; **This page**  

Schema.org \`BreadcrumbList\` JSON-LD (optional) — inject per **SSG** **plugin** with **abs** **URLs** in **prod**.  

Analytics: **fire** **breadcrumb** **depth** as **a** **dimension** in **[GA/Amplitude]** to **see** **content** **findability** **issues** **(exit** on **page** 3+ **in** path).  

Mobile: consider **&lt;** back **+** current **title** in **one** **row** if **horizontal** **space** is **tight** **(hamburger** for **siblings**).  

`,
  },

  {
    id: "snippets-nav-sidebar",
    name: "Navigation: sidebar (docs IA)",
    category: "snippets",
    description: "Two-level left nav and keyboard/ARIA notes.",
    tags: ["nav","sidebar","docs"],
    content: `<!-- Collapsible left nav: typical for docs sites. -->  

- **Getting started**  
  - [Install](/install)  
  - [Tutorials](/tutorials)  
- **Reference**  
  - [HTTP API](/ref/http)  
  - [Webhooks](/ref/webhooks)  
- **Support**  
  - [Status](https://status.example.com)  

Keyboard: \`Tab\` order **skips** **closed** **subtrees;** \`Enter\` / \`Space\` **toggles** **expand** (see **WAI-ARIA** \`aria-expanded\` on **parent** **buttons**).  

State: **persist** open **ids** in **localStorage** **as** \`nav.state.v1\` (optional) **if** your **SSG** **doesn’t** do **it**.  

`,
  },

  {
    id: "snippets-nav-top",
    name: "Navigation: top bar (4–6 items)",
    category: "snippets",
    description: "Primary nav as a wire; narrow vs wide IA.",
    tags: ["nav","header","ux"],
    content: `<!-- Top bar: 4-6 top-levels max; rest in 'More' -->  

| [Product] | [Solutions] | [Pricing] | [Resources] | [Sign in] |  
| --- | --- | --- | --- | --- |  
*(Use real \`<nav>\` in HTML; this table is a **wire** for writers.)*  

Sticky: \`position: sticky; top:0;\` with **z-index** over **content**; **add** \`scroll-padding-top\` to **:target\` **for** **deep** **links** **(UX** for **#anchors).  

i18n: **separate** **URL** per **locale** with **\`hreflang\` ** **pairs**; **don’t** **concat** in **a** **single** **row** in **this** **wire** **(split** in **app**).  

`,
  },

  {
    id: "snippets-nav-prev-next",
    name: "Navigation: previous / next in series",
    category: "snippets",
    description: "Linear doc set navigation with empty-state ideas.",
    tags: ["nav","pagination","docs"],
    content: `<!-- Prev/next: keep at end of every doc; fill via template. -->  

[&larr; Previous: [Config profiles]](./prev.md)  ·  [Next: [Error codes] &rarr;](./next.md)  

Metadata: if **a** page is **the** **first** in **a** **set,** **hide** **prev**; **on** last, **suggest** **related** **reading** in **a** **callout** **(next** is **n/a).  

Analytics: **log** \`doc.prev_next\` **clicks** to **tune** **order** in **the** **sidebar** (data-driven **IA**).  

PDF export: use **“Continued** **on** **p.** **N”** in **print** **styles** on **splits.  

`,
  },

  {
    id: "snippets-nav-quick-links",
    name: "Navigation: quick links (on-call / status)",
    category: "snippets",
    description: "Short crisis / quick links for internal comms footers.",
    tags: ["nav","links","sre"],
    content: `## Quick links  
- **Run in 5 min:** [Quick start](./quickstart.md)  
- **Status / incidents:** [status.example.com](https://status.example.com)  
- **Slack: #**\`[channel-name]\`  
- **File a security issue:** [security policy](.github/SECURITY.md)  

Intended for **on-call**; **for** **customer-facing** **pages,** use **a** **single** \`Contact\` CTA.  

Rotate: **if** a **link** is **stale,** your **linter** should **open** a **“docs** **rot**” **ticket** **on** \`main\` (optional **CI**).  

`,
  },

  {
    id: "snippets-nav-back-to-top",
    name: "Navigation: back to top (a11y)",
    category: "snippets",
    description: "Sticky or inline control with `prefers-reduced-motion`.",
    tags: ["nav","a11y","ux"],
    content: `<!-- Sticky 'Back to top' button: wire as component in your design system. -->  

[&uarr; Back to top](#)  *(anchor \`#\` to page top, or \`document.querySelector\` scrollTo)*  

A11y: \`aria-label='Back to top'\` on the **control**; **visible** after **~400px** **scroll** with **reduced** **motion** **respecting** \`prefers-reduced-motion: reduce\` **(instant** **jump** or **fade**).  

Mobile: **place** in **lower** **right** to **not** **collide** with **OS** **gesture** **areas**; **z-index** < **modals** but **> ** **fab** of **competing** app.  

Analytics: **low** value **as** a **KPI,** but **if** used **a** lot, **it** may **indicate** **over-long** **pages** (split **the** **doc).  

`,
  },

  {
    id: "snippets-card-profile",
    name: "Card: profile (team)",
    category: "snippets",
    description: "Photo + bio for org pages (PII/brand cautions).",
    tags: ["card","team","profile"],
    content: `<div class="card" markdown="0">  
  <img src="[avatar url]" alt="[name]" width="96" height="96"/>  
  <h3>[Full name] <small>[Pronouns]</small></h3>  
  <p class="title">[Title] &middot; [Team] &middot; [Location / TZ]</p>  
  <p>[1–2 sentence bio; avoid secrets and internal-only project code names in public sites.]</p>  
  <p><a href="mailto:[email]">Email</a> &middot; <a href="[calendar]">Book time</a></p>  
</div>  

Plain-Markdown alternative (if HTML disallowed in your renderer):  

| | |  
| --- | --- |  
| ![photo 96x96]([url]) | ** [Name] **  

Accessibility: **color** **contrast** on **links**; **no** **decorative** text **in** \`alt\` on **face** (use \`alt="Photo of [name]"\` or empty if adjacent **name** is **sufficient** per your **a11y** spec).  

`,
  },

  {
    id: "snippets-card-feature",
    name: "Card: feature (landing)",
    category: "snippets",
    description: "Feature blurb with table of proof/ICP/CTA.",
    tags: ["card","product","landing"],
    content: `## [Feature name]  

![illustration or screenshot]([url] "[alt text]")  

[2–3 sentences on **problem → outcome → proof**; link to a **demo** or **video** and **a** **metric** if you have **permission** to **publish** it.]  

| | |  
| --- | --- |  
| **For** | [ICP, segment] |  
| **Key capability** | [1 line] |  

CTA: [Try it / Contact sales] — **always** have **a** **secondary** (docs) in **B2B** to **satisfy** **self-serve** **readers.  

`,
  },

  {
    id: "snippets-card-pricing",
    name: "Card: pricing (plan blurb)",
    category: "snippets",
    description: "3-plan sketched stack with legal note on public pricing pages.",
    tags: ["card","pricing","smb"],
    content: `### [Plan: Starter]  
- **$[0] / [mo]** · **[n] users** included  
- **Key limits:** [API calls, storage, …]  
- **Support:** [email / chat]  
- **CTA:** [Start trial]  

*(Stack **3** such **H3s** in **a** **row** in **HTML** for **grids,** or **use** a **table** in **md** for **a11y** when **comparing** **3+** **plans;** your **design** system **wins** **over** **this** **sketch**.)*  

Legal: **price** is **ex-**[tax] **in** [region]; **link** to **full** **T&Cs** and **DPA** if **B2B** on **a** **public** page.  

`,
  },

  {
    id: "snippets-card-testimonial",
    name: "Card: testimonial (customer quote)",
    category: "snippets",
    description: "Quote, attribution, and approval/compliance footers.",
    tags: ["card","social","b2b"],
    content: `> “[2–3 sentence customer quote, specific and measurable if possible, approved by the customer in writing per your comms policy.]”  
>  
> — **[Name],** [title], [Company]  
>  
> *([Industry] &middot; [Region] &middot; [optional: logo in footer with permission] )*  

Below the **quote,** a **1-line** **summary** in **product**’s **voice: **[what** **changed** for** them]**.  

If you **use** a **headshot,** it **lives** in **/static/customers/…** and **DPIA** is **captured** in **[CRM]** **on** **consent** **to** **republish**.  

Internal-only redlines: **no** **forward-looking** **revenue** **claims** **unless** **Finance** and **legal** sign (SEC / marketing rules may apply).  

`,
  },

  {
    id: "snippets-card-stat",
    name: "Card: stat (KPI tile)",
    category: "snippets",
    description: "Single metric + methodology footnote to avoid overclaiming.",
    tags: ["card","kpi","marketing"],
    content: `<!-- KPI / stat “card” for marketing landings -->  

| ** [42%] ** |  
| reduction in P95 API latency for [segment] in [Q]  

Footnote: *Source: [internal benchmark id], methodology in [link]. Not a **guarantee** of your results. Past performance ≠ future.*  

If the **number** is **%** of **a** **survey** of **N=[n]**, add **a** **methodology** **pop-over** in **app**; **in** static **md,** a **“see** **method**”** link.  

Brand: use **one** **num** typeface **and** **spacing** in **Figma** **tokens,** not **ad** **hoc** **bold.  

`,
  },

  {
    id: "snippets-card-team",
    name: "Card: team member (headshot+role)",
    category: "snippets",
    description: "Grid item scaffod with `loading=lazy` note.",
    tags: ["card","team","dei"],
    content: `### [Name]  
![headshot 128]([url] "[Name]")  
- **Role:** [e.g. Principal Engineer, Platform]  
- **Focus:** [1 line]  
- **Before [co]:** [1 line, non-confidential]  

Grid: 3-4 per row on **desktop,** 1-2 on **mobile;** \`loading="lazy"\` on **off-screen** **images.  

Diversity: **if** you **use** a **narrative** on **D&I,** it **lives** at **/about**; **on** the **grid,** **let** **bios** stand **(avoid** **tokenism** in **templated** **copy;** **get** **HR/Comms** **review**).  

`,
  },

  {
    id: "snippets-collapsible-faq-accordion",
    name: "Collapsible: FAQ (details/summary stack)",
    category: "snippets",
    description: "`<details>` stack with analytics/ARIA notes.",
    tags: ["collapsible","faq","html"],
    content: `## FAQ  

<details>  
<summary><strong> [Question 1, imperative or question form] </strong></summary>  

[Answer, 1–3 short paragraphs, link to [doc]. If legal-sensitive, add *not legal advice.*]  

</details>  

<details>  
<summary><strong> [Question 2] </strong></summary>  
[Answer]  
</details>  

Analytics: on **<summary> **clicks,** **or** GTM on **\`details[toggle] \`** in **a** **static** page **(privacy**-reviewed).  

Accessibility: \`summary\` is **inherently** **focusable;** test **in** **Safari,** which **used** to **have** **quirks;** if **some** UIs **can’t** **use** **\`<details>\`,** **swap** in **WAI-ARIA** \`accordion\` **pattern** (design **system**).  

`,
  },

  {
    id: "snippets-collapsible-details",
    name: "Collapsible: long supplemental (default-open)",
    category: "snippets",
    description: "Optional default-open for critical supplements.",
    tags: ["collapsible","appendix","ux"],
    content: `<details open>  
<summary><strong> [Optional default-open title] </strong></summary>  

Longer **supplemental** content that can **bloat** the **main** read path: **e.g.** long **bash** one-liner **or** full **\`curl\`**.  

</details>  

Print CSS: you may \`details { display: block; }\` and **force** **open** in **\`@media print\`**.  

Security: do **not** **embed** **HTML** or **iframed** **untrusted** **user** **content** **inside** **\`<details> \`** in **WYSIWYGs** (XSS) — **use** a **strict** **CSP** and **a** **sanitizer**.  

`,
  },

  {
    id: "snippets-collapsible-nested",
    name: "Collapsible: nested (two levels)",
    category: "snippets",
    description: "Nested details with mobile-UX and anti-XSS note.",
    tags: ["collapsible","nested","html"],
    content: `<details>  
<summary> [Parent topic] </summary>  
  <details>  
  <summary> [Child topic] </summary>  
  [Body for child. Nesting 3+ levels hurts mobile UX — prefer separate pages for deep content.]  
  </details>  
</details>  

Screen readers: **test** with **VO/NVDA**; **some** **themes** add **arrows** **via** **CSS;** \`summary\` should **not** be **a** \`div\` (invalid).  

Docs IA: if **nesting** **repeats** on **10+** **pages,** you **likely** need **a** **left** **nav** and **a** **split** into **a** **section** in **/docs**.  

`,
  },

  {
    id: "snippets-collapsible-spoiler",
    name: "Collapsible: spoiler (hidden reveal)",
    category: "snippets",
    description: "Spoiler details with moderation / a11y caveats.",
    tags: ["collapsible","spoiler","community"],
    content: `Spoiler for **[Show / book / product detail];** skip if you **avoid** **spoilers** in your **community** **rules.  

<details>  
<summary> Spoiler: click to reveal </summary>  
  
The [twist] is that [x]. The [character]’s [arc] is foreshadowed in [episode/chapter] when [y].  
  
Moderation: **in** public **forums,** use **a** \`spoiler\` **tag** per **board** **rules;** in **prose,** a **\`details\` **is **often** **enough** **(Stack** **Exchange**-style) **+** a **red** **“spoiler** **warning”** in **the** **line** before **(UX).  
  
Accessibility: the **reveal** should **be** **keyboard**-reachable; **if** the **spoil** is **a** **big** **image,** add **\`alt\` **that** **doesn’t** **leak** **until** open **(hard**; **then** use **a** **placeholder** and **JS**; **rare** in **static** \`md\` **pipelines).  
  
</details>  
  
`,
  },

  {
    id: "legal-compliance-privacy-policy-website",
    name: "Privacy policy (website, public)",
    category: "legal-compliance",
    description: "Public marketing site–style policy scaffod.",
    tags: ["privacy","web","gdpr"],
    content: `# Privacy policy — [Website, public] — v[X]

**Controller / brand:** [Entity, address] · **Contact:** [privacy@] (and [DPO@] in EU) · **Effective:** [date] |

## 1) Scope: what this covers  
- Domains, subsites, and embedded iframes listed in **[Annex A]**.  
- This policy does **not** govern [mobile app] / [B2B admin console] — see **[separate]**.  

## 2) Data we process and why  
| Data | How | Purposes (lawful basis) | Retention (max) |  
| --- | --- | --- | --- |  
| [Contact, form, support content] | [you, email] | [respond; contract/leg. interest] | [duration] |  
| [Cookies, IP, device, logs] | [auto] | [site op., analytics, security] | [see § cookies] |  

## 3) Cookies, pixels, and similar  
- Necessary, preferences, statistics, and marketing: details in our **[Cookie policy]** with opt-out and **[GPC / CPRA “Do Not Sell/Share”]** as applicable.  

## 4) Recipients and cross-border  
- [Hosting, support, email, analytics, ads] in **[sub-processor] **; international transfers on **[SCC/ IDTA/ UK addendum/ local adequacy] **.  

## 5) Your rights; complaints  
- EEA/UK/CH: [access, erasure, …]; lodge with [SA@]. U.S. state rights and **[link to opt out]** as listed in **[U.S. addendum]**.  
- We do not **[sell]** personal information / or only as stated with **[opt]**. Children: **[COPPA / age gate policy]**.  

## 6) Security; changes; contact  
- [TLS, access control, vendor reviews] at **[Security policy] **. Material updates: **[in-app, email, banner, 30d] **. Questions: [privacy@].  `,
  },

  {
    id: "legal-compliance-privacy-policy-app",
    name: "Privacy policy (app)",
    category: "legal-compliance",
    description: "Mobile/desktop app + permissions + store policies.",
    tags: ["privacy","app","mobile"],
    content: `# Privacy policy — [App: iOS / Android / desktop]

**App name / bundle / package id:** [ids] · **Controller (often):** [Entity] · **v[X] · [date] **|

## 1) Device data, permissions, and local storage  
- Permission prompts must match the actual use: [camera, mic, notifs, storage, location if any].  
- On-device data retained until [uninstall / n days] unless synced to [cloud account]. Encryption: [at rest, class].  

## 2) Account, usage, and diagnostics  
| Data | When | Your controls |  
| --- | --- | --- |  
| [account id, email, org] | [sign-up, SSO] | [settings path] |  
| [crash/perf, if on] | [if enabled] | [toggle in v X.Y] |  

## 3) In-app comms, ads, and third-party SDKs  
- [SDK] table: name, purpose, data, policy URL — in **[in-app / web legal center] **; [ATT/GAID] for ads: [LIA or consent, region].  

## 4) Rights, uninstall, and stores  
- [Download/export / delete] in [path] within [n] days. [Apple/Google] store terms for purchases may apply.  
- [HIPAA / COPPA / other] — only if in scope, add [BAA/ VPC] in **[DPA/ separate notice] **.  `,
  },

  {
    id: "legal-compliance-privacy-policy-saas",
    name: "Privacy (SaaS / B2B controller-processor split)",
    category: "legal-compliance",
    description: "High-level controller vs processor and DPA link.",
    tags: ["privacy","saas","b2b"],
    content: `# Privacy & roles — B2B SaaS (customer, admin, and end users)

**Vendor:** [name] | **DPA / SCC / UK/CH:** [link] | **DPO:** [e]  

## 1) Who is “controller” for what  
- [Customer] is typically **controller** for [employee/customer/ patient UGC] they upload. We act as **processor** under **[DPA/Art.28] ** for those, within **[order form] **.  
- [Vendor] is **controller** for [billing, account admin, NPS, security, optional product usage tied to [tenant] per **[privacy settings] **.  

## 2) Processor sub-processing and transfers  
- [Sub-processor] list in DPA; change notice [n] days; **RPA / TOMs / SCC+TIA** in **[DPA pack] **.  

## 3) End users in customer organizations  
- The **customer** provides **their** end-user **notice**; we assist on **[Art. 28(3)(e)]** **DSR** **routing** as in **[DPA] **.  

## 4) U.S. / global addenda  
- [CPRA/ VCDPA/ …] **B2B/ HR** and **B2B exception** as applicable; [state] **DPIA** for **[sensitive+ profiling] **.  `,
  },

  {
    id: "legal-compliance-gdpr-notice",
    name: "GDPR notice (Art. 13-14 type supplement)",
    category: "legal-compliance",
    description: "EEA+UK+CH addendum; not standalone advice.",
    tags: ["privacy","gdpr","eea"],
    content: `# GDPR — supplement (Art. 13-14) — [jurisdiction: EEA+UK+CH?]

**Controllers** (joint where noted): [list] | **DPO/ EU+UK** reps: [addresses, Art.27]  

## 1) Lawful basis register (excerpt)  
| Activity | Art.6 | Art.9 if any | Retention |  
| --- | --- | --- | --- |  
| [Newsletter] | [consent] | — | [until withdraw] |  

## 2) International transfers (Ch.5)  
- [SCC module / BCR/ adequacy] + **TIA** [id] and **[supplemental measures] ** in [doc].  

## 3) Rights & SA  
- [Art.15-22, **Art.77**] — **DPO** for **[Org] ** at [e]; **SAs** in **[DPA/ website] **.  `,
  },

  {
    id: "legal-compliance-ccpa-notice",
    name: "CCPA/CPRA notice at collection",
    category: "legal-compliance",
    description: "Categories table + sell/share/ SPI handling outline.",
    tags: ["privacy","ccpa","us"],
    content: `# U.S. — Notice at collection (CPRA/CPPA + other states)

**“Business** / service provider**”** roles as in [Addendum] | **[Last updated] [date] |**  

| Cal. category | Collected? | Disclosed? | “Sell/share/ targeted ads**” (as defined) |  
| --- | ---: | ---: | --- |  
| [Identifiers, …, sensitive, …] | [Y] | [Y, to: …] | [N+attest, or Y + opt] |  

- [Retention] **in ** [**policy**] **; **sensitive** **per ** [CPRA **limits**]  
- [Opt-out/ GPC/ limit use of SPI] in **[** link **] **;** no **discrim** (CPRA 1798.125)  `,
  },

  {
    id: "legal-compliance-children-privacy",
    name: "Children’s privacy (age gate, COPPA-style)",
    category: "legal-compliance",
    description: "Directed vs actual knowledge, VPC, school consent.",
    tags: ["privacy","coppa","kids"],
    content: `# Children’s privacy — [not directed to / directed to] [u13/16+]

**COPPA / [state] / [EEA age] / [UK/ ICO] :** if directed or actual knowledge, follow **[VPC/ consent/ school] ** playbooks.  

## 1) Age gate and data minimization  
- [Flow] — **no** behavioral ads to known minors / **not** in **[RTB] ** where prohibited.  

## 2) Parental rights  
- [Review / delete] via [form / email] with **reasonable** **method** in **[#] ** days.  `,
  },

  {
    id: "legal-compliance-cookie-policy-basic",
    name: "Cookie policy (basic)",
    category: "legal-compliance",
    description: "Cookie types and manage/opt-out line.",
    tags: ["cookies","ePrivacy","web"],
    content: `# Cookie policy — [basic, first-party heavy]

**Site:** [domain] | **v**[X] | [date]  

## Types  
1) **Strictly necessary** (session, security, load balancing) — always on.  
2) **Preferences** (language, **dark mode) — opt in in **[banner] **.  
3) **Analytics** — [opt in, provider]  
4) **Marketing** — [opt in, partner ids in **TCF** if EU].  

## How to change  
- [Cookie settings URL] and browser controls; GPC signal honored for **[** sale/share/ targeted ads] **.  `,
  },

  {
    id: "legal-compliance-cookie-policy-detailed",
    name: "Cookie policy (detailed inventory)",
    category: "legal-compliance",
    description: "Row table for trackers and lawful basis map.",
    tags: ["cookies","pia","web"],
    content: `# Cookie & tracker policy — [detailed inventory]

## Inventory (sample row; extend in spreadsheet)  
| ID | 1P/3P | Name | Purpose | L/D (max) | Consent? |  
| --: | --- | --- | --- | ---: | --- |  
| 1 | 3P | [vendor] | [ad meas.] | 13 mo | TCF/ LI |  

## ePrivacy / ePR / national guidance  
- Map each row to [consent/ strict necessity/ soft opt-in/ …] in **[DPA/ legal] **.  `,
  },

  {
    id: "legal-compliance-cookie-consent-banner-text",
    name: "Cookie consent: first-layer text",
    category: "legal-compliance",
    description: "Banner copy to pair with a CMP/ panel.",
    tags: ["cookies","ux","consent"],
    content: `# Cookie / consent banner copy — [first layer]

> **We use cookies**  
>  
> [One sentence on essential vs optional.]  
>  
> - **[Accept all]**  
> - **[Reject non-essential] **(or regional equivalent)  
> - **[Manage / Cookie settings] **(opens panel with toggles)  
>  
> [Link to full Cookie policy]  `,
  },

  {
    id: "legal-compliance-data-processing-agreement",
    name: "DPA (Art. 28) outline",
    category: "legal-compliance",
    description: "Exhibits, SCC/TOM, and sub-processor process.",
    tags: ["dpa","gdpr","b2b"],
    content: `# DPA (Art. 28) — [Customer] & [Processor] — [M/D/Y]

**Exhibits:** A **Processing**, B **Sub-processors**, C **SCC/ UK/ CH**, D **TOMs**, E **Assistance+ Breach+ Audit**  

## 1) Subject, duration, nature, and purpose  
- [As order form/ SoW] and **RPA/ROPA** ref **[#] **.  

## 2) Processor obligations: instructions, TOM, breach, DSR, delete/return, audits  
- [Standard clauses + **SCC+**] with **CJ/Schrems** TIA in **[#] **.  

## 3) Sub-processing and **liability/ precedence**  
- [General+ specific] **+** [Order+ DPA+ addenda]  `,
  },

  {
    id: "legal-compliance-terms-of-service-website",
    name: "Terms of service (website, consumer/ light B2B)",
    category: "legal-compliance",
    description: "AUP, fees, IP, liability cap, term.",
    tags: ["terms","web","contract"],
    content: `# Terms of service — [website, consumer/B2B light]

**Parties** [user] and [Entity] for **[url] ** services **(“Services”)** | **Governing law/ venue:** [X / Y] | **[Class action / arbitration?] [see §] **.  

## 1) Account, eligibility, and acceptable use  
- [Age] and **[AUP/ anti-abuse] **.  

## 2) Fees, tax, and payment (if e‑commerce)  
- [Price, method, dunning, chargebacks, refund] **+** [§ refund policy]  

## 3) IP, UGC, and license to us  
- [License grant by user to operate **service**; **DMCA/ notice** in **[#] **]  

## 4) Warranties, liability cap, and indemnity  
- [AS IS; cap = greater of $[ ] or **fees in [n] mo**; **excluded: indirect** …]  

## 5) Term, suspension, and survival  `,
  },

  {
    id: "legal-compliance-terms-of-service-app",
    name: "Terms of service (app / EULA for stores)",
    category: "legal-compliance",
    description: "App license, updates, and prohibited uses.",
    tags: ["terms","app","eula"],
    content: `# EULA / App terms — [stores + sideload?]

**License to app (not to sell the IP):** personal, **non**‑transfer, revocable, subject to [store] rules.  
- [Updates required for security/ legal] **+** [auto-update setting]  
- [Export/ sanctions/ prohibited uses]  `,
  },

  {
    id: "legal-compliance-terms-of-service-saas",
    name: "Terms of service (SaaS, subscription)",
    category: "legal-compliance",
    description: "Order + DPA + AUP + export control hooks.",
    tags: ["terms","saas","b2b"],
    content: `# SaaS terms of service (subscription) — B2B [+ optional DPA link]

**Service description** in **[Exhibit A/ ** order form] **+** [SLA ref]  
- [Subscription term, true-up, auto-renew, **notice**]  
- [DPA+ security addendum+ **AUP**+ **FCPA/ anti-bribery] **+ **[public sector] ** if any  `,
  },

  {
    id: "legal-compliance-terms-of-use",
    name: "Terms of use (content/community site)",
    category: "legal-compliance",
    description: "UGC, moderation, takedown, account.",
    tags: ["terms","community","ugc"],
    content: `# Terms of use — [generic property / community]

- [IP in content; community rules; moderation; DMCA; conflicts with **special** TOS]  `,
  },

  {
    id: "legal-compliance-acceptable-use-policy",
    name: "Acceptable use policy (network, API, UGC)",
    category: "legal-compliance",
    description: "Prohibited conduct and enforcement ladder.",
    tags: ["aup","abuse","net"],
    content: `# Acceptable use policy (AUP) — [network, API, and UGC]

## Prohibited  
- [No illegal, no malware, no scraping beyond **[rate]**, no **harm to minors] **, no **dox,** no **hate,** no **IP** **violation**]  
## Enforcement: warn / suspend / report / law  `,
  },

  {
    id: "legal-compliance-eula-basic",
    name: "EULA (basic, shrink-wrap)",
    category: "legal-compliance",
    description: "Short license to software binary with caps.",
    tags: ["eula","license","desktop"],
    content: `# EULA — [basic, shrink-wrap style]

BY INSTALLING YOU AGREE… [Grant; restrictions; 1 comp backup; decompile prohibition except law; warranty disclaimer; **liab cap; ** gov **rights** if consumer]  `,
  },

  {
    id: "legal-compliance-eula-enterprise",
    name: "EULA (enterprise, seats, audit)",
    category: "legal-compliance",
    description: "Named users, VDI, and audit rights (outline).",
    tags: ["eula","enterprise","license"],
    content: `# EULA — [enterprise, seat / device, audit]

- [Named users, max devices, **offline** use, VDI, **gold** / **dev** / **test** and **naming**; **compliance w/ EULA+ ** **Volume** **license**]  `,
  },

  {
    id: "legal-compliance-subscription-agreement",
    name: "Subscription / order (commercials)",
    category: "legal-compliance",
    description: "SKU, term, true-up, and billing hooks.",
    tags: ["subscription","order","saas"],
    content: `# Subscription / order form — [SaaS + MSA/ DPA] terms

- [SKU, qty, $, term, true-up, **PO**# , tax, *payment terms*, **credits, ** SLA, **DPA+ ** **ref**]  `,
  },

  {
    id: "legal-compliance-refund-policy",
    name: "Refund policy",
    category: "legal-compliance",
    description: "Eligibility, windows, and enterprise carve-outs.",
    tags: ["refund","billing","b2c"],
    content: `# Refund & billing dispute policy

- [Eligibility, window, *method*, **chargeback** and **fraud, ** **enterprise** *exceptions*]  `,
  },

  {
    id: "legal-compliance-cancellation-policy",
    name: "Cancellation / export (end of term)",
    category: "legal-compliance",
    description: "Notice, data export, delete attestation, re-joining.",
    tags: ["offboarding","data","saas"],
    content: `# Cancellation & export — at end of subscription

- [Notice period, *data* **export, ** *delete* *cert*, **rejoin**]  `,
  },

  {
    id: "legal-compliance-nda-mutual",
    name: "NDA (mutual)",
    category: "legal-compliance",
    description: "Two-way confidential disclosure guardrails (outline).",
    tags: ["nda","ip","contract"],
    content: `# Mutual NDA (confidential information)

**Between** [Party A] and [Party B] effective **[date]**. **Governing law:** [X]. **Jurisdiction/ venue:** [Y] — **drafter** neutral; **get** **counsel** before **sign.  

## 1) “Confidential Information” (CI)  
- [Definition: technical, business, marked or oral+ memo within [n] days]  
- Exclusions: public, independent, rightfully received, residual per **[§] [state]  

## 2) Use & protection  
- Use **only** for **[purpose/ project] **; **need**‑to**‑**know; **at** **least** **reasonable** care (NIST CSF+ **+** **DPA+ **  

## 3) Term, return, and comp**elled** discl.  
- **Term** of **[n] years** from **last** discl. / **M&A** and **securities** + **in**‑**house** **legal**  
- **Injunctive** **relief** + **$**+ **%** **+** **prevailing** **party** atty  `,
  },

  {
    id: "legal-compliance-nda-one-way",
    name: "NDA (one-way)",
    category: "legal-compliance",
    description: "Unilateral recipient obligations (outline).",
    tags: ["nda","ip","contract"],
    content: `# One-way NDA (discloser → recipient)

**Discloser** [A] / **Recipient** [B] | **Project** [name]  
- Same CI def / exclusions, **unilateral** use bar, **destruction**+ **attest, ** return on **[event]  `,
  },

  {
    id: "legal-compliance-sla-basic",
    name: "SLA (basic, credits)",
    category: "legal-compliance",
    description: "SLO, exclusions, and credit mechanism.",
    tags: ["sla","b2b","ops"],
    content: `# Service Level Agreement (basic)

| SLO (monthly) | Target | **Credit** (if any)  
| --- | --- | ---  
| [Uptime] | [e.g. 99.5%] excl. **E& C**+ **[window]  
| P95 **latency** | [ms] at **[n][ region]  
- [Ticketing+ **sev+ ** DRI+ **RFO**+ **status** page+ **BCP**+ **Breach+ **  `,
  },

  {
    id: "legal-compliance-sla-enterprise",
    name: "SLA (enterprise, TAM, stronger remedies)",
    category: "legal-compliance",
    description: "Enterprise-grade SLA with named response paths (outline).",
    tags: ["sla","enterprise","support"],
    content: `# SLA (enterprise) — [credits+ **TAM+ ** **exec**+ **BCP+ ** **insurance]  

`,
  },

  {
    id: "legal-compliance-sla-uptime",
    name: "Uptime schedule (appendix)",
    category: "legal-compliance",
    description: "Measurement window and maintenance carve-outs (outline).",
    tags: ["sla","sre","uptime"],
    content: `# Uptime **schedule** (appendix) — [9s / calendar / rolling]  

`,
  },

  {
    id: "legal-compliance-master-services-agreement",
    name: "Master Services Agreement (MSA)",
    category: "legal-compliance",
    description: "Umbrella order + SOWs + DPA (outline).",
    tags: ["msa","b2b","procurement"],
    content: `# Master Services Agreement (MSA) — [A] & [B]

**MSA+ ** **order**+ **DPA+ ** **SOW+ ** + **AUP+ ** **open**+ **M&A+ **  `,
  },

  {
    id: "legal-compliance-statement-of-work",
    name: "Statement of Work (SOW)",
    category: "legal-compliance",
    description: "Scope, milestones, acceptance (outline).",
    tags: ["sow","delivery","services"],
    content: `# Statement of Work (SOW) #[n] — under MSA [id]

- **Scope+ ** deliv+ **milestones+ ** **acceptance+ ** **fees+ ** **change+ **  `,
  },

  {
    id: "legal-compliance-consulting-agreement",
    name: "Consulting / services agreement",
    category: "legal-compliance",
    description: "T&M / deliverables + IP assignment hooks (outline).",
    tags: ["services","consulting","ip"],
    content: `# Professional services / consulting

- **SOW+ ** **T&M+ cap+ ** **deliv+ ** **IP+ ** (work **for** **hire** / **assign**) + **W‑2/ IC** **+** **Liability+ **  `,
  },

  {
    id: "legal-compliance-freelance-contract",
    name: "Freelance / IC agreement",
    category: "legal-compliance",
    description: "SOW, IC classification, PII/ IP / non-solicit (outline).",
    tags: ["freelance","ic","hr"],
    content: `# Freelance / independent contractor

- **SOW+ ** **IP+ ** **non**‑solic+ **DPA+ ** (if PII) + **BAA?** + **insurance+ **  `,
  },

  {
    id: "legal-compliance-licensing-agreement",
    name: "IP / software / content license",
    category: "legal-compliance",
    description: "Field, term, audit, and OSS in/out (outline).",
    tags: ["license","ip","content"],
    content: `# IP / software / content license

- **Field+ ** **term+ ** **royalty+ ** **audit+ ** **OSI+ ** in **/ **out + **M&A+ **  `,
  },

  {
    id: "legal-compliance-hipaa-compliance-checklist",
    name: "HIPAA compliance checklist (ops)",
    category: "legal-compliance",
    description: "BAA, ePHI map, and safeguards (high level).",
    tags: ["hipaa","health","compliance"],
    content: `# HIPAA — implementation checklist (high level)

- **BAA+ ** for **C** + **B** + sub‑**BAA+ **; **ePHI** **map+ **  `,
  },

  {
    id: "legal-compliance-soc-2-controls",
    name: "SOC 2: control mapping notes",
    category: "legal-compliance",
    description: "CC/ A/ C mapping placeholders for Trust Services.",
    tags: ["soc2","audit","security"],
    content: `# SOC 2 — control mapping (CC+ **A+** C+** P+** **CC**+ **+** **+**  

`,
  },

  {
    id: "legal-compliance-pci-dss-checklist",
    name: "PCI DSS checklist (in-scope + SAQ path)",
    category: "legal-compliance",
    description: "Scope, CHD, segmentation, testing.",
    tags: ["pci","payments","compliance"],
    content: `# PCI DSS — in‑scope+ **** **SAQ+** **segment**+  

`,
  },

  {
    id: "legal-compliance-iso-27001-controls",
    name: "ISO 27001 / 27018 mapping",
    category: "legal-compliance",
    description: "SoA + ISMS and cloud customer duties (high level).",
    tags: ["iso27001","isms","cloud"],
    content: `# ISO 27001 / 27018 — soa+ **+** **risk+  

`,
  },

  {
    id: "legal-compliance-gdpr-compliance-checklist",
    name: "GDPR compliance program checklist (ops)",
    category: "legal-compliance",
    description: "RPA, DPIA, DSR, breach (high level, not legal advice).",
    tags: ["gdpr","program","grc"],
    content: `# GDPR — implementation checklist+ **+**  

`,
  },

  {
    id: "legal-compliance-accessibility-compliance-wcag",
    name: "WCAG 2.2 compliance & VPAT (outline)",
    category: "legal-compliance",
    description: "Audit, conformance targets, and exceptions log.",
    tags: ["wcag","a11y","508"],
    content: `# WCAG 2.2 — audit+ **+** **VPAT+ ** **+  

`,
  },

  {
    id: "legal-compliance-data-retention-policy",
    name: "Data retention & disposal policy (legal+records)",
    category: "legal-compliance",
    description: "Schedules, holds, and destruction certificates.",
    tags: ["retention","records","compliance"],
    content: `# **Retention**+ **+** + **+  

`,
  },

  {
    id: "legal-compliance-data-breach-response-plan",
    name: "Data breach / IR response plan (privacy)",
    category: "legal-compliance",
    description: "Containment, comms, DPA, and regulator runbooks (outline).",
    tags: ["breach","ir","privacy"],
    content: `# **Breach**+ play+  

`,
  },

  {
    id: "legal-compliance-vendor-security-questionnaire",
    name: "Vendor security questionnaire (RFP/TPRM)",
    category: "legal-compliance",
    description: "Question bank outline for B2B due diligence (outline).",
    tags: ["vendor","tprm","security"],
    content: `# **Vendor**+ **+  

`,
  },

  {
    id: "legal-compliance-security-policy",
    name: "Information security policy (org-wide)",
    category: "legal-compliance",
    description: "Acceptable use, access, and classification (outline).",
    tags: ["security","policy","isms"],
    content: `# **InfoSec**+ **+  

`,
  },

  {
    id: "legal-compliance-incident-report-template",
    name: "Incident report (GRC) template",
    category: "legal-compliance",
    description: "What/when/who/where for initial incident capture.",
    tags: ["incident","grc","ir"],
    content: `# **Incident+ **+  

`,
  },

  {
    id: "legal-compliance-incident-post-mortem",
    name: "Incident post‑mortem (blameless) template",
    category: "legal-compliance",
    description: "Timeline, 5-why, and CAPA follow-through.",
    tags: ["incident","rca","sre"],
    content: `# **P / M**+  

`,
  },

  {
    id: "legal-compliance-audit-checklist-general",
    name: "Internal audit: general checklist",
    category: "legal-compliance",
    description: "Scope, sampling, and evidence list (outline).",
    tags: ["audit","internal","assurance"],
    content: `# **Internal**+ audit+  

`,
  },

  {
    id: "legal-compliance-audit-findings-report",
    name: "Audit findings report (auditee response)",
    category: "legal-compliance",
    description: "Finding table with severity and retest (outline).",
    tags: ["audit","findings","assurance"],
    content: `# **Find+ **+  

`,
  },

  {
    id: "legal-compliance-corrective-action-plan",
    name: "Corrective action plan (CAP) template",
    category: "legal-compliance",
    description: "Owner, due date, verification metric per finding.",
    tags: ["capa","audit","governance"],
    content: `# **CAP+ **+  

`,
  },

  {
    id: "legal-compliance-risk-acceptance-form",
    name: "Risk acceptance / exception (residual risk)",
    category: "legal-compliance",
    description: "Business sign-off, expiry, and compensating controls.",
    tags: ["risk","grc","exception"],
    content: `# **Risk+ acc+  

`,
  },

  {
    id: "legal-compliance-exception-request",
    name: "Exception request (GRC) template",
    category: "legal-compliance",
    description: "Policy exception with impact + approval chain.",
    tags: ["exception","grc","governance"],
    content: `# **GRC+ ex+  

`,
  },

  {
    id: "legal-compliance-compliance-training-record",
    name: "Compliance training attestation (record)",
    category: "legal-compliance",
    description: "Who/when/what and LMS evidence pointers (outline).",
    tags: ["training","compliance","hr"],
    content: `# **Train+  

`,
  },

  {
    id: "legal-compliance-policy-acknowledgment",
    name: "Policy acknowledgment (employee / contractor)",
    category: "legal-compliance",
    description: "Attestation line + periodic re-attest (outline).",
    tags: ["policy","ack","hr"],
    content: `# **Ack+  

`,
  },

  {
    id: "legal-compliance-whistleblower-report",
    name: "Whistleblower / ethics line intake (skeleton)",
    category: "legal-compliance",
    description: "Intake, triage, and anti-retaliation pointers (not legal advice).",
    tags: ["ethics","whistle","governance"],
    content: `# **Whistle+  

`,
  }
];
