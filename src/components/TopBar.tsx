import { useState, useEffect } from 'react';
import { Wifi, Search } from 'lucide-react';
import type { AudienceType } from '../types';

interface Props {
  audience: AudienceType;
  onOpenWindow: (type: string) => void;
}

const menus = ['Workspace', 'Projects', 'Research', 'View', 'Tools', 'Help'];

export default function TopBar({ audience, onOpenWindow }: Props) {
  const [time, setTime] = useState('');
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [battery] = useState(87);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const audienceLabel = {
    recruiter: 'Recruiter',
    collaborator: 'Collaborator',
    developer: 'Developer',
    researcher: 'Researcher',
  }[audience];

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 h-7 select-none"
      style={{
        background: 'rgba(0,0,0,0.7)',
        backdropFilter: 'blur(24px) saturate(180%)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Left: OS title + menus */}
      <div className="flex items-center gap-1">
        <button
          className="text-xs font-semibold text-white tracking-widest uppercase px-2 py-0.5 rounded"
          style={{ letterSpacing: '0.2em', color: 'rgba(34,211,238,0.9)' }}
        >
          SUDIKSHA
        </button>
        <div className="w-px h-3 bg-white/10 mx-1" />
        {menus.map((menu) => (
          <div key={menu} className="relative">
            <button
              className="text-xs text-white/60 hover:text-white px-2 py-0.5 rounded transition-colors duration-150"
              style={{
                background: activeMenu === menu ? 'rgba(255,255,255,0.08)' : 'transparent',
              }}
              onClick={() => setActiveMenu(activeMenu === menu ? null : menu)}
            >
              {menu}
            </button>
            {activeMenu === menu && menu === 'Projects' && (
              <div
                className="absolute top-full left-0 mt-1 rounded-lg overflow-hidden z-50 min-w-40"
                style={{
                  background: 'rgba(10,10,16,0.95)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 16px 40px rgba(0,0,0,0.6)',
                }}
                onMouseLeave={() => setActiveMenu(null)}
              >
                {['Resume', 'Projects', 'Skills', 'Research', 'Contact'].map((item) => (
                  <button
                    key={item}
                    className="w-full text-left px-4 py-2 text-xs text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                    onClick={() => {
                      onOpenWindow(item.toLowerCase());
                      setActiveMenu(null);
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right: system indicators */}
      <div className="flex items-center gap-3 text-white/60">
        <div
          className="text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-full"
          style={{
            background: 'rgba(34,211,238,0.08)',
            color: 'rgba(34,211,238,0.7)',
            border: '1px solid rgba(34,211,238,0.15)',
          }}
        >
          {audienceLabel}
        </div>
        <button
          className="hover:text-white transition-colors"
          onClick={() => onOpenWindow('contact')}
        >
          <Search size={12} />
        </button>
        <Wifi size={12} />
        <div className="flex items-center gap-1">
          <div className="flex gap-px items-end">
            {[100, 80, 60, 40].map((h, i) => (
              <div
                key={i}
                className="w-0.5 bg-white/50 rounded-sm"
                style={{ height: (h * battery) / 100 / 10 + 4 + 'px' }}
              />
            ))}
          </div>
          <span className="text-[10px]">{battery}%</span>
        </div>
        <span className="text-xs font-light tracking-wider">{time}</span>
      </div>
    </div>
  );
}
