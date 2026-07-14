// Semantic section wrapper: id anchor + consistent vertical rhythm + container.
export default function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative py-20 sm:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">{children}</div>
    </section>
  )
}
