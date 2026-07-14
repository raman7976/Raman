import Section from './ui/Section'
import SectionTitle from './ui/SectionTitle'
import Reveal from './ui/Reveal'
import { certifications } from '../data/certifications'
import { accentHex } from '../data/accents'
import { ExternalLink } from './ui/icons'

export default function Certifications() {
  return (
    <Section id="certifications">
      <SectionTitle kicker="// enchantments" title="Certifications" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => {
          const accent = accentHex(c.accent)
          return (
            <Reveal key={c.title} delay={(i % 3) * 0.08}>
              <a
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="mc-panel mc-press group flex h-full flex-col p-5"
              >
                <div className="flex items-start justify-between">
                  <span className="mc-slot flex h-11 w-11 items-center justify-center text-xl">
                    {c.icon}
                  </span>
                  <ExternalLink className="h-4 w-4 text-white/30 transition-colors group-hover:text-white" />
                </div>
                <h3 className="mt-4 font-mc text-[12px] uppercase leading-tight tracking-wide text-white">
                  {c.title}
                </h3>
                <div
                  className="mt-1.5 font-mc text-[10px] uppercase tracking-wide"
                  style={{ color: accent }}
                >
                  {c.issuer}
                </div>
                <p className="mt-3 flex-1 text-[12.5px] leading-relaxed text-white/55">{c.blurb}</p>
                <div className="mt-4 font-mc text-[10px] uppercase tracking-wide text-white/40 group-hover:text-grass">
                  View credential →
                </div>
              </a>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
