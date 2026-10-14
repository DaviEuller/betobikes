import { faq } from '../../data/faq'
import SectionHeading from '../ui/SectionHeading'
import AnimatedContent from '../reactbits/AnimatedContent'

export default function Faq() {
  return (
    <section id="faq" className="bg-azul/20 px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <AnimatedContent><SectionHeading title="Perguntas frequentes" /></AnimatedContent>
        <div className="divide-y divide-branco/15 border-y border-branco/15">
          {faq.map(item => (
            <details key={item.q} className="group py-1">
              <summary className="flex items-center justify-between gap-4 py-4 text-lg font-medium">
                {item.q}
                <span aria-hidden className="faq-icon grid h-8 w-8 shrink-0 place-items-center rounded-full border border-branco/30 text-xl transition-transform">+</span>
              </summary>
              <p className="max-w-prose pb-5 text-branco/75">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
