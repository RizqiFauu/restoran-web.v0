import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  MapPin,
  Clock,
  Briefcase,
  GraduationCap,
  Heart,
  TrendingUp,
  Users,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Careers | Apex Group",
  description:
    "Join our team of 120+ professionals. Explore open positions and discover why Apex Group is a great place to build your career.",
}

const benefits = [
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description:
      "Clear career progression paths with mentorship programs and leadership development tracks.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description:
      "Annual education budget, conference attendance, and access to professional certification programs.",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description:
      "Flexible work arrangements, generous PTO, and wellness programs to support your well-being.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Work alongside industry experts in a supportive environment that values diverse perspectives.",
  },
]

const positions = [
  {
    title: "Senior Structural Engineer",
    department: "Engineering",
    location: "New York, NY",
    type: "Full-time",
  },
  {
    title: "Cloud Solutions Architect",
    department: "Technology Consulting",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Project Manager, Infrastructure",
    department: "Project Management",
    location: "Chicago, IL",
    type: "Full-time",
  },
  {
    title: "Quality Assurance Specialist",
    department: "Quality",
    location: "Houston, TX",
    type: "Full-time",
  },
  {
    title: "Electrical Design Engineer",
    department: "Engineering",
    location: "New York, NY",
    type: "Full-time",
  },
  {
    title: "Business Development Manager",
    department: "Commercial",
    location: "Remote",
    type: "Full-time",
  },
]

export default function CareersPage() {
  return (
    <>
      <PageHeader
        title="Join Our Team"
        description="Build your career with a company that values expertise, innovation, and people."
      />

      {/* Why Work With Us */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Why Apex Group
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Why work with us
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
              We invest in our people because they are the foundation of
              everything we deliver. Here&apos;s what you can expect as part of
              our team.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-border bg-card p-8 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-base font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Open Positions
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Current openings
            </h2>
          </div>

          <div className="mt-14 flex flex-col gap-4">
            {positions.map((position) => (
              <div
                key={position.title}
                className="group flex flex-col gap-4 rounded-2xl border border-border bg-background p-6 transition-all hover:border-accent/30 hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {position.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5" />
                      {position.department}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {position.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {position.type}
                    </span>
                  </div>
                </div>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-xl gap-2 font-medium bg-transparent"
                  >
                    Apply Now
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-muted-foreground">
              Don&apos;t see the right role?{" "}
              <Link
                href="/contact"
                className="font-medium text-accent hover:text-accent/80 transition-colors"
              >
                Send us your resume
              </Link>{" "}
              and we&apos;ll keep you in mind for future opportunities.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
