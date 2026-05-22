import React from 'react';

interface OutlineProps {
  headings: Array<{ level: number; text: string; id: string }>;
  onJump: (id: string) => void;
}

export function Outline({ headings, onJump }: OutlineProps): JSX.Element {
  if (headings.length === 0) {
    return <div className="fr-outline-empty">No headings yet.</div>;
  }
  return (
    <ul className="fr-outline">
      {headings.map((h, i) => (
        <li
          key={`${h.id}-${i}`}
          className={`fr-outline-item lvl-${h.level}`}
          style={{ paddingLeft: 8 + (h.level - 1) * 12 }}
          onClick={() => onJump(h.id)}
          title={h.text}
        >
          {h.text}
        </li>
      ))}
    </ul>
  );
}