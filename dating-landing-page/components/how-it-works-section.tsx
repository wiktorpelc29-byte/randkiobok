import { UserPlus, Search, MessageCircle } from "lucide-react"
import { ExternalCta } from "@/components/external-cta"

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Zarejestruj się",
    description: "Stwórz profil w 30 sekund - to całkowicie darmowe i anonimowe",
  },
  {
    icon: Search,
    number: "02",
    title: "Przeglądaj profile",
    description: "Znajdź atrakcyjne kobiety w Twojej okolicy - setki nowych profili codziennie",
  },
  {
    icon: MessageCircle,
    number: "03",
    title: "Umów spotkanie",
    description: "Napisz wiadomość i umów się na niezapomnianą noc już dziś!",
  },
]

export function HowItWorksSection() {
  return (
    <section className="px-5 py-10">
      <div className="mx-auto max-w-md">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground">
            Jak to <span className="text-primary">działa?</span>
          </h2>
          <p className="mx-auto mt-2 max-w-xs text-pretty text-sm text-muted-foreground">
            Trzy proste kroki dzielą Cię od niezapomnianych spotkań
          </p>
        </div>

        <ol className="relative mt-10 flex flex-col gap-9">
          {/* connecting vertical line */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-7 top-7 bottom-7 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent"
          />

          {steps.map((step) => {
            const Icon = step.icon
            return (
              <li key={step.number} className="relative flex items-start gap-5">
                <div className="relative shrink-0">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-[0_8px_24px_-6px_oklch(0.62_0.27_350_/_0.7)]">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </span>
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-background text-[11px] font-bold text-primary">
                    {step.number}
                  </span>
                </div>

                <div className="pt-1">
                  <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>

        <ExternalCta className="animate-glow-pulse mt-10 flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-base font-bold text-primary-foreground transition-transform active:scale-[0.98]">
          Zacznij już teraz - za darmo!
        </ExternalCta>
      </div>
    </section>
  )
}
