import { L } from "./gen-templates-data-tables.mjs";

const shield = (label, sub) => `[![${label}](https://img.shields.io/badge/${sub}?style=flat-square)]`;

export function contentSnippetHeader(v) {
  switch (v) {
    case "formal":
      return L([
        "<!-- Insert at top of `README.md` or print cover -->",
        "",
        "<div align=\"center\">",
        "",
        "# [Organization or project name]",
        "",
        "**[Subtitle — one line, Title Case]**",
        "",
        "---",
        "",
        "[Department / program] · [Internal reference: DOC-##] · [Version: vX.Y] · [Date: YYYY-MM-DD]",
        "",
        "*Prepared for: [Executive sponsor / client]* · *Classification: [Internal - Confidential / …]*",
        "",
        "</div>",
        "",
        "[Optional: logo URL or brand lockup; follow brand guidelines. Remove if external publication.]",
      ]);
    case "casual":
      return L([
        "# [Doc title] · [Product name]",
        "",
        "_Hey [team] — quick context: [1–2 sentences on why this page exists.]_",
        "",
        "- **Status:** [Draft / In review / Shipped] · **Next touchpoint:** [date or meeting] · **DRI:** [name]",
        "- **Link hub:** [Notion/Confluence/…] for **full** background; this file is the **tldr** for newcomers.",
        "",
        "## In this page",
        "- [Point 1] | [Point 2] | [Point 3] — *pick up where we left off in [Slack thread / meeting]*.",
        "",
        "---",
        "",
        "_P.S. [Optional humor or CTA, still professional.]_ |",
      ]);
    case "minimal":
      return L([
        "# [Title]",
        "",
        "[One-line purpose.] · *Owner: [name] · Last updated: [date] (commit [hash] if from repo) · Source of truth: [link]*",
        "",
        "---",
        "",
        "",
      ]);
    case "footer_page_standard":
      return L([
        "<!-- Page footer: paste before closing main content or in theme footer template -->",
        "",
        "---",
        "",
        "© [Year] [Legal entity]. All rights reserved. · [Address line or registered office, if public]",
        "[Privacy policy] · [Terms] · [Contact / security contact]",
        "",
        "Internal: [IT service desk] · [on-call: pager schedule link] — **no** PII in public footers; mask project codenames in external sites.",
        "",
        "",
      ]);
    case "footer_with_links":
      return L([
        "<!-- Page footer with quick links; align with site IA -->",
        "",
        "---",
        "",
        "| [Product] | [Resources] | [Company] | [Legal] |",
        "| --- | --- | --- | --- |",
        "| [Features] [Pricing] [Docs] | [Blog] [Changelog] [Status] | [About] [Careers] [Press] | [Privacy] [Terms] [DPA] |",
        "",
        "Social (optional, external-safe): [LinkedIn] [X] [GitHub] | **Trademark** notice if needed: *“[name] is a [registered] trademark of [holder].*”*",
        "",
        "© [Y] [Entity]. [Locale-specific copyright line if any.]",
        "",
        "",
      ]);
    case "letterhead":
      return L([
        "<!-- For PDF/print: keep margins; embed fonts per brand policy -->",
        "",
        "<div class=\"letterhead\">",
        "",
        "[Logo · left or centered per brand] · **[Legal name]** · [tagline, optional, one line]",
        "",
        "[Street] · [City, ST ZIP] · [phone] · [www.example.com] · [email: general or department]",
        "",
        "</div>",
        "",
        "[Date, full written out or ISO per locale] · *Reference: [REF-#]*",
        "",
        "**To:** [Addressee name, title, org]  ",
        "**Re:** [Subject line, concise]",
        "",
        "Dear [Name],",
        "",
        "[Body starts here. Keep margin [n] in / [n] mm per template.]",
        "",
        "",
      ]);
    case "memo_header":
      return L([
        "<!-- Inter-office / engineering memo; adjust distribution list to policy -->",
        "",
        "| **MEMORANDUM** | | |",
        "| --- | --- | --- |",
        "| **To:** | [distribution list, roles, or *All engineering*] | |",
        "| **From:** | [name, title] | |",
        "| **Date:** | [YYYY-MM-DD] | |",
        "| **Subject:** | [Imperative subject, ≤1 line] | |",
        "| **CC:** | [optional, names] | |",
        "",
        "**Classification / handling:** [Internal / Attorney-client / …] — **retention** per [record schedule id]",
        "",
        "**Summary (2–3 lines):** [what decision or FYI, why now, and what you need from readers.]",
        "",
        "---",
        "",
        "",
      ]);
    default:
      throw new Error(`Unknown snippet header: ${v}`);
  }
}

export function contentSnippetCallout(v) {
  const m = {
    note: "NOTE",
    tip: "TIP",
    warning: "WARNING",
    danger: "DANGER",
    info: "INFO",
    success: "SUCCESS",
    important: "IMPORTANT",
    caution: "CAUTION",
    example: "EXAMPLE",
    quote: "QUOTE",
    abstract: "ABSTRACT",
    bug: "BUG",
    question: "QUESTION",
    todo: "TODO",
    deprecated: "DEPRECATED",
  };
  if (!m[v]) throw new Error(`Unknown callout: ${v}`);
  return L([
    `> [!${m[v]}]`,
    `> [One-line lead for the ${m[v].toLowerCase()} block, audience-specific.]`,
    ">",
    "> - **Context:** [when this applies, or *skip if obvious*]",
    "> - **Detail:** [2–3 sentences or a mini-table if comparing options.]",
    ">",
    "> | Option | Pro | Con |",
    "> | --- | --- | --- |",
    "> | A | […] | […] |",
    ">",
    "> **Action:** [what reader should do next, or *none* if FYI only.]",
    ">",
    "> *References: [doc §], [ADR-#], [runbook] — PII/secret-free in public repos.* |",
  ]);
}

export function contentSnippetBadge(v) {
  const t = {
    "build-status": { n: "Build", s: "build-passing-brightgreen" },
    coverage: { n: "Coverage", s: "coverage-80%25-green" },
    license: { n: "License", s: "License-MIT-blue" },
    version: { n: "Version", s: "version-1.0.0-blue" },
    downloads: { n: "Downloads", s: "downloads-1.2M-green" },
    npm: { n: "npm", s: "npm-v1.0.0-blue" },
    pypi: { n: "PyPI", s: "pypi-v0.0.0-blue" },
    docker: { n: "Docker", s: "docker-pulls-10k-blue" },
    contributors: { n: "Contributors", s: "contributors-25-orange" },
    "last-commit": { n: "Last commit", s: "last%20commit-today-brightgreen" },
    "code-size": { n: "Code size", s: "code%20size-1.2MB-blue" },
    dependencies: { n: "Dependencies", s: "dependencies-up%20to%20date-brightgreen" },
    "platform-support": { n: "Platform", s: "platform-win%7Clin%7Cmac-lightgrey" },
    stars: { n: "Stars", s: "stars-1.2k-blue" },
    forks: { n: "Forks", s: "forks-200-blue" },
  };
  const x = t[v];
  if (!x) throw new Error(`Unknown badge: ${v}`);
  return L([
    "<!-- Shields.io style; update URLs to your org’s live endpoints. Place badges in one row under the title. -->",
    "",
    `${shield(x.n, x.s)}(https://example.com/${v})  `,
    "",
    "Badges in this project typically link to: CI dashboard, package registry, license file, and release page.",
    "",
    "| Badge | Resolves to | When to show |",
    "| --- | --- | --- |",
    "| Build | [CI pipeline URL] | On every public repo with CI |",
    "| Coverage | [Codecov/cover URL] | When tests exist and you publish % |",
    "",
    "Accessibility: do **not** convey status by color **alone**; repeat status in the adjacent `alt` and link text for screen-reader users.",
    "",
    "*Replace `example.com` with real `openapi.example.com/health` or your CI’s badge endpoint where applicable.* |",
  ]);
}

export function contentSnippetLicense(v) {
  switch (v) {
    case "mit": {
      return L([
        "# The MIT License (MIT)",
        "",
        "Copyright (c) [YEAR] [COPYRIGHT HOLDERS]",
        "",
        "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:",
        "",
        "The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.",
        "",
        "THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.",
        "",
        "---",
        "",
        "Repository placement: add this as `LICENSE` in the repo root. Adjust `[YEAR]` and `[HOLDERS]` in the first line of the license text above.",
        "",
        "",
      ]);
    }
    case "apache2":
      return L([
        "# Apache License, Version 2.0 (summary block for `NOTICE`)",
        "",
        "_Full text: https://www.apache.org/licenses/LICENSE-2.0 — replace bracketed project lines below._",
        "",
        "Copyright [yyyy] [name of copyright owner]",
        "",
        "Licensed under the Apache License, Version 2.0 (the “License”); you may not use this file except in compliance with the License. You may obtain a copy of the License at",
        "",
        "    http://www.apache.org/licenses/LICENSE-2.0",
        "",
        "Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an “AS IS” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.",
        "",
        "## NOTICE file template (append to `NOTICE`)",
        "",
        "[Project name]  ",
        "Copyright [yyyy] [holder]  ",
        "This product includes software developed at [The Apache Software Foundation / …].  ",
        "",
        "[List third-party notices per dependency SPDX ids in your SBOM export.]  ",
        "",
        "",
      ]);
    case "gpl3": {
      return L([
        "# GNU General Public License v3 — excerpt for README",
        "",
        "This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.",
        "",
        "This program is distributed in the hope that it will be useful, but **without any warranty**; without even the implied warranty of **merchantability** or **fitness for a particular purpose**. See the GNU General Public License for more details: https://www.gnu.org/licenses/gpl-3.0.html",
        "",
        "You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.",
        "",
        "## If you link / combine: consult counsel",
        "GPLv3’s **copyleft** may affect how you distribute combined works. [Your legal team] should review static vs dynamic linking and SaaS use cases. **This block is not legal advice.** |",
        "",
        "## For source offer (GPL §6): add your physical or network offer here",
        "- **Source offer valid for** [3 years] from distribution; **contact** [email] for source tarball / repo URL |",
        "",
        "",
      ]);
    }
    case "bsd2":
      return L([
        "BSD 2-Clause License (simplified; verify full text for your org)",
        "",
        "Copyright (c) [YEAR], [OWNER]. All rights reserved.",
        "",
        "Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:",
        "",
        "1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.  ",
        "2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.",
        "",
        "THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” […] **(See full 2-clause text in your LICENSE file).**  ",
        "",
        "---  ",
        "",
        "Use in headers of small libraries; pair with a **root `LICENSE` file** and **SPDX: BSD-2-Clause** in `package.json` / `pyproject.toml` if applicable.  ",
        "",
        "",
      ]);
    case "bsd3":
      return L([
        "BSD 3-Clause License (header block; include full text in `LICENSE` file)",
        "",
        "Copyright (c) [YEAR], [OWNER].  ",
        "All rights reserved.  ",
        "",
        "Redistribution and use in source and binary forms, with or without modification, are permitted provided that: (1) source retains copyright & disclaimer; (2) binary **reproduces** them; (3) **neither the name of [OWNER] nor its contributors** may be used to endorse or promote without permission.",
        "",
        "DISCLAIMER OF WARRANTY & LIMITATION OF LIABILITY: **See full 3-clause text.**",
        "",
        "SPDX: `BSD-3-Clause`  ",
        "",
        "## Third-party: ensure NOTICE aggregation if you redistribute bundles  ",
        "- List components with BSD-3 and **include** their **copyright** lines in **one** `THIRD_PARTY_NOTICES` file.  ",
        "- **Link** to **SBOM** JSON in your release assets.  ",
        "",
        "",
      ]);
    case "isc": {
      return L([
        "ISC License",
        "",
        "Copyright (c) [YEAR], [COPYRIGHT HOLDERS]",
        "",
        "Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.",
        "",
        "THE SOFTWARE IS PROVIDED “AS IS” AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.",
        "",
        "— Permissive, common for small **npm** packages. **Pair** with a **root `LICENSE`** and **file-level** **headers** in **entry** files only if your policy **requires** it.  ",
        "",
        "",
      ]);
    }
    case "mpl2":
      return L([
        "Mozilla Public License 2.0 (short notice for a **single** covered file; full MPL in `LICENSE`.)",
        "",
        "This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.",
        "",
        "## If you **modify** MPL’d files: **Exhibit A**-style notice per MPL §3.3 as needed (your counsel).  ",
        "- **Larger** works may **combine** MPL and proprietary under **MPL**’s **file-level** **copyleft**; **separate** **proprietary** files in **other** **directories** as **per** **MPL** **FAQ** **high-level** **(not** **advice** **—** **lawyer**).  ",
        "",
        "## For binaries:  ",
        "- **Offer** **source** as **MPL** **§** **3.2** when **you** **distribute** **binaries** **(details** in **MPL** **text**).  ",
        "",
        "",
      ]);
    case "cc_by":
      return L([
        "Creative Commons Attribution 4.0 International (CC BY 4.0) — **human-readable** **summary** (not a substitute for the **legal** text).",
        "",
        "**You are free to:**  ",
        "- **Share** — copy and redistribute the material in any medium or format  ",
        "- **Adapt** — remix, transform, and build upon the material for any purpose, even **commercially**  ",
        "",
        "Under the following terms:  ",
        "- **Attribution** — You must give **appropriate credit**, provide a **link to the license**, and indicate if **changes** were made.  ",
        "",
        "Full license: https://creativecommons.org/licenses/by/4.0/legalcode  ",
        "",
        "## Suggested **attribution** line for **docs** / **README**:  ",
        "“[Title]” by [Author] is licensed under **CC BY 4.0** · [link to original]  ",
        "",
        "",
      ]);
    case "cc_bysa":
      return L([
        "Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0) — **notice** (not legal advice).  ",
        "",
        "Same as **CC BY**, plus: **If you remix, transform, or build upon the material,** you must **distribute your contributions under the same license** as the original (ShareAlike).  ",
        "",
        "Full text: https://creativecommons.org/licenses/by-sa/4.0/legalcode  ",
        "",
        "## Implications for **code**  ",
        "- **CC** licenses are **rarely** used for **software**; **often** for **content**. **For** code, **prefer** **OSI-approved** licenses. **This** **block** is for **prose, curriculum, and images.**  ",
        "",
        "## Attribution  ",
        "- **TASL**: Title, Author, Source, License — **in** a **caption** or **README** **section**.  ",
        "",
        "",
      ]);
    case "unlicense": {
      return L([
        "The Unlicense  ",
        "",
        "This is free and unencumbered software released into the public domain.  ",
        "",
        "Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.  ",
        "",
        "For more information, please refer to <https://unlicense.org>  ",
        "",
        "— Use **only** when **all** **contributors** **agree**; **and** you’ve **cleared** **non-code** **assets** with **separate** **licenses** if **any** **(fonts,** **data,** **icons).  ",
        "",
        "",
      ]);
    }
    case "wtfpl": {
      return L([
        "        DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE  ",
        "                    Version 2, December 2004  ",
        "",
        " Copyright (C) [YEAR] [name]  ",
        "",
        " Everyone is permitted to copy and distribute verbatim or modified copies of this license document.  ",
        "",
        "            DO WHAT THE FUCK YOU WANT TO.  ",
        "",
        "— **Provocative** **name**; **corporate** **repos** **often** **prefer** **MIT/Apache** **for** **policy** **reasons.** **This** is **a** **real** **license** **text,** not **a** **placeholder**, but **get** **approval** from **OSPO**.  ",
        "",
        "",
      ]);
    }
    case "proprietary": {
      return L([
        "PROPRIETARY — ALL RIGHTS RESERVED  ",
        "",
        "Copyright (c) [YEAR] [ENTITY].  ",
        "Unauthorized copying, **distribution**, **modification,** **or** **use** of this software, **in** **whole** or **in** **part,** is **strictly** **prohibited** **except** **as** **expressly** **permitted** **in** **a** **separate** **written** **agreement** **between** you and [ENTITY].  ",
        "",
        "If you did **not** receive a **signed** **license,** you **may** **not** **possess,** **compile,** **or** **run** **this** **code.**  ",
        "",
        "## Internal distribution  ",
        "- **Nexus/Artifactory** with **per-user** **license** **attestation**; **log** access in **[SIEM]**; **DLP** on **exfil**.  ",
        "- **For** **customers:** **EULA** **in** **contract** **§** [x] supersedes **this** **header** in **any** **conflict** **(counsel** **review**).  ",
        "",
        "",
      ]);
    }
    default:
      throw new Error(`Unknown license snippet: ${v}`);
  }
}

export function contentSnippetToc(v) {
  switch (v) {
    case "autogen":
      return L([
        "<!-- If your SSG/ doc tool auto-builds a TOC, keep this as a one-line note for authors. -->  ",
        "",
        "*(Table of contents is **auto-generated** from headings by [tool] on build. **Do** **not** **hand-edit** the **numbered** list **below** **in** the **source**; **or** set `toc: false` in front matter if the **tool** **supports** it.)*  ",
        "",
        "Preview (local only):  ",
        "- Run `npm run docs:build` (or your equivalent) to **verify** **anchor** **links** **match** **slug** **rules** (GitHub, GitLab, Docusaurus differ).  ",
        "- **H2** and **H3** **depth** is **[2]** in `config` — **bump** if **API** **ref** is **long**.  ",
        "- **a11y:** ensure **landmarks** and **“skip to content”** **still** work **with** a **long** **TOC** nav.  ",
        "",
        "",
      ]);
    case "manual_simple":
      return L([
        "## Table of contents  ",
        "- [Section A — short](#section-a--short)  ",
        "- [Section B — details](#section-b--details)  ",
        "- [Section C — references](#section-c--references)  ",
        "",
        "*(Anchor slugs: **lowercase**, **hyphens**; **re-check** if **titles** **change**.)*  ",
        "",
        "Optional one-liner under each in **some** org styles (keep **tight** for **print**):  ",
        "- **A:** *Setup and prerequisites*  ",
        "- **B:** *Step-by-step*  ",
        "- **C:** *Further reading*  ",
        "",
        "Version control: after **editing** **headings**, run **link** **check** in **CI** to **catch** **404** **anchors** **on** `main`.  ",
        "",
        "",
      ]);
    case "manual_detailed":
      return L([
        "## Table of contents (full)  ",
        "1. [Introduction](#1-introduction)  ",
        "2. [Architecture](#2-architecture)  ",
        "   1. [Subcomponent X](#21-subcomponent-x)  ",
        "   2. [Subcomponent Y](#22-subcomponent-y)  ",
        "3. [API](#3-api)  ",
        "4. [Operations](#4-operations)  ",
        "5. [Security](#5-security)  ",
        "6. [Changelog & roadmap](#6-changelog--roadmap)  ",
        "",
        "> **Numbered** TOCs: **re-number** in **one** pass when **adding** a **new** **H2** **to** **avoid** **drift** with **stale** **numbers** in **PDF** **exports** **(some** **tools** **re-number** **automatically** **in** **print**).  ",
        "",
        "Cross-document: link to **[other-doc.md#anchor]** for **tight** **coupling**; **prefer** **relative** paths in **repos** **(portable** **forks).  ",
        "",
        "",
      ]);
    case "multilevel":
      return L([
        "<!-- Use when deep nesting is unavoidable; consider splitting into multiple files instead. -->  ",
        "",
        "- **Root**  ",
        "  - **Branch A**  ",
        "    - Leaf A1  ",
        "    - Leaf A2  ",
        "  - **Branch B**  ",
        "    - Leaf B1  ",
        "",
        "Markdown: align **indent** with **list** **markers** only as **per** your **linter** (CommonMark, MDX).  ",
        "",
        "If you **exceed** **4** **levels,** add **a** **separate** **“See** also”** for **jumps** **to** **appendices** **to** **reduce** **cognitive** **load** **(Nielsen** **heuristic** on **scannability**).  ",
        "",
        "Screen readers: **use** real **headings** **for** **sections**; **do** **not** **fake** **hierarchy** with **bold** **alone** **(WCAG** **2.4**).  ",
        "",
        "",
      ]);
    case "with_icons": {
      return L([
        "## Contents  ",
        "- :rocket: [Quick start](#quick-start)  ",
        "- :gear: [Configuration](#configuration)  ",
        "- :lock: [Security notes](#security-notes)  ",
        "- :books: [Further reading](#further-reading)  ",
        "",
        "*Emoji/ icons are **decorative** in **many** UIs: repeat **the** **section** **name** in the **link** text **(already** **done** **here)**. **In** some **jurisdictions,** **emoji** in **formal** **docs** is **not** used — **remove** in **`legal/`** **trees.*  ",
        "",
        "Favicon / icon set: align with **Open** **Graph** / **PWA** **manifest** in **[site] ** (see `/public`).  ",
        "",
        "Print CSS: add `@media print { .icon { display: none; } }` if you **export** to **PDF** **(optional).  ",
        "",
        "",
      ]);
    }
    default:
      throw new Error(`Unknown toc snippet: ${v}`);
  }
}

export function contentSnippetNav(v) {
  switch (v) {
    case "breadcrumb":
      return L([
        "<!-- Breadcrumb: keep microdata for SEO; adjust base URL. -->  ",
        "",
        "[Home](/) &rsaquo; [Docs](/docs) &rsaquo; [API](/docs/api) &rsaquo; **This page**  ",
        "",
        "Schema.org `BreadcrumbList` JSON-LD (optional) — inject per **SSG** **plugin** with **abs** **URLs** in **prod**.  ",
        "",
        "Analytics: **fire** **breadcrumb** **depth** as **a** **dimension** in **[GA/Amplitude]** to **see** **content** **findability** **issues** **(exit** on **page** 3+ **in** path).  ",
        "",
        "Mobile: consider **&lt;** back **+** current **title** in **one** **row** if **horizontal** **space** is **tight** **(hamburger** for **siblings**).  ",
        "",
        "",
      ]);
    case "sidebar": {
      return L([
        "<!-- Collapsible left nav: typical for docs sites. -->  ",
        "",
        "- **Getting started**  ",
        "  - [Install](/install)  ",
        "  - [Tutorials](/tutorials)  ",
        "- **Reference**  ",
        "  - [HTTP API](/ref/http)  ",
        "  - [Webhooks](/ref/webhooks)  ",
        "- **Support**  ",
        "  - [Status](https://status.example.com)  ",
        "",
        "Keyboard: `Tab` order **skips** **closed** **subtrees;** `Enter` / `Space` **toggles** **expand** (see **WAI-ARIA** `aria-expanded` on **parent** **buttons**).  ",
        "",
        "State: **persist** open **ids** in **localStorage** **as** `nav.state.v1` (optional) **if** your **SSG** **doesn’t** do **it**.  ",
        "",
        "",
      ]);
    }
    case "top":
      return L([
        "<!-- Top bar: 4-6 top-levels max; rest in 'More' -->  ",
        "",
        "| [Product] | [Solutions] | [Pricing] | [Resources] | [Sign in] |  ",
        "| --- | --- | --- | --- | --- |  ",
        "*(Use real `<nav>` in HTML; this table is a **wire** for writers.)*  ",
        "",
        "Sticky: `position: sticky; top:0;` with **z-index** over **content**; **add** `scroll-padding-top` to **:target` **for** **deep** **links** **(UX** for **#anchors).  ",
        "",
        "i18n: **separate** **URL** per **locale** with **`hreflang` ** **pairs**; **don’t** **concat** in **a** **single** **row** in **this** **wire** **(split** in **app**).  ",
        "",
        "",
      ]);
    case "prev_next": {
      return L([
        "<!-- Prev/next: keep at end of every doc; fill via template. -->  ",
        "",
        "[&larr; Previous: [Config profiles]](./prev.md)  ·  [Next: [Error codes] &rarr;](./next.md)  ",
        "",
        "Metadata: if **a** page is **the** **first** in **a** **set,** **hide** **prev**; **on** last, **suggest** **related** **reading** in **a** **callout** **(next** is **n/a).  ",
        "",
        "Analytics: **log** `doc.prev_next` **clicks** to **tune** **order** in **the** **sidebar** (data-driven **IA**).  ",
        "",
        "PDF export: use **“Continued** **on** **p.** **N”** in **print** **styles** on **splits.  ",
        "",
        "",
      ]);
    }
    case "quick_links": {
      return L([
        "## Quick links  ",
        "- **Run in 5 min:** [Quick start](./quickstart.md)  ",
        "- **Status / incidents:** [status.example.com](https://status.example.com)  ",
        "- **Slack: #**`[channel-name]`  ",
        "- **File a security issue:** [security policy](.github/SECURITY.md)  ",
        "",
        "Intended for **on-call**; **for** **customer-facing** **pages,** use **a** **single** `Contact` CTA.  ",
        "",
        "Rotate: **if** a **link** is **stale,** your **linter** should **open** a **“docs** **rot**” **ticket** **on** `main` (optional **CI**).  ",
        "",
        "",
      ]);
    }
    case "back_to_top":
      return L([
        "<!-- Sticky 'Back to top' button: wire as component in your design system. -->  ",
        "",
        "[&uarr; Back to top](#)  *(anchor `#` to page top, or `document.querySelector` scrollTo)*  ",
        "",
        "A11y: `aria-label='Back to top'` on the **control**; **visible** after **~400px** **scroll** with **reduced** **motion** **respecting** `prefers-reduced-motion: reduce` **(instant** **jump** or **fade**).  ",
        "",
        "Mobile: **place** in **lower** **right** to **not** **collide** with **OS** **gesture** **areas**; **z-index** < **modals** but **> ** **fab** of **competing** app.  ",
        "",
        "Analytics: **low** value **as** a **KPI,** but **if** used **a** lot, **it** may **indicate** **over-long** **pages** (split **the** **doc).  ",
        "",
        "",
      ]);
    default:
      throw new Error(`Unknown nav snippet: ${v}`);
  }
}

export function contentSnippetCard(v) {
  switch (v) {
    case "profile": {
      return L([
        "<div class=\"card\" markdown=\"0\">  ",
        "  <img src=\"[avatar url]\" alt=\"[name]\" width=\"96\" height=\"96\"/>  ",
        "  <h3>[Full name] <small>[Pronouns]</small></h3>  ",
        "  <p class=\"title\">[Title] &middot; [Team] &middot; [Location / TZ]</p>  ",
        "  <p>[1–2 sentence bio; avoid secrets and internal-only project code names in public sites.]</p>  ",
        "  <p><a href=\"mailto:[email]\">Email</a> &middot; <a href=\"[calendar]\">Book time</a></p>  ",
        "</div>  ",
        "",
        "Plain-Markdown alternative (if HTML disallowed in your renderer):  ",
        "",
        "| | |  ",
        "| --- | --- |  ",
        "| ![photo 96x96]([url]) | ** [Name] **  ",
        "",
        "Accessibility: **color** **contrast** on **links**; **no** **decorative** text **in** `alt` on **face** (use `alt=\"Photo of [name]\"` or empty if adjacent **name** is **sufficient** per your **a11y** spec).  ",
        "",
        "",
      ]);
    }
    case "feature": {
      return L([
        "## [Feature name]  ",
        "",
        "![illustration or screenshot]([url] \"[alt text]\")  ",
        "",
        "[2–3 sentences on **problem → outcome → proof**; link to a **demo** or **video** and **a** **metric** if you have **permission** to **publish** it.]  ",
        "",
        "| | |  ",
        "| --- | --- |  ",
        "| **For** | [ICP, segment] |  ",
        "| **Key capability** | [1 line] |  ",
        "",
        "CTA: [Try it / Contact sales] — **always** have **a** **secondary** (docs) in **B2B** to **satisfy** **self-serve** **readers.  ",
        "",
        "",
      ]);
    }
    case "pricing": {
      return L([
        "### [Plan: Starter]  ",
        "- **$[0] / [mo]** · **[n] users** included  ",
        "- **Key limits:** [API calls, storage, …]  ",
        "- **Support:** [email / chat]  ",
        "- **CTA:** [Start trial]  ",
        "",
        "*(Stack **3** such **H3s** in **a** **row** in **HTML** for **grids,** or **use** a **table** in **md** for **a11y** when **comparing** **3+** **plans;** your **design** system **wins** **over** **this** **sketch**.)*  ",
        "",
        "Legal: **price** is **ex-**[tax] **in** [region]; **link** to **full** **T&Cs** and **DPA** if **B2B** on **a** **public** page.  ",
        "",
        "",
      ]);
    }
    case "testimonial": {
      return L([
        "> “[2–3 sentence customer quote, specific and measurable if possible, approved by the customer in writing per your comms policy.]”  ",
        ">  ",
        "> — **[Name],** [title], [Company]  ",
        ">  ",
        "> *([Industry] &middot; [Region] &middot; [optional: logo in footer with permission] )*  ",
        "",
        "Below the **quote,** a **1-line** **summary** in **product**’s **voice: **[what** **changed** for** them]**.  ",
        "",
        "If you **use** a **headshot,** it **lives** in **/static/customers/…** and **DPIA** is **captured** in **[CRM]** **on** **consent** **to** **republish**.  ",
        "",
        "Internal-only redlines: **no** **forward-looking** **revenue** **claims** **unless** **Finance** and **legal** sign (SEC / marketing rules may apply).  ",
        "",
        "",
      ]);
    }
    case "stat": {
      return L([
        "<!-- KPI / stat “card” for marketing landings -->  ",
        "",
        "| ** [42%] ** |  ",
        "| reduction in P95 API latency for [segment] in [Q]  ",
        "",
        "Footnote: *Source: [internal benchmark id], methodology in [link]. Not a **guarantee** of your results. Past performance ≠ future.*  ",
        "",
        "If the **number** is **%** of **a** **survey** of **N=[n]**, add **a** **methodology** **pop-over** in **app**; **in** static **md,** a **“see** **method**”** link.  ",
        "",
        "Brand: use **one** **num** typeface **and** **spacing** in **Figma** **tokens,** not **ad** **hoc** **bold.  ",
        "",
        "",
      ]);
    }
    case "team": {
      return L([
        "### [Name]  ",
        "![headshot 128]([url] \"[Name]\")  ",
        "- **Role:** [e.g. Principal Engineer, Platform]  ",
        "- **Focus:** [1 line]  ",
        "- **Before [co]:** [1 line, non-confidential]  ",
        "",
        "Grid: 3-4 per row on **desktop,** 1-2 on **mobile;** `loading=\"lazy\"` on **off-screen** **images.  ",
        "",
        "Diversity: **if** you **use** a **narrative** on **D&I,** it **lives** at **/about**; **on** the **grid,** **let** **bios** stand **(avoid** **tokenism** in **templated** **copy;** **get** **HR/Comms** **review**).  ",
        "",
        "",
      ]);
    }
    default:
      throw new Error(`Unknown card snippet: ${v}`);
  }
}

export function contentSnippetCollapsible(v) {
  switch (v) {
    case "faq": {
      return L([
        "## FAQ  ",
        "",
        "<details>  ",
        "<summary><strong> [Question 1, imperative or question form] </strong></summary>  ",
        "",
        "[Answer, 1–3 short paragraphs, link to [doc]. If legal-sensitive, add *not legal advice.*]  ",
        "",
        "</details>  ",
        "",
        "<details>  ",
        "<summary><strong> [Question 2] </strong></summary>  ",
        "[Answer]  ",
        "</details>  ",
        "",
        "Analytics: on **<summary> **clicks,** **or** GTM on **`details[toggle] `** in **a** **static** page **(privacy**-reviewed).  ",
        "",
        "Accessibility: `summary` is **inherently** **focusable;** test **in** **Safari,** which **used** to **have** **quirks;** if **some** UIs **can’t** **use** **`<details>`,** **swap** in **WAI-ARIA** `accordion` **pattern** (design **system**).  ",
        "",
        "",
      ]);
    }
    case "details": {
      return L([
        "<details open>  ",
        "<summary><strong> [Optional default-open title] </strong></summary>  ",
        "",
        "Longer **supplemental** content that can **bloat** the **main** read path: **e.g.** long **bash** one-liner **or** full **`curl`**.  ",
        "",
        "</details>  ",
        "",
        "Print CSS: you may `details { display: block; }` and **force** **open** in **`@media print`**.  ",
        "",
        "Security: do **not** **embed** **HTML** or **iframed** **untrusted** **user** **content** **inside** **`<details> `** in **WYSIWYGs** (XSS) — **use** a **strict** **CSP** and **a** **sanitizer**.  ",
        "",
        "",
      ]);
    }
    case "nested": {
      return L([
        "<details>  ",
        "<summary> [Parent topic] </summary>  ",
        "  <details>  ",
        "  <summary> [Child topic] </summary>  ",
        "  [Body for child. Nesting 3+ levels hurts mobile UX — prefer separate pages for deep content.]  ",
        "  </details>  ",
        "</details>  ",
        "",
        "Screen readers: **test** with **VO/NVDA**; **some** **themes** add **arrows** **via** **CSS;** `summary` should **not** be **a** `div` (invalid).  ",
        "",
        "Docs IA: if **nesting** **repeats** on **10+** **pages,** you **likely** need **a** **left** **nav** and **a** **split** into **a** **section** in **/docs**.  ",
        "",
        "",
      ]);
    }
    case "spoiler": {
      return L([
        "Spoiler for **[Show / book / product detail];** skip if you **avoid** **spoilers** in your **community** **rules.  ",
        "",
        "<details>  ",
        "<summary> Spoiler: click to reveal </summary>  ",
        "  ",
        "The [twist] is that [x]. The [character]’s [arc] is foreshadowed in [episode/chapter] when [y].  ",
        "  ",
        "Moderation: **in** public **forums,** use **a** `spoiler` **tag** per **board** **rules;** in **prose,** a **`details` **is **often** **enough** **(Stack** **Exchange**-style) **+** a **red** **“spoiler** **warning”** in **the** **line** before **(UX).  ",
        "  ",
        "Accessibility: the **reveal** should **be** **keyboard**-reachable; **if** the **spoil** is **a** **big** **image,** add **`alt` **that** **doesn’t** **leak** **until** open **(hard**; **then** use **a** **placeholder** and **JS**; **rare** in **static** `md` **pipelines).  ",
        "  ",
        "</details>  ",
        "  ",
        "",
      ]);
    }
    default:
      throw new Error(`Unknown collapsible: ${v}`);
  }
}
