/**
 * Bundled themes — each one is a CSS string that overrides CSS variables
 * and additional selectors.  Themes are toggled by setting <html data-theme-name="...">
 * and injecting the CSS into a <style id="fr-theme-css">.
 *
 * All themes are original and dual-licensed MIT.
 */

export interface ThemeDef {
  id: string;
  name: string;
  base: 'light' | 'dark';
  css: string;
}

const FRAMORA_LIGHT: ThemeDef = {
  id: 'framora-light',
  name: 'Framora Light',
  base: 'light',
  css: '' // built-in defaults
};

const FRAMORA_DARK: ThemeDef = {
  id: 'framora-dark',
  name: 'Framora Dark',
  base: 'dark',
  css: '' // built-in defaults
};

const PAPER: ThemeDef = {
  id: 'paper',
  name: 'Paper',
  base: 'light',
  css: `
:root[data-theme-name="paper"] {
  --fr-bg: #fbf7ee;
  --fr-fg: #3a3226;
  --fr-fg-muted: #8b7e63;
  --fr-border: #ddd2b7;
  --fr-accent: #b46b30;
  --fr-code-bg: #f1eadb;
  --fr-blockquote-fg: #6b5d44;
  --fr-blockquote-border: #c8b88f;
  --fr-status-bg: #f4ecd8;
  --fr-selection: #ecd9a9;
}
:root[data-theme-name="paper"] body,
:root[data-theme-name="paper"] .fr-rendered {
  font-family: Georgia, "Iowan Old Style", "Apple Garamond", serif;
}
:root[data-theme-name="paper"] .fr-rendered h1,
:root[data-theme-name="paper"] .fr-rendered h2,
:root[data-theme-name="paper"] .fr-rendered h3 {
  font-weight: 400;
  font-style: italic;
}
`
};

const GITHUB: ThemeDef = {
  id: 'github',
  name: 'GitHub',
  base: 'light',
  css: `
:root[data-theme-name="github"] {
  --fr-bg: #ffffff;
  --fr-fg: #1f2328;
  --fr-fg-muted: #656d76;
  --fr-border: #d0d7de;
  --fr-accent: #0969da;
  --fr-code-bg: #f6f8fa;
  --fr-blockquote-fg: #59636e;
  --fr-blockquote-border: #d0d7de;
  --fr-status-bg: #f6f8fa;
  --fr-selection: #cae8ff;
  --fr-font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif;
}
:root[data-theme-name="github"] .fr-rendered h1,
:root[data-theme-name="github"] .fr-rendered h2 {
  border-bottom: 1px solid var(--fr-border);
  padding-bottom: 0.3em;
}
`
};

const NIGHT: ThemeDef = {
  id: 'night',
  name: 'Night',
  base: 'dark',
  css: `
:root[data-theme-name="night"] {
  --fr-bg: #0d1117;
  --fr-fg: #c9d1d9;
  --fr-fg-muted: #8b949e;
  --fr-border: #30363d;
  --fr-accent: #58a6ff;
  --fr-code-bg: #161b22;
  --fr-blockquote-fg: #8b949e;
  --fr-blockquote-border: #30363d;
  --fr-status-bg: #010409;
  --fr-selection: #1f6feb55;
}
`
};

const SOLARIZED_LIGHT: ThemeDef = {
  id: 'solarized-light',
  name: 'Solarized Light',
  base: 'light',
  css: `
:root[data-theme-name="solarized-light"] {
  --fr-bg: #fdf6e3;
  --fr-fg: #586e75;
  --fr-fg-muted: #93a1a1;
  --fr-border: #eee8d5;
  --fr-accent: #268bd2;
  --fr-code-bg: #eee8d5;
  --fr-blockquote-fg: #657b83;
  --fr-blockquote-border: #93a1a1;
  --fr-status-bg: #eee8d5;
  --fr-selection: #b5e8ff;
}
`
};

const SOLARIZED_DARK: ThemeDef = {
  id: 'solarized-dark',
  name: 'Solarized Dark',
  base: 'dark',
  css: `
:root[data-theme-name="solarized-dark"] {
  --fr-bg: #002b36;
  --fr-fg: #93a1a1;
  --fr-fg-muted: #586e75;
  --fr-border: #073642;
  --fr-accent: #268bd2;
  --fr-code-bg: #073642;
  --fr-blockquote-fg: #839496;
  --fr-blockquote-border: #586e75;
  --fr-status-bg: #001f27;
  --fr-selection: #1a4f5d;
}
`
};

const SEPIA: ThemeDef = {
  id: 'sepia',
  name: 'Sepia',
  base: 'light',
  css: `
:root[data-theme-name="sepia"] {
  --fr-bg: #f4ecd8;
  --fr-fg: #5b4636;
  --fr-fg-muted: #8b7355;
  --fr-border: #d4c4a8;
  --fr-accent: #8b4513;
  --fr-code-bg: #ebe0c2;
  --fr-blockquote-fg: #6b5232;
  --fr-blockquote-border: #c4a575;
  --fr-status-bg: #ede2c4;
  --fr-selection: #d9c89d;
}
`
};

const DRACULA: ThemeDef = {
  id: 'dracula',
  name: 'Dracula',
  base: 'dark',
  css: `
:root[data-theme-name="dracula"] {
  --fr-bg: #282a36;
  --fr-fg: #f8f8f2;
  --fr-fg-muted: #6272a4;
  --fr-border: #44475a;
  --fr-accent: #bd93f9;
  --fr-code-bg: #44475a;
  --fr-blockquote-fg: #f8f8f2;
  --fr-blockquote-border: #6272a4;
  --fr-status-bg: #21222c;
  --fr-selection: #44475a;
}
`
};

export const THEMES: ThemeDef[] = [
  FRAMORA_LIGHT,
  FRAMORA_DARK,
  PAPER,
  SEPIA,
  GITHUB,
  NIGHT,
  SOLARIZED_LIGHT,
  SOLARIZED_DARK,
  DRACULA
];

export function applyThemeName(name: string): ThemeDef | undefined {
  const t = THEMES.find((x) => x.id === name) ?? THEMES[0]!;
  document.documentElement.dataset.themeName = t.id;
  document.documentElement.dataset.theme = t.base;
  let style = document.getElementById('fr-theme-css') as HTMLStyleElement | null;
  if (!style) {
    style = document.createElement('style');
    style.id = 'fr-theme-css';
    document.head.appendChild(style);
  }
  style.textContent = t.css;
  return t;
}