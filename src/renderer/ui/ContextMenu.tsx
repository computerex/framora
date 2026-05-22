import React, { useEffect, useRef } from 'react';

export interface ContextMenuItem {
  label: string;
  onClick?: () => void;
  separator?: boolean;
  disabled?: boolean;
  submenu?: ContextMenuItem[];
}

interface ContextMenuProps {
  x: number;
  y: number;
  items: ContextMenuItem[];
  onClose: () => void;
}

export function ContextMenu({ x, y, items, onClose }: ContextMenuProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent): void => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  // Keep within viewport
  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    let left = x;
    let top = y;
    if (left + rect.width > vw) left = vw - rect.width - 8;
    if (top + rect.height > vh) top = vh - rect.height - 8;
    ref.current.style.left = left + 'px';
    ref.current.style.top = top + 'px';
  }, [x, y]);

  return (
    <div ref={ref} className="fr-ctxmenu" style={{ left: x, top: y }}>
      {items.map((it, i) =>
        it.separator ? (
          <div key={i} className="fr-ctxmenu-sep" />
        ) : (
          <div
            key={i}
            className={`fr-ctxmenu-item ${it.disabled ? 'disabled' : ''} ${it.submenu ? 'has-submenu' : ''}`}
            onClick={() => {
              if (it.disabled) return;
              it.onClick?.();
              if (!it.submenu) onClose();
            }}
          >
            <span>{it.label}</span>
            {it.submenu && <span className="fr-ctxmenu-arrow">▸</span>}
            {it.submenu && (
              <div className="fr-ctxmenu-sub">
                {it.submenu.map((s, j) =>
                  s.separator ? (
                    <div key={j} className="fr-ctxmenu-sep" />
                  ) : (
                    <div
                      key={j}
                      className={`fr-ctxmenu-item ${s.disabled ? 'disabled' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (s.disabled) return;
                        s.onClick?.();
                        onClose();
                      }}
                    >
                      {s.label}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
}