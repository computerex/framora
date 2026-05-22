import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap, lineNumbers, highlightActiveLine } from '@codemirror/view';
import { defaultKeymap, history, historyKeymap } from '@codemirror/commands';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import {
  syntaxHighlighting,
  defaultHighlightStyle,
  HighlightStyle,
  bracketMatching,
  foldGutter,
  foldKeymap
} from '@codemirror/language';
import { tags } from '@lezer/highlight';
import { search, searchKeymap, openSearchPanel } from '@codemirror/search';

export interface EditorHandle {
  getValue: () => string;
  setValue: (v: string) => void;
  focus: () => void;
  openSearch: () => void;
  insertAtCursor: (text: string) => void;
  getSelection: () => string;
  replaceSelection: (text: string) => void;
  getCursorPosition: () => number;
}

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
  onSelectionChange?: (selection: string) => void;
}

const markdownHighlight = HighlightStyle.define([
  { tag: tags.strong, fontWeight: '700' },
  { tag: tags.emphasis, fontStyle: 'italic' },
  { tag: tags.strikethrough, textDecoration: 'line-through', color: 'var(--fr-fg-muted)' },
  { tag: tags.link, color: 'var(--fr-accent)' },
  { tag: tags.url, color: 'var(--fr-fg-muted)', fontSize: '0.9em' },
  {
    tag: tags.monospace,
    fontFamily: 'var(--fr-font-mono)',
    background: 'var(--fr-code-bg)',
    padding: '1px 4px',
    borderRadius: '3px',
    fontSize: '0.9em'
  },
  { tag: tags.heading, fontWeight: '700' },
  { tag: tags.meta, color: 'var(--fr-fg-muted)' },
  { tag: tags.processingInstruction, color: 'var(--fr-fg-muted)' }
]);

export const Editor = forwardRef<EditorHandle, EditorProps>(function Editor(
  { value, onChange, onSelectionChange },
  ref
) {
  const hostRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;
  const onSelRef = useRef(onSelectionChange);
  onSelRef.current = onSelectionChange;

  useImperativeHandle(ref, () => ({
    getValue: () => viewRef.current?.state.doc.toString() ?? '',
    setValue: (v: string) => {
      const view = viewRef.current;
      if (!view) return;
      view.dispatch({ changes: { from: 0, to: view.state.doc.length, insert: v } });
    },
    focus: () => viewRef.current?.focus(),
    openSearch: () => {
      const view = viewRef.current;
      if (view) {
        view.focus();
        openSearchPanel(view);
      }
    },
    insertAtCursor: (text: string) => {
      const view = viewRef.current;
      if (!view) return;
      const { from, to } = view.state.selection.main;
      view.dispatch({
        changes: { from, to, insert: text },
        selection: { anchor: from + text.length }
      });
      view.focus();
    },
    getSelection: () => {
      const view = viewRef.current;
      if (!view) return '';
      const { from, to } = view.state.selection.main;
      return view.state.sliceDoc(from, to);
    },
    replaceSelection: (text: string) => {
      const view = viewRef.current;
      if (!view) return;
      const { from, to } = view.state.selection.main;
      if (from === to) return;
      view.dispatch({
        changes: { from, to, insert: text },
        selection: { anchor: from + text.length }
      });
      view.focus();
    },
    getCursorPosition: () => {
      const view = viewRef.current;
      if (!view) return 0;
      return view.state.selection.main.head;
    }
  }));

  useEffect(() => {
    if (!hostRef.current) return;

    const state = EditorState.create({
      doc: value,
      extensions: [
        history(),
        bracketMatching(),
        foldGutter(),
        highlightActiveLine(),
        lineNumbers(),
        syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
        syntaxHighlighting(markdownHighlight),
        markdown({ base: markdownLanguage, codeLanguages: languages, addKeymap: true }),
        search({ top: true }),
        keymap.of([...defaultKeymap, ...historyKeymap, ...foldKeymap, ...searchKeymap]),
        EditorView.lineWrapping,
        EditorView.updateListener.of((u) => {
          if (u.docChanged) onChangeRef.current(u.state.doc.toString());
          if (u.selectionSet && onSelRef.current) {
            const { from, to } = u.state.selection.main;
            onSelRef.current(u.state.sliceDoc(from, to));
          }
        }),
        EditorView.theme({
          '&': {
            height: '100%',
            fontSize: 'var(--fr-user-font-size, 14px)',
            fontFamily: 'var(--fr-font-mono)'
          },
          '.cm-content': {
            padding: '12px 0',
            caretColor: 'var(--fr-fg)'
          },
          '.cm-scroller': { overflow: 'auto' },
          '.cm-line': { lineHeight: '1.6', padding: '0 16px' },
          '.cm-cursor': { borderLeftColor: 'var(--fr-fg)' },
          '.cm-activeLine': { background: 'var(--fr-code-bg)' },
          '.cm-gutters': {
            background: 'var(--fr-bg)',
            borderRight: '1px solid var(--fr-border)',
            color: 'var(--fr-fg-muted)',
            fontSize: '12px',
            minWidth: '48px'
          }
        })
      ]
    });

    const view = new EditorView({ state, parent: hostRef.current });
    viewRef.current = view;

    return () => {
      view.destroy();
      viewRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    const current = view.state.doc.toString();
    if (current !== value) {
      view.dispatch({ changes: { from: 0, to: current.length, insert: value } });
    }
  }, [value]);

  return <div ref={hostRef} className="cm-host" />;
});
