import { useEffect, useState } from 'react'
import type { Product } from '../types/product'

type State = { status: 'loading' } | { status: 'error' } | { status: 'ready'; products: Product[] }

// Aceita só itens válidos, para um erro de digitação em um produto não derrubar a loja inteira.
const isValid = (p: any): p is Product =>
  p && typeof p.id === 'string' && typeof p.nome === 'string' && typeof p.categoria === 'string' && typeof p.disponivel === 'boolean'

/** Lê os produtos de /produtos.json. Edite esse arquivo para mudar a loja, sem mexer no código. */
export function useProducts(): State {
  const [state, setState] = useState<State>({ status: 'loading' })
  useEffect(() => {
    let cancel = false
    fetch(`${import.meta.env.BASE_URL}produtos.json`, { cache: 'no-cache' })
      .then(r => (r.ok ? r.json() : Promise.reject()))
      .then(data => {
        if (cancel) return
        const list = Array.isArray(data?.produtos) ? data.produtos.filter(isValid) : []
        setState({ status: 'ready', products: list })
      })
      .catch(() => !cancel && setState({ status: 'error' }))
    return () => { cancel = true }
  }, [])
  return state
}
