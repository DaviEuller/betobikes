import AnimatedContent from '../reactbits/AnimatedContent'
import SectionHeading from '../ui/SectionHeading'

const cats = [
  { id: 'bicicletas', title: 'Bicicletas', href: '#bicicletas', span: 'sm:col-span-2 sm:row-span-2', bg: 'from-marinho to-carvao' },
  { id: 'pecas', title: 'Peças', href: '#pecas', span: '', bg: 'from-vermelho/70 to-carvao' },
  { id: 'acessorios', title: 'Acessórios', href: '#acessorios', span: '', bg: 'from-marinho/70 to-carvao' },
  { id: 'equipamentos', title: 'Equipamentos', href: '#acessorios', span: 'sm:col-span-2', bg: 'from-quente/20 to-carvao' },
]

export default function Categories() {
  return (
    <section id="pecas" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeading title="O que você procura?" />
      <div className="grid auto-rows-[160px] grid-cols-2 gap-4 sm:grid-cols-4 sm:auto-rows-[190px]">
        {cats.map((c, i) => (
          <AnimatedContent key={c.id} delay={i * 80} className={`${c.span} ${i === 0 ? 'col-span-2' : ''}`}>
            <a
              href={c.href}
              className={`group relative flex h-full items-end overflow-hidden rounded-xl border border-quente/10 bg-gradient-to-br p-5 ${c.bg}`}
            >
              {/* Troque o gradiente por <img> da categoria + overlay escuro */}
              <span className="font-display text-3xl font-extrabold uppercase sm:text-5xl">{c.title}</span>
              <span aria-hidden className="absolute right-5 top-5 text-2xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </a>
          </AnimatedContent>
        ))}
      </div>
    </section>
  )
}
