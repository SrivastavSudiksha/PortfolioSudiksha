import { useState, useEffect } from 'react';
import type { AudienceType } from '../types';

interface Props {
  onSelect: (type: AudienceType) => void;
}

const profiles: {
  id: AudienceType;
  icon: string;
  label: string;
  description: string;
  tags: string[];
}[] = [
  {
    id: 'recruiter',
    icon: '👩‍💼',
    label: 'Recruiter',
    description: "Evaluate Sudiksha's professional profile — projects, measurable impact, skills, experience, and resume.",
    tags: ['Resume', 'Projects', 'Skills', 'Achievements'],
  },
  {
    id: 'collaborator',
    icon: '🤝',
    label: 'Collaborator',
    description: 'Explore research interests, ongoing work, and opportunities to build something meaningful together.',
    tags: ['Research', 'Ongoing Work', 'Ideas', 'Contact'],
  },
  {
    id: 'developer',
    icon: '💻',
    label: 'Fellow Developer',
    description: 'Deep-dive into architecture decisions, tech stacks, code, and the engineering behind each system.',
    tags: ['Architecture', 'GitHub', 'Stack', 'Terminal'],
  },
  {
    id: 'researcher',
    icon: '🔬',
    label: 'Researcher',
    description: 'Examine experiments, AI applications, methodologies, and future directions of exploration.',
    tags: ['Experiments', 'AI Research', 'Publications', 'Methods'],
  },
];

export default function AudienceSelection({ onSelect }: Props) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<AudienceType | null>(null);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050505 0%, #090912 100%)' }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Heading */}
      <div
        className="text-center mb-12 z-10"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(-20px)',
          transition: 'all 0.8s ease 0.2s',
        }}
      >
        <p className="text-xs tracking-[0.4em] uppercase text-white/30 mb-4">Sudiksha Workspace</p>
        <h1 className="text-3xl font-extralight text-white tracking-[0.15em]">Choose Your Experience</h1>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mx-auto mt-4" />
      </div>

      {/* Profile cards */}
      <div
        className="grid grid-cols-2 gap-5 max-w-3xl w-full px-6 z-10 lg:grid-cols-4"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s ease 0.4s',
        }}
      >
        {profiles.map((profile) => (
          <button
            key={profile.id}
            onClick={() => onSelect(profile.id)}
            onMouseEnter={() => setHovered(profile.id)}
            onMouseLeave={() => setHovered(null)}
            className="group relative flex flex-col items-center gap-4 p-6 rounded-2xl text-left cursor-pointer"
            style={{
              background: hovered === profile.id ? 'rgba(34,211,238,0.06)' : 'rgba(255,255,255,0.02)',
              border:
                hovered === profile.id
                  ? '1px solid rgba(34,211,238,0.3)'
                  : '1px solid rgba(255,255,255,0.06)',
              backdropFilter: 'blur(12px)',
              transform:
                hovered === profile.id ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)',
              boxShadow:
                hovered === profile.id
                  ? '0 20px 60px rgba(34,211,238,0.1), 0 0 0 1px rgba(34,211,238,0.1)'
                  : 'none',
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <div
              className="text-4xl w-16 h-16 flex items-center justify-center rounded-xl"
              style={{
                background:
                  hovered === profile.id ? 'rgba(34,211,238,0.1)' : 'rgba(255,255,255,0.04)',
                transition: 'all 0.3s ease',
              }}
            >
              {profile.icon}
            </div>

            <div className="text-center w-full">
              <h3 className="text-base font-light text-white tracking-wider mb-2">{profile.label}</h3>
              <p className="text-xs text-white/40 leading-relaxed font-light mb-3">
                {profile.description}
              </p>
              <div className="flex flex-wrap gap-1 justify-center">
                {profile.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full"
                    style={{
                      background: 'rgba(34,211,238,0.08)',
                      color: 'rgba(34,211,238,0.6)',
                      border: '1px solid rgba(34,211,238,0.15)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>

      <p
        className="mt-10 text-xs text-white/20 tracking-widest uppercase z-10"
        style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.8s ease 0.8s' }}
      >
        Select to personalize your experience
      </p>
    </div>
  );
}
