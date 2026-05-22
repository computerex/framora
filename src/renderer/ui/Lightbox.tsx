import React, { useEffect, useState } from 'react';

interface LightboxProps {
  src: string;
  onClose: () => void;
}

export function Lightbox({ src, onClose }: LightboxProps): JSX.Element {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') onClose();
      else if (e.key === '+' || e.key === '=') setZoom((z) => Math.min(z * 1.25, 8));
      else if (e.key === '-') setZoom((z) => Math.max(z / 1.25, 0.1));
      else if (e.key === '0') {
        setZoom(1);
        setPan({ x: 0, y: 0 });
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const onWheel = (e: React.WheelEvent): void => {
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.1 : 0.9;
    setZoom((z) => Math.min(Math.max(z * factor, 0.1), 8));
  };

  return (
    <div className="fr-lightbox" onClick={onClose}>
      <div className="fr-lightbox-toolbar" onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setZoom((z) => Math.max(z / 1.25, 0.1))} title="Zoom out">−</button>
        <span>{Math.round(zoom * 100)}%</span>
        <button onClick={() => setZoom((z) => Math.min(z * 1.25, 8))} title="Zoom in">+</button>
        <button onClick={() => { setZoom(1); setPan({ x: 0, y: 0 }); }} title="Reset">1:1</button>
        <button onClick={onClose} title="Close (Esc)">✕</button>
      </div>
      <img
        src={src}
        alt=""
        onClick={(e) => e.stopPropagation()}
        onWheel={onWheel}
        style={{
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
          transition: 'transform 0.05s linear'
        }}
        draggable={false}
      />
    </div>
  );
}