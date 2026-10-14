export type Severity = 'simples' | 'atencao' | 'seguranca'

export interface BikeProblem {
  id: string
  title: string
  symptom: string
  severity: Severity
  causes: string[]
  checks: string[]
  /** Aviso exibido quando o problema afeta a segurança */
  warning?: string
}
