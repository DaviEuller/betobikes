import { useState } from 'react'
import Logo from '../ui/Logo'

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#loja', label: 'Loja' },
  { href: '#problemas', label: 'Problemas' },
  { href: '#faq', label: 'Perguntas' },
  { href: '#sobre', label: 'Sobre nós' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav aria-label="Principal" className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-2.5">
        <a href="#inicio" aria-label="Beto Bikes, início"><Logo size={40} /></a>
        <ul className="hidden items-center gap-7 text-sm md:flex">
          {links.map(l => <li key={l.href}><a href={l.href} className="text-branco/80 transition hover:text-branco">{l.label}</a></li>)}
        </ul>
        <div className="flex items-center gap-2">
          <a href="#contato" className="rounded-full bg-vermelho px-5 py-2 text-sm font-semibold transition hover:brightness-110">Fale conosco</a>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-branco/20 md:hidden"
            aria-expanded={open} aria-controls="menu-mobile" aria-label="Abrir menu"
            onClick={() => setOpen(o => !o)}
          >{open ? '✕' : '☰'}</button>
        </div>
      </nav>
      {open && (
        <ul id="menu-mobile" className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-3 md:hidden">
          {links.map(l => (
            <li key={l.href}><a href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-4 py-3 hover:bg-white/5">{l.label}</a></li>
          ))}
        </ul>
      )}
    </header>
  )
}
