import Section from './ui/Section'
import SectionTitle from './ui/SectionTitle'
import Reveal from './ui/Reveal'
import { leadership } from '../data/leadership'
import { accentHex } from '../data/accents'

export default function Leadership() {
  return (
    <Section id="leadership">
      <SectionTitle kicker="// party roles" title="Leadership" />
      <div className="grid gap-6 md:grid-cols-2">
        {leadership.map((l, i) => {
          const accent = accentHex(l.accent)
          return (
            <Reveal key={l.title} delay={i * 0.1}>
              <div className="mc-panel flex h-full items-start gap-4 p-6">
                <span className="mc-slot flex h-12 w-12 shrink-0 items-center justify-center text-2xl">
                  {l.icon}
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="font-mc text-sm uppercase tracking-wide text-white">{l.title}</h3>
                    <span
                      className="font-mc text-[10px] uppercase tracking-wide"
                      style={{ color: accent }}
                    >
                      {l.period}
                    </span>
                  </div>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-white/65">{l.blurb}</p>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
