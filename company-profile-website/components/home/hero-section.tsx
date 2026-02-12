"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div
            className={`flex flex-col gap-8 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-xs font-medium text-primary-foreground/80">
                Trusted by industry leaders worldwide
              </span>
            </div>

            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance">
              Engineering excellence for a{" "}
              <span className="text-accent">complex world</span>
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-primary-foreground/70">
              We partner with enterprises to deliver innovative engineering,
              consulting, and technology solutions that drive measurable
              results and sustainable growth.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link href="/services">
                <Button
                  size="lg"
                  className="rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 font-medium gap-2"
                >
                  Our Services
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-medium gap-2 bg-transparent"
                >
                  Contact Us
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right side - abstract visual */}
          <div
            className={`hidden lg:flex items-center justify-center transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="relative w-full max-w-md">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                  <div className="rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-6 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-primary-foreground font-heading">15+</div>
                    <div className="mt-1 text-sm text-primary-foreground/60">Years of Experience</div>
                  </div>
                  <div className="rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-6 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-primary-foreground font-heading">300+</div>
                    <div className="mt-1 text-sm text-primary-foreground/60">Projects Delivered</div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 mt-8">
                  <div className="rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-6 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-primary-foreground font-heading">120+</div>
                    <div className="mt-1 text-sm text-primary-foreground/60">Expert Engineers</div>
                  </div>
                  <div className="rounded-2xl bg-accent/10 border border-accent/20 p-6 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-accent font-heading">98%</div>
                    <div className="mt-1 text-sm text-primary-foreground/60">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
