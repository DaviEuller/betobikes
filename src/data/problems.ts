import type { BikeProblem, Severity } from '../types/problem'

export const severityLabel: Record<Severity, string> = {
  simples: 'Ajuste simples',
  atencao: 'Merece atenção',
  seguranca: 'Segurança: evite pedalar',
}

export const problems: BikeProblem[] = [
  {
    id: 'freio',
    title: 'Freio fraco ou barulhento',
    symptom: 'A bike demora a parar, a alavanca vai muito fundo ou o freio chia.',
    severity: 'seguranca',
    causes: ['Pastilhas ou sapatas gastas', 'Cabo ou fluido do freio com problema', 'Disco ou aro sujo de óleo ou graxa', 'Freio desalinhado'],
    checks: ['Veja se a alavanca encosta no guidão ao apertar', 'Observe o desgaste das pastilhas', 'Confira se o disco ou o aro está limpo'],
    warning: 'Freio é item de segurança. Se a bike não para bem, evite pedalar até a revisão.',
  },
  {
    id: 'marchas',
    title: 'Marchas falhando',
    symptom: 'A corrente demora a trocar, pula de marcha ou faz barulho ao trocar.',
    severity: 'atencao',
    causes: ['Cabo do câmbio desregulado', 'Câmbio ou gancheira desalinhados', 'Sujeira ou falta de lubrificação', 'Corrente ou cassete desgastados'],
    checks: ['Troque de marcha com a bike apoiada, girando o pedal', 'Veja se a corrente está limpa e lubrificada', 'Observe se o câmbio parece torto'],
  },
  {
    id: 'corrente',
    title: 'Corrente pulando ou saindo',
    symptom: 'Ao fazer força no pedal a corrente escorrega, pula ou cai.',
    severity: 'atencao',
    causes: ['Corrente desgastada ou esticada', 'Cassete ou coroa gastos', 'Elo travado na corrente', 'Câmbio desregulado'],
    checks: ['Procure elos duros que não dobram', 'Veja se os dentes da coroa estão pontiagudos ou desgastados', 'Lembre desde quando a corrente não é trocada'],
  },
  {
    id: 'pneu',
    title: 'Pneu murchando ou furando',
    symptom: 'O pneu perde ar com frequência ou fura sem motivo aparente.',
    severity: 'simples',
    causes: ['Espinho ou objeto cravado no pneu', 'Fita de aro deslocada ou ausente', 'Câmara de ar com furo ou válvula ruim', 'Pressão incorreta'],
    checks: ['Passe a mão com cuidado por dentro do pneu para achar objetos', 'Confira a pressão indicada na lateral do pneu', 'Veja se a válvula está reta e firme'],
  },
  {
    id: 'barulho',
    title: 'Rangido ao pedalar',
    symptom: 'Estalos ou rangidos que acompanham o giro do pedal.',
    severity: 'atencao',
    causes: ['Pedais ou pedivela frouxos', 'Movimento central seco ou gasto', 'Corrente sem lubrificação', 'Parafusos soltos no quadro ou no selim'],
    checks: ['Pedale em pé e sentado para ver quando o barulho aparece', 'Tente balançar a pedivela de lado', 'Lubrifique a corrente e teste de novo'],
  },
  {
    id: 'roda',
    title: 'Roda batendo ou empenada',
    symptom: 'A roda balança de lado ou raspa no freio ao girar.',
    severity: 'atencao',
    causes: ['Raios soltos ou desbalanceados', 'Aro torto após batida', 'Roda mal encaixada no quadro', 'Rolamentos do cubo com folga'],
    checks: ['Gire a roda e olhe a distância até as sapatas ou o disco', 'Confira se o eixo está bem preso', 'Balance a roda de lado para sentir folga'],
  },
  {
    id: 'direcao',
    title: 'Guidão ou direção com folga',
    symptom: 'O guidão balança, estala ao frear ou a direção parece solta.',
    severity: 'seguranca',
    causes: ['Caixa de direção frouxa', 'Mesa ou guidão mal apertados', 'Rolamentos da direção gastos'],
    checks: ['Segure o freio dianteiro e empurre a bike para frente e para trás', 'Veja se o guidão gira desalinhado da roda'],
    warning: 'Folga na direção afeta o controle da bike. Evite pedalar até que seja revisada.',
  },
]
