import type { Accessory, Bike } from '../types/product'

// ⚠️ Dados de EXEMPLO. Substitua pelos produtos reais (nome, preço, foto em /public/produtos/...).
export const bikes: Bike[] = [
  { id: 'b1', name: 'Bicicleta MTB aro 29', category: 'MTB', price: null, inStock: true },
  { id: 'b2', name: 'Bicicleta Urbana aro 26', category: 'Urbana', price: null, inStock: true },
  { id: 'b3', name: 'Bicicleta Speed Estrada', category: 'Estrada', price: null, inStock: true },
  { id: 'b4', name: 'Bicicleta MTB aro 27,5', category: 'MTB', price: null, inStock: false },
]

export const accessories: Accessory[] = [
  { id: 'a1', name: 'Capacete ciclismo', group: 'Capacetes', price: null },
  { id: 'a2', name: 'Farol dianteiro recarregável', group: 'Luzes', price: null },
  { id: 'a3', name: 'Luvas de ciclismo', group: 'Luvas', price: null },
  { id: 'a4', name: 'Pneu aro 29', group: 'Pneus', price: null },
  { id: 'a5', name: 'Câmara de ar', group: 'Câmaras', price: null },
  { id: 'a6', name: 'Corrente 9 velocidades', group: 'Correntes', price: null },
]

export const formatPrice = (value: number | null) =>
  value === null ? 'Consultar preço' : value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
