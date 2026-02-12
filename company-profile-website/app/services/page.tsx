import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import {
  Cog,
  MonitorSmartphone,
  BarChart3,
  ShieldCheck,
  Lightbulb,
  Layers,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Services | Apex Group",
  description:
    "Explore our comprehensive engineering, technology consulting, project management, and infrastructure solutions.",
}

const services = [
  {
    icon: Cog,
    title: "Engineering & Design",
    description:
      "Comprehensive engineering solutions spanning structural, mechanical, electrical, and civil disciplines. We take projects from concept through detailed design to construction support.",
    features: [
      "Structural & civil engineering",
      "Mechanical systems design",
      "Electrical & instrumentation",
      "Feasibility studies & analysis",
    ],
  },
  {
    icon: MonitorSmartphone,
    title: "Technology Consulting",
    description:
      "Strategic advisory services to help organizations leverage technology for competitive advantage. We guide digital transformation journeys from assessment to implementation.",
    features: [
      "Digital transformation strategy",
      "Enterprise architecture",
      "Cloud migration planning",
      "Technology stack assessment",
    ],
  },
  {
    icon: BarChart3,
    title: "Project Management",
    description:
      "End-to-end project management services ensuring your initiatives are delivered on time, within budget, and to the highest quality standards. From planning to closeout.",
    features: [
      "Program & portfolio management",
      "Risk assessment & mitigation",
      "Stakeholder management",
      "Schedule & cost control",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Rigorous quality and compliance services to ensure your projects and products meet international standards. Independent verification and testing across all disciplines.",
    features: [
      "ISO compliance & certification",
      "Inspection & testing services",
      "Regulatory compliance",
      "Performance verification",
    ],
  },
  {
    icon: Lightbulb,
    title: "Innovation Lab",
    description:
      "Research and development services that explore emerging technologies and create proof-of-concept solutions. We help organizations stay ahead of the innovation curve.",
    features: [
      "R&D partnerships",
      "Proof-of-concept development",
      "Technology scouting",
      "Innovation workshops",
    ],
  },
  {
    icon: Layers,
    title: "Infrastructure Solutions",
    description:
      "Design and implementation of resilient infrastructure systems for energy, transportation, and telecommunications. Scalable solutions built for the long term.",
    features: [
      "Energy systems & renewables",
      "Telecommunications networks",
      "Transportation infrastructure",
      "Water & utilities systems",
    ],
  },
]

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We begin by deeply understanding your requirements, constraints, and objectives through structured discovery workshops.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "Our team develops a tailored approach and detailed project plan aligned with your business goals and timelines.",
  },
  {
    step: "03",
    title: "Execution",
    description:
      "We deliver with precision, maintaining transparent communication and rigorous quality control throughout.",
  },
  {
    step: "04",
    title: "Support",
    description:
      "Post-delivery, we provide ongoing support, optimization, and knowledge transfer to ensure long-term success.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="Comprehensive solutions designed to address the most complex challenges facing modern enterprises."
      />

      {/* Detailed Services */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-heading text-2xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                <div
                  className={`rounded-2xl border border-border bg-card p-8 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    What we deliver
                  </h4>
                  <ul className="mt-5 flex flex-col gap-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Our Process
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              How we work
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
              Our proven four-phase methodology ensures consistent, high-quality
              outcomes for every engagement.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((phase) => (
              <div
                key={phase.step}
                className="rounded-2xl border border-border bg-background p-8"
              >
                <span className="font-heading text-3xl font-bold text-accent/30">
                  {phase.step}
                </span>
                <h3 className="mt-3 font-heading text-lg font-semibold text-foreground">
                  {phase.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Ready to discuss your project?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Our team is here to help you find the right solution. Get in touch
            to schedule a consultation.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button
                size="lg"
                className="rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-medium gap-2"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
