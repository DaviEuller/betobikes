import { useInView } from './useInView'

interface Props { text: string; className?: string; delay?: number }

/** Palavras que saem do desfoque (inspirado no BlurText do React Bits). */
export default function BlurText({ text, className = '', delay = 60 }: Props) {
  const [ref, seen] = useInView<HTMLParagraphElement>()
  return (
    <p ref={ref} className={className}>
      {text.split(' ').map((word, i) => (
        <span
          key={i}
          className="inline-block transition-all duration-700"
          style={{
            transitionDelay: `${600 + i * delay}ms`,
            opacity: seen ? 1 : 0,
            filter: seen ? 'blur(0)' : 'blur(8px)',
          }}
        >{word}&nbsp;</span>
      ))}
    </p>
  )
}
