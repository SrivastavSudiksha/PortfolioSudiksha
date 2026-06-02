import { experience } from '../../data/portfolio';
import { GraduationCap, Briefcase, MapPin, Calendar } from 'lucide-react';

export default function ExperienceWindow() {
  return (
    <div className="p-8 h-full overflow-auto" style={{ color: 'rgba(255,255,255,0.85)' }}>
      <div className="mb-8">
        <h2 className="text-lg font-extralight tracking-[0.2em] uppercase text-white mb-1">
          Experience & Education
        </h2>
        <p className="text-xs text-white/30 tracking-wider">Academic background and positions</p>
        <div className="w-full h-px bg-white/5 mt-4" />
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div
          className="absolute left-4 top-0 bottom-0 w-px"
          style={{ background: 'rgba(255,255,255,0.06)' }}
        />

        <div className="space-y-8 pl-12">
          {experience.map((item, i) => (
            <div key={i} className="relative">
              {/* Dot */}
              <div
                className="absolute -left-12 top-0 w-8 h-8 rounded-full flex items-center justify-center"
                style={{
                  background: 'rgba(34,211,238,0.08)',
                  border: '1px solid rgba(34,211,238,0.2)',
                }}
              >
                {item.type === 'education' ? (
                  <GraduationCap size={14} className="text-cyan-400/70" />
                ) : (
                  <Briefcase size={14} className="text-cyan-400/70" />
                )}
              </div>

              {/* Card */}
              <div
                className="p-5 rounded-xl"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-sm font-light text-white/90 mb-0.5">{item.title}</h3>
                    <p className="text-xs text-cyan-400/60">{item.org}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-xs text-white/40 flex items-center gap-1 justify-end mb-1">
                      <Calendar size={10} /> {item.period}
                    </p>
                    <p className="text-xs text-white/30 flex items-center gap-1 justify-end">
                      <MapPin size={10} /> {item.location}
                    </p>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {item.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-white/50 font-light">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-400/40 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
