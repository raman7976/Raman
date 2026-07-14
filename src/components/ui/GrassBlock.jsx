// The signature matte grass-block motif — dark dirt body, green top edge.
export default function GrassBlock({ className = '' }) {
  return (
    <span className={`inline-block ${className}`} aria-hidden="true">
      <svg viewBox="0 0 16 16" className="h-full w-full drop-hard" shapeRendering="crispEdges">
        <rect width="16" height="16" fill="#2a2d34" />
        <rect width="16" height="5" fill="#54cf4e" />
        <rect y="5" width="16" height="2" fill="#3a8f36" />
        {/* dirt speckle */}
        <rect x="3" y="9" width="2" height="2" fill="#000" opacity="0.25" />
        <rect x="9" y="11" width="2" height="2" fill="#000" opacity="0.25" />
        <rect x="11" y="8" width="2" height="2" fill="#000" opacity="0.18" />
        {/* grass highlight */}
        <rect x="2" y="1" width="2" height="2" fill="#7ee87a" opacity="0.7" />
        <rect x="7" y="2" width="2" height="1" fill="#7ee87a" opacity="0.5" />
      </svg>
    </span>
  )
}
