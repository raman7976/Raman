import GrassBlock from './GrassBlock'
import Reveal from './Reveal'

export default function SectionTitle({ kicker, title, className = '' }) {
  return (
    <Reveal className={`mb-10 sm:mb-12 ${className}`}>
      <div className="flex items-center gap-3.5">
        <GrassBlock className="h-8 w-8 shrink-0 animate-bob sm:h-10 sm:w-10" />
        <div>
          {kicker && (
            <div className="font-mc text-[10px] uppercase tracking-[0.25em] text-grass/80 sm:text-xs">
              {kicker}
            </div>
          )}
          <h2 className="font-pixel text-base leading-tight text-white drop-hard sm:text-lg md:text-2xl">
            {title}
          </h2>
        </div>
      </div>
      <div className="mt-4 h-[3px] w-full bg-gradient-to-r from-grass/60 via-white/10 to-transparent" />
    </Reveal>
  )
}
