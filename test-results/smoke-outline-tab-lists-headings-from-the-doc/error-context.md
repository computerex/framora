# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> outline tab lists headings from the doc
- Location: e2e\smoke.spec.ts:75:5

# Error details

```
TimeoutError: locator.click: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('.fr-sidebar-tab').filter({ hasText: 'Outline' })

```

```
Error: Protocol error (Page.handleJavaScriptDialog): No dialog is showing
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e9]:
    - generic [ref=e11]:
      - generic [ref=e12]: ⌄
      - generic [ref=e13]: ⌄
      - generic [ref=e14]: ⌄
      - generic [ref=e15]: ⌄
      - generic [ref=e16]: ⌄
      - generic [ref=e17]: ⌄
      - generic [ref=e18]: ⌄
      - generic [ref=e19]: ⌄
      - generic [ref=e20]: ⌄
      - generic [ref=e21]: ⌄
      - generic [ref=e22]: ⌄
      - generic [ref=e23]: ⌄
      - generic [ref=e24]: ⌄
    - textbox [ref=e25]:
      - generic [ref=e26]: "---"
      - generic [ref=e27]: "title: Sample"
      - generic [ref=e28]: "author: Framora"
      - generic [ref=e29]: "---"
      - generic [ref=e31]: "# Hello Framora"
      - generic [ref=e33]: This is a **sample** Markdown document used by the E2E suite.
      - generic [ref=e35]: "## Features"
      - generic [ref=e37]: "- Lists"
      - generic [ref=e38]: "- *Italics* and **bold**"
      - generic [ref=e39]: "- `inline code`"
      - generic [ref=e40]: "- [Links](https://example.com)"
      - generic [ref=e42]: "## Code"
      - generic [ref=e44]: "```js"
      - generic [ref=e45]: "const greet = (name) => `Hello, ${name}!`;"
      - generic [ref=e46]: console.log(greet('Framora'));
      - generic [ref=e47]: "```"
      - generic [ref=e49]: "## Math"
      - generic [ref=e51]: "Inline: $E = mc^2$"
      - generic [ref=e53]: "Block:"
      - generic [ref=e55]: $$
      - generic [ref=e56]: "\\int_0^\\infty e^{-x^2}\\,dx = \\frac{\\sqrt{\\pi}}{2}"
      - generic [ref=e57]: $$
      - generic [ref=e59]: "## Table"
      - generic [ref=e61]: "| Item | Qty | Price |"
      - generic [ref=e62]: "|------|----:|------:|"
      - generic [ref=e63]: "| A | 1 | $1.00 |"
      - generic [ref=e64]: "| B | 2 | $4.00 |"
      - generic [ref=e66]: "## Alert"
      - generic [ref=e68]: "> [!NOTE]"
      - generic [ref=e69]: "> This is a note alert."
      - generic [ref=e71]: "## Mermaid"
      - generic [ref=e73]: "```mermaid"
      - generic [ref=e74]: graph TD
      - generic [ref=e75]: "A[Start] --> B{Decide}"
      - generic [ref=e76]: B -->|Yes| C[Do it]
      - generic [ref=e77]: B -->|No| D[Skip]
      - generic [ref=e78]: "```"
  - generic [ref=e79]:
    - generic [ref=e80]:
      - button "◨" [ref=e81] [cursor=pointer]
      - generic [ref=e82]: sample.md
      - generic [ref=e83]: ●
    - generic [ref=e84]:
      - generic [ref=e85]: hybrid
      - generic [ref=e86]: 53 lines
      - generic [ref=e87]: 108 words
      - generic [ref=e88]: 651 chars
```