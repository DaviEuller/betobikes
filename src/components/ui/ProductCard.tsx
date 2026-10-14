import type { Product } from '../../types/product'
import { formatPrice } from '../../lib/format'
import { whatsappLink } from '../../data/config'
import SpotlightCard from '../reactbits/SpotlightCard'

export default function ProductCard({ p }: { p: Product }) {
  const msg = `Olá, Beto Bikes! Quero comprar: ${p.nome}${typeof p.preco === 'number' ? ` (${formatPrice(p.preco)})` : ''}.`
  return (
    <SpotlightCard className="h-full">
      <div className="aspect-[5/3] overflow-hidden bg-gradient-to-br from-azul/60 to-carvao">
        {p.imagem
          ? <img src={p.imagem} alt={p.nome} loading="lazy" className="h-full w-full object-cover" />
          : <div className="grid h-full place-items-center"><img src="/logo.svg" alt="" aria-hidden className="h-24 w-24 opacity-40" /></div>}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <p className="font-tech text-sm text-branco/60">{p.categoria}</p>
          <h3 className="font-display text-2xl font-bold leading-tight">{p.nome}</h3>
          {p.descricao && <p className="mt-1 text-sm text-branco/70">{p.descricao}</p>}
        </div>
        <div className="mt-auto flex items-baseline gap-2">
          <span className={typeof p.preco === 'number' ? 'text-lg font-semibold text-vermelho' : 'text-sm text-branco/70'}>{formatPrice(p.preco)}</span>
          {typeof p.precoAnterior === 'number' && <s className="text-sm text-branco/50">{formatPrice(p.precoAnterior)}</s>}
        </div>
        <p className="font-tech text-sm text-branco/70">{p.disponivel ? 'Disponível' : 'Indisponível no momento'}</p>
        <div className="grid gap-2">
          {p.linkCompra && (
            <a href={p.linkCompra} target="_blank" rel="noreferrer" className="rounded-md bg-vermelho px-4 py-2.5 text-center text-sm font-semibold transition hover:brightness-110">Comprar online</a>
          )}
          <a
            href={whatsappLink(msg)} target="_blank" rel="noreferrer"
            className={`rounded-md px-4 py-2.5 text-center text-sm font-semibold transition ${p.linkCompra ? 'border border-branco/25 hover:border-vermelho' : 'bg-vermelho hover:brightness-110'}`}
          >{p.disponivel ? 'Comprar pelo WhatsApp' : 'Perguntar no WhatsApp'}</a>
        </div>
      </div>
    </SpotlightCard>
  )
}
