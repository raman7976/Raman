import Section from './ui/Section'
import SectionTitle from './ui/SectionTitle'
import Reveal from './ui/Reveal'
import TechBadge from './ui/TechBadge'

const stack = [
  { group: 'Core', items: ['Full-Stack Development', 'REST API Design', 'Distributed Systems', 'Database Design', 'Auth & Authorization', 'Automated Testing', 'Technical Docs', 'Low-Level Design'] },
  { group: 'Languages', items: ['C++', 'Java', 'JavaScript', 'SQL'] },
  { group: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS'] },
  { group: 'Backend', items: ['Node.js', 'Express.js', 'RESTful APIs', 'Socket.IO', 'JWT'] },
  { group: 'Databases', items: ['PostgreSQL', 'MySQL', 'Redis', 'Caching Strategies', 'Schema Design'] },
  { group: 'Foundations', items: ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks', 'System Design'] },
  { group: 'ML & AI', items: ['scikit-learn', 'NLP', 'OpenCV', 'Strands', 'Ollama', 'Gemini'] },
]

function PixelAvatar() {
  return (
    <svg viewBox="0 0 16 16" className="h-full w-full" shapeRendering="crispEdges" aria-hidden="true">
      {/* diamond helmet */}
      <rect x="3" y="2" width="10" height="3" fill="#4dd0e1" />
      <rect x="2" y="3" width="1" height="9" fill="#3aa9b8" />
      <rect x="13" y="3" width="1" height="9" fill="#3aa9b8" />
      <rect x="3" y="5" width="1" height="7" fill="#4dd0e1" />
      <rect x="12" y="5" width="1" height="7" fill="#4dd0e1" />
      <rect x="4" y="3" width="2" height="1" fill="#9aeaf3" />
      {/* face */}
      <rect x="4" y="5" width="8" height="7" fill="#16181d" />
      {/* eyes */}
      <rect x="5" y="7" width="2" height="2" fill="#54cf4e" />
      <rect x="9" y="7" width="2" height="2" fill="#54cf4e" />
      {/* mouth */}
      <rect x="6" y="10" width="4" height="1" fill="#2a2d34" />
      {/* shoulders */}
      <rect x="2" y="12" width="12" height="4" fill="#2a2d34" />
      <rect x="2" y="12" width="12" height="1" fill="#3a3f48" />
      <rect x="7" y="12" width="2" height="4" fill="#54cf4e" opacity="0.85" />
    </svg>
  )
}

export default function About() {
  return (
    <Section id="about">
      <SectionTitle kicker="// player profile" title="About Me" />

      <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-10">
        <Reveal className="mx-auto w-full max-w-[220px]">
          <div className="mc-panel grass-top p-4">
            <div className="mc-slot aspect-square p-3">
              <PixelAvatar />
            </div>
            <div className="mt-3 text-center">
              <div className="font-pixel text-[11px] text-white">Raman Singh</div>
              <div className="mt-1.5 font-mc text-[10px] uppercase tracking-wide text-grass">
                SDE · ML
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <div className="mc-panel space-y-4 p-5 sm:p-6">
              <p className="text-sm leading-relaxed text-white/75 sm:text-base">
                Software Developer driven by the challenge of designing resilient architectures
                capable of managing users at scale. Passionate about translating complex user
                requirements into seamless, high-performance features, with hands-on experience
                building and optimizing production-ready web applications from the ground up. Driven
                by a profound interest in the software engineering lifecycle, I derive genuine
                satisfaction from transforming complex architectural concepts into scalable systems.
              </p>
              <p className="text-sm leading-relaxed text-white/75 sm:text-base">
                I’ve shipped fintech features through industry internships, placed{' '}
                <span className="text-gold">Top 3000 at Amazon ML Summer School</span> and{' '}
                <span className="text-gold">Top 50 at HackRx 6.0</span>, and I’m just as comfortable
                with distributed systems as with machine learning.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-6">
            <div className="mc-panel p-5 sm:p-6">
              <div className="mb-4 font-mc text-[11px] uppercase tracking-[0.2em] text-white/45">
                Inventory · Tech Stack
              </div>
              <div className="space-y-3.5">
                {stack.map((row) => (
                  <div key={row.group} className="flex flex-col gap-2 sm:flex-row sm:items-start">
                    <div className="w-32 shrink-0 pt-1 font-mc text-[10px] uppercase tracking-wide text-grass/80">
                      {row.group}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {row.items.map((t) => (
                        <TechBadge key={t}>{t}</TechBadge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
