export interface Product {
  id: string
  nome: string
  categoria: string
  /** Número em reais (ex.: 1299.9) ou null para exibir "Consultar preço" */
  preco: number | null
  precoAnterior?: number | null
  disponivel: boolean
  /** Caminho da foto, ex.: "/produtos/mtb-29.jpg" (arquivo dentro de public/produtos) */
  imagem?: string
  descricao?: string
  /** Link de compra externo (opcional). Sem ele, a compra é pelo WhatsApp. */
  linkCompra?: string
}
