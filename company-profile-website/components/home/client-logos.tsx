const clients = [
  "Meridian Corp",
  "Northwave Energy",
  "Citadel Infra",
  "Vanguard Tech",
  "Pinnacle Systems",
  "Atlas Industries",
  "Horizon Partners",
  "Sterling Group",
]

export function ClientLogos() {
  return (
    <section className="border-y border-border bg-secondary py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Trusted by leading organizations
        </p>
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
          {clients.map((client) => (
            <div
              key={client}
              className="flex items-center justify-center rounded-xl border border-border bg-background px-4 py-5"
            >
              <span className="text-xs font-semibold tracking-wide text-muted-foreground/60 text-center">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
