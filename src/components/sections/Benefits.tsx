import AnimatedContent from '../reactbits/AnimatedContent'
import SectionHeading from '../ui/SectionHeading'

// Mantenha apenas condições comerciais confirmadas pela loja.
const items = [
  { title: 'Envio para todo o Brasil', text: 'Receba sua compra onde estiver.', d: 'M3 7h11v9H3zM14 10h4l3 3v3h-7M7 19a2 2 0 100-4 2 2 0 000 4zM17 19a2 2 0 100-4 2 2 0 000 4z' },
  { title: 'Ajuda para escolher', text: 'Conversamos para indicar o modelo certo.', d: 'M21 12a8 8 0 01-11.6 7.1L4 20l1-4.6A8 8 0 1121 12z' },
  { title: 'Peças e acessórios', text: 'Itens para manter e equipar sua bicicleta.', d: 'M12 8a4 4 0 100 8 4 4 0 000-8zM12 2v3M12 19v3M2 12h3M19 12h3' },
  { title: 'Suporte na compra', text: 'A loja acompanha você durante todo o processo.', d: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z' },
]

export default function Benefits() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeading title="Por que comprar na Beto Bikes?" />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <AnimatedContent key={it.title} delay={i * 80}>
            <svg viewBox="0 0 24 24" className="mb-4 h-9 w-9 text-vermelho" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d={it.d} /></svg>
            <h3 className="font-display text-2xl font-bold">{it.title}</h3>
            <p className="mt-2 text-sm text-branco/70">{it.text}</p>
          </AnimatedContent>
        ))}
      </div>
    </section>
  )
}
