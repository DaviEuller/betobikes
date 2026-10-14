import Logo from '../ui/Logo'
import { INSTAGRAM_URL } from '../../data/config'

export default function Footer() {
  return (
    <footer className="border-t border-branco/10 px-4 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
        <div className="space-y-3">
          <Logo size={40} />
          <p className="max-w-xs text-sm text-branco/60">Bicicletas, peças e acessórios para cada quilômetro da sua jornada.</p>
        </div>
        <nav aria-label="Rodapé" className="space-y-2 text-sm">
          <p className="font-semibold">Navegação</p>
          <a className="block text-branco/70 hover:text-branco" href="#loja">Loja</a>
          <a className="block text-branco/70 hover:text-branco" href="#problemas">Problemas da bike</a>
          <a className="block text-branco/70 hover:text-branco" href="#faq">Perguntas frequentes</a>
          <a className="block text-branco/70 hover:text-branco" href="#sobre">Sobre nós</a>
        </nav>
        <div className="space-y-2 text-sm">
          <p className="font-semibold">Contato</p>
          <a className="block text-branco/70 hover:text-branco" href="#contato">WhatsApp</a>
          <a className="block text-branco/70 hover:text-branco" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram</a>
          {/* Adicione endereço, horários e políticas após confirmar com a loja. */}
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs text-branco/40">© {new Date().getFullYear()} Beto Bikes. Todos os direitos reservados.</p>
    </footer>
  )
}
