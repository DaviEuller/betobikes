/** Imagem provisória. Substitua passando `image` nos dados do produto. */
export default function BikePlaceholder({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 200 120" role="img" aria-label={`Foto de ${label} em breve`} className="h-full w-full bg-gradient-to-br from-marinho/60 to-carvao">
      <g fill="none" stroke="#F4F1E9" strokeOpacity=".55" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="52" cy="78" r="24" /><circle cx="148" cy="78" r="24" />
        <path d="M52 78 L82 46 H122 L148 78 M82 46 L100 78 H52 M122 46 L100 78 M76 38 H92 M118 40 L128 34" />
      </g>
    </svg>
  )
}
