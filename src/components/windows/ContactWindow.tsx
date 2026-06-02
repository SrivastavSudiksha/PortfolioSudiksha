import { Mail, Github, Linkedin, MapPin, ExternalLink } from 'lucide-react';

export default function ContactWindow() {
  return (
    <div className="p-8 h-full overflow-auto" style={{ color: 'rgba(255,255,255,0.85)' }}>
      <div className="mb-8">
        <h2 className="text-lg font-extralight tracking-[0.2em] uppercase text-white mb-1">
          Contact
        </h2>
        <p className="text-xs text-white/30 tracking-wider">Get in touch — open to opportunities</p>
        <div className="w-full h-px bg-white/5 mt-4" />
      </div>

      {/* Contact links */}
      <div className="grid gap-4 mb-10">
        {[
          {
            icon: <Mail size={18} />,
            label: 'Email',
            value: 'sudiksha241206@gmail.com',
            href: 'mailto:sudiksha241206@gmail.com',
            hint: 'Best for opportunities and collaborations',
          },
          {
            icon: <Github size={18} />,
            label: 'GitHub',
            value: 'github.com/sudiksha',
            href: 'https://github.com',
            hint: 'Open source work and project repos',
          },
          {
            icon: <Linkedin size={18} />,
            label: 'LinkedIn',
            value: 'linkedin.com/in/sudiksha',
            href: 'https://linkedin.com',
            hint: 'Professional profile and updates',
          },
          {
            icon: <MapPin size={18} />,
            label: 'Location',
            value: 'Noida, India',
            href: null,
            hint: 'Open to remote and hybrid opportunities',
          },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-4 p-5 rounded-xl"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-cyan-400/70"
              style={{
                background: 'rgba(34,211,238,0.06)',
                border: '1px solid rgba(34,211,238,0.15)',
              }}
            >
              {item.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-white/30 tracking-wider uppercase mb-0.5">{item.label}</p>
              <p className="text-sm text-white/80 font-light">{item.value}</p>
              <p className="text-xs text-white/30 mt-0.5">{item.hint}</p>
            </div>
            {item.href && (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-cyan-400/70 transition-colors"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Open to */}
      <div>
        <h3 className="text-xs font-light tracking-[0.3em] uppercase text-cyan-400/70 mb-4">
          Currently Open To
        </h3>
        <div className="flex flex-wrap gap-2">
          {[
            'Research Internships',
            'ML Engineering Roles',
            'Open Source Collaboration',
            'Paper Co-authorship',
            'Technical Mentorship',
            'Startup Projects',
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-full text-xs text-white/60"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
