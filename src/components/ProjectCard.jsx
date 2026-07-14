import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion'
import TechBadge from './ui/TechBadge'
import { GitHub, ArrowRight } from './ui/icons'
import { accentHex } from '../data/accents'

export default function ProjectCard({ project, index }) {
  const reduce = useReducedMotion()
  const accent = accentHex(project.accent)

  // pointer-driven 3D tilt
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 200, damping: 18 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 200, damping: 18 })

  const onMove = (e) => {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.a
      href={project.repo}
      target="_blank"
      rel="noreferrer"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{
        rotateX: reduce ? 0 : rotateX,
        rotateY: reduce ? 0 : rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="mc-panel group relative flex h-full flex-col p-5"
    >
      {/* accent border + glow on hover */}
      <span
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ boxShadow: `inset 0 0 0 2px ${accent}, 0 0 22px -6px ${accent}` }}
      />

      <div className="flex items-start justify-between gap-3">
        <span className="mc-slot flex h-11 w-11 items-center justify-center text-xl">
          {project.icon}
        </span>
        <GitHub className="h-5 w-5 text-white/25 transition-colors group-hover:text-white" />
      </div>

      <h3 className="mt-4 font-mc text-[13px] uppercase leading-tight tracking-wide text-white">
        {project.name}
      </h3>
      <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-white/60">{project.blurb}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 4).map((t) => (
          <TechBadge key={t}>{t}</TechBadge>
        ))}
        {project.tech.length > 4 && <TechBadge>+{project.tech.length - 4}</TechBadge>}
      </div>

      <div
        className="mt-4 flex items-center gap-1.5 font-mc text-[10px] uppercase tracking-wide"
        style={{ color: accent }}
      >
        View Repo <ArrowRight className="h-3.5 w-3.5" />
      </div>
    </motion.a>
  )
}
