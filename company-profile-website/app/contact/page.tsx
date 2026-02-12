import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact-form"
import { MapPin, Mail, Phone, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | Apex Group",
  description:
    "Get in touch with Apex Group. Contact us to discuss your project, request a proposal, or learn more about our services.",
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    lines: ["123 Business Avenue", "Suite 500", "New York, NY 10001"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@apexgroup.com", "careers@apexgroup.com"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+1 (212) 555-1234", "+1 (212) 555-5678"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Monday - Friday", "9:00 AM - 6:00 PM EST"],
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="We'd love to hear from you. Get in touch to discuss how we can help with your next project."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-5 lg:gap-20">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                Get in Touch
              </span>
              <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                We&apos;re here to help
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Whether you have a question about our services, need a proposal,
                or want to explore a partnership, our team is ready to assist.
              </p>

              <div className="mt-10 flex flex-col gap-8">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">
                        {info.title}
                      </h3>
                      <div className="mt-1 flex flex-col gap-0.5">
                        {info.lines.map((line) => (
                          <p
                            key={line}
                            className="text-sm text-muted-foreground"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Send us a message
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill out the form below and our team will get back to you
                  within 24 hours.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="border-t border-border">
        <div className="relative h-64 w-full bg-secondary lg:h-80">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="mx-auto h-8 w-8 text-muted-foreground/40" />
              <p className="mt-2 text-sm text-muted-foreground/60">
                123 Business Avenue, Suite 500, New York, NY 10001
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
