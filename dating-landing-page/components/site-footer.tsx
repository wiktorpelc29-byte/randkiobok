import { ShieldCheck } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-5 py-10">
      <div className="mx-auto flex max-w-md flex-col items-center gap-6 text-center">
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a href="#" className="transition-colors hover:text-foreground">
            Regulamin
          </a>
          <a href="#" className="transition-colors hover:text-foreground">
            Polityka Prywatności
          </a>
          <a href="#" className="transition-colors hover:text-foreground">
            Kontakt
          </a>
        </nav>

        <p className="flex items-center gap-2 text-xs leading-relaxed text-muted-foreground">
          <ShieldCheck className="h-4 w-4 shrink-0 text-success" />
          Serwis dba o prywatność użytkowników. Twoje dane są bezpieczne.
        </p>

        <p className="text-xs font-medium text-muted-foreground">18+ tylko dla pełnoletnich.</p>
      </div>
    </footer>
  )
}
