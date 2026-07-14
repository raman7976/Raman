import { useRef } from 'react'
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'
import Section from './ui/Section'
import SectionTitle from './ui/SectionTitle'
import Reveal from './ui/Reveal'
import TechBadge from './ui/TechBadge'
import { experience } from '../data/experience'
import { accentHex } from '../data/accents'

export default function Experience() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 75%', 'end 65%'],
  })
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <Section id="experience">
      <SectionTitle kicker="// quest log" title="Experience" />

      <div ref={ref} className="relative">
        {/* timeline track + scroll-driven fill */}
        <div className="absolute bottom-3 left-[6px] top-3 w-[3px] bg-white/10 sm:left-[7px]" />
        <motion.div
          className="absolute bottom-3 left-[6px] top-3 w-[3px] origin-top bg-grass sm:left-[7px]"
          style={{ scaleY: reduce ? 1 : scaleY }}
        />

        <div className="space-y-8">
          {experience.map((e, i) => {
            const accent = accentHex(e.accent)
            return (
              <Reveal key={e.company} delay={i * 0.05}>
                <div className="flex gap-4 sm:gap-6">
                  <div className="relative w-4 shrink-0">
                    <span
                      className="absolute left-1/2 top-1.5 h-4 w-4 -translate-x-1/2 border-2"
                      style={{
                        background: accent,
                        borderColor: '#0a0a0b',
                        boxShadow: `0 0 0 3px ${accent}33`,
                      }}
                    />
                  </div>

                  <div className="mc-panel flex-1 p-5 sm:p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <h3 className="font-mc text-sm uppercase tracking-wide text-white">
                        {e.role}
                      </h3>
                      <span className="font-mc text-[10px] uppercase tracking-wide text-white/45">
                        {e.period}
                      </span>
                    </div>
                    <div
                      className="mt-1 font-mc text-[11px] uppercase tracking-wide"
                      style={{ color: accent }}
                    >
                      {e.company}
                    </div>

                    <ul className="mt-4 space-y-2">
                      {e.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex items-start gap-2.5 text-[13px] leading-relaxed text-white/65"
                        >
                          <span
                            className="mt-1.5 h-1.5 w-1.5 shrink-0"
                            style={{ background: accent }}
                          />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {e.tech.map((t) => (
                        <TechBadge key={t}>{t}</TechBadge>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
