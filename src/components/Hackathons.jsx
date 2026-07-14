import Section from './ui/Section'
import SectionTitle from './ui/SectionTitle'
import Reveal from './ui/Reveal'
import { hackathons } from '../data/hackathons'
import { accentHex } from '../data/accents'

export default function Hackathons() {
  return (
    <Section id="hackathons">
      <SectionTitle kicker="// co-op mode" title="Hackathons" />
      <div className="grid gap-6 md:grid-cols-2">
        {hackathons.map((h, i) => {
          const accent = accentHex(h.accent)
          return (
            <Reveal key={h.name} delay={i * 0.1}>
              <div className="mc-panel h-full p-6">
                <div className="flex items-center gap-3">
                  <span className="mc-slot flex h-12 w-12 items-center justify-center text-2xl">
                    {h.icon}
                  </span>
                  <div>
                    <h3 className="font-mc text-xs uppercase tracking-wide text-white sm:text-sm">
                      {h.name}
                    </h3>
                    <div
                      className="mt-1.5 inline-block px-2 py-0.5 font-mc text-[9px] uppercase tracking-widest"
                      style={{ color: accent, border: `1px solid ${accent}55` }}
                    >
                      {h.role}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-[13px] leading-relaxed text-white/65">{h.blurb}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
