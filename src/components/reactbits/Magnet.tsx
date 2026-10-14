import { useRef, type ReactNode } from 'react'
import { prefersReducedMotion } from './useInView'

interface Props { children: ReactNode; strength?: number; className?: string }

/** O elemento é levemente atraído pelo cursor (inspirado no Magnet do React Bits). */
export default function Magnet({ children, strength = 0.25, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const move = (e: React.PointerEvent) => {
    const el = ref.current
    if (!el || e.pointerType !== 'mouse' || prefersReducedMotion()) return
    const r = el.getBoundingClientRect()
    el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * strength}px, ${(e.clientY - r.top - r.height / 2) * strength}px)`
  }
  const reset = () => { if (ref.current) ref.current.style.transform = '' }
  return (
    <div ref={ref} onPointerMove={move} onPointerLeave={reset} className={`inline-block transition-transform duration-200 ${className}`}>
      {children}
    </div>
  )
}
