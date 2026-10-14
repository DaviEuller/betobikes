export const formatPrice = (value: number | null | undefined) =>
  typeof value === 'number' ? value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 'Consultar preço'
