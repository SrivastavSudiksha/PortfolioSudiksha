export type Phase = 'welcome' | 'audience' | 'desktop';

export type AudienceType = 'recruiter' | 'collaborator' | 'developer' | 'researcher';

export type WindowType =
  | 'resume'
  | 'experience'
  | 'skills'
  | 'projects'
  | 'certifications'
  | 'research'
  | 'contact'
  | 'terminal'
  | 'project-detail';

export interface WindowState {
  id: string;
  type: WindowType;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
  isMinimized: boolean;
  isMaximized: boolean;
  data?: Record<string, unknown>;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tech: string[];
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  impact: string[];
  learnings: string[];
  future: string[];
  github?: string;
  live?: string;
  status: 'Completed' | 'In Progress';
  year: string;
}

export interface Skill {
  category: string;
  items: { name: string; level: number }[];
}

export interface Experience {
  title: string;
  org: string;
  period: string;
  location: string;
  type: 'education' | 'position';
  bullets: string[];
}

export interface Certification {
  title: string;
  provider: string;
  year: string;
  platform: string;
}
