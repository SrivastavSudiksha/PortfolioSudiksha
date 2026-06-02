import { certifications } from '../../data/portfolio';
import { Award } from 'lucide-react';

export default function CertificationsWindow() {
  return (
    <div className="p-8 h-full overflow-auto" style={{ color: 'rgba(255,255,255,0.85)' }}>
      <div className="mb-8">
        <h2 className="text-lg font-extralight tracking-[0.2em] uppercase text-white mb-1">
          Certifications
        </h2>
        <p className="text-xs text-white/30 tracking-wider">
          Completed courses and professional certificates
        </p>
        <div className="w-full h-px bg-white/5 mt-4" />
      </div>

      <div className="grid gap-4">
        {certifications.map((cert, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-5 rounded-xl"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              transition: 'all 0.2s ease',
            }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                background: 'rgba(34,211,238,0.08)',
                border: '1px solid rgba(34,211,238,0.2)',
              }}
            >
              <Award size={18} className="text-cyan-400/70" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-light text-white/85 mb-0.5">{cert.title}</h3>
              <p className="text-xs text-white/40">
                {cert.provider} · {cert.platform}
              </p>
            </div>
            <span
              className="text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full flex-shrink-0"
              style={{
                background: 'rgba(16,185,129,0.1)',
                color: 'rgba(52,211,153,0.8)',
                border: '1px solid rgba(16,185,129,0.2)',
              }}
            >
              {cert.year}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
