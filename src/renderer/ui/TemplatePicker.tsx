import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { TemplateEntry } from '../../preload';
import { renderMarkdown } from '../markdown/renderer';

interface TemplatePickerProps {
  onSelect: (content: string) => void;
  onClose: () => void;
}

const CATEGORY_LABELS: Record<string, string> = {
  business: 'Business',
  communication: 'Communication',
  development: 'Development',
  'technical-docs': 'Technical Docs',
  writing: 'Writing',
  academic: 'Academic',
  personal: 'Personal',
  'project-management': 'Project Mgmt',
  data: 'Data',
  snippets: 'Snippets',
  'legal-compliance': 'Legal & Compliance',
};

export function TemplatePicker({ onSelect, onClose }: TemplatePickerProps): JSX.Element {
  const [templates, setTemplates] = useState<TemplateEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [previewLoading, setPreviewLoading] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    void window.framora.listTemplates().then((list) => {
      setTemplates(list);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    searchRef.current?.focus();
  }, [loading]);

  const categories = useMemo(() => {
    const cats = new Map<string, number>();
    for (const t of templates) {
      cats.set(t.category, (cats.get(t.category) || 0) + 1);
    }
    return Array.from(cats.entries())
      .sort(([a], [b]) => a.localeCompare(b));
  }, [templates]);

  const filtered = useMemo(() => {
    let list = templates;
    if (activeCategory) {
      list = list.filter((t) => t.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }
    return list;
  }, [templates, activeCategory, search]);

  useEffect(() => {
    if (filtered.length > 0 && (!selectedId || !filtered.find((t) => t.id === selectedId))) {
      setSelectedId(filtered[0]!.id);
    }
  }, [filtered, selectedId]);

  useEffect(() => {
    if (!selectedId) {
      setPreview('');
      return;
    }
    const entry = templates.find((t) => t.id === selectedId);
    if (!entry) return;
    setPreviewLoading(true);
    void window.framora.readTemplate(entry.file).then((md) => {
      const { html } = renderMarkdown(md);
      setPreview(html);
      setPreviewLoading(false);
    });
  }, [selectedId, templates]);

  const handleUse = useCallback(async () => {
    if (!selectedId) return;
    const entry = templates.find((t) => t.id === selectedId);
    if (!entry) return;
    const md = await window.framora.readTemplate(entry.file);
    onSelect(md);
  }, [selectedId, templates, onSelect]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'Enter') {
        void handleUse();
        return;
      }
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const idx = filtered.findIndex((t) => t.id === selectedId);
        const next = e.key === 'ArrowDown'
          ? Math.min(idx + 1, filtered.length - 1)
          : Math.max(idx - 1, 0);
        const nextId = filtered[next]?.id;
        if (nextId) {
          setSelectedId(nextId);
          const el = document.getElementById(`tpl-${nextId}`);
          el?.scrollIntoView({ block: 'nearest' });
        }
      }
    },
    [filtered, selectedId, onClose, handleUse]
  );

  const totalCount = activeCategory
    ? categories.find(([c]) => c === activeCategory)?.[1] ?? 0
    : templates.length;

  if (loading) {
    return (
      <div className="fr-modal-backdrop" onClick={onClose}>
        <div className="fr-modal fr-template-picker" onClick={(e) => e.stopPropagation()}>
          <div className="fr-tpl-loading">Loading templates…</div>
        </div>
      </div>
    );
  }

  return (
    <div className="fr-modal-backdrop" onClick={onClose}>
      <div
        className="fr-modal fr-template-picker"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={onKeyDown}
      >
        <header className="fr-tpl-header">
          <h2>New from Template</h2>
          <div className="fr-tpl-search-wrap">
            <input
              ref={searchRef}
              type="text"
              className="fr-tpl-search"
              placeholder={`Search ${templates.length} templates…`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button
                className="fr-tpl-search-clear"
                onClick={() => setSearch('')}
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>
          <button className="fr-icon-btn" onClick={onClose} title="Close">✕</button>
        </header>

        <div className="fr-tpl-body">
          <aside className="fr-tpl-sidebar">
            <button
              className={`fr-tpl-cat-btn ${!activeCategory ? 'active' : ''}`}
              onClick={() => setActiveCategory(null)}
            >
              All <span className="fr-tpl-count">{templates.length}</span>
            </button>
            {categories.map(([cat, count]) => (
              <button
                key={cat}
                className={`fr-tpl-cat-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {CATEGORY_LABELS[cat] ?? cat}
                <span className="fr-tpl-count">{count}</span>
              </button>
            ))}
          </aside>

          <div className="fr-tpl-grid" ref={gridRef}>
            <div className="fr-tpl-grid-header">
              <span className="fr-tpl-results-count">
                {filtered.length} {filtered.length === 1 ? 'template' : 'templates'}
                {search && ` matching "${search}"`}
              </span>
            </div>
            <div className="fr-tpl-list">
              {filtered.map((t) => (
                <button
                  key={t.id}
                  id={`tpl-${t.id}`}
                  className={`fr-tpl-card ${selectedId === t.id ? 'selected' : ''}`}
                  onClick={() => setSelectedId(t.id)}
                  onDoubleClick={() => void handleUse()}
                >
                  <span className="fr-tpl-card-cat">
                    {CATEGORY_LABELS[t.category] ?? t.category}
                  </span>
                  <span className="fr-tpl-card-name">{t.name}</span>
                  <span className="fr-tpl-card-desc">{t.description}</span>
                  <span className="fr-tpl-card-tags">
                    {t.tags.map((tag) => (
                      <span key={tag} className="fr-tpl-tag">{tag}</span>
                    ))}
                  </span>
                </button>
              ))}
              {filtered.length === 0 && (
                <div className="fr-tpl-empty">
                  No templates match your search.
                </div>
              )}
            </div>
          </div>

          <div className="fr-tpl-preview">
            <div className="fr-tpl-preview-header">
              <span>Preview</span>
              <button
                className="fr-btn primary"
                disabled={!selectedId}
                onClick={() => void handleUse()}
              >
                Use Template
              </button>
            </div>
            <div className="fr-tpl-preview-content fr-rendered">
              {previewLoading ? (
                <div className="fr-tpl-preview-loading">Loading…</div>
              ) : (
                <div dangerouslySetInnerHTML={{ __html: preview }} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
