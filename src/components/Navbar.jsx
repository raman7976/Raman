import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navSections } from '../data/nav'
import { useScrollSpy, scrollToId } from '../hooks/useScrollSpy'
import GrassBlock from './ui/GrassBlock'

const ids = navSections.map((s) => s.id)

export default function Navbar() {
  const active = useScrollSpy(ids)
  const [open, setOpen] = useState(false)

  const go = (id) => {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b-[3px] border-black/60 bg-night/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <button onClick={() => go('home')} className="mc-press flex items-center gap-2.5">
            <GrassBlock className="h-8 w-8" />
            <span className="font-pixel text-xs text-white sm:text-sm">
              Raman<span className="text-grass">.</span>
            </span>
          </button>

          {/* desktop links */}
          <ul className="hidden items-center gap-0.5 lg:flex">
            {navSections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => go(s.id)}
                  className={`relative px-2.5 py-1.5 font-mc text-[11px] uppercase tracking-wide transition-colors ${
                    active === s.id ? 'text-grass' : 'text-white/55 hover:text-white'
                  }`}
                >
                  {s.label}
                  {active === s.id && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-2 -bottom-0.5 block h-[3px] bg-grass"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* mobile toggle */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="mc-panel mc-press flex h-10 w-10 items-center justify-center lg:hidden"
          >
            <div className="flex flex-col items-center gap-[3px]">
              <span
                className={`block h-[3px] w-4 bg-white transition-transform duration-200 ${
                  open ? 'translate-y-[6px] rotate-45' : ''
                }`}
              />
              <span
                className={`block h-[3px] w-4 bg-white transition-opacity duration-200 ${
                  open ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-[3px] w-4 bg-white transition-transform duration-200 ${
                  open ? '-translate-y-[6px] -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </nav>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b-[3px] border-black/60 bg-ink/95 backdrop-blur lg:hidden"
          >
            <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-2 px-4 py-4 xs:grid-cols-3">
              {navSections.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => go(s.id)}
                    className={`mc-panel mc-press w-full px-2 py-2.5 font-mc text-[11px] uppercase tracking-wide ${
                      active === s.id ? 'text-grass' : 'text-white/75'
                    }`}
                  >
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
