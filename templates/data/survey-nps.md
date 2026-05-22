# Net Promoter®-style (NPS) follow-up

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
- **If using “NPS” or Net Promoter publicly,** follow Satmetrix/licensor guidance. **Internal-only:** label as *likelihood to recommend* if unsure.