"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap"
import { useLanguage } from "@/context/language-context"

export function Hero() {
  const { t } = useLanguage()
  const p = t.cobrosPage

  const badgeRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const tagsRef = useRef<HTMLDivElement>(null)
  const dashboardRef = useRef<HTMLDivElement>(null)
  const floatLeftRef = useRef<HTMLDivElement>(null)
  const floatRightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
      tl.fromTo(badgeRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo(headingRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.3")
        .fromTo(subRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
        .fromTo(tagsRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
        .fromTo(dashboardRef.current, { opacity: 0, y: 60, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power2.out" }, "-=0.2")
        .fromTo(floatLeftRef.current, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.5 }, "-=0.5")
        .fromTo(floatRightRef.current, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.5 }, "-=0.5")
    })
    return () => ctx.revert()
  }, [])

  const tags = [
    { label: p.configRapida, color: "accent" },
    { label: p.datosSeguros, color: "primary" },
    { label: p.soporteEspanol, color: "accent" },
  ]

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-accent/8" />
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-accent/15 to-transparent blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full bg-gradient-to-br from-secondary to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.90_0.02_260/0.5)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.90_0.02_260/0.5)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black,transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div ref={badgeRef} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 via-card to-accent/10 border border-primary/20 mb-10 shadow-lg shadow-primary/5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
            </span>
            <span className="text-sm font-medium text-foreground">{p.badge}</span>
          </div>

          <h1 ref={headingRef} className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            <span className="text-balance">{p.heading}</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              {p.headingHighlight}
            </span>
          </h1>

          <p ref={subRef} className="mt-8 text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {p.subheading}
          </p>

          <div ref={ctaRef} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto text-base px-8 h-14 rounded-xl shadow-lg shadow-primary/25" asChild>
              <a href="https://wa.me/50763666033?text=Hola%20CODEXIA%2C%20quiero%20una%20demo%20de%20COD%20Cobros." target="_blank" rel="noopener noreferrer">
                {p.ctaDemo}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          <div ref={tagsRef} className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {tags.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-muted-foreground">
                <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${item.color === "accent" ? "bg-accent/20" : "bg-primary/20"}`}>
                  <svg className={`h-4 w-4 ${item.color === "accent" ? "text-accent" : "text-primary"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard preview */}
        <div className="mt-20 lg:mt-24 relative">
          <div ref={floatLeftRef} className="absolute -left-4 top-1/4 hidden lg:block z-20">
            <div className="rounded-2xl bg-card/95 backdrop-blur border border-border p-4 shadow-2xl shadow-primary/10 animate-bounce">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
                  <svg className="h-5 w-5 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{p.floatPayment}</p>
                  <p className="text-xs text-muted-foreground">{p.floatPaymentDesc}</p>
                </div>
              </div>
            </div>
          </div>

          <div ref={floatRightRef} className="absolute -right-4 top-1/3 hidden lg:block z-20">
            <div className="rounded-2xl bg-card/95 backdrop-blur border border-border p-4 shadow-2xl shadow-primary/10 animate-bounce" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <svg className="h-5 w-5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{p.floatReminder}</p>
                  <p className="text-xs text-muted-foreground">{p.floatReminderDesc}</p>
                </div>
              </div>
            </div>
          </div>

          <div ref={dashboardRef} className="relative mx-auto max-w-5xl">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-60" />
            <div className="relative rounded-2xl bg-card border border-border shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-muted/80 to-muted/60 px-4 py-3 border-b border-border flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-background/80 border border-border/50">
                    <span className="text-xs text-muted-foreground">app.codcobros.com</span>
                  </div>
                </div>
              </div>
              <div className="p-6 lg:p-8 bg-gradient-to-br from-card via-card to-muted/30">
                <DashboardPreview />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DashboardPreview() {
  const { t } = useLanguage()
  const p = t.cobrosPage
  const statuses = p.dashboardPaymentStatus

  const rows = [
    { client: "Empresa ABC", amount: "$2,500", statusIdx: 0, color: "accent" },
    { client: "Tech Solutions", amount: "$4,800", statusIdx: 1, color: "muted" },
    { client: "Comercial XYZ", amount: "$1,200", statusIdx: 2, color: "primary" },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-card to-primary/5 p-5 border border-primary/20">
        <p className="text-sm text-muted-foreground mb-3">{p.dashboardPorCobrar}</p>
        <p className="text-3xl font-bold text-foreground">$45,230</p>
        <p className="mt-2 text-sm text-accent">+12% {p.dashboardChart.toLowerCase()}</p>
      </div>
      <div className="rounded-2xl bg-gradient-to-br from-accent/10 via-card to-accent/5 p-5 border border-accent/20">
        <p className="text-sm text-muted-foreground mb-3">{p.dashboardRecordatorios}</p>
        <p className="text-3xl font-bold text-foreground">156</p>
        <p className="mt-2 text-sm text-muted-foreground">{p.dashboardRecordatoriosDesc}</p>
      </div>
      <div className="rounded-2xl bg-gradient-to-br from-secondary via-card to-secondary/30 p-5 border border-border">
        <p className="text-sm text-muted-foreground mb-3">{p.dashboardClientes}</p>
        <p className="text-3xl font-bold text-foreground">48</p>
        <p className="mt-2 text-sm text-muted-foreground">{p.dashboardClientesDesc}</p>
      </div>
      <div className="md:col-span-2 rounded-2xl bg-card p-5 border border-border">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-semibold text-foreground">{p.dashboardActivity}</p>
          <span className="text-xs text-primary font-medium">{p.dashboardViewAll}</span>
        </div>
        <div className="space-y-3">
          {rows.map((item, i) => (
            <div key={i} className="flex items-center justify-between py-2.5 border-b border-border/50 last:border-0">
              <div className="flex items-center gap-3">
                <div className={`h-2 w-2 rounded-full ${item.color === "accent" ? "bg-accent" : item.color === "primary" ? "bg-primary" : "bg-muted-foreground"}`} />
                <span className="text-sm text-foreground">{item.client}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-foreground">{item.amount}</span>
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                  item.color === "accent" ? "bg-accent/15 text-accent" :
                  item.color === "muted" ? "bg-muted text-muted-foreground" :
                  "bg-primary/15 text-primary"
                }`}>
                  {statuses[item.statusIdx]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 p-5 border border-border">
        <p className="text-sm font-semibold text-foreground mb-4">{p.dashboardChart}</p>
        <div className="flex items-end gap-1.5 h-20">
          {[35, 55, 45, 70, 60, 85, 75].map((height, i) => (
            <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-primary to-primary/60" style={{ height: `${height}%` }} />
          ))}
        </div>
        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
          <span>Lun</span><span>Dom</span>
        </div>
      </div>
    </div>
  )
}
