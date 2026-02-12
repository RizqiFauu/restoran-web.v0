import { Building2, Users, Globe, Award } from "lucide-react"

const stats = [
  { icon: Building2, value: "15+", label: "Years of Experience" },
  { icon: Globe, value: "300+", label: "Projects Completed" },
  { icon: Users, value: "80+", label: "Clients Served" },
  { icon: Award, value: "25+", label: "Industry Awards" },
]

export function SnapshotSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Who We Are
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Building the future through innovative engineering
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Apex Group is a leading multidisciplinary firm specializing in
              engineering, technology consulting, and project management. Since
              2008, we have partnered with organizations across industries to
              deliver solutions that are efficient, sustainable, and built to
              last.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our approach combines deep technical expertise with a genuine
              commitment to understanding our clients&apos; challenges. We
              don&apos;t just deliver projects &mdash; we build lasting
              partnerships.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/30 hover:bg-accent/5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <stat.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-heading text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
