"use client"

import Image from "next/image"
import { MessageCircle, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef, useCallback } from "react"
import { ExternalCta } from "@/components/external-cta"

const profiles = [
  { name: "Monika", age: 26, location: "Warszawa · 2 km", img: "/profiles/profile-monika.jpg", online: true },
  { name: "Ania", age: 38, location: "Kraków · 5 km", img: "/profiles/profile-blondynka.jpg", online: true },
  { name: "Klaudia", age: 29, location: "Wrocław · 3 km", img: "/profiles/profile-klaudia.jpg", online: false },
  { name: "Natalia", age: 31, location: "Poznań · 7 km", img: "/profiles/profile-natalia.jpg", online: true },
  { name: "Sandra", age: 27, location: "Gdańsk · 4 km", img: "/profiles/profile-brunetka.jpg", online: true },
  { name: "Ewa", age: 33, location: "Łódź · 6 km", img: "/profiles/profile-brunetka2.jpg", online: false },
]

export function ProfilesSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const indexRef = useRef(0)

  const scrollToIndex = useCallback((index: number) => {
    const el = scrollRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>("[data-card]")
    if (!card) return
    const step = card.offsetWidth + 10
    // clamp so the last reachable position never overshoots the real scroll width
    const maxIndex = Math.max(0, Math.round((el.scrollWidth - el.clientWidth) / step))
    const next = ((index % (maxIndex + 1)) + (maxIndex + 1)) % (maxIndex + 1)
    indexRef.current = next
    el.scrollTo({ left: next * step, behavior: "smooth" })
  }, [])

  const scrollByCards = useCallback(
    (direction: 1 | -1) => {
      scrollToIndex(indexRef.current + direction)
    },
    [scrollToIndex],
  )

  useEffect(() => {
    const interval = setInterval(() => scrollByCards(1), 2500)
    return () => clearInterval(interval)
  }, [scrollByCards])

  return (
    <section id="profile" className="relative isolate scroll-mt-4 overflow-hidden px-5 pb-6 pt-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_60%_at_50%_0%,oklch(0.62_0.27_350_/_0.16),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_50%_at_50%_100%,oklch(0.62_0.27_350_/_0.1),transparent_70%)]"
      />
      <div className="mx-auto max-w-md">
        <h2 className="text-balance text-center text-2xl font-bold tracking-tight text-foreground">
          Nowe profile w Twojej okolicy
        </h2>
        <p className="mt-2 text-center text-sm text-muted-foreground">Ostatnio dołączyły</p>

        <div className="relative mt-8">
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            aria-label="Poprzednie profile"
            className="absolute -left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition-transform active:scale-95"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCards(1)}
            aria-label="Następne profile"
            className="absolute -right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition-transform active:scale-95"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-2.5 overflow-x-auto scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {profiles.map((p) => (
              <article
                key={p.name}
                data-card
                className="group flex w-[calc((100%-0.625rem)/2)] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-border bg-card"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={p.img || "/placeholder.svg"}
                    alt={`Profil: ${p.name}`}
                    fill
                    sizes="(max-width: 480px) 50vw, 220px"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <span className="absolute left-1.5 top-1.5 flex items-center gap-1 rounded-full bg-background/70 px-1.5 py-0.5 text-[9px] font-medium text-foreground backdrop-blur">
                    <span className="relative flex h-1.5 w-1.5">
                      {p.online && (
                        <span className="animate-dot-ping absolute inline-flex h-full w-full rounded-full bg-success" />
                      )}
                      <span
                        className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
                          p.online ? "bg-success" : "bg-muted-foreground"
                        }`}
                      />
                    </span>
                    {p.online ? "Online" : "Zaraz wracam"}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-2">
                  <p className="truncate text-xs font-semibold text-foreground">
                    {p.name}, {p.age}
                  </p>
                  <p className="mt-0.5 flex items-center gap-0.5 text-[10px] leading-tight text-muted-foreground">
                    <MapPin className="h-2.5 w-2.5 shrink-0" />
                    <span className="truncate">{p.location}</span>
                  </p>
                  <ExternalCta
                    aria-label={`Napisz wiadomość do ${p.name}`}
                    className="mt-2 flex items-center justify-center gap-1 rounded-md bg-primary px-2 py-1.5 text-[10px] font-bold text-primary-foreground transition-transform active:scale-[0.98]"
                  >
                    <MessageCircle className="h-3 w-3 shrink-0" />
                    Napisz
                  </ExternalCta>
                </div>
              </article>
            ))}
          </div>
        </div>

        <ExternalCta className="mt-8 flex w-full items-center justify-center rounded-xl bg-primary px-6 py-4 text-base font-bold uppercase tracking-wide text-primary-foreground transition-transform active:scale-[0.98]">
          Zobacz wszystkie profile
        </ExternalCta>
      </div>
    </section>
  )
}
