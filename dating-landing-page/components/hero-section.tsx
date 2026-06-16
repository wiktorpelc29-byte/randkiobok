import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { OnlineCounter } from "@/components/online-counter"
import { ExternalCta } from "@/components/external-cta"

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden px-5 pb-12 pt-20 sm:pt-28">
      {/* full-section background image */}
      <Image
        src="/hero-intimate.webp"
        alt="Intymna atmosfera wieczornego spotkania"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      {/* minimal overlay - bottom only, image stays fully visible */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/20 to-transparent"
      />
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]"
      />
      <div className="relative mx-auto flex max-w-md flex-col items-center text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Dyskretne spotkania bez zobowiązań
        </span>

        <h1 className="text-balance text-xl font-bold leading-tight tracking-tight text-foreground drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] sm:text-4xl">
          <span className="block">Umów się</span>
          <span className="block">na seks</span>
          <span className="block">
            w mniej niż <span className="text-primary">10 minut!</span>
          </span>
        </h1>

        <p
          className="mt-3 max-w-[12.5rem] text-pretty text-[11px] leading-relaxed text-foreground/85 drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)] sm:max-w-xs sm:text-xs"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          Zarejestruj się i umów się na spotkanie w okolicy jeszcze dziś!
        </p>

        <ExternalCta className="animate-glow-pulse mt-7 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-3 text-sm font-bold tracking-wide text-primary-foreground transition-transform active:scale-[0.98]">
          Zarejestruj się
          <ArrowRight className="h-4 w-4" />
        </ExternalCta>

        <p className="mt-3 text-xs font-medium text-foreground/80 drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
          Rejestracja jest <span className="text-primary">darmowa</span> i trwa tylko 30 sekund!
        </p>

        <div className="mt-5">
          <OnlineCounter />
        </div>
      </div>
    </section>
  )
}
