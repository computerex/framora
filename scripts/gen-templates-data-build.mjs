import { contentForDataTable } from "./gen-templates-data-tables.mjs";
import { contentForDataCsv, contentForDataSurvey } from "./gen-templates-data-impl-part1.mjs";
import { contentForDataReport, contentForDataChart, contentForDataMgmt } from "./gtd-data-ext.mjs";
import {
  contentSnippetHeader,
  contentSnippetCallout,
  contentSnippetBadge,
  contentSnippetLicense,
  contentSnippetToc,
  contentSnippetNav,
  contentSnippetCard,
  contentSnippetCollapsible,
} from "./gtd-snippets.mjs";
import { contentForLegalKey } from "./gtd-legal.mjs";

const d = (out, t) => out.push(t);

export function buildAllTemplates() {
  const out = [];

  for (const row of DATA_TABLES) {
    d(out, {
      id: row.id,
      name: row.name,
      category: "data",
      description: row.description,
      tags: row.tags,
      content: contentForDataTable(row.variant),
    });
  }

  for (const row of DATA_CSV) {
    d(out, { id: row.id, name: row.name, category: "data", description: row.description, tags: row.tags, content: contentForDataCsv(row.variant) });
  }
  for (const row of DATA_SURVEY) {
    d(out, { id: row.id, name: row.name, category: "data", description: row.description, tags: row.tags, content: contentForDataSurvey(row.variant) });
  }
  for (const row of DATA_REPORT) {
    d(out, { id: row.id, name: row.name, category: "data", description: row.description, tags: row.tags, content: contentForDataReport(row.variant) });
  }
  for (const row of DATA_CHART) {
    d(out, { id: row.id, name: row.name, category: "data", description: row.description, tags: row.tags, content: contentForDataChart(row.variant) });
  }
  for (const row of DATA_MGMT) {
    d(out, { id: row.id, name: row.name, category: "data", description: row.description, tags: row.tags, content: contentForDataMgmt(row.variant) });
  }

  for (const row of SNIPPET_HEADERS) {
    d(out, { id: row.id, name: row.name, category: "snippets", description: row.description, tags: row.tags, content: contentSnippetHeader(row.variant) });
  }
  for (const row of SNIPPET_CALLOUTS) {
    d(out, { id: row.id, name: row.name, category: "snippets", description: row.description, tags: row.tags, content: contentSnippetCallout(row.variant) });
  }
  for (const row of SNIPPET_BADGES) {
    d(out, { id: row.id, name: row.name, category: "snippets", description: row.description, tags: row.tags, content: contentSnippetBadge(row.variant) });
  }
  for (const row of SNIPPET_LICENSES) {
    d(out, { id: row.id, name: row.name, category: "snippets", description: row.description, tags: row.tags, content: contentSnippetLicense(row.variant) });
  }
  for (const row of SNIPPET_TOCS) {
    d(out, { id: row.id, name: row.name, category: "snippets", description: row.description, tags: row.tags, content: contentSnippetToc(row.variant) });
  }
  for (const row of SNIPPET_NAV) {
    d(out, { id: row.id, name: row.name, category: "snippets", description: row.description, tags: row.tags, content: contentSnippetNav(row.variant) });
  }
  for (const row of SNIPPET_CARDS) {
    d(out, { id: row.id, name: row.name, category: "snippets", description: row.description, tags: row.tags, content: contentSnippetCard(row.variant) });
  }
  for (const row of SNIPPET_COLL) {
    d(out, { id: row.id, name: row.name, category: "snippets", description: row.description, tags: row.tags, content: contentSnippetCollapsible(row.variant) });
  }

  for (const row of LEGAL_LIST) {
    d(out, {
      id: row.id,
      name: row.name,
      category: "legal-compliance",
      description: row.description,
      tags: row.tags,
      content: contentForLegalKey(row.id),
    });
  }

  if (out.length !== 190) throw new Error(`Expected 190 templates, got ${out.length}`);
  return out;
}

const DATA_TABLES = [
  { id: "data-table-comparison", name: "Comparison table", description: "Side-by-side comparison of options, criteria, and notes.", tags: ["table", "comparison", "decision"], variant: "comparison" },
  { id: "data-table-pricing-basic", name: "Pricing table (basic)", description: "Simple one-tier pricing and totals for quotes.", tags: ["table", "pricing", "quote"], variant: "pricing_basic" },
  { id: "data-table-pricing-tiered", name: "Pricing table (tiered)", description: "Multi-plan tier comparison with add-ons and notes.", tags: ["table", "pricing", "tiers"], variant: "pricing_tiered" },
  { id: "data-table-pricing-enterprise", name: "Pricing table (enterprise)", description: "Complex enterprise pricing, approvals, and deal levers.", tags: ["table", "pricing", "enterprise"], variant: "pricing_enterprise" },
  { id: "data-table-feature-matrix", name: "Feature matrix", description: "Matrix of modules and capabilities by SKU or release.", tags: ["table", "features", "roadmap"], variant: "feature_matrix" },
  { id: "data-table-feature-comparison", name: "Feature comparison (vs competition)", description: "Competitive feature comparison with proof links.", tags: ["table", "features", "compete"], variant: "feature_comparison" },
  { id: "data-table-inventory-list", name: "Inventory list", description: "SKU-level inventory, movements, and exceptions.", tags: ["table", "inventory", "ops"], variant: "inventory_list" },
  { id: "data-table-employee-directory", name: "Employee directory (table)", description: "Internal directory row layout with PII policy reminders.", tags: ["table", "people", "hr"], variant: "employee_directory" },
  { id: "data-table-contact-list", name: "Contact list (stakeholders)", description: "Project or account contact grid with escalations.", tags: ["table", "stakeholders", "crm"], variant: "contact_list" },
  { id: "data-table-product-catalog", name: "Product catalog (table)", description: "List/catalog format with EOL, bundles, and media links.", tags: ["table", "catalog", "pim"], variant: "product_catalog" },
  { id: "data-table-schedule-weekly", name: "Schedule (weekly)", description: "Week view by hours with on-call and standing meetings.", tags: ["table", "schedule", "week"], variant: "schedule_weekly" },
  { id: "data-table-schedule-monthly", name: "Schedule (monthly)", description: "Month program grid with milestones and change log.", tags: ["table", "schedule", "month"], variant: "schedule_monthly" },
  { id: "data-table-timetable", name: "Timetable (classes or sessions)", description: "Slot grid with instructors, rooms, and key dates.", tags: ["table", "timetable", "events"], variant: "timetable" },
  { id: "data-table-scorecard", name: "Scorecard (initiative)", description: "KPI scorecard with RAG, variance, and follow-ups.", tags: ["table", "kpi", "review"], variant: "scorecard" },
  { id: "data-table-leaderboard", name: "Leaderboard", description: "Rankings with scoring, ties, and prizes.", tags: ["table", "game", "ranking"], variant: "leaderboard" },
  { id: "data-table-grading", name: "Grading table (course)", description: "Weights, scores, and grade letters for a cohort.", tags: ["table", "grades", "education"], variant: "grading" },
  { id: "data-table-compatibility-matrix", name: "Compatibility matrix", description: "Environment and version compatibility grid.", tags: ["table", "compatibility", "qa"], variant: "compatibility" },
  { id: "data-table-requirements-traceability", name: "Requirements traceability (table)", description: "Links requirements, tests, and builds.", tags: ["table", "requirements", "qa"], variant: "requirements_traceability" },
  { id: "data-table-test-matrix", name: "Test matrix", description: "Cross-browser and API test result matrix for a build.", tags: ["table", "testing", "release"], variant: "test_matrix" },
  { id: "data-table-permission-matrix", name: "Permission matrix (RBAC/ABAC)", description: "Roles vs permissions in an application or service.", tags: ["table", "security", "rbac"], variant: "permission_matrix" },
];

const DATA_CSV = [
  { id: "data-csv-data-export-template", name: "Data export (CSV) template", description: "Column contract for exporting data for BI or handoff.", tags: ["csv", "export", "etl"], variant: "data_export" },
  { id: "data-csv-import-template", name: "Import template (CSV)", description: "Headers, validation, and idempotency for bulk imports.", tags: ["csv", "import", "etl"], variant: "import_template" },
  { id: "data-csv-mapping-document", name: "Field mapping (source → target)", description: "Transform rules and value maps for migration or sync.", tags: ["csv", "mapping", "integration"], variant: "mapping_doc" },
  { id: "data-csv-transformation-rules", name: "Transformation rules (data pipeline)", description: "Stepwise transforms, idempotency, and DLQ strategy.", tags: ["csv", "etl", "pipeline"], variant: "transformation" },
  { id: "data-csv-validation-rules", name: "Validation rules (schema & cross-field)", description: "Field checks, error codes, and test sampling strategy.", tags: ["csv", "validation", "quality"], variant: "validation" },
];

const DATA_SURVEY = [
  { id: "data-survey-customer-satisfaction", name: "Survey: customer satisfaction (CSAT)", description: "Post-interaction CSAT with drivers and consent.", tags: ["survey", "csat", "feedback"], variant: "csat" },
  { id: "data-survey-employee-engagement", name: "Survey: employee engagement (pulse)", description: "Likert pulse, comments, and workload signals.", tags: ["survey", "hr", "engagement"], variant: "engagement" },
  { id: "data-survey-nps", name: "Survey: NPS and follow-up", description: "0–10 NPS, reasons, and service recovery path.", tags: ["survey", "nps", "feedback"], variant: "nps" },
  { id: "data-survey-product-feedback", name: "Survey: product feedback (bugs & UX)", description: "Repro, severity, and workaround capture template.", tags: ["survey", "product", "ux"], variant: "product_feedback" },
  { id: "data-survey-event-feedback", name: "Survey: event feedback", description: "Sessions, logistics, and lead-capture (opt-in).", tags: ["survey", "event", "feedback"], variant: "event_feedback" },
  { id: "data-survey-market-research", name: "Survey: market research (screener+topic guide)", description: "Quotas, stimuli, and incentive ethics.", tags: ["survey", "research", "mrx"], variant: "market_research" },
  { id: "data-survey-user-experience", name: "Survey / script: user experience (moderated)", description: "Tasks, SUS/SEQ, and evidence pack for synthesis.", tags: ["survey", "ux", "research"], variant: "ux" },
  { id: "data-survey-accessibility-audit", name: "Worksheet: accessibility audit (WCAG-oriented)", description: "Scope, sample flows, and findings with severity.", tags: ["survey", "a11y", "wcag"], variant: "a11y" },
  { id: "data-survey-website-usability", name: "Test plan: website usability (lightweight)", description: "Hypothesis, tasks, and summary table for sessions.", tags: ["survey", "usability", "web"], variant: "usability" },
  { id: "data-survey-onboarding", name: "Survey: onboarding (0/7/30)", description: "Milestones, friction, and instrumentation alignment.", tags: ["survey", "onboarding", "product"], variant: "onboarding" },
];

const DATA_REPORT = [
  { id: "data-report-quarterly", name: "Report: quarterly (business/ops)", description: "Executive summary, OKR table, and outlook.", tags: ["report", "quarterly", "business"], variant: "quarterly" },
  { id: "data-report-annual", name: "Report: annual (stakeholder)", description: "Year in review, risks, and financials pointer.", tags: ["report", "annual", "stakeholder"], variant: "annual" },
  { id: "data-report-monthly-metrics", name: "Report: monthly metrics pack", description: "One-pager of KPIs, anomalies, and definitions.", tags: ["report", "monthly", "metrics"], variant: "monthly_metrics" },
  { id: "data-report-kpi-dashboard", name: "KPI definitions (for dashboards)", description: "KPI card contract: owners, bands, and drill path.", tags: ["report", "kpi", "bi"], variant: "kpi_dashboard" },
  { id: "data-report-financial-summary", name: "Report: financial summary (management)", description: "P&L bridge, cash, and forward range.", tags: ["report", "finance", "management"], variant: "financial_summary" },
  { id: "data-report-sales", name: "Report: sales (pipeline & forecast)", description: "Quota, forecast, and deal desk / marketing alignment.", tags: ["report", "sales", "pipeline"], variant: "sales" },
  { id: "data-report-marketing", name: "Report: marketing (channel ROI)", description: "Spend, funnel, and budget reallocation notes.", tags: ["report", "marketing", "roi"], variant: "marketing" },
  { id: "data-report-operations", name: "Report: operations (SLAs & supply chain)", description: "SLO/OLA, capacity, and vendor posture.", tags: ["report", "operations", "sla"], variant: "operations" },
  { id: "data-report-hr", name: "Report: HR (aggregated, confidential)", description: "Headcount, comp themes, and compliance signals.", tags: ["report", "hr", "confidential"], variant: "hr" },
  { id: "data-report-it-status", name: "Report: IT status (services & changes)", description: "Incidents, change freeze, and cloud/vendor posture.", tags: ["report", "it", "incidents"], variant: "it_status" },
  { id: "data-report-security", name: "Report: security (executive)", description: "Risk, detect/respond, and exception register pointer.", tags: ["report", "security", "ciso"], variant: "security" },
  { id: "data-report-incident", name: "Report: IT/product incident (management)", description: "Impact, RFO, CAPA, and customer credit pointers.", tags: ["report", "incident", "postmortem"], variant: "incident" },
  { id: "data-report-audit", name: "Report: internal audit (assurance)", description: "Scope, opinion, findings table, and retest plan.", tags: ["report", "audit", "assurance"], variant: "audit" },
  { id: "data-report-compliance", name: "Report: compliance program status", description: "Framework obligations, control testing, and exceptions.", tags: ["report", "compliance", "grc"], variant: "compliance" },
  { id: "data-report-project-closure", name: "Report: project closure (handover & benefits)", description: "Sponsor sign-off, handover, and archive pointers.", tags: ["report", "project", "closure"], variant: "project_closure" },
];

const DATA_CHART = [
  { id: "data-chart-bar", name: "Chart data: bar (categories vs series)", description: "Tabular data ready for a bar/ column chart import.", tags: ["chart", "bar", "viz"], variant: "bar" },
  { id: "data-chart-line", name: "Chart data: line (time series)", description: "Rows as series, columns as time buckets.", tags: ["chart", "line", "time"], variant: "line" },
  { id: "data-chart-pie", name: "Chart data: pie (part-to-whole)", description: "Slices with checks for totals and 'Other' handling.", tags: ["chart", "pie", "share"], variant: "pie" },
  { id: "data-chart-scatter", name: "Chart data: scatter (x vs y)", description: "Points with optional z/color and outlier policy.", tags: ["chart", "scatter", "correlation"], variant: "scatter" },
  { id: "data-chart-histogram", name: "Chart data: histogram (bins)", description: "Binning parameters and cumulative % metadata.", tags: ["chart", "histogram", "distribution"], variant: "histogram" },
  { id: "data-chart-heatmap", name: "Chart data: heatmap (matrix)", description: "Row/column matrix with color scale and masking notes.", tags: ["chart", "heatmap", "matrix"], variant: "heatmap" },
  { id: "data-chart-funnel", name: "Chart data: funnel (stages)", description: "Stage counts, drop-off, and time-in-stage field.", tags: ["chart", "funnel", "pipeline"], variant: "funnel" },
  { id: "data-chart-gauge", name: "Chart data: gauge (single KPI vs band)", description: "Target/bands and as-of time for a KPI readout.", tags: ["chart", "gauge", "kpi"], variant: "gauge" },
  { id: "data-chart-radar", name: "Chart data: radar (multi-axis)", description: "Normalized series across axes; accessibility note.", tags: ["chart", "radar", "compare"], variant: "radar" },
  { id: "data-chart-treemap", name: "Chart data: treemap (hierarchy + size)", description: "Parent/child paths and rollup rules.", tags: ["chart", "treemap", "hierarchy"], variant: "treemap" },
];

const DATA_MGMT = [
  { id: "data-catalog-entry", name: "Data catalog entry (dataset)", description: "One dataset’s owners, class, and consumers in catalog form.", tags: ["data", "governance", "catalog"], variant: "catalog" },
  { id: "data-lineage-document", name: "Data lineage (diagram + field notes)", description: "Mermaid sketch plus field/PII and CDC notes.", tags: ["data", "lineage", "governance"], variant: "lineage" },
  { id: "data-quality-report", name: "Data quality report (periodic)", description: "Rules, pass rates, and remediation owners.", tags: ["data", "quality", "dq"], variant: "quality" },
  { id: "data-governance-policy", name: "Data governance policy (operating)", description: "Roles, principles, and tools/ enforcement hooks.", tags: ["data", "governance", "policy"], variant: "governance" },
  { id: "data-retention-schedule", name: "Retention schedule (by category)", description: "Categories, legal holds, and backup relationship.", tags: ["data", "retention", "compliance"], variant: "retention" },
  { id: "data-backup-schedule", name: "Backup schedule (RPO/RTO + tests)", description: "Schedules, regions, and restore test evidence pointer.", tags: ["data", "backup", "dr"], variant: "backup" },
  { id: "data-archival-policy", name: "Archival policy (cold + rehydration)", description: "Triggers, index metadata, and destruction after legal + fiscal hold.", tags: ["data", "archive", "compliance"], variant: "archival" },
  { id: "data-purge-criteria", name: "Purge runbook (delete data safely)", description: "Pre-checks, idempotent job, and approvals with audit log.", tags: ["data", "purge", "ops"], variant: "purge" },
  { id: "data-sla-metrics", name: "Data / pipeline SLAs and error budget", description: "SLO/SLA table, dependencies, and escalation.", tags: ["data", "sla", "sre"], variant: "sla" },
  { id: "data-access-request", name: "Data access request (DAR) workflow", description: "Justification, approvers, and re-cert for sensitive access.", tags: ["data", "access", "governance"], variant: "access" },
];

const SNIPPET_HEADERS = [
  { id: "snippets-header-document-formal", name: "Document header (formal)", description: "Centered cover-style header with classification line.", tags: ["header", "formal", "doc"], variant: "formal" },
  { id: "snippets-header-document-casual", name: "Document header (casual)", description: "Lightweight top matter with status and links.", tags: ["header", "casual", "doc"], variant: "casual" },
  { id: "snippets-header-document-minimal", name: "Document header (minimal)", description: "Title + one-line owner and date for fast pages.", tags: ["header", "minimal", "doc"], variant: "minimal" },
  { id: "snippets-footer-page-standard", name: "Page footer (standard)", description: "Copyright, links, and internal routing disclaimer.", tags: ["footer", "layout", "web"], variant: "footer_page_standard" },
  { id: "snippets-footer-page-with-links", name: "Page footer (with link columns)", description: "Multi-column sitemap / legal / company links (wire).", tags: ["footer", "nav", "web"], variant: "footer_with_links" },
  { id: "snippets-letterhead", name: "Letterhead (print / PDF cover)", description: "Logo, address, To/Re lines for business letters.", tags: ["letterhead", "print", "brand"], variant: "letterhead" },
  { id: "snippets-memo-header", name: "Memo header (To/From/Subject)", description: "Inter-office / engineering memo with classification.", tags: ["memo", "internal", "header"], variant: "memo_header" },
];

const SNIPPET_CALLOUTS = [
  { id: "snippets-callout-note", name: "Callout: note", description: "GFM-style callout for neutral notes and references.", tags: ["callout", "admonition", "docs"], variant: "note" },
  { id: "snippets-callout-tip", name: "Callout: tip", description: "Short tip with optional mini-table and actions.", tags: ["callout", "tip", "docs"], variant: "tip" },
  { id: "snippets-callout-warning", name: "Callout: warning", description: "Warning with risk framing and follow-ups.", tags: ["callout", "warning", "docs"], variant: "warning" },
  { id: "snippets-callout-danger", name: "Callout: danger", description: "High-severity / destructive op warning.", tags: ["callout", "danger", "safety"], variant: "danger" },
  { id: "snippets-callout-info", name: "Callout: info", description: "Informational admonition with context bullets.", tags: ["callout", "info", "docs"], variant: "info" },
  { id: "snippets-callout-success", name: "Callout: success", description: "Positive confirmation / rollout win pattern.", tags: ["callout", "success", "docs"], variant: "success" },
  { id: "snippets-callout-important", name: "Callout: important", description: "Emphasize must-read context before steps.", tags: ["callout", "important", "docs"], variant: "important" },
  { id: "snippets-callout-caution", name: "Callout: caution", description: "Caution (non-destructive) for subtle pitfalls.", tags: ["callout", "caution", "docs"], variant: "caution" },
  { id: "snippets-callout-example", name: "Callout: example", description: "Worked example in a callout (keep PII out).", tags: ["callout", "example", "docs"], variant: "example" },
  { id: "snippets-callout-quote", name: "Callout: quote", description: "Pull quote block with attribution for blogs.", tags: ["callout", "quote", "content"], variant: "quote" },
  { id: "snippets-callout-abstract", name: "Callout: abstract", description: "TL;DR abstract block for long posts.", tags: ["callout", "abstract", "content"], variant: "abstract" },
  { id: "snippets-callout-bug", name: "Callout: bug (known issue)", description: "Link to issues and workarounds for known bugs.", tags: ["callout", "bug", "support"], variant: "bug" },
  { id: "snippets-callout-question", name: "Callout: question (FAQ item)", description: "FAQ-style Q/A in a scannable admonition.", tags: ["callout", "faq", "help"], variant: "question" },
  { id: "snippets-callout-todo", name: "Callout: todo (authoring)", description: "Visible TODOs for open docs tasks.", tags: ["callout", "todo", "authoring"], variant: "todo" },
  { id: "snippets-callout-deprecated", name: "Callout: deprecated", description: "Deprecations with replacement pointers.", tags: ["callout", "deprecation", "docs"], variant: "deprecated" },
];

const SNIPPET_BADGES = [
  { id: "snippets-badge-build-status", name: "Badge: build status", description: "Shields-style CI / build table row pattern.", tags: ["badge", "ci", "readme"], variant: "build-status" },
  { id: "snippets-badge-coverage", name: "Badge: test coverage", description: "Coverage percent badge and policy note.", tags: ["badge", "coverage", "qa"], variant: "coverage" },
  { id: "snippets-badge-license", name: "Badge: license (SPDX)", description: "License summary badge in README header.", tags: ["badge", "license", "readme"], variant: "license" },
  { id: "snippets-badge-version", name: "Badge: version / semver", description: "Release or package version line.", tags: ["badge", "version", "release"], variant: "version" },
  { id: "snippets-badge-downloads", name: "Badge: downloads", description: "Generic download or pull counter badge scaffod.", tags: ["badge", "downloads", "package"], variant: "downloads" },
  { id: "snippets-badge-npm", name: "Badge: npm", description: "Package registry / npm line.", tags: ["badge", "npm", "js"], variant: "npm" },
  { id: "snippets-badge-pypi", name: "Badge: PyPI", description: "Package registry / PyPI line.", tags: ["badge", "pypi", "python"], variant: "pypi" },
  { id: "snippets-badge-docker", name: "Badge: Docker", description: "Container pulls or image reference pattern.", tags: ["badge", "docker", "ops"], variant: "docker" },
  { id: "snippets-badge-contributors", name: "Badge: contributors", description: "Contributor count and CoC / contribution pointer.", tags: ["badge", "community", "oss"], variant: "contributors" },
  { id: "snippets-badge-last-commit", name: "Badge: last commit", description: "Staleness / recency of repo activity (replace URL).", tags: ["badge", "activity", "oss"], variant: "last-commit" },
  { id: "snippets-badge-code-size", name: "Badge: code size", description: "LoC/zip or bundle size (methodology in footnote).", tags: ["badge", "size", "oss"], variant: "code-size" },
  { id: "snippets-badge-dependencies", name: "Badge: dependencies", description: "Dependency freshness / audit badge hook.", tags: ["badge", "security", "deps"], variant: "dependencies" },
  { id: "snippets-badge-platform-support", name: "Badge: platform support", description: "OS/Arch matrix in badge form.", tags: ["badge", "platform", "compat"], variant: "platform-support" },
  { id: "snippets-badge-stars", name: "Badge: stars", description: "Git host stars and social proof note (optional).", tags: ["badge", "stars", "oss"], variant: "stars" },
  { id: "snippets-badge-forks", name: "Badge: forks", description: "Forks count and forking / governance note.", tags: ["badge", "forks", "oss"], variant: "forks" },
];

const SNIPPET_LICENSES = [
  { id: "snippets-license-mit", name: "License block: MIT", description: "Standard MIT License text in Markdown.", tags: ["license", "oss", "mit"], variant: "mit" },
  { id: "snippets-license-apache-2-0", name: "License block: Apache 2.0 (header + NOTICE)", description: "Apache-2.0 short block with NOTICE template.", tags: ["license", "oss", "apache"], variant: "apache2" },
  { id: "snippets-license-gpl-3-0", name: "License block: GPL v3 (summary)", description: "GPL-3.0 key paragraphs with counsel disclaimer.", tags: ["license", "oss", "gpl"], variant: "gpl3" },
  { id: "snippets-license-bsd-2-clause", name: "License block: BSD 2-clause", description: "Two-clause BSD for small libraries.", tags: ["license", "oss", "bsd"], variant: "bsd2" },
  { id: "snippets-license-bsd-3-clause", name: "License block: BSD 3-clause", description: "Three-clause BSD with no-endorsement line.", tags: ["license", "oss", "bsd"], variant: "bsd3" },
  { id: "snippets-license-isc", name: "License block: ISC", description: "ISC License full text, common for small npm packages.", tags: ["license", "oss", "isc"], variant: "isc" },
  { id: "snippets-license-mpl-2-0", name: "License block: MPL 2.0", description: "MPL-2.0 per-file notice and counsel notes.", tags: ["license", "oss", "mozilla"], variant: "mpl2" },
  { id: "snippets-license-cc-by-4-0", name: "License block: CC BY 4.0 (content)", description: "Human-readable + attribution line for open content.", tags: ["license", "content", "cc"], variant: "cc_by" },
  { id: "snippets-license-cc-by-sa-4-0", name: "License block: CC BY-SA 4.0 (content)", description: "ShareAlike for creative works (not a software license by default).", tags: ["license", "content", "cc"], variant: "cc_bysa" },
  { id: "snippets-license-unlicense", name: "License block: The Unlicense", description: "Public domain dedication text.", tags: ["license", "oss", "unlicense"], variant: "unlicense" },
  { id: "snippets-license-wtfpl", name: "License block: WTFPL (not work-safe name)", description: "Polymorphic permissive; OSPO/ counsel review advised.", tags: ["license", "oss", "humor"], variant: "wtfpl" },
  { id: "snippets-license-proprietary", name: "License block: proprietary (all rights reserved)", description: "Tight internal / commercial “no use without agreement” block.", tags: ["license", "proprietary", "ip"], variant: "proprietary" },
];

const SNIPPET_TOCS = [
  { id: "snippets-toc-autogen-note", name: "TOC: auto-generated (note for authors)", description: "Explains to rely on SSG/anchors vs hand TOC.", tags: ["toc", "docs", "ssg"], variant: "autogen" },
  { id: "snippets-toc-manual-simple", name: "TOC: manual (simple list)", description: "Short anchor list and slug reminder.", tags: ["toc", "docs", "anchors"], variant: "manual_simple" },
  { id: "snippets-toc-manual-detailed", name: "TOC: manual (numbered, deep)", description: "Numbered top-levels with subordinate nesting.", tags: ["toc", "docs", "book"], variant: "manual_detailed" },
  { id: "snippets-toc-multilevel", name: "TOC: multilevel (nested bullets)", description: "Deep nested bullet outline for dense docs (web-only).", tags: ["toc", "outline", "longform"], variant: "multilevel" },
  { id: "snippets-toc-with-icons", name: "TOC: with icons/emoji in links", description: "Optional emoji markers with a11y cautions for landings.", tags: ["toc", "ux", "markdown"], variant: "with_icons" },
];

const SNIPPET_NAV = [
  { id: "snippets-nav-breadcrumb", name: "Navigation: breadcrumb (wire + SEO)", description: "Text breadcrumb and optional JSON-LD note.", tags: ["nav", "breadcrumb", "ux"], variant: "breadcrumb" },
  { id: "snippets-nav-sidebar", name: "Navigation: sidebar (docs IA)", description: "Two-level left nav and keyboard/ARIA notes.", tags: ["nav", "sidebar", "docs"], variant: "sidebar" },
  { id: "snippets-nav-top", name: "Navigation: top bar (4–6 items)", description: "Primary nav as a wire; narrow vs wide IA.", tags: ["nav", "header", "ux"], variant: "top" },
  { id: "snippets-nav-prev-next", name: "Navigation: previous / next in series", description: "Linear doc set navigation with empty-state ideas.", tags: ["nav", "pagination", "docs"], variant: "prev_next" },
  { id: "snippets-nav-quick-links", name: "Navigation: quick links (on-call / status)", description: "Short crisis / quick links for internal comms footers.", tags: ["nav", "links", "sre"], variant: "quick_links" },
  { id: "snippets-nav-back-to-top", name: "Navigation: back to top (a11y)", description: "Sticky or inline control with `prefers-reduced-motion`.", tags: ["nav", "a11y", "ux"], variant: "back_to_top" },
];

const SNIPPET_CARDS = [
  { id: "snippets-card-profile", name: "Card: profile (team)", description: "Photo + bio for org pages (PII/brand cautions).", tags: ["card", "team", "profile"], variant: "profile" },
  { id: "snippets-card-feature", name: "Card: feature (landing)", description: "Feature blurb with table of proof/ICP/CTA.", tags: ["card", "product", "landing"], variant: "feature" },
  { id: "snippets-card-pricing", name: "Card: pricing (plan blurb)", description: "3-plan sketched stack with legal note on public pricing pages.", tags: ["card", "pricing", "smb"], variant: "pricing" },
  { id: "snippets-card-testimonial", name: "Card: testimonial (customer quote)", description: "Quote, attribution, and approval/compliance footers.", tags: ["card", "social", "b2b"], variant: "testimonial" },
  { id: "snippets-card-stat", name: "Card: stat (KPI tile)", description: "Single metric + methodology footnote to avoid overclaiming.", tags: ["card", "kpi", "marketing"], variant: "stat" },
  { id: "snippets-card-team", name: "Card: team member (headshot+role)", description: "Grid item scaffod with `loading=lazy` note.", tags: ["card", "team", "dei"], variant: "team" },
];

const SNIPPET_COLL = [
  { id: "snippets-collapsible-faq-accordion", name: "Collapsible: FAQ (details/summary stack)", description: "`<details>` stack with analytics/ARIA notes.", tags: ["collapsible", "faq", "html"], variant: "faq" },
  { id: "snippets-collapsible-details", name: "Collapsible: long supplemental (default-open)", description: "Optional default-open for critical supplements.", tags: ["collapsible", "appendix", "ux"], variant: "details" },
  { id: "snippets-collapsible-nested", name: "Collapsible: nested (two levels)", description: "Nested details with mobile-UX and anti-XSS note.", tags: ["collapsible", "nested", "html"], variant: "nested" },
  { id: "snippets-collapsible-spoiler", name: "Collapsible: spoiler (hidden reveal)", description: "Spoiler details with moderation / a11y caveats.", tags: ["collapsible", "spoiler", "community"], variant: "spoiler" },
];

const LEGAL_LIST = [
  { id: "legal-compliance-privacy-policy-website", name: "Privacy policy (website, public)", description: "Public marketing site–style policy scaffod.", tags: ["privacy", "web", "gdpr"] },
  { id: "legal-compliance-privacy-policy-app", name: "Privacy policy (app)", description: "Mobile/desktop app + permissions + store policies.", tags: ["privacy", "app", "mobile"] },
  { id: "legal-compliance-privacy-policy-saas", name: "Privacy (SaaS / B2B controller-processor split)", description: "High-level controller vs processor and DPA link.", tags: ["privacy", "saas", "b2b"] },
  { id: "legal-compliance-gdpr-notice", name: "GDPR notice (Art. 13-14 type supplement)", description: "EEA+UK+CH addendum; not standalone advice.", tags: ["privacy", "gdpr", "eea"] },
  { id: "legal-compliance-ccpa-notice", name: "CCPA/CPRA notice at collection", description: "Categories table + sell/share/ SPI handling outline.", tags: ["privacy", "ccpa", "us"] },
  { id: "legal-compliance-children-privacy", name: "Children’s privacy (age gate, COPPA-style)", description: "Directed vs actual knowledge, VPC, school consent.", tags: ["privacy", "coppa", "kids"] },
  { id: "legal-compliance-cookie-policy-basic", name: "Cookie policy (basic)", description: "Cookie types and manage/opt-out line.", tags: ["cookies", "ePrivacy", "web"] },
  { id: "legal-compliance-cookie-policy-detailed", name: "Cookie policy (detailed inventory)", description: "Row table for trackers and lawful basis map.", tags: ["cookies", "pia", "web"] },
  { id: "legal-compliance-cookie-consent-banner-text", name: "Cookie consent: first-layer text", description: "Banner copy to pair with a CMP/ panel.", tags: ["cookies", "ux", "consent"] },
  { id: "legal-compliance-data-processing-agreement", name: "DPA (Art. 28) outline", description: "Exhibits, SCC/TOM, and sub-processor process.", tags: ["dpa", "gdpr", "b2b"] },
  { id: "legal-compliance-terms-of-service-website", name: "Terms of service (website, consumer/ light B2B)", description: "AUP, fees, IP, liability cap, term.", tags: ["terms", "web", "contract"] },
  { id: "legal-compliance-terms-of-service-app", name: "Terms of service (app / EULA for stores)", description: "App license, updates, and prohibited uses.", tags: ["terms", "app", "eula"] },
  { id: "legal-compliance-terms-of-service-saas", name: "Terms of service (SaaS, subscription)", description: "Order + DPA + AUP + export control hooks.", tags: ["terms", "saas", "b2b"] },
  { id: "legal-compliance-terms-of-use", name: "Terms of use (content/community site)", description: "UGC, moderation, takedown, account.", tags: ["terms", "community", "ugc"] },
  { id: "legal-compliance-acceptable-use-policy", name: "Acceptable use policy (network, API, UGC)", description: "Prohibited conduct and enforcement ladder.", tags: ["aup", "abuse", "net"] },
  { id: "legal-compliance-eula-basic", name: "EULA (basic, shrink-wrap)", description: "Short license to software binary with caps.", tags: ["eula", "license", "desktop"] },
  { id: "legal-compliance-eula-enterprise", name: "EULA (enterprise, seats, audit)", description: "Named users, VDI, and audit rights (outline).", tags: ["eula", "enterprise", "license"] },
  { id: "legal-compliance-subscription-agreement", name: "Subscription / order (commercials)", description: "SKU, term, true-up, and billing hooks.", tags: ["subscription", "order", "saas"] },
  { id: "legal-compliance-refund-policy", name: "Refund policy", description: "Eligibility, windows, and enterprise carve-outs.", tags: ["refund", "billing", "b2c"] },
  { id: "legal-compliance-cancellation-policy", name: "Cancellation / export (end of term)", description: "Notice, data export, delete attestation, re-joining.", tags: ["offboarding", "data", "saas"] },
  { id: "legal-compliance-nda-mutual", name: "NDA (mutual)", description: "Two-way confidential disclosure guardrails (outline).", tags: ["nda", "ip", "contract"] },
  { id: "legal-compliance-nda-one-way", name: "NDA (one-way)", description: "Unilateral recipient obligations (outline).", tags: ["nda", "ip", "contract"] },
  { id: "legal-compliance-sla-basic", name: "SLA (basic, credits)", description: "SLO, exclusions, and credit mechanism.", tags: ["sla", "b2b", "ops"] },
  { id: "legal-compliance-sla-enterprise", name: "SLA (enterprise, TAM, stronger remedies)", description: "Enterprise-grade SLA with named response paths (outline).", tags: ["sla", "enterprise", "support"] },
  { id: "legal-compliance-sla-uptime", name: "Uptime schedule (appendix)", description: "Measurement window and maintenance carve-outs (outline).", tags: ["sla", "sre", "uptime"] },
  { id: "legal-compliance-master-services-agreement", name: "Master Services Agreement (MSA)", description: "Umbrella order + SOWs + DPA (outline).", tags: ["msa", "b2b", "procurement"] },
  { id: "legal-compliance-statement-of-work", name: "Statement of Work (SOW)", description: "Scope, milestones, acceptance (outline).", tags: ["sow", "delivery", "services"] },
  { id: "legal-compliance-consulting-agreement", name: "Consulting / services agreement", description: "T&M / deliverables + IP assignment hooks (outline).", tags: ["services", "consulting", "ip"] },
  { id: "legal-compliance-freelance-contract", name: "Freelance / IC agreement", description: "SOW, IC classification, PII/ IP / non-solicit (outline).", tags: ["freelance", "ic", "hr"] },
  { id: "legal-compliance-licensing-agreement", name: "IP / software / content license", description: "Field, term, audit, and OSS in/out (outline).", tags: ["license", "ip", "content"] },
  { id: "legal-compliance-hipaa-compliance-checklist", name: "HIPAA compliance checklist (ops)", description: "BAA, ePHI map, and safeguards (high level).", tags: ["hipaa", "health", "compliance"] },
  { id: "legal-compliance-soc-2-controls", name: "SOC 2: control mapping notes", description: "CC/ A/ C mapping placeholders for Trust Services.", tags: ["soc2", "audit", "security"] },
  { id: "legal-compliance-pci-dss-checklist", name: "PCI DSS checklist (in-scope + SAQ path)", description: "Scope, CHD, segmentation, testing.", tags: ["pci", "payments", "compliance"] },
  { id: "legal-compliance-iso-27001-controls", name: "ISO 27001 / 27018 mapping", description: "SoA + ISMS and cloud customer duties (high level).", tags: ["iso27001", "isms", "cloud"] },
  { id: "legal-compliance-gdpr-compliance-checklist", name: "GDPR compliance program checklist (ops)", description: "RPA, DPIA, DSR, breach (high level, not legal advice).", tags: ["gdpr", "program", "grc"] },
  { id: "legal-compliance-accessibility-compliance-wcag", name: "WCAG 2.2 compliance & VPAT (outline)", description: "Audit, conformance targets, and exceptions log.", tags: ["wcag", "a11y", "508"] },
  { id: "legal-compliance-data-retention-policy", name: "Data retention & disposal policy (legal+records)", description: "Schedules, holds, and destruction certificates.", tags: ["retention", "records", "compliance"] },
  { id: "legal-compliance-data-breach-response-plan", name: "Data breach / IR response plan (privacy)", description: "Containment, comms, DPA, and regulator runbooks (outline).", tags: ["breach", "ir", "privacy"] },
  { id: "legal-compliance-vendor-security-questionnaire", name: "Vendor security questionnaire (RFP/TPRM)", description: "Question bank outline for B2B due diligence (outline).", tags: ["vendor", "tprm", "security"] },
  { id: "legal-compliance-security-policy", name: "Information security policy (org-wide)", description: "Acceptable use, access, and classification (outline).", tags: ["security", "policy", "isms"] },
  { id: "legal-compliance-incident-report-template", name: "Incident report (GRC) template", description: "What/when/who/where for initial incident capture.", tags: ["incident", "grc", "ir"] },
  { id: "legal-compliance-incident-post-mortem", name: "Incident post‑mortem (blameless) template", description: "Timeline, 5-why, and CAPA follow-through.", tags: ["incident", "rca", "sre"] },
  { id: "legal-compliance-audit-checklist-general", name: "Internal audit: general checklist", description: "Scope, sampling, and evidence list (outline).", tags: ["audit", "internal", "assurance"] },
  { id: "legal-compliance-audit-findings-report", name: "Audit findings report (auditee response)", description: "Finding table with severity and retest (outline).", tags: ["audit", "findings", "assurance"] },
  { id: "legal-compliance-corrective-action-plan", name: "Corrective action plan (CAP) template", description: "Owner, due date, verification metric per finding.", tags: ["capa", "audit", "governance"] },
  { id: "legal-compliance-risk-acceptance-form", name: "Risk acceptance / exception (residual risk)", description: "Business sign-off, expiry, and compensating controls.", tags: ["risk", "grc", "exception"] },
  { id: "legal-compliance-exception-request", name: "Exception request (GRC) template", description: "Policy exception with impact + approval chain.", tags: ["exception", "grc", "governance"] },
  { id: "legal-compliance-compliance-training-record", name: "Compliance training attestation (record)", description: "Who/when/what and LMS evidence pointers (outline).", tags: ["training", "compliance", "hr"] },
  { id: "legal-compliance-policy-acknowledgment", name: "Policy acknowledgment (employee / contractor)", description: "Attestation line + periodic re-attest (outline).", tags: ["policy", "ack", "hr"] },
  { id: "legal-compliance-whistleblower-report", name: "Whistleblower / ethics line intake (skeleton)", description: "Intake, triage, and anti-retaliation pointers (not legal advice).", tags: ["ethics", "whistle", "governance"] },
];
