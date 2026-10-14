import { useState } from 'react'
import { problems, severityLabel } from '../../data/problems'
import type { Severity } from '../../types/problem'
import { whatsappLink } from '../../data/config'
import SectionHeading from '../ui/SectionHeading'
import AnimatedContent from '../reactbits/AnimatedContent'
import SpotlightCard from '../reactbits/SpotlightCard'

const badge: Record<Severity, string> = {
  simples: 'border-azul-claro text-azul-claro',
  atencao: 'border-branco/50 text-branco/80',
  seguranca: 'border-vermelho bg-vermelho text-branco',
}

export default function ProblemPanel() {
  const [activeId, setActiveId] = useState(problems[0].id)
  const [note, setNote] = useState('')
  const active = problems.find(p => p.id === activeId)!

  const message = [
    'Olá, Beto Bikes! Minha bike está com este problema:',
    `${active.title}.`,
    note.trim() && `Detalhes: ${note.trim()}`,
    'Podem me ajudar?',
  ].filter(Boolean).join('\n')

  return (
    <section id="problemas" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedContent>
          <SectionHeading
            title="O que está acontecendo com a sua bike?"
            subtitle="Escolha o sintoma, veja as causas mais comuns e envie o caso para a Beto Bikes pelo WhatsApp."
          />
        </AnimatedContent>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,340px)_1fr]">
          <div role="tablist" aria-label="Problemas da bicicleta" aria-orientation="vertical" className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {problems.map(p => (
              <button
                key={p.id} role="tab" id={`tab-${p.id}`} aria-selected={p.id === activeId} aria-controls="painel-problema"
                onClick={() => setActiveId(p.id)}
                className={`shrink-0 rounded-lg border px-4 py-3 text-left transition lg:shrink ${
                  p.id === activeId ? 'border-vermelho bg-azul/40' : 'border-branco/15 hover:border-branco/40'
                }`}
              >
                <span className="font-display text-xl font-bold leading-tight">{p.title}</span>
              </button>
            ))}
          </div>

          <SpotlightCard>
            <div id="painel-problema" role="tabpanel" aria-labelledby={`tab-${active.id}`} className="space-y-6 p-6 sm:p-8">
              <div>
                <span className={`inline-block rounded-full border px-3 py-1 font-tech text-sm ${badge[active.severity]}`}>{severityLabel[active.severity]}</span>
                <h3 className="mt-3 font-display text-4xl font-extrabold leading-none sm:text-5xl">{active.title}</h3>
                <p className="mt-3 max-w-prose text-branco/75">{active.symptom}</p>
              </div>

              {active.warning && (
                <p role="note" className="rounded-lg border border-vermelho/60 bg-vermelho/10 p-4 text-sm">{active.warning}</p>
              )}

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-display text-2xl font-bold">Causas mais comuns</h4>
                  <ul className="space-y-1.5 text-sm text-branco/80">
                    {active.causes.map(c => <li key={c} className="flex gap-2"><span aria-hidden className="text-vermelho">•</span>{c}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-display text-2xl font-bold">O que você pode olhar</h4>
                  <ul className="space-y-1.5 text-sm text-branco/80">
                    {active.checks.map(c => <li key={c} className="flex gap-2"><span aria-hidden className="text-azul-claro">•</span>{c}</li>)}
                  </ul>
                </div>
              </div>

              <div className="border-t border-branco/10 pt-6">
                <label htmlFor="detalhes" className="mb-1.5 block text-sm font-medium">Quer contar mais? (opcional)</label>
                <textarea
                  id="detalhes" rows={2} value={note} onChange={e => setNote(e.target.value)}
                  placeholder="Modelo da bike, quando começou, em que situação acontece"
                  className="w-full rounded-md border border-branco/20 bg-carvao/60 px-4 py-3 placeholder:text-branco/40 focus:border-vermelho"
                />
                <a
                  href={whatsappLink(message)} target="_blank" rel="noreferrer"
                  className="mt-4 inline-block rounded-md bg-vermelho px-7 py-3.5 font-semibold transition hover:brightness-110"
                >Enviar este problema no WhatsApp</a>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  )
}
