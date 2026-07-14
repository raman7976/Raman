import Reveal from './ui/Reveal'
import TechBadge from './ui/TechBadge'
import PixelButton from './ui/PixelButton'
import { featuredProject as p } from '../data/projects'
import { GitHub, ArrowRight, Check } from './ui/icons'
import { accentHex } from '../data/accents'

export default function FeaturedProject() {
  const accent = accentHex(p.accent)

  return (
    <Reveal>
      <div className="mc-panel grass-top relative overflow-hidden p-6 sm:p-8">
        {/* header */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="mc-slot flex h-12 w-12 items-center justify-center text-2xl">
            {p.icon}
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="border border-grass/40 px-2 py-0.5 font-mc text-[10px] uppercase tracking-widest text-grass">
                ★ {p.badge}
              </span>
              <span className="font-mc text-[10px] uppercase tracking-wide text-white/40">
                SDE Focus
              </span>
            </div>
            <h3 className="mt-1.5 font-pixel text-sm text-white sm:text-lg">{p.name}</h3>
          </div>
        </div>

        <p className="mt-4 font-mc text-[11px] uppercase tracking-wide text-diamond">{p.tagline}</p>

        <div className="mt-5 grid gap-7 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="text-sm leading-relaxed text-white/70">{p.blurb}</p>

            <div className="mt-6 font-mc text-[10px] uppercase tracking-[0.2em] text-white/40">
              Architecture
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-y-2">
              {p.flow.map((step, i) => (
                <span key={step} className="flex items-center">
                  <span className="mc-slot px-2.5 py-1.5 font-mc text-[9px] uppercase tracking-wide text-white/75">
                    {step}
                  </span>
                  {i < p.flow.length - 1 && (
                    <ArrowRight className="mx-1.5 h-3 w-3 shrink-0 text-grass/60" />
                  )}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3 font-mc text-[10px] uppercase tracking-[0.2em] text-white/40">
              Highlights
            </div>
            <ul className="space-y-2">
              {p.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2 text-[13px] leading-snug text-white/70"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-grass" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <TechBadge key={t}>{t}</TechBadge>
          ))}
        </div>

        <div className="mt-7">
          <PixelButton
            href={p.repo}
            target="_blank"
            rel="noreferrer"
            variant="primary"
            accent={accent}
          >
            <GitHub className="h-4 w-4" /> View on GitHub <ArrowRight className="h-4 w-4" />
          </PixelButton>
        </div>

        {/* faint oversized watermark */}
        <span className="pointer-events-none absolute -right-5 -top-8 select-none text-[128px] leading-none opacity-[0.04]">
          {p.icon}
        </span>
      </div>
    </Reveal>
  )
}
