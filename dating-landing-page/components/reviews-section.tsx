"use client"

import { useRef, useState } from "react"
import { ShieldCheck, Users, MapPin } from "lucide-react"

const reviews = [
  {
    title: "Naprawdę miłe zaskoczenie",
    nick: "patryk_mil",
    text: "Szczerze nie spodziewałam się, że tak szybko trafię tu na ciekawe osoby. Wszystko jest proste i czytelne, a rozmowy od początku są szczere i bez owijania w bawełnę. W końcu miejsce, gdzie można otwarcie mówić o tym, czego się szuka.",
  },
  {
    title: "Dyskrecja na najwyższym poziomie",
    nick: "kuba_ww",
    text: "Korzystam od kilku miesięcy i poznałem mnóstwo fajnych kobiet z mojej okolicy. Najbardziej cenię to, że wszystko zostaje między nami — pełna anonimowość i żadnych niezręcznych sytuacji. Spokojnie mogę polecić każdemu.",
  },
  {
    title: "Działa szybciej niż myślałem",
    nick: "darek_77",
    text: "Byłem sceptyczny, ale pierwsze rozmowy zaczęły się dosłownie po paru minutach. Tego samego dnia umówiłem się na spotkanie. Mnóstwo aktywnych osób w pobliżu, bez czekania w nieskończoność na odpowiedź.",
  },
  {
    title: "Same prawdziwe konta",
    nick: "rafal_z",
    text: "Bez zobowiązań i bez ściemy — dokładnie czegoś takiego szukałem. Profile są autentyczne, a fałszywki znikają błyskawicznie. Widać, że ktoś realnie pilnuje porządku na portalu.",
  },
  {
    title: "Prosto i bez marnowania czasu",
    nick: "michal_bb",
    text: "Dużo osób w mojej okolicy i wszystko działa intuicyjnie. Szybko, konkretnie i bez sztucznych rozmów donikąd. Idealne dla kogoś, kto woli od razu przejść do sedna.",
  },
  {
    title: "Wreszcie czuję się komfortowo",
    nick: "tomasz_1989",
    text: "Piszę tylko z tymi osobami, na które mam ochotę, a moje dane są dobrze zabezpieczone. Mam pełną kontrolę nad tym, kto może się do mnie odezwać. Naprawdę spokojna głowa, polecam z czystym sumieniem.",
  },
]

const stats = [
  { icon: ShieldCheck, value: "39+", label: "aktywnej moderacji walczącej z fałszywymi kontami" },
  { icon: Users, value: "75k+", label: "zadowolonych użytkowników" },
  { icon: MapPin, value: "135+", label: "różnych lokalizacji naszych użytkowników" },
]

// group reviews into slides of 2
const slides = Array.from({ length: Math.ceil(reviews.length / 2) }, (_, i) =>
  reviews.slice(i * 2, i * 2 + 2),
)

export function ReviewsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  function handleScroll() {
    const el = scrollerRef.current
    if (!el) return
    const index = Math.round(el.scrollLeft / el.clientWidth)
    setActive(index)
  }

  function goTo(index: number) {
    const el = scrollerRef.current
    if (!el) return
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" })
  }

  return (
    <section className="px-5 pb-10 pt-6">
      <div className="mx-auto max-w-md">
        {/* stats */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.value} className="flex flex-col items-center p-3 text-center">
                <Icon className="h-6 w-6 text-primary" />
                <span className="mt-2 text-3xl font-bold text-foreground">{s.value}</span>
                <span className="mt-1.5 text-xs font-medium leading-snug text-foreground/80">{s.label}</span>
              </div>
            )
          })}
        </div>

        {/* heading */}
        <div className="mt-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Opinie</span>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground">
            Co mówią nasi użytkownicy?
          </h2>
        </div>

        {/* carousel */}
        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          className="mt-8 flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((group, i) => (
            <div key={i} className="flex w-full shrink-0 snap-center flex-col gap-4 px-0.5">
              {group.map((r) => (
                <article key={r.nick} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-pretty text-base font-bold text-foreground">{r.title}</h3>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">{r.text}</p>
                  <p className="mt-4 text-sm font-semibold text-primary">— @{r.nick}</p>
                </article>
              ))}
            </div>
          ))}
        </div>

        {/* dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Przejdź do opinii ${i + 1}`}
              aria-current={active === i}
              className={`h-2 rounded-full transition-all ${
                active === i ? "w-6 bg-primary" : "w-2 bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
