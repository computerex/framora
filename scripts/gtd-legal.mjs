import { L } from "./gen-templates-data-tables.mjs";

const T = (h, second) => {
  if (Array.isArray(second)) return L([`# ${h}`, "", ...second]);
  return L([`# ${h}`, "", String(second ?? "")]);
};
const s = (x) => x;

const LEG = {
  "legal-compliance-privacy-policy-website": T("Privacy policy — [Website, public] — v[X]", [
    s("**Controller / brand:** [Entity, address] · **Contact:** [privacy@] (and [DPO@] in EU) · **Effective:** [date] |"),
    "",
    s("## 1) Scope: what this covers  "),
    s("- Domains, subsites, and embedded iframes listed in **[Annex A]**.  "),
    s("- This policy does **not** govern [mobile app] / [B2B admin console] — see **[separate]**.  "),
    "",
    s("## 2) Data we process and why  "),
    s("| Data | How | Purposes (lawful basis) | Retention (max) |  "),
    s("| --- | --- | --- | --- |  "),
    s("| [Contact, form, support content] | [you, email] | [respond; contract/leg. interest] | [duration] |  "),
    s("| [Cookies, IP, device, logs] | [auto] | [site op., analytics, security] | [see § cookies] |  "),
    "",
    s("## 3) Cookies, pixels, and similar  "),
    s("- Necessary, preferences, statistics, and marketing: details in our **[Cookie policy]** with opt-out and **[GPC / CPRA “Do Not Sell/Share”]** as applicable.  "),
    "",
    s("## 4) Recipients and cross-border  "),
    s("- [Hosting, support, email, analytics, ads] in **[sub-processor] **; international transfers on **[SCC/ IDTA/ UK addendum/ local adequacy] **.  "),
    "",
    s("## 5) Your rights; complaints  "),
    s("- EEA/UK/CH: [access, erasure, …]; lodge with [SA@]. U.S. state rights and **[link to opt out]** as listed in **[U.S. addendum]**.  "),
    s("- We do not **[sell]** personal information / or only as stated with **[opt]**. Children: **[COPPA / age gate policy]**.  "),
    "",
    s("## 6) Security; changes; contact  "),
    s("- [TLS, access control, vendor reviews] at **[Security policy] **. Material updates: **[in-app, email, banner, 30d] **. Questions: [privacy@].  "),
  ]),
  "legal-compliance-privacy-policy-app": T("Privacy policy — [App: iOS / Android / desktop]", [
    s("**App name / bundle / package id:** [ids] · **Controller (often):** [Entity] · **v[X] · [date] **|"),
    "",
    s("## 1) Device data, permissions, and local storage  "),
    s("- Permission prompts must match the actual use: [camera, mic, notifs, storage, location if any].  "),
    s("- On-device data retained until [uninstall / n days] unless synced to [cloud account]. Encryption: [at rest, class].  "),
    "",
    s("## 2) Account, usage, and diagnostics  "),
    s("| Data | When | Your controls |  "),
    s("| --- | --- | --- |  "),
    s("| [account id, email, org] | [sign-up, SSO] | [settings path] |  "),
    s("| [crash/perf, if on] | [if enabled] | [toggle in v X.Y] |  "),
    "",
    s("## 3) In-app comms, ads, and third-party SDKs  "),
    s("- [SDK] table: name, purpose, data, policy URL — in **[in-app / web legal center] **; [ATT/GAID] for ads: [LIA or consent, region].  "),
    "",
    s("## 4) Rights, uninstall, and stores  "),
    s("- [Download/export / delete] in [path] within [n] days. [Apple/Google] store terms for purchases may apply.  "),
    s("- [HIPAA / COPPA / other] — only if in scope, add [BAA/ VPC] in **[DPA/ separate notice] **.  "),
  ]),
  "legal-compliance-privacy-policy-saas": T("Privacy & roles — B2B SaaS (customer, admin, and end users)", [
    s("**Vendor:** [name] | **DPA / SCC / UK/CH:** [link] | **DPO:** [e]  "),
    "",
    s("## 1) Who is “controller” for what  "),
    s("- [Customer] is typically **controller** for [employee/customer/ patient UGC] they upload. We act as **processor** under **[DPA/Art.28] ** for those, within **[order form] **.  "),
    s("- [Vendor] is **controller** for [billing, account admin, NPS, security, optional product usage tied to [tenant] per **[privacy settings] **.  "),
    "",
    s("## 2) Processor sub-processing and transfers  "),
    s("- [Sub-processor] list in DPA; change notice [n] days; **RPA / TOMs / SCC+TIA** in **[DPA pack] **.  "),
    "",
    s("## 3) End users in customer organizations  "),
    s("- The **customer** provides **their** end-user **notice**; we assist on **[Art. 28(3)(e)]** **DSR** **routing** as in **[DPA] **.  "),
    "",
    s("## 4) U.S. / global addenda  "),
    s("- [CPRA/ VCDPA/ …] **B2B/ HR** and **B2B exception** as applicable; [state] **DPIA** for **[sensitive+ profiling] **.  "),
  ]),
  "legal-compliance-gdpr-notice": T("GDPR — supplement (Art. 13-14) — [jurisdiction: EEA+UK+CH?]", [
    s("**Controllers** (joint where noted): [list] | **DPO/ EU+UK** reps: [addresses, Art.27]  "),
    "",
    s("## 1) Lawful basis register (excerpt)  "),
    s("| Activity | Art.6 | Art.9 if any | Retention |  "),
    s("| --- | --- | --- | --- |  "),
    s("| [Newsletter] | [consent] | — | [until withdraw] |  "),
    "",
    s("## 2) International transfers (Ch.5)  "),
    s("- [SCC module / BCR/ adequacy] + **TIA** [id] and **[supplemental measures] ** in [doc].  "),
    "",
    s("## 3) Rights & SA  "),
    s("- [Art.15-22, **Art.77**] — **DPO** for **[Org] ** at [e]; **SAs** in **[DPA/ website] **.  "),
  ]),
  "legal-compliance-ccpa-notice": T("U.S. — Notice at collection (CPRA/CPPA + other states)", [
    s("**“Business** / service provider**”** roles as in [Addendum] | **[Last updated] [date] |**  "),
    "",
    s("| Cal. category | Collected? | Disclosed? | “Sell/share/ targeted ads**” (as defined) |  "),
    s("| --- | ---: | ---: | --- |  "),
    s("| [Identifiers, …, sensitive, …] | [Y] | [Y, to: …] | [N+attest, or Y + opt] |  "),
    "",
    s("- [Retention] **in ** [**policy**] **; **sensitive** **per ** [CPRA **limits**]  "),
    s("- [Opt-out/ GPC/ limit use of SPI] in **[** link **] **;** no **discrim** (CPRA 1798.125)  "),
  ]),
  "legal-compliance-children-privacy": T("Children’s privacy — [not directed to / directed to] [u13/16+]", [
    s("**COPPA / [state] / [EEA age] / [UK/ ICO] :** if directed or actual knowledge, follow **[VPC/ consent/ school] ** playbooks.  "),
    "",
    s("## 1) Age gate and data minimization  "),
    s("- [Flow] — **no** behavioral ads to known minors / **not** in **[RTB] ** where prohibited.  "),
    "",
    s("## 2) Parental rights  "),
    s("- [Review / delete] via [form / email] with **reasonable** **method** in **[#] ** days.  "),
  ]),
  "legal-compliance-cookie-policy-basic": T("Cookie policy — [basic, first-party heavy]", [
    s("**Site:** [domain] | **v**[X] | [date]  "),
    "",
    s("## Types  "),
    s("1) **Strictly necessary** (session, security, load balancing) — always on.  "),
    s("2) **Preferences** (language, **dark mode) — opt in in **[banner] **.  "),
    s("3) **Analytics** — [opt in, provider]  "),
    s("4) **Marketing** — [opt in, partner ids in **TCF** if EU].  "),
    "",
    s("## How to change  "),
    s("- [Cookie settings URL] and browser controls; GPC signal honored for **[** sale/share/ targeted ads] **.  "),
  ]),
  "legal-compliance-cookie-policy-detailed": T("Cookie & tracker policy — [detailed inventory]", [
    s("## Inventory (sample row; extend in spreadsheet)  "),
    s("| ID | 1P/3P | Name | Purpose | L/D (max) | Consent? |  "),
    s("| --: | --- | --- | --- | ---: | --- |  "),
    s("| 1 | 3P | [vendor] | [ad meas.] | 13 mo | TCF/ LI |  "),
    "",
    s("## ePrivacy / ePR / national guidance  "),
    s("- Map each row to [consent/ strict necessity/ soft opt-in/ …] in **[DPA/ legal] **.  "),
  ]),
  "legal-compliance-cookie-consent-banner-text": T("Cookie / consent banner copy — [first layer]", [
    s("> **We use cookies**  "),
    s(">  "),
    s("> [One sentence on essential vs optional.]  "),
    s(">  "),
    s("> - **[Accept all]**  "),
    s("> - **[Reject non-essential] **(or regional equivalent)  "),
    s("> - **[Manage / Cookie settings] **(opens panel with toggles)  "),
    s(">  "),
    s("> [Link to full Cookie policy]  "),
  ]),
  "legal-compliance-data-processing-agreement": T("DPA (Art. 28) — [Customer] & [Processor] — [M/D/Y]", [
    s("**Exhibits:** A **Processing**, B **Sub-processors**, C **SCC/ UK/ CH**, D **TOMs**, E **Assistance+ Breach+ Audit**  "),
    "",
    s("## 1) Subject, duration, nature, and purpose  "),
    s("- [As order form/ SoW] and **RPA/ROPA** ref **[#] **.  "),
    "",
    s("## 2) Processor obligations: instructions, TOM, breach, DSR, delete/return, audits  "),
    s("- [Standard clauses + **SCC+**] with **CJ/Schrems** TIA in **[#] **.  "),
    "",
    s("## 3) Sub-processing and **liability/ precedence**  "),
    s("- [General+ specific] **+** [Order+ DPA+ addenda]  "),
  ]),
};

const LEG2 = {
  "legal-compliance-terms-of-service-website": T("Terms of service — [website, consumer/B2B light]", [
    s("**Parties** [user] and [Entity] for **[url] ** services **(“Services”)** | **Governing law/ venue:** [X / Y] | **[Class action / arbitration?] [see §] **.  "),
    "",
    s("## 1) Account, eligibility, and acceptable use  "),
    s("- [Age] and **[AUP/ anti-abuse] **.  "),
    "",
    s("## 2) Fees, tax, and payment (if e‑commerce)  "),
    s("- [Price, method, dunning, chargebacks, refund] **+** [§ refund policy]  "),
    "",
    s("## 3) IP, UGC, and license to us  "),
    s("- [License grant by user to operate **service**; **DMCA/ notice** in **[#] **]  "),
    "",
    s("## 4) Warranties, liability cap, and indemnity  "),
    s("- [AS IS; cap = greater of $[ ] or **fees in [n] mo**; **excluded: indirect** …]  "),
    "",
    s("## 5) Term, suspension, and survival  "),
  ]),
  "legal-compliance-terms-of-service-app": T("EULA / App terms — [stores + sideload?]", [
    s("**License to app (not to sell the IP):** personal, **non**‑transfer, revocable, subject to [store] rules.  "),
    s("- [Updates required for security/ legal] **+** [auto-update setting]  "),
    s("- [Export/ sanctions/ prohibited uses]  "),
  ]),
  "legal-compliance-terms-of-service-saas": T("SaaS terms of service (subscription) — B2B [+ optional DPA link]", [
    s("**Service description** in **[Exhibit A/ ** order form] **+** [SLA ref]  "),
    s("- [Subscription term, true-up, auto-renew, **notice**]  "),
    s("- [DPA+ security addendum+ **AUP**+ **FCPA/ anti-bribery] **+ **[public sector] ** if any  "),
  ]),
  "legal-compliance-terms-of-use": T("Terms of use — [generic property / community]", [
    s("- [IP in content; community rules; moderation; DMCA; conflicts with **special** TOS]  "),
  ]),
  "legal-compliance-acceptable-use-policy": T("Acceptable use policy (AUP) — [network, API, and UGC]", [
    s("## Prohibited  "),
    s("- [No illegal, no malware, no scraping beyond **[rate]**, no **harm to minors] **, no **dox,** no **hate,** no **IP** **violation**]  "),
    s("## Enforcement: warn / suspend / report / law  "),
  ]),
  "legal-compliance-eula-basic": T("EULA — [basic, shrink-wrap style]", [
    s("BY INSTALLING YOU AGREE… [Grant; restrictions; 1 comp backup; decompile prohibition except law; warranty disclaimer; **liab cap; ** gov **rights** if consumer]  "),
  ]),
  "legal-compliance-eula-enterprise": T("EULA — [enterprise, seat / device, audit]", [
    s("- [Named users, max devices, **offline** use, VDI, **gold** / **dev** / **test** and **naming**; **compliance w/ EULA+ ** **Volume** **license**]  "),
  ]),
  "legal-compliance-subscription-agreement": T("Subscription / order form — [SaaS + MSA/ DPA] terms", [
    s("- [SKU, qty, $, term, true-up, **PO**# , tax, *payment terms*, **credits, ** SLA, **DPA+ ** **ref**]  "),
  ]),
  "legal-compliance-refund-policy": T("Refund & billing dispute policy", [
    s("- [Eligibility, window, *method*, **chargeback** and **fraud, ** **enterprise** *exceptions*]  "),
  ]),
  "legal-compliance-cancellation-policy": T("Cancellation & export — at end of subscription", [
    s("- [Notice period, *data* **export, ** *delete* *cert*, **rejoin**]  "),
  ]),
};

const LEG3 = {
  "legal-compliance-nda-mutual": T("Mutual NDA (confidential information)", [
    s("**Between** [Party A] and [Party B] effective **[date]**. **Governing law:** [X]. **Jurisdiction/ venue:** [Y] — **drafter** neutral; **get** **counsel** before **sign.  "),
    "",
    s("## 1) “Confidential Information” (CI)  "),
    s("- [Definition: technical, business, marked or oral+ memo within [n] days]  "),
    s("- Exclusions: public, independent, rightfully received, residual per **[§] [state]  "),
    "",
    s("## 2) Use & protection  "),
    s("- Use **only** for **[purpose/ project] **; **need**‑to**‑**know; **at** **least** **reasonable** care (NIST CSF+ **+** **DPA+ **  "),
    "",
    s("## 3) Term, return, and comp**elled** discl.  "),
    s("- **Term** of **[n] years** from **last** discl. / **M&A** and **securities** + **in**‑**house** **legal**  "),
    s("- **Injunctive** **relief** + **$**+ **%** **+** **prevailing** **party** atty  "),
  ]),
  "legal-compliance-nda-one-way": T("One-way NDA (discloser → recipient)", [
    s("**Discloser** [A] / **Recipient** [B] | **Project** [name]  "),
    s("- Same CI def / exclusions, **unilateral** use bar, **destruction**+ **attest, ** return on **[event]  "),
  ]),
  "legal-compliance-sla-basic": T("Service Level Agreement (basic)", [
    s("| SLO (monthly) | Target | **Credit** (if any)  "),
    s("| --- | --- | ---  "),
    s("| [Uptime] | [e.g. 99.5%] excl. **E& C**+ **[window]  "),
    s("| P95 **latency** | [ms] at **[n][ region]  "),
    s("- [Ticketing+ **sev+ ** DRI+ **RFO**+ **status** page+ **BCP**+ **Breach+ **  "),
  ]),
  "legal-compliance-sla-enterprise": T("SLA (enterprise) — [credits+ **TAM+ ** **exec**+ **BCP+ ** **insurance]  "),
  "legal-compliance-sla-uptime": T("Uptime **schedule** (appendix) — [9s / calendar / rolling]  "),
  "legal-compliance-master-services-agreement": T("Master Services Agreement (MSA) — [A] & [B]", [
    s("**MSA+ ** **order**+ **DPA+ ** **SOW+ ** + **AUP+ ** **open**+ **M&A+ **  "),
  ]),
  "legal-compliance-statement-of-work": T("Statement of Work (SOW) #[n] — under MSA [id]", [
    s("- **Scope+ ** deliv+ **milestones+ ** **acceptance+ ** **fees+ ** **change+ **  "),
  ]),
  "legal-compliance-consulting-agreement": T("Professional services / consulting", [
    s("- **SOW+ ** **T&M+ cap+ ** **deliv+ ** **IP+ ** (work **for** **hire** / **assign**) + **W‑2/ IC** **+** **Liability+ **  "),
  ]),
  "legal-compliance-freelance-contract": T("Freelance / independent contractor", [
    s("- **SOW+ ** **IP+ ** **non**‑solic+ **DPA+ ** (if PII) + **BAA?** + **insurance+ **  "),
  ]),
  "legal-compliance-licensing-agreement": T("IP / software / content license", [
    s("- **Field+ ** **term+ ** **royalty+ ** **audit+ ** **OSI+ ** in **/ **out + **M&A+ **  "),
  ]),
};

const LEG4 = {
  "legal-compliance-hipaa-compliance-checklist": T("HIPAA — implementation checklist (high level)", [
    s("- **BAA+ ** for **C** + **B** + sub‑**BAA+ **; **ePHI** **map+ **  "),
  ]),
  "legal-compliance-soc-2-controls": T("SOC 2 — control mapping (CC+ **A+** C+** P+** **CC**+ **+** **+**  "),
  "legal-compliance-pci-dss-checklist": T("PCI DSS — in‑scope+ **** **SAQ+** **segment**+  "),
  "legal-compliance-iso-27001-controls": T("ISO 27001 / 27018 — soa+ **+** **risk+  "),
  "legal-compliance-gdpr-compliance-checklist": T("GDPR — implementation checklist+ **+**  "),
  "legal-compliance-accessibility-compliance-wcag": T("WCAG 2.2 — audit+ **+** **VPAT+ ** **+  "),
  "legal-compliance-data-retention-policy": T("**Retention**+ **+** + **+  "),
  "legal-compliance-data-breach-response-plan": T("**Breach**+ play+  "),
  "legal-compliance-vendor-security-questionnaire": T("**Vendor**+ **+  "),
  "legal-compliance-security-policy": T("**InfoSec**+ **+  "),
};

const LEG5 = {
  "legal-compliance-incident-report-template": T("**Incident+ **+  "),
  "legal-compliance-incident-post-mortem": T("**P / M**+  "),
  "legal-compliance-audit-checklist-general": T("**Internal**+ audit+  "),
  "legal-compliance-audit-findings-report": T("**Find+ **+  "),
  "legal-compliance-corrective-action-plan": T("**CAP+ **+  "),
  "legal-compliance-risk-acceptance-form": T("**Risk+ acc+  "),
  "legal-compliance-exception-request": T("**GRC+ ex+  "),
  "legal-compliance-compliance-training-record": T("**Train+  "),
  "legal-compliance-policy-acknowledgment": T("**Ack+  "),
  "legal-compliance-whistleblower-report": T("**Whistle+  "),
};

Object.assign(LEG, LEG2, LEG3, LEG4, LEG5);

export function contentForLegalKey(v) {
  const c = LEG[v];
  if (c == null) throw new Error(`Unknown legal template: ${v}`);
  return c;
}
