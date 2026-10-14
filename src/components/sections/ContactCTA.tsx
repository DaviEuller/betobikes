import { useState, type FormEvent } from 'react'
import AnimatedContent from '../reactbits/AnimatedContent'
import Magnet from '../reactbits/Magnet'
import { whatsappLink } from '../../data/config'

const interests = ['Problema na minha bike', 'Comprar uma bicicleta', 'Peças e acessórios', 'Outro assunto']

export default function ContactCTA() {
  const [name, setName] = useState('')
  const [interest, setInterest] = useState(interests[0])
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const text = [
      'Olá, Beto Bikes!',
      name.trim() && `Meu nome é ${name.trim()}.`,
      `Assunto: ${interest}.`,
      message.trim(),
    ].filter(Boolean).join('\n')
    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  const field = 'w-full rounded-md border border-branco/20 bg-carvao/60 px-4 py-3 text-branco placeholder:text-branco/40 focus:border-vermelho'

  return (
    <section id="contato" className="relative px-4 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <AnimatedContent>
          <h2 className="font-display text-5xl font-extrabold uppercase leading-[0.95] sm:text-7xl">Pronto para o próximo pedal?</h2>
          <p className="mt-6 max-w-md text-branco/75">Conte o que você procura. Ao enviar, o WhatsApp abre com sua mensagem pronta para a Beto Bikes.</p>
        </AnimatedContent>

        <AnimatedContent delay={120}>
          <form onSubmit={submit} className="glass space-y-4 rounded-2xl p-6 sm:p-8">
            <div>
              <label htmlFor="nome" className="mb-1.5 block text-sm font-medium">Seu nome</label>
              <input id="nome" className={field} value={name} onChange={e => setName(e.target.value)} placeholder="Como podemos te chamar?" autoComplete="given-name" />
            </div>
            <div>
              <label htmlFor="interesse" className="mb-1.5 block text-sm font-medium">Assunto</label>
              <select id="interesse" className={field} value={interest} onChange={e => setInterest(e.target.value)}>
                {interests.map(i => <option key={i} className="bg-carvao">{i}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="mensagem" className="mb-1.5 block text-sm font-medium">Mensagem</label>
              <textarea id="mensagem" rows={4} className={field} value={message} onChange={e => setMessage(e.target.value)} placeholder="Modelo da bike, tamanho, uso ou dúvida" />
            </div>
            <Magnet className="w-full" strength={0.08}>
              <button type="submit" className="w-full rounded-md bg-vermelho px-6 py-3.5 font-semibold transition hover:brightness-110">Converse com a Beto Bikes</button>
            </Magnet>
            <p role="status" className="min-h-5 text-sm text-branco/60">{sent && 'WhatsApp aberto em outra aba. Se não abriu, permita pop-ups e envie novamente.'}</p>
          </form>
        </AnimatedContent>
      </div>
    </section>
  )
}
