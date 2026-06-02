import { researchTopics } from '../../data/portfolio';

export default function ResearchWindow() {
  const statusColor = (s: string) => {
    if (s === 'active') return { bg: 'rgba(16,185,129,0.1)', text: 'rgba(52,211,153,0.9)', border: 'rgba(16,185,129,0.2)' };
    if (s === 'exploring') return { bg: 'rgba(245,158,11,0.1)', text: 'rgba(251,191,36,0.9)', border: 'rgba(245,158,11,0.2)' };
    return { bg: 'rgba(148,163,184,0.1)', text: 'rgba(148,163,184,0.8)', border: 'rgba(148,163,184,0.2)' };
  };

  return (
    <div className="p-8 h-full overflow-auto" style={{ color: 'rgba(255,255,255,0.85)' }}>
      <div className="mb-8">
        <h2 className="text-lg font-extralight tracking-[0.2em] uppercase text-white mb-1">
          Research
        </h2>
        <p className="text-xs text-white/30 tracking-wider">
          Areas of investigation, experimentation, and exploration
        </p>
        <div className="w-full h-px bg-white/5 mt-4" />
      </div>

      <div className="grid gap-5">
        {researchTopics.map((topic) => {
          const c = statusColor(topic.status);
          return (
            <div
              key={topic.title}
              className="p-6 rounded-xl"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                transition: 'all 0.2s ease',
              }}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-base font-light text-white/90">{topic.title}</h3>
                <span
                  className="text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full flex-shrink-0"
                  style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}
                >
                  {topic.status}
                </span>
              </div>
              <p className="text-sm text-white/50 leading-relaxed font-light mb-4">
                {topic.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {topic.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-wider uppercase px-2 py-0.5 rounded"
                    style={{
                      background: 'rgba(34,211,238,0.06)',
                      color: 'rgba(34,211,238,0.6)',
                      border: '1px solid rgba(34,211,238,0.12)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Future directions */}
      <div className="mt-8">
        <h3 className="text-xs font-light tracking-[0.3em] uppercase text-cyan-400/70 mb-4">
          Future Directions
        </h3>
        <div
          className="p-5 rounded-xl"
          style={{
            background: 'rgba(34,211,238,0.03)',
            border: '1px dashed rgba(34,211,238,0.15)',
          }}
        >
          <p className="text-sm text-white/50 leading-relaxed font-light">
            Actively seeking opportunities to collaborate on applied ML research — particularly at
            the intersection of computer vision, healthcare, and intelligent systems. Open to
            research internships, paper co-authorship, and experimental project partnerships.
          </p>
        </div>
      </div>
    </div>
  );
}
