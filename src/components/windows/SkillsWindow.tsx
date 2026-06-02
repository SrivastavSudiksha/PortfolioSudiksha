import { skills } from '../../data/portfolio';

export default function SkillsWindow() {
  return (
    <div className="p-8 h-full overflow-auto" style={{ color: 'rgba(255,255,255,0.85)' }}>
      <div className="mb-8">
        <h2 className="text-lg font-extralight tracking-[0.2em] uppercase text-white mb-1">
          Skills
        </h2>
        <p className="text-xs text-white/30 tracking-wider">
          Technical proficiency across languages, tools, and domains
        </p>
        <div className="w-full h-px bg-white/5 mt-4" />
      </div>

      <div className="grid gap-8">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-xs font-light tracking-[0.3em] uppercase text-cyan-400/70 mb-4">
              {group.category}
            </h3>
            <div className="space-y-3">
              {group.items.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-light text-white/70">{skill.name}</span>
                    <span className="text-xs text-white/30">{skill.level}%</span>
                  </div>
                  <div
                    className="w-full h-1 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.05)' }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${skill.level}%`,
                        background:
                          'linear-gradient(90deg, rgba(34,211,238,0.6) 0%, rgba(34,211,238,0.9) 100%)',
                        boxShadow: '0 0 8px rgba(34,211,238,0.3)',
                        transition: 'width 1s ease',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
