import { useMemo, useState } from 'react'
import { useProducts } from '../../hooks/useProducts'
import SectionHeading from '../ui/SectionHeading'
import ProductCard from '../ui/ProductCard'
import AnimatedContent from '../reactbits/AnimatedContent'

export default function Shop() {
  const state = useProducts()
  const [tab, setTab] = useState('Todos')

  const products = state.status === 'ready' ? state.products : []
  const tabs = useMemo(() => ['Todos', ...Array.from(new Set(products.map(p => p.categoria)))], [products])
  const list = tab === 'Todos' || !tabs.includes(tab) ? products : products.filter(p => p.categoria === tab)

  return (
    <section id="loja" className="bg-branco/[0.04] px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Loja" subtitle="Escolha o produto e finalize a compra pelo WhatsApp." />

        {state.status === 'loading' && <p role="status" className="text-branco/60">Carregando produtos…</p>}
        {state.status === 'error' && <p role="alert" className="rounded-lg border border-vermelho/60 p-4 text-sm">Não foi possível carregar os produtos. Fale com a loja pelo WhatsApp para saber o que está disponível.</p>}
        {state.status === 'ready' && products.length === 0 && <p className="text-branco/70">Nenhum produto cadastrado ainda. Fale com a loja pelo WhatsApp.</p>}

        {products.length > 0 && (
          <>
            <div role="group" aria-label="Filtrar por categoria" className="mb-8 flex flex-wrap gap-2">
              {tabs.map(t => (
                <button
                  key={t} aria-pressed={tab === t} onClick={() => setTab(t)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition ${tab === t ? 'bg-vermelho' : 'border border-branco/20 hover:border-branco/50'}`}
                >{t}</button>
              ))}
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {list.map((p, i) => <AnimatedContent key={p.id} delay={(i % 4) * 70}><ProductCard p={p} /></AnimatedContent>)}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
