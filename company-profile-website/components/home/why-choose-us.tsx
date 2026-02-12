import { CheckCircle2 } from "lucide-react"

const reasons = [
  {
    title: "Proven Track Record",
    description:
      "Over 15 years of delivering complex projects on time and within budget across diverse industries.",
  },
  {
    title: "Expert Team",
    description:
      "120+ certified professionals with deep domain expertise in engineering, technology, and management.",
  },
  {
    title: "Client-Centric Approach",
    description:
      "We tailor every engagement to your unique requirements, ensuring solutions that truly fit your business.",
  },
  {
    title: "Reliable Delivery",
    description:
      "Rigorous project management methodologies and quality assurance processes ensure consistent results.",
  },
  {
    title: "Global Standards",
    description:
      "ISO-certified operations with adherence to international standards across all disciplines.",
  },
  {
    title: "Long-Term Partnerships",
    description:
      "98% client retention rate speaks to our commitment to building lasting, value-driven relationships.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Why Apex Group
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Why leading organizations choose us
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-6 w-6 text-accent mt-0.5" />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
