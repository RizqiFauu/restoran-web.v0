import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Projects | Apex Group",
  description:
    "Explore our portfolio of successful projects across engineering, technology, and infrastructure.",
}

const projects = [
  {
    title: "Meridian Tower Complex",
    industry: "Commercial Real Estate",
    description:
      "Complete structural and MEP engineering for a 42-story mixed-use tower, including seismic design and sustainable energy systems.",
    tags: ["Structural", "MEP", "Sustainability"],
  },
  {
    title: "NorthGrid Energy Network",
    industry: "Energy & Utilities",
    description:
      "Design and project management for a 200MW renewable energy grid integration spanning three counties, including substation design and grid modernization.",
    tags: ["Energy", "Project Management", "Infrastructure"],
  },
  {
    title: "Citadel Digital Transformation",
    industry: "Financial Services",
    description:
      "Enterprise-wide digital transformation program for a major financial institution, migrating legacy systems to cloud-native architecture.",
    tags: ["Technology", "Cloud", "Strategy"],
  },
  {
    title: "Metro Transit Expansion",
    industry: "Transportation",
    description:
      "Engineering and project management for a 15-mile light rail extension, including station design, tunnel engineering, and systems integration.",
    tags: ["Transportation", "Civil", "Systems"],
  },
  {
    title: "Pacific Telecom Network",
    industry: "Telecommunications",
    description:
      "Design and deployment of fiber-optic backbone infrastructure covering 500+ miles, connecting rural communities to high-speed broadband.",
    tags: ["Telecom", "Infrastructure", "Design"],
  },
  {
    title: "Atlas Manufacturing Hub",
    industry: "Industrial",
    description:
      "Full-cycle engineering for a 250,000 sq ft advanced manufacturing facility, including process engineering, automation systems, and quality labs.",
    tags: ["Industrial", "Process", "Automation"],
  },
  {
    title: "Harbor District Revitalization",
    industry: "Urban Development",
    description:
      "Master planning and infrastructure design for a 40-acre waterfront redevelopment, integrating sustainable stormwater management and public spaces.",
    tags: ["Urban Planning", "Civil", "Sustainability"],
  },
  {
    title: "Vanguard Data Center Campus",
    industry: "Technology",
    description:
      "Engineering design for a Tier IV data center campus with 50MW power capacity, advanced cooling systems, and 99.999% uptime architecture.",
    tags: ["Data Centers", "Electrical", "Cooling"],
  },
  {
    title: "Pinnacle Hospital Expansion",
    industry: "Healthcare",
    description:
      "MEP and structural engineering for a 200-bed hospital wing expansion, including specialized surgical suites and critical care facilities.",
    tags: ["Healthcare", "MEP", "Structural"],
  },
]

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Our Projects"
        description="A portfolio of impact. Explore select projects that demonstrate our capabilities across industries."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="rounded-lg text-xs font-medium"
                  >
                    {project.industry}
                  </Badge>
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
