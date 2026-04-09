"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { gsap } from "gsap"
import { useLanguage } from "@/context/language-context"

export function NexusHero() {
  const { t } = useLanguage()
  const p = t.nexusPage

  const badgeRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const dashboardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
      tl.fromTo(badgeRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo(headingRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.3")
        .fromTo(subRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.5")
        .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.4")
        .fromTo(statsRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
        .fromTo(dashboardRef.current, { opacity: 0, y: 60, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power2.out" }, "-=0.3")
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div ref={badgeRef} className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2" style={{ opacity: 0 }}>
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">{p.badge}</span>
          </div>

          <h1 ref={headingRef} className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance" style={{ opacity: 0 }}>
            {p.heading}
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mt-2">
              {p.headingHighlight}
            </span>
          </h1>

          <p ref={subRef} className="mt-8 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto text-pretty" style={{ opacity: 0 }}>
            {p.subheading}
          </p>

          <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" style={{ opacity: 0 }}>
            <Button size="lg" className="px-8 h-14 text-base shadow-lg shadow-primary/25" asChild>
              <a href="https://wa.me/50763666033?text=Hola%20CODEXIA%2C%20quiero%20una%20demo%20de%20NEXUS%20POS." target="_blank" rel="noopener noreferrer">
                {p.ctaPrimary}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="px-8 h-14 text-base" asChild>
              <a href="https://wa.me/50763666033?text=Hola%20CODEXIA%2C%20quiero%20ver%20una%20demo%20de%20NEXUS%20POS." target="_blank" rel="noopener noreferrer">
                <Play className="mr-2 h-5 w-5" />
                {p.ctaDemo}
              </a>
            </Button>
          </div>

          <div ref={statsRef} className="mt-16 grid grid-cols-3 gap-8 border-t border-border pt-10" style={{ opacity: 0 }}>
            {p.stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div ref={dashboardRef} className="mt-20 relative" style={{ opacity: 0 }}>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl blur-2xl opacity-50" />
          <div className="relative rounded-2xl border border-border bg-card p-2 shadow-2xl shadow-primary/5">
            <div className="rounded-xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/nexus-hero-dashboard.png"
                alt="NEXUS POS Dashboard - Panel de administración con métricas de ventas e inventario"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-lg">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">{p.dashboardLabel}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
