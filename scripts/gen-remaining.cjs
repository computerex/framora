/* Generates dev-templates-remaining.data.json (exactly 116 templates) */
const fs = require("node:fs");
const path = require("node:path");

const IDS = [].concat(
  "feature,bugfix,hotfix,refactor,docs,dependency-update,breaking-change,rfc"
    .split(",")
    .map((s) => "development-pr-" + s),
  "bug-report,feature-request,question,security-vulnerability,performance,documentation,regression,compatibility"
    .split(",")
    .map((s) => "development-issue-" + s),
  "basic,lightweight,madr,y-statement"
    .split(",")
    .map((s) => "development-adr-" + s),
  "feature,system-design,api-design,database-schema,data-migration,performance-optimization,security-review,integration"
    .split(",")
    .map((s) => "development-tech-spec-" + s),
  "deployment,rollback,scaling,incident-response,database-maintenance,cache-invalidation,certificate-renewal,dns-update,monitoring-setup,backup-restore,disaster-recovery,failover,load-testing,security-patch,data-recovery"
    .split(",")
    .map((s) => "development-runbook-" + s),
  "general,security,performance,accessibility,testing"
    .split(",")
    .map((s) => "development-code-review-checklist-" + s),
  "major,minor,patch,pre-release,lts"
    .split(",")
    .map((s) => "development-release-notes-" + s),
  "basic,detailed,enterprise"
    .split(",")
    .map((s) => "development-security-policy-" + s),
  "github-actions,gitlab-ci,jenkins,circleci"
    .split(",")
    .map((s) => "development-cicd-" + s),
  "node,python,go,java,multi-stage"
    .split(",")
    .map((s) => "development-dockerfile-" + s),
  "web-app,microservices,dev-environment,monitoring-stack"
    .split(",")
    .map((s) => "development-docker-compose-" + s),
  "basic,go,python,node"
    .split(",")
    .map((s) => "development-makefile-" + s),
  "node,python,go,java,rust"
    .split(",")
    .map((s) => "development-gitignore-" + s),
  "conventional,scoped,team"
    .split(",")
    .map((s) => "development-commit-message-" + s),
  "gitflow,trunk-based"
    .split(",")
    .map((s) => "development-branch-naming-" + s),
  "typescript,python,go,rust,css"
    .split(",")
    .map((s) => "development-code-style-" + s),
  "url-and-header,semantic-policy"
    .split(",")
    .map((s) => "development-api-versioning-" + s),
  "rolling,pinned"
    .split(",")
    .map((s) => "development-dependency-update-policy-" + s),
  "pyramid,contract,shift-right"
    .split(",")
    .map((s) => "development-testing-strategy-" + s),
  [
    "development-monitoring-strategies",
    "development-alerting-playbooks",
    "development-oncall-handoff",
    "development-postmortem-blameless",
  ],
  "sprint,backlog"
    .split(",")
    .map((s) => "development-technical-debt-" + s),
  "api,package"
    .split(",")
    .map((s) => "development-deprecation-notice-" + s),
  "library,framework,database,api-version"
    .split(",")
    .map((s) => "development-migration-guide-" + s),
  "macos,linux,windows"
    .split(",")
    .map((s) => "development-environment-setup-" + s),
  "availability,latency"
    .split(",")
    .map((s) => "development-troubleshooting-" + s),
  /* Four focus docs to pair with the 4 combined observability/on-call runbooks. */
  "development-observability-dashboards",
  "development-observability-slo-budgets",
  "development-releases-feature-flags",
  "development-qa-benchmark-regression",
);

if (IDS.length !== 116) {
  throw new Error("ID list: expected 116, got " + IDS.length);
}

const meta = {
  "development-monitoring-strategies": {
    name: "Monitoring strategies (observability + SLO/SLI)",
    desc: "Use RED/USE and SLIs/SLOs in one place; two approaches in a single long-running doc for small teams.",
    tags: ["monitoring", "slo", "sli", "observability"],
  },
  "development-alerting-playbooks": {
    name: "Alerting playbooks (noise control + severity routing)",
    desc: "Reduce alert fatigue and wire severities to pages and on-call in one runbook set.",
    tags: ["alerting", "on-call", "sre", "incident"],
  },
  "development-oncall-handoff": {
    name: "On-call handoff (shift + week)",
    desc: "Structured shift change plus weekly handoff: context, open incidents, and risky changes.",
    tags: ["oncall", "handoff", "sre", "shift"],
  },
  "development-postmortem-blameless": {
    name: "Blameless postmortem (two-severity pattern)",
    desc: "Postmortem for major and non-major incidents with timeline, impact, and follow-ups in one document.",
    tags: ["postmortem", "sre", "incident", "rca"],
  },
};

function humanTitle(id) {
  const s = id.replace("development-", "").replace(/-/g, " ");
  return s.replace(/\b\w/g, (c) => c.toUpperCase());
}

function baseLines(h1) {
  return [
    "# " + h1,
    "",
    "> **Audience:** [engineers, SRE, security, product] — *replace with your team*",
    "",
    "## Context",
    "- **Current situation:** [2–3 sentences from reality, not marketing]",
    "- **Decisions / constraints already fixed:** [list]",
    "",
    "## Requirements",
    "| Requirement | Status | Note |",
    "| --- | --- | --- |",
    "| [R1] | [must/should] | [details] |",
    "| [R2] | [must/should] | [details] |",
    "",
    "## Proposed approach",
    "1. [Step or milestone] — *owner* [name]",
    "2. [Step] — *owner* [name]",
    "3. [Step] — *owner* [name]",
    "",
    "## Risks & mitigations",
    "- **Risk:** [text] — *Mitigation:* [text]",
    "- **Risk:** [text] — *Mitigation:* [text]",
    "",
    "## Validation",
    "- **How we know it worked:** [metrics, checklists, sign-off from role X]",
    "- **How we roll back:** [revert, flag, or manual steps]",
    "",
    "## Links",
    "- Design / tickets: [links]",
  ];
}

function linesForId(id) {
  if (meta[id]) {
    if (id === "development-monitoring-strategies") {
      return [
        "# Monitoring strategies: RED/USE, SLIs, and SLOs",
        "",
        "> Combine **workload** metrics, **serving** health, and **SLOs** in one program of record. Replace bracketed fields for your org.",
        "",
        "## Part A — RED/USE and golden signals (operational)",
        "- **R**ate, **E**rrors, **D**uration for each critical API or job queue: [name]",
        "- **USE** for resources: **U**tilization, **S**aturation, **E**rrors: [per resource]",
        "- **Dashboard links:** [Grafana / Datadog / ...]",
        "",
        "| Signal | What “good” looks like (example) |",
        "| --- | --- |",
        "| p95 latency for `/api/orders` | [X ms] |",
        "| Error rate (5xx) | [< Y% for Z minutes] |",
        "",
        "## Part B — SLI/SLO program (user-facing)",
        "- **SLO object:** e.g. “[99.9%] of [reads] return success in < [N ms] per calendar month]”",
        "- **Error budget policy:** at [50%] remaining → [triage feature work]; at [0%] → [freeze, incident review]",
        "- **SLO report cadence:** [monthly; owner: team X]",
        "",
        "## On-call tie-in",
        "- Page on **SLO burn** and **SRE-defined** “customer pain” only if [conditions].",
        "- Runbook link for SLO policy exceptions: [link]",
      ];
    }
    if (id === "development-alerting-playbooks") {
      return [
        "# Alerting playbooks: noise, severity, and ownership",
        "",
        "## Part A — Reduce alert noise (tune before you add pages)",
        "- **Aggregation:** [group by service + region, not by pod unless necessary].",
        "- **Thresholds from SLO/SLA:** not from historical max + 5%.",
        "- **Hysteresis / duration:** alert only if [condition] for [N] minutes (example).",
        "- **Triage dashboard:** [link] for “top noisy alerts this week”",
        "",
        "| Symptom | Root cause to check | Action |",
        "| --- | --- | --- |",
        "| Paging on CPU spikes that recover | [bad threshold / missing baseline] | [raise N or use anomaly] |",
        "",
        "## Part B — Severity routing and escalation",
        "- **P0 (wake people):** [customer-facing outage, data loss, security] — *page both* [Oncall + N]",
        "- **P1 (business hours+):** [major degradation, workaround exists]",
        "- **P2 (next day):** [non-critical, tech debt, noisy metric]",
        "- **Escalation after [N] min without ack:** [manager, secondary on-call]",
        "- **Staged communication:** [status page, internal #incident channel, legal if PII] — *links to templates*",
        "",
        "## After-action",
        "- Every paged alert should be **tunable, tunable, or wrong**: *document in* [tuning runbook].",
      ];
    }
    if (id === "development-oncall-handoff") {
      return [
        "# On-call handoff: shift and weekly",
        "",
        "## Shift handoff (end of on-call block)",
        "- **Oncall A → B, window:** [TZ], **handover time:** [date/time].",
        "- **Open incidents / sev-? / links:** [list or “none”].",
        "- **Ongoing changes / risk:** [canary, migration, feature flags].",
        "- **Key dashboards / runbooks to watch:** [links].",
        "- **Notable log patterns / “weird but stable” things:** [bullets].",
        "",
        "## Weekly on-call report (asynchronous, optional for small teams)",
        "- **P1/P2 count and themes:** [table or list]",
        "- **Action items to reduce toil / alerts:** [owner + due].",
        "- **Customer-impacting events:** *even if not sev* — *brief* [1-liners with links].",
        "",
        "## Contact tree",
        "| Role | Name / alias | How to page |",
        "| --- | --- | --- |",
        "| Primary on-call | [alias] | [phone / PagerDuty] |",
        "| [Dependency owner] | [alias] | [Slack / phone] |",
      ];
    }
    if (id === "development-postmortem-blameless") {
      return [
        "# Blameless postmortem (sev-1 and sev-2 pattern)",
        "",
        "> Fill **one** of the two “severity” blocks below, or use both in the same document with clear headers.",
        "",
        "## Metadata",
        "- **Incident / ticket:** [P1-... / INC-...]",
        "- **Time range (UTC):** [start] – [end]",
        "- **Severity used:** [Sev-1: broad customer or revenue impact] **or** [Sev-2: limited blast radius, workaround].",
        "",
        "## Summary (5 sentences max)",
        "- **What customers saw** — [user-visible symptoms].",
        "- **What broke** in **technical** terms — [1–2 sentences].",
        "- **How we fixed / mitigated** — [stabilization, rollback, or flag].",
        "",
        "## Timeline (UTC) — *append rows as you learn*",
        "| Time (UTC) | Event |",
        "| --- | --- |",
        "| [T0] | [Symptom detected / page fired] |",
        "| [T1] | [Action / discovery] |",
        "| [T2] | [Service restored] |",
        "",
        "## Root cause (5 whys, no blame to individuals — focus on systems)",
        "- **Root cause category:** [config, deploy, capacity, code bug, dependency, human process gap]",
        "- **Why it was possible:** [missed guardrail, lack of test, runbook gap]",
        "",
        "## Follow-up actions (JIRA / tickets, owners, due dates)",
        "| Action | Type | Owner | Due |",
        "| --- | --- | --- | --- |",
        "| [Prevent recurrence] | [code / process / runbook] | [name] | [date] |",
        "",
        "## What went well / what to improve in response",
        "- **Went well:** [coordination, rollback speed, comms].",
        "- **Improve next time:** [tooling, access, on-call runbook].",
      ];
    }
  }

  if (id.startsWith("development-pr-")) {
    const slug = id.slice("development-pr-".length);
    return [
      "## [Pull request title]",
      "",
      `> **Type:** \`${slug}\` (fill template fields below)`,
      "",
      "### Links",
      "- Issue / ticket: [ID or URL]",
      "- Spec / Figma: [if UI]",
      "",
      "### Motivation & scope",
      "- [Why this change; link customer pain or issue]",
      "- **Non-goals for this PR:** [explicit boundaries]",
      "",
      "### How to test locally",
      "```bash",
      "[command 1]",
      "[command 2 — include env vars, no secrets in PR body]",
      "```",
      "",
      "### Test matrix",
      "- [ ] **Unit** — [areas]",
      "- [ ] **Integration** — [databases, queues, …]",
      "- [ ] **E2E / manual** — [steps, browsers, or devices]",
      "",
      "### Checklist (author)",
      "- [ ] I updated or added **tests** and **docs** for user-visible or config changes.",
      "- [ ] I described **rollout/rollback** (flags, feature gates, or revert PR).",
      "- [ ] I attached **before/after** if UI, or **sample request/response** for APIs.",
    ];
  }
  if (id.startsWith("development-issue-")) {
    return [
      "## [Short, specific title]",
      "",
      "### Summary",
      "- **What you expected:** [describe]",
      "- **What happened instead:** [describe]",
      "- **When:** [date / first bad version] — **Severity to you:** [P0–P3 or n/a]",
      "",
      "### Environment",
      "- OS: [e.g. Windows 11, Ubuntu 24.04]",
      "- Runtime / version: [Node 22, Python 3.12, …] — *app version* [x.y.z, git SHA]",
      "- Config: [env vars, feature flags, region, cluster]",
      "",
      "### Reproduction",
      "1. [step one]",
      "2. [step two]",
      "3. [observe]",
      "",
      "### Evidence & diagnostics",
      "- Logs: [link to gist, redact secrets]",
      "- Metrics: [dashboard link, time range] — *optional*",
      "- Screenshots / HAR: [or n/a]",
      "",
      "### Workarounds",
      "- [Anything that helped temporarily, or n/a]",
      "",
      "### Possible follow-ups for maintainers",
      "- **Likely area:** [component, based on your guess — optional]",
    ];
  }

  if (id.startsWith("development-runbook-")) {
    const slug = id.replace("development-runbook-", "");
    const title =
      slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    return [
      "# Runbook: " + title + " (`" + slug + "`)",
      "",
      "## When to use",
      "- [Trigger: deploy, on-call, maintenance window, …]",
      "- **Service / stack:** [names] — *blast radius* [user-facing / internal-only]",
      "",
      "## Preconditions",
      "- [ ] Approvals: [CAB, manager, SRE, …]",
      "- [ ] Backups or snapshots: [id / timestamp]",
      "- [ ] Maintenance banner / comms: [link or n/a]",
      "",
      "## Procedure (ordered; edit for your org)",
      "1. [Step] — *command* `...` — *expected output* [snippet]",
      "2. [Step] — *verify metric* [name] in [dashboard]",
      "3. [Step] — *notify* [stakeholder channel]",
      "",
      "## Rollback / if something goes wrong",
      "- [Immediate mitigation: scale down, feature flag, drain traffic, …]",
      "- [Re-run previous release job / restore snapshot id …]",
      "",
      "## Post-change checks",
      "- SLO: [names] in range for [N min]",
      "- **Synthetic:** [url or job] **green**",
      "- Error rate / 5xx: [threshold]",
      "",
      "## References & owners",
      "- [Links to SOP, other runbooks, service catalog]",
      "- **On-call & escalation:** [policy link]",
    ];
  }

  return baseLines(humanTitle(id));
}

// Fix any accidental double backtick in hand-written strings
function clean(L) {
  return L.map((x) => String(x).replace(/``+$/g, "").replace(/``/g, "'"));
}

const items = IDS.map((id) => {
  const L = clean(linesForId(id));
  if (L.length < 15) {
    throw new Error("Too few lines: " + id + " " + L.length);
  }
  const m = meta[id];
  if (m) {
    return {
      id,
      name: m.name,
      description: m.desc,
      tags: m.tags,
      lines: L,
    };
  }
  // derive name from id
  const last = id.split("-").slice(2).join(" ");
  return {
    id,
    name: "Development template: " + last,
    description: "Usable " + id.replace("development-", "").replace(/-/g, " ") + " document with bracketed placeholders.",
    tags: [id.split("-")[1] || "development", "template", "markdown"],
    lines: L,
  };
});

if (items.length !== 116) {
  throw new Error("items " + items.length);
}

const out = path.join(__dirname, "dev-templates-remaining.data.json");
fs.writeFileSync(out, JSON.stringify(items, null, 2), "utf8");
console.log("Wrote", out, "count=", items.length);
