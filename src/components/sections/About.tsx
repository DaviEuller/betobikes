import AnimatedContent from '../reactbits/AnimatedContent'
import Logo from '../ui/Logo'

export default function About() {
  return (
    <section id="sobre" className="bg-azul/30 px-4 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <AnimatedContent>
          <h2 className="font-display text-4xl font-extrabold uppercase leading-none sm:text-6xl">Sobre a Beto Bikes</h2>
          <div className="mt-6 max-w-prose space-y-4 text-branco/75">
            {/* Substitua por um texto real sobre a história da loja. Não inclua anos de experiência ou números sem confirmação. */}
            <p>A Beto Bikes nasceu da paixão por pedalar e reúne bicicletas, peças e acessórios para quem vive o ciclismo no dia a dia.</p>
            <p>Nosso atendimento é direto: você conversa com a loja, tira dúvidas e escolhe com segurança.</p>
          </div>
        </AnimatedContent>
        <AnimatedContent delay={120} className="grid place-items-center">
          {/* Adicione foto real da loja ou da equipe, se houver */}
          <Logo size={256} showName={false} />
        </AnimatedContent>
      </div>
    </section>
  )
}
