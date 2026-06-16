import { ShieldCheck, Lock, Clock, EyeOff, BadgeCheck } from "lucide-react"

const features = [
  {
    icon: ShieldCheck,
    title: "Weryfikacja profili",
    description: "Każdy profil jest sprawdzany przez nasz zespół - bez fałszywych kont",
  },
  {
    icon: Lock,
    title: "Pełna dyskrecja",
    description: "Twoje dane są bezpieczne - nie udostępniamy ich nikomu z zewnątrz",
  },
  {
    icon: Clock,
    title: "Moderacja 24/7",
    description: "Nasz zespół pilnuje bezpieczeństwa przez całą dobę",
  },
  {
    icon: EyeOff,
    title: "Anonimowość",
    description: "Sam decydujesz, kto i kiedy może się z Tobą skontaktować",
  },
]

export function SafetySection() {
  return (
    <section className="px-5 py-10">
      <div className="mx-auto max-w-md">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground">
            Twoje <span className="text-primary">bezpieczeństwo</span> to priorytet
          </h2>
          <p className="mx-auto mt-3 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
            Dbamy o Twoją prywatność i bezpieczeństwo na każdym kroku
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <article
                key={f.title}
                className="flex flex-col items-center rounded-2xl border border-primary/25 bg-card p-6 text-center transition-colors hover:border-primary/50"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15">
                  <Icon className="h-6 w-6 text-primary" />
                </span>
                <h3 className="mt-4 text-base font-bold text-foreground">{f.title}</h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
              </article>
            )
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2.5 rounded-full border border-primary/30 bg-primary/10 px-6 py-3.5">
          <BadgeCheck className="h-5 w-5 shrink-0 text-primary" />
          <span className="text-base font-bold text-primary">100% bezpieczne i zweryfikowane</span>
        </div>
      </div>
    </section>
  )
}
