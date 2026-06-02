import { useState } from 'react';
import {
  FolderOpen,
  Terminal,
  Github,
  FileText,
  Mail,
  Trash2,
  BookOpen,
  Award,
  Briefcase,
} from 'lucide-react';

interface DockItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  action: string;
}

interface Props {
  onOpen: (action: string) => void;
}

const dockItems: DockItem[] = [
  { id: 'projects', label: 'Projects', icon: <FolderOpen size={26} />, action: 'projects' },
  { id: 'research', label: 'Research', icon: <BookOpen size={26} />, action: 'research' },
  { id: 'skills', label: 'Skills', icon: <Briefcase size={26} />, action: 'skills' },
  { id: 'terminal', label: 'Terminal', icon: <Terminal size={26} />, action: 'terminal' },
  { id: 'certifications', label: 'Certifications', icon: <Award size={26} />, action: 'certifications' },
  { id: 'resume', label: 'Resume', icon: <FileText size={26} />, action: 'resume' },
  { id: 'contact', label: 'Contact', icon: <Mail size={26} />, action: 'contact' },
  { id: 'github', label: 'GitHub', icon: <Github size={26} />, action: 'github' },
  { id: 'trash', label: 'Trash', icon: <Trash2 size={26} />, action: 'trash' },
];

export default function Dock({ onOpen }: Props) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  function getScale(index: number): number {
    if (hoveredIndex === null) return 1;
    const dist = Math.abs(index - hoveredIndex);
    if (dist === 0) return 1.6;
    if (dist === 1) return 1.3;
    if (dist === 2) return 1.1;
    return 1;
  }

  function getTranslateY(index: number): number {
    if (hoveredIndex === null) return 0;
    const dist = Math.abs(index - hoveredIndex);
    if (dist === 0) return -16;
    if (dist === 1) return -10;
    if (dist === 2) return -5;
    return 0;
  }

  return (
    <div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 flex items-end gap-1.5 px-4 py-2 rounded-2xl z-50"
      style={{
        background: 'rgba(255,255,255,0.06)',
        backdropFilter: 'blur(32px) saturate(200%)',
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)',
      }}
    >
      {dockItems.map((item, i) => {
        const scale = getScale(i);
        const ty = getTranslateY(i);
        return (
          <div key={item.id} className="relative flex flex-col items-center">
            {hovered === item.id && (
              <div
                className="absolute -top-8 bg-black/80 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap pointer-events-none"
                style={{
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {item.label}
              </div>
            )}
            <button
              onClick={() => onOpen(item.action)}
              onMouseEnter={() => {
                setHovered(item.id);
                setHoveredIndex(i);
              }}
              onMouseLeave={() => {
                setHovered(null);
                setHoveredIndex(null);
              }}
              className="relative flex items-center justify-center rounded-xl text-white/70 hover:text-white"
              style={{
                width: 48,
                height: 48,
                transform: `scale(${scale}) translateY(${ty}px)`,
                transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                background:
                  item.id === 'trash'
                    ? 'rgba(239,68,68,0.1)'
                    : 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: item.id === 'github' ? 'rgba(255,255,255,0.9)' : undefined,
                transformOrigin: 'bottom center',
              }}
            >
              {item.icon}
            </button>
          </div>
        );
      })}
    </div>
  );
}
