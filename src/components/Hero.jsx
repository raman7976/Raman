import { motion, useReducedMotion } from 'framer-motion'
import PixelButton from './ui/PixelButton'
import { socials } from '../data/socials'
import { scrollToId } from '../hooks/useScrollSpy'
import { GitHub, LinkedIn, Codeforces, LeetCode, Mail, ArrowDown } from './ui/icons'

const stats = ['Top 50 · HackRx 6.0', 'Top 3000 · Amazon ML', '8 Public Projects', 'Full-Stack + ML']

const socialLinks = [
  { label: 'GitHub', href: socials.github, Icon: GitHub },
  { label: 'LinkedIn', href: socials.linkedin, Icon: LinkedIn },
  { label: 'Codeforces', href: socials.codeforces, Icon: Codeforces },
  { label: 'LeetCode', href: socials.leetcode, Icon: LeetCode },
  { label: 'Email', href: `mailto:${socials.email}`, Icon: Mail },
]

function NameLine({ text, delayBase, reduce }) {
  return (
    <div className="flex justify-center" style={{ perspective: 600 }}>
      {text.split('').map((ch, i) => (
        <motion.span
          key={i}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: -70, rotateX: -90 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: delayBase + i * 0.07, type: 'spring', stiffness: 240, damping: 15 }}
          className="font-pixel text-[2.4rem] leading-none text-white sm:text-6xl md:text-7xl"
          style={{ textShadow: '4px 4px 0 rgba(0,0,0,0.7)' }}
        >
          {ch}
        </motion.span>
      ))}
    </div>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center px-5 pb-20 pt-28"
    >
      <div className="mx-auto w-full max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-6 font-term text-lg text-grass/90 sm:text-xl"
        >
          <span className="text-white/35">$</span> whoami<span className="blink">_</span>
        </motion.p>

        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <NameLine text="RAMAN" delayBase={0.2} reduce={reduce} />
          <NameLine text="SINGH" delayBase={0.55} reduce={reduce} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <p className="mt-8 font-mc text-sm uppercase tracking-[0.2em] text-grass text-glow-grass sm:text-base">
            Software Development Engineer
          </p>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/60 sm:text-base">
            Building scalable, real-time systems — with a Machine Learning edge.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-2.5"
        >
          {stats.map((s) => (
            <span
              key={s}
              className="mc-slot px-3 py-1.5 font-mc text-[9px] uppercase tracking-wide text-white/75 sm:text-[11px]"
            >
              {s}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <PixelButton as="button" onClick={() => scrollToId('projects')} variant="primary">
            View Projects
          </PixelButton>
          <PixelButton href={socials.github} target="_blank" rel="noreferrer">
            <GitHub className="h-4 w-4" /> GitHub
          </PixelButton>
          <PixelButton href={`mailto:${socials.email}`}>
            <Mail className="h-4 w-4" /> Email
          </PixelButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.45 }}
          className="mt-8 flex items-center justify-center gap-2.5"
        >
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
              className="mc-panel mc-press flex h-11 w-11 items-center justify-center text-white/70 hover:text-grass"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>
      </div>

      <button
        onClick={() => scrollToId('about')}
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5 text-white/40 hover:text-grass"
      >
        <span className="font-mc text-[9px] uppercase tracking-[0.25em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bob" />
      </button>
    </section>
  )
}
