import { socials } from '../data/socials'
import GrassBlock from './ui/GrassBlock'
import { GitHub, LinkedIn, Codeforces, LeetCode, Mail } from './ui/icons'
import { scrollToId } from '../hooks/useScrollSpy'

const links = [
  { href: socials.github, Icon: GitHub, label: 'GitHub' },
  { href: socials.linkedin, Icon: LinkedIn, label: 'LinkedIn' },
  { href: socials.codeforces, Icon: Codeforces, label: 'Codeforces' },
  { href: socials.leetcode, Icon: LeetCode, label: 'LeetCode' },
  { href: `mailto:${socials.email}`, Icon: Mail, label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="relative z-10 border-t-[3px] border-black/60 bg-ink/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 sm:flex-row sm:justify-between">
        <button
          onClick={() => scrollToId('home')}
          className="mc-press flex items-center gap-2.5"
          aria-label="Back to top"
        >
          <GrassBlock className="h-7 w-7" />
          <span className="font-pixel text-[11px] text-white">Raman Singh</span>
        </button>

        <div className="flex items-center gap-2.5">
          {links.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
              className="mc-panel mc-press flex h-10 w-10 items-center justify-center text-white/65 hover:text-grass"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/5 py-4 text-center">
        <p className="font-mc text-[10px] uppercase tracking-wide text-white/35">
          Built with React + a lot of blocks ⛏ · © {new Date().getFullYear()} Raman Singh
        </p>
      </div>
    </footer>
  )
}
