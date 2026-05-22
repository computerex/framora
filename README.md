# Framora

A clean, hybrid live-preview Markdown editor for Windows, macOS, and Linux.
Built with Electron + React + CodeMirror 6.

## What works in M1 (this milestone)

- Native Electron app, single-instance
- Open / Save / Save As `.md` files
- File associations for `.md`, `.markdown`, `.mdown`, `.mkd`, `.mkdn`, `.qmd`
  — double-clicking these in your OS opens them in Framora once installed
- Recent files (persisted to user data dir)
- CodeMirror 6 markdown editor with:
  - Hybrid live-render decorations (heading sizes, blockquote styling,
    code-block backgrounds, marker tokens hidden when cursor isn't on them)
  - Source-mode toggle (line numbers + raw markers visible)
  - Standalone Preview mode (markdown-it render)
- Focus mode (dim non-active lines)
- Light / dark theme that follows OS
- Status bar (filename, dirty marker, words, chars, lines)
- Native menubar (File / Edit / View / Window / Help)
- Welcome screen with recents

## Dev

```bash
cd framora
npm install
npm run dev
```

The app boots on the first available port and opens an Electron window.
Hot-reload is on for the renderer; main-process changes need a restart.

## Build installers

```bash
npm run package          # auto-detects current platform
npm run package:win      # NSIS .exe (x64/arm64/ia32) + portable .exe
npm run package:mac      # .dmg + .zip (universal)
npm run package:linux    # .AppImage + .deb + .tar.gz
```

Outputs go to `dist/`.

### Code signing

- **macOS**: set `CSC_LINK` + `CSC_KEY_PASSWORD` env vars (your `.p12`),
  and `APPLE_ID` / `APPLE_APP_SPECIFIC_PASSWORD` / `APPLE_TEAM_ID` for notarization.
- **Windows**: set `CSC_LINK` + `CSC_KEY_PASSWORD`, or use Azure Trusted Signing
  via `electron-builder`'s `azureSignOptions`.
- **Linux**: no signing needed; AppImage / .deb just work.

### Icons

Drop your original artwork in `resources/`:
```
resources/icon.icns        macOS
resources/icon.ico         Windows
resources/icons/*.png      Linux  (16/32/48/64/128/256/512)
```

## Roadmap

See `../framora.md` (the milestones plan) — M2 brings hybrid-rendered
images, tables, math (MathJax), Mermaid diagrams, and code-fence
syntax highlighting via Shiki. M3+ add file tree sidebar, global search,
exports (PDF/HTML/docx/epub via bundled Pandoc), themes engine, and
auto-update.

## License

MIT (your choice — update before publishing).