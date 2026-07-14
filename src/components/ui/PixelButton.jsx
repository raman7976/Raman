// Blocky, beveled button. Renders as <a> by default, or any element via `as`.
// variant: 'primary' (accent fill) | 'ghost' (dark panel).
export default function PixelButton({
  as: Comp = 'a',
  variant = 'ghost',
  accent = '#54cf4e',
  className = '',
  children,
  ...props
}) {
  const primary = variant === 'primary'
  const style = primary
    ? {
        background: accent,
        color: '#0a0a0b',
        borderTopColor: 'rgba(255,255,255,0.55)',
        borderLeftColor: 'rgba(255,255,255,0.55)',
        borderRightColor: 'rgba(0,0,0,0.4)',
        borderBottomColor: 'rgba(0,0,0,0.4)',
      }
    : {
        background: '#16181d',
        color: '#fff',
        borderTopColor: 'rgba(255,255,255,0.12)',
        borderLeftColor: 'rgba(255,255,255,0.12)',
        borderRightColor: 'rgba(0,0,0,0.55)',
        borderBottomColor: 'rgba(0,0,0,0.55)',
      }

  return (
    <Comp
      className={`mc-press mc-raise inline-flex cursor-pointer select-none items-center justify-center gap-2 border-[3px] border-solid px-4 py-2.5 font-mc text-[11px] uppercase tracking-wider sm:text-xs ${className}`}
      style={style}
      {...props}
    >
      {children}
    </Comp>
  )
}
