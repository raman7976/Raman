// Inventory-slot style tech chip.
export default function TechBadge({ children }) {
  return (
    <span className="mc-slot inline-flex items-center px-2 py-1 font-mc text-[9px] uppercase tracking-wide text-white/75 sm:text-[10px]">
      {children}
    </span>
  )
}
