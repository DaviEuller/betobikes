import SplitText from '../reactbits/SplitText'
import BlurText from '../reactbits/BlurText'
import Magnet from '../reactbits/Magnet'
import { whatsappLink } from '../../data/config'

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-center overflow-hidden px-4 pb-16 pt-32">
      <img
        src="/logo.svg" alt="" aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 w-[34rem] max-w-none -translate-y-1/2 rounded-full opacity-25 sm:-right-10 sm:opacity-60 lg:right-10 lg:w-[38rem]"
      />
      <div className="relative mx-auto w-full max-w-6xl">
        <p className="mb-5 inline-block rounded-full border border-vermelho px-4 py-1.5 font-tech text-sm">Beto Bikes · Paixão por pedalar</p>
        <SplitText
          text="SUA BIKE COM PROBLEMA? VAMOS ENTENDER."
          className="max-w-3xl font-display text-6xl font-extrabold leading-[0.9] sm:text-8xl lg:text-9xl"
        />
        <BlurText
          text="Escolha o sintoma, veja as causas mais comuns e envie o caso direto para a Beto Bikes pelo WhatsApp."
          className="mt-6 max-w-xl text-lg text-branco/75"
        />
        <div className="mt-10 flex flex-wrap gap-4">
          <Magnet>
            <a href="#problemas" className="inline-block rounded-md bg-vermelho px-7 py-3.5 font-semibold transition hover:brightness-110">Diagnosticar minha bike</a>
          </Magnet>
          <a
            href={whatsappLink('Olá, Beto Bikes! Gostaria de falar com um especialista.')}
            target="_blank" rel="noreferrer"
            className="rounded-md border border-branco/30 px-7 py-3.5 font-semibold transition hover:bg-branco hover:text-carvao"
          >Falar com um especialista</a>
        </div>
      </div>
    </section>
  )
}
