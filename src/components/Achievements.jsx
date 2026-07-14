import Section from './ui/Section'
import SectionTitle from './ui/SectionTitle'
import Reveal from './ui/Reveal'
import CountUp from './ui/CountUp'
import { achievements } from '../data/achievements'
import { accentHex } from '../data/accents'
import { formatIndian } from '../lib/format'

export default function Achievements() {
  return (
    <Section id="achievements">
      <SectionTitle kicker="// rare drops" title="Achievements" />
      <div className="grid gap-6 md:grid-cols-2">
        {achievements.map((a, i) => {
          const accent = accentHex(a.accent)
          const realPct = (a.value / a.total) * 100
          const barPct = Math.max(realPct, 1.5) // floor so the bar stays visible
          return (
            <Reveal key={a.title} delay={i * 0.1}>
              <div className="mc-panel relative h-full overflow-hidden p-6">
                <div className="flex items-center gap-3">
                  <span className="mc-slot flex h-12 w-12 items-center justify-center text-2xl">
                    {a.icon}
                  </span>
                  <h3 className="font-mc text-xs uppercase leading-tight tracking-wide text-white sm:text-sm">
                    {a.title}
                  </h3>
                </div>

                <div className="mt-5 flex items-end gap-4">
                  <div>
                    <div className="font-mc text-[10px] uppercase tracking-widest text-white/40">
                      {a.rankLabel}
                    </div>
                    <div className="font-pixel text-3xl sm:text-4xl" style={{ color: accent }}>
                      <CountUp to={a.value} format={formatIndian} />
                    </div>
                  </div>
                  <div className="pb-1 font-mc text-[10px] uppercase leading-relaxed tracking-wide text-white/50">
                    {a.poolLabel}
                    <br />
                    <span className="text-white/75">
                      <CountUp to={a.total} format={formatIndian} /> applicants
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-[13px] leading-relaxed text-white/60">{a.blurb}</p>

                {/* selectivity bar */}
                <div className="mt-5">
                  <div className="mc-slot h-3 w-full overflow-hidden">
                    <div className="h-full" style={{ width: `${barPct}%`, background: accent }} />
                  </div>
                  <div className="mt-1.5 font-mc text-[9px] uppercase tracking-wide text-white/35">
                    top {realPct.toFixed(realPct < 1 ? 2 : 1)}% percentile
                  </div>
                </div>

                <span className="pointer-events-none absolute -right-3 -top-5 select-none text-8xl opacity-[0.05]">
                  {a.icon}
                </span>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
