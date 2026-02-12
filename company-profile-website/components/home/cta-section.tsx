import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center sm:px-16 lg:py-24">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
          <div className="relative">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl text-balance">
              Let&apos;s work together
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/70">
              Have a project in mind? We&apos;d love to hear about it. Get in
              touch with our team to discuss how we can help bring your vision
              to life.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 font-medium gap-2"
                >
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-medium bg-transparent"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
