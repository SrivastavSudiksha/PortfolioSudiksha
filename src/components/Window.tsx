import { useState, useRef, useCallback } from 'react';
import { X, Minus, Maximize2 } from 'lucide-react';
import type { WindowState } from '../types';

interface Props {
  window: WindowState;
  onClose: (id: string) => void;
  onFocus: (id: string) => void;
  onMove: (id: string, x: number, y: number) => void;
  onResize: (id: string, w: number, h: number) => void;
  onMinimize: (id: string) => void;
  onMaximize: (id: string) => void;
  children: React.ReactNode;
}

export default function Window({
  window: win,
  onClose,
  onFocus,
  onMove,
  onResize,
  onMinimize,
  onMaximize,
  children,
}: Props) {
  const dragRef = useRef<{
    startX: number;
    startY: number;
    origX: number;
    origY: number;
  } | null>(null);
  const [isMaximized, setIsMaximized] = useState(false);
  const [preMaxState, setPreMaxState] = useState({
    x: win.x,
    y: win.y,
    w: win.width,
    h: win.height,
  });

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if ((e.target as HTMLElement).closest('.window-controls')) return;
      onFocus(win.id);
      dragRef.current = {
        startX: e.clientX,
        startY: e.clientY,
        origX: win.x,
        origY: win.y,
      };

      const handleMove = (me: MouseEvent) => {
        if (!dragRef.current) return;
        const dx = me.clientX - dragRef.current.startX;
        const dy = me.clientY - dragRef.current.startY;
        onMove(win.id, dragRef.current.origX + dx, dragRef.current.origY + dy);
      };
      const handleUp = () => {
        dragRef.current = null;
        document.removeEventListener('mousemove', handleMove);
        document.removeEventListener('mouseup', handleUp);
      };
      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', handleUp);
    },
    [win.id, win.x, win.y, onFocus, onMove]
  );

  function handleMaximize() {
    if (isMaximized) {
      setIsMaximized(false);
      onMove(win.id, preMaxState.x, preMaxState.y);
      onResize(win.id, preMaxState.w, preMaxState.h);
    } else {
      setPreMaxState({ x: win.x, y: win.y, w: win.width, h: win.height });
      setIsMaximized(true);
      onMove(win.id, 0, 28);
      onResize(win.id, globalThis.innerWidth, globalThis.innerHeight - 28 - 80);
    }
    onMaximize(win.id);
  }

  if (win.isMinimized) return null;

  const style: React.CSSProperties = isMaximized
    ? {
        position: 'fixed',
        left: 0,
        top: 28,
        width: '100vw',
        height: 'calc(100vh - 108px)',
        zIndex: win.zIndex,
      }
    : {
        position: 'fixed',
        left: win.x,
        top: win.y,
        width: win.width,
        height: win.height,
        zIndex: win.zIndex,
      };

  return (
    <div
      style={{
        ...style,
        background: 'rgba(12,12,18,0.92)',
        backdropFilter: 'blur(32px) saturate(180%)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: isMaximized ? 0 : 12,
        boxShadow: '0 32px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.04)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transition: 'box-shadow 0.2s ease',
      }}
      onClick={() => onFocus(win.id)}
    >
      {/* Title bar */}
      <div
        className="window-titlebar flex items-center gap-3 px-4 h-10 flex-shrink-0 cursor-default select-none"
        style={{
          background: 'rgba(255,255,255,0.03)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
        onMouseDown={handleMouseDown}
      >
        {/* Traffic lights */}
        <div className="window-controls flex items-center gap-1.5">
          <button
            onClick={() => onClose(win.id)}
            className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400 flex items-center justify-center group"
            style={{ transition: 'background 0.2s' }}
          >
            <X size={7} className="opacity-0 group-hover:opacity-100 text-red-900" />
          </button>
          <button
            onClick={() => onMinimize(win.id)}
            className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-400 flex items-center justify-center group"
            style={{ transition: 'background 0.2s' }}
          >
            <Minus size={7} className="opacity-0 group-hover:opacity-100 text-yellow-900" />
          </button>
          <button
            onClick={handleMaximize}
            className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-400 flex items-center justify-center group"
            style={{ transition: 'background 0.2s' }}
          >
            <Maximize2
              size={6}
              className="opacity-0 group-hover:opacity-100 text-emerald-900"
            />
          </button>
        </div>

        <span className="flex-1 text-center text-xs text-white/30 font-light tracking-widest uppercase pointer-events-none">
          {win.title}
        </span>

        <div className="w-12" />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto" style={{ minHeight: 0 }}>
        {children}
      </div>
    </div>
  );
}
