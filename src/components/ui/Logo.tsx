export default function Logo({ size = 44, showName = true }: { size?: number; showName?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <img
        src="/logo.svg" alt={showName ? '' : 'Beto Bikes'} width={size} height={size}
        className="rounded-full object-cover" style={{ width: size, height: size }}
      />
      {showName && <span className="font-display text-2xl font-extrabold uppercase tracking-wide">Beto Bikes</span>}
    </span>
  )
}
