import { useState, useEffect } from 'react';

interface Props {
  onEnter: () => void;
}

export default function WelcomeScreen({ onEnter }: Props) {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
      setDate(now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #050505 0%, #0d0d0d 50%, #080810 100%)' }}
    >
      {/* Ambient particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: (((i * 7) % 3) + 1) + 'px',
              height: (((i * 7) % 3) + 1) + 'px',
              left: ((i * 2.5) % 100) + '%',
              top: ((i * 3.7) % 100) + '%',
              background:
                i % 3 === 0
                  ? 'rgba(34,211,238,0.4)'
                  : i % 3 === 1
                  ? 'rgba(245,158,11,0.3)'
                  : 'rgba(255,255,255,0.15)',
              animation: `float ${4 + ((i * 1.3) % 6)}s ease-in-out infinite`,
              animationDelay: `${(i * 0.4) % 4}s`,
            }}
          />
        ))}
      </div>

      {/* Top time display */}
      <div
        className="absolute top-12 flex flex-col items-center"
        style={{ opacity: visible ? 1 : 0, transition: 'opacity 1s ease 0.3s' }}
      >
        <div
          className="text-7xl font-thin text-white tracking-widest tabular-nums"
          style={{ fontFamily: 'system-ui, sans-serif' }}
        >
          {time}
        </div>
        <div className="text-sm text-white/40 tracking-[0.3em] uppercase mt-2 font-light">{date}</div>
      </div>

      {/* Center content */}
      <div
        className="flex flex-col items-center gap-8 z-10"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 1s ease 0.5s, transform 1s ease 0.5s',
        }}
      >
        {/* Avatar */}
        <div className="relative">
          <div
            className="absolute -inset-0.5 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, #22d3ee, #f59e0b, #22d3ee)',
              animation: 'spin 8s linear infinite',
            }}
          />
          <div
            className="relative w-28 h-28 rounded-full flex items-center justify-center text-3xl font-light text-white"
            style={{
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
              border: '2px solid rgba(34,211,238,0.4)',
              boxShadow: '0 0 40px rgba(34,211,238,0.2), inset 0 0 30px rgba(0,0,0,0.5)',
            }}
          >
            SS
          </div>
          <div
            className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-400"
            style={{ boxShadow: '0 0 8px rgba(52,211,153,0.8)', border: '2px solid #000' }}
          />
        </div>

        {/* Name */}
        <div className="text-center">
          <h1
            className="text-4xl font-extralight text-white tracking-[0.15em] uppercase mb-2"
            style={{ textShadow: '0 0 30px rgba(34,211,238,0.3)' }}
          >
            Sudiksha Srivastav
          </h1>
          <p className="text-base text-white/50 tracking-[0.3em] uppercase font-light">
            AI Engineer &nbsp;·&nbsp; Researcher &nbsp;·&nbsp; Builder
          </p>
        </div>

        {/* Institutions */}
        <div className="flex gap-6 flex-wrap justify-center">
          {['B.Tech Biotechnology @ JIIT Noida', 'BS Data Science @ IIT Madras'].map((label) => (
            <div
              key={label}
              className="px-4 py-1.5 rounded-full text-xs tracking-wider text-white/50 border border-white/10"
              style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(8px)' }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* Enter button */}
        <button
          onClick={onEnter}
          className="group relative mt-4 px-10 py-3.5 rounded-full text-sm font-light tracking-[0.25em] uppercase text-white overflow-hidden"
          style={{
            background: 'rgba(34,211,238,0.08)',
            border: '1px solid rgba(34,211,238,0.3)',
            backdropFilter: 'blur(12px)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = 'rgba(34,211,238,0.15)';
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(34,211,238,0.6)';
            (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 30px rgba(34,211,238,0.2)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = 'rgba(34,211,238,0.08)';
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(34,211,238,0.3)';
            (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
          }}
        >
          Enter Workspace
        </button>
      </div>

      {/* Bottom hint */}
      <div
        className="absolute bottom-10 text-center"
        style={{ opacity: visible ? 0.3 : 0, transition: 'opacity 1s ease 1.5s' }}
      >
        <div className="w-px h-8 bg-white/20 mx-auto mb-3" />
        <p className="text-xs tracking-[0.25em] uppercase text-white/40">Click to explore</p>
      </div>
    </div>
  );
}
