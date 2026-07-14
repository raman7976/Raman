import { useState } from 'react'
import Section from './ui/Section'
import SectionTitle from './ui/SectionTitle'
import Reveal from './ui/Reveal'
import PixelButton from './ui/PixelButton'
import { socials, codingProfiles } from '../data/socials'
import { accentHex } from '../data/accents'
import { GitHub, LinkedIn, Mail, Copy, Check, ExternalLink, Codeforces, LeetCode } from './ui/icons'

const profileIcon = { Codeforces, LeetCode }

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(socials.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard unavailable — the mailto link still works */
    }
  }

  return (
    <Section id="contact">
      <SectionTitle kicker="// open a portal" title="Let's Connect" />

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <div className="mc-panel grass-top h-full p-6 sm:p-8">
            <p className="text-sm leading-relaxed text-white/70 sm:text-base">
              Got a role, a project, or just want to talk systems and ML? My inbox is open — let’s
              build something.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-stretch">
              <a
                href={`mailto:${socials.email}`}
                className="mc-slot flex flex-1 items-center gap-3 px-4 py-3"
              >
                <Mail className="h-5 w-5 shrink-0 text-grass" />
                <span className="truncate font-mc text-[11px] tracking-wide text-white/85 sm:text-xs">
                  {socials.email}
                </span>
              </a>
              <button
                onClick={copyEmail}
                className="mc-panel mc-press flex items-center justify-center gap-2 px-4 py-3 font-mc text-[11px] uppercase tracking-wide text-white"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-grass" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" /> Copy
                  </>
                )}
              </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <PixelButton href={socials.github} target="_blank" rel="noreferrer">
                <GitHub className="h-4 w-4" /> GitHub
              </PixelButton>
              <PixelButton
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                variant="primary"
                accent="#4dd0e1"
              >
                <LinkedIn className="h-4 w-4" /> LinkedIn
              </PixelButton>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex h-full flex-col gap-4">
            <div className="font-mc text-[10px] uppercase tracking-[0.2em] text-white/40">
              Coding Profiles
            </div>
            {codingProfiles.map((cp) => {
              const accent = accentHex(cp.accent)
              const Icon = profileIcon[cp.label]
              return (
                <a
                  key={cp.label}
                  href={cp.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mc-panel mc-press group flex flex-1 items-center gap-4 p-5"
                >
                  <span
                    className="mc-slot flex h-12 w-12 shrink-0 items-center justify-center"
                    style={{ color: accent }}
                  >
                    {Icon && <Icon className="h-6 w-6" />}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="font-mc text-xs uppercase tracking-wide text-white">
                      {cp.label}
                    </div>
                    <div className="truncate text-[12px] text-white/55">
                      @{cp.handle} · {cp.note}
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 shrink-0 text-white/30 transition-colors group-hover:text-white" />
                </a>
              )
            })}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
