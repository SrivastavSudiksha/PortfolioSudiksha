import { projects } from '../../data/portfolio';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface Props {
  projectId: string;
}

export default function ProjectDetailWindow({ projectId }: Props) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return <div className="p-6 text-white/40">Project not found.</div>;

  return (
    <div className="p-8 h-full overflow-auto" style={{ color: 'rgba(255,255,255,0.85)' }}>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h2 className="text-2xl font-extralight tracking-wider text-white mb-2">
              {project.title}
            </h2>
            <p className="text-sm text-white/50 font-light">{project.subtitle}</p>
          </div>
          <span
            className="text-[10px] tracking-widest uppercase px-3 py-1 rounded-full flex-shrink-0"
            style={{
              background:
                project.status === 'completed'
                  ? 'rgba(16,185,129,0.1)'
                  : 'rgba(245,158,11,0.1)',
              color:
                project.status === 'completed'
                  ? 'rgba(52,211,153,0.9)'
                  : 'rgba(251,191,36,0.9)',
              border: `1px solid ${
                project.status === 'completed'
                  ? 'rgba(16,185,129,0.25)'
                  : 'rgba(245,158,11,0.25)'
              }`,
            }}
          >
            {project.status === 'completed' ? 'Completed' : 'In Progress'}
          </span>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-md text-white/60"
              style={{
                background: 'rgba(34,211,238,0.06)',
                border: '1px solid rgba(34,211,238,0.15)',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-light tracking-wider text-white"
              style={{
                background: 'rgba(34,211,238,0.1)',
                border: '1px solid rgba(34,211,238,0.3)',
                transition: 'all 0.2s ease',
              }}
            >
              <ExternalLink size={12} /> Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-light tracking-wider text-white/70"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.2s ease',
              }}
            >
              <Github size={12} /> GitHub
            </a>
          )}
        </div>
      </div>

      <div className="w-full h-px bg-white/5 mb-8" />

      {/* Sections */}
      <div className="grid gap-8">
        <Section title="Overview" content={project.overview} />
        <Section title="Problem" content={project.problem} />
        <Section title="Solution" content={project.solution} />

        <div>
          <h3 className="text-xs font-light tracking-[0.3em] uppercase text-cyan-400/70 mb-3">
            Architecture
          </h3>
          <div
            className="p-4 rounded-lg text-xs text-white/60 font-mono leading-relaxed"
            style={{
              background: 'rgba(34,211,238,0.04)',
              border: '1px solid rgba(34,211,238,0.1)',
            }}
          >
            {project.architecture.split(' → ').map((step, i, arr) => (
              <span key={i}>
                <span className="text-cyan-400/80">{step}</span>
                {i < arr.length - 1 && (
                  <span className="text-white/30 mx-2">
                    <ArrowRight size={10} className="inline" />
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>

        <ListSection title="Impact" items={project.impact} color="emerald" />
        <ListSection title="Key Learnings" items={project.learnings} color="amber" />
        <ListSection title="Future Improvements" items={project.future} color="cyan" />
      </div>
    </div>
  );
}

function Section({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <h3 className="text-xs font-light tracking-[0.3em] uppercase text-cyan-400/70 mb-3">
        {title}
      </h3>
      <p className="text-sm text-white/60 leading-relaxed font-light">{content}</p>
    </div>
  );
}

function ListSection({
  title,
  items,
  color,
}: {
  title: string;
  items: string[];
  color: 'emerald' | 'amber' | 'cyan';
}) {
  const colors = {
    emerald: 'rgba(52,211,153,0.6)',
    amber: 'rgba(251,191,36,0.6)',
    cyan: 'rgba(34,211,238,0.6)',
  };

  return (
    <div>
      <h3 className="text-xs font-light tracking-[0.3em] uppercase text-cyan-400/70 mb-3">
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-white/60 font-light">
            <span
              className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: colors[color] }}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
