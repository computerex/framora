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
    id: "writing-blog-tech",
    name: "Blog post (tech)",
    category: "writing",
    description: "A tech style blog post for your audience. a timely tech topic with readers who ship software",
    tags: ["blog","tech","markdown","draft"],
    content: `# [Compelling title about a timely tech topic with readers who ship software]

> **Hook / angle:** Readers should leave with a decision rule or a checklist they can use Monday morning.

## Who this is for
- **Primary audience:** [Role or reader profile]
- **Reading time:** [X] minutes | **Format:** blog post

## One-line thesis
[State the single claim you will prove; delete if narrative-only.]

## Outline
1. [Opening: context + why this matters now]
2. [Body section: main insight / experience]
3. [Body section: evidence, data, or examples — link sources]
4. [Body section: trade-offs, risks, or counterpoints]
5. [Close: summary + concrete takeaway + optional CTA]

## Key points
- **[Point 1]:** [1–2 sentences]
- **[Point 2]:** [1–2 sentences]
- **[Point 3]:** [1–2 sentences]
- **[Point 4]:** [1–2 sentences — optional]

## Body draft
### Section 1 — [Name]
[Paragraph with specifics: names, numbers, tools, or scenarios.]

| Idea | Example / detail | Link |
| --- | --- | --- |
| [Concept] | [Short evidence] | [url] |

### Section 2 — [Name]
- **Observation:** [What you saw / measured / felt]
- **Implication:** [So what for the reader?]

\`\`\`
# Optional: pseudo-code, CLI, or config snippet (remove if N/A)
[command or snippet]
\`\`\`

### Section 3 — [Name]
[Deeper analysis; acknowledge nuance. Avoid hand-waving: cite sources.]

## Conclusion
- **Takeaway:** [One sentence the reader can quote]
- **Next step:** [Actionable next step; remove if N/A]
- **Call to action:** [Subscribe, comment, try X — or delete]

## Meta (optional, delete before publish)
- **Sources:** [List URLs / papers]
- **Disclosures:** [Sponsorship, employer, stock — or none]`,
  },
  {
    id: "writing-blog-tutorial",
    name: "Blog post (tutorial)",
    category: "writing",
    description: "A tutorial style blog post for your audience. a hands-on walkthrough of a specific task",
    tags: ["blog","tutorial","markdown","draft"],
    content: `# [Compelling title about a hands-on walkthrough of a specific task]

> **Hook / angle:** A reader can follow without guessing missing steps, with failure modes called out.

## Who this is for
- **Primary audience:** [Role or reader profile]
- **Reading time:** [X] minutes | **Format:** blog post

## One-line thesis
[State the single claim you will prove; delete if narrative-only.]

## Outline
1. [Opening: context + why this matters now]
2. [Body section: main insight / experience]
3. [Body section: evidence, data, or examples — link sources]
4. [Body section: trade-offs, risks, or counterpoints]
5. [Close: summary + concrete takeaway + optional CTA]

## Key points
- **[Point 1]:** [1–2 sentences]
- **[Point 2]:** [1–2 sentences]
- **[Point 3]:** [1–2 sentences]
- **[Point 4]:** [1–2 sentences — optional]

## Body draft
### Section 1 — [Name]
[Paragraph with specifics: names, numbers, tools, or scenarios.]

| Idea | Example / detail | Link |
| --- | --- | --- |
| [Concept] | [Short evidence] | [url] |

### Section 2 — [Name]
- **Observation:** [What you saw / measured / felt]
- **Implication:** [So what for the reader?]

\`\`\`
# Optional: pseudo-code, CLI, or config snippet (remove if N/A)
[command or snippet]
\`\`\`

### Section 3 — [Name]
[Deeper analysis; acknowledge nuance. Avoid hand-waving: cite sources.]

## Conclusion
- **Takeaway:** [One sentence the reader can quote]
- **Next step:** [Actionable next step; remove if N/A]
- **Call to action:** [Subscribe, comment, try X — or delete]

## Meta (optional, delete before publish)
- **Sources:** [List URLs / papers]
- **Disclosures:** [Sponsorship, employer, stock — or none]`,
  },
  {
    id: "writing-blog-opinion",
    name: "Blog post (opinion)",
    category: "writing",
    description: "A opinion style blog post for your audience. a debatable take grounded in your domain",
    tags: ["blog","opinion","markdown","draft"],
    content: `# [Compelling title about a debatable take grounded in your domain]

> **Hook / angle:** You argue one thesis and steel-man the best objection.

## Who this is for
- **Primary audience:** [Role or reader profile]
- **Reading time:** [X] minutes | **Format:** blog post

## One-line thesis
[State the single claim you will prove; delete if narrative-only.]

## Outline
1. [Opening: context + why this matters now]
2. [Body section: main insight / experience]
3. [Body section: evidence, data, or examples — link sources]
4. [Body section: trade-offs, risks, or counterpoints]
5. [Close: summary + concrete takeaway + optional CTA]

## Key points
- **[Point 1]:** [1–2 sentences]
- **[Point 2]:** [1–2 sentences]
- **[Point 3]:** [1–2 sentences]
- **[Point 4]:** [1–2 sentences — optional]

## Body draft
### Section 1 — [Name]
[Paragraph with specifics: names, numbers, tools, or scenarios.]

| Idea | Example / detail | Link |
| --- | --- | --- |
| [Concept] | [Short evidence] | [url] |

### Section 2 — [Name]
- **Observation:** [What you saw / measured / felt]
- **Implication:** [So what for the reader?]

\`\`\`
# Optional: pseudo-code, CLI, or config snippet (remove if N/A)
[command or snippet]
\`\`\`

### Section 3 — [Name]
[Deeper analysis; acknowledge nuance. Avoid hand-waving: cite sources.]

## Conclusion
- **Takeaway:** [One sentence the reader can quote]
- **Next step:** [Actionable next step; remove if N/A]
- **Call to action:** [Subscribe, comment, try X — or delete]

## Meta (optional, delete before publish)
- **Sources:** [List URLs / papers]
- **Disclosures:** [Sponsorship, employer, stock — or none]`,
  },
  {
    id: "writing-blog-listicle",
    name: "Blog post (listicle)",
    category: "writing",
    description: "A listicle style blog post for your audience. a scannable set of takeaways (still substantive)",
    tags: ["blog","listicle","markdown","draft"],
    content: `# [Compelling title about a scannable set of takeaways (still substantive)]

> **Hook / angle:** Each point earns its number with a concrete example or data.

## Who this is for
- **Primary audience:** [Role or reader profile]
- **Reading time:** [X] minutes | **Format:** blog post

## One-line thesis
[State the single claim you will prove; delete if narrative-only.]

## Outline
1. [Opening: context + why this matters now]
2. [Body section: main insight / experience]
3. [Body section: evidence, data, or examples — link sources]
4. [Body section: trade-offs, risks, or counterpoints]
5. [Close: summary + concrete takeaway + optional CTA]

## Key points
- **[Point 1]:** [1–2 sentences]
- **[Point 2]:** [1–2 sentences]
- **[Point 3]:** [1–2 sentences]
- **[Point 4]:** [1–2 sentences — optional]

## Body draft
### Section 1 — [Name]
[Paragraph with specifics: names, numbers, tools, or scenarios.]

| Idea | Example / detail | Link |
| --- | --- | --- |
| [Concept] | [Short evidence] | [url] |

### Section 2 — [Name]
- **Observation:** [What you saw / measured / felt]
- **Implication:** [So what for the reader?]

\`\`\`
# Optional: pseudo-code, CLI, or config snippet (remove if N/A)
[command or snippet]
\`\`\`

### Section 3 — [Name]
[Deeper analysis; acknowledge nuance. Avoid hand-waving: cite sources.]

## Conclusion
- **Takeaway:** [One sentence the reader can quote]
- **Next step:** [Actionable next step; remove if N/A]
- **Call to action:** [Subscribe, comment, try X — or delete]

## Meta (optional, delete before publish)
- **Sources:** [List URLs / papers]
- **Disclosures:** [Sponsorship, employer, stock — or none]`,
  },
  {
    id: "writing-blog-review",
    name: "Blog post (review)",
    category: "writing",
    description: "A review style blog post for your audience. a critical take on a product, book, or service",
    tags: ["blog","review","markdown","draft"],
    content: `# [Compelling title about a critical take on a product, book, or service]

> **Hook / angle:** Verdict, criteria, who it is for, and at least one honest limitation.

## Who this is for
- **Primary audience:** [Role or reader profile]
- **Reading time:** [X] minutes | **Format:** blog post

## One-line thesis
[State the single claim you will prove; delete if narrative-only.]

## Outline
1. [Opening: context + why this matters now]
2. [Body section: main insight / experience]
3. [Body section: evidence, data, or examples — link sources]
4. [Body section: trade-offs, risks, or counterpoints]
5. [Close: summary + concrete takeaway + optional CTA]

## Key points
- **[Point 1]:** [1–2 sentences]
- **[Point 2]:** [1–2 sentences]
- **[Point 3]:** [1–2 sentences]
- **[Point 4]:** [1–2 sentences — optional]

## Body draft
### Section 1 — [Name]
[Paragraph with specifics: names, numbers, tools, or scenarios.]

| Idea | Example / detail | Link |
| --- | --- | --- |
| [Concept] | [Short evidence] | [url] |

### Section 2 — [Name]
- **Observation:** [What you saw / measured / felt]
- **Implication:** [So what for the reader?]

\`\`\`
# Optional: pseudo-code, CLI, or config snippet (remove if N/A)
[command or snippet]
\`\`\`

### Section 3 — [Name]
[Deeper analysis; acknowledge nuance. Avoid hand-waving: cite sources.]

## Conclusion
- **Takeaway:** [One sentence the reader can quote]
- **Next step:** [Actionable next step; remove if N/A]
- **Call to action:** [Subscribe, comment, try X — or delete]

## Meta (optional, delete before publish)
- **Sources:** [List URLs / papers]
- **Disclosures:** [Sponsorship, employer, stock — or none]`,
  },
  {
    id: "writing-blog-comparison",
    name: "Blog post (comparison)",
    category: "writing",
    description: "A comparison style blog post for your audience. a side-by-side of two or more options",
    tags: ["blog","comparison","markdown","draft"],
    content: `# [Compelling title about a side-by-side of two or more options]

> **Hook / angle:** Clear criteria, trade-offs table, and a recommendation with caveats.

## Who this is for
- **Primary audience:** [Role or reader profile]
- **Reading time:** [X] minutes | **Format:** blog post

## One-line thesis
[State the single claim you will prove; delete if narrative-only.]

## Outline
1. [Opening: context + why this matters now]
2. [Body section: main insight / experience]
3. [Body section: evidence, data, or examples — link sources]
4. [Body section: trade-offs, risks, or counterpoints]
5. [Close: summary + concrete takeaway + optional CTA]

## Key points
- **[Point 1]:** [1–2 sentences]
- **[Point 2]:** [1–2 sentences]
- **[Point 3]:** [1–2 sentences]
- **[Point 4]:** [1–2 sentences — optional]

## Body draft
### Section 1 — [Name]
[Paragraph with specifics: names, numbers, tools, or scenarios.]

| Idea | Example / detail | Link |
| --- | --- | --- |
| [Concept] | [Short evidence] | [url] |

### Section 2 — [Name]
- **Observation:** [What you saw / measured / felt]
- **Implication:** [So what for the reader?]

\`\`\`
# Optional: pseudo-code, CLI, or config snippet (remove if N/A)
[command or snippet]
\`\`\`

### Section 3 — [Name]
[Deeper analysis; acknowledge nuance. Avoid hand-waving: cite sources.]

## Conclusion
- **Takeaway:** [One sentence the reader can quote]
- **Next step:** [Actionable next step; remove if N/A]
- **Call to action:** [Subscribe, comment, try X — or delete]

## Meta (optional, delete before publish)
- **Sources:** [List URLs / papers]
- **Disclosures:** [Sponsorship, employer, stock — or none]`,
  },
  {
    id: "writing-blog-case-study",
    name: "Blog post (case study)",
    category: "writing",
    description: "A case study style blog post for your audience. a real situation with context, action, and outcome",
    tags: ["blog","case","markdown","draft"],
    content: `# [Compelling title about a real situation with context, action, and outcome]

> **Hook / angle:** Sufficient detail to learn from without breaking confidentiality; anonymize as needed.

## Who this is for
- **Primary audience:** [Role or reader profile]
- **Reading time:** [X] minutes | **Format:** blog post

## One-line thesis
[State the single claim you will prove; delete if narrative-only.]

## Outline
1. [Opening: context + why this matters now]
2. [Body section: main insight / experience]
3. [Body section: evidence, data, or examples — link sources]
4. [Body section: trade-offs, risks, or counterpoints]
5. [Close: summary + concrete takeaway + optional CTA]

## Key points
- **[Point 1]:** [1–2 sentences]
- **[Point 2]:** [1–2 sentences]
- **[Point 3]:** [1–2 sentences]
- **[Point 4]:** [1–2 sentences — optional]

## Body draft
### Section 1 — [Name]
[Paragraph with specifics: names, numbers, tools, or scenarios.]

| Idea | Example / detail | Link |
| --- | --- | --- |
| [Concept] | [Short evidence] | [url] |

### Section 2 — [Name]
- **Observation:** [What you saw / measured / felt]
- **Implication:** [So what for the reader?]

\`\`\`
# Optional: pseudo-code, CLI, or config snippet (remove if N/A)
[command or snippet]
\`\`\`

### Section 3 — [Name]
[Deeper analysis; acknowledge nuance. Avoid hand-waving: cite sources.]

## Conclusion
- **Takeaway:** [One sentence the reader can quote]
- **Next step:** [Actionable next step; remove if N/A]
- **Call to action:** [Subscribe, comment, try X — or delete]

## Meta (optional, delete before publish)
- **Sources:** [List URLs / papers]
- **Disclosures:** [Sponsorship, employer, stock — or none]`,
  },
  {
    id: "writing-blog-interview",
    name: "Blog post (interview)",
    category: "writing",
    description: "A interview style blog post for your audience. Q&A with an expert in [field] about [topic] ",
    tags: ["blog","interview","markdown","draft"],
    content: `# [Compelling title about Q&A with an expert in [field] about [topic] ]

> **Hook / angle:** The reader gets insight they could not get from a generic article.

## Who this is for
- **Primary audience:** [Role or reader profile]
- **Reading time:** [X] minutes | **Format:** blog post

## One-line thesis
[State the single claim you will prove; delete if narrative-only.]

## Outline
1. [Opening: context + why this matters now]
2. [Body section: main insight / experience]
3. [Body section: evidence, data, or examples — link sources]
4. [Body section: trade-offs, risks, or counterpoints]
5. [Close: summary + concrete takeaway + optional CTA]

## Key points
- **[Point 1]:** [1–2 sentences]
- **[Point 2]:** [1–2 sentences]
- **[Point 3]:** [1–2 sentences]
- **[Point 4]:** [1–2 sentences — optional]

## Body draft
### Section 1 — [Name]
[Paragraph with specifics: names, numbers, tools, or scenarios.]

| Idea | Example / detail | Link |
| --- | --- | --- |
| [Concept] | [Short evidence] | [url] |

### Section 2 — [Name]
- **Observation:** [What you saw / measured / felt]
- **Implication:** [So what for the reader?]

\`\`\`
# Optional: pseudo-code, CLI, or config snippet (remove if N/A)
[command or snippet]
\`\`\`

### Section 3 — [Name]
[Deeper analysis; acknowledge nuance. Avoid hand-waving: cite sources.]

## Conclusion
- **Takeaway:** [One sentence the reader can quote]
- **Next step:** [Actionable next step; remove if N/A]
- **Call to action:** [Subscribe, comment, try X — or delete]

## Meta (optional, delete before publish)
- **Sources:** [List URLs / papers]
- **Disclosures:** [Sponsorship, employer, stock — or none]`,
  },
  {
    id: "writing-blog-guest-post",
    name: "Blog post (guest post)",
    category: "writing",
    description: "A guest post style blog post for your audience. a bylined piece for [host site] in their voice+ yours",
    tags: ["blog","guest","markdown","draft"],
    content: `# [Compelling title about a bylined piece for [host site] in their voice+ yours]

> **Hook / angle:** Align with host audience; 1 CTA; bio line ready.

## Who this is for
- **Primary audience:** [Role or reader profile]
- **Reading time:** [X] minutes | **Format:** blog post

## One-line thesis
[State the single claim you will prove; delete if narrative-only.]

## Outline
1. [Opening: context + why this matters now]
2. [Body section: main insight / experience]
3. [Body section: evidence, data, or examples — link sources]
4. [Body section: trade-offs, risks, or counterpoints]
5. [Close: summary + concrete takeaway + optional CTA]

## Key points
- **[Point 1]:** [1–2 sentences]
- **[Point 2]:** [1–2 sentences]
- **[Point 3]:** [1–2 sentences]
- **[Point 4]:** [1–2 sentences — optional]

## Body draft
### Section 1 — [Name]
[Paragraph with specifics: names, numbers, tools, or scenarios.]

| Idea | Example / detail | Link |
| --- | --- | --- |
| [Concept] | [Short evidence] | [url] |

### Section 2 — [Name]
- **Observation:** [What you saw / measured / felt]
- **Implication:** [So what for the reader?]

\`\`\`
# Optional: pseudo-code, CLI, or config snippet (remove if N/A)
[command or snippet]
\`\`\`

### Section 3 — [Name]
[Deeper analysis; acknowledge nuance. Avoid hand-waving: cite sources.]

## Conclusion
- **Takeaway:** [One sentence the reader can quote]
- **Next step:** [Actionable next step; remove if N/A]
- **Call to action:** [Subscribe, comment, try X — or delete]

## Meta (optional, delete before publish)
- **Sources:** [List URLs / papers]
- **Disclosures:** [Sponsorship, employer, stock — or none]`,
  },
  {
    id: "writing-blog-roundup",
    name: "Blog post (roundup)",
    category: "writing",
    description: "A roundup style blog post for your audience. curated links and commentary for [timeframe] in [niche] ",
    tags: ["blog","roundup","markdown","draft"],
    content: `# [Compelling title about curated links and commentary for [timeframe] in [niche] ]

> **Hook / angle:** Each link: one-line value + one critique or use-case.

## Who this is for
- **Primary audience:** [Role or reader profile]
- **Reading time:** [X] minutes | **Format:** blog post

## One-line thesis
[State the single claim you will prove; delete if narrative-only.]

## Outline
1. [Opening: context + why this matters now]
2. [Body section: main insight / experience]
3. [Body section: evidence, data, or examples — link sources]
4. [Body section: trade-offs, risks, or counterpoints]
5. [Close: summary + concrete takeaway + optional CTA]

## Key points
- **[Point 1]:** [1–2 sentences]
- **[Point 2]:** [1–2 sentences]
- **[Point 3]:** [1–2 sentences]
- **[Point 4]:** [1–2 sentences — optional]

## Body draft
### Section 1 — [Name]
[Paragraph with specifics: names, numbers, tools, or scenarios.]

| Idea | Example / detail | Link |
| --- | --- | --- |
| [Concept] | [Short evidence] | [url] |

### Section 2 — [Name]
- **Observation:** [What you saw / measured / felt]
- **Implication:** [So what for the reader?]

\`\`\`
# Optional: pseudo-code, CLI, or config snippet (remove if N/A)
[command or snippet]
\`\`\`

### Section 3 — [Name]
[Deeper analysis; acknowledge nuance. Avoid hand-waving: cite sources.]

## Conclusion
- **Takeaway:** [One sentence the reader can quote]
- **Next step:** [Actionable next step; remove if N/A]
- **Call to action:** [Subscribe, comment, try X — or delete]

## Meta (optional, delete before publish)
- **Sources:** [List URLs / papers]
- **Disclosures:** [Sponsorship, employer, stock — or none]`,
  },
  {
    id: "writing-blog-news",
    name: "Blog post (news)",
    category: "writing",
    description: "A news style blog post for your audience. a timely post reacting to a development in [industry] ",
    tags: ["blog","news","markdown","draft"],
    content: `# [Compelling title about a timely post reacting to a development in [industry] ]

> **Hook / angle:** Cite primary sources; separate fact from hot take.

## Who this is for
- **Primary audience:** [Role or reader profile]
- **Reading time:** [X] minutes | **Format:** blog post

## One-line thesis
[State the single claim you will prove; delete if narrative-only.]

## Outline
1. [Opening: context + why this matters now]
2. [Body section: main insight / experience]
3. [Body section: evidence, data, or examples — link sources]
4. [Body section: trade-offs, risks, or counterpoints]
5. [Close: summary + concrete takeaway + optional CTA]

## Key points
- **[Point 1]:** [1–2 sentences]
- **[Point 2]:** [1–2 sentences]
- **[Point 3]:** [1–2 sentences]
- **[Point 4]:** [1–2 sentences — optional]

## Body draft
### Section 1 — [Name]
[Paragraph with specifics: names, numbers, tools, or scenarios.]

| Idea | Example / detail | Link |
| --- | --- | --- |
| [Concept] | [Short evidence] | [url] |

### Section 2 — [Name]
- **Observation:** [What you saw / measured / felt]
- **Implication:** [So what for the reader?]

\`\`\`
# Optional: pseudo-code, CLI, or config snippet (remove if N/A)
[command or snippet]
\`\`\`

### Section 3 — [Name]
[Deeper analysis; acknowledge nuance. Avoid hand-waving: cite sources.]

## Conclusion
- **Takeaway:** [One sentence the reader can quote]
- **Next step:** [Actionable next step; remove if N/A]
- **Call to action:** [Subscribe, comment, try X — or delete]

## Meta (optional, delete before publish)
- **Sources:** [List URLs / papers]
- **Disclosures:** [Sponsorship, employer, stock — or none]`,
  },
  {
    id: "writing-blog-announcement",
    name: "Blog post (announcement)",
    category: "writing",
    description: "A announcement style blog post for your audience. something you or your org is launching or changing",
    tags: ["blog","announcement","markdown","draft"],
    content: `# [Compelling title about something you or your org is launching or changing]

> **Hook / angle:** What, why, when, where, and the next action for the reader.

## Who this is for
- **Primary audience:** [Role or reader profile]
- **Reading time:** [X] minutes | **Format:** blog post

## One-line thesis
[State the single claim you will prove; delete if narrative-only.]

## Outline
1. [Opening: context + why this matters now]
2. [Body section: main insight / experience]
3. [Body section: evidence, data, or examples — link sources]
4. [Body section: trade-offs, risks, or counterpoints]
5. [Close: summary + concrete takeaway + optional CTA]

## Key points
- **[Point 1]:** [1–2 sentences]
- **[Point 2]:** [1–2 sentences]
- **[Point 3]:** [1–2 sentences]
- **[Point 4]:** [1–2 sentences — optional]

## Body draft
### Section 1 — [Name]
[Paragraph with specifics: names, numbers, tools, or scenarios.]

| Idea | Example / detail | Link |
| --- | --- | --- |
| [Concept] | [Short evidence] | [url] |

### Section 2 — [Name]
- **Observation:** [What you saw / measured / felt]
- **Implication:** [So what for the reader?]

\`\`\`
# Optional: pseudo-code, CLI, or config snippet (remove if N/A)
[command or snippet]
\`\`\`

### Section 3 — [Name]
[Deeper analysis; acknowledge nuance. Avoid hand-waving: cite sources.]

## Conclusion
- **Takeaway:** [One sentence the reader can quote]
- **Next step:** [Actionable next step; remove if N/A]
- **Call to action:** [Subscribe, comment, try X — or delete]

## Meta (optional, delete before publish)
- **Sources:** [List URLs / papers]
- **Disclosures:** [Sponsorship, employer, stock — or none]`,
  },
  {
    id: "writing-blog-personal",
    name: "Blog post (personal)",
    category: "writing",
    description: "A personal style blog post for your audience. a reflective or narrative post tied to a lesson",
    tags: ["blog","personal","markdown","draft"],
    content: `# [Compelling title about a reflective or narrative post tied to a lesson]

> **Hook / angle:** Tie the personal beat to a universal takeaway; consent/privacy for others.

## Who this is for
- **Primary audience:** [Role or reader profile]
- **Reading time:** [X] minutes | **Format:** blog post

## One-line thesis
[State the single claim you will prove; delete if narrative-only.]

## Outline
1. [Opening: context + why this matters now]
2. [Body section: main insight / experience]
3. [Body section: evidence, data, or examples — link sources]
4. [Body section: trade-offs, risks, or counterpoints]
5. [Close: summary + concrete takeaway + optional CTA]

## Key points
- **[Point 1]:** [1–2 sentences]
- **[Point 2]:** [1–2 sentences]
- **[Point 3]:** [1–2 sentences]
- **[Point 4]:** [1–2 sentences — optional]

## Body draft
### Section 1 — [Name]
[Paragraph with specifics: names, numbers, tools, or scenarios.]

| Idea | Example / detail | Link |
| --- | --- | --- |
| [Concept] | [Short evidence] | [url] |

### Section 2 — [Name]
- **Observation:** [What you saw / measured / felt]
- **Implication:** [So what for the reader?]

\`\`\`
# Optional: pseudo-code, CLI, or config snippet (remove if N/A)
[command or snippet]
\`\`\`

### Section 3 — [Name]
[Deeper analysis; acknowledge nuance. Avoid hand-waving: cite sources.]

## Conclusion
- **Takeaway:** [One sentence the reader can quote]
- **Next step:** [Actionable next step; remove if N/A]
- **Call to action:** [Subscribe, comment, try X — or delete]

## Meta (optional, delete before publish)
- **Sources:** [List URLs / papers]
- **Disclosures:** [Sponsorship, employer, stock — or none]`,
  },
  {
    id: "writing-blog-travel",
    name: "Blog post (travel)",
    category: "writing",
    description: "A travel style blog post for your audience. a travel post with [destination] and [angle food/culture/remote work] ",
    tags: ["blog","travel","markdown","draft"],
    content: `# [Compelling title about a travel post with [destination] and [angle food/culture/remote work] ]

> **Hook / angle:** Logistics, budget band, 2 honest downsides, and 3 specifics only locals would know (if true).

## Who this is for
- **Primary audience:** [Role or reader profile]
- **Reading time:** [X] minutes | **Format:** blog post

## One-line thesis
[State the single claim you will prove; delete if narrative-only.]

## Outline
1. [Opening: context + why this matters now]
2. [Body section: main insight / experience]
3. [Body section: evidence, data, or examples — link sources]
4. [Body section: trade-offs, risks, or counterpoints]
5. [Close: summary + concrete takeaway + optional CTA]

## Key points
- **[Point 1]:** [1–2 sentences]
- **[Point 2]:** [1–2 sentences]
- **[Point 3]:** [1–2 sentences]
- **[Point 4]:** [1–2 sentences — optional]

## Body draft
### Section 1 — [Name]
[Paragraph with specifics: names, numbers, tools, or scenarios.]

| Idea | Example / detail | Link |
| --- | --- | --- |
| [Concept] | [Short evidence] | [url] |

### Section 2 — [Name]
- **Observation:** [What you saw / measured / felt]
- **Implication:** [So what for the reader?]

\`\`\`
# Optional: pseudo-code, CLI, or config snippet (remove if N/A)
[command or snippet]
\`\`\`

### Section 3 — [Name]
[Deeper analysis; acknowledge nuance. Avoid hand-waving: cite sources.]

## Conclusion
- **Takeaway:** [One sentence the reader can quote]
- **Next step:** [Actionable next step; remove if N/A]
- **Call to action:** [Subscribe, comment, try X — or delete]

## Meta (optional, delete before publish)
- **Sources:** [List URLs / papers]
- **Disclosures:** [Sponsorship, employer, stock — or none]`,
  },
  {
    id: "writing-blog-food",
    name: "Blog post (food)",
    category: "writing",
    description: "A food style blog post for your audience. a recipe or food story for [cuisine/occasion] ",
    tags: ["blog","food","markdown","draft"],
    content: `# [Compelling title about a recipe or food story for [cuisine/occasion] ]

> **Hook / angle:** Headnote, substitutions, time/temp, and why this version works (science optional).

## Who this is for
- **Primary audience:** [Role or reader profile]
- **Reading time:** [X] minutes | **Format:** blog post

## One-line thesis
[State the single claim you will prove; delete if narrative-only.]

## Outline
1. [Opening: context + why this matters now]
2. [Body section: main insight / experience]
3. [Body section: evidence, data, or examples — link sources]
4. [Body section: trade-offs, risks, or counterpoints]
5. [Close: summary + concrete takeaway + optional CTA]

## Key points
- **[Point 1]:** [1–2 sentences]
- **[Point 2]:** [1–2 sentences]
- **[Point 3]:** [1–2 sentences]
- **[Point 4]:** [1–2 sentences — optional]

## Body draft
### Section 1 — [Name]
[Paragraph with specifics: names, numbers, tools, or scenarios.]

| Idea | Example / detail | Link |
| --- | --- | --- |
| [Concept] | [Short evidence] | [url] |

### Section 2 — [Name]
- **Observation:** [What you saw / measured / felt]
- **Implication:** [So what for the reader?]

\`\`\`
# Optional: pseudo-code, CLI, or config snippet (remove if N/A)
[command or snippet]
\`\`\`

### Section 3 — [Name]
[Deeper analysis; acknowledge nuance. Avoid hand-waving: cite sources.]

## Conclusion
- **Takeaway:** [One sentence the reader can quote]
- **Next step:** [Actionable next step; remove if N/A]
- **Call to action:** [Subscribe, comment, try X — or delete]

## Meta (optional, delete before publish)
- **Sources:** [List URLs / papers]
- **Disclosures:** [Sponsorship, employer, stock — or none]`,
  },
  {
    id: "writing-blog-fitness",
    name: "Blog post (fitness)",
    category: "writing",
    description: "A fitness style blog post for your audience. workout, recovery, or habit post for [audience/goal] ",
    tags: ["blog","fitness","markdown","draft"],
    content: `# [Compelling title about workout, recovery, or habit post for [audience/goal] ]

> **Hook / angle:** Safety, progression, and when to get a pro.

## Who this is for
- **Primary audience:** [Role or reader profile]
- **Reading time:** [X] minutes | **Format:** blog post

## One-line thesis
[State the single claim you will prove; delete if narrative-only.]

## Outline
1. [Opening: context + why this matters now]
2. [Body section: main insight / experience]
3. [Body section: evidence, data, or examples — link sources]
4. [Body section: trade-offs, risks, or counterpoints]
5. [Close: summary + concrete takeaway + optional CTA]

## Key points
- **[Point 1]:** [1–2 sentences]
- **[Point 2]:** [1–2 sentences]
- **[Point 3]:** [1–2 sentences]
- **[Point 4]:** [1–2 sentences — optional]

## Body draft
### Section 1 — [Name]
[Paragraph with specifics: names, numbers, tools, or scenarios.]

| Idea | Example / detail | Link |
| --- | --- | --- |
| [Concept] | [Short evidence] | [url] |

### Section 2 — [Name]
- **Observation:** [What you saw / measured / felt]
- **Implication:** [So what for the reader?]

\`\`\`
# Optional: pseudo-code, CLI, or config snippet (remove if N/A)
[command or snippet]
\`\`\`

### Section 3 — [Name]
[Deeper analysis; acknowledge nuance. Avoid hand-waving: cite sources.]

## Conclusion
- **Takeaway:** [One sentence the reader can quote]
- **Next step:** [Actionable next step; remove if N/A]
- **Call to action:** [Subscribe, comment, try X — or delete]

## Meta (optional, delete before publish)
- **Sources:** [List URLs / papers]
- **Disclosures:** [Sponsorship, employer, stock — or none]`,
  },
  {
    id: "writing-blog-finance",
    name: "Blog post (finance)",
    category: "writing",
    description: "A finance style blog post for your audience. a money topic for [audience/constraint] — not personalized advice",
    tags: ["blog","finance","markdown","draft"],
    content: `# [Compelling title about a money topic for [audience/constraint] — not personalized advice]

> **Hook / angle:** Principles, trade-offs, disclaimers, and reference to a licensed advisor when required.

## Who this is for
- **Primary audience:** [Role or reader profile]
- **Reading time:** [X] minutes | **Format:** blog post

## One-line thesis
[State the single claim you will prove; delete if narrative-only.]

## Outline
1. [Opening: context + why this matters now]
2. [Body section: main insight / experience]
3. [Body section: evidence, data, or examples — link sources]
4. [Body section: trade-offs, risks, or counterpoints]
5. [Close: summary + concrete takeaway + optional CTA]

## Key points
- **[Point 1]:** [1–2 sentences]
- **[Point 2]:** [1–2 sentences]
- **[Point 3]:** [1–2 sentences]
- **[Point 4]:** [1–2 sentences — optional]

## Body draft
### Section 1 — [Name]
[Paragraph with specifics: names, numbers, tools, or scenarios.]

| Idea | Example / detail | Link |
| --- | --- | --- |
| [Concept] | [Short evidence] | [url] |

### Section 2 — [Name]
- **Observation:** [What you saw / measured / felt]
- **Implication:** [So what for the reader?]

\`\`\`
# Optional: pseudo-code, CLI, or config snippet (remove if N/A)
[command or snippet]
\`\`\`

### Section 3 — [Name]
[Deeper analysis; acknowledge nuance. Avoid hand-waving: cite sources.]

## Conclusion
- **Takeaway:** [One sentence the reader can quote]
- **Next step:** [Actionable next step; remove if N/A]
- **Call to action:** [Subscribe, comment, try X — or delete]

## Meta (optional, delete before publish)
- **Sources:** [List URLs / papers]
- **Disclosures:** [Sponsorship, employer, stock — or none]`,
  },
  {
    id: "writing-blog-parenting",
    name: "Blog post (parenting)",
    category: "writing",
    description: "A parenting style blog post for your audience. a post about [stage/topic] with empathy, not prescriptiveness",
    tags: ["blog","parenting","markdown","draft"],
    content: `# [Compelling title about a post about [stage/topic] with empathy, not prescriptiveness]

> **Hook / angle:** Evidence-leaning where it exists; respect diverse families; avoid shame.

## Who this is for
- **Primary audience:** [Role or reader profile]
- **Reading time:** [X] minutes | **Format:** blog post

## One-line thesis
[State the single claim you will prove; delete if narrative-only.]

## Outline
1. [Opening: context + why this matters now]
2. [Body section: main insight / experience]
3. [Body section: evidence, data, or examples — link sources]
4. [Body section: trade-offs, risks, or counterpoints]
5. [Close: summary + concrete takeaway + optional CTA]

## Key points
- **[Point 1]:** [1–2 sentences]
- **[Point 2]:** [1–2 sentences]
- **[Point 3]:** [1–2 sentences]
- **[Point 4]:** [1–2 sentences — optional]

## Body draft
### Section 1 — [Name]
[Paragraph with specifics: names, numbers, tools, or scenarios.]

| Idea | Example / detail | Link |
| --- | --- | --- |
| [Concept] | [Short evidence] | [url] |

### Section 2 — [Name]
- **Observation:** [What you saw / measured / felt]
- **Implication:** [So what for the reader?]

\`\`\`
# Optional: pseudo-code, CLI, or config snippet (remove if N/A)
[command or snippet]
\`\`\`

### Section 3 — [Name]
[Deeper analysis; acknowledge nuance. Avoid hand-waving: cite sources.]

## Conclusion
- **Takeaway:** [One sentence the reader can quote]
- **Next step:** [Actionable next step; remove if N/A]
- **Call to action:** [Subscribe, comment, try X — or delete]

## Meta (optional, delete before publish)
- **Sources:** [List URLs / papers]
- **Disclosures:** [Sponsorship, employer, stock — or none]`,
  },
  {
    id: "writing-blog-productivity",
    name: "Blog post (productivity)",
    category: "writing",
    description: "A productivity style blog post for your audience. systems, tools, or focus ideas for [context] ",
    tags: ["blog","productivity","markdown","draft"],
    content: `# [Compelling title about systems, tools, or focus ideas for [context] ]

> **Hook / angle:** One system per post; what you *stopped* doing matters as much as what you started.

## Who this is for
- **Primary audience:** [Role or reader profile]
- **Reading time:** [X] minutes | **Format:** blog post

## One-line thesis
[State the single claim you will prove; delete if narrative-only.]

## Outline
1. [Opening: context + why this matters now]
2. [Body section: main insight / experience]
3. [Body section: evidence, data, or examples — link sources]
4. [Body section: trade-offs, risks, or counterpoints]
5. [Close: summary + concrete takeaway + optional CTA]

## Key points
- **[Point 1]:** [1–2 sentences]
- **[Point 2]:** [1–2 sentences]
- **[Point 3]:** [1–2 sentences]
- **[Point 4]:** [1–2 sentences — optional]

## Body draft
### Section 1 — [Name]
[Paragraph with specifics: names, numbers, tools, or scenarios.]

| Idea | Example / detail | Link |
| --- | --- | --- |
| [Concept] | [Short evidence] | [url] |

### Section 2 — [Name]
- **Observation:** [What you saw / measured / felt]
- **Implication:** [So what for the reader?]

\`\`\`
# Optional: pseudo-code, CLI, or config snippet (remove if N/A)
[command or snippet]
\`\`\`

### Section 3 — [Name]
[Deeper analysis; acknowledge nuance. Avoid hand-waving: cite sources.]

## Conclusion
- **Takeaway:** [One sentence the reader can quote]
- **Next step:** [Actionable next step; remove if N/A]
- **Call to action:** [Subscribe, comment, try X — or delete]

## Meta (optional, delete before publish)
- **Sources:** [List URLs / papers]
- **Disclosures:** [Sponsorship, employer, stock — or none]`,
  },
  {
    id: "writing-blog-career-advice",
    name: "Blog post (career advice)",
    category: "writing",
    description: "A career advice style blog post for your audience. career guidance for [role/level] in [industry] ",
    tags: ["blog","career","markdown","draft"],
    content: `# [Compelling title about career guidance for [role/level] in [industry] ]

> **Hook / angle:** Actionable, stage-matched, and clear about N=1 / regional variation.

## Who this is for
- **Primary audience:** [Role or reader profile]
- **Reading time:** [X] minutes | **Format:** blog post

## One-line thesis
[State the single claim you will prove; delete if narrative-only.]

## Outline
1. [Opening: context + why this matters now]
2. [Body section: main insight / experience]
3. [Body section: evidence, data, or examples — link sources]
4. [Body section: trade-offs, risks, or counterpoints]
5. [Close: summary + concrete takeaway + optional CTA]

## Key points
- **[Point 1]:** [1–2 sentences]
- **[Point 2]:** [1–2 sentences]
- **[Point 3]:** [1–2 sentences]
- **[Point 4]:** [1–2 sentences — optional]

## Body draft
### Section 1 — [Name]
[Paragraph with specifics: names, numbers, tools, or scenarios.]

| Idea | Example / detail | Link |
| --- | --- | --- |
| [Concept] | [Short evidence] | [url] |

### Section 2 — [Name]
- **Observation:** [What you saw / measured / felt]
- **Implication:** [So what for the reader?]

\`\`\`
# Optional: pseudo-code, CLI, or config snippet (remove if N/A)
[command or snippet]
\`\`\`

### Section 3 — [Name]
[Deeper analysis; acknowledge nuance. Avoid hand-waving: cite sources.]

## Conclusion
- **Takeaway:** [One sentence the reader can quote]
- **Next step:** [Actionable next step; remove if N/A]
- **Call to action:** [Subscribe, comment, try X — or delete]

## Meta (optional, delete before publish)
- **Sources:** [List URLs / papers]
- **Disclosures:** [Sponsorship, employer, stock — or none]`,
  },
  {
    id: "writing-article-news",
    name: "News article (inverted pyramid)",
    category: "writing",
    description: "A news-article article template with sourcing and section scaffolding.",
    tags: ["journalism","reporting","inverted pyramid","draft"],
    content: `# [Headline: clear, specific, and accurate]

| Field | Value |
| --- | --- |
| **Type** | inverted pyramid article |
| **Byline** | [Name], [outlet/affiliation] |
| **Date** | [Date] |
| **Location** | [City/remote — if relevant] |
| **Word count target** | [000] |

## Lede (≤35 words in print style; web can run longer)
[Strong opening sentence. Second graph: the "nut graph" with context.]

## Key facts (fact-check here)
| Fact | Source | Status |
| --- | --- | --- |
| [Fact] | [Name / org / link] | [verified / needs confirm] |
|  |  |  |

## Nut graph (why readers should care)
- **Stakes:** [Who is affected, how, and on what timeline]
- **Context:** [History or background in 2–3 sentences]
- **Tension:** [What is unresolved?]

## Main sections
### [Section 1 — typically chronology, scene, or problem framing]
[Reporting notes: quotes, dates, on-the-record language.]

### [Section 2 — development, investigation, or analysis]
- **Claim A:** [Text] — *Evidence:* [interview, document, data]
- **Claim B:** [Text] — *Countervailing view:* [name + position]

### [Section 3 — implications, expert views, or resolution]
[Balance perspectives; label opinion vs fact.]

## Sourcing & quotes
- [Source name, title] — *On the record* — [Short quote or paraphrase]
- [Source name, title] — *Background* — [Paraphrase only if agreed]

## Conclusion / kicker
[Line that resonates or points forward. Avoid introducing new key facts here.]

## Editor’s checklist
- [ ] Names/titles/numbers verified
- [ ] Fairness: contacted subjects for response where appropriate
- [ ] Legal / sensitive info reviewed`,
  },
  {
    id: "writing-article-feature",
    name: "Feature article (narrative depth)",
    category: "writing",
    description: "A feature-article article template with sourcing and section scaffolding.",
    tags: ["longform","narrative","reporting","profile"],
    content: `# [Headline: clear, specific, and accurate]

| Field | Value |
| --- | --- |
| **Type** | long-form human story article |
| **Byline** | [Name], [outlet/affiliation] |
| **Date** | [Date] |
| **Location** | [City/remote — if relevant] |
| **Word count target** | [000] |

## Lede (≤35 words in print style; web can run longer)
[Strong opening sentence. Second graph: the "nut graph" with context.]

## Key facts (fact-check here)
| Fact | Source | Status |
| --- | --- | --- |
| [Fact] | [Name / org / link] | [verified / needs confirm] |
|  |  |  |

## Nut graph (why readers should care)
- **Stakes:** [Who is affected, how, and on what timeline]
- **Context:** [History or background in 2–3 sentences]
- **Tension:** [What is unresolved?]

## Main sections
### [Section 1 — typically chronology, scene, or problem framing]
[Reporting notes: quotes, dates, on-the-record language.]

### [Section 2 — development, investigation, or analysis]
- **Claim A:** [Text] — *Evidence:* [interview, document, data]
- **Claim B:** [Text] — *Countervailing view:* [name + position]

### [Section 3 — implications, expert views, or resolution]
[Balance perspectives; label opinion vs fact.]

## Sourcing & quotes
- [Source name, title] — *On the record* — [Short quote or paraphrase]
- [Source name, title] — *Background* — [Paraphrase only if agreed]

## Conclusion / kicker
[Line that resonates or points forward. Avoid introducing new key facts here.]

## Editor’s checklist
- [ ] Names/titles/numbers verified
- [ ] Fairness: contacted subjects for response where appropriate
- [ ] Legal / sensitive info reviewed`,
  },
  {
    id: "writing-article-investigative",
    name: "Investigative article (FOIA / on-the-record)",
    category: "writing",
    description: "A investigative article template with sourcing and section scaffolding.",
    tags: ["investigation","evidence","sourcing","ethics"],
    content: `# [Headline: clear, specific, and accurate]

| Field | Value |
| --- | --- |
| **Type** | accountability and documentation article |
| **Byline** | [Name], [outlet/affiliation] |
| **Date** | [Date] |
| **Location** | [City/remote — if relevant] |
| **Word count target** | [000] |

## Lede (≤35 words in print style; web can run longer)
[Strong opening sentence. Second graph: the "nut graph" with context.]

## Key facts (fact-check here)
| Fact | Source | Status |
| --- | --- | --- |
| [Fact] | [Name / org / link] | [verified / needs confirm] |
|  |  |  |

## Nut graph (why readers should care)
- **Stakes:** [Who is affected, how, and on what timeline]
- **Context:** [History or background in 2–3 sentences]
- **Tension:** [What is unresolved?]

## Main sections
### [Section 1 — typically chronology, scene, or problem framing]
[Reporting notes: quotes, dates, on-the-record language.]

### [Section 2 — development, investigation, or analysis]
- **Claim A:** [Text] — *Evidence:* [interview, document, data]
- **Claim B:** [Text] — *Countervailing view:* [name + position]

### [Section 3 — implications, expert views, or resolution]
[Balance perspectives; label opinion vs fact.]

## Sourcing & quotes
- [Source name, title] — *On the record* — [Short quote or paraphrase]
- [Source name, title] — *Background* — [Paraphrase only if agreed]

## Conclusion / kicker
[Line that resonates or points forward. Avoid introducing new key facts here.]

## Editor’s checklist
- [ ] Names/titles/numbers verified
- [ ] Fairness: contacted subjects for response where appropriate
- [ ] Legal / sensitive info reviewed`,
  },
  {
    id: "writing-article-profile",
    name: "Profile piece (interview + scene)",
    category: "writing",
    description: "A profile article template with sourcing and section scaffolding.",
    tags: ["profile","interview","narrative","portrait"],
    content: `# [Headline: clear, specific, and accurate]

| Field | Value |
| --- | --- |
| **Type** | person-centered story with stakes article |
| **Byline** | [Name], [outlet/affiliation] |
| **Date** | [Date] |
| **Location** | [City/remote — if relevant] |
| **Word count target** | [000] |

## Lede (≤35 words in print style; web can run longer)
[Strong opening sentence. Second graph: the "nut graph" with context.]

## Key facts (fact-check here)
| Fact | Source | Status |
| --- | --- | --- |
| [Fact] | [Name / org / link] | [verified / needs confirm] |
|  |  |  |

## Nut graph (why readers should care)
- **Stakes:** [Who is affected, how, and on what timeline]
- **Context:** [History or background in 2–3 sentences]
- **Tension:** [What is unresolved?]

## Main sections
### [Section 1 — typically chronology, scene, or problem framing]
[Reporting notes: quotes, dates, on-the-record language.]

### [Section 2 — development, investigation, or analysis]
- **Claim A:** [Text] — *Evidence:* [interview, document, data]
- **Claim B:** [Text] — *Countervailing view:* [name + position]

### [Section 3 — implications, expert views, or resolution]
[Balance perspectives; label opinion vs fact.]

## Sourcing & quotes
- [Source name, title] — *On the record* — [Short quote or paraphrase]
- [Source name, title] — *Background* — [Paraphrase only if agreed]

## Conclusion / kicker
[Line that resonates or points forward. Avoid introducing new key facts here.]

## Editor’s checklist
- [ ] Names/titles/numbers verified
- [ ] Fairness: contacted subjects for response where appropriate
- [ ] Legal / sensitive info reviewed`,
  },
  {
    id: "writing-article-how-to",
    name: "How-to article (service journalism)",
    category: "writing",
    description: "A how-to article template with sourcing and section scaffolding.",
    tags: ["how-to","guide","service","steps"],
    content: `# [Headline: clear, specific, and accurate]

| Field | Value |
| --- | --- |
| **Type** | stepwise service piece article |
| **Byline** | [Name], [outlet/affiliation] |
| **Date** | [Date] |
| **Location** | [City/remote — if relevant] |
| **Word count target** | [000] |

## Lede (≤35 words in print style; web can run longer)
[Strong opening sentence. Second graph: the "nut graph" with context.]

## Key facts (fact-check here)
| Fact | Source | Status |
| --- | --- | --- |
| [Fact] | [Name / org / link] | [verified / needs confirm] |
|  |  |  |

## Nut graph (why readers should care)
- **Stakes:** [Who is affected, how, and on what timeline]
- **Context:** [History or background in 2–3 sentences]
- **Tension:** [What is unresolved?]

## Main sections
### [Section 1 — typically chronology, scene, or problem framing]
[Reporting notes: quotes, dates, on-the-record language.]

### [Section 2 — development, investigation, or analysis]
- **Claim A:** [Text] — *Evidence:* [interview, document, data]
- **Claim B:** [Text] — *Countervailing view:* [name + position]

### [Section 3 — implications, expert views, or resolution]
[Balance perspectives; label opinion vs fact.]

## Sourcing & quotes
- [Source name, title] — *On the record* — [Short quote or paraphrase]
- [Source name, title] — *Background* — [Paraphrase only if agreed]

## Conclusion / kicker
[Line that resonates or points forward. Avoid introducing new key facts here.]

## Editor’s checklist
- [ ] Names/titles/numbers verified
- [ ] Fairness: contacted subjects for response where appropriate
- [ ] Legal / sensitive info reviewed`,
  },
  {
    id: "writing-article-editorial",
    name: "Editorial (institutional op-ed)",
    category: "writing",
    description: "A editorial article template with sourcing and section scaffolding.",
    tags: ["op-ed","stance","institution","thesis"],
    content: `# [Headline: clear, specific, and accurate]

| Field | Value |
| --- | --- |
| **Type** | stance + institutional authority article |
| **Byline** | [Name], [outlet/affiliation] |
| **Date** | [Date] |
| **Location** | [City/remote — if relevant] |
| **Word count target** | [000] |

## Lede (≤35 words in print style; web can run longer)
[Strong opening sentence. Second graph: the "nut graph" with context.]

## Key facts (fact-check here)
| Fact | Source | Status |
| --- | --- | --- |
| [Fact] | [Name / org / link] | [verified / needs confirm] |
|  |  |  |

## Nut graph (why readers should care)
- **Stakes:** [Who is affected, how, and on what timeline]
- **Context:** [History or background in 2–3 sentences]
- **Tension:** [What is unresolved?]

## Main sections
### [Section 1 — typically chronology, scene, or problem framing]
[Reporting notes: quotes, dates, on-the-record language.]

### [Section 2 — development, investigation, or analysis]
- **Claim A:** [Text] — *Evidence:* [interview, document, data]
- **Claim B:** [Text] — *Countervailing view:* [name + position]

### [Section 3 — implications, expert views, or resolution]
[Balance perspectives; label opinion vs fact.]

## Sourcing & quotes
- [Source name, title] — *On the record* — [Short quote or paraphrase]
- [Source name, title] — *Background* — [Paraphrase only if agreed]

## Conclusion / kicker
[Line that resonates or points forward. Avoid introducing new key facts here.]

## Editor’s checklist
- [ ] Names/titles/numbers verified
- [ ] Fairness: contacted subjects for response where appropriate
- [ ] Legal / sensitive info reviewed`,
  },
  {
    id: "writing-article-analysis",
    name: "Analysis article (expert read of events or data)",
    category: "writing",
    description: "A analysis article template with sourcing and section scaffolding.",
    tags: ["analysis","expert","data","argument"],
    content: `# [Headline: clear, specific, and accurate]

| Field | Value |
| --- | --- |
| **Type** | expert read of events, data, or text article |
| **Byline** | [Name], [outlet/affiliation] |
| **Date** | [Date] |
| **Location** | [City/remote — if relevant] |
| **Word count target** | [000] |

## Lede (≤35 words in print style; web can run longer)
[Strong opening sentence. Second graph: the "nut graph" with context.]

## Key facts (fact-check here)
| Fact | Source | Status |
| --- | --- | --- |
| [Fact] | [Name / org / link] | [verified / needs confirm] |
|  |  |  |

## Nut graph (why readers should care)
- **Stakes:** [Who is affected, how, and on what timeline]
- **Context:** [History or background in 2–3 sentences]
- **Tension:** [What is unresolved?]

## Main sections
### [Section 1 — typically chronology, scene, or problem framing]
[Reporting notes: quotes, dates, on-the-record language.]

### [Section 2 — development, investigation, or analysis]
- **Claim A:** [Text] — *Evidence:* [interview, document, data]
- **Claim B:** [Text] — *Countervailing view:* [name + position]

### [Section 3 — implications, expert views, or resolution]
[Balance perspectives; label opinion vs fact.]

## Sourcing & quotes
- [Source name, title] — *On the record* — [Short quote or paraphrase]
- [Source name, title] — *Background* — [Paraphrase only if agreed]

## Conclusion / kicker
[Line that resonates or points forward. Avoid introducing new key facts here.]

## Editor’s checklist
- [ ] Names/titles/numbers verified
- [ ] Fairness: contacted subjects for response where appropriate
- [ ] Legal / sensitive info reviewed`,
  },
  {
    id: "writing-article-explainer",
    name: "Explainer (plain language on complex thing)",
    category: "writing",
    description: "A explainer article template with sourcing and section scaffolding.",
    tags: ["explainer","clarity","teaching","plain language"],
    content: `# [Headline: clear, specific, and accurate]

| Field | Value |
| --- | --- |
| **Type** | plain-language deconstruction article |
| **Byline** | [Name], [outlet/affiliation] |
| **Date** | [Date] |
| **Location** | [City/remote — if relevant] |
| **Word count target** | [000] |

## Lede (≤35 words in print style; web can run longer)
[Strong opening sentence. Second graph: the "nut graph" with context.]

## Key facts (fact-check here)
| Fact | Source | Status |
| --- | --- | --- |
| [Fact] | [Name / org / link] | [verified / needs confirm] |
|  |  |  |

## Nut graph (why readers should care)
- **Stakes:** [Who is affected, how, and on what timeline]
- **Context:** [History or background in 2–3 sentences]
- **Tension:** [What is unresolved?]

## Main sections
### [Section 1 — typically chronology, scene, or problem framing]
[Reporting notes: quotes, dates, on-the-record language.]

### [Section 2 — development, investigation, or analysis]
- **Claim A:** [Text] — *Evidence:* [interview, document, data]
- **Claim B:** [Text] — *Countervailing view:* [name + position]

### [Section 3 — implications, expert views, or resolution]
[Balance perspectives; label opinion vs fact.]

## Sourcing & quotes
- [Source name, title] — *On the record* — [Short quote or paraphrase]
- [Source name, title] — *Background* — [Paraphrase only if agreed]

## Conclusion / kicker
[Line that resonates or points forward. Avoid introducing new key facts here.]

## Editor’s checklist
- [ ] Names/titles/numbers verified
- [ ] Fairness: contacted subjects for response where appropriate
- [ ] Legal / sensitive info reviewed`,
  },
  {
    id: "writing-essay-argumentative",
    name: "Essay (argumentative)",
    category: "writing",
    description: "An essay template for argumentative work with argument map and paragraph scaffold.",
    tags: ["essay","argumentative","thesis","citations","academic-leaning"],
    content: `# [Essay title]

> **Mode:** argumentative

## Prompt / focus (instructor or self-assigned)
[Paste prompt or 1-sentence focus question.]

## Thesis (working)
[One arguable claim. Refine after drafting.]

## Audience & context
- **Reader:** [Academic, general, publication]
- **Stakes:** [What changes if the reader accepts your view?]
- **Key terms (define in intro):** [Term 1], [Term 2]

## Argument map
| Section | Job | Evidence |
| --- | --- | --- |
| I. Introduction | Set context, define terms, state thesis | [Hook + roadmap] |
| II. [Body 1] | [Support / narrate / compare] | [Source / example] |
| III. [Body 2] | [Develop / rebut] | [Source / example] |
| IV. [Body 3] | [Nuance / limit / implication] | [Source / example] |
| V. Conclusion | Synthesize, restate (not copy), so what? | [Broader import] |

## Body — draft blocks
### Introduction (≈ [n]% of words)
[Opening move: anecdote, question, or scene if narrative.]

### Body paragraph template (repeat as needed)
- **Topic sentence:** […]
- **Explanation / context:** […]
- **Evidence:** [Quotation, paraphrase, or data] (*See citation: [Author, Year, p. x]*)
- **Warrant:** [Why this evidence supports the claim]
- **Concluding sentence / transition:** […]

## Counterpoint(s) & response
- **Objection 1:** [State fairly]
  - **Reply:** [Your rebuttal or concession + qualification]
- **Objection 2 (optional):** […]

## Conclusion
- **Synthesis (not a list summary):** […]
- **Implication or question:** […]

## Citation / reading list (rough)
- [Author (Year), *Title*]
- […]`,
  },
  {
    id: "writing-essay-persuasive",
    name: "Essay (persuasive)",
    category: "writing",
    description: "An essay template for persuasive work with argument map and paragraph scaffold.",
    tags: ["essay","persuasive","thesis","citations","academic-leaning"],
    content: `# [Essay title]

> **Mode:** persuasive

## Prompt / focus (instructor or self-assigned)
[Paste prompt or 1-sentence focus question.]

## Thesis (working)
[One arguable claim. Refine after drafting.]

## Audience & context
- **Reader:** [Academic, general, publication]
- **Stakes:** [What changes if the reader accepts your view?]
- **Key terms (define in intro):** [Term 1], [Term 2]

## Argument map
| Section | Job | Evidence |
| --- | --- | --- |
| I. Introduction | Set context, define terms, state thesis | [Hook + roadmap] |
| II. [Body 1] | [Support / narrate / compare] | [Source / example] |
| III. [Body 2] | [Develop / rebut] | [Source / example] |
| IV. [Body 3] | [Nuance / limit / implication] | [Source / example] |
| V. Conclusion | Synthesize, restate (not copy), so what? | [Broader import] |

## Body — draft blocks
### Introduction (≈ [n]% of words)
[Opening move: anecdote, question, or scene if narrative.]

### Body paragraph template (repeat as needed)
- **Topic sentence:** […]
- **Explanation / context:** […]
- **Evidence:** [Quotation, paraphrase, or data] (*See citation: [Author, Year, p. x]*)
- **Warrant:** [Why this evidence supports the claim]
- **Concluding sentence / transition:** […]

## Counterpoint(s) & response
- **Objection 1:** [State fairly]
  - **Reply:** [Your rebuttal or concession + qualification]
- **Objection 2 (optional):** […]

## Conclusion
- **Synthesis (not a list summary):** […]
- **Implication or question:** […]

## Citation / reading list (rough)
- [Author (Year), *Title*]
- […]`,
  },
  {
    id: "writing-essay-narrative",
    name: "Essay (narrative)",
    category: "writing",
    description: "An essay template for narrative work with argument map and paragraph scaffold.",
    tags: ["essay","narrative","thesis","citations","academic-leaning"],
    content: `# [Essay title]

> **Mode:** narrative

## Prompt / focus (instructor or self-assigned)
[Paste prompt or 1-sentence focus question.]

## Thesis (working)
[One arguable claim. Refine after drafting.]

## Audience & context
- **Reader:** [Academic, general, publication]
- **Stakes:** [What changes if the reader accepts your view?]
- **Key terms (define in intro):** [Term 1], [Term 2]

## Argument map
| Section | Job | Evidence |
| --- | --- | --- |
| I. Introduction | Set context, define terms, state thesis | [Hook + roadmap] |
| II. [Body 1] | [Support / narrate / compare] | [Source / example] |
| III. [Body 2] | [Develop / rebut] | [Source / example] |
| IV. [Body 3] | [Nuance / limit / implication] | [Source / example] |
| V. Conclusion | Synthesize, restate (not copy), so what? | [Broader import] |

## Body — draft blocks
### Introduction (≈ [n]% of words)
[Opening move: anecdote, question, or scene if narrative.]

### Body paragraph template (repeat as needed)
- **Topic sentence:** […]
- **Explanation / context:** […]
- **Evidence:** [Quotation, paraphrase, or data] (*See citation: [Author, Year, p. x]*)
- **Warrant:** [Why this evidence supports the claim]
- **Concluding sentence / transition:** […]

## Counterpoint(s) & response
- **Objection 1:** [State fairly]
  - **Reply:** [Your rebuttal or concession + qualification]
- **Objection 2 (optional):** […]

## Conclusion
- **Synthesis (not a list summary):** […]
- **Implication or question:** […]

## Citation / reading list (rough)
- [Author (Year), *Title*]
- […]`,
  },
  {
    id: "writing-essay-descriptive",
    name: "Essay (descriptive)",
    category: "writing",
    description: "An essay template for descriptive work with argument map and paragraph scaffold.",
    tags: ["essay","descriptive","thesis","citations","academic-leaning"],
    content: `# [Essay title]

> **Mode:** descriptive

## Prompt / focus (instructor or self-assigned)
[Paste prompt or 1-sentence focus question.]

## Thesis (working)
[One arguable claim. Refine after drafting.]

## Audience & context
- **Reader:** [Academic, general, publication]
- **Stakes:** [What changes if the reader accepts your view?]
- **Key terms (define in intro):** [Term 1], [Term 2]

## Argument map
| Section | Job | Evidence |
| --- | --- | --- |
| I. Introduction | Set context, define terms, state thesis | [Hook + roadmap] |
| II. [Body 1] | [Support / narrate / compare] | [Source / example] |
| III. [Body 2] | [Develop / rebut] | [Source / example] |
| IV. [Body 3] | [Nuance / limit / implication] | [Source / example] |
| V. Conclusion | Synthesize, restate (not copy), so what? | [Broader import] |

## Body — draft blocks
### Introduction (≈ [n]% of words)
[Opening move: anecdote, question, or scene if narrative.]

### Body paragraph template (repeat as needed)
- **Topic sentence:** […]
- **Explanation / context:** […]
- **Evidence:** [Quotation, paraphrase, or data] (*See citation: [Author, Year, p. x]*)
- **Warrant:** [Why this evidence supports the claim]
- **Concluding sentence / transition:** […]

## Counterpoint(s) & response
- **Objection 1:** [State fairly]
  - **Reply:** [Your rebuttal or concession + qualification]
- **Objection 2 (optional):** […]

## Conclusion
- **Synthesis (not a list summary):** […]
- **Implication or question:** […]

## Citation / reading list (rough)
- [Author (Year), *Title*]
- […]`,
  },
  {
    id: "writing-essay-expository",
    name: "Essay (expository)",
    category: "writing",
    description: "An essay template for expository work with argument map and paragraph scaffold.",
    tags: ["essay","expository","thesis","citations","academic-leaning"],
    content: `# [Essay title]

> **Mode:** expository

## Prompt / focus (instructor or self-assigned)
[Paste prompt or 1-sentence focus question.]

## Thesis (working)
[One arguable claim. Refine after drafting.]

## Audience & context
- **Reader:** [Academic, general, publication]
- **Stakes:** [What changes if the reader accepts your view?]
- **Key terms (define in intro):** [Term 1], [Term 2]

## Argument map
| Section | Job | Evidence |
| --- | --- | --- |
| I. Introduction | Set context, define terms, state thesis | [Hook + roadmap] |
| II. [Body 1] | [Support / narrate / compare] | [Source / example] |
| III. [Body 2] | [Develop / rebut] | [Source / example] |
| IV. [Body 3] | [Nuance / limit / implication] | [Source / example] |
| V. Conclusion | Synthesize, restate (not copy), so what? | [Broader import] |

## Body — draft blocks
### Introduction (≈ [n]% of words)
[Opening move: anecdote, question, or scene if narrative.]

### Body paragraph template (repeat as needed)
- **Topic sentence:** […]
- **Explanation / context:** […]
- **Evidence:** [Quotation, paraphrase, or data] (*See citation: [Author, Year, p. x]*)
- **Warrant:** [Why this evidence supports the claim]
- **Concluding sentence / transition:** […]

## Counterpoint(s) & response
- **Objection 1:** [State fairly]
  - **Reply:** [Your rebuttal or concession + qualification]
- **Objection 2 (optional):** […]

## Conclusion
- **Synthesis (not a list summary):** […]
- **Implication or question:** […]

## Citation / reading list (rough)
- [Author (Year), *Title*]
- […]`,
  },
  {
    id: "writing-essay-compare-contrast",
    name: "Essay (compare contrast)",
    category: "writing",
    description: "An essay template for compare contrast work with argument map and paragraph scaffold.",
    tags: ["essay","compare-contrast","thesis","citations","academic-leaning"],
    content: `# [Essay title]

> **Mode:** compare contrast

## Prompt / focus (instructor or self-assigned)
[Paste prompt or 1-sentence focus question.]

## Thesis (working)
[One arguable claim. Refine after drafting.]

## Audience & context
- **Reader:** [Academic, general, publication]
- **Stakes:** [What changes if the reader accepts your view?]
- **Key terms (define in intro):** [Term 1], [Term 2]

## Argument map
| Section | Job | Evidence |
| --- | --- | --- |
| I. Introduction | Set context, define terms, state thesis | [Hook + roadmap] |
| II. [Body 1] | [Support / narrate / compare] | [Source / example] |
| III. [Body 2] | [Develop / rebut] | [Source / example] |
| IV. [Body 3] | [Nuance / limit / implication] | [Source / example] |
| V. Conclusion | Synthesize, restate (not copy), so what? | [Broader import] |

## Body — draft blocks
### Introduction (≈ [n]% of words)
[Opening move: anecdote, question, or scene if narrative.]

### Body paragraph template (repeat as needed)
- **Topic sentence:** […]
- **Explanation / context:** […]
- **Evidence:** [Quotation, paraphrase, or data] (*See citation: [Author, Year, p. x]*)
- **Warrant:** [Why this evidence supports the claim]
- **Concluding sentence / transition:** […]

## Counterpoint(s) & response
- **Objection 1:** [State fairly]
  - **Reply:** [Your rebuttal or concession + qualification]
- **Objection 2 (optional):** […]

## Conclusion
- **Synthesis (not a list summary):** […]
- **Implication or question:** […]

## Citation / reading list (rough)
- [Author (Year), *Title*]
- […]`,
  },
  {
    id: "writing-essay-cause-effect",
    name: "Essay (cause effect)",
    category: "writing",
    description: "An essay template for cause effect work with argument map and paragraph scaffold.",
    tags: ["essay","cause-effect","thesis","citations","academic-leaning"],
    content: `# [Essay title]

> **Mode:** cause effect

## Prompt / focus (instructor or self-assigned)
[Paste prompt or 1-sentence focus question.]

## Thesis (working)
[One arguable claim. Refine after drafting.]

## Audience & context
- **Reader:** [Academic, general, publication]
- **Stakes:** [What changes if the reader accepts your view?]
- **Key terms (define in intro):** [Term 1], [Term 2]

## Argument map
| Section | Job | Evidence |
| --- | --- | --- |
| I. Introduction | Set context, define terms, state thesis | [Hook + roadmap] |
| II. [Body 1] | [Support / narrate / compare] | [Source / example] |
| III. [Body 2] | [Develop / rebut] | [Source / example] |
| IV. [Body 3] | [Nuance / limit / implication] | [Source / example] |
| V. Conclusion | Synthesize, restate (not copy), so what? | [Broader import] |

## Body — draft blocks
### Introduction (≈ [n]% of words)
[Opening move: anecdote, question, or scene if narrative.]

### Body paragraph template (repeat as needed)
- **Topic sentence:** […]
- **Explanation / context:** […]
- **Evidence:** [Quotation, paraphrase, or data] (*See citation: [Author, Year, p. x]*)
- **Warrant:** [Why this evidence supports the claim]
- **Concluding sentence / transition:** […]

## Counterpoint(s) & response
- **Objection 1:** [State fairly]
  - **Reply:** [Your rebuttal or concession + qualification]
- **Objection 2 (optional):** […]

## Conclusion
- **Synthesis (not a list summary):** […]
- **Implication or question:** […]

## Citation / reading list (rough)
- [Author (Year), *Title*]
- […]`,
  },
  {
    id: "writing-essay-reflective",
    name: "Essay (reflective)",
    category: "writing",
    description: "An essay template for reflective work with argument map and paragraph scaffold.",
    tags: ["essay","reflective","thesis","citations","academic-leaning"],
    content: `# [Essay title]

> **Mode:** reflective

## Prompt / focus (instructor or self-assigned)
[Paste prompt or 1-sentence focus question.]

## Thesis (working)
[One arguable claim. Refine after drafting.]

## Audience & context
- **Reader:** [Academic, general, publication]
- **Stakes:** [What changes if the reader accepts your view?]
- **Key terms (define in intro):** [Term 1], [Term 2]

## Argument map
| Section | Job | Evidence |
| --- | --- | --- |
| I. Introduction | Set context, define terms, state thesis | [Hook + roadmap] |
| II. [Body 1] | [Support / narrate / compare] | [Source / example] |
| III. [Body 2] | [Develop / rebut] | [Source / example] |
| IV. [Body 3] | [Nuance / limit / implication] | [Source / example] |
| V. Conclusion | Synthesize, restate (not copy), so what? | [Broader import] |

## Body — draft blocks
### Introduction (≈ [n]% of words)
[Opening move: anecdote, question, or scene if narrative.]

### Body paragraph template (repeat as needed)
- **Topic sentence:** […]
- **Explanation / context:** […]
- **Evidence:** [Quotation, paraphrase, or data] (*See citation: [Author, Year, p. x]*)
- **Warrant:** [Why this evidence supports the claim]
- **Concluding sentence / transition:** […]

## Counterpoint(s) & response
- **Objection 1:** [State fairly]
  - **Reply:** [Your rebuttal or concession + qualification]
- **Objection 2 (optional):** […]

## Conclusion
- **Synthesis (not a list summary):** […]
- **Implication or question:** […]

## Citation / reading list (rough)
- [Author (Year), *Title*]
- […]`,
  },
  {
    id: "writing-essay-critical-analysis",
    name: "Essay (critical analysis)",
    category: "writing",
    description: "An essay template for critical analysis work with argument map and paragraph scaffold.",
    tags: ["essay","critical-analysis","thesis","citations","academic-leaning"],
    content: `# [Essay title]

> **Mode:** critical analysis

## Prompt / focus (instructor or self-assigned)
[Paste prompt or 1-sentence focus question.]

## Thesis (working)
[One arguable claim. Refine after drafting.]

## Audience & context
- **Reader:** [Academic, general, publication]
- **Stakes:** [What changes if the reader accepts your view?]
- **Key terms (define in intro):** [Term 1], [Term 2]

## Argument map
| Section | Job | Evidence |
| --- | --- | --- |
| I. Introduction | Set context, define terms, state thesis | [Hook + roadmap] |
| II. [Body 1] | [Support / narrate / compare] | [Source / example] |
| III. [Body 2] | [Develop / rebut] | [Source / example] |
| IV. [Body 3] | [Nuance / limit / implication] | [Source / example] |
| V. Conclusion | Synthesize, restate (not copy), so what? | [Broader import] |

## Body — draft blocks
### Introduction (≈ [n]% of words)
[Opening move: anecdote, question, or scene if narrative.]

### Body paragraph template (repeat as needed)
- **Topic sentence:** […]
- **Explanation / context:** […]
- **Evidence:** [Quotation, paraphrase, or data] (*See citation: [Author, Year, p. x]*)
- **Warrant:** [Why this evidence supports the claim]
- **Concluding sentence / transition:** […]

## Counterpoint(s) & response
- **Objection 1:** [State fairly]
  - **Reply:** [Your rebuttal or concession + qualification]
- **Objection 2 (optional):** […]

## Conclusion
- **Synthesis (not a list summary):** […]
- **Implication or question:** […]

## Citation / reading list (rough)
- [Author (Year), *Title*]
- […]`,
  },
  {
    id: "writing-essay-literary-analysis",
    name: "Essay (literary analysis)",
    category: "writing",
    description: "An essay template for literary analysis work with argument map and paragraph scaffold.",
    tags: ["essay","literary-analysis","thesis","citations","academic-leaning"],
    content: `# [Essay title]

> **Mode:** literary analysis

## Prompt / focus (instructor or self-assigned)
[Paste prompt or 1-sentence focus question.]

## Thesis (working)
[One arguable claim. Refine after drafting.]

## Audience & context
- **Reader:** [Academic, general, publication]
- **Stakes:** [What changes if the reader accepts your view?]
- **Key terms (define in intro):** [Term 1], [Term 2]

## Argument map
| Section | Job | Evidence |
| --- | --- | --- |
| I. Introduction | Set context, define terms, state thesis | [Hook + roadmap] |
| II. [Body 1] | [Support / narrate / compare] | [Source / example] |
| III. [Body 2] | [Develop / rebut] | [Source / example] |
| IV. [Body 3] | [Nuance / limit / implication] | [Source / example] |
| V. Conclusion | Synthesize, restate (not copy), so what? | [Broader import] |

## Body — draft blocks
### Introduction (≈ [n]% of words)
[Opening move: anecdote, question, or scene if narrative.]

### Body paragraph template (repeat as needed)
- **Topic sentence:** […]
- **Explanation / context:** […]
- **Evidence:** [Quotation, paraphrase, or data] (*See citation: [Author, Year, p. x]*)
- **Warrant:** [Why this evidence supports the claim]
- **Concluding sentence / transition:** […]

## Counterpoint(s) & response
- **Objection 1:** [State fairly]
  - **Reply:** [Your rebuttal or concession + qualification]
- **Objection 2 (optional):** […]

## Conclusion
- **Synthesis (not a list summary):** […]
- **Implication or question:** […]

## Citation / reading list (rough)
- [Author (Year), *Title*]
- […]`,
  },
  {
    id: "writing-newsletter-weekly-digest",
    name: "Weekly digest newsletter",
    category: "writing",
    description: "Newsletter template: Weekly digest newsletter — weekly",
    tags: ["newsletter","digest","email","roundup","curated"],
    content: `# [Newsletter name] — [Issue # / date]

## Header
- **From:** [Name / org]
- **To:** [Segment or "all subscribers"]
- **Preview text (inbox line):** [≤~90 characters]
- **Type:** Weekly digest newsletter / weekly

## Opening (150–250 words max)
[1–2 short paragraphs. Voice + the single promise of this email.]

## Table of contents (optional)
1. [Section anchor]
2. [Section anchor]
3. [Section anchor]

## [Section] — [Title]
- **Summary:** [One sentence]
- **Detail:** [Bullets or short paragraphs]
- **Link:** [https://...]

## [Section] — [Title]
[Repeat pattern: insight + link or resource.]

## [Section] — [Title / curated links]
| Resource | Note |
| --- | --- |
| [Title] | [Why it matters in one line] |

## Highlight / P.S.
- **P.S.** [Secondary CTA, personal note, or next issue teaser]

## Housekeeping (optional, delete if N/A)
- **Unsubscribe / preferences:** [link]
- **Sponsor / affiliate disclosure:** [if applicable]`,
  },
  {
    id: "writing-newsletter-monthly-roundup",
    name: "Monthly roundup newsletter",
    category: "writing",
    description: "Newsletter template: Monthly roundup newsletter — monthly",
    tags: ["newsletter","monthly","email","recap","b2b"],
    content: `# [Newsletter name] — [Issue # / date]

## Header
- **From:** [Name / org]
- **To:** [Segment or "all subscribers"]
- **Preview text (inbox line):** [≤~90 characters]
- **Type:** Monthly roundup newsletter / monthly

## Opening (150–250 words max)
[1–2 short paragraphs. Voice + the single promise of this email.]

## Table of contents (optional)
1. [Section anchor]
2. [Section anchor]
3. [Section anchor]

## [Section] — [Title]
- **Summary:** [One sentence]
- **Detail:** [Bullets or short paragraphs]
- **Link:** [https://...]

## [Section] — [Title]
[Repeat pattern: insight + link or resource.]

## [Section] — [Title / curated links]
| Resource | Note |
| --- | --- |
| [Title] | [Why it matters in one line] |

## Highlight / P.S.
- **P.S.** [Secondary CTA, personal note, or next issue teaser]

## Housekeeping (optional, delete if N/A)
- **Unsubscribe / preferences:** [link]
- **Sponsor / affiliate disclosure:** [if applicable]`,
  },
  {
    id: "writing-newsletter-product-update",
    name: "Product update newsletter",
    category: "writing",
    description: "Newsletter template: Product update newsletter — for users or customers of [product] ",
    tags: ["newsletter","product","changelog","update","saas"],
    content: `# [Newsletter name] — [Issue # / date]

## Header
- **From:** [Name / org]
- **To:** [Segment or "all subscribers"]
- **Preview text (inbox line):** [≤~90 characters]
- **Type:** Product update newsletter / for users or customers of [product] 

## Opening (150–250 words max)
[1–2 short paragraphs. Voice + the single promise of this email.]

## Table of contents (optional)
1. [Section anchor]
2. [Section anchor]
3. [Section anchor]

## [Section] — [Title]
- **Summary:** [One sentence]
- **Detail:** [Bullets or short paragraphs]
- **Link:** [https://...]

## [Section] — [Title]
[Repeat pattern: insight + link or resource.]

## [Section] — [Title / curated links]
| Resource | Note |
| --- | --- |
| [Title] | [Why it matters in one line] |

## Highlight / P.S.
- **P.S.** [Secondary CTA, personal note, or next issue teaser]

## Housekeeping (optional, delete if N/A)
- **Unsubscribe / preferences:** [link]
- **Sponsor / affiliate disclosure:** [if applicable]`,
  },
  {
    id: "writing-newsletter-community",
    name: "Community newsletter",
    category: "writing",
    description: "Newsletter template: Community newsletter — member-driven; spotlight + wins",
    tags: ["newsletter","community","members","spotlight","engagement"],
    content: `# [Newsletter name] — [Issue # / date]

## Header
- **From:** [Name / org]
- **To:** [Segment or "all subscribers"]
- **Preview text (inbox line):** [≤~90 characters]
- **Type:** Community newsletter / member-driven; spotlight + wins

## Opening (150–250 words max)
[1–2 short paragraphs. Voice + the single promise of this email.]

## Table of contents (optional)
1. [Section anchor]
2. [Section anchor]
3. [Section anchor]

## [Section] — [Title]
- **Summary:** [One sentence]
- **Detail:** [Bullets or short paragraphs]
- **Link:** [https://...]

## [Section] — [Title]
[Repeat pattern: insight + link or resource.]

## [Section] — [Title / curated links]
| Resource | Note |
| --- | --- |
| [Title] | [Why it matters in one line] |

## Highlight / P.S.
- **P.S.** [Secondary CTA, personal note, or next issue teaser]

## Housekeeping (optional, delete if N/A)
- **Unsubscribe / preferences:** [link]
- **Sponsor / affiliate disclosure:** [if applicable]`,
  },
  {
    id: "writing-newsletter-industry-news",
    name: "Industry news newsletter",
    category: "writing",
    description: "Newsletter template: Industry news newsletter — news scan + 2 lines of *so what* each",
    tags: ["newsletter","industry","trends","analysis","b2b"],
    content: `# [Newsletter name] — [Issue # / date]

## Header
- **From:** [Name / org]
- **To:** [Segment or "all subscribers"]
- **Preview text (inbox line):** [≤~90 characters]
- **Type:** Industry news newsletter / news scan + 2 lines of *so what* each

## Opening (150–250 words max)
[1–2 short paragraphs. Voice + the single promise of this email.]

## Table of contents (optional)
1. [Section anchor]
2. [Section anchor]
3. [Section anchor]

## [Section] — [Title]
- **Summary:** [One sentence]
- **Detail:** [Bullets or short paragraphs]
- **Link:** [https://...]

## [Section] — [Title]
[Repeat pattern: insight + link or resource.]

## [Section] — [Title / curated links]
| Resource | Note |
| --- | --- |
| [Title] | [Why it matters in one line] |

## Highlight / P.S.
- **P.S.** [Secondary CTA, personal note, or next issue teaser]

## Housekeeping (optional, delete if N/A)
- **Unsubscribe / preferences:** [link]
- **Sponsor / affiliate disclosure:** [if applicable]`,
  },
  {
    id: "writing-newsletter-curated-links",
    name: "Curated links newsletter",
    category: "writing",
    description: "Newsletter template: Curated links newsletter — high signal, low noise",
    tags: ["newsletter","links","curation","reading","roundup"],
    content: `# [Newsletter name] — [Issue # / date]

## Header
- **From:** [Name / org]
- **To:** [Segment or "all subscribers"]
- **Preview text (inbox line):** [≤~90 characters]
- **Type:** Curated links newsletter / high signal, low noise

## Opening (150–250 words max)
[1–2 short paragraphs. Voice + the single promise of this email.]

## Table of contents (optional)
1. [Section anchor]
2. [Section anchor]
3. [Section anchor]

## [Section] — [Title]
- **Summary:** [One sentence]
- **Detail:** [Bullets or short paragraphs]
- **Link:** [https://...]

## [Section] — [Title]
[Repeat pattern: insight + link or resource.]

## [Section] — [Title / curated links]
| Resource | Note |
| --- | --- |
| [Title] | [Why it matters in one line] |

## Highlight / P.S.
- **P.S.** [Secondary CTA, personal note, or next issue teaser]

## Housekeeping (optional, delete if N/A)
- **Unsubscribe / preferences:** [link]
- **Sponsor / affiliate disclosure:** [if applicable]`,
  },
  {
    id: "writing-newsletter-personal",
    name: "Personal / creator newsletter",
    category: "writing",
    description: "Newsletter template: Personal / creator newsletter — first-person, voice-forward",
    tags: ["newsletter","creator","personal","voice","engagement"],
    content: `# [Newsletter name] — [Issue # / date]

## Header
- **From:** [Name / org]
- **To:** [Segment or "all subscribers"]
- **Preview text (inbox line):** [≤~90 characters]
- **Type:** Personal / creator newsletter / first-person, voice-forward

## Opening (150–250 words max)
[1–2 short paragraphs. Voice + the single promise of this email.]

## Table of contents (optional)
1. [Section anchor]
2. [Section anchor]
3. [Section anchor]

## [Section] — [Title]
- **Summary:** [One sentence]
- **Detail:** [Bullets or short paragraphs]
- **Link:** [https://...]

## [Section] — [Title]
[Repeat pattern: insight + link or resource.]

## [Section] — [Title / curated links]
| Resource | Note |
| --- | --- |
| [Title] | [Why it matters in one line] |

## Highlight / P.S.
- **P.S.** [Secondary CTA, personal note, or next issue teaser]

## Housekeeping (optional, delete if N/A)
- **Unsubscribe / preferences:** [link]
- **Sponsor / affiliate disclosure:** [if applicable]`,
  },
  {
    id: "writing-newsletter-company",
    name: "Company / org newsletter",
    category: "writing",
    description: "Newsletter template: Company / org newsletter — stakeholder updates",
    tags: ["newsletter","company","stakeholder","internal","comms"],
    content: `# [Newsletter name] — [Issue # / date]

## Header
- **From:** [Name / org]
- **To:** [Segment or "all subscribers"]
- **Preview text (inbox line):** [≤~90 characters]
- **Type:** Company / org newsletter / stakeholder updates

## Opening (150–250 words max)
[1–2 short paragraphs. Voice + the single promise of this email.]

## Table of contents (optional)
1. [Section anchor]
2. [Section anchor]
3. [Section anchor]

## [Section] — [Title]
- **Summary:** [One sentence]
- **Detail:** [Bullets or short paragraphs]
- **Link:** [https://...]

## [Section] — [Title]
[Repeat pattern: insight + link or resource.]

## [Section] — [Title / curated links]
| Resource | Note |
| --- | --- |
| [Title] | [Why it matters in one line] |

## Highlight / P.S.
- **P.S.** [Secondary CTA, personal note, or next issue teaser]

## Housekeeping (optional, delete if N/A)
- **Unsubscribe / preferences:** [link]
- **Sponsor / affiliate disclosure:** [if applicable]`,
  },
  {
    id: "writing-book-outline-fiction",
    name: "Book outline: fiction",
    category: "writing",
    description: "A fiction book outline with act structure and research list.",
    tags: ["book","outline","structure","acts","planning"],
    content: `# Book outline: [Working title] — *fiction (genre tag)*

## Logline (one sentence)
[Protagonist] wants [goal] but [obstacle] because [internal flaw], leading to [stakes].

## Metadata
| Field | Notes |
| --- | --- |
| Genre / sub-genre | fiction (genre tag) |
| Comparable titles | [Comp titles + why] |
| Intended length | [word count] |
| POV & tense | [1st/3rd, present/past] |
| Market | [Adult / YA / category] |

## Premise (paragraph)
[2–3 sentences expanding the logline.]

## Characters (at a glance)
| Name | Role | Arc |
| --- | --- | --- |
| [Name] | Protagonist | [Wants/needs, change] |
| [Name] | Antagonist / force | [Opposes how] |

## Chapter or part outline
### Act I — Setup (approx. [%])
- Ch.1: [Inciting + ordinary world — beats]
- Ch.2: […]
- Ch.3: […]

### Act II — Confrontation (approx. [%])
- [Escalation, try/fail, midpoint twist]
- […]

### Act III — Resolution (approx. [%])
- [Crisis, climax, new equilibrium]
- […]

## Thematic through-line
- **Theme question:** [Open question the book "answers" by showing]
- **Motifs / symbols (optional):** [list]

## Research / worldbuilding list
- [Source / topic] — *Priority:* P0 / P1`,
  },
  {
    id: "writing-book-outline-non-fiction",
    name: "Book outline: non fiction",
    category: "writing",
    description: "A non fiction book outline with act structure and research list.",
    tags: ["book","outline","structure","acts","planning"],
    content: `# Book outline: [Working title] — *non fiction (genre tag)*

## Logline (one sentence)
[Protagonist] wants [goal] but [obstacle] because [internal flaw], leading to [stakes].

## Metadata
| Field | Notes |
| --- | --- |
| Genre / sub-genre | non fiction (genre tag) |
| Comparable titles | [Comp titles + why] |
| Intended length | [word count] |
| POV & tense | [1st/3rd, present/past] |
| Market | [Adult / YA / category] |

## Premise (paragraph)
[2–3 sentences expanding the logline.]

## Characters (at a glance)
| Name | Role | Arc |
| --- | --- | --- |
| [Name] | Protagonist | [Wants/needs, change] |
| [Name] | Antagonist / force | [Opposes how] |

## Chapter or part outline
### Act I — Setup (approx. [%])
- Ch.1: [Inciting + ordinary world — beats]
- Ch.2: […]
- Ch.3: […]

### Act II — Confrontation (approx. [%])
- [Escalation, try/fail, midpoint twist]
- […]

### Act III — Resolution (approx. [%])
- [Crisis, climax, new equilibrium]
- […]

## Thematic through-line
- **Theme question:** [Open question the book "answers" by showing]
- **Motifs / symbols (optional):** [list]

## Research / worldbuilding list
- [Source / topic] — *Priority:* P0 / P1`,
  },
  {
    id: "writing-book-outline-memoir",
    name: "Book outline: memoir",
    category: "writing",
    description: "A memoir book outline with act structure and research list.",
    tags: ["book","outline","structure","acts","planning"],
    content: `# Book outline: [Working title] — *memoir (genre tag)*

## Logline (one sentence)
[Protagonist] wants [goal] but [obstacle] because [internal flaw], leading to [stakes].

## Metadata
| Field | Notes |
| --- | --- |
| Genre / sub-genre | memoir (genre tag) |
| Comparable titles | [Comp titles + why] |
| Intended length | [word count] |
| POV & tense | [1st/3rd, present/past] |
| Market | [Adult / YA / category] |

## Premise (paragraph)
[2–3 sentences expanding the logline.]

## Characters (at a glance)
| Name | Role | Arc |
| --- | --- | --- |
| [Name] | Protagonist | [Wants/needs, change] |
| [Name] | Antagonist / force | [Opposes how] |

## Chapter or part outline
### Act I — Setup (approx. [%])
- Ch.1: [Inciting + ordinary world — beats]
- Ch.2: […]
- Ch.3: […]

### Act II — Confrontation (approx. [%])
- [Escalation, try/fail, midpoint twist]
- […]

### Act III — Resolution (approx. [%])
- [Crisis, climax, new equilibrium]
- […]

## Thematic through-line
- **Theme question:** [Open question the book "answers" by showing]
- **Motifs / symbols (optional):** [list]

## Research / worldbuilding list
- [Source / topic] — *Priority:* P0 / P1`,
  },
  {
    id: "writing-book-outline-self-help",
    name: "Book outline: self help",
    category: "writing",
    description: "A self help book outline with act structure and research list.",
    tags: ["book","outline","structure","acts","planning"],
    content: `# Book outline: [Working title] — *self help (genre tag)*

## Logline (one sentence)
[Protagonist] wants [goal] but [obstacle] because [internal flaw], leading to [stakes].

## Metadata
| Field | Notes |
| --- | --- |
| Genre / sub-genre | self help (genre tag) |
| Comparable titles | [Comp titles + why] |
| Intended length | [word count] |
| POV & tense | [1st/3rd, present/past] |
| Market | [Adult / YA / category] |

## Premise (paragraph)
[2–3 sentences expanding the logline.]

## Characters (at a glance)
| Name | Role | Arc |
| --- | --- | --- |
| [Name] | Protagonist | [Wants/needs, change] |
| [Name] | Antagonist / force | [Opposes how] |

## Chapter or part outline
### Act I — Setup (approx. [%])
- Ch.1: [Inciting + ordinary world — beats]
- Ch.2: […]
- Ch.3: […]

### Act II — Confrontation (approx. [%])
- [Escalation, try/fail, midpoint twist]
- […]

### Act III — Resolution (approx. [%])
- [Crisis, climax, new equilibrium]
- […]

## Thematic through-line
- **Theme question:** [Open question the book "answers" by showing]
- **Motifs / symbols (optional):** [list]

## Research / worldbuilding list
- [Source / topic] — *Priority:* P0 / P1`,
  },
  {
    id: "writing-book-outline-technical",
    name: "Book outline: technical",
    category: "writing",
    description: "A technical book outline with act structure and research list.",
    tags: ["book","outline","structure","acts","planning"],
    content: `# Book outline: [Working title] — *technical (genre tag)*

## Logline (one sentence)
[Protagonist] wants [goal] but [obstacle] because [internal flaw], leading to [stakes].

## Metadata
| Field | Notes |
| --- | --- |
| Genre / sub-genre | technical (genre tag) |
| Comparable titles | [Comp titles + why] |
| Intended length | [word count] |
| POV & tense | [1st/3rd, present/past] |
| Market | [Adult / YA / category] |

## Premise (paragraph)
[2–3 sentences expanding the logline.]

## Characters (at a glance)
| Name | Role | Arc |
| --- | --- | --- |
| [Name] | Protagonist | [Wants/needs, change] |
| [Name] | Antagonist / force | [Opposes how] |

## Chapter or part outline
### Act I — Setup (approx. [%])
- Ch.1: [Inciting + ordinary world — beats]
- Ch.2: […]
- Ch.3: […]

### Act II — Confrontation (approx. [%])
- [Escalation, try/fail, midpoint twist]
- […]

### Act III — Resolution (approx. [%])
- [Crisis, climax, new equilibrium]
- […]

## Thematic through-line
- **Theme question:** [Open question the book "answers" by showing]
- **Motifs / symbols (optional):** [list]

## Research / worldbuilding list
- [Source / topic] — *Priority:* P0 / P1`,
  },
  {
    id: "writing-book-outline-childrens",
    name: "Book outline: children’s",
    category: "writing",
    description: "A children’s book outline with act structure and research list.",
    tags: ["book","outline","structure","acts","planning"],
    content: `# Book outline: [Working title] — *children’s (genre tag)*

## Logline (one sentence)
[Protagonist] wants [goal] but [obstacle] because [internal flaw], leading to [stakes].

## Metadata
| Field | Notes |
| --- | --- |
| Genre / sub-genre | children’s (genre tag) |
| Comparable titles | [Comp titles + why] |
| Intended length | [word count] |
| POV & tense | [1st/3rd, present/past] |
| Market | [Adult / YA / category] |

## Premise (paragraph)
[2–3 sentences expanding the logline.]

## Characters (at a glance)
| Name | Role | Arc |
| --- | --- | --- |
| [Name] | Protagonist | [Wants/needs, change] |
| [Name] | Antagonist / force | [Opposes how] |

## Chapter or part outline
### Act I — Setup (approx. [%])
- Ch.1: [Inciting + ordinary world — beats]
- Ch.2: […]
- Ch.3: […]

### Act II — Confrontation (approx. [%])
- [Escalation, try/fail, midpoint twist]
- […]

### Act III — Resolution (approx. [%])
- [Crisis, climax, new equilibrium]
- […]

## Thematic through-line
- **Theme question:** [Open question the book "answers" by showing]
- **Motifs / symbols (optional):** [list]

## Research / worldbuilding list
- [Source / topic] — *Priority:* P0 / P1`,
  },
  {
    id: "writing-chapter-opening",
    name: "Chapter draft outline: opening",
    category: "writing",
    description: "Scene-level scaffold for a opening chapter (fiction or narrative NF).",
    tags: ["chapter","fiction","structure","scene","pacing"],
    content: `# [Opening chapter] — *Working title*

## Chapter aim
- **In-one-line purpose:** [What the reader *gets* from this chapter]
- **Plot job:** [Advance, reveal, delay, or pivot: specify]
- **Emotional job:** [Reader should feel: …]

## Point of view & time
- **POV character:** [Name] — *Knowledge limits:* [what they can’t know yet]
- **When / where:** [Time anchor + setting snapshot]

## Scene list (2–4 scenes typical)
| Scene | Location | Beat | Outcome |
| --- | --- | --- | --- |
| 1 | [Where] | [Action/reveal] | [What changes] |
| 2 | […] | […] | […] |

## Draft beats (prose prompts)
### Opening of chapter
[First image or line of action; avoid throat-clearing.]

### Middle — complications
- **Stimulus:** [Event]
- **Response:** [Character choice] — *Consequence:* […]

### Close
- **Reversal / revelation (if any):** […]
- **Hand-off to next chapter (hook):** […]

## Revision checklist
- [ ] Each scene has a turn (information, power, or emotion shifts)
- [ ] Dialogue subtext: what characters won’t say outright
- [ ] Sensory anchors every ~1–2 paragraphs`,
  },
  {
    id: "writing-chapter-middle",
    name: "Chapter draft outline: middle",
    category: "writing",
    description: "Scene-level scaffold for a middle chapter (fiction or narrative NF).",
    tags: ["chapter","fiction","structure","scene","pacing"],
    content: `# [Middle chapter] — *Working title*

## Chapter aim
- **In-one-line purpose:** [What the reader *gets* from this chapter]
- **Plot job:** [Advance, reveal, delay, or pivot: specify]
- **Emotional job:** [Reader should feel: …]

## Point of view & time
- **POV character:** [Name] — *Knowledge limits:* [what they can’t know yet]
- **When / where:** [Time anchor + setting snapshot]

## Scene list (2–4 scenes typical)
| Scene | Location | Beat | Outcome |
| --- | --- | --- | --- |
| 1 | [Where] | [Action/reveal] | [What changes] |
| 2 | […] | […] | […] |

## Draft beats (prose prompts)
### Opening of chapter
[First image or line of action; avoid throat-clearing.]

### Middle — complications
- **Stimulus:** [Event]
- **Response:** [Character choice] — *Consequence:* […]

### Close
- **Reversal / revelation (if any):** […]
- **Hand-off to next chapter (hook):** […]

## Revision checklist
- [ ] Each scene has a turn (information, power, or emotion shifts)
- [ ] Dialogue subtext: what characters won’t say outright
- [ ] Sensory anchors every ~1–2 paragraphs`,
  },
  {
    id: "writing-chapter-climax",
    name: "Chapter draft outline: climax",
    category: "writing",
    description: "Scene-level scaffold for a climax chapter (fiction or narrative NF).",
    tags: ["chapter","fiction","structure","scene","pacing"],
    content: `# [Climax chapter] — *Working title*

## Chapter aim
- **In-one-line purpose:** [What the reader *gets* from this chapter]
- **Plot job:** [Advance, reveal, delay, or pivot: specify]
- **Emotional job:** [Reader should feel: …]

## Point of view & time
- **POV character:** [Name] — *Knowledge limits:* [what they can’t know yet]
- **When / where:** [Time anchor + setting snapshot]

## Scene list (2–4 scenes typical)
| Scene | Location | Beat | Outcome |
| --- | --- | --- | --- |
| 1 | [Where] | [Action/reveal] | [What changes] |
| 2 | […] | […] | […] |

## Draft beats (prose prompts)
### Opening of chapter
[First image or line of action; avoid throat-clearing.]

### Middle — complications
- **Stimulus:** [Event]
- **Response:** [Character choice] — *Consequence:* […]

### Peak tension
- **Reversal / revelation (if any):** […]
- **Hand-off to next chapter (hook):** […]

## Revision checklist
- [ ] Each scene has a turn (information, power, or emotion shifts)
- [ ] Dialogue subtext: what characters won’t say outright
- [ ] Sensory anchors every ~1–2 paragraphs`,
  },
  {
    id: "writing-chapter-resolution",
    name: "Chapter draft outline: resolution",
    category: "writing",
    description: "Scene-level scaffold for a resolution chapter (fiction or narrative NF).",
    tags: ["chapter","fiction","structure","scene","pacing"],
    content: `# [Resolution chapter] — *Working title*

## Chapter aim
- **In-one-line purpose:** [What the reader *gets* from this chapter]
- **Plot job:** [Advance, reveal, delay, or pivot: specify]
- **Emotional job:** [Reader should feel: …]

## Point of view & time
- **POV character:** [Name] — *Knowledge limits:* [what they can’t know yet]
- **When / where:** [Time anchor + setting snapshot]

## Scene list (2–4 scenes typical)
| Scene | Location | Beat | Outcome |
| --- | --- | --- | --- |
| 1 | [Where] | [Action/reveal] | [What changes] |
| 2 | […] | […] | […] |

## Draft beats (prose prompts)
### Opening of chapter
[First image or line of action; avoid throat-clearing.]

### Middle — complications
- **Stimulus:** [Event]
- **Response:** [Character choice] — *Consequence:* […]

### Close
- **Reversal / revelation (if any):** […]
- **Hand-off to next chapter (hook):** […]

## Revision checklist
- [ ] Each scene has a turn (information, power, or emotion shifts)
- [ ] Dialogue subtext: what characters won’t say outright
- [ ] Sensory anchors every ~1–2 paragraphs`,
  },
  {
    id: "writing-chapter-epilogue",
    name: "Chapter draft outline: epilogue",
    category: "writing",
    description: "Scene-level scaffold for a epilogue chapter (fiction or narrative NF).",
    tags: ["chapter","fiction","structure","scene","pacing"],
    content: `# [Epilogue chapter] — *Working title*

## Chapter aim
- **In-one-line purpose:** [What the reader *gets* from this chapter]
- **Plot job:** [Advance, reveal, delay, or pivot: specify]
- **Emotional job:** [Reader should feel: …]

## Point of view & time
- **POV character:** [Name] — *Knowledge limits:* [what they can’t know yet]
- **When / where:** [Time anchor + setting snapshot]

## Scene list (2–4 scenes typical)
| Scene | Location | Beat | Outcome |
| --- | --- | --- | --- |
| 1 | [Where] | [Action/reveal] | [What changes] |
| 2 | […] | […] | […] |

## Draft beats (prose prompts)
### Opening of chapter
[First image or line of action; avoid throat-clearing.]

### Middle — complications
- **Stimulus:** [Event]
- **Response:** [Character choice] — *Consequence:* […]

### Close
- **Reversal / revelation (if any):** […]
- **Hand-off to next chapter (hook):** […]

## Revision checklist
- [ ] Each scene has a turn (information, power, or emotion shifts)
- [ ] Dialogue subtext: what characters won’t say outright
- [ ] Sensory anchors every ~1–2 paragraphs`,
  },
  {
    id: "writing-chapter-prologue",
    name: "Chapter draft outline: prologue",
    category: "writing",
    description: "Scene-level scaffold for a prologue chapter (fiction or narrative NF).",
    tags: ["chapter","fiction","structure","scene","pacing"],
    content: `# [Prologue chapter] — *Working title*

## Chapter aim
- **In-one-line purpose:** [What the reader *gets* from this chapter]
- **Plot job:** [Advance, reveal, delay, or pivot: specify]
- **Emotional job:** [Reader should feel: …]

## Point of view & time
- **POV character:** [Name] — *Knowledge limits:* [what they can’t know yet]
- **When / where:** [Time anchor + setting snapshot]

## Scene list (2–4 scenes typical)
| Scene | Location | Beat | Outcome |
| --- | --- | --- | --- |
| 1 | [Where] | [Action/reveal] | [What changes] |
| 2 | […] | […] | […] |

## Draft beats (prose prompts)
### Opening of chapter
[First image or line of action; avoid throat-clearing.]

### Middle — complications
- **Stimulus:** [Event]
- **Response:** [Character choice] — *Consequence:* […]

### Close
- **Reversal / revelation (if any):** […]
- **Hand-off to next chapter (hook):** […]

## Revision checklist
- [ ] Each scene has a turn (information, power, or emotion shifts)
- [ ] Dialogue subtext: what characters won’t say outright
- [ ] Sensory anchors every ~1–2 paragraphs`,
  },
  {
    id: "writing-character-protagonist",
    name: "Character sheet: protagonist",
    category: "writing",
    description: "Character development worksheet for a protagonist character.",
    tags: ["character","backstory","arc","fiction","development"],
    content: `# Character sheet: [protagonist] — [Name as placeholder]

## One-line
[Role] who [defining want] despite [fear/constraint], speaks in [voice tics/lexicon].

## Snapshot
| Field | Detail |
| --- | --- |
| Age / era | […] |
| Public role | [Job / class / reputation] |
| Private self | [What only few know] |
| Mannerisms | [2–3] |
| Default strategy under stress | [fight/flight/appease/…] |

## Backstory (only what affects present plot)
- **Formative event:** […]
- **Ongoing pressure:** […]
- **Secret or lie they tell themselves:** […]

## Wants and needs
- **External want (plot):** […]
- **Internal need (theme):** […]
- **Moral line they won’t cross (until / unless):** […]

## Relationships (matrix)
| Character | Dynamic | Tension |
| --- | --- | --- |
| [Name] | [ally/rival/love] | [source of conflict] |

## Arc plan
- **Start belief:** […]
- **Pressure that cracks it:** […]
- **Crisis choice:** […]
- **End state:** [earned or tragic — specify]`,
  },
  {
    id: "writing-character-antagonist",
    name: "Character sheet: antagonist",
    category: "writing",
    description: "Character development worksheet for a antagonist character.",
    tags: ["character","backstory","arc","fiction","development"],
    content: `# Character sheet: [antagonist] — [Name as placeholder]

## One-line
[Role] who [defining want] despite [fear/constraint], speaks in [voice tics/lexicon].

## Snapshot
| Field | Detail |
| --- | --- |
| Age / era | […] |
| Public role | [Job / class / reputation] |
| Private self | [What only few know] |
| Mannerisms | [2–3] |
| Default strategy under stress | [fight/flight/appease/…] |

## Backstory (only what affects present plot)
- **Formative event:** […]
- **Ongoing pressure:** […]
- **Secret or lie they tell themselves:** […]

## Wants and needs
- **External want (plot):** […]
- **Internal need (theme):** […]
- **Moral line they won’t cross (until / unless):** […]

## Relationships (matrix)
| Character | Dynamic | Tension |
| --- | --- | --- |
| [Name] | [ally/rival/love] | [source of conflict] |

## Arc plan
- **Start belief:** […]
- **Pressure that cracks it:** […]
- **Crisis choice:** […]
- **End state:** [earned or tragic — specify]`,
  },
  {
    id: "writing-character-supporting",
    name: "Character sheet: supporting",
    category: "writing",
    description: "Character development worksheet for a supporting character.",
    tags: ["character","backstory","arc","fiction","development"],
    content: `# Character sheet: [supporting] — [Name as placeholder]

## One-line
[Role] who [defining want] despite [fear/constraint], speaks in [voice tics/lexicon].

## Snapshot
| Field | Detail |
| --- | --- |
| Age / era | […] |
| Public role | [Job / class / reputation] |
| Private self | [What only few know] |
| Mannerisms | [2–3] |
| Default strategy under stress | [fight/flight/appease/…] |

## Backstory (only what affects present plot)
- **Formative event:** […]
- **Ongoing pressure:** […]
- **Secret or lie they tell themselves:** […]

## Wants and needs
- **External want (plot):** […]
- **Internal need (theme):** […]
- **Moral line they won’t cross (until / unless):** […]

## Relationships (matrix)
| Character | Dynamic | Tension |
| --- | --- | --- |
| [Name] | [ally/rival/love] | [source of conflict] |

## Arc plan
- **Start belief:** […]
- **Pressure that cracks it:** […]
- **Crisis choice:** […]
- **End state:** [earned or tragic — specify]`,
  },
  {
    id: "writing-character-minor",
    name: "Character sheet: minor",
    category: "writing",
    description: "Character development worksheet for a minor character.",
    tags: ["character","backstory","arc","fiction","development"],
    content: `# Character sheet: [minor] — [Name as placeholder]

## One-line
[Role] who [defining want] despite [fear/constraint], speaks in [voice tics/lexicon].

## Snapshot
| Field | Detail |
| --- | --- |
| Age / era | […] |
| Public role | [Job / class / reputation] |
| Private self | [What only few know] |
| Mannerisms | [2–3] |
| Default strategy under stress | [fight/flight/appease/…] |

## Backstory (only what affects present plot)
- **Formative event:** […]
- **Ongoing pressure:** […]
- **Secret or lie they tell themselves:** […]

## Wants and needs
- **External want (plot):** […]
- **Internal need (theme):** […]
- **Moral line they won’t cross (until / unless):** […]

## Relationships (matrix)
| Character | Dynamic | Tension |
| --- | --- | --- |
| [Name] | [ally/rival/love] | [source of conflict] |

## Arc plan
- **Start belief:** […]
- **Pressure that cracks it:** […]
- **Crisis choice:** […]
- **End state:** [earned or tragic — specify]`,
  },
  {
    id: "writing-character-group-ensemble",
    name: "Character sheet: group ensemble",
    category: "writing",
    description: "Character development worksheet for a group ensemble character.",
    tags: ["character","backstory","arc","fiction","development"],
    content: `# Character sheet: [group ensemble] — [Name as placeholder]

## One-line
[Role] who [defining want] despite [fear/constraint], speaks in [voice tics/lexicon].

## Snapshot
| Field | Detail |
| --- | --- |
| Age / era | […] |
| Public role | [Job / class / reputation] |
| Private self | [What only few know] |
| Mannerisms | [2–3] |
| Default strategy under stress | [fight/flight/appease/…] |

## Backstory (only what affects present plot)
- **Formative event:** […]
- **Ongoing pressure:** […]
- **Secret or lie they tell themselves:** […]

## Wants and needs
- **External want (plot):** […]
- **Internal need (theme):** […]
- **Moral line they won’t cross (until / unless):** […]

## Relationships (matrix)
| Character | Dynamic | Tension |
| --- | --- | --- |
| [Name] | [ally/rival/love] | [source of conflict] |

## Arc plan
- **Start belief:** […]
- **Pressure that cracks it:** […]
- **Crisis choice:** […]
- **End state:** [earned or tragic — specify]`,
  },
  {
    id: "writing-beat-three-act",
    name: "Three-act structure (beats)",
    category: "writing",
    description: "Plot beat list using *3-act + pinch points (labels editable)* — adapt labels to your medium.",
    tags: ["plot","outlining","structure","screenwriting","fiction"],
    content: `# Story beats — *Three-act structure / 3-act + pinch points (labels editable)*

## Logline / premise
[1–2 sentences. Who wants what, blocked by what, with what at stake?]

## Beat list (edit labels to your framework’s naming)
| # | Label | What happens (external) | Character meaning (internal) |
| --- | --- | --- | --- |
| 1 | [Opening / Ordinary world] | […] | […] |
| 2 | [Inciting / Call] | […] | […] |
| 3 | [Debate or refusal] | […] | […] |
| 4 | [Break into Act II] | […] | […] |
| 5 | [Fun & games / trials] | […] | […] |
| 6 | [Midpoint] | […] | […] |
| 7 | [Bad guys close in / tests] | […] | […] |
| 8 | [All is lost] | […] | […] |
| 9 | [Dark night / epiphany] | […] | […] |
| 10 | [Finale / new equilibrium] | […] | […] |

## Pinch points (optional rows)
- **A-story:** […] | **B-story:** […]

## B / C / theme threads to track
- **Subplot 1:** […]
- **Thematic line:** […]`,
  },
  {
    id: "writing-beat-heros-journey",
    name: "Hero’s journey (Campbell)  (beats)",
    category: "writing",
    description: "Plot beat list using *journey / road of trials (labels match your deck)* — adapt labels to your medium.",
    tags: ["plot","outlining","structure","screenwriting","fiction"],
    content: `# Story beats — *Hero’s journey (Campbell)  / journey / road of trials (labels match your deck)*

## Logline / premise
[1–2 sentences. Who wants what, blocked by what, with what at stake?]

## Beat list (edit labels to your framework’s naming)
| # | Label | What happens (external) | Character meaning (internal) |
| --- | --- | --- | --- |
| 1 | [Opening / Ordinary world] | […] | […] |
| 2 | [Inciting / Call] | […] | […] |
| 3 | [Debate or refusal] | […] | […] |
| 4 | [Break into Act II] | […] | […] |
| 5 | [Fun & games / trials] | […] | […] |
| 6 | [Midpoint] | […] | […] |
| 7 | [Bad guys close in / tests] | […] | […] |
| 8 | [All is lost] | […] | […] |
| 9 | [Dark night / epiphany] | […] | […] |
| 10 | [Finale / new equilibrium] | […] | […] |

## Pinch points (optional rows)
- **A-story:** […] | **B-story:** […]

## B / C / theme threads to track
- **Subplot 1:** […]
- **Thematic line:** […]`,
  },
  {
    id: "writing-beat-save-the-cat",
    name: "Save the Cat beat sheet (film)  (beats)",
    category: "writing",
    description: "Plot beat list using *with flexible beat labels* — adapt labels to your medium.",
    tags: ["plot","outlining","structure","screenwriting","fiction"],
    content: `# Story beats — *Save the Cat beat sheet (film)  / with flexible beat labels*

## Logline / premise
[1–2 sentences. Who wants what, blocked by what, with what at stake?]

## Beat list (edit labels to your framework’s naming)
| # | Label | What happens (external) | Character meaning (internal) |
| --- | --- | --- | --- |
| 1 | [Opening / Ordinary world] | […] | […] |
| 2 | [Inciting / Call] | […] | […] |
| 3 | [Debate or refusal] | […] | […] |
| 4 | [Break into Act II] | […] | […] |
| 5 | [Fun & games / trials] | […] | […] |
| 6 | [Midpoint] | […] | […] |
| 7 | [Bad guys close in / tests] | […] | […] |
| 8 | [All is lost] | […] | […] |
| 9 | [Dark night / epiphany] | […] | […] |
| 10 | [Finale / new equilibrium] | […] | […] |

## Pinch points (optional rows)
- **A-story:** […] | **B-story:** […]

## B / C / theme threads to track
- **Subplot 1:** […]
- **Thematic line:** […]`,
  },
  {
    id: "writing-beat-seven-point",
    name: "Seven-point story structure (beats)",
    category: "writing",
    description: "Plot beat list using *hook → second hook → deepening …* — adapt labels to your medium.",
    tags: ["plot","outlining","structure","screenwriting","fiction"],
    content: `# Story beats — *Seven-point story structure / hook → second hook → deepening …*

## Logline / premise
[1–2 sentences. Who wants what, blocked by what, with what at stake?]

## Beat list (edit labels to your framework’s naming)
| # | Label | What happens (external) | Character meaning (internal) |
| --- | --- | --- | --- |
| 1 | [Opening / Ordinary world] | […] | […] |
| 2 | [Inciting / Call] | […] | […] |
| 3 | [Debate or refusal] | […] | […] |
| 4 | [Break into Act II] | […] | […] |
| 5 | [Fun & games / trials] | […] | […] |
| 6 | [Midpoint] | […] | […] |
| 7 | [Bad guys close in / tests] | […] | […] |
| 8 | [All is lost] | […] | […] |
| 9 | [Dark night / epiphany] | […] | […] |
| 10 | [Finale / new equilibrium] | […] | […] |

## Pinch points (optional rows)
- **A-story:** […] | **B-story:** […]

## B / C / theme threads to track
- **Subplot 1:** […]
- **Thematic line:** […]`,
  },
  {
    id: "writing-prompt-fiction",
    name: "Writing prompts: fiction",
    category: "writing",
    description: "Five timed prompts in the fiction mode; constraints to force novelty.",
    tags: ["fiction","prompts","exercises","practice","generative"],
    content: `# Writing prompts — *fiction*

> Use one prompt at a time. Set a 15 / 30 / 60 minute timer. Minimum word count: [Your rule].

## Prompt 1
- **Starter line:** *"[…]"*
- **Constraint:** [Must include: e.g. a broken object, a lie, a weather change]
- **Point of view:** [1st / 3rd / omniscient]

## Prompt 2
- **Image seed:** [Describe a still image in 1 sentence]
- **Complication (minute 20):** [Event that breaks the stillness]

## Prompt 3
- **In media res line:** *"[First line in the middle of action]"*
- **Reveal by end:** [One secret the reader should learn]

## Prompt 4
- **Form twist:** [Letter / transcript / listicle / Q&A] written by [narrator type]
- **Omission rule:** [Do not use the word "…" or name "…" until last paragraph]

## Prompt 5 (hard mode)
- **Two colliding values:** [A] vs. [B]; protagonist must pick under time pressure
- **Stakes if wrong pick:** […]`,
  },
  {
    id: "writing-prompt-non-fiction",
    name: "Writing prompts: non-fiction",
    category: "writing",
    description: "Five timed prompts in the non-fiction mode; constraints to force novelty.",
    tags: ["non-fiction","prompts","exercises","practice","generative"],
    content: `# Writing prompts — *non-fiction*

> Use one prompt at a time. Set a 15 / 30 / 60 minute timer. Minimum word count: [Your rule].

## Prompt 1
- **Starter line:** *"[…]"*
- **Constraint:** [Must include: e.g. a broken object, a lie, a weather change]
- **Point of view:** [1st / 3rd / omniscient]

## Prompt 2
- **Image seed:** [Describe a still image in 1 sentence]
- **Complication (minute 20):** [Event that breaks the stillness]

## Prompt 3
- **In media res line:** *"[First line in the middle of action]"*
- **Reveal by end:** [One secret the reader should learn]

## Prompt 4
- **Form twist:** [Letter / transcript / listicle / Q&A] written by [narrator type]
- **Omission rule:** [Do not use the word "…" or name "…" until last paragraph]

## Prompt 5 (hard mode)
- **Two colliding values:** [A] vs. [B]; protagonist must pick under time pressure
- **Stakes if wrong pick:** […]`,
  },
  {
    id: "writing-prompt-poetry",
    name: "Writing prompts: poetry",
    category: "writing",
    description: "Five timed prompts in the poetry mode; constraints to force novelty.",
    tags: ["poetry","prompts","exercises","practice","generative"],
    content: `# Writing prompts — *poetry*

> Use one prompt at a time. Set a 15 / 30 / 60 minute timer. Minimum word count: [Your rule].

## Prompt 1
- **Starter line:** *"[…]"*
- **Constraint:** [Must include: e.g. a broken object, a lie, a weather change]
- **Point of view:** [1st / 3rd / omniscient]

## Prompt 2
- **Image seed:** [Describe a still image in 1 sentence]
- **Complication (minute 20):** [Event that breaks the stillness]

## Prompt 3
- **In media res line:** *"[First line in the middle of action]"*
- **Reveal by end:** [One secret the reader should learn]

## Prompt 4
- **Form twist:** [Letter / transcript / listicle / Q&A] written by [narrator type]
- **Omission rule:** [Do not use the word "…" or name "…" until last paragraph]

## Prompt 5 (hard mode)
- **Two colliding values:** [A] vs. [B]; protagonist must pick under time pressure
- **Stakes if wrong pick:** […]`,
  },
  {
    id: "writing-prompt-screenplay",
    name: "Writing prompts: screenplay",
    category: "writing",
    description: "Five timed prompts in the screenplay mode; constraints to force novelty.",
    tags: ["screenplay","prompts","exercises","practice","generative"],
    content: `# Writing prompts — *screenplay*

> Use one prompt at a time. Set a 15 / 30 / 60 minute timer. Minimum word count: [Your rule].

## Prompt 1
- **Starter line:** *"[…]"*
- **Constraint:** [Must include: e.g. a broken object, a lie, a weather change]
- **Point of view:** [1st / 3rd / omniscient]

## Prompt 2
- **Image seed:** [Describe a still image in 1 sentence]
- **Complication (minute 20):** [Event that breaks the stillness]

## Prompt 3
- **In media res line:** *"[First line in the middle of action]"*
- **Reveal by end:** [One secret the reader should learn]

## Prompt 4
- **Form twist:** [Letter / transcript / listicle / Q&A] written by [narrator type]
- **Omission rule:** [Do not use the word "…" or name "…" until last paragraph]

## Prompt 5 (hard mode)
- **Two colliding values:** [A] vs. [B]; protagonist must pick under time pressure
- **Stakes if wrong pick:** […]`,
  },
  {
    id: "writing-prompt-journaling",
    name: "Writing prompts: journaling",
    category: "writing",
    description: "Five timed prompts in the journaling mode; constraints to force novelty.",
    tags: ["journaling","prompts","exercises","practice","generative"],
    content: `# Writing prompts — *journaling*

> Use one prompt at a time. Set a 15 / 30 / 60 minute timer. Minimum word count: [Your rule].

## Prompt 1
- **Starter line:** *"[…]"*
- **Constraint:** [Must include: e.g. a broken object, a lie, a weather change]
- **Point of view:** [1st / 3rd / omniscient]

## Prompt 2
- **Image seed:** [Describe a still image in 1 sentence]
- **Complication (minute 20):** [Event that breaks the stillness]

## Prompt 3
- **In media res line:** *"[First line in the middle of action]"*
- **Reveal by end:** [One secret the reader should learn]

## Prompt 4
- **Form twist:** [Letter / transcript / listicle / Q&A] written by [narrator type]
- **Omission rule:** [Do not use the word "…" or name "…" until last paragraph]

## Prompt 5 (hard mode)
- **Two colliding values:** [A] vs. [B]; protagonist must pick under time pressure
- **Stakes if wrong pick:** […]`,
  },
  {
    id: "writing-screenplay-scene",
    name: "Screenplay: single scene (slug line + action + dialogue)",
    category: "writing",
    description: "Screenwriting scaffold for: scene",
    tags: ["screenplay","film","script","scene","scene"],
    content: `# Screenplay: single scene (slug line + action + dialogue) — *Working title*

*Draft format reference: slug lines UPPER; keep action present tense, active voice; ~1 page ≈ 1 min screen time (rule of thumb).*

## FADE IN: / or title card (if any)

**EXT./INT. [LOCATION] – [TIME]**

*(Action block: what we see and hear. Keep lines ~4 lines or fewer before a break. Name characters when first seen.)*

CHARACTER NAME (parenthetical: beat or delivery)
Spoken line. No quotes inside dialogue. Break long speeches.

CHARACTER NAME
Response line with subtext: they mean […] but say […].

*(Optional beat / reaction — no more than 2 lines)*

**EXT./INT. [Next location] – [Continuous / later]**

| Note | For later revision |
| --- | --- |
| B-story beat | […] |
| Plant | [Set-up to pay in scene __] |
| Music/sound idea | […] |

## [Act / sequence note — delete from script deck]
- **Dramatic question this scene tests:** […]
- **Turn / reversal:** […]`,
  },
  {
    id: "writing-screenplay-treatment",
    name: "Screenplay treatment (sequence-level prose)",
    category: "writing",
    description: "Screenwriting scaffold for: treatment",
    tags: ["screenplay","film","script","treatment","scene"],
    content: `# Screenplay treatment (sequence-level prose) — *Working title*

*Draft format reference: slug lines UPPER; keep action present tense, active voice; ~1 page ≈ 1 min screen time (rule of thumb).*

## FADE IN: / or title card (if any)

**EXT./INT. [LOCATION] – [TIME]**

*(Action block: what we see and hear. Keep lines ~4 lines or fewer before a break. Name characters when first seen.)*

CHARACTER NAME (parenthetical: beat or delivery)
Spoken line. No quotes inside dialogue. Break long speeches.

CHARACTER NAME
Response line with subtext: they mean […] but say […].

*(Optional beat / reaction — no more than 2 lines)*

**EXT./INT. [Next location] – [Continuous / later]**

| Note | For later revision |
| --- | --- |
| B-story beat | […] |
| Plant | [Set-up to pay in scene __] |
| Music/sound idea | […] |

## [Act / sequence note — delete from script deck]
- **Dramatic question this scene tests:** […]
- **Turn / reversal:** […]`,
  },
  {
    id: "writing-screenplay-logline-collection",
    name: "Logline collection (1–2 sentence pitches)",
    category: "writing",
    description: "Screenwriting scaffold for: logline collection",
    tags: ["screenplay","film","script","logline","scene"],
    content: `# Logline collection (1–2 sentence pitches) — *Working title*

*Draft format reference: slug lines UPPER; keep action present tense, active voice; ~1 page ≈ 1 min screen time (rule of thumb).*

## FADE IN: / or title card (if any)

**EXT./INT. [LOCATION] – [TIME]**

*(Action block: what we see and hear. Keep lines ~4 lines or fewer before a break. Name characters when first seen.)*

CHARACTER NAME (parenthetical: beat or delivery)
Spoken line. No quotes inside dialogue. Break long speeches.

CHARACTER NAME
Response line with subtext: they mean […] but say […].

*(Optional beat / reaction — no more than 2 lines)*

**EXT./INT. [Next location] – [Continuous / later]**

| Note | For later revision |
| --- | --- |
| B-story beat | […] |
| Plant | [Set-up to pay in scene __] |
| Music/sound idea | […] |

## [Act / sequence note — delete from script deck]
- **Dramatic question this scene tests:** […]
- **Turn / reversal:** […]`,
  },
  {
    id: "writing-screenplay-beat-sheet",
    name: "Feature beat sheet (sequence vs scene) ",
    category: "writing",
    description: "Screenwriting scaffold for: beat sheet",
    tags: ["screenplay","film","script","beat","scene"],
    content: `# Feature beat sheet (sequence vs scene)  — *Working title*

*Draft format reference: slug lines UPPER; keep action present tense, active voice; ~1 page ≈ 1 min screen time (rule of thumb).*

## FADE IN: / or title card (if any)

**EXT./INT. [LOCATION] – [TIME]**

*(Action block: what we see and hear. Keep lines ~4 lines or fewer before a break. Name characters when first seen.)*

CHARACTER NAME (parenthetical: beat or delivery)
Spoken line. No quotes inside dialogue. Break long speeches.

CHARACTER NAME
Response line with subtext: they mean […] but say […].

*(Optional beat / reaction — no more than 2 lines)*

**EXT./INT. [Next location] – [Continuous / later]**

| Note | For later revision |
| --- | --- |
| B-story beat | […] |
| Plant | [Set-up to pay in scene __] |
| Music/sound idea | […] |

## [Act / sequence note — delete from script deck]
- **Dramatic question this scene tests:** […]
- **Turn / reversal:** […]`,
  },
  {
    id: "writing-poetry-sonnet",
    name: "Poetry: Sonnet (14 lines / volta)",
    category: "writing",
    description: "Draft scaffold and revision checklist for: Sonnet (14 lines / volta)",
    tags: ["poetry","verse","sonnet","form","draft"],
    content: `# Poetry: *Sonnet (14 lines / volta)*

## Working title (optional until draft complete)
[…]

## Form constraints (self-imposed or traditional)
- **Sonnet (14 lines / volta) rules you’re following:** [list syllables, rhyme, refrain, line count, etc.]
- **Allowed lexical field:** e.g. [nature, grief, work — or "open"]
- **What to avoid (one rule):** [abstractions / cliché words / explanation]

## Image bank (5–8 concrete details)
- [Object, texture, color, sound, smell, taste, place, motion]
- […]

## Stanza / line draft space
*Line 1*
[…]

*Line 2*
[…]


*Line 3*
[…]

## Volta / turn (if applicable)
- **Shift happens after line [n]:** [What changes emotionally or in meaning?]

## Revision passes
1. **Sound:** read aloud; fix mouthfuls
2. **Cut 10% adjectives / abstractions**
3. **Title test:** [Does title add a third layer?]`,
  },
  {
    id: "writing-poetry-haiku-collection",
    name: "Poetry: Haiku set (3-line units + seasonal cue)",
    category: "writing",
    description: "Draft scaffold and revision checklist for: Haiku set (3-line units + seasonal cue)",
    tags: ["poetry","verse","haiku-collection","form","draft"],
    content: `# Poetry: *Haiku set (3-line units + seasonal cue)*

## Working title (optional until draft complete)
[…]

## Form constraints (self-imposed or traditional)
- **Haiku set (3-line units + seasonal cue) rules you’re following:** [list syllables, rhyme, refrain, line count, etc.]
- **Allowed lexical field:** e.g. [nature, grief, work — or "open"]
- **What to avoid (one rule):** [abstractions / cliché words / explanation]

## Image bank (5–8 concrete details)
- [Object, texture, color, sound, smell, taste, place, motion]
- […]

## Stanza / line draft space
*Line 1*
[…]

*Line 2*
[…]


*Line 3*
[…]

## Volta / turn (if applicable)
- **Shift happens after line [n]:** [What changes emotionally or in meaning?]

## Revision passes
1. **Sound:** read aloud; fix mouthfuls
2. **Cut 10% adjectives / abstractions**
3. **Title test:** [Does title add a third layer?]`,
  },
  {
    id: "writing-poetry-free-verse",
    name: "Poetry: Free verse (image-led)",
    category: "writing",
    description: "Draft scaffold and revision checklist for: Free verse (image-led)",
    tags: ["poetry","verse","free-verse","form","draft"],
    content: `# Poetry: *Free verse (image-led)*

## Working title (optional until draft complete)
[…]

## Form constraints (self-imposed or traditional)
- **Free verse (image-led) rules you’re following:** [list syllables, rhyme, refrain, line count, etc.]
- **Allowed lexical field:** e.g. [nature, grief, work — or "open"]
- **What to avoid (one rule):** [abstractions / cliché words / explanation]

## Image bank (5–8 concrete details)
- [Object, texture, color, sound, smell, taste, place, motion]
- […]

## Stanza / line draft space
*Line 1*
[…]

*Line 2*
[…]


*Line 3*
[…]

## Volta / turn (if applicable)
- **Shift happens after line [n]:** [What changes emotionally or in meaning?]

## Revision passes
1. **Sound:** read aloud; fix mouthfuls
2. **Cut 10% adjectives / abstractions**
3. **Title test:** [Does title add a third layer?]`,
  },
  {
    id: "writing-poetry-limerick",
    name: "Poetry: Limerick (AABBA) ",
    category: "writing",
    description: "Draft scaffold and revision checklist for: Limerick (AABBA) ",
    tags: ["poetry","verse","limerick","form","draft"],
    content: `# Poetry: *Limerick (AABBA) *

## Working title (optional until draft complete)
[…]

## Form constraints (self-imposed or traditional)
- **Limerick (AABBA)  rules you’re following:** [list syllables, rhyme, refrain, line count, etc.]
- **Allowed lexical field:** e.g. [nature, grief, work — or "open"]
- **What to avoid (one rule):** [abstractions / cliché words / explanation]

## Image bank (5–8 concrete details)
- [Object, texture, color, sound, smell, taste, place, motion]
- […]

## Stanza / line draft space
*Line 1*
[…]

*Line 2*
[…]


*Line 3*
[…]

## Volta / turn (if applicable)
- **Shift happens after line [n]:** [What changes emotionally or in meaning?]

## Revision passes
1. **Sound:** read aloud; fix mouthfuls
2. **Cut 10% adjectives / abstractions**
3. **Title test:** [Does title add a third layer?]`,
  },
  {
    id: "writing-poetry-ode",
    name: "Poetry: Ode (address + elevation)",
    category: "writing",
    description: "Draft scaffold and revision checklist for: Ode (address + elevation)",
    tags: ["poetry","verse","ode","form","draft"],
    content: `# Poetry: *Ode (address + elevation)*

## Working title (optional until draft complete)
[…]

## Form constraints (self-imposed or traditional)
- **Ode (address + elevation) rules you’re following:** [list syllables, rhyme, refrain, line count, etc.]
- **Allowed lexical field:** e.g. [nature, grief, work — or "open"]
- **What to avoid (one rule):** [abstractions / cliché words / explanation]

## Image bank (5–8 concrete details)
- [Object, texture, color, sound, smell, taste, place, motion]
- […]

## Stanza / line draft space
*Line 1*
[…]

*Line 2*
[…]


*Line 3*
[…]

## Volta / turn (if applicable)
- **Shift happens after line [n]:** [What changes emotionally or in meaning?]

## Revision passes
1. **Sound:** read aloud; fix mouthfuls
2. **Cut 10% adjectives / abstractions**
3. **Title test:** [Does title add a third layer?]`,
  },
  {
    id: "writing-social-twitter-thread",
    name: "Twitter / X thread",
    category: "writing",
    description: "Social / distribution template for: Twitter / X thread",
    tags: ["social","distribution","short-form","twitter-thread","engagement"],
    content: `# Twitter / X thread content — topic: *[Topic]*

## Metadata
- **Goal:** [awareness / engagement / conversion / community]
- **Primary audience:** [persona in one line]
- **Tone:** [e.g. warm / sharp / professional / dry humor]
- **CTA (if any):** [one action only]

## Thread structure (Twitter / X–style)

## Tweet 1/ hook
*(≤280 characters; must stand alone. Promise + credibility without thread)*
[Text]

## Tweets 2–n (each ≤280, numbered in thread)
2. [Context / why now]
3. [Core insight 1 + optional mini-example]
4. [Core insight 2 or contrast]
5. [Framework / list]
6. [Objection + answer] — *optional*
7. [Summary + CTA] — *optional*

## Alt text (for images) / link list
- Image 1: [alt text]
- Links: [url]`,
  },
  {
    id: "writing-social-linkedin-post",
    name: "LinkedIn post",
    category: "writing",
    description: "Social / distribution template for: LinkedIn post",
    tags: ["social","distribution","short-form","linkedin-post","engagement"],
    content: `# LinkedIn post content — topic: *[Topic]*

## Metadata
- **Goal:** [awareness / engagement / conversion / community]
- **Primary audience:** [persona in one line]
- **Tone:** [e.g. warm / sharp / professional / dry humor]
- **CTA (if any):** [one action only]

## Post body (single block or short sections)
[Line 1: hook. Line 2: value. Scannable bullets or one short block.]

## Hashtags / mentions (if platform-appropriate, else delete)
- [optional]

## First comment / pinned (optional)
- [Context, link, or lead magnet]`,
  },
  {
    id: "writing-social-instagram-caption",
    name: "Instagram caption",
    category: "writing",
    description: "Social / distribution template for: Instagram caption",
    tags: ["social","distribution","short-form","instagram-caption","engagement"],
    content: `# Instagram caption content — topic: *[Topic]*

## Metadata
- **Goal:** [awareness / engagement / conversion / community]
- **Primary audience:** [persona in one line]
- **Tone:** [e.g. warm / sharp / professional / dry humor]
- **CTA (if any):** [one action only]

## Post body (single block or short sections)
[Line 1: hook. Line 2: value. Scannable bullets or one short block.]

## Hashtags / mentions (if platform-appropriate, else delete)
- [optional]

## First comment / pinned (optional)
- [Context, link, or lead magnet]`,
  },
  {
    id: "writing-social-facebook-post",
    name: "Facebook post",
    category: "writing",
    description: "Social / distribution template for: Facebook post",
    tags: ["social","distribution","short-form","facebook-post","engagement"],
    content: `# Facebook post content — topic: *[Topic]*

## Metadata
- **Goal:** [awareness / engagement / conversion / community]
- **Primary audience:** [persona in one line]
- **Tone:** [e.g. warm / sharp / professional / dry humor]
- **CTA (if any):** [one action only]

## Post body (single block or short sections)
[Line 1: hook. Line 2: value. Scannable bullets or one short block.]

## Hashtags / mentions (if platform-appropriate, else delete)
- [optional]

## First comment / pinned (optional)
- [Context, link, or lead magnet]`,
  },
  {
    id: "writing-social-youtube-description",
    name: "YouTube description",
    category: "writing",
    description: "Social / distribution template for: YouTube description",
    tags: ["social","distribution","short-form","youtube-description","engagement"],
    content: `# YouTube description content — topic: *[Topic]*

## Metadata
- **Goal:** [awareness / engagement / conversion / community]
- **Primary audience:** [persona in one line]
- **Tone:** [e.g. warm / sharp / professional / dry humor]
- **CTA (if any):** [one action only]

## Post body (single block or short sections)
[Line 1: hook. Line 2: value. Scannable bullets or one short block.]

## Hashtags / mentions (if platform-appropriate, else delete)
- [optional]

## First comment / pinned (optional)
- [Context, link, or lead magnet]`,
  },
  {
    id: "writing-social-tiktok-script",
    name: "TikTok script / hook list",
    category: "writing",
    description: "Social / distribution template for: TikTok script / hook list",
    tags: ["social","distribution","short-form","tiktok-script","engagement"],
    content: `# TikTok script / hook list content — topic: *[Topic]*

## Metadata
- **Goal:** [awareness / engagement / conversion / community]
- **Primary audience:** [persona in one line]
- **Tone:** [e.g. warm / sharp / professional / dry humor]
- **CTA (if any):** [one action only]

## Post body (single block or short sections)
[Line 1: hook. Line 2: value. Scannable bullets or one short block.]

## Hashtags / mentions (if platform-appropriate, else delete)
- [optional]

## First comment / pinned (optional)
- [Context, link, or lead magnet]`,
  },
  {
    id: "writing-social-reddit-post",
    name: "Reddit post",
    category: "writing",
    description: "Social / distribution template for: Reddit post",
    tags: ["social","distribution","short-form","reddit-post","engagement"],
    content: `# Reddit post content — topic: *[Topic]*

## Metadata
- **Goal:** [awareness / engagement / conversion / community]
- **Primary audience:** [persona in one line]
- **Tone:** [e.g. warm / sharp / professional / dry humor]
- **CTA (if any):** [one action only]

## Post body (single block or short sections)
[Line 1: hook. Line 2: value. Scannable bullets or one short block.]

## Hashtags / mentions (if platform-appropriate, else delete)
- [optional]

## First comment / pinned (optional)
- [Context, link, or lead magnet]`,
  },
  {
    id: "writing-social-product-hunt-launch",
    name: "Product Hunt launch post",
    category: "writing",
    description: "Social / distribution template for: Product Hunt launch post",
    tags: ["social","distribution","short-form","product-hunt-launch","engagement"],
    content: `# Product Hunt launch post content — topic: *[Topic]*

## Metadata
- **Goal:** [awareness / engagement / conversion / community]
- **Primary audience:** [persona in one line]
- **Tone:** [e.g. warm / sharp / professional / dry humor]
- **CTA (if any):** [one action only]

## Post body (single block or short sections)
[Line 1: hook. Line 2: value. Scannable bullets or one short block.]

## Hashtags / mentions (if platform-appropriate, else delete)
- [optional]

## First comment / pinned (optional)
- [Context, link, or lead magnet]`,
  },
  {
    id: "writing-press-product-launch",
    name: "Press release: product launch",
    category: "writing",
    description: "A product launch announcement with lead, quote, and boilerplate structure.",
    tags: ["press","pr","media","announcement","outreach"],
    content: `# FOR IMMEDIATE RELEASE

## Headline (≤120 characters if possible, active voice, present or future tense as appropriate)
[Company/Org] [Announces/Partners/Receives/Hosts/Hires] [Key fact with concrete nouns and numbers if possible]

## Subhead (optional, one line clarifier)
[Optional expansion without repeating the headline.]

## [City, State, Date] —
*(Lead paragraph: who, what, when, where, why — max ~35–45 words; add second graph with context and significance.)*
[Paragraph 1…]

[Paragraph 2 with background on [Org] and the problem space.]

## [Quote section header optional]
> *"[Quote with human voice, no jargon, attributed to name and title.]*"*  
> — [Full Name], [Title], [Organization]

## [Bullets: key details — for product/event/hire variants]
- **product launch (details) — detail 1:** […]
- **Detail 2:** […] — *metric if possible*
- **Detail 3:** […]
- **Geography / availability / timing:** […]

## [About {Org}] (boilerplate paragraph — 3–4 sentences, factual)
[Mission, year founded, scale, flagship products/services. No hype adjectives. Link to [https://...]]

## Media contact
| | |
| --- | --- |
| **Name** | [Name] |
| **Title** | [Title] |
| **Email** | [email@org.com] |
| **Phone** | [+1 …] |

## ### (Optional) Notes to editors / supporting assets
- Images: [link to press kit or Dropbox — dimensions/credit]
- Embargo: [if any, else delete] — *Strict until [date time zone]*`,
  },
  {
    id: "writing-press-partnership",
    name: "Press release: partnership",
    category: "writing",
    description: "A partnership announcement with lead, quote, and boilerplate structure.",
    tags: ["press","pr","media","announcement","outreach"],
    content: `# FOR IMMEDIATE RELEASE

## Headline (≤120 characters if possible, active voice, present or future tense as appropriate)
[Company/Org] [Announces/Partners/Receives/Hosts/Hires] [Key fact with concrete nouns and numbers if possible]

## Subhead (optional, one line clarifier)
[Optional expansion without repeating the headline.]

## [City, State, Date] —
*(Lead paragraph: who, what, when, where, why — max ~35–45 words; add second graph with context and significance.)*
[Paragraph 1…]

[Paragraph 2 with background on [Org] and the problem space.]

## [Quote section header optional]
> *"[Quote with human voice, no jargon, attributed to name and title.]*"*  
> — [Full Name], [Title], [Organization]

## [Bullets: key details — for product/event/hire variants]
- **partnership (details) — detail 1:** […]
- **Detail 2:** […] — *metric if possible*
- **Detail 3:** […]
- **Geography / availability / timing:** […]

## [About {Org}] (boilerplate paragraph — 3–4 sentences, factual)
[Mission, year founded, scale, flagship products/services. No hype adjectives. Link to [https://...]]

## Media contact
| | |
| --- | --- |
| **Name** | [Name] |
| **Title** | [Title] |
| **Email** | [email@org.com] |
| **Phone** | [+1 …] |

## ### (Optional) Notes to editors / supporting assets
- Images: [link to press kit or Dropbox — dimensions/credit]
- Embargo: [if any, else delete] — *Strict until [date time zone]*`,
  },
  {
    id: "writing-press-funding",
    name: "Press release: funding",
    category: "writing",
    description: "A funding announcement with lead, quote, and boilerplate structure.",
    tags: ["press","pr","media","announcement","outreach"],
    content: `# FOR IMMEDIATE RELEASE

## Headline (≤120 characters if possible, active voice, present or future tense as appropriate)
[Company/Org] [Announces/Partners/Receives/Hosts/Hires] [Key fact with concrete nouns and numbers if possible]

## Subhead (optional, one line clarifier)
[Optional expansion without repeating the headline.]

## [City, State, Date] —
*(Lead paragraph: who, what, when, where, why — max ~35–45 words; add second graph with context and significance.)*
[Paragraph 1…]

[Paragraph 2 with background on [Org] and the problem space.]

## [Quote section header optional]
> *"[Quote with human voice, no jargon, attributed to name and title.]*"*  
> — [Full Name], [Title], [Organization]

## [Bullets: key details — for product/event/hire variants]
- **funding (details) — detail 1:** […]
- **Detail 2:** […] — *metric if possible*
- **Detail 3:** […]
- **Geography / availability / timing:** […]

## [About {Org}] (boilerplate paragraph — 3–4 sentences, factual)
[Mission, year founded, scale, flagship products/services. No hype adjectives. Link to [https://...]]

## Media contact
| | |
| --- | --- |
| **Name** | [Name] |
| **Title** | [Title] |
| **Email** | [email@org.com] |
| **Phone** | [+1 …] |

## ### (Optional) Notes to editors / supporting assets
- Images: [link to press kit or Dropbox — dimensions/credit]
- Embargo: [if any, else delete] — *Strict until [date time zone]*`,
  },
  {
    id: "writing-press-event",
    name: "Press release: event",
    category: "writing",
    description: "A event announcement with lead, quote, and boilerplate structure.",
    tags: ["press","pr","media","announcement","outreach"],
    content: `# FOR IMMEDIATE RELEASE

## Headline (≤120 characters if possible, active voice, present or future tense as appropriate)
[Company/Org] [Announces/Partners/Receives/Hosts/Hires] [Key fact with concrete nouns and numbers if possible]

## Subhead (optional, one line clarifier)
[Optional expansion without repeating the headline.]

## [City, State, Date] —
*(Lead paragraph: who, what, when, where, why — max ~35–45 words; add second graph with context and significance.)*
[Paragraph 1…]

[Paragraph 2 with background on [Org] and the problem space.]

## [Quote section header optional]
> *"[Quote with human voice, no jargon, attributed to name and title.]*"*  
> — [Full Name], [Title], [Organization]

## [Bullets: key details — for product/event/hire variants]
- **event (details) — detail 1:** […]
- **Detail 2:** […] — *metric if possible*
- **Detail 3:** […]
- **Geography / availability / timing:** […]

## [About {Org}] (boilerplate paragraph — 3–4 sentences, factual)
[Mission, year founded, scale, flagship products/services. No hype adjectives. Link to [https://...]]

## Media contact
| | |
| --- | --- |
| **Name** | [Name] |
| **Title** | [Title] |
| **Email** | [email@org.com] |
| **Phone** | [+1 …] |

## ### (Optional) Notes to editors / supporting assets
- Images: [link to press kit or Dropbox — dimensions/credit]
- Embargo: [if any, else delete] — *Strict until [date time zone]*`,
  },
  {
    id: "writing-press-award",
    name: "Press release: award",
    category: "writing",
    description: "A award announcement with lead, quote, and boilerplate structure.",
    tags: ["press","pr","media","announcement","outreach"],
    content: `# FOR IMMEDIATE RELEASE

## Headline (≤120 characters if possible, active voice, present or future tense as appropriate)
[Company/Org] [Announces/Partners/Receives/Hosts/Hires] [Key fact with concrete nouns and numbers if possible]

## Subhead (optional, one line clarifier)
[Optional expansion without repeating the headline.]

## [City, State, Date] —
*(Lead paragraph: who, what, when, where, why — max ~35–45 words; add second graph with context and significance.)*
[Paragraph 1…]

[Paragraph 2 with background on [Org] and the problem space.]

## [Quote section header optional]
> *"[Quote with human voice, no jargon, attributed to name and title.]*"*  
> — [Full Name], [Title], [Organization]

## [Bullets: key details — for product/event/hire variants]
- **award (details) — detail 1:** […]
- **Detail 2:** […] — *metric if possible*
- **Detail 3:** […]
- **Geography / availability / timing:** […]

## [About {Org}] (boilerplate paragraph — 3–4 sentences, factual)
[Mission, year founded, scale, flagship products/services. No hype adjectives. Link to [https://...]]

## Media contact
| | |
| --- | --- |
| **Name** | [Name] |
| **Title** | [Title] |
| **Email** | [email@org.com] |
| **Phone** | [+1 …] |

## ### (Optional) Notes to editors / supporting assets
- Images: [link to press kit or Dropbox — dimensions/credit]
- Embargo: [if any, else delete] — *Strict until [date time zone]*`,
  },
  {
    id: "writing-press-hire",
    name: "Press release: executive hire",
    category: "writing",
    description: "A executive hire announcement with lead, quote, and boilerplate structure.",
    tags: ["press","pr","media","announcement","outreach"],
    content: `# FOR IMMEDIATE RELEASE

## Headline (≤120 characters if possible, active voice, present or future tense as appropriate)
[Company/Org] [Announces/Partners/Receives/Hosts/Hires] [Key fact with concrete nouns and numbers if possible]

## Subhead (optional, one line clarifier)
[Optional expansion without repeating the headline.]

## [City, State, Date] —
*(Lead paragraph: who, what, when, where, why — max ~35–45 words; add second graph with context and significance.)*
[Paragraph 1…]

[Paragraph 2 with background on [Org] and the problem space.]

## [Quote section header optional]
> *"[Quote with human voice, no jargon, attributed to name and title.]*"*  
> — [Full Name], [Title], [Organization]

## [Bullets: key details — for product/event/hire variants]
- **executive hire (details) — detail 1:** […]
- **Detail 2:** […] — *metric if possible*
- **Detail 3:** […]
- **Geography / availability / timing:** […]

## [About {Org}] (boilerplate paragraph — 3–4 sentences, factual)
[Mission, year founded, scale, flagship products/services. No hype adjectives. Link to [https://...]]

## Media contact
| | |
| --- | --- |
| **Name** | [Name] |
| **Title** | [Title] |
| **Email** | [email@org.com] |
| **Phone** | [+1 …] |

## ### (Optional) Notes to editors / supporting assets
- Images: [link to press kit or Dropbox — dimensions/credit]
- Embargo: [if any, else delete] — *Strict until [date time zone]*`,
  },
  {
    id: "writing-speech-keynote",
    name: "Keynote speech",
    category: "writing",
    description: "Oral-optimized outline for: Keynote speech",
    tags: ["speech","oral","event","draft","outline"],
    content: `# Keynote speech — *Working title*

## Audience & timebox
- **Occasion / venue:** [Where, when, who is in the room]
- **Time:** [N] minutes target (~[words] words at ~130 wpm) — *leave buffer for applause/laughs*
- **Outcome:** *One sentence — what the audience should [feel/know/do] when you finish*

## Structure
1. **Hook (0:00–0:45):** [Story, fact, or pattern interrupt — not thank-yous first]
2. **Stakes (0:45–2:00):** [Why this moment matters to them, not to you only]
3. **Body blocks (2:00–[end-3]):** [2–3 ideas max; one memorable phrase each]
4. **Close ([last 1–2 min]):** [Callback to hook, clear ask or blessing, or final image]

## Full text / outline
*Opening*
[Text / bullets. Write how you want to *say* it, not an essay — short sentences, breath marks.]

- **Pause after:** [emotional beat] — *Optional stage direction: [e.g. look at A]*

*Idea 1*
- [Point] — *Example: [vivid, specific, brief]*

*Idea 2*
- […]

*Idea 3*
- […]

*Close*
- […]

## Optional: one story spine (2 minutes max)
- **Context:** [Set scene in one line]
- **Turn:** [What changed] — *Emotion:* […]*
- **Point:** [Moral the audience should carry] — *Tie to occasion*`,
  },
  {
    id: "writing-speech-wedding",
    name: "Wedding speech / toast",
    category: "writing",
    description: "Oral-optimized outline for: Wedding speech / toast",
    tags: ["speech","oral","event","draft","outline"],
    content: `# Wedding speech / toast — *Working title*

## Audience & timebox
- **Occasion / venue:** [Where, when, who is in the room]
- **Time:** [N] minutes target (~[words] words at ~130 wpm) — *leave buffer for applause/laughs*
- **Outcome:** *One sentence — what the audience should [feel/know/do] when you finish*

## Structure
1. **Hook (0:00–0:45):** [Story, fact, or pattern interrupt — not thank-yous first]
2. **Stakes (0:45–2:00):** [Why this moment matters to them, not to you only]
3. **Body blocks (2:00–[end-3]):** [2–3 ideas max; one memorable phrase each]
4. **Close ([last 1–2 min]):** [Callback to hook, clear ask or blessing, or final image]

## Full text / outline
*Opening*
[Text / bullets. Write how you want to *say* it, not an essay — short sentences, breath marks.]

- **Pause after:** [emotional beat] — *Optional stage direction: [e.g. look at A]*

*Idea 1*
- [Point] — *Example: [vivid, specific, brief]*

*Idea 2*
- […]

*Idea 3*
- […]

*Close*
- […]

## Optional: one story spine (2 minutes max)
- **Context:** [Set scene in one line]
- **Turn:** [What changed] — *Emotion:* […]*
- **Point:** [Moral the audience should carry] — *Tie to occasion*`,
  },
  {
    id: "writing-speech-graduation",
    name: "Graduation speech",
    category: "writing",
    description: "Oral-optimized outline for: Graduation speech",
    tags: ["speech","oral","event","draft","outline"],
    content: `# Graduation speech — *Working title*

## Audience & timebox
- **Occasion / venue:** [Where, when, who is in the room]
- **Time:** [N] minutes target (~[words] words at ~130 wpm) — *leave buffer for applause/laughs*
- **Outcome:** *One sentence — what the audience should [feel/know/do] when you finish*

## Structure
1. **Hook (0:00–0:45):** [Story, fact, or pattern interrupt — not thank-yous first]
2. **Stakes (0:45–2:00):** [Why this moment matters to them, not to you only]
3. **Body blocks (2:00–[end-3]):** [2–3 ideas max; one memorable phrase each]
4. **Close ([last 1–2 min]):** [Callback to hook, clear ask or blessing, or final image]

## Full text / outline
*Opening*
[Text / bullets. Write how you want to *say* it, not an essay — short sentences, breath marks.]

- **Pause after:** [emotional beat] — *Optional stage direction: [e.g. look at A]*

*Idea 1*
- [Point] — *Example: [vivid, specific, brief]*

*Idea 2*
- […]

*Idea 3*
- […]

*Close*
- […]

## Optional: one story spine (2 minutes max)
- **Context:** [Set scene in one line]
- **Turn:** [What changed] — *Emotion:* […]*
- **Point:** [Moral the audience should carry] — *Tie to occasion*`,
  },
  {
    id: "writing-speech-eulogy",
    name: "Eulogy / memorial remarks",
    category: "writing",
    description: "Oral-optimized outline for: Eulogy / memorial remarks",
    tags: ["speech","oral","event","draft","outline"],
    content: `# Eulogy / memorial remarks — *Working title*

## Audience & timebox
- **Occasion / venue:** [Where, when, who is in the room]
- **Time:** [N] minutes target (~[words] words at ~130 wpm) — *leave buffer for applause/laughs*
- **Outcome:** *One sentence — what the audience should [feel/know/do] when you finish*

## Structure
1. **Hook (0:00–0:45):** [Story, fact, or pattern interrupt — not thank-yous first]
2. **Stakes (0:45–2:00):** [Why this moment matters to them, not to you only]
3. **Body blocks (2:00–[end-3]):** [2–3 ideas max; one memorable phrase each]
4. **Close ([last 1–2 min]):** [Callback to hook, clear ask or blessing, or final image]

## Full text / outline
*Opening*
[Text / bullets. Write how you want to *say* it, not an essay — short sentences, breath marks.]

- **Pause after:** [emotional beat] — *Optional stage direction: [e.g. look at A]*

*Idea 1*
- [Point] — *Example: [vivid, specific, brief]*

*Idea 2*
- […]

*Idea 3*
- […]

*Close*
- […]

## Optional: one story spine (2 minutes max)
- **Context:** [Set scene in one line]
- **Turn:** [What changed] — *Emotion:* […]*
- **Point:** [Moral the audience should carry] — *Tie to occasion*`,
  },
  {
    id: "writing-speech-acceptance",
    name: "Award acceptance speech",
    category: "writing",
    description: "Oral-optimized outline for: Award acceptance speech",
    tags: ["speech","oral","event","draft","outline"],
    content: `# Award acceptance speech — *Working title*

## Audience & timebox
- **Occasion / venue:** [Where, when, who is in the room]
- **Time:** [N] minutes target (~[words] words at ~130 wpm) — *leave buffer for applause/laughs*
- **Outcome:** *One sentence — what the audience should [feel/know/do] when you finish*

## Structure
1. **Hook (0:00–0:45):** [Story, fact, or pattern interrupt — not thank-yous first]
2. **Stakes (0:45–2:00):** [Why this moment matters to them, not to you only]
3. **Body blocks (2:00–[end-3]):** [2–3 ideas max; one memorable phrase each]
4. **Close ([last 1–2 min]):** [Callback to hook, clear ask or blessing, or final image]

## Full text / outline
*Opening*
[Text / bullets. Write how you want to *say* it, not an essay — short sentences, breath marks.]

- **Pause after:** [emotional beat] — *Optional stage direction: [e.g. look at A]*

*Idea 1*
- [Point] — *Example: [vivid, specific, brief]*

*Idea 2*
- […]

*Idea 3*
- […]

*Close*
- […]

## Optional: one story spine (2 minutes max)
- **Context:** [Set scene in one line]
- **Turn:** [What changed] — *Emotion:* […]*
- **Point:** [Moral the audience should carry] — *Tie to occasion*`,
  },
  {
    id: "academic-research-paper-apa",
    name: "Research paper: APA-style research paper",
    category: "academic",
    description: "Full manuscript template: APA 7 (psychology, education, and related fields) ",
    tags: ["research","paper","method","citations","apa"],
    content: `# [Full title: informative and specific, ≤12–15 words if possible]

## Manuscript details
- **Format:** APA-style research paper / APA 7 (psychology, education, and related fields) 
- **Target venue:** [Journal / class / arXiv]
- **Running head (if required):** [Short title, char limit per style guide]
- **Page limit / word count:** [N]

## Abstract (150–250 words; paste journal limits)
- **Background (1–2 sentences):** [Framing the problem in general terms — minimal jargon or define terms].
- **Gap (1 sentence):** [What is not yet known / why prior work is insufficient?]
- **Method (1–3 sentences):** [What you did at a high level; data, design, N if relevant].
- **Key results (2–3 sentences):** [Main quantitative or qualitative finding(s); report uncertainty or scope].
- **Implication (1 sentence):** [So what? Limitation in one phrase if room].

## 1. Introduction
1.1 **Context:** [Move from broad field to your niche].  
1.2 **Problem statement:** [Precise, falsifiable, or at least scoping the claim].  
1.3 **Contributions (bulleted, honest):**  
   - [C1: What is new, technically or conceptually?]  
   - [C2: …]  
1.4 **Paper roadmap:** [One sentence on Sec 2, 3, 4, …].

## 2. Related work / background
*(Cluster by theme, not by author. Fairly summarize, then position your work.)*
- **Theme A:** [Summary + 2–4 citations] — *How you differ / build:* […]  
- **Theme B:** […]  
- **Gaps you exploit:** [Explicit list]

## 3. Method / materials / design
| Choice | Rationale | Alternatives considered |
| --- | --- | --- |
| [e.g. dataset / instrument] | [Why this fits the question] | [What you did not do and why] |
- **Reproducibility block:** *Code:* [url/commit], *Data:* [access], *H/W:* [if relevant]  
- **IRB / ethics (if human subjects):** [ID or n/a]  

## 4. Results / findings
- **Primary outcome(s):** [Text + table/figure ref Fig. 1, Table 2]  
- **Secondary / exploratory (label clearly if post-hoc):** […]  
- **Negative / null results (report honestly if material):** […]  

## 5. Discussion
5.1 **Interpretation (tie back to each contribution):** […]  
5.2 **Limitations:** [Design, N, confounds, generalization — don’t only list, explain bias direction if known]  
5.3 **Implications (practice, policy, theory):** […]  
5.4 **Future work:** [Concrete next experiments, not a wish list]  

## 6. Conclusion (optional if redundant with end of Discussion; some venues want it)
- **Restatement in plain language:** […]  

## References (placeholder)
- [Author et al. (Year). Title. *Venue* — DOI/URL]  
- […]  

## Declarations (venue-dependent)
- **Competing interests:** [None / list]  
- **Funding:** [Grant + ID]  
- **Author contributions:** [CRediT or venue template]  `,
  },
  {
    id: "academic-research-paper-mla",
    name: "Research paper: MLA-style research paper",
    category: "academic",
    description: "Full manuscript template: MLA 9 (humanities) ",
    tags: ["research","paper","method","citations","mla"],
    content: `# [Full title: informative and specific, ≤12–15 words if possible]

## Manuscript details
- **Format:** MLA-style research paper / MLA 9 (humanities) 
- **Target venue:** [Journal / class / arXiv]
- **Running head (if required):** [Short title, char limit per style guide]
- **Page limit / word count:** [N]

## Abstract (150–250 words; paste journal limits)
- **Background (1–2 sentences):** [Framing the problem in general terms — minimal jargon or define terms].
- **Gap (1 sentence):** [What is not yet known / why prior work is insufficient?]
- **Method (1–3 sentences):** [What you did at a high level; data, design, N if relevant].
- **Key results (2–3 sentences):** [Main quantitative or qualitative finding(s); report uncertainty or scope].
- **Implication (1 sentence):** [So what? Limitation in one phrase if room].

## 1. Introduction
1.1 **Context:** [Move from broad field to your niche].  
1.2 **Problem statement:** [Precise, falsifiable, or at least scoping the claim].  
1.3 **Contributions (bulleted, honest):**  
   - [C1: What is new, technically or conceptually?]  
   - [C2: …]  
1.4 **Paper roadmap:** [One sentence on Sec 2, 3, 4, …].

## 2. Related work / background
*(Cluster by theme, not by author. Fairly summarize, then position your work.)*
- **Theme A:** [Summary + 2–4 citations] — *How you differ / build:* […]  
- **Theme B:** […]  
- **Gaps you exploit:** [Explicit list]

## 3. Method / materials / design
| Choice | Rationale | Alternatives considered |
| --- | --- | --- |
| [e.g. dataset / instrument] | [Why this fits the question] | [What you did not do and why] |
- **Reproducibility block:** *Code:* [url/commit], *Data:* [access], *H/W:* [if relevant]  
- **IRB / ethics (if human subjects):** [ID or n/a]  

## 4. Results / findings
- **Primary outcome(s):** [Text + table/figure ref Fig. 1, Table 2]  
- **Secondary / exploratory (label clearly if post-hoc):** […]  
- **Negative / null results (report honestly if material):** […]  

## 5. Discussion
5.1 **Interpretation (tie back to each contribution):** […]  
5.2 **Limitations:** [Design, N, confounds, generalization — don’t only list, explain bias direction if known]  
5.3 **Implications (practice, policy, theory):** […]  
5.4 **Future work:** [Concrete next experiments, not a wish list]  

## 6. Conclusion (optional if redundant with end of Discussion; some venues want it)
- **Restatement in plain language:** […]  

## References (placeholder)
- [Author et al. (Year). Title. *Venue* — DOI/URL]  
- […]  

## Declarations (venue-dependent)
- **Competing interests:** [None / list]  
- **Funding:** [Grant + ID]  
- **Author contributions:** [CRediT or venue template]  `,
  },
  {
    id: "academic-research-paper-chicago",
    name: "Research paper: Chicago (notes & bibliography) research paper",
    category: "academic",
    description: "Full manuscript template: Chicago 17n / 17a per instructor / journal) ",
    tags: ["research","paper","method","citations","chicago"],
    content: `# [Full title: informative and specific, ≤12–15 words if possible]

## Manuscript details
- **Format:** Chicago (notes & bibliography) research paper / Chicago 17n / 17a per instructor / journal) 
- **Target venue:** [Journal / class / arXiv]
- **Running head (if required):** [Short title, char limit per style guide]
- **Page limit / word count:** [N]

## Abstract (150–250 words; paste journal limits)
- **Background (1–2 sentences):** [Framing the problem in general terms — minimal jargon or define terms].
- **Gap (1 sentence):** [What is not yet known / why prior work is insufficient?]
- **Method (1–3 sentences):** [What you did at a high level; data, design, N if relevant].
- **Key results (2–3 sentences):** [Main quantitative or qualitative finding(s); report uncertainty or scope].
- **Implication (1 sentence):** [So what? Limitation in one phrase if room].

## 1. Introduction
1.1 **Context:** [Move from broad field to your niche].  
1.2 **Problem statement:** [Precise, falsifiable, or at least scoping the claim].  
1.3 **Contributions (bulleted, honest):**  
   - [C1: What is new, technically or conceptually?]  
   - [C2: …]  
1.4 **Paper roadmap:** [One sentence on Sec 2, 3, 4, …].

## 2. Related work / background
*(Cluster by theme, not by author. Fairly summarize, then position your work.)*
- **Theme A:** [Summary + 2–4 citations] — *How you differ / build:* […]  
- **Theme B:** […]  
- **Gaps you exploit:** [Explicit list]

## 3. Method / materials / design
| Choice | Rationale | Alternatives considered |
| --- | --- | --- |
| [e.g. dataset / instrument] | [Why this fits the question] | [What you did not do and why] |
- **Reproducibility block:** *Code:* [url/commit], *Data:* [access], *H/W:* [if relevant]  
- **IRB / ethics (if human subjects):** [ID or n/a]  

## 4. Results / findings
- **Primary outcome(s):** [Text + table/figure ref Fig. 1, Table 2]  
- **Secondary / exploratory (label clearly if post-hoc):** […]  
- **Negative / null results (report honestly if material):** […]  

## 5. Discussion
5.1 **Interpretation (tie back to each contribution):** […]  
5.2 **Limitations:** [Design, N, confounds, generalization — don’t only list, explain bias direction if known]  
5.3 **Implications (practice, policy, theory):** […]  
5.4 **Future work:** [Concrete next experiments, not a wish list]  

## 6. Conclusion (optional if redundant with end of Discussion; some venues want it)
- **Restatement in plain language:** […]  

## References (placeholder)
- [Author et al. (Year). Title. *Venue* — DOI/URL]  
- […]  

## Declarations (venue-dependent)
- **Competing interests:** [None / list]  
- **Funding:** [Grant + ID]  
- **Author contributions:** [CRediT or venue template]  `,
  },
  {
    id: "academic-research-paper-ieee",
    name: "Research paper: IEEE-style research paper (engineering / CS) ",
    category: "academic",
    description: "Full manuscript template: IEEE reference style, tight IMRAD common in EECS venues) ",
    tags: ["research","paper","method","citations","ieee"],
    content: `# [Full title: informative and specific, ≤12–15 words if possible]

## Manuscript details
- **Format:** IEEE-style research paper (engineering / CS)  / IEEE reference style, tight IMRAD common in EECS venues) 
- **Target venue:** [Journal / class / arXiv]
- **Running head (if required):** [Short title, char limit per style guide]
- **Page limit / word count:** [N]

## Abstract (150–250 words; paste journal limits)
- **Background (1–2 sentences):** [Framing the problem in general terms — minimal jargon or define terms].
- **Gap (1 sentence):** [What is not yet known / why prior work is insufficient?]
- **Method (1–3 sentences):** [What you did at a high level; data, design, N if relevant].
- **Key results (2–3 sentences):** [Main quantitative or qualitative finding(s); report uncertainty or scope].
- **Implication (1 sentence):** [So what? Limitation in one phrase if room].

## 1. Introduction
1.1 **Context:** [Move from broad field to your niche].  
1.2 **Problem statement:** [Precise, falsifiable, or at least scoping the claim].  
1.3 **Contributions (bulleted, honest):**  
   - [C1: What is new, technically or conceptually?]  
   - [C2: …]  
1.4 **Paper roadmap:** [One sentence on Sec 2, 3, 4, …].

## 2. Related work / background
*(Cluster by theme, not by author. Fairly summarize, then position your work.)*
- **Theme A:** [Summary + 2–4 citations] — *How you differ / build:* […]  
- **Theme B:** […]  
- **Gaps you exploit:** [Explicit list]

## 3. Method / materials / design
| Choice | Rationale | Alternatives considered |
| --- | --- | --- |
| [e.g. dataset / instrument] | [Why this fits the question] | [What you did not do and why] |
- **Reproducibility block:** *Code:* [url/commit], *Data:* [access], *H/W:* [if relevant]  
- **IRB / ethics (if human subjects):** [ID or n/a]  

## 4. Results / findings
- **Primary outcome(s):** [Text + table/figure ref Fig. 1, Table 2]  
- **Secondary / exploratory (label clearly if post-hoc):** […]  
- **Negative / null results (report honestly if material):** […]  

## 5. Discussion
5.1 **Interpretation (tie back to each contribution):** […]  
5.2 **Limitations:** [Design, N, confounds, generalization — don’t only list, explain bias direction if known]  
5.3 **Implications (practice, policy, theory):** […]  
5.4 **Future work:** [Concrete next experiments, not a wish list]  

## 6. Conclusion (optional if redundant with end of Discussion; some venues want it)
- **Restatement in plain language:** […]  

## References (placeholder)
- [Author et al. (Year). Title. *Venue* — DOI/URL]  
- […]  

## Declarations (venue-dependent)
- **Competing interests:** [None / list]  
- **Funding:** [Grant + ID]  
- **Author contributions:** [CRediT or venue template]  `,
  },
  {
    id: "academic-research-paper-general",
    name: "Research paper: IMRAD research paper (general) ",
    category: "academic",
    description: "Full manuscript template: format-neutral IMRAD, refine per venue PDF) ",
    tags: ["research","paper","method","citations","general"],
    content: `# [Full title: informative and specific, ≤12–15 words if possible]

## Manuscript details
- **Format:** IMRAD research paper (general)  / format-neutral IMRAD, refine per venue PDF) 
- **Target venue:** [Journal / class / arXiv]
- **Running head (if required):** [Short title, char limit per style guide]
- **Page limit / word count:** [N]

## Abstract (150–250 words; paste journal limits)
- **Background (1–2 sentences):** [Framing the problem in general terms — minimal jargon or define terms].
- **Gap (1 sentence):** [What is not yet known / why prior work is insufficient?]
- **Method (1–3 sentences):** [What you did at a high level; data, design, N if relevant].
- **Key results (2–3 sentences):** [Main quantitative or qualitative finding(s); report uncertainty or scope].
- **Implication (1 sentence):** [So what? Limitation in one phrase if room].

## 1. Introduction
1.1 **Context:** [Move from broad field to your niche].  
1.2 **Problem statement:** [Precise, falsifiable, or at least scoping the claim].  
1.3 **Contributions (bulleted, honest):**  
   - [C1: What is new, technically or conceptually?]  
   - [C2: …]  
1.4 **Paper roadmap:** [One sentence on Sec 2, 3, 4, …].

## 2. Related work / background
*(Cluster by theme, not by author. Fairly summarize, then position your work.)*
- **Theme A:** [Summary + 2–4 citations] — *How you differ / build:* […]  
- **Theme B:** […]  
- **Gaps you exploit:** [Explicit list]

## 3. Method / materials / design
| Choice | Rationale | Alternatives considered |
| --- | --- | --- |
| [e.g. dataset / instrument] | [Why this fits the question] | [What you did not do and why] |
- **Reproducibility block:** *Code:* [url/commit], *Data:* [access], *H/W:* [if relevant]  
- **IRB / ethics (if human subjects):** [ID or n/a]  

## 4. Results / findings
- **Primary outcome(s):** [Text + table/figure ref Fig. 1, Table 2]  
- **Secondary / exploratory (label clearly if post-hoc):** […]  
- **Negative / null results (report honestly if material):** […]  

## 5. Discussion
5.1 **Interpretation (tie back to each contribution):** […]  
5.2 **Limitations:** [Design, N, confounds, generalization — don’t only list, explain bias direction if known]  
5.3 **Implications (practice, policy, theory):** […]  
5.4 **Future work:** [Concrete next experiments, not a wish list]  

## 6. Conclusion (optional if redundant with end of Discussion; some venues want it)
- **Restatement in plain language:** […]  

## References (placeholder)
- [Author et al. (Year). Title. *Venue* — DOI/URL]  
- […]  

## Declarations (venue-dependent)
- **Competing interests:** [None / list]  
- **Funding:** [Grant + ID]  
- **Author contributions:** [CRediT or venue template]  `,
  },
  {
    id: "academic-research-paper-literature-review",
    name: "Research paper: Literature review as standalone paper (survey / state of the art) ",
    category: "academic",
    description: "Full manuscript template: narrative or thematic, not a dump of summaries) ",
    tags: ["research","paper","method","citations","literature-review"],
    content: `# [Full title: informative and specific, ≤12–15 words if possible]

## Manuscript details
- **Format:** Literature review as standalone paper (survey / state of the art)  / narrative or thematic, not a dump of summaries) 
- **Target venue:** [Journal / class / arXiv]
- **Running head (if required):** [Short title, char limit per style guide]
- **Page limit / word count:** [N]

## Abstract (150–250 words; paste journal limits)
- **Background (1–2 sentences):** [Framing the problem in general terms — minimal jargon or define terms].
- **Gap (1 sentence):** [What is not yet known / why prior work is insufficient?]
- **Method (1–3 sentences):** [What you did at a high level; data, design, N if relevant].
- **Key results (2–3 sentences):** [Main quantitative or qualitative finding(s); report uncertainty or scope].
- **Implication (1 sentence):** [So what? Limitation in one phrase if room].

## 1. Introduction
1.1 **Context:** [Move from broad field to your niche].  
1.2 **Problem statement:** [Precise, falsifiable, or at least scoping the claim].  
1.3 **Contributions (bulleted, honest):**  
   - [C1: What is new, technically or conceptually?]  
   - [C2: …]  
1.4 **Paper roadmap:** [One sentence on Sec 2, 3, 4, …].

## 2. Related work / background
*(Cluster by theme, not by author. Fairly summarize, then position your work.)*
- **Theme A:** [Summary + 2–4 citations] — *How you differ / build:* […]  
- **Theme B:** […]  
- **Gaps you exploit:** [Explicit list]

## 3. Method / materials / design
| Choice | Rationale | Alternatives considered |
| --- | --- | --- |
| [e.g. dataset / instrument] | [Why this fits the question] | [What you did not do and why] |
- **Reproducibility block:** *Code:* [url/commit], *Data:* [access], *H/W:* [if relevant]  
- **IRB / ethics (if human subjects):** [ID or n/a]  

## 4. Results / findings
- **Primary outcome(s):** [Text + table/figure ref Fig. 1, Table 2]  
- **Secondary / exploratory (label clearly if post-hoc):** […]  
- **Negative / null results (report honestly if material):** […]  

## 5. Discussion
5.1 **Interpretation (tie back to each contribution):** […]  
5.2 **Limitations:** [Design, N, confounds, generalization — don’t only list, explain bias direction if known]  
5.3 **Implications (practice, policy, theory):** […]  
5.4 **Future work:** [Concrete next experiments, not a wish list]  

## 6. Conclusion (optional if redundant with end of Discussion; some venues want it)
- **Restatement in plain language:** […]  

## References (placeholder)
- [Author et al. (Year). Title. *Venue* — DOI/URL]  
- […]  

## Declarations (venue-dependent)
- **Competing interests:** [None / list]  
- **Funding:** [Grant + ID]  
- **Author contributions:** [CRediT or venue template]  `,
  },
  {
    id: "academic-research-paper-meta-analysis",
    name: "Research paper: Meta-analysis paper (systematic, quantitative synthesis) ",
    category: "academic",
    description: "Full manuscript template: PRISMA, forest plots, heterogeneity) ",
    tags: ["research","paper","method","citations","meta-analysis"],
    content: `# [Full title: informative and specific, ≤12–15 words if possible]

## Manuscript details
- **Format:** Meta-analysis paper (systematic, quantitative synthesis)  / PRISMA, forest plots, heterogeneity) 
- **Target venue:** [Journal / class / arXiv]
- **Running head (if required):** [Short title, char limit per style guide]
- **Page limit / word count:** [N]

## Abstract (150–250 words; paste journal limits)
- **Background (1–2 sentences):** [Framing the problem in general terms — minimal jargon or define terms].
- **Gap (1 sentence):** [What is not yet known / why prior work is insufficient?]
- **Method (1–3 sentences):** [What you did at a high level; data, design, N if relevant].
- **Key results (2–3 sentences):** [Main quantitative or qualitative finding(s); report uncertainty or scope].
- **Implication (1 sentence):** [So what? Limitation in one phrase if room].

## 1. Introduction
1.1 **Context:** [Move from broad field to your niche].  
1.2 **Problem statement:** [Precise, falsifiable, or at least scoping the claim].  
1.3 **Contributions (bulleted, honest):**  
   - [C1: What is new, technically or conceptually?]  
   - [C2: …]  
1.4 **Paper roadmap:** [One sentence on Sec 2, 3, 4, …].

## 2. Related work / background
*(Cluster by theme, not by author. Fairly summarize, then position your work.)*
- **Theme A:** [Summary + 2–4 citations] — *How you differ / build:* […]  
- **Theme B:** […]  
- **Gaps you exploit:** [Explicit list]

## 3. Method / materials / design
| Choice | Rationale | Alternatives considered |
| --- | --- | --- |
| [e.g. dataset / instrument] | [Why this fits the question] | [What you did not do and why] |
- **Reproducibility block:** *Code:* [url/commit], *Data:* [access], *H/W:* [if relevant]  
- **IRB / ethics (if human subjects):** [ID or n/a]  

## 4. Results / findings
- **Primary outcome(s):** [Text + table/figure ref Fig. 1, Table 2]  
- **Secondary / exploratory (label clearly if post-hoc):** […]  
- **Negative / null results (report honestly if material):** […]  

## 5. Discussion
5.1 **Interpretation (tie back to each contribution):** […]  
5.2 **Limitations:** [Design, N, confounds, generalization — don’t only list, explain bias direction if known]  
5.3 **Implications (practice, policy, theory):** […]  
5.4 **Future work:** [Concrete next experiments, not a wish list]  

## 6. Conclusion (optional if redundant with end of Discussion; some venues want it)
- **Restatement in plain language:** […]  

## References (placeholder)
- [Author et al. (Year). Title. *Venue* — DOI/URL]  
- […]  

## Declarations (venue-dependent)
- **Competing interests:** [None / list]  
- **Funding:** [Grant + ID]  
- **Author contributions:** [CRediT or venue template]  `,
  },
  {
    id: "academic-research-paper-systematic-review",
    name: "Research paper: Systematic review paper (PRISMA-style) ",
    category: "academic",
    description: "Full manuscript template: reporting the review protocol) ",
    tags: ["research","paper","method","citations","systematic-review"],
    content: `# [Full title: informative and specific, ≤12–15 words if possible]

## Manuscript details
- **Format:** Systematic review paper (PRISMA-style)  / reporting the review protocol) 
- **Target venue:** [Journal / class / arXiv]
- **Running head (if required):** [Short title, char limit per style guide]
- **Page limit / word count:** [N]

## Abstract (150–250 words; paste journal limits)
- **Background (1–2 sentences):** [Framing the problem in general terms — minimal jargon or define terms].
- **Gap (1 sentence):** [What is not yet known / why prior work is insufficient?]
- **Method (1–3 sentences):** [What you did at a high level; data, design, N if relevant].
- **Key results (2–3 sentences):** [Main quantitative or qualitative finding(s); report uncertainty or scope].
- **Implication (1 sentence):** [So what? Limitation in one phrase if room].

## 1. Introduction
1.1 **Context:** [Move from broad field to your niche].  
1.2 **Problem statement:** [Precise, falsifiable, or at least scoping the claim].  
1.3 **Contributions (bulleted, honest):**  
   - [C1: What is new, technically or conceptually?]  
   - [C2: …]  
1.4 **Paper roadmap:** [One sentence on Sec 2, 3, 4, …].

## 2. Related work / background
*(Cluster by theme, not by author. Fairly summarize, then position your work.)*
- **Theme A:** [Summary + 2–4 citations] — *How you differ / build:* […]  
- **Theme B:** […]  
- **Gaps you exploit:** [Explicit list]

## 3. Method / materials / design
| Choice | Rationale | Alternatives considered |
| --- | --- | --- |
| [e.g. dataset / instrument] | [Why this fits the question] | [What you did not do and why] |
- **Reproducibility block:** *Code:* [url/commit], *Data:* [access], *H/W:* [if relevant]  
- **IRB / ethics (if human subjects):** [ID or n/a]  

## 4. Results / findings
- **Primary outcome(s):** [Text + table/figure ref Fig. 1, Table 2]  
- **Secondary / exploratory (label clearly if post-hoc):** […]  
- **Negative / null results (report honestly if material):** […]  

## 5. Discussion
5.1 **Interpretation (tie back to each contribution):** […]  
5.2 **Limitations:** [Design, N, confounds, generalization — don’t only list, explain bias direction if known]  
5.3 **Implications (practice, policy, theory):** […]  
5.4 **Future work:** [Concrete next experiments, not a wish list]  

## 6. Conclusion (optional if redundant with end of Discussion; some venues want it)
- **Restatement in plain language:** […]  

## References (placeholder)
- [Author et al. (Year). Title. *Venue* — DOI/URL]  
- […]  

## Declarations (venue-dependent)
- **Competing interests:** [None / list]  
- **Funding:** [Grant + ID]  
- **Author contributions:** [CRediT or venue template]  `,
  },
  {
    id: "academic-lab-chemistry",
    name: "Chemistry lab report",
    category: "academic",
    description: "Structured lab or project report: chemistry/physical chemistry) ",
    tags: ["lab","methods","results","report","chemistry"],
    content: `# Lab report: *Chemistry lab report / chemistry/physical chemistry)  — [Experiment title]*

## Student / lab metadata
- **Name(s) / group:** [Name(s)]  
- **Course / section / lab #:** […]  
- **Date performed:** […]  
- **Date submitted:** […]  

## Abstract (if required, ~100–200 words)
- **Goal:** [One sentence]  
- **Key method:** [One sentence, apparatus-level]  
- **Main result (with unit):** [e.g. *g* = 9.8 ± 0.2 m/s²]  
- **Conclusion (one sentence, cautious):** […]  

## 1. Introduction & theory
- **Phenomenon / model:** [Relevant law or model with numbered equation if standard]  
- **Prediction / hypothesis (quant if possible):** *If* […], *then* […] because […].  
- **Relevant background citation(s):** [Textbook, lab manual, primary paper]  

## 2. Apparatus & materials
| Item | Model / value | Notes |
| --- | --- | --- |
| [e.g. balance] | [Precision / range] | [ID or cal date] |
- **Schematic (Fig. 1) — attach:** [List components labeled A–C]  

## 3. Procedure (repeatable, past tense, passive OK per instructor)
1. [Step with safety note if any]  
2. […]  
3. *Common pitfalls avoided:* […]  

## 4. Data & observations
| Run | *x* (unit) | *y* (unit) | Notes |
| --- | --- | --- | --- |
| 1 |  |  |  |
- **Raw data file:** [file name / attachment]  
- **Uncertainty sources:** [Readout, timing, background — estimate type A/B if taught]  

## 5. Analysis & results
- **Derived quantities:** [How computed from raw; show one sample calculation in prose or call out appendix]  
- **Graph (Fig. 2):** [What is on each axis, line or curve fit, R²]  
- **Error propagation (if required):** [σ combined formula or tool]  
- **Compare to expected / literature:** [Value ± σ vs reference]  

## 6. Discussion & error analysis
- **Largest % error source:** [and whether random or systematic]  
- **Ways to improve:** [Non-hand-wavy: e.g. longer baseline, more trials]  
- **Conclusion (answer the hypothesis, with strength of support):** […]  

## 7. References & appendices (if any)
- [Citation style per syllabus]  `,
  },
  {
    id: "academic-lab-physics",
    name: "Physics lab report",
    category: "academic",
    description: "Structured lab or project report: classical, circuits, or optics) ",
    tags: ["lab","methods","results","report","physics"],
    content: `# Lab report: *Physics lab report / classical, circuits, or optics)  — [Experiment title]*

## Student / lab metadata
- **Name(s) / group:** [Name(s)]  
- **Course / section / lab #:** […]  
- **Date performed:** […]  
- **Date submitted:** […]  

## Abstract (if required, ~100–200 words)
- **Goal:** [One sentence]  
- **Key method:** [One sentence, apparatus-level]  
- **Main result (with unit):** [e.g. *g* = 9.8 ± 0.2 m/s²]  
- **Conclusion (one sentence, cautious):** […]  

## 1. Introduction & theory
- **Phenomenon / model:** [Relevant law or model with numbered equation if standard]  
- **Prediction / hypothesis (quant if possible):** *If* […], *then* […] because […].  
- **Relevant background citation(s):** [Textbook, lab manual, primary paper]  

## 2. Apparatus & materials
| Item | Model / value | Notes |
| --- | --- | --- |
| [e.g. balance] | [Precision / range] | [ID or cal date] |
- **Schematic (Fig. 1) — attach:** [List components labeled A–C]  

## 3. Procedure (repeatable, past tense, passive OK per instructor)
1. [Step with safety note if any]  
2. […]  
3. *Common pitfalls avoided:* […]  

## 4. Data & observations
| Run | *x* (unit) | *y* (unit) | Notes |
| --- | --- | --- | --- |
| 1 |  |  |  |
- **Raw data file:** [file name / attachment]  
- **Uncertainty sources:** [Readout, timing, background — estimate type A/B if taught]  

## 5. Analysis & results
- **Derived quantities:** [How computed from raw; show one sample calculation in prose or call out appendix]  
- **Graph (Fig. 2):** [What is on each axis, line or curve fit, R²]  
- **Error propagation (if required):** [σ combined formula or tool]  
- **Compare to expected / literature:** [Value ± σ vs reference]  

## 6. Discussion & error analysis
- **Largest % error source:** [and whether random or systematic]  
- **Ways to improve:** [Non-hand-wavy: e.g. longer baseline, more trials]  
- **Conclusion (answer the hypothesis, with strength of support):** […]  

## 7. References & appendices (if any)
- [Citation style per syllabus]  `,
  },
  {
    id: "academic-lab-biology",
    name: "Biology lab report",
    category: "academic",
    description: "Structured lab or project report: molecular, ecology, or physiology) ",
    tags: ["lab","methods","results","report","biology"],
    content: `# Lab report: *Biology lab report / molecular, ecology, or physiology)  — [Experiment title]*

## Student / lab metadata
- **Name(s) / group:** [Name(s)]  
- **Course / section / lab #:** […]  
- **Date performed:** […]  
- **Date submitted:** […]  

## Abstract (if required, ~100–200 words)
- **Goal:** [One sentence]  
- **Key method:** [One sentence, apparatus-level]  
- **Main result (with unit):** [e.g. *g* = 9.8 ± 0.2 m/s²]  
- **Conclusion (one sentence, cautious):** […]  

## 1. Introduction & theory
- **Phenomenon / model:** [Relevant law or model with numbered equation if standard]  
- **Prediction / hypothesis (quant if possible):** *If* […], *then* […] because […].  
- **Relevant background citation(s):** [Textbook, lab manual, primary paper]  

## 2. Apparatus & materials
| Item | Model / value | Notes |
| --- | --- | --- |
| [e.g. balance] | [Precision / range] | [ID or cal date] |
- **Schematic (Fig. 1) — attach:** [List components labeled A–C]  

## 3. Procedure (repeatable, past tense, passive OK per instructor)
1. [Step with safety note if any]  
2. […]  
3. *Common pitfalls avoided:* […]  

## 4. Data & observations
| Run | *x* (unit) | *y* (unit) | Notes |
| --- | --- | --- | --- |
| 1 |  |  |  |
- **Raw data file:** [file name / attachment]  
- **Uncertainty sources:** [Readout, timing, background — estimate type A/B if taught]  

## 5. Analysis & results
- **Derived quantities:** [How computed from raw; show one sample calculation in prose or call out appendix]  
- **Graph (Fig. 2):** [What is on each axis, line or curve fit, R²]  
- **Error propagation (if required):** [σ combined formula or tool]  
- **Compare to expected / literature:** [Value ± σ vs reference]  

## 6. Discussion & error analysis
- **Largest % error source:** [and whether random or systematic]  
- **Ways to improve:** [Non-hand-wavy: e.g. longer baseline, more trials]  
- **Conclusion (answer the hypothesis, with strength of support):** […]  

## 7. References & appendices (if any)
- [Citation style per syllabus]  `,
  },
  {
    id: "academic-lab-computer-science",
    name: "CS lab / project report (methods + results) ",
    category: "academic",
    description: "Structured lab or project report: repro, complexity, and testing where relevant) ",
    tags: ["lab","methods","results","report","computer-science"],
    content: `# Lab report: *CS lab / project report (methods + results)  / repro, complexity, and testing where relevant)  — [Experiment title]*

## Student / lab metadata
- **Name(s) / group:** [Name(s)]  
- **Course / section / lab #:** […]  
- **Date performed:** […]  
- **Date submitted:** […]  

## Abstract (if required, ~100–200 words)
- **Goal:** [One sentence]  
- **Key method:** [One sentence, apparatus-level]  
- **Main result (with unit):** [e.g. *g* = 9.8 ± 0.2 m/s²]  
- **Conclusion (one sentence, cautious):** […]  

## 1. Introduction & theory
- **Phenomenon / model:** [Relevant law or model with numbered equation if standard]  
- **Prediction / hypothesis (quant if possible):** *If* […], *then* […] because […].  
- **Relevant background citation(s):** [Textbook, lab manual, primary paper]  

## 2. Apparatus & materials
| Item | Model / value | Notes |
| --- | --- | --- |
| [e.g. balance] | [Precision / range] | [ID or cal date] |
- **Schematic (Fig. 1) — attach:** [List components labeled A–C]  

## 3. Procedure (repeatable, past tense, passive OK per instructor)
1. [Step with safety note if any]  
2. […]  
3. *Common pitfalls avoided:* […]  

## 4. Data & observations
| Run | *x* (unit) | *y* (unit) | Notes |
| --- | --- | --- | --- |
| 1 |  |  |  |
- **Raw data file:** [file name / attachment]  
- **Uncertainty sources:** [Readout, timing, background — estimate type A/B if taught]  

## 5. Analysis & results
- **Derived quantities:** [How computed from raw; show one sample calculation in prose or call out appendix]  
- **Graph (Fig. 2):** [What is on each axis, line or curve fit, R²]  
- **Error propagation (if required):** [σ combined formula or tool]  
- **Compare to expected / literature:** [Value ± σ vs reference]  

## 6. Discussion & error analysis
- **Largest % error source:** [and whether random or systematic]  
- **Ways to improve:** [Non-hand-wavy: e.g. longer baseline, more trials]  
- **Conclusion (answer the hypothesis, with strength of support):** […]  

## 7. References & appendices (if any)
- [Citation style per syllabus]  `,
  },
  {
    id: "academic-lab-engineering",
    name: "Engineering lab / design report (measure + specification) ",
    category: "academic",
    description: "Structured lab or project report: safety, tolerances, and validation) ",
    tags: ["lab","methods","results","report","engineering"],
    content: `# Lab report: *Engineering lab / design report (measure + specification)  / safety, tolerances, and validation)  — [Experiment title]*

## Student / lab metadata
- **Name(s) / group:** [Name(s)]  
- **Course / section / lab #:** […]  
- **Date performed:** […]  
- **Date submitted:** […]  

## Abstract (if required, ~100–200 words)
- **Goal:** [One sentence]  
- **Key method:** [One sentence, apparatus-level]  
- **Main result (with unit):** [e.g. *g* = 9.8 ± 0.2 m/s²]  
- **Conclusion (one sentence, cautious):** […]  

## 1. Introduction & theory
- **Phenomenon / model:** [Relevant law or model with numbered equation if standard]  
- **Prediction / hypothesis (quant if possible):** *If* […], *then* […] because […].  
- **Relevant background citation(s):** [Textbook, lab manual, primary paper]  

## 2. Apparatus & materials
| Item | Model / value | Notes |
| --- | --- | --- |
| [e.g. balance] | [Precision / range] | [ID or cal date] |
- **Schematic (Fig. 1) — attach:** [List components labeled A–C]  

## 3. Procedure (repeatable, past tense, passive OK per instructor)
1. [Step with safety note if any]  
2. […]  
3. *Common pitfalls avoided:* […]  

## 4. Data & observations
| Run | *x* (unit) | *y* (unit) | Notes |
| --- | --- | --- | --- |
| 1 |  |  |  |
- **Raw data file:** [file name / attachment]  
- **Uncertainty sources:** [Readout, timing, background — estimate type A/B if taught]  

## 5. Analysis & results
- **Derived quantities:** [How computed from raw; show one sample calculation in prose or call out appendix]  
- **Graph (Fig. 2):** [What is on each axis, line or curve fit, R²]  
- **Error propagation (if required):** [σ combined formula or tool]  
- **Compare to expected / literature:** [Value ± σ vs reference]  

## 6. Discussion & error analysis
- **Largest % error source:** [and whether random or systematic]  
- **Ways to improve:** [Non-hand-wavy: e.g. longer baseline, more trials]  
- **Conclusion (answer the hypothesis, with strength of support):** […]  

## 7. References & appendices (if any)
- [Citation style per syllabus]  `,
  },
  {
    id: "academic-lab-psychology",
    name: "Psychology lab report (APA report style) ",
    category: "academic",
    description: "Structured lab or project report: IRB, materials, and stats section as taught) ",
    tags: ["lab","methods","results","report","psychology"],
    content: `# Lab report: *Psychology lab report (APA report style)  / IRB, materials, and stats section as taught)  — [Experiment title]*

## Student / lab metadata
- **Name(s) / group:** [Name(s)]  
- **Course / section / lab #:** […]  
- **Date performed:** […]  
- **Date submitted:** […]  

## Abstract (if required, ~100–200 words)
- **Goal:** [One sentence]  
- **Key method:** [One sentence, apparatus-level]  
- **Main result (with unit):** [e.g. *g* = 9.8 ± 0.2 m/s²]  
- **Conclusion (one sentence, cautious):** […]  

## 1. Introduction & theory
- **Phenomenon / model:** [Relevant law or model with numbered equation if standard]  
- **Prediction / hypothesis (quant if possible):** *If* […], *then* […] because […].  
- **Relevant background citation(s):** [Textbook, lab manual, primary paper]  

## 2. Apparatus & materials
| Item | Model / value | Notes |
| --- | --- | --- |
| [e.g. balance] | [Precision / range] | [ID or cal date] |
- **Schematic (Fig. 1) — attach:** [List components labeled A–C]  

## 3. Procedure (repeatable, past tense, passive OK per instructor)
1. [Step with safety note if any]  
2. […]  
3. *Common pitfalls avoided:* […]  

## 4. Data & observations
| Run | *x* (unit) | *y* (unit) | Notes |
| --- | --- | --- | --- |
| 1 |  |  |  |
- **Raw data file:** [file name / attachment]  
- **Uncertainty sources:** [Readout, timing, background — estimate type A/B if taught]  

## 5. Analysis & results
- **Derived quantities:** [How computed from raw; show one sample calculation in prose or call out appendix]  
- **Graph (Fig. 2):** [What is on each axis, line or curve fit, R²]  
- **Error propagation (if required):** [σ combined formula or tool]  
- **Compare to expected / literature:** [Value ± σ vs reference]  

## 6. Discussion & error analysis
- **Largest % error source:** [and whether random or systematic]  
- **Ways to improve:** [Non-hand-wavy: e.g. longer baseline, more trials]  
- **Conclusion (answer the hypothesis, with strength of support):** […]  

## 7. References & appendices (if any)
- [Citation style per syllabus]  `,
  },
  {
    id: "academic-thesis-masters",
    name: "Master’s thesis proposal outline",
    category: "academic",
    description: "Thesis or capstone outline: M.A./M.S. level — verify chapter count with your program) ",
    tags: ["thesis","proposal","timeline","committee","outline"],
    content: `# Thesis / capstone proposal outline — *Master’s thesis proposal outline / M.A./M.S. level — verify chapter count with your program) *

## Title (working) & keywords
- **Title:** [≤15 words, nouns, no colon stuffing without need]  
- **Keywords (5–7):** [word1, word2, …]  
- **Field / subfield:** […]  
- **Advisory team:** [Primary advisor, readers]  

## Abstract / summary (1 page max for this outline; verify local rules)
- **Research question (RQ) / hypothesis:** [1–2 sentences, precise]  
- **Significance:** [To field + who benefits]  
- **Method (at proposal stage):** [Data, design, analysis plan]  
- **Expected contribution:** [2–3 bullets, falsifiable]  
- **Risks & mitigations:** [What can fail; what you will do]  

## Chapter-by-chapter plan
| Ch. | Title (working) | Main deliverable | Dependencies |
| --- | --- | --- | --- |
| 1 | Introduction / literature | Problem framing, contributions | [Ethics, prior reading] |
| 2 | Methods / system design | [Artifact / protocol you will expose] | [Access to [data/tool]] |
| 3 | [Core results / study 1] | [Figures, tables, claims] | [Experiments] |
| 4 | […] | […] | […] |

## Timeline (Gantt in separate doc if required)
- **Q[ ]:** [Milestone, e.g. complete IRB, pilot N=…]  
- **Q[ ]:** [Draft to advisor]  
- **Q[ ]:** [Defense / submission]  

## Resources & ethics
- **Data / access letters:** [PI / org contact]  
- **IRB / animal / export control:** [status]  
- **IP / industry constraints:** [any]  `,
  },
  {
    id: "academic-thesis-phd",
    name: "PhD dissertation proposal / outline (thesis plan) ",
    category: "academic",
    description: "Thesis or capstone outline: qualifying document stage — not the full dissertation text) ",
    tags: ["thesis","proposal","timeline","committee","outline"],
    content: `# Thesis / capstone proposal outline — *PhD dissertation proposal / outline (thesis plan)  / qualifying document stage — not the full dissertation text) *

## Title (working) & keywords
- **Title:** [≤15 words, nouns, no colon stuffing without need]  
- **Keywords (5–7):** [word1, word2, …]  
- **Field / subfield:** […]  
- **Advisory team:** [Primary advisor, readers]  

## Abstract / summary (1 page max for this outline; verify local rules)
- **Research question (RQ) / hypothesis:** [1–2 sentences, precise]  
- **Significance:** [To field + who benefits]  
- **Method (at proposal stage):** [Data, design, analysis plan]  
- **Expected contribution:** [2–3 bullets, falsifiable]  
- **Risks & mitigations:** [What can fail; what you will do]  

## Chapter-by-chapter plan
| Ch. | Title (working) | Main deliverable | Dependencies |
| --- | --- | --- | --- |
| 1 | Introduction / literature | Problem framing, contributions | [Ethics, prior reading] |
| 2 | Methods / system design | [Artifact / protocol you will expose] | [Access to [data/tool]] |
| 3 | [Core results / study 1] | [Figures, tables, claims] | [Experiments] |
| 4 | […] | […] | […] |

## Timeline (Gantt in separate doc if required)
- **Q[ ]:** [Milestone, e.g. complete IRB, pilot N=…]  
- **Q[ ]:** [Draft to advisor]  
- **Q[ ]:** [Defense / submission]  

## Resources & ethics
- **Data / access letters:** [PI / org contact]  
- **IRB / animal / export control:** [status]  
- **IP / industry constraints:** [any]  `,
  },
  {
    id: "academic-thesis-undergraduate-honors",
    name: "Undergraduate honors thesis outline",
    category: "academic",
    description: "Thesis or capstone outline: senior capstone with thesis committee) ",
    tags: ["thesis","proposal","timeline","committee","outline"],
    content: `# Thesis / capstone proposal outline — *Undergraduate honors thesis outline / senior capstone with thesis committee) *

## Title (working) & keywords
- **Title:** [≤15 words, nouns, no colon stuffing without need]  
- **Keywords (5–7):** [word1, word2, …]  
- **Field / subfield:** […]  
- **Advisory team:** [Primary advisor, readers]  

## Abstract / summary (1 page max for this outline; verify local rules)
- **Research question (RQ) / hypothesis:** [1–2 sentences, precise]  
- **Significance:** [To field + who benefits]  
- **Method (at proposal stage):** [Data, design, analysis plan]  
- **Expected contribution:** [2–3 bullets, falsifiable]  
- **Risks & mitigations:** [What can fail; what you will do]  

## Chapter-by-chapter plan
| Ch. | Title (working) | Main deliverable | Dependencies |
| --- | --- | --- | --- |
| 1 | Introduction / literature | Problem framing, contributions | [Ethics, prior reading] |
| 2 | Methods / system design | [Artifact / protocol you will expose] | [Access to [data/tool]] |
| 3 | [Core results / study 1] | [Figures, tables, claims] | [Experiments] |
| 4 | […] | […] | […] |

## Timeline (Gantt in separate doc if required)
- **Q[ ]:** [Milestone, e.g. complete IRB, pilot N=…]  
- **Q[ ]:** [Draft to advisor]  
- **Q[ ]:** [Defense / submission]  

## Resources & ethics
- **Data / access letters:** [PI / org contact]  
- **IRB / animal / export control:** [status]  
- **IP / industry constraints:** [any]  `,
  },
  {
    id: "academic-dissertation-proposal",
    name: "Dissertation proposal",
    category: "academic",
    description: "Doctoral work template: Specific aims + method + committee-facing) ",
    tags: ["phd","proposal","dissertation","aims","method"],
    content: `# Dissertation proposal — *Working title*

## Committee & logistics
- **Program / department:** […]  
- **Chair + members:** [Names]  
- **Defence or submission target:** [date]  
- **Page/word limits:** [per handbook]  

## 1. Research questions (ranked) & hypotheses
- **Primary RQ:** […]  
- **Sub-RQs (if any / only if they earn their keep):** […]  
- **H1–H3 (falsifiable where applicable):** […]  

## 2. Significance & positioning
- **Gaps in literature (table optional):** [Gap, cited work, your angle]  
- **Why now / who cares:** […]  

## 3. Theoretical / conceptual framework (if applicable)
- **Key constructs and operational definitions:** [table]  

## 4. Proposed method & feasibility
- **Data / site / design:** […]  
- **Analysis plan (pre-registered if applicable):** […]  
- **Power / sample (if applicable):** [N and rationale]  
- **Risks & plan B:** […]  `,
  },
  {
    id: "academic-dissertation-chapter-structure",
    name: "Dissertation chapter structure plan",
    category: "academic",
    description: "Doctoral work template: long-document navigation + chapter jobs) ",
    tags: ["phd","chapters","long-doc","structure","plan"],
    content: `# Dissertation chapter structure plan — long-document navigation + chapter jobs)  — *Working title*

## Committee & logistics
- **Program / department:** […]  
- **Chair + members:** [Names]  
- **Defence or submission target:** [date]  
- **Page/word limits:** [per handbook]  

## Default chapter order (tune to your field)
1. **Introduction** — problem, contributions, map  
2. **Background & related work**  
3. **Methods / system / Study design**  
4. **Core study 1 (or part I)**  
5. **Core study 2 (or part II)**  
6. **Synthesis, limitations, future work**  
7. **Conclusion (short) / appendices**  

| Chapter | Est. length | % done |
| --- | --- | --- |
| 1 | [pages] | [%] |

## Consistency & style checklist before submission
- [ ] One style for headings, one numbering scheme, one citation format  
- [ ] All figures in text referenced; captions self-contained  
- [ ] Terminology / notation table if heavy math  `,
  },
  {
    id: "academic-dissertation-defense-presentation",
    name: "Dissertation defense presentation notes",
    category: "academic",
    description: "Doctoral work template: slides + Q&A — pair with *chapter-structure*) ",
    tags: ["defense","slides","q-and-a","phd","orals"],
    content: `# Dissertation defense presentation notes — slides + Q&A — pair with *chapter-structure*)  — *Working title*

## Committee & logistics
- **Program / department:** […]  
- **Chair + members:** [Names]  
- **Defence or submission target:** [date]  
- **Presentation length / format:** [per handbook]  

## Slide outline (typical: problem → method → 2–3 key results → contributions → future work → thank + backup)
1. **Title + name + one-line thesis**  
2. **Motivation & gap**  
3. **RQ + contributions (on screen as bullets)**  
4. **Method in one slide** (or two if interventional)  
5. **Result 1 (figure, claim, uncertainty)**  
6. **Result 2**  
7. **Result 3 / negative result if core**  
8. **Implications, limitations, future work**  
9. **Ack + questions**  

## Anticipated questions (and your one-line answer)
- **Edge case / confound:** […]  
- **What would falsify you?** […]  
- **Relation to [Author X] / [Y framework]?** […]  

## Back-up slide inventory
- **Extra fig [A]:** [for question about robustness]  `,
  },
  {
    id: "academic-literature-review-narrative",
    name: "Literature review: Narrative literature review (thematic synthesis) ",
    category: "academic",
    description: "Protocol + narrative slots for: Narrative literature review (thematic synthesis) ",
    tags: ["literature","review","synthesis","narrative","scholarly"],
    content: `# Narrative literature review (thematic synthesis)  literature review — *Working title*

## Review question & protocol (copy into supplement if systematic/scoping/umbrella)
- **Review question (PICO / PEO / SPIDER as applicable):** [population, exposure/intervention, outcomes, time]  
- **Aims (primary / secondary / exploratory — label clearly):** […]  
- **Inclusion / exclusion (database-specific syntax examples in appendix if needed):**  
  - *Include:* [age, design, min follow-up, language, …]  
  - *Exclude:* [opinion, editorials if empirical review, or justify keeps]  
- **Databases + dates + language:** [e.g. PubMed 2010–[year], English]  
- **PRISMA / other checklist:** [name + link]  

## Search & screening log
| Date | DB | String / strategy | # hits | after dedup | screen title | full text |
| --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |
- **Deduplication tool:** […]  
- **Screening (Title/Abstract) reviewers / conflicts:** […]  

## Extraction & quality / bias tools
- **Data items extracted (codebook in appendix or sheet):** [e.g. N, effect size, follow-up, attrition, funding]  
- **Quality / risk-of-bias tool (by study design type):** [ROB2 / Newcastle-Ottawa / other]  
- **Synthesis plan:** *narrative* | *subgroup* | *meta* | *descriptive* — *justify if mixed*  

## Report structure (main text)
1. **Introduction (why the review, scope, and contributions)**  
2. **Methods (reproducible, enough detail for a stranger to re-run in principle)**  
3. **Results of search (PRISMA-style figures/tables) + study characteristics**  
4. **Synthesis of findings (themes if narrative; forest / funnel if meta)**  
5. **Discussion: strengths, limitations, bias, gaps, recommendations**  

## Result tables to fill
- **Table 1 — Study / population characteristics**  
- **Table 2 — Outcomes (primary / sec.)**  
- **Figure 1 — PRISMA; Figure 2 — forest / other**  `,
  },
  {
    id: "academic-literature-review-systematic",
    name: "Literature review: Systematic review (search + PRISMA) ",
    category: "academic",
    description: "Protocol + narrative slots for: Systematic review (search + PRISMA) ",
    tags: ["literature","review","synthesis","systematic","scholarly"],
    content: `# Systematic review (search + PRISMA)  literature review — *Working title*

## Review question & protocol (copy into supplement if systematic/scoping/umbrella)
- **Review question (PICO / PEO / SPIDER as applicable):** [population, exposure/intervention, outcomes, time]  
- **Aims (primary / secondary / exploratory — label clearly):** […]  
- **Inclusion / exclusion (database-specific syntax examples in appendix if needed):**  
  - *Include:* [age, design, min follow-up, language, …]  
  - *Exclude:* [opinion, editorials if empirical review, or justify keeps]  
- **Databases + dates + language:** [e.g. PubMed 2010–[year], English]  
- **PRISMA / other checklist:** [name + link]  

## Search & screening log
| Date | DB | String / strategy | # hits | after dedup | screen title | full text |
| --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |
- **Deduplication tool:** […]  
- **Screening (Title/Abstract) reviewers / conflicts:** […]  

## Extraction & quality / bias tools
- **Data items extracted (codebook in appendix or sheet):** [e.g. N, effect size, follow-up, attrition, funding]  
- **Quality / risk-of-bias tool (by study design type):** [ROB2 / Newcastle-Ottawa / other]  
- **Synthesis plan:** *narrative* | *subgroup* | *meta* | *descriptive* — *justify if mixed*  

## Report structure (main text)
1. **Introduction (why the review, scope, and contributions)**  
2. **Methods (reproducible, enough detail for a stranger to re-run in principle)**  
3. **Results of search (PRISMA-style figures/tables) + study characteristics**  
4. **Synthesis of findings (themes if narrative; forest / funnel if meta)**  
5. **Discussion: strengths, limitations, bias, gaps, recommendations**  

## Result tables to fill
- **Table 1 — Study / population characteristics**  
- **Table 2 — Outcomes (primary / sec.)**  
- **Figure 1 — PRISMA; Figure 2 — forest / other**  `,
  },
  {
    id: "academic-literature-review-scoping",
    name: "Literature review: Scoping review (broad field mapping) ",
    category: "academic",
    description: "Protocol + narrative slots for: Scoping review (broad field mapping) ",
    tags: ["literature","review","synthesis","scoping","scholarly"],
    content: `# Scoping review (broad field mapping)  literature review — *Working title*

## Review question & protocol (copy into supplement if systematic/scoping/umbrella)
- **Review question (PICO / PEO / SPIDER as applicable):** [population, exposure/intervention, outcomes, time]  
- **Aims (primary / secondary / exploratory — label clearly):** […]  
- **Inclusion / exclusion (database-specific syntax examples in appendix if needed):**  
  - *Include:* [age, design, min follow-up, language, …]  
  - *Exclude:* [opinion, editorials if empirical review, or justify keeps]  
- **Databases + dates + language:** [e.g. PubMed 2010–[year], English]  
- **PRISMA / other checklist:** [name + link]  

## Search & screening log
| Date | DB | String / strategy | # hits | after dedup | screen title | full text |
| --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |
- **Deduplication tool:** […]  
- **Screening (Title/Abstract) reviewers / conflicts:** […]  

## Extraction & quality / bias tools
- **Data items extracted (codebook in appendix or sheet):** [e.g. N, effect size, follow-up, attrition, funding]  
- **Quality / risk-of-bias tool (by study design type):** [ROB2 / Newcastle-Ottawa / other]  
- **Synthesis plan:** *narrative* | *subgroup* | *meta* | *descriptive* — *justify if mixed*  

## Report structure (main text)
1. **Introduction (why the review, scope, and contributions)**  
2. **Methods (reproducible, enough detail for a stranger to re-run in principle)**  
3. **Results of search (PRISMA-style figures/tables) + study characteristics**  
4. **Synthesis of findings (themes if narrative; forest / funnel if meta)**  
5. **Discussion: strengths, limitations, bias, gaps, recommendations**  

## Result tables to fill
- **Table 1 — Study / population characteristics**  
- **Table 2 — Outcomes (primary / sec.)**  
- **Figure 1 — PRISMA; Figure 2 — forest / other**  `,
  },
  {
    id: "academic-literature-review-umbrella",
    name: "Literature review: Umbrella review (of reviews) ",
    category: "academic",
    description: "Protocol + narrative slots for: Umbrella review (of reviews) ",
    tags: ["literature","review","synthesis","umbrella","scholarly"],
    content: `# Umbrella review (of reviews)  literature review — *Working title*

## Review question & protocol (copy into supplement if systematic/scoping/umbrella)
- **Review question (PICO / PEO / SPIDER as applicable):** [population, exposure/intervention, outcomes, time]  
- **Aims (primary / secondary / exploratory — label clearly):** […]  
- **Inclusion / exclusion (database-specific syntax examples in appendix if needed):**  
  - *Include:* [age, design, min follow-up, language, …]  
  - *Exclude:* [opinion, editorials if empirical review, or justify keeps]  
- **Databases + dates + language:** [e.g. PubMed 2010–[year], English]  
- **PRISMA / other checklist:** [name + link]  

## Search & screening log
| Date | DB | String / strategy | # hits | after dedup | screen title | full text |
| --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |
- **Deduplication tool:** […]  
- **Screening (Title/Abstract) reviewers / conflicts:** […]  

## Extraction & quality / bias tools
- **Data items extracted (codebook in appendix or sheet):** [e.g. N, effect size, follow-up, attrition, funding]  
- **Quality / risk-of-bias tool (by study design type):** [ROB2 / Newcastle-Ottawa / other]  
- **Synthesis plan:** *narrative* | *subgroup* | *meta* | *descriptive* — *justify if mixed*  

## Report structure (main text)
1. **Introduction (why the review, scope, and contributions)**  
2. **Methods (reproducible, enough detail for a stranger to re-run in principle)**  
3. **Results of search (PRISMA-style figures/tables) + study characteristics**  
4. **Synthesis of findings (themes if narrative; forest / funnel if meta)**  
5. **Discussion: strengths, limitations, bias, gaps, recommendations**  

## Result tables to fill
- **Table 1 — Study / population characteristics**  
- **Table 2 — Outcomes (primary / sec.)**  
- **Figure 1 — PRISMA; Figure 2 — forest / other**  `,
  },
  {
    id: "academic-abstract-conference",
    name: "Abstract: Conference abstract (structured or unstructured) ",
    category: "academic",
    description: "Abstract draft slots for: Conference abstract (structured or unstructured) ",
    tags: ["abstract","imrad","keywords","submission","summary"],
    content: `# Conference abstract (structured or unstructured)  abstract (paste word limits and headings from the call)  

- **Target venue / call:** [conference, journal, thesis office, poster session]  
- **Title:** [12–20 words, sentence case unless venue wants Title Case]  
- **Authors (order per contribution):** [Name¹, Name²]  — *affiliations as footnote symbols*  
- **Category / track (if any):** [e.g. poster / short paper / long paper]  

## Structured abstract (if required: Background / Methods / Results / Conclusion)
**Background**  
[2–3 sentences. Problem, gap, why your question matters.]  

**Methods**  
[Design, setting, N, key instruments / intervention, primary outcome, time frame, analysis idea at high level; stats only if you have room.]  

**Results**  
[2–3 sentences with 1 main quantitative (effect size/CI) or qualitative code density if that’s your idiom.]  

**Conclusion**  
[Implication, cautious language; 1-sentence *take-home* that does not overclaim.]  

## Unstructured (if the venue only gives one block)
[Single 150–300 word paragraph, same IMRaD information density without headings.]  

## Keywords (3–6):
[kw1, kw2, …]  

## Competing interest / compliance one-liner (if required in abstract box)  
- [e.g. Funded by [grant], IRB #…, n/a, …]  `,
  },
  {
    id: "academic-abstract-journal",
    name: "Abstract: Journal abstract (IMRAD summary) ",
    category: "academic",
    description: "Abstract draft slots for: Journal abstract (IMRAD summary) ",
    tags: ["abstract","imrad","keywords","submission","summary"],
    content: `# Journal abstract (IMRAD summary)  abstract (paste word limits and headings from the call)  

- **Target venue / call:** [conference, journal, thesis office, poster session]  
- **Title:** [12–20 words, sentence case unless venue wants Title Case]  
- **Authors (order per contribution):** [Name¹, Name²]  — *affiliations as footnote symbols*  
- **Category / track (if any):** [e.g. poster / short paper / long paper]  

## Structured abstract (if required: Background / Methods / Results / Conclusion)
**Background**  
[2–3 sentences. Problem, gap, why your question matters.]  

**Methods**  
[Design, setting, N, key instruments / intervention, primary outcome, time frame, analysis idea at high level; stats only if you have room.]  

**Results**  
[2–3 sentences with 1 main quantitative (effect size/CI) or qualitative code density if that’s your idiom.]  

**Conclusion**  
[Implication, cautious language; 1-sentence *take-home* that does not overclaim.]  

## Unstructured (if the venue only gives one block)
[Single 150–300 word paragraph, same IMRaD information density without headings.]  

## Keywords (3–6):
[kw1, kw2, …]  

## Competing interest / compliance one-liner (if required in abstract box)  
- [e.g. Funded by [grant], IRB #…, n/a, …]  `,
  },
  {
    id: "academic-abstract-thesis",
    name: "Abstract: Thesis office abstract (university form) ",
    category: "academic",
    description: "Abstract draft slots for: Thesis office abstract (university form) ",
    tags: ["abstract","imrad","keywords","submission","summary"],
    content: `# Thesis office abstract (university form)  abstract (paste word limits and headings from the call)  

- **Target venue / call:** [conference, journal, thesis office, poster session]  
- **Title:** [12–20 words, sentence case unless venue wants Title Case]  
- **Authors (order per contribution):** [Name¹, Name²]  — *affiliations as footnote symbols*  
- **Category / track (if any):** [e.g. poster / short paper / long paper]  

## Structured abstract (if required: Background / Methods / Results / Conclusion)
**Background**  
[2–3 sentences. Problem, gap, why your question matters.]  

**Methods**  
[Design, setting, N, key instruments / intervention, primary outcome, time frame, analysis idea at high level; stats only if you have room.]  

**Results**  
[2–3 sentences with 1 main quantitative (effect size/CI) or qualitative code density if that’s your idiom.]  

**Conclusion**  
[Implication, cautious language; 1-sentence *take-home* that does not overclaim.]  

## Unstructured (if the venue only gives one block)
[Single 150–300 word paragraph, same IMRaD information density without headings.]  

## Keywords (3–6):
[kw1, kw2, …]  

## Competing interest / compliance one-liner (if required in abstract box)  
- [e.g. Funded by [grant], IRB #…, n/a, …]  `,
  },
  {
    id: "academic-abstract-poster",
    name: "Abstract: Poster-session abstract (visual-first claims) ",
    category: "academic",
    description: "Abstract draft slots for: Poster-session abstract (visual-first claims) ",
    tags: ["abstract","imrad","keywords","submission","summary"],
    content: `# Poster-session abstract (visual-first claims)  abstract (paste word limits and headings from the call)  

- **Target venue / call:** [conference, journal, thesis office, poster session]  
- **Title:** [12–20 words, sentence case unless venue wants Title Case]  
- **Authors (order per contribution):** [Name¹, Name²]  — *affiliations as footnote symbols*  
- **Category / track (if any):** [e.g. poster / short paper / long paper]  

## Structured abstract (if required: Background / Methods / Results / Conclusion)
**Background**  
[2–3 sentences. Problem, gap, why your question matters.]  

**Methods**  
[Design, setting, N, key instruments / intervention, primary outcome, time frame, analysis idea at high level; stats only if you have room.]  

**Results**  
[2–3 sentences with 1 main quantitative (effect size/CI) or qualitative code density if that’s your idiom.]  

**Conclusion**  
[Implication, cautious language; 1-sentence *take-home* that does not overclaim.]  

## Unstructured (if the venue only gives one block)
[Single 150–300 word paragraph, same IMRaD information density without headings.]  

## Keywords (3–6):
[kw1, kw2, …]  

## Competing interest / compliance one-liner (if required in abstract box)  
- [e.g. Funded by [grant], IRB #…, n/a, …]  `,
  },
  {
    id: "academic-bibliography-annotated",
    name: "Bibliography: Annotated",
    category: "academic",
    description: "Reference list and scope notes: Annotated",
    tags: ["bibliography","citations","sources","reading","references"],
    content: `# Annotated (style-tagged) bibliography for *[Project paper]*  

- **Style guide:** [APA 7 / MLA 9 / Chicago 17n / etc. or department PDF]  
- **Reference manager + file:** [Zotero / BibTeX file name]  

## Scope statement (keep if comprehensive / selected)
- **Inclusion window:** [e.g. peer-reviewed, English, 2000–[year] unless classic]  
- **Databases & search date:** [e.g. last run 2024-10-12]  
- **# sources planned / have:** [N]  

## Annotated entry template (repeat per item)
- **Full citation (style-perfect):** [Author, Year, Title, venue, vol(issue), pages, DOI]  
- **1–2 sentence summary (non-evaluative):** [What they did / claim].  
- **1–2 sentence critical evaluation (method, scope, use for *your* project):** […]  
- **Relevance code:** [Core / support / method-only / background]  

## Quotation & paraphrase hygiene (if you will cite in prose)
- **When you quote 40+ words [field-dependent]:** [block format rules]  
- **Page / timestamp / figure needed for all non-obvious claims:** *track as you go*  `,
  },
  {
    id: "academic-bibliography-standard",
    name: "Bibliography: Standard (works cited) ",
    category: "academic",
    description: "Reference list and scope notes: Standard (works cited) ",
    tags: ["bibliography","citations","sources","reading","references"],
    content: `# Standard (works cited)  (style-tagged) bibliography for *[Project paper]*  

- **Style guide:** [APA 7 / MLA 9 / Chicago 17n / etc. or department PDF]  
- **Reference manager + file:** [Zotero / BibTeX file name]  

## Scope statement (keep if comprehensive / selected)
- **Inclusion window:** [e.g. peer-reviewed, English, 2000–[year] unless classic]  
- **Databases & search date:** [e.g. last run 2024-10-12]  
- **# sources planned / have:** [N]  

## Bibliography / reference list (alphabetize by first author)
1. […]  
2. […]  
3. […]  

## Quotation & paraphrase hygiene (if you will cite in prose)
- **When you quote 40+ words [field-dependent]:** [block format rules]  
- **Page / timestamp / figure needed for all non-obvious claims:** *track as you go*  `,
  },
  {
    id: "academic-bibliography-selected",
    name: "Bibliography: Selected (reading list) ",
    category: "academic",
    description: "Reference list and scope notes: Selected (reading list) ",
    tags: ["bibliography","citations","sources","reading","references"],
    content: `# Selected (reading list)  (style-tagged) bibliography for *[Project paper]*  

- **Style guide:** [APA 7 / MLA 9 / Chicago 17n / etc. or department PDF]  
- **Reference manager + file:** [Zotero / BibTeX file name]  

## Scope statement (keep if comprehensive / selected)
- **Inclusion window:** [e.g. peer-reviewed, English, 2000–[year] unless classic]  
- **Databases & search date:** [e.g. last run 2024-10-12]  
- **# sources planned / have:** [N]  

## Bibliography / reference list (alphabetize by first author)
1. […]  
2. […]  
3. […]  

## Quotation & paraphrase hygiene (if you will cite in prose)
- **When you quote 40+ words [field-dependent]:** [block format rules]  
- **Page / timestamp / figure needed for all non-obvious claims:** *track as you go*  `,
  },
  {
    id: "academic-bibliography-comprehensive",
    name: "Bibliography: Comprehensive (capstone / review) ",
    category: "academic",
    description: "Reference list and scope notes: Comprehensive (capstone / review) ",
    tags: ["bibliography","citations","sources","reading","references"],
    content: `# Comprehensive (capstone / review)  (style-tagged) bibliography for *Capstone*  

- **Style guide:** [APA 7 / MLA 9 / Chicago 17n / etc. or department PDF]  
- **Reference manager + file:** [Zotero / BibTeX file name]  

## Scope statement (keep if comprehensive / selected)
- **Inclusion window:** [e.g. peer-reviewed, English, 2000–[year] unless classic]  
- **Databases & search date:** [e.g. last run 2024-10-12]  
- **# sources planned / have:** [N]  

## Bibliography / reference list (alphabetize by first author)
1. […]  
2. […]  
3. […]  

## Quotation & paraphrase hygiene (if you will cite in prose)
- **When you quote 40+ words [field-dependent]:** [block format rules]  
- **Page / timestamp / figure needed for all non-obvious claims:** *track as you go*  `,
  },
  {
    id: "academic-lecture-stem",
    name: "Lecture notes: STEM (proof / derivation / code-friendly) ",
    category: "academic",
    description: "In-class capture template for: STEM (proof / derivation / code-friendly) ",
    tags: ["lecture","notes","class","study","stem"],
    content: `# Lecture notes: *STEM (proof / derivation / code-friendly)  (discipline) — [Course, Week / Session] — [Topic] *

- **Instructor (if known):** [Name]  
- **Date:** [date]  
- **Reading before class (citations):** [chapters / PDFs]  
- **Key question for the session (write at top, answer at bottom):** […]  

## Outline (2-level max during live class)
1. [Big idea]  
   - *Definition / example:* […]  
2. [Next idea]  
   - *Sub-point:* […]  
3. […]  

## Definitions & notation (as precise as on board)
| Term / symbol | Definition | Notes & caveats |
| --- | --- | --- |
| [term] | [def] | [e.g. only when [condition]] |

## Theorems / claims / results (as stated, not as you hope)
- **Theorem / Proposition [n]:**  
  *Statement:* [Verbatim or tight paraphrase]  
  *Proof sketch (if in-class):* [3–5 steps]  
  *Where the assumptions bite:* [A1 used here; A2 for continuity]  

## Examples / case walk-through
- **Ex 1 (simple):** [Set-up, calc / narrative in steps, *pitfall:* …]  
- **Ex 2 (edge):** […]  

## Your questions (add during/after; resolve before exam)
1. [ ]  
2. [ ]  

## 3-minute self-quiz (close the page first)
- **Q1:** […]  *Ans (hidden in margin / back of page):* […]  `,
  },
  {
    id: "academic-lecture-humanities",
    name: "Lecture notes: Humanities (close reading / historiography) ",
    category: "academic",
    description: "In-class capture template for: Humanities (close reading / historiography) ",
    tags: ["lecture","notes","class","study","humanities"],
    content: `# Lecture notes: *Humanities (close reading / historiography)  (discipline) — [Course, Week / Session] — [Topic] *

- **Instructor (if known):** [Name]  
- **Date:** [date]  
- **Reading before class (citations):** [chapters / PDFs]  
- **Key question for the session (write at top, answer at bottom):** […]  

## Outline (2-level max during live class)
1. [Big idea]  
   - *Definition / example:* […]  
2. [Next idea]  
   - *Sub-point:* […]  
3. […]  

## Definitions & notation (as precise as on board)
| Term / symbol | Definition | Notes & caveats |
| --- | --- | --- |
| [term] | [def] | [e.g. only when [condition]] |

## Theorems / claims / results (as stated, not as you hope)
- **Theorem / Proposition [n]:**  
  *Statement:* [Verbatim or tight paraphrase]  
  *Proof sketch (if in-class):* [3–5 steps]  
  *Where the assumptions bite:* [A1 used here; A2 for continuity]  

## Examples / case walk-through
- **Ex 1 (simple):** [Set-up, calc / narrative in steps, *pitfall:* …]  
- **Ex 2 (edge):** […]  

## Your questions (add during/after; resolve before exam)
1. [ ]  
2. [ ]  

## 3-minute self-quiz (close the page first)
- **Q1:** […]  *Ans (hidden in margin / back of page):* […]  `,
  },
  {
    id: "academic-lecture-social-sciences",
    name: "Lecture notes: Social sciences (theory, methods, data notes) ",
    category: "academic",
    description: "In-class capture template for: Social sciences (theory, methods, data notes) ",
    tags: ["lecture","notes","class","study","social-sciences"],
    content: `# Lecture notes: *Social sciences (theory, methods, data notes)  (discipline) — [Course, Week / Session] — [Topic] *

- **Instructor (if known):** [Name]  
- **Date:** [date]  
- **Reading before class (citations):** [chapters / PDFs]  
- **Key question for the session (write at top, answer at bottom):** […]  

## Outline (2-level max during live class)
1. [Big idea]  
   - *Definition / example:* […]  
2. [Next idea]  
   - *Sub-point:* […]  
3. […]  

## Definitions & notation (as precise as on board)
| Term / symbol | Definition | Notes & caveats |
| --- | --- | --- |
| [term] | [def] | [e.g. only when [condition]] |

## Theorems / claims / results (as stated, not as you hope)
- **Theorem / Proposition [n]:**  
  *Statement:* [Verbatim or tight paraphrase]  
  *Proof sketch (if in-class):* [3–5 steps]  
  *Where the assumptions bite:* [A1 used here; A2 for continuity]  

## Examples / case walk-through
- **Ex 1 (simple):** [Set-up, calc / narrative in steps, *pitfall:* …]  
- **Ex 2 (edge):** […]  

## Your questions (add during/after; resolve before exam)
1. [ ]  
2. [ ]  

## 3-minute self-quiz (close the page first)
- **Q1:** […]  *Ans (hidden in margin / back of page):* […]  `,
  },
  {
    id: "academic-lecture-law",
    name: "Lecture notes: Law (IRAC, cases, and holdings) ",
    category: "academic",
    description: "In-class capture template for: Law (IRAC, cases, and holdings) ",
    tags: ["lecture","notes","class","study","law"],
    content: `# Lecture notes: *Law (IRAC, cases, and holdings)  (discipline) — [Course, Week / Session] — [Topic] *

- **Instructor (if known):** [Name]  
- **Date:** [date]  
- **Reading before class (citations):** [chapters / PDFs]  
- **Key question for the session (write at top, answer at bottom):** […]  

## Outline (2-level max during live class)
1. [Big idea]  
   - *Definition / example:* […]  
2. [Next idea]  
   - *Sub-point:* […]  
3. […]  

## Definitions & notation (as precise as on board)
| Term / symbol | Definition | Notes & caveats |
| --- | --- | --- |
| [term] | [def] | [e.g. only when [condition]] |

## Theorems / claims / results (as stated, not as you hope)
- **Theorem / Proposition [n]:**  
  *Statement:* [Verbatim or tight paraphrase]  
  *Proof sketch (if in-class):* [3–5 steps]  
  *Where the assumptions bite:* [A1 used here; A2 for continuity]  

## Examples / case walk-through
- **Ex 1 (simple):** [Set-up, calc / narrative in steps, *pitfall:* …]  
- **Ex 2 (edge):** […]  

## Your questions (add during/after; resolve before exam)
1. [ ]  
2. [ ]  

## 3-minute self-quiz (close the page first)
- **Q1:** […]  *Ans (hidden in margin / back of page):* […]  `,
  },
  {
    id: "academic-lecture-medicine",
    name: "Lecture notes: Medicine (differential, evidence grades, time course) ",
    category: "academic",
    description: "In-class capture template for: Medicine (differential, evidence grades, time course) ",
    tags: ["lecture","notes","class","study","medicine"],
    content: `# Lecture notes: *Medicine (differential, evidence grades, time course)  (discipline) — [Course, Week / Session] — [Topic] *

- **Instructor (if known):** [Name]  
- **Date:** [date]  
- **Reading before class (citations):** [chapters / PDFs]  
- **Key question for the session (write at top, answer at bottom):** […]  

## Outline (2-level max during live class)
1. [Big idea]  
   - *Definition / example:* […]  
2. [Next idea]  
   - *Sub-point:* […]  
3. […]  

## Definitions & notation (as precise as on board)
| Term / symbol | Definition | Notes & caveats |
| --- | --- | --- |
| [term] | [def] | [e.g. only when [condition]] |

## Theorems / claims / results (as stated, not as you hope)
- **Theorem / Proposition [n]:**  
  *Statement:* [Verbatim or tight paraphrase]  
  *Proof sketch (if in-class):* [3–5 steps]  
  *Where the assumptions bite:* [A1 used here; A2 for continuity]  

## Examples / case walk-through
- **Ex 1 (simple):** [Set-up, calc / narrative in steps, *pitfall:* …]  
- **Ex 2 (edge):** […]  

## Your questions (add during/after; resolve before exam)
1. [ ]  
2. [ ]  

## 3-minute self-quiz (close the page first)
- **Q1:** […]  *Ans (hidden in margin / back of page):* […]  `,
  },
  {
    id: "academic-syllabus-undergraduate",
    name: "Undergraduate syllabus",
    category: "academic",
    description: "Course contract + learning outcomes: Undergraduate syllabus",
    tags: ["syllabus","course","outcomes","assessment","policy"],
    content: `# Syllabus — *Undergraduate syllabus (mode)  course: [Code] — [Title] — [Term Year]*  

## 1. Course information
| | |  
| --- | --- |  
| **Instructor** | [name, email, office hours, modality] |  
| **Meeting** | [days / times / room or Zoom] |  
| **Prerequisites** | [courses / background] |  
| **Required texts / access** | [ISBN / OER links] |  

## 2. Description & learning outcomes (measurable)
- **Short description (catalog-style):** [~100 words]  
- **By the end, students will be able to: (verbs from Bloom) **  
  1. [Outcome 1, assessment-linked]  
  2. […]  
  3. […]  

## 3. Assessment & grading (weights sum to 100%)
| Item | % | When | Pro policy on late / revision |  
| --- | --- | --- | --- |  
| [e.g. engagement] |  |  |  |  
| [Midterm] |  |  |  |  

- **Rubric / exemplars for major assignments:** *linked*  
- **Generative-AI / integrity policy (specific to the tasks):** [field norms]  

## 4. Schedule (week-by-week; in separate sheet if >1 page, link here)  
| Week | Topics | Readings | Due |  
| --- | --- | --- | --- |  
| 1 | […] | […] | […]  |  

## 5. Accessibility & support
- **DRC / campus resources:** *links*  
- **Mental health / crisis (non-clinical, campus-specific):** *link*  

## 6. Course policies in brief
- **Email / comms / discussion norms**  
- **Make-up and extensions**  
- **Harrassment & inclusion [institutional text or pointer]**  `,
  },
  {
    id: "academic-syllabus-graduate",
    name: "Graduate seminar syllabus",
    category: "academic",
    description: "Course contract + learning outcomes: Graduate seminar syllabus",
    tags: ["syllabus","course","outcomes","assessment","policy"],
    content: `# Syllabus — *Graduate seminar syllabus (mode)  course: [Code] — [Title] — [Term Year]*  

## 1. Course information
| | |  
| --- | --- |  
| **Instructor** | [name, email, office hours, modality] |  
| **Meeting** | [days / times / room or Zoom] |  
| **Prerequisites** | [courses / background] |  
| **Required texts / access** | [ISBN / OER links] |  

## 2. Description & learning outcomes (measurable)
- **Short description (catalog-style):** [~100 words]  
- **By the end, students will be able to: (verbs from Bloom) **  
  1. [Outcome 1, assessment-linked]  
  2. […]  
  3. […]  

## 3. Assessment & grading (weights sum to 100%)
| Item | % | When | Pro policy on late / revision |  
| --- | --- | --- | --- |  
| [e.g. engagement] |  |  |  |  
| [Midterm] |  |  |  |  

- **Rubric / exemplars for major assignments:** *linked*  
- **Generative-AI / integrity policy (specific to the tasks):** [field norms]  

## 4. Schedule (week-by-week; in separate sheet if >1 page, link here)  
| Week | Topics | Readings | Due |  
| --- | --- | --- | --- |  
| 1 | […] | […] | […]  |  

## 5. Accessibility & support
- **DRC / campus resources:** *links*  
- **Mental health / crisis (non-clinical, campus-specific):** *link*  

## 6. Course policies in brief
- **Email / comms / discussion norms**  
- **Make-up and extensions**  
- **Harrassment & inclusion [institutional text or pointer]**  `,
  },
  {
    id: "academic-syllabus-online",
    name: "Online / async syllabus",
    category: "academic",
    description: "Course contract + learning outcomes: Online / async syllabus",
    tags: ["syllabus","course","outcomes","assessment","policy"],
    content: `# Syllabus — *Online / async syllabus (mode)  course: [Code] — [Title] — [Term Year]*  

## 1. Course information
| | |  
| --- | --- |  
| **Instructor** | [name, email, office hours, modality] |  
| **Meeting** | [days / times / room or Zoom] |  
| **Prerequisites** | [courses / background] |  
| **Required texts / access** | [ISBN / OER links] |  

## 2. Description & learning outcomes (measurable)
- **Short description (catalog-style):** [~100 words]  
- **By the end, students will be able to: (verbs from Bloom) **  
  1. [Outcome 1, assessment-linked]  
  2. […]  
  3. […]  

## 3. Assessment & grading (weights sum to 100%)
| Item | % | When | Pro policy on late / revision |  
| --- | --- | --- | --- |  
| [e.g. engagement] |  |  |  |  
| [Midterm] |  |  |  |  

- **Rubric / exemplars for major assignments:** *linked*  
- **Generative-AI / integrity policy (specific to the tasks):** [field norms]  

## 4. Schedule (week-by-week; in separate sheet if >1 page, link here)  
| Week | Topics | Readings | Due |  
| --- | --- | --- | --- |  
| 1 | […] | […] | […]  |  

## 5. Accessibility & support
- **DRC / campus resources:** *links*  
- **Mental health / crisis (non-clinical, campus-specific):** *link*  

## 6. Course policies in brief
- **Email / comms / discussion norms**  
- **Make-up and extensions**  
- **Harrassment & inclusion [institutional text or pointer]**  `,
  },
  {
    id: "academic-syllabus-workshop",
    name: "Workshop (short / intensive) syllabus",
    category: "academic",
    description: "Course contract + learning outcomes: Workshop (short / intensive) syllabus",
    tags: ["syllabus","course","outcomes","assessment","policy"],
    content: `# Syllabus — *Workshop (short / intensive) syllabus (mode)  course: [Code] — [Title] — [Term Year]*  

## 1. Course information
| | |  
| --- | --- |  
| **Instructor** | [name, email, office hours, modality] |  
| **Meeting** | [days / times / room or Zoom] |  
| **Prerequisites** | [courses / background] |  
| **Required texts / access** | [ISBN / OER links] |  

## 2. Description & learning outcomes (measurable)
- **Short description (catalog-style):** [~100 words]  
- **By the end, students will be able to: (verbs from Bloom) **  
  1. [Outcome 1, assessment-linked]  
  2. […]  
  3. […]  

## 3. Assessment & grading (weights sum to 100%)
| Item | % | When | Pro policy on late / revision |  
| --- | --- | --- | --- |  
| [e.g. engagement] |  |  |  |  
| [Midterm] |  |  |  |  

- **Rubric / exemplars for major assignments:** *linked*  
- **Generative-AI / integrity policy (specific to the tasks):** [field norms]  

## 4. Schedule (week-by-week; in separate sheet if >1 page, link here)  
| Week | Topics | Readings | Due |  
| --- | --- | --- | --- |  
| 1 | […] | […] | […]  |  

## 5. Accessibility & support
- **DRC / campus resources:** *links*  
- **Mental health / crisis (non-clinical, campus-specific):** *link*  

## 6. Course policies in brief
- **Email / comms / discussion norms**  
- **Make-up and extensions**  
- **Harrassment & inclusion [institutional text or pointer]**  `,
  },
  {
    id: "academic-syllabus-seminar",
    name: "Seminar (discussion-forward) syllabus",
    category: "academic",
    description: "Course contract + learning outcomes: Seminar (discussion-forward) syllabus",
    tags: ["syllabus","course","outcomes","assessment","policy"],
    content: `# Syllabus — *Seminar (discussion-forward) syllabus (mode)  course: [Code] — [Title] — [Term Year]*  

## 1. Course information
| | |  
| --- | --- |  
| **Instructor** | [name, email, office hours, modality] |  
| **Meeting** | [days / times / room or Zoom] |  
| **Prerequisites** | [courses / background] |  
| **Required texts / access** | [ISBN / OER links] |  

## 2. Description & learning outcomes (measurable)
- **Short description (catalog-style):** [~100 words]  
- **By the end, students will be able to: (verbs from Bloom) **  
  1. [Outcome 1, assessment-linked]  
  2. […]  
  3. […]  

## 3. Assessment & grading (weights sum to 100%)
| Item | % | When | Pro policy on late / revision |  
| --- | --- | --- | --- |  
| [e.g. engagement] |  |  |  |  
| [Midterm] |  |  |  |  

- **Rubric / exemplars for major assignments:** *linked*  
- **Generative-AI / integrity policy (specific to the tasks):** [field norms]  

## 4. Schedule (week-by-week; in separate sheet if >1 page, link here)  
| Week | Topics | Readings | Due |  
| --- | --- | --- | --- |  
| 1 | […] | […] | […]  |  

## 5. Accessibility & support
- **DRC / campus resources:** *links*  
- **Mental health / crisis (non-clinical, campus-specific):** *link*  

## 6. Course policies in brief
- **Email / comms / discussion norms**  
- **Make-up and extensions**  
- **Harrassment & inclusion [institutional text or pointer]**  `,
  },
  {
    id: "academic-grant-nsf",
    name: "Grant proposal: NSF-style grant (Broader Impacts, data plan) ",
    category: "academic",
    description: "Proposal skeleton for: NSF-style grant (Broader Impacts, data plan) ",
    tags: ["grant","funding","budget","aims","narrative"],
    content: `# Grant proposal — *NSF-style grant (Broader Impacts, data plan)  (template) *  

## 1. Cover sheet & snapshot (funder-specific; paste their PDF fields here)  
- **PI / org / DUNS / F&A rate / period / total request**  
- **1-page summary of aims (as required):**  
  1) [Gap, 1 sentence]  
  2) [Specific aims in plain language, 1–2 sentences]  
  3) [Preliminary data in one line + expected impact, 1–2 sentences]  

## 2. Specific Aims (or equivalent; ~1 page)  
- **Aim 1 (feasible, novel, *has a kill criterion*):** [Hypothesis, approach, success metric, PI time %]  
- **Aim 2:** […]  
- **Option Aim 3 (only if it doesn’t bloat; otherwise fold into 1/2):**  
- **Rationale in 3 short paragraphs (gap → your angle → pay-off)**  

## 3. Research strategy / work plan  
### 3.1 Significance & innovation  
- *Why the work matters beyond your lab; what changes if you succeed*  

### 3.2 Approach (methods by aim; not a copy-paste of your thesis)  
| Sub-aim / milestone | Work | Risks if any | plan B / pivot |  
| --- | --- | --- | --- |  

- **Data management / open science / reproducibility (if in scope of call)**  
- **IRB / IACUC / RCR training status**  

## 4. Preliminary work / results (tailored, not a CV dump)  
- [Fig. 1 — the single strongest *because-of-us* result]  

## 5. Broader impacts / dissemination / project management (if required as separate section)  

## 6. Budget justification (1 paragraph per line item that isn’t obvious)  
- **Postdoc/RA % effort & role:**  
- **Equipment that isn’t a toy:**  
- **Subcontracts / service contracts:**  `,
  },
  {
    id: "academic-grant-nih",
    name: "Grant proposal: NIH R-style grant (Aims, significance, innovation) ",
    category: "academic",
    description: "Proposal skeleton for: NIH R-style grant (Aims, significance, innovation) ",
    tags: ["grant","funding","budget","aims","narrative"],
    content: `# Grant proposal — *NIH R-style grant (Aims, significance, innovation)  (template) *  

## 1. Cover sheet & snapshot (funder-specific; paste their PDF fields here)  
- **PI / org / DUNS / F&A rate / period / total request**  
- **1-page summary of aims (as required):**  
  1) [Gap, 1 sentence]  
  2) [Specific aims in plain language, 1–2 sentences]  
  3) [Preliminary data in one line + expected impact, 1–2 sentences]  

## 2. Specific Aims (or equivalent; ~1 page)  
- **Aim 1 (feasible, novel, *has a kill criterion*):** [Hypothesis, approach, success metric, PI time %]  
- **Aim 2:** […]  
- **Option Aim 3 (only if it doesn’t bloat; otherwise fold into 1/2):**  
- **Rationale in 3 short paragraphs (gap → your angle → pay-off)**  

## 3. Research strategy / work plan  
### 3.1 Significance & innovation  
- *Why the work matters beyond your lab; what changes if you succeed*  

### 3.2 Approach (methods by aim; not a copy-paste of your thesis)  
| Sub-aim / milestone | Work | Risks if any | plan B / pivot |  
| --- | --- | --- | --- |  

- **Data management / open science / reproducibility (if in scope of call)**  
- **IRB / IACUC / RCR training status**  

## 4. Preliminary work / results (tailored, not a CV dump)  
- [Fig. 1 — the single strongest *because-of-us* result]  

## 5. Broader impacts / dissemination / project management (if required as separate section)  

## 6. Budget justification (1 paragraph per line item that isn’t obvious)  
- **Postdoc/RA % effort & role:**  
- **Equipment that isn’t a toy:**  
- **Subcontracts / service contracts:**  `,
  },
  {
    id: "academic-grant-foundation",
    name: "Grant proposal: Private foundation (mission fit, theory of change) ",
    category: "academic",
    description: "Proposal skeleton for: Private foundation (mission fit, theory of change) ",
    tags: ["grant","funding","budget","aims","narrative"],
    content: `# Grant proposal — *Private foundation (mission fit, theory of change)  (template) *  

## 1. Cover sheet & snapshot (funder-specific; paste their PDF fields here)  
- **PI / org / DUNS / F&A rate / period / total request**  
- **1-page summary of aims (as required):**  
  1) [Gap, 1 sentence]  
  2) [Specific aims in plain language, 1–2 sentences]  
  3) [Preliminary data in one line + expected impact, 1–2 sentences]  

## 2. Specific Aims (or equivalent; ~1 page)  
- **Aim 1 (feasible, novel, *has a kill criterion*):** [Hypothesis, approach, success metric, PI time %]  
- **Aim 2:** […]  
- **Option Aim 3 (only if it doesn’t bloat; otherwise fold into 1/2):**  
- **Rationale in 3 short paragraphs (gap → your angle → pay-off)**  

## 3. Research strategy / work plan  
### 3.1 Significance & innovation  
- *Why the work matters beyond your lab; what changes if you succeed*  

### 3.2 Approach (methods by aim; not a copy-paste of your thesis)  
| Sub-aim / milestone | Work | Risks if any | plan B / pivot |  
| --- | --- | --- | --- |  

- **Data management / open science / reproducibility (if in scope of call)**  
- **IRB / IACUC / RCR training status**  

## 4. Preliminary work / results (tailored, not a CV dump)  
- [Fig. 1 — the single strongest *because-of-us* result]  

## 5. Broader impacts / dissemination / project management (if required as separate section)  

## 6. Budget justification (1 paragraph per line item that isn’t obvious)  
- **Postdoc/RA % effort & role:**  
- **Equipment that isn’t a toy:**  
- **Subcontracts / service contracts:**  `,
  },
  {
    id: "academic-grant-internal",
    name: "Grant proposal: Internal seed / RFP (campus form + chair letter) ",
    category: "academic",
    description: "Proposal skeleton for: Internal seed / RFP (campus form + chair letter) ",
    tags: ["grant","funding","budget","aims","narrative"],
    content: `# Grant proposal — *Internal seed / RFP (campus form + chair letter)  (template) *  

## 1. Cover sheet & snapshot (funder-specific; paste their PDF fields here)  
- **PI / org / DUNS / F&A rate / period / total request**  
- **1-page summary of aims (as required):**  
  1) [Gap, 1 sentence]  
  2) [Specific aims in plain language, 1–2 sentences]  
  3) [Preliminary data in one line + expected impact, 1–2 sentences]  

## 2. Specific Aims (or equivalent; ~1 page)  
- **Aim 1 (feasible, novel, *has a kill criterion*):** [Hypothesis, approach, success metric, PI time %]  
- **Aim 2:** […]  
- **Option Aim 3 (only if it doesn’t bloat; otherwise fold into 1/2):**  
- **Rationale in 3 short paragraphs (gap → your angle → pay-off)**  

## 3. Research strategy / work plan  
### 3.1 Significance & innovation  
- *Why the work matters beyond your lab; what changes if you succeed*  

### 3.2 Approach (methods by aim; not a copy-paste of your thesis)  
| Sub-aim / milestone | Work | Risks if any | plan B / pivot |  
| --- | --- | --- | --- |  

- **Data management / open science / reproducibility (if in scope of call)**  
- **IRB / IACUC / RCR training status**  

## 4. Preliminary work / results (tailored, not a CV dump)  
- [Fig. 1 — the single strongest *because-of-us* result]  

## 5. Broader impacts / dissemination / project management (if required as separate section)  

## 6. Budget justification (1 paragraph per line item that isn’t obvious)  
- **Postdoc/RA % effort & role:**  
- **Equipment that isn’t a toy:**  
- **Subcontracts / service contracts:**  `,
  },
  {
    id: "academic-grant-seed",
    name: "Grant proposal: Exploratory / seed (small budget, 12 month) ",
    category: "academic",
    description: "Proposal skeleton for: Exploratory / seed (small budget, 12 month) ",
    tags: ["grant","funding","budget","aims","narrative"],
    content: `# Grant proposal — *Exploratory / seed (small budget, 12 month)  (template) *  

## 1. Cover sheet & snapshot (funder-specific; paste their PDF fields here)  
- **PI / org / DUNS / F&A rate / period / total request**  
- **1-page summary of aims (as required):**  
  1) [Gap, 1 sentence]  
  2) [Specific aims in plain language, 1–2 sentences]  
  3) [Preliminary data in one line + expected impact, 1–2 sentences]  

## 2. Specific Aims (or equivalent; ~1 page)  
- **Aim 1 (feasible, novel, *has a kill criterion*):** [Hypothesis, approach, success metric, PI time %]  
- **Aim 2:** […]  
- **Option Aim 3 (only if it doesn’t bloat; otherwise fold into 1/2):**  
- **Rationale in 3 short paragraphs (gap → your angle → pay-off)**  

## 3. Research strategy / work plan  
### 3.1 Significance & innovation  
- *Why the work matters beyond your lab; what changes if you succeed*  

### 3.2 Approach (methods by aim; not a copy-paste of your thesis)  
| Sub-aim / milestone | Work | Risks if any | plan B / pivot |  
| --- | --- | --- | --- |  

- **Data management / open science / reproducibility (if in scope of call)**  
- **IRB / IACUC / RCR training status**  

## 4. Preliminary work / results (tailored, not a CV dump)  
- [Fig. 1 — the single strongest *because-of-us* result]  

## 5. Broader impacts / dissemination / project management (if required as separate section)  

## 6. Budget justification (1 paragraph per line item that isn’t obvious)  
- **Postdoc/RA % effort & role:**  
- **Equipment that isn’t a toy:**  
- **Subcontracts / service contracts:**  `,
  },
  {
    id: "academic-cv-early-career",
    name: "Academic CV: Early career academic CV (postdoc / AP track) ",
    category: "academic",
    description: "Field-adapted CV for: Early career academic CV (postdoc / AP track) ",
    tags: ["cv","academic","publications","funding","teaching"],
    content: `# CV — *Early career academic CV (postdoc / AP track)  (track)  scholar*  

[Name, Ph.D. / M.S. (if you list degrees in header) — ORCID: [id] | Research site: [url]  
Email: […]  |  Address (optional): […]  

## Research / professional summary (2–3 lines for industry-transition; 0–1 line for some pure-academic)  
- [1–2 sentence *thread* of your program of work, not a bio adjective pile]  

## Appointments  
- [Year–Year, Title, Department, University, [City, ST]]  

## Education  
- **Ph.D., [Field],** [Univ, Year]  — *Thesis: [title]. Advisor: [Name]  
- **M.S. / B.S. (if you keep):** […]  

## Publications (*reverse chronological; be field-typical* — bold your name)  
- **Refereed journal articles**  
  1. [FirstAuthor†, You*, … (Year). Title, *Journal*, vol(issue), pages, DOI.]  
  2. […]  
- **Refereed conference (only if in-field treated as archivable — state norm in cover letter, not in CV**  
  1. […]  
- **Preprints (clearly separate; update or remove post-publication**  
  1. [arXiv / bioRxiv + DOI]  

## Funded research (as PI/Co-PI)  
- **[Role], [Agency, grant #],** *[Title, role %],* [amount total & your share], [dates]  

## Invited talks & select presentations (tighten for senior)  
- **[Year, Title],** *Venue / host*, [City]  

## Teaching  
- **[Univ, Course code – Title, role],** [term years]  

## Service (editorial, review, program committees — last 3 years heavy; older compress)  
- **Ad hoc reviewer for:** [list journals; or say “15+ ad hoc reviews, available on request”]  

## Professional memberships & cert. (sparse)  

## Skills (only if *not* implied by publications)  
- **Languages, methods, software you could teach a grad student**  `,
  },
  {
    id: "academic-cv-mid-career",
    name: "Academic CV: Mid-career CV (tenure + leadership) ",
    category: "academic",
    description: "Field-adapted CV for: Mid-career CV (tenure + leadership) ",
    tags: ["cv","academic","publications","funding","teaching"],
    content: `# CV — *Mid-career CV (tenure + leadership)  (track)  scholar*  

[Name, Ph.D. / M.S. (if you list degrees in header) — ORCID: [id] | Research site: [url]  
Email: […]  |  Address (optional): […]  

## Research / professional summary (2–3 lines for industry-transition; 0–1 line for some pure-academic)  
- [1–2 sentence *thread* of your program of work, not a bio adjective pile]  

## Appointments  
- [Year–Year, Title, Department, University, [City, ST]]  

## Education  
- **Ph.D., [Field],** [Univ, Year]  — *Thesis: [title]. Advisor: [Name]  
- **M.S. / B.S. (if you keep):** […]  

## Publications (*reverse chronological; be field-typical* — bold your name)  
- **Refereed journal articles**  
  1. [FirstAuthor†, You*, … (Year). Title, *Journal*, vol(issue), pages, DOI.]  
  2. […]  
- **Refereed conference (only if in-field treated as archivable — state norm in cover letter, not in CV**  
  1. […]  
- **Preprints (clearly separate; update or remove post-publication**  
  1. [arXiv / bioRxiv + DOI]  

## Funded research (as PI/Co-PI)  
- **[Role], [Agency, grant #],** *[Title, role %],* [amount total & your share], [dates]  

## Invited talks & select presentations (tighten for senior)  
- **[Year, Title],** *Venue / host*, [City]  

## Teaching  
- **[Univ, Course code – Title, role],** [term years]  

## Service (editorial, review, program committees — last 3 years heavy; older compress)  
- **Ad hoc reviewer for:** [list journals; or say “15+ ad hoc reviews, available on request”]  

## Professional memberships & cert. (sparse)  

## Skills (only if *not* implied by publications)  
- **Languages, methods, software you could teach a grad student**  `,
  },
  {
    id: "academic-cv-senior",
    name: "Academic CV: Senior CV (reduced teaching detail, more invited / editorial) ",
    category: "academic",
    description: "Field-adapted CV for: Senior CV (reduced teaching detail, more invited / editorial) ",
    tags: ["cv","academic","publications","funding","teaching"],
    content: `# CV — *Senior CV (reduced teaching detail, more invited / editorial)  (track)  scholar*  

[Name, Ph.D. / M.S. (if you list degrees in header) — ORCID: [id] | Research site: [url]  
Email: […]  |  Address (optional): […]  

## Research / professional summary (2–3 lines for industry-transition; 0–1 line for some pure-academic)  
- [1–2 sentence *thread* of your program of work, not a bio adjective pile]  

## Appointments  
- [Year–Year, Title, Department, University, [City, ST]]  

## Education  
- **Ph.D., [Field],** [Univ, Year]  — *Thesis: [title]. Advisor: [Name]  
- **M.S. / B.S. (if you keep):** […]  

## Publications (*reverse chronological; be field-typical* — bold your name)  
- **Refereed journal articles**  
  1. [FirstAuthor†, You*, … (Year). Title, *Journal*, vol(issue), pages, DOI.]  
  2. […]  
- **Refereed conference (only if in-field treated as archivable — state norm in cover letter, not in CV**  
  1. […]  
- **Preprints (clearly separate; update or remove post-publication**  
  1. [arXiv / bioRxiv + DOI]  

## Funded research (as PI/Co-PI)  
- **[Role], [Agency, grant #],** *[Title, role %],* [amount total & your share], [dates]  

## Invited talks & select presentations (tighten for senior)  
- **[Year, Title],** *Venue / host*, [City]  

## Teaching  
- **[Univ, Course code – Title, role],** [term years]  

## Service (editorial, review, program committees — last 3 years heavy; older compress)  
- **Ad hoc reviewer for:** [list journals; or say “15+ ad hoc reviews, available on request”]  

## Professional memberships & cert. (sparse)  

## Skills (only if *not* implied by publications)  
- **Languages, methods, software you could teach a grad student**  `,
  },
  {
    id: "academic-cv-industry-transition",
    name: "Academic CV: Academic / industry-hybrid CV (projects + product) ",
    category: "academic",
    description: "Field-adapted CV for: Academic / industry-hybrid CV (projects + product) ",
    tags: ["cv","academic","publications","funding","teaching"],
    content: `# CV — *Academic / industry-hybrid CV (projects + product)  (track)  scholar*  

[Name, Ph.D. / M.S. (if you list degrees in header) — ORCID: [id] | Research site: [url]  
Email: […]  |  Address (optional): […]  

## Research / professional summary (2–3 lines for industry-transition; 0–1 line for some pure-academic)  
- [1–2 sentence *thread* of your program of work, not a bio adjective pile]  

## Appointments  
- [Year–Year, Title, Department, University, [City, ST]]  

## Education  
- **Ph.D., [Field],** [Univ, Year]  — *Thesis: [title]. Advisor: [Name]  
- **M.S. / B.S. (if you keep):** […]  

## Publications (*reverse chronological; be field-typical* — bold your name)  
- **Refereed journal articles**  
  1. [FirstAuthor†, You*, … (Year). Title, *Journal*, vol(issue), pages, DOI.]  
  2. […]  
- **Refereed conference (only if in-field treated as archivable — state norm in cover letter, not in CV**  
  1. […]  
- **Preprints (clearly separate; update or remove post-publication**  
  1. [arXiv / bioRxiv + DOI]  

## Funded research (as PI/Co-PI)  
- **[Role], [Agency, grant #],** *[Title, role %],* [amount total & your share], [dates]  

## Invited talks & select presentations (tighten for senior)  
- **[Year, Title],** *Venue / host*, [City]  

## Teaching  
- **[Univ, Course code – Title, role],** [term years]  

## Service (editorial, review, program committees — last 3 years heavy; older compress)  
- **Ad hoc reviewer for:** [list journals; or say “15+ ad hoc reviews, available on request”]  

## Professional memberships & cert. (sparse)  

## Skills (only if *not* implied by publications)  
- **Languages, methods, software you could teach a grad student**  `,
  },
  {
    id: "academic-conference-paper-submission",
    name: "Conference: paper submission",
    category: "academic",
    description: "Venue deliverable checklist: Conference: paper submission",
    tags: ["conference","submission","peer-review","venue","deadline"],
    content: `# Conference: paper submission (role)  — *Working title*  

- **Target venue & track:** [name, deadline, page limit, Anonym. rules, supplement policy]  
- **One-line claim you want reviewers to *quote* in acceptance:** […]  

## Manuscript for submission  
- **Abstract, keywords, main body with IM/RAD, results with uncertainty, related work, limitation paragraph**  
- **Citations:** [use consistent style, no orphan refs]  
- **Anonymity checklist:** [redact all self-identifying; cite own prior generically]  
- **Code / data (if double-blind):** [anonymized repo, DOI, or *available upon acceptance*]  `,
  },
  {
    id: "academic-conference-poster",
    name: "Conference: poster",
    category: "academic",
    description: "Venue deliverable checklist: Conference: poster",
    tags: ["conference","submission","peer-review","venue","deadline"],
    content: `# Conference: poster (role)  — *Working title*  

- **Target venue & track:** [name, deadline, page limit, Anonym. rules, supplement policy]  
- **One-line claim you want reviewers to *quote* in acceptance:** […]  

## Poster layout (36×48 in typical; read at 4 ft)  
- **Top banner:** *Title* + *Authors* + *affil + logo if allowed*  
- **L→R, T→B reading order, no wall of text, one primary figure**  
| # | panel | 1-sentence take-away |  
| --- | --- | --- |  
| 1 | Intro / gap | […]  

- **Font sizes:** *Title ≥~85 pt*; *body ~24+ pt*  
- **Handout QR / 1 min pitch script on card**  `,
  },
  {
    id: "academic-conference-presentation-slides",
    name: "Conference: presentation slides outline",
    category: "academic",
    description: "Venue deliverable checklist: Conference: presentation slides outline",
    tags: ["conference","submission","peer-review","venue","deadline"],
    content: `# Conference: presentation slides outline (role)  — *Working title*  

- **Target venue & track:** [name, deadline, page limit, Anonym. rules, supplement policy]  
- **One-line claim you want reviewers to *quote* in acceptance:** […]  

## 15–20 minute talk deck outline  
1) Title, name, 1-sentence result 2) problem 3) related work 1 slide 4) method 1–2 5) results 2–3 6) ablation/robustness 7) limit + future 8) thanks + backup  

## One slide: contributions as bullets reviewers will agree with  `,
  },
  {
    id: "academic-conference-workshop",
    name: "Conference: workshop proposal",
    category: "academic",
    description: "Venue deliverable checklist: Conference: workshop proposal",
    tags: ["conference","submission","peer-review","venue","deadline"],
    content: `# Conference: workshop proposal (role)  — *Working title*  

- **Target venue & track:** [name, deadline, page limit, Anonym. rules, supplement policy]  
- **One-line claim you want reviewers to *quote* in acceptance:** […]  

## Workshop proposal: goals & audience  
- **Intended level & prerequisite skills**  
- **Session flow (e.g. 3×(15 min + 5 Q) + 30 hands-on) **  
- **What attendees leave with: artifact, checklist, code cell**  
- **Materials you will pre-share: slides, colab, license**  `,
  },
  {
    id: "academic-conference-panel",
    name: "Conference: panel proposal",
    category: "academic",
    description: "Venue deliverable checklist: Conference: panel proposal",
    tags: ["conference","submission","peer-review","venue","deadline"],
    content: `# Conference: panel proposal (role)  — *Working title*  

- **Target venue & track:** [name, deadline, page limit, Anonym. rules, supplement policy]  
- **One-line claim you want reviewers to *quote* in acceptance:** […]  

## Panel proposal  
- **Panel thesis (1 sentence) & why now**  
- **3–4 panelist roles: tension / complement, not 4 of the same**  
- **3 audience questions to seed; moderation plan**  `,
  },
  {
    id: "academic-assignment-problem-set",
    name: "Assignment: Problem set",
    category: "academic",
    description: "Instructor brief for: Problem set",
    tags: ["assignment","course","rubric","integrity","deadline"],
    content: `# Problem set (assignment)  — *Problem set (assignment)  brief*  

| Field | Value |  
| --- | --- |  
| **Course** | [code / title] |  
| **Instructor** | [name, email, office hours] |  
| **Worth** | [points / %] |  
| **Due (local time)** | [date time + submission portal] |  

## Learning objectives this assignment assesses  
- [LO1, verb + object]  
- [LO2]  

## Task description  
[Clear deliverable, scope, and successful vs unsuccessful examples of scope — not a novel]  

## Required format  
- **Length (words/pages/equiv lines of code) **  
- **Citations and style: ** [APA/MLA/none, min # sources, primary vs web]  
- **File naming: ** \`[netid]_[asgn_code].pdf\`  
- **Code / data use policy: ** [allowed libs; GenAI rules specific to the task]  

## Rubric (summary; full rubric linked)  
| Criterion | Excellent | Meets | Needs work |  
| --- | --- | --- | --- |  
[…]  

## Where to get help  
- [TA, tutoring center, discussion policy]  `,
  },
  {
    id: "academic-assignment-essay-prompt",
    name: "Assignment: Take-home essay",
    category: "academic",
    description: "Instructor brief for: Take-home essay",
    tags: ["assignment","course","rubric","integrity","deadline"],
    content: `# Take-home essay (assignment)  — *Take-home essay (assignment)  brief*  

| Field | Value |  
| --- | --- |  
| **Course** | [code / title] |  
| **Instructor** | [name, email, office hours] |  
| **Worth** | [points / %] |  
| **Due (local time)** | [date time + submission portal] |  

## Learning objectives this assignment assesses  
- [LO1, verb + object]  
- [LO2]  

## Task description  
[Clear deliverable, scope, and successful vs unsuccessful examples of scope — not a novel]  

## Required format  
- **Length (words/pages/equiv lines of code) **  
- **Citations and style: ** [APA/MLA/none, min # sources, primary vs web]  
- **File naming: ** \`[netid]_[asgn_code].pdf\`  
- **Code / data use policy: ** [allowed libs; GenAI rules specific to the task]  

## Rubric (summary; full rubric linked)  
| Criterion | Excellent | Meets | Needs work |  
| --- | --- | --- | --- |  
[…]  

## Where to get help  
- [TA, tutoring center, discussion policy]  `,
  },
  {
    id: "academic-assignment-group-project",
    name: "Assignment: Group project brief",
    category: "academic",
    description: "Instructor brief for: Group project brief",
    tags: ["assignment","course","rubric","integrity","deadline"],
    content: `# Group project brief (assignment)  — *Group project brief (assignment)  brief*  

| Field | Value |  
| --- | --- |  
| **Course** | [code / title] |  
| **Instructor** | [name, email, office hours] |  
| **Worth** | [points / %] |  
| **Due (local time)** | [date time + submission portal] |  

## Learning objectives this assignment assesses  
- [LO1, verb + object]  
- [LO2]  

## Task description  
[Clear deliverable, scope, and successful vs unsuccessful examples of scope — not a novel]  

## Required format  
- **Length (words/pages/equiv lines of code) **  
- **Citations and style: ** [APA/MLA/none, min # sources, primary vs web]  
- **File naming: ** \`[netid]_[asgn_code].pdf\`  
- **Code / data use policy: ** [allowed libs; GenAI rules specific to the task]  

## Rubric (summary; full rubric linked)  
| Criterion | Excellent | Meets | Needs work |  
| --- | --- | --- | --- |  
[…]  

## Where to get help  
- [TA, tutoring center, discussion policy]  `,
  },
  {
    id: "academic-assignment-take-home-exam",
    name: "Assignment: Take-home exam",
    category: "academic",
    description: "Instructor brief for: Take-home exam",
    tags: ["assignment","course","rubric","integrity","deadline"],
    content: `# Take-home exam (assignment)  — *Take-home exam (assignment)  brief*  

| Field | Value |  
| --- | --- |  
| **Course** | [code / title] |  
| **Instructor** | [name, email, office hours] |  
| **Worth** | [points / %] |  
| **Due (local time)** | [date time + submission portal] |  

## Learning objectives this assignment assesses  
- [LO1, verb + object]  
- [LO2]  

## Task description  
[Clear deliverable, scope, and successful vs unsuccessful examples of scope — not a novel]  

## Required format  
- **Length (words/pages/equiv lines of code) **  
- **Citations and style: ** [APA/MLA/none, min # sources, primary vs web]  
- **File naming: ** \`[netid]_[asgn_code].pdf\`  
- **Code / data use policy: ** [allowed libs; GenAI rules specific to the task]  

## Rubric (summary; full rubric linked)  
| Criterion | Excellent | Meets | Needs work |  
| --- | --- | --- | --- |  
[…]  

## Where to get help  
- [TA, tutoring center, discussion policy]  `,
  },
  {
    id: "academic-assignment-case-study",
    name: "Assignment: Case study analysis",
    category: "academic",
    description: "Instructor brief for: Case study analysis",
    tags: ["assignment","course","rubric","integrity","deadline"],
    content: `# Case study analysis (assignment)  — *Case study analysis (assignment)  brief*  

| Field | Value |  
| --- | --- |  
| **Course** | [code / title] |  
| **Instructor** | [name, email, office hours] |  
| **Worth** | [points / %] |  
| **Due (local time)** | [date time + submission portal] |  

## Learning objectives this assignment assesses  
- [LO1, verb + object]  
- [LO2]  

## Task description  
[Clear deliverable, scope, and successful vs unsuccessful examples of scope — not a novel]  

## Required format  
- **Length (words/pages/equiv lines of code) **  
- **Citations and style: ** [APA/MLA/none, min # sources, primary vs web]  
- **File naming: ** \`[netid]_[asgn_code].pdf\`  
- **Code / data use policy: ** [allowed libs; GenAI rules specific to the task]  

## Rubric (summary; full rubric linked)  
| Criterion | Excellent | Meets | Needs work |  
| --- | --- | --- | --- |  
[…]  

## Where to get help  
- [TA, tutoring center, discussion policy]  `,
  },
  {
    id: "academic-rubric-essay",
    name: "Rubric: Essay / writing",
    category: "academic",
    description: "Criteria grid for: Essay / writing",
    tags: ["rubric","grading","criteria","feedback","fairness"],
    content: `# Grading rubric — *Essay / writing (dimension)  — [Course, Assignment]*  

- **Point total:** [N]  
- **Use:** circle level + 1-sentence *why*; students see this table before submit  

| Criterion (weight) | 4 (Exemplary) | 3 (Proficient) | 2 (Developing) | 1 (Needs revision) | 0 (Missing/off scope)  
| --- | --- | --- | --- | --- | --- |  
| [Dimension A]  |  |  |  |  |  |  
| [Dimension B]  |  |  |  |  |  |  

## Dimension-specific indicators (tighten the cells above)  
- **Essay / writing (dimension)  — *what I look for*:**  
  - 4: [Observable behavior, not "good" adjectives]  
  3: […] 2: […] 1: […]  

## General policies applied after rubric  
- **Late: ** per syllabus  
- **Academic integrity: **  `,
  },
  {
    id: "academic-rubric-presentation",
    name: "Rubric: Oral presentation",
    category: "academic",
    description: "Criteria grid for: Oral presentation",
    tags: ["rubric","grading","criteria","feedback","fairness"],
    content: `# Grading rubric — *Oral presentation (dimension)  — [Course, Assignment]*  

- **Point total:** [N]  
- **Use:** circle level + 1-sentence *why*; students see this table before submit  

| Criterion (weight) | 4 (Exemplary) | 3 (Proficient) | 2 (Developing) | 1 (Needs revision) | 0 (Missing/off scope)  
| --- | --- | --- | --- | --- | --- |  
| [Dimension A]  |  |  |  |  |  |  
| [Dimension B]  |  |  |  |  |  |  

## Dimension-specific indicators (tighten the cells above)  
- **Oral presentation (dimension)  — *what I look for*:**  
  - 4: [Observable behavior, not "good" adjectives]  
  3: […] 2: […] 1: […]  

## General policies applied after rubric  
- **Late: ** per syllabus  
- **Academic integrity: **  `,
  },
  {
    id: "academic-rubric-project",
    name: "Rubric: Project deliverable",
    category: "academic",
    description: "Criteria grid for: Project deliverable",
    tags: ["rubric","grading","criteria","feedback","fairness"],
    content: `# Grading rubric — *Project deliverable (dimension)  — [Course, Assignment]*  

- **Point total:** [N]  
- **Use:** circle level + 1-sentence *why*; students see this table before submit  

| Criterion (weight) | 4 (Exemplary) | 3 (Proficient) | 2 (Developing) | 1 (Needs revision) | 0 (Missing/off scope)  
| --- | --- | --- | --- | --- | --- |  
| [Dimension A]  |  |  |  |  |  |  
| [Dimension B]  |  |  |  |  |  |  

## Dimension-specific indicators (tighten the cells above)  
- **Project deliverable (dimension)  — *what I look for*:**  
  - 4: [Observable behavior, not "good" adjectives]  
  3: […] 2: […] 1: […]  

## General policies applied after rubric  
- **Late: ** per syllabus  
- **Academic integrity: **  `,
  },
  {
    id: "academic-rubric-participation",
    name: "Rubric: Class participation / discussion",
    category: "academic",
    description: "Criteria grid for: Class participation / discussion",
    tags: ["rubric","grading","criteria","feedback","fairness"],
    content: `# Grading rubric — *Class participation / discussion (dimension)  — [Course, Assignment]*  

- **Point total:** [N]  
- **Use:** circle level + 1-sentence *why*; students see this table before submit  

| Criterion (weight) | 4 (Exemplary) | 3 (Proficient) | 2 (Developing) | 1 (Needs revision) | 0 (Missing/off scope)  
| --- | --- | --- | --- | --- | --- |  
| [Dimension A]  |  |  |  |  |  |  
| [Dimension B]  |  |  |  |  |  |  

## Dimension-specific indicators (tighten the cells above)  
- **Class participation / discussion (dimension)  — *what I look for*:**  
  - 4: [Observable behavior, not "good" adjectives]  
  3: […] 2: […] 1: […]  

## General policies applied after rubric  
- **Late: ** per syllabus  
- **Academic integrity: **  `,
  },
  {
    id: "academic-rubric-peer-review",
    name: "Rubric: Peer review of drafts / code",
    category: "academic",
    description: "Criteria grid for: Peer review of drafts / code",
    tags: ["rubric","grading","criteria","feedback","fairness"],
    content: `# Grading rubric — *Peer review of drafts / code (dimension)  — [Course, Assignment]*  

- **Point total:** [N]  
- **Use:** circle level + 1-sentence *why*; students see this table before submit  

| Criterion (weight) | 4 (Exemplary) | 3 (Proficient) | 2 (Developing) | 1 (Needs revision) | 0 (Missing/off scope)  
| --- | --- | --- | --- | --- | --- |  
| [Dimension A]  |  |  |  |  |  |  
| [Dimension B]  |  |  |  |  |  |  

## Dimension-specific indicators (tighten the cells above)  
- **Peer review of drafts / code (dimension)  — *what I look for*:**  
  - 4: [Observable behavior, not "good" adjectives]  
  3: […] 2: […] 1: […]  

## General policies applied after rubric  
- **Late: ** per syllabus  
- **Academic integrity: **  `,
  },
  {
    id: "academic-study-guide-exam-prep",
    name: "Study guide: Exam prep (mixed topics) ",
    category: "academic",
    description: "Self-study system for: Exam prep (mixed topics) ",
    tags: ["study","exam","retrieval","practice","summary"],
    content: `# Study guide — *Exam prep (mixed topics)  (mode)  — [Course, Exam, Date]*  

- **What is *in* scope (topics list from instructor):** [bulleted]  
- **What is *out* or low emphasis:** [bulleted]  
- **How long to plan:** [e.g. 2 hr reading + 2 hr problems + 1 hr self-test]  

## 1) Mental model (1 page max)  
[A diagram: boxes + arrows, or 5 bullet concept stack from base → advanced]  

## 2) Vocabulary & notation (self-test: cover right column)  
| Term / symbol | Definition / identity |  
| --- | --- |  
  |  |  |  

## 3) Key results / algorithms / cases  
- **Result 1 (when it applies, when it fails):** […]  
- **Result 2:** […]  

## 4) Worked & parallel practice  
- **Solved (full detail) ** [problem ID or paste]  
- **You try (no peek) ** *Answer at bottom:* […]  

## 5) Error catalog (your past mistakes)  
1) [Type of error, fix pattern]  `,
  },
  {
    id: "academic-study-guide-chapter-summary",
    name: "Study guide: Chapter / unit summary (textbook-driven) ",
    category: "academic",
    description: "Self-study system for: Chapter / unit summary (textbook-driven) ",
    tags: ["study","exam","retrieval","practice","summary"],
    content: `# Study guide — *Chapter / unit summary (textbook-driven)  (mode)  — [Course, Exam, Date]*  

- **What is *in* scope (topics list from instructor):** [bulleted]  
- **What is *out* or low emphasis:** [bulleted]  
- **How long to plan:** [e.g. 2 hr reading + 2 hr problems + 1 hr self-test]  

## 1) Mental model (1 page max)  
[A diagram: boxes + arrows, or 5 bullet concept stack from base → advanced]  

## 2) Vocabulary & notation (self-test: cover right column)  
| Term / symbol | Definition / identity |  
| --- | --- |  
  |  |  |  

## 3) Key results / algorithms / cases  
- **Result 1 (when it applies, when it fails):** […]  
- **Result 2:** […]  

## 4) Worked & parallel practice  
- **Solved (full detail) ** [problem ID or paste]  
- **You try (no peek) ** *Answer at bottom:* […]  

## 5) Error catalog (your past mistakes)  
1) [Type of error, fix pattern]  `,
  },
  {
    id: "academic-study-guide-concept-map",
    name: "Study guide: Concept map (nodes + relations) ",
    category: "academic",
    description: "Self-study system for: Concept map (nodes + relations) ",
    tags: ["study","exam","retrieval","practice","summary"],
    content: `# Study guide — *Concept map (nodes + relations)  (mode)  — [Course, Exam, Date]*  

- **What is *in* scope (topics list from instructor):** [bulleted]  
- **What is *out* or low emphasis:** [bulleted]  
- **How long to plan:** [e.g. 2 hr reading + 2 hr problems + 1 hr self-test]  

## 1) Mental model (1 page max)  
[A diagram: boxes + arrows, or 5 bullet concept stack from base → advanced]  

## 2) Vocabulary & notation (self-test: cover right column)  
| Term / symbol | Definition / identity |  
| --- | --- |  
  |  |  |  

## 3) Key results / algorithms / cases  
- **Result 1 (when it applies, when it fails):** […]  
- **Result 2:** […]  

## 4) Worked & parallel practice  
- **Solved (full detail) ** [problem ID or paste]  
- **You try (no peek) ** *Answer at bottom:* […]  

## 5) Error catalog (your past mistakes)  
1) [Type of error, fix pattern]  `,
  },
  {
    id: "academic-study-guide-flashcard-set",
    name: "Study guide: Flashcard / cloze set",
    category: "academic",
    description: "Self-study system for: Flashcard / cloze set",
    tags: ["study","exam","retrieval","practice","summary"],
    content: `# Study guide — *Flashcard / cloze set (mode)  — [Course, Exam, Date]*  

- **What is *in* scope (topics list from instructor):** [bulleted]  
- **What is *out* or low emphasis:** [bulleted]  
- **How long to plan:** [e.g. 2 hr reading + 2 hr problems + 1 hr self-test]  

## 1) Mental model (1 page max)  
[A diagram: boxes + arrows, or 5 bullet concept stack from base → advanced]  

## 2) Vocabulary & notation (self-test: cover right column)  
| Term / symbol | Definition / identity |  
| --- | --- |  
  |  |  |  

## 3) Key results / algorithms / cases  
- **Result 1 (when it applies, when it fails):** […]  
- **Result 2:** […]  

## 4) Worked & parallel practice  
- **Solved (full detail) ** [problem ID or paste]  
- **You try (no peek) ** *Answer at bottom:* […]  

## 5) Error catalog (your past mistakes)  
1) [Type of error, fix pattern]  `,
  },
  {
    id: "academic-study-guide-practice-problems",
    name: "Study guide: Problem bank / self-test set",
    category: "academic",
    description: "Self-study system for: Problem bank / self-test set",
    tags: ["study","exam","retrieval","practice","summary"],
    content: `# Study guide — *Problem bank / self-test set (mode)  — [Course, Exam, Date]*  

- **What is *in* scope (topics list from instructor):** [bulleted]  
- **What is *out* or low emphasis:** [bulleted]  
- **How long to plan:** [e.g. 2 hr reading + 2 hr problems + 1 hr self-test]  

## 1) Mental model (1 page max)  
[A diagram: boxes + arrows, or 5 bullet concept stack from base → advanced]  

## 2) Vocabulary & notation (self-test: cover right column)  
| Term / symbol | Definition / identity |  
| --- | --- |  
  |  |  |  

## 3) Key results / algorithms / cases  
- **Result 1 (when it applies, when it fails):** […]  
- **Result 2:** […]  

## 4) Worked & parallel practice  
- **Solved (full detail) ** [problem ID or paste]  
- **You try (no peek) ** *Answer at bottom:* […]  

## 5) Error catalog (your past mistakes)  
1) [Type of error, fix pattern]  `,
  },
  {
    id: "academic-letter-recommendation-request",
    name: "Academic / professional letter: Recommendation request to faculty (letter of reference) ",
    category: "academic",
    description: "Template for: Recommendation request to faculty (letter of reference) ",
    tags: ["letter","email","professional","etiquette","academic"],
    content: `# Academic letter — Recommendation request to faculty (letter of reference)  — [Draft email / letter]  

**To:** [Name, Title, email]  
**From:** [Your name, title, org, email, phone]  
**Subject line:** [≤60 chars, clear ask or reply context]  

Dear [Title Lastname],  

[P1: purpose in 1–2 sentences, no flattery]  

I am applying to [program / job] and am writing to ask if you would be willing to write a strong letter of recommendation on my behalf, due by [date].  
- **Context you might emphasize:** [1–2 bullets, attach CV & statement if policy allows]  
- **Waive FERPA / view rights: ** [Y/N per your institution; follow policy]  

Thank you for your [time/consideration/…].  

Sincerely,  
[Name]  `,
  },
  {
    id: "academic-letter-acceptance-response",
    name: "Academic / professional letter: Program / job offer acceptance response",
    category: "academic",
    description: "Template for: Program / job offer acceptance response",
    tags: ["letter","email","professional","etiquette","academic"],
    content: `# Academic letter — Program / job offer acceptance response — [Draft email / letter]  

**To:** [Name, Title, email]  
**From:** [Your name, title, org, email, phone]  
**Subject line:** [≤60 chars, clear ask or reply context]  

Dear [Title Lastname],  

[P1: purpose in 1–2 sentences, no flattery]  

I am writing to *accept* the offer of [admission/position] for [start term] as outlined in your letter of [date].  
- **I understand the terms: [stipend, TAship, any conditions]**  
- **Next step from my side: [I-20 / background check / …]**  

Thank you for your [time/consideration/…].  

Sincerely,  
[Name]  `,
  },
  {
    id: "academic-letter-journal-submission",
    name: "Academic / professional letter: Journal submission cover letter to editor",
    category: "academic",
    description: "Template for: Journal submission cover letter to editor",
    tags: ["letter","email","professional","etiquette","academic"],
    content: `# Academic letter — Journal submission cover letter to editor — [Draft email / letter]  

**To:** [Name, Title, email]  
**From:** [Your name, title, org, email, phone]  
**Subject line:** [≤60 chars, clear ask or reply context]  

Dear [Title Lastname],  

[P1: purpose in 1–2 sentences, no flattery]  

I am pleased to submit our manuscript, [short title] ([N] words, [N] figs) for your consideration as a [type of article] in *[Journal name]*.  
- **We confirm: ** original work, not under review elsewhere, all authors consented, IRB/COI as applicable]  
- **Novelty in one line for the editor: ** […]  
- **Suggested / opposed reviewers: ** *per journal policy*  

Thank you for your [time/consideration/…].  

Sincerely,  
[Name]  `,
  },
  {
    id: "academic-letter-collaboration-proposal",
    name: "Academic / professional letter: Research collaboration proposal (peer PI) ",
    category: "academic",
    description: "Template for: Research collaboration proposal (peer PI) ",
    tags: ["letter","email","professional","etiquette","academic"],
    content: `# Academic letter — Research collaboration proposal (peer PI)  — [Draft email / letter]  

**To:** [Name, Title, email]  
**From:** [Your name, title, org, email, phone]  
**Subject line:** [≤60 chars, clear ask or reply context]  

Dear [Title Lastname],  

[P1: purpose in 1–2 sentences, no flattery]  

I am reaching out to explore a collaboration on [shared question], building on your [cited work] and our [1-line method/data strength].  
- **Concrete proposal: ** 6-month pilot with [N1] and [Milestone]  
- **IP / data use / order of authorship principles we propose: [short, link to your policies]**  

Thank you for your [time/consideration/…].  

Sincerely,  
[Name]  `,
  },
  {
    id: "academic-letter-funding-report",
    name: "Academic / professional letter: Grant / sponsor progress or final report (narrative) ",
    category: "academic",
    description: "Template for: Grant / sponsor progress or final report (narrative) ",
    tags: ["letter","email","professional","etiquette","academic"],
    content: `# Academic letter — Grant / sponsor progress or final report (narrative)  — [Draft email / letter]  

**To:** [Name, Title, email]  
**From:** [Your name, title, org, email, phone]  
**Subject line:** [≤60 chars, clear ask or reply context]  

Dear [Title Lastname],  

[P1: purpose in 1–2 sentences, no flattery]  

This is the [annual / final] report for award [id], period [from–to], PI [name].  

| Objective from grant | Outcome this period (quant / qual) | % complete | Next period plan |  

Thank you for your [time/consideration/…].  

Sincerely,  
[Name]  `,
  },
  {
    id: "academic-notes-experiment-log",
    name: "Experiment or trial log",
    category: "academic",
    description: "Capture template for: repeated measures / bench work",
    tags: ["fieldwork","data","repro","irb","notation"],
    content: `# Experiment or trial log / repeated measures / bench work — [Project / site / session ID]  

- **PI / field lead:** [name]  
- **Date / time (local) / time zone**  
- **Location / equipment ID / SOP ref**  
- **Repro: ** raw data file naming convention + checksum if applicable  

## Pre-run checks  
- [ ] Calibrations / reagents / randomization seed  

## Run record (chronological)  
| Time | Step / code | Readout & unit | Anomaly? |  
| --- | --- | --- | --- |  

## Deviations from protocol  
1) […] *Impact:* […]  

## Post-run: storage, backup, who has keys  `,
  },
  {
    id: "academic-notes-field-notes",
    name: "Field notes (site, observation, memos) ",
    category: "academic",
    description: "Capture template for: geology, ethno, or ecology",
    tags: ["fieldwork","data","repro","irb","notation"],
    content: `# Field notes (site, observation, memos)  / geology, ethno, or ecology — [Project / site / session ID]  

- **PI / field lead:** [name]  
- **Date / time (local) / time zone**  
- **Location / equipment ID / SOP ref**  
- **Repro: ** raw data file naming convention + checksum if applicable  

## Pre-run checks  
- [ ] Calibrations / reagents / randomization seed  

## Run record (chronological)  
| Time | Step / code | Readout & unit | Anomaly? |  
| --- | --- | --- | --- |  

## Deviations from protocol  
1) […] *Impact:* […]  

## Post-run: storage, backup, who has keys  `,
  },
  {
    id: "academic-notes-interview-transcript",
    name: "Interview / oral history transcript (structured) ",
    category: "academic",
    description: "Capture template for: IRB, consent, pseudonyms",
    tags: ["fieldwork","data","repro","irb","notation"],
    content: `# Interview / oral history transcript (structured)  / IRB, consent, pseudonyms — [Project / site / session ID]  

- **PI / field lead:** [name]  
- **Date / time (local) / time zone**  
- **Location / equipment ID / SOP ref**  
- **Repro: ** raw data file naming convention + checksum if applicable  

## Consent & context  
- **IRB protocol #, consent on file, recording device ID**  
- **Pseudonym in notes: [ ] Use real name only in key if allowed**  

## Transcript (timestamp every ~1–2 min)  
*(Note: for fully verbatim, use a transcription app; this template = structured notes.)*  

[Interviewer] — [0:00]  
Q: […]  
[Pseudonym] —  
A: […]  

## Open codes (during / after)  
- code: [excerpt]  `,
  },
  {
    id: "academic-notes-observation",
    name: "Observation / coding sheet (ethnography / rater) ",
    category: "academic",
    description: "Capture template for: rubric-based coding",
    tags: ["fieldwork","data","repro","irb","notation"],
    content: `# Observation / coding sheet (ethnography / rater)  / rubric-based coding — [Project / site / session ID]  

- **PI / field lead:** [name]  
- **Date / time (local) / time zone**  
- **Location / equipment ID / SOP ref**  
- **Repro: ** raw data file naming convention + checksum if applicable  

## Instrument / form + scoring key  
- **Rater (blind? Y/N): **  
- **Rows = subjects/segments; Cols = variables**  

| row id | v1 | v2 | notes |  
| --- | --- | --- | --- |  

## Inter-rater reliability (if 2+ raters)  
- **Cohen’s kappa / ICC target: **  `,
  }
];
