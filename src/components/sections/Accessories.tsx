import { useState } from 'react'
import { accessories } from '../../data/products'
import AnimatedContent from '../reactbits/AnimatedContent'
import SectionHeading from '../ui/SectionHeading'
import ProductCard from '../ui/ProductCard'
import { whatsappLink } from '../../data/config'

export default function Accessories() {
  const groups = ['Todos', ...Array.from(new Set(accessories.map(a => a.group)))]
  const [group, setGroup] = useState('Todos')
  const list = group === 'Todos' ? accessories : accessories.filter(a => a.group === group)

  return (
    <section id="acessorios" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeading title="Peças e acessórios" subtitle="Tudo o que você precisa para pedalar com segurança e manter a bike em dia." />
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filtrar por tipo">
        {groups.map(g => (
          <button
            key={g} aria-pressed={group === g} onClick={() => setGroup(g)}
            className={`rounded-full px-4 py-1.5 text-sm transition ${group === g ? 'bg-vermelho' : 'border border-quente/20 hover:border-quente/50'}`}
          >{g}</button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {list.map((a, i) => (
          <AnimatedContent key={a.id} delay={i * 50}>
            <ProductCard name={a.name} tag={a.group} price={a.price} image={a.image} />
          </AnimatedContent>
        ))}
      </div>
      <a
        href={whatsappLink('Olá, Beto Bikes! Estou procurando acessórios para minha bicicleta.')}
        target="_blank" rel="noreferrer"
        className="mt-10 inline-block rounded-md bg-vermelho px-7 py-3 font-semibold transition hover:brightness-110"
      >Encontrar acessórios</a>
    </section>
  )
}
