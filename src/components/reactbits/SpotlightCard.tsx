import type { ReactNode } from 'react'

interface Props { children: ReactNode; className?: string }

/** Brilho que segue o cursor (inspirado no SpotlightCard do React Bits). */
export default function SpotlightCard({ children, className = '' }: Props) {
  const move = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`)
  }
  return (
    <div
      onPointerMove={move}
      className={`group relative overflow-hidden rounded-xl border border-branco/10 bg-white/[0.03] ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: 'radial-gradient(260px circle at var(--x,50%) var(--y,50%), rgb(217 39 53 / .18), transparent 70%)' }}
      />
      <div className="relative flex h-full flex-col">{children}</div>
    </div>
  )
}
