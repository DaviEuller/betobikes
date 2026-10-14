import { useMemo, useState } from 'react'
import { bikes } from '../../data/products'
import type { Category } from '../../types/product'
import AnimatedContent from '../reactbits/AnimatedContent'
import SectionHeading from '../ui/SectionHeading'
import ProductCard from '../ui/ProductCard'
import { whatsappLink } from '../../data/config'

type Tab = 'Todas' | Category

export default function FeaturedBikes() {
  const [tab, setTab] = useState<Tab>('Todas')
  // As abas só aparecem para categorias que existem no catálogo.
  const tabs = useMemo<Tab[]>(() => ['Todas', ...Array.from(new Set(bikes.map(b => b.category)))], [])
  const list = tab === 'Todas' ? bikes : bikes.filter(b => b.category === tab)

  return (
    <section id="bicicletas" className="bg-quente/[0.04] px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Bicicletas em destaque" subtitle="Escolha o modelo e pergunte direto no WhatsApp sobre preço, tamanho e disponibilidade." />
        <div role="tablist" aria-label="Categorias de bicicletas" className="mb-8 flex flex-wrap gap-2">
          {tabs.map(t => (
            <button
              key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${tab === t ? 'bg-vermelho' : 'border border-quente/20 hover:border-quente/50'}`}
            >{t}</button>
          ))}
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((b, i) => (
            <AnimatedContent key={b.id} delay={i * 70}>
              <ProductCard name={b.name} tag={b.category} price={b.price} oldPrice={b.oldPrice} inStock={b.inStock} image={b.image} />
            </AnimatedContent>
          ))}
        </div>
        <a
          href={whatsappLink('Olá, Beto Bikes! Quero ver todos os produtos disponíveis.')}
          target="_blank" rel="noreferrer"
          className="mt-10 inline-block rounded-md border border-quente/30 px-7 py-3 font-semibold transition hover:bg-quente hover:text-carvao"
        >Ver todos os produtos</a>
      </div>
    </section>
  )
}
