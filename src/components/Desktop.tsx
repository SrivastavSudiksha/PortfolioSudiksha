import { useState, useCallback } from 'react';
import type { AudienceType, WindowState, WindowType } from '../types';
import TopBar from './TopBar';
import Dock from './Dock';
import DesktopIcon from './DesktopIcon';
import Window from './Window';
import ProjectsWindow from './windows/ProjectsWindow';
import ProjectDetailWindow from './windows/ProjectDetailWindow';
import ResumeWindow from './windows/ResumeWindow';
import SkillsWindow from './windows/SkillsWindow';
import ExperienceWindow from './windows/ExperienceWindow';
import ResearchWindow from './windows/ResearchWindow';
import CertificationsWindow from './windows/CertificationsWindow';
import ContactWindow from './windows/ContactWindow';
import TerminalWindow from './windows/TerminalWindow';

interface Props {
  audience: AudienceType;
}

const WALLPAPER_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4';

const ALL_ICONS = [
  { icon: '📄', label: 'Resume', action: 'resume' },
  { icon: '💼', label: 'Experience', action: 'experience' },
  { icon: '🛠', label: 'Skills', action: 'skills' },
  { icon: '📁', label: 'Projects', action: 'projects' },
  { icon: '🏆', label: 'Certifications', action: 'certifications' },
  { icon: '🔬', label: 'Research', action: 'research' },
  { icon: '✉️', label: 'Contact', action: 'contact' },
  { icon: '🖥', label: 'Terminal', action: 'terminal' },
];

const AUDIENCE_ICONS: Record<AudienceType, string[]> = {
  recruiter: ['resume', 'projects', 'skills', 'experience', 'certifications', 'contact'],
  collaborator: ['research', 'projects', 'contact', 'experience', 'skills', 'terminal'],
  developer: ['projects', 'terminal', 'skills', 'research', 'experience', 'resume'],
  researcher: ['research', 'projects', 'experience', 'certifications', 'skills', 'contact'],
};

let windowCounter = 0;

function makeWindow(
  type: WindowType,
  title: string,
  data?: Record<string, unknown>
): WindowState {
  windowCounter++;
  const offset = (windowCounter % 6) * 30;
  return {
    id: `win-${Date.now()}-${windowCounter}`,
    type,
    title,
    x: 80 + offset,
    y: 60 + offset,
    width: 760,
    height: 520,
    zIndex: 100 + windowCounter,
    isMinimized: false,
    isMaximized: false,
    data,
  };
}

export default function Desktop({ audience }: Props) {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [, setMaxZ] = useState(100);

  const priorityActions = AUDIENCE_ICONS[audience];
  const icons = ALL_ICONS.filter((ic) => priorityActions.includes(ic.action));

  function openWindow(action: string) {
    if (action === 'github') {
      window.open('https://github.com', '_blank');
      return;
    }
    if (action === 'trash') return;

    // Check if already open
    const existing = windows.find((w) => w.type === (action as WindowType) && !w.data);
    if (existing) {
      focusWindow(existing.id);
      if (existing.isMinimized) {
        setWindows((prev) =>
          prev.map((w) => (w.id === existing.id ? { ...w, isMinimized: false } : w))
        );
      }
      return;
    }

    const titles: Record<string, string> = {
      resume: 'Resume',
      experience: 'Experience & Education',
      skills: 'Skills',
      projects: 'Projects',
      certifications: 'Certifications',
      research: 'Research',
      contact: 'Contact',
      terminal: 'Terminal',
    };

    const win = makeWindow(action as WindowType, titles[action] || action);
    setWindows((prev) => [...prev, win]);
    setMaxZ((z) => z + 1);
  }

  function openProjectDetail(projectId: string) {
    const win = makeWindow('project-detail', `Project — ${projectId}`, { projectId });
    setWindows((prev) => [...prev, win]);
    setMaxZ((z) => z + 1);
  }

  const focusWindow = useCallback(
    (id: string) => {
      setMaxZ((z) => {
        const newZ = z + 1;
        setWindows((prev) =>
          prev.map((w) => (w.id === id ? { ...w, zIndex: newZ } : w))
        );
        return newZ;
      });
    },
    []
  );

  const closeWindow = useCallback((id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  }, []);

  const moveWindow = useCallback((id: string, x: number, y: number) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, x, y } : w)));
  }, []);

  const resizeWindow = useCallback((id: string, width: number, height: number) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, width, height } : w)));
  }, []);

  const minimizeWindow = useCallback((id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isMinimized: true } : w))
    );
  }, []);

  const maximizeWindow = useCallback((id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isMaximized: !w.isMaximized } : w))
    );
  }, []);

  function renderWindowContent(win: WindowState) {
    switch (win.type) {
      case 'projects':
        return <ProjectsWindow onOpenProject={openProjectDetail} />;
      case 'project-detail':
        return <ProjectDetailWindow projectId={win.data?.projectId as string} />;
      case 'resume':
        return <ResumeWindow />;
      case 'skills':
        return <SkillsWindow />;
      case 'experience':
        return <ExperienceWindow />;
      case 'research':
        return <ResearchWindow />;
      case 'certifications':
        return <CertificationsWindow />;
      case 'contact':
        return <ContactWindow />;
      case 'terminal':
        return <TerminalWindow />;
      default:
        return (
          <div className="p-6 text-white/40 text-sm font-light">
            Content for {win.type} coming soon.
          </div>
        );
    }
  }

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      {/* Wallpaper video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src={WALLPAPER_URL} type="video/mp4" />
      </video>

      {/* Dark cinematic overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.7) 100%)',
          zIndex: 1,
        }}
      />

      {/* Top bar */}
      <div style={{ position: 'relative', zIndex: 50 }}>
        <TopBar audience={audience} onOpenWindow={openWindow} />
      </div>

      {/* Desktop icons */}
      <div
        className="absolute left-6 flex flex-col gap-5 flex-wrap"
        style={{ top: 48, zIndex: 10, maxHeight: 'calc(100vh - 140px)' }}
      >
        {icons.map((ic) => (
          <DesktopIcon
            key={ic.action}
            icon={ic.icon}
            label={ic.label}
            onDoubleClick={() => openWindow(ic.action)}
          />
        ))}
      </div>

      {/* Windows */}
      {windows.map((win) => (
        <Window
          key={win.id}
          window={win}
          onClose={closeWindow}
          onFocus={focusWindow}
          onMove={moveWindow}
          onResize={resizeWindow}
          onMinimize={minimizeWindow}
          onMaximize={maximizeWindow}
        >
          {renderWindowContent(win)}
        </Window>
      ))}

      {/* Dock */}
      <div style={{ position: 'relative', zIndex: 50 }}>
        <Dock onOpen={openWindow} />
      </div>
    </div>
  );
}
