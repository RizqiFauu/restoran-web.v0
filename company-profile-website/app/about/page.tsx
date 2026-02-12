import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Target, Eye, Heart, Shield, Users, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Apex Group",
  description:
    "Learn about Apex Group's history, vision, mission, and the values that drive our commitment to engineering excellence.",
}

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We pursue the highest standards in every project we undertake, never settling for less.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Transparency and honesty form the foundation of every client relationship we build.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe the best solutions come from working closely with our clients as true partners.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We embrace new technologies and methodologies to deliver forward-thinking solutions.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Our clients trust us to deliver on time and within budget, every single time.",
  },
  {
    icon: Eye,
    title: "Sustainability",
    description: "We design solutions that are not only effective today but responsible for tomorrow.",
  },
]

const team = [
  {
    name: "James Thornton",
    role: "Chief Executive Officer",
    bio: "25+ years of experience leading engineering firms across three continents.",
  },
  {
    name: "Sarah Mitchell",
    role: "Chief Technology Officer",
    bio: "Former CTO at a Fortune 500 tech company, specializing in digital transformation.",
  },
  {
    name: "David Chen",
    role: "VP of Engineering",
    bio: "Licensed professional engineer with expertise in infrastructure and energy systems.",
  },
  {
    name: "Maria Santos",
    role: "Director of Operations",
    bio: "PMP-certified operations leader with a track record of scaling service organizations.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Apex Group"
        description="A legacy of engineering excellence and a vision for the future."
      />

      {/* History */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20 items-start">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                Our Story
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
                Built on a foundation of trust and expertise
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-base leading-relaxed text-muted-foreground">
                Founded in 2008, Apex Group began as a small engineering
                consultancy with a clear mission: deliver world-class
                engineering solutions without compromise. What started as a team
                of five has grown into a multidisciplinary firm of 120+
                professionals serving clients across industries.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Over the past 15 years, we&apos;ve expanded our capabilities to
                include technology consulting, project management, and
                infrastructure design. Our growth has been driven not by
                aggressive expansion, but by the trust our clients place in us
                and the referrals that come from consistently exceeding
                expectations.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Today, we serve clients ranging from mid-market enterprises to
                Fortune 500 corporations, across energy, telecommunications,
                transportation, and technology sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-heading text-xl font-bold text-foreground">
                Our Vision
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                To be the most trusted engineering and technology partner for
                organizations building the infrastructure of tomorrow &mdash;
                delivering solutions that are innovative, sustainable, and
                built to last.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-heading text-xl font-bold text-foreground">
                Our Mission
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                To empower enterprises with engineering excellence, leveraging
                deep expertise and emerging technologies to solve complex
                challenges and create measurable, lasting value for our clients,
                communities, and stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Our Values
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              The principles that guide everything we do
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <value.icon className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Leadership
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Meet our leadership team
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-border bg-background p-8 text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground font-heading font-bold text-lg">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="mt-5 font-heading text-base font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
