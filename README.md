# Framora

A clean, hybrid live-preview Markdown editor for Windows, macOS, and Linux.
Built with Electron + React + CodeMirror 6.

## Features

### Live Preview (Obsidian / Typora-style)

- **Ghost-tag editing** — markdown syntax markers (`**`, `#`, `>`, `` ` ``) are hidden on
  lines the cursor isn't on and rendered in-place as styled text. Move to a line and the
  ghost markers reappear so you can edit them directly.
- **Inline formatting** — bold, italic, strikethrough, inline code, headings (H1–H6),
  blockquotes, and links all render styled in the editor without leaving edit mode.
- **Table rendering** — GFM tables render as real bordered grid tables with aligned
  columns and header styling. Click any cell to drop the cursor right into that cell's
  source for editing; click elsewhere to snap back to the rendered view.
- **Source-mode toggle** — show line numbers and all raw markers at any time.
- **Standalone Preview** — full markdown-it render with Mermaid diagrams, syntax
  highlighting, and math (KaTeX / MathJax).

### Editor

- CodeMirror 6 with full keyboard navigation
- Focus mode (dim non-active lines)
- Word / char / line count in status bar
- Light / dark theme that follows the OS

### File handling

- Open / Save / Save As `.md` files
- File associations for `.md`, `.markdown`, `.mdown`, `.mkd`, `.mkdn`, `.qmd`
  — double-clicking these opens them in Framora once installed
- Recent files (persisted across sessions)
- Welcome screen with recents

### Shell

- Native Electron app, single-instance
- Native menubar (File / Edit / View / Window / Help)
- Status bar (filename, dirty marker, words, chars, lines)

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

- **M2** — Mermaid diagrams in live preview, math (KaTeX), code-fence syntax highlighting
  via Shiki, image rendering
- **M3** — File-tree sidebar, global search, exports (PDF / HTML / docx / epub via
  bundled Pandoc), themes engine
- **M4** — Auto-update, command palette, vim keybindings, plugin API

## License

MIT