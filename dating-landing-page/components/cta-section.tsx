import Image from "next/image"
import { ArrowRight, CheckCircle2, Heart } from "lucide-react"
import { ExternalCta } from "@/components/external-cta"

const guarantees = [
  { label: "100% bezpłatne", color: "text-success" },
  { label: "Bezpieczne", color: "text-[oklch(0.6_0.18_240)]" },
  { label: "Dyskretne", color: "text-primary" },
]

export function CtaSection() {
  return (
    <section className="relative isolate overflow-hidden px-5 py-14 sm:py-20">
      {/* full-section background image */}
      <Image
        src="/cta-couple.webp"
        alt="Sylwetki pary w intymnej atmosferze wieczornego spotkania"
        fill
        sizes="100vw"
        className="-z-10 scale-110 object-cover blur-sm brightness-110"
      />
      {/* readability overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-background/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background/80 via-transparent to-background/80"
      />

      <div className="relative mx-auto flex max-w-md flex-col items-center text-center">
        <span className="flex h-24 w-24 items-center justify-center rounded-full bg-primary shadow-[0_8px_30px_-6px_oklch(0.62_0.27_350_/_0.7)]">
          <Heart className="h-12 w-12 text-primary-foreground" fill="none" strokeWidth={2.5} aria-hidden="true" />
        </span>

        <h2 className="mt-6 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] sm:text-4xl">
          Na co jeszcze <span className="text-primary">czekasz?</span>
        </h2>

        <p className="mt-4 text-pretty leading-relaxed text-foreground/85 drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
          Dołącz już dziś i umów się na gorące spotkanie w Twojej okolicy! Czekamy na Ciebie!
        </p>

        <ExternalCta className="animate-glow-pulse mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-bold text-primary-foreground transition-transform active:scale-[0.98]">
          Zarejestruj się
          <ArrowRight className="h-5 w-5" />
        </ExternalCta>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {guarantees.map((g) => (
            <li
              key={g.label}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]"
            >
              <CheckCircle2 className={`h-4 w-4 ${g.color}`} />
              {g.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
