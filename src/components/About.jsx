import Section from './ui/Section'
import SectionTitle from './ui/SectionTitle'
import Reveal from './ui/Reveal'
import TechBadge from './ui/TechBadge'

const stack = [
  { group: 'Languages', items: ['Python', 'JavaScript', 'Swift', 'C++', 'SQL'] },
  { group: 'Frontend', items: ['React', 'Vite', 'Tailwind', 'SwiftUI'] },
  { group: 'Backend', items: ['Node', 'Express', 'Django', 'Flask'] },
  { group: 'Data & Infra', items: ['PostgreSQL', 'Redis', 'MongoDB', 'Docker', 'nginx'] },
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
                Hi, I’m <span className="font-semibold text-white">Raman</span> — a Software
                Development Engineer who likes turning hard systems problems into clean, scalable
                products. My capstone is a horizontally-scalable, real-time event-booking platform
                that <span className="text-grass">never double-books a seat</span>, and I build
                across fintech, agentic AI, and full-stack web.
              </p>
              <p className="text-sm leading-relaxed text-white/75 sm:text-base">
                I’ve shipped iOS apps and fintech features through industry internships, placed{' '}
                <span className="text-gold">Top 50 at HackRx 6.0</span> and{' '}
                <span className="text-gold">Top 3000 at Amazon ML Summer School</span>, and I’m just
                as comfortable with distributed systems as with machine learning.
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
