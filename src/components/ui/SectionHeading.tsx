interface Props { title: string; subtitle?: string }

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <header className="mb-10 max-w-2xl">
      <h2 className="font-display text-4xl font-extrabold uppercase leading-none tracking-tight sm:text-6xl">{title}</h2>
      {subtitle && <p className="mt-4 max-w-prose text-branco/70">{subtitle}</p>}
    </header>
  )
}
