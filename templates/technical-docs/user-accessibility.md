# Accessibility

> We aim to meet **WCAG [2.2 AA]** for core flows. This page tracks **practical** guidance and **known** gaps for [version].

## Supported assistive technology
- **Screen readers:** [NVDA+Chrome, VoiceOver+Safari, JAWS+Edge] on [supported] versions
- **Zoom:** [up to 200%] *without* horizontal scroll for [key pages]
- **Color:** [contrast] on text and *focus rings* in [default theme] — [low-contrast] themes marked

## How we implement
- **Labels:** *every* [control] has [programmatic name] — *errors* linked with `[aria-describedby]`
- **Focus:** *visible* focus, **not** [outline:none] *without* [replacement] — *modal* *traps* focus
- **Live regions** for [async updates, save status] — [polite] vs [assertive]

```text
# Quick tests (userland)
- Tab through [form] — order matches visual order? [Y/N + fix path]
- Run [WAVE/axe] on [url] before release
```

## Keyboard-only paths
- [Critical flows] completable: [A], [B], [C] — *escape hatches* from [wizards, drawers]

## Known issues
| Area | Status | Workaround | ETA |
| --- | --- | --- | --- |
| [Data grid] | [partial] | [Use list view] | [Qn] |
| [Charts] | [summary table alt] | [export CSV] | [Qn+1] |

## Feedback
- **Report a11y bugs:** [email] — *include* [OS, AT, [Product] build]
