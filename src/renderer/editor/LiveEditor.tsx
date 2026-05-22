import React, { useEffect, useRef } from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap, highlightActiveLine } from '@codemirror/view';
import { defaultKeymap, history, historyKeymap } from '@codemirror/commands';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import {
  syntaxHighlighting,
  defaultHighlightStyle,
  bracketMatching
} from '@codemirror/language';
import { search, searchKeymap } from '@codemirror/search';
import { livePreviewPlugin, livePreviewTheme } from './livePreviewExt';
import { tableExtension } from './tableExt';

interface LiveEditorProps {
  source: string;
  docPath?: string | null;
  onChangeSource: (next: string) => void;
  onImageClick?: (src: string) => void;
}

export function LiveEditor({ source, onChangeSource }: LiveEditorProps): JSX.Element {
  const hostRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);
  const onChangeRef = useRef(onChangeSource);
  onChangeRef.current = onChangeSource;

  // Initialize once
  useEffect(() => {
    if (!hostRef.current) return;

    const state = EditorState.create({
      doc: source,
      extensions: [
        history(),
        bracketMatching(),
        highlightActiveLine(),
        syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
        markdown({ base: markdownLanguage, codeLanguages: languages, addKeymap: true }),
        search({ top: true }),
        keymap.of([...defaultKeymap, ...historyKeymap, ...searchKeymap]),
        EditorView.lineWrapping,
        livePreviewPlugin,
        livePreviewTheme,
        tableExtension,
        EditorView.updateListener.of((u) => {
          if (u.docChanged) onChangeRef.current(u.state.doc.toString());
        }),
        EditorView.theme({
          '&': {
            height: '100%',
            fontSize: 'var(--fr-user-font-size, 16px)',
            fontFamily: 'var(--fr-user-font-family, var(--fr-font-sans))'
          },
          '.cm-content': {
            padding: '24px 48px',
            maxWidth: '820px',
            margin: '0 auto',
            caretColor: 'var(--fr-fg)',
            lineHeight: '1.7'
          },
          '.cm-scroller': { overflow: 'auto' },
          '.cm-line': { padding: '0' },
          '.cm-activeLine': { background: 'transparent' },
          '.cm-cursor': { borderLeftColor: 'var(--fr-fg)' }
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

  // Sync external source changes back into the editor
  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    const current = view.state.doc.toString();
    if (current !== source) {
      view.dispatch({ changes: { from: 0, to: current.length, insert: source } });
    }
  }, [source]);

  return <div ref={hostRef} className="cm-host fr-live-editor" style={{ height: '100%' }} />;
}