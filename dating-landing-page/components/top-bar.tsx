"use client"

import { Video, MapPin, LogIn } from "lucide-react"
import { useState, useRef, useEffect, type ReactNode } from "react"
import { ExternalCta } from "@/components/external-cta"

function CategoryItem({ icon, label }: { icon: ReactNode; label: string }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function handleOutside(e: PointerEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("pointerdown", handleOutside)
    return () => document.removeEventListener("pointerdown", handleOutside)
  }, [open])

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 whitespace-nowrap py-1 font-medium text-foreground outline-none focus-visible:text-primary"
      >
        {icon}
        {label}
      </button>

      {open && (
        <div
          role="tooltip"
          className="absolute left-1/2 top-full z-50 mt-2 w-56 -translate-x-1/2 rounded-lg border border-border bg-card p-3 text-left shadow-lg"
        >
          <span
            aria-hidden
            className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-l border-t border-border bg-card"
          />
          <p className="text-xs leading-relaxed text-muted-foreground">
            Zarejestruj się, aby skorzystać z tej usługi. Rejestracja trwa{" "}
            <span className="font-semibold text-foreground">30 sekund</span> i jest{" "}
            <span className="font-semibold text-primary">całkowicie darmowa</span>.
          </p>
        </div>
      )}
    </div>
  )
}

export function TopBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-black">
      <div className="flex w-full items-center justify-between gap-3 px-4 py-3 sm:px-6">
        {/* domain name */}
        <span className="shrink-0 text-base font-bold tracking-tight text-foreground">
          Randki<span className="text-primary">Obok</span>
        </span>

        {/* login button */}
        <ExternalCta className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform active:scale-[0.98]">
          <LogIn className="h-4 w-4" />
          Zaloguj się
        </ExternalCta>
      </div>

      {/* quick categories */}
      <nav
        aria-label="Kategorie"
        className="flex w-full items-center justify-between gap-2 px-4 pb-2.5 text-[0.7rem] sm:justify-start sm:gap-6 sm:px-6"
      >
        <CategoryItem
          icon={
            <span className="relative flex h-2 w-2">
              <span className="animate-dot-ping absolute inline-flex h-2 w-2 rounded-full bg-success" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
          }
          label="Teraz online"
        />
        <CategoryItem icon={<Video className="h-3.5 w-3.5 text-primary" />} label="Kamerki" />
        <CategoryItem
          icon={<MapPin className="h-3.5 w-3.5 text-primary" />}
          label="W Twojej okolicy"
        />
      </nav>
    </header>
  )
}
