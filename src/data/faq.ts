export interface FaqItem { q: string; a: string }

// ⚠️ Confirme com a loja as respostas comerciais (envio, horários, endereço) antes de publicar.
export const faq: FaqItem[] = [
  { q: 'O painel de problemas substitui a revisão da bike?', a: 'Não. Ele mostra as causas mais comuns e ajuda você a explicar o sintoma. Só uma avaliação da bike pode confirmar o problema.' },
  { q: 'Posso pedalar com o freio fraco?', a: 'Não é recomendado. Freio fraco aumenta o risco de acidente. Evite pedalar até a bike ser revisada.' },
  { q: 'Com que frequência devo revisar a bicicleta?', a: 'Depende de quanto e onde você pedala. Faça uma revisão quando notar barulhos, perda de desempenho ou desgaste, e depois de quedas, lama ou muita chuva.' },
  { q: 'Como escolho o tamanho certo da bicicleta?', a: 'O tamanho do quadro depende da sua altura e do tipo de bike. Envie sua altura pelo WhatsApp e a loja ajuda a indicar a medida.' },
  { q: 'Posso mandar foto ou vídeo do problema?', a: 'Pode. Depois de escolher o sintoma no painel, envie a mensagem pelo WhatsApp e anexe fotos ou um vídeo curto do barulho ou da peça.' },
  { q: 'A Beto Bikes envia para todo o Brasil?', a: 'Sim, a loja envia para todo o Brasil. Confirme prazo e valor do frete pelo WhatsApp.' },
  { q: 'Qual o endereço e o horário de atendimento?', a: 'Consulte a loja pelo WhatsApp para saber endereço e horários atualizados.' },
]
