# Como editar a loja

Toda a loja vem do arquivo **`public/produtos.json`**. Depois de publicar o site, o mesmo arquivo fica na raiz (`/produtos.json`)
e pode ser substituído no servidor **sem refazer o site**.

## Campos de cada produto

| Campo | Obrigatório | Exemplo | Observação |
|---|---|---|---|
| `id` | sim | `"mtb-29-preta"` | Único para cada produto, sem repetir |
| `nome` | sim | `"Bicicleta MTB aro 29"` | |
| `categoria` | sim | `"Bicicletas"` | As abas da loja são criadas a partir das categorias usadas |
| `preco` | não | `1299.9` ou `null` | Use ponto nos centavos, sem "R$". `null` mostra "Consultar preço" |
| `precoAnterior` | não | `1499.9` | Aparece riscado. Use só em promoção real |
| `disponivel` | sim | `true` ou `false` | `false` mostra "Indisponível" |
| `imagem` | não | `"/produtos/mtb-29.jpg"` | Coloque a foto na pasta `public/produtos/` |
| `descricao` | não | `"Quadro de alumínio..."` | Texto curto |
| `linkCompra` | não | `"https://..."` | Se tiver loja/checkout online, o botão "Comprar online" aparece |

## Exemplo de produto
```json
{
  "id": "mtb-29-preta",
  "nome": "Bicicleta MTB aro 29",
  "categoria": "Bicicletas",
  "preco": 1299.9,
  "disponivel": true,
  "imagem": "/produtos/mtb-29.jpg",
  "descricao": "Quadro de alumínio, 21 marchas."
}
```

## Cuidados
- Separe os produtos com vírgula, **menos o último**.
- Use aspas retas `"` (não aspas curvas).
- Produto com campo obrigatório faltando é ignorado pela loja.
- Para testar o arquivo, cole o texto em um validador de JSON antes de publicar.
- O botão "Comprar pelo WhatsApp" usa o número definido em `src/data/config.ts`.
