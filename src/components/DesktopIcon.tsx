import { useState } from 'react';

interface Props {
  icon: string;
  label: string;
  onDoubleClick: () => void;
}

export default function DesktopIcon({ icon, label, onDoubleClick }: Props) {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className="flex flex-col items-center gap-1.5 cursor-pointer w-20 group"
      onClick={() => setSelected(!selected)}
      onDoubleClick={onDoubleClick}
    >
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl relative overflow-hidden"
        style={{
          background: selected ? 'rgba(34,211,238,0.15)' : 'rgba(255,255,255,0.05)',
          border: selected
            ? '1px solid rgba(34,211,238,0.4)'
            : '1px solid rgba(255,255,255,0.08)',
          boxShadow: selected
            ? '0 0 20px rgba(34,211,238,0.15)'
            : '0 4px 16px rgba(0,0,0,0.4)',
          backdropFilter: 'blur(8px)',
          transition: 'all 0.2s ease',
        }}
      >
        {/* Folder shine */}
        <div
          className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 100%)',
            borderRadius: '11px 11px 0 0',
          }}
        />
        <span className="relative z-10">{icon}</span>
      </div>
      <span
        className="text-xs text-center leading-tight px-1 rounded py-0.5 text-white/80 group-hover:text-white"
        style={{
          background: selected ? 'rgba(34,211,238,0.2)' : 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(4px)',
          transition: 'all 0.2s ease',
          fontSize: '11px',
          maxWidth: '80px',
          wordBreak: 'break-word',
          textAlign: 'center',
        }}
      >
        {label}
      </span>
    </div>
  );
}
