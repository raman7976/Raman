import { motion, useReducedMotion } from 'framer-motion'

// Scroll-triggered fade-up. Degrades to a plain fade when reduced-motion is on.
export default function Reveal({ children, delay = 0, y = 26, className = '', once = true }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
