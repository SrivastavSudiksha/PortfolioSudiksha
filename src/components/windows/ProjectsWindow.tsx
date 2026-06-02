import { useState } from 'react';
import { projects } from '../../data/portfolio';
import { ChevronRight, Calendar } from 'lucide-react';

interface Props {
  onOpenProject: (projectId: string) => void;
}

export default function ProjectsWindow({ onOpenProject }: Props) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="p-6 h-full overflow-auto" style={{ color: 'rgba(255,255,255,0.85)' }}>
      <div className="mb-6">
        <h2 className="text-lg font-extralight tracking-[0.2em] uppercase text-white mb-1">
          Projects
        </h2>
        <p className="text-xs text-white/30 tracking-wider">Double-click a folder to explore</p>
        <div className="w-full h-px bg-white/5 mt-4" />
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {projects.map((project) => (
          <button
            key={project.id}
            onDoubleClick={() => onOpenProject(project.id)}
            onClick={() => {}}
            onMouseEnter={() => setHovered(project.id)}
            onMouseLeave={() => setHovered(null)}
            className="text-left group"
          >
            <div
              className="p-4 rounded-xl flex flex-col gap-3"
              style={{
                background:
                  hovered === project.id
                    ? 'rgba(34,211,238,0.06)'
                    : 'rgba(255,255,255,0.03)',
                border:
                  hovered === project.id
                    ? '1px solid rgba(34,211,238,0.2)'
                    : '1px solid rgba(255,255,255,0.06)',
                transform: hovered === project.id ? 'translateY(-2px)' : 'translateY(0)',
                transition: 'all 0.2s ease',
                boxShadow:
                  hovered === project.id ? '0 8px 24px rgba(0,0,0,0.3)' : 'none',
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">📁</span>
                <span
                  className="text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-full"
                  style={{
                    background:
                      project.status === 'completed'
                        ? 'rgba(16,185,129,0.1)'
                        : 'rgba(245,158,11,0.1)',
                    color:
                      project.status === 'completed'
                        ? 'rgba(52,211,153,0.8)'
                        : 'rgba(251,191,36,0.8)',
                    border: `1px solid ${
                      project.status === 'completed'
                        ? 'rgba(16,185,129,0.2)'
                        : 'rgba(245,158,11,0.2)'
                    }`,
                  }}
                >
                  {project.status === 'completed' ? 'Complete' : 'Active'}
                </span>
              </div>
              <div>
                <h3 className="text-sm font-light text-white/90 leading-snug mb-1">
                  {project.title}
                </h3>
                <p className="text-[11px] text-white/40 leading-relaxed line-clamp-2">
                  {project.subtitle}
                </p>
              </div>
              <div className="flex flex-wrap gap-1">
                {project.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-1.5 py-0.5 rounded text-white/40"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded text-white/30">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between pt-1 border-t border-white/5">
                <span className="text-[10px] text-white/30 flex items-center gap-1">
                  <Calendar size={9} /> {project.year}
                </span>
                <span className="text-[10px] text-cyan-400/60 flex items-center gap-1 group-hover:text-cyan-400/80">
                  Open <ChevronRight size={9} />
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
