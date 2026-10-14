import type { ReactNode } from 'react'
import { useInView } from './useInView'

interface Props { children: ReactNode; className?: string; delay?: number }

/** Revela o conteúdo ao entrar na tela (inspirado no AnimatedContent do React Bits). */
export default function AnimatedContent({ children, className = '', delay = 0 }: Props) {
  const [ref, seen] = useInView<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{ transitionDelay: `${delay}ms`, opacity: seen ? 1 : 0, transform: seen ? 'none' : 'translateY(24px)' }}
    >{children}</div>
  )
}
