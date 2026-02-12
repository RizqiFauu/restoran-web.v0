import Link from "next/link"
import {
  Cog,
  MonitorSmartphone,
  BarChart3,
  ShieldCheck,
  Lightbulb,
  Layers,
} from "lucide-react"
import { ArrowRight } from "lucide-react"

const services = [
  {
    icon: Cog,
    title: "Engineering & Design",
    description:
      "Comprehensive engineering solutions from concept through completion, covering structural, mechanical, and electrical disciplines.",
  },
  {
    icon: MonitorSmartphone,
    title: "Technology Consulting",
    description:
      "Strategic technology advisory and digital transformation services to modernize your operations and accelerate innovation.",
  },
  {
    icon: BarChart3,
    title: "Project Management",
    description:
      "End-to-end project oversight ensuring on-time, on-budget delivery with rigorous quality and safety standards.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Comprehensive testing and certification services to ensure compliance with international standards and regulations.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Lab",
    description:
      "Research and development services exploring emerging technologies and creating proof-of-concept solutions for complex challenges.",
  },
  {
    icon: Layers,
    title: "Infrastructure Solutions",
    description:
      "Design and implementation of resilient infrastructure systems for energy, transportation, and telecommunications sectors.",
  },
]

export function ServicesPreview() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            What We Do
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Services tailored to your needs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            We offer a comprehensive range of services designed to address the
            most complex challenges facing modern enterprises.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-background p-8 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
