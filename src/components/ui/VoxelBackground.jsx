import { useMemo } from 'react'
import { ACCENTS } from '../../data/accents'

const COLORS = [ACCENTS.grass, ACCENTS.diamond, ACCENTS.gold, ACCENTS.amethyst]

// Deterministic PRNG so the block layout is stable across renders.
function mulberry32(a) {
  return function () {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// Fixed, full-screen layer of slowly drifting voxels behind all content.
export default function VoxelBackground() {
  const blocks = useMemo(() => {
    const rnd = mulberry32(1337)
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: rnd() * 100,
      top: rnd() * 100,
      size: 12 + rnd() * 34,
      color: COLORS[Math.floor(rnd() * COLORS.length)],
      dur: 7 + rnd() * 9,
      delay: rnd() * -14,
      rot: rnd() * 45 - 22,
      opacity: 0.05 + rnd() * 0.07,
    }))
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      {blocks.map((b) => (
        <div
          key={b.id}
          className="animate-floaty absolute"
          style={{
            left: `${b.left}%`,
            top: `${b.top}%`,
            width: b.size,
            height: b.size,
            background: b.color,
            opacity: b.opacity,
            transform: `rotate(${b.rot}deg)`,
            animationDuration: `${b.dur}s`,
            animationDelay: `${b.delay}s`,
            boxShadow:
              'inset 2px 2px 0 rgba(255,255,255,0.18), inset -2px -2px 0 rgba(0,0,0,0.35)',
          }}
        />
      ))}
      {/* vignette keeps the edges matte-dark and text readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(125% 85% at 50% 0%, transparent 42%, rgba(10,10,11,0.9) 100%)',
        }}
      />
    </div>
  )
}
