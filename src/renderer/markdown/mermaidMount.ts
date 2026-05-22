/**
 * Lazy-load mermaid and render any <div class="fr-mermaid"> placeholders
 * inside the given root.  Each call replaces the placeholder's text with
 * an inline SVG.  Idempotent — already-rendered nodes are skipped.
 */
let mermaidPromise: Promise<typeof import('mermaid').default> | null = null;

async function loadMermaid(): Promise<typeof import('mermaid').default> {
  if (!mermaidPromise) {
    mermaidPromise = import('mermaid').then((m) => {
      const mermaid = m.default;
      const isDark =
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      mermaid.initialize({
        startOnLoad: false,
        theme: isDark ? 'dark' : 'default',
        securityLevel: 'strict',
        fontFamily: 'inherit'
      });
      return mermaid;
    });
  }
  return mermaidPromise;
}

let counter = 0;

export async function mountMermaid(root: HTMLElement): Promise<void> {
  const nodes = Array.from(root.querySelectorAll<HTMLDivElement>('.fr-mermaid'));
  if (nodes.length === 0) return;
  const mermaid = await loadMermaid();
  for (const node of nodes) {
    if (node.dataset.rendered === '1') continue;
    const src = node.dataset.source ?? node.textContent ?? '';
    const id = `fr-merm-${++counter}`;
    try {
      const { svg, bindFunctions } = await mermaid.render(id, src);
      node.innerHTML = svg;
      bindFunctions?.(node);
      node.dataset.rendered = '1';
    } catch (err) {
      node.innerHTML = `<pre class="fr-mermaid-error">Mermaid error:\n${String(err)}</pre>`;
      node.dataset.rendered = '1';
    }
  }
}