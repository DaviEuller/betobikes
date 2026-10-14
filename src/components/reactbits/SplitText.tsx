import { useInView } from './useInView'

interface Props { text: string; className?: string; delay?: number }

/** Entrada animada letra a letra (inspirado no SplitText do React Bits). */
export default function SplitText({ text, className = '', delay = 28 }: Props) {
  const [ref, seen] = useInView<HTMLHeadingElement>(0.1)
  return (
    <h1 ref={ref} className={className} aria-label={text}>
      {text.split(' ').map((word, w, arr) => (
        <span key={w} aria-hidden className="inline-block whitespace-nowrap">
          {[...word].map((ch, i) => (
            <span
              key={i}
              className="inline-block transition-all duration-500 ease-out"
              style={{
                transitionDelay: `${(w * 6 + i) * delay}ms`,
                opacity: seen ? 1 : 0,
                transform: seen ? 'none' : 'translateY(0.5em)',
              }}
            >{ch}</span>
          ))}
          {w < arr.length - 1 && '\u00A0'}
        </span>
      ))}
    </h1>
  )
}
