"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Calculator,
  Bot,
  FileText,
  ShieldCheck,
  Clock,
  Smartphone,
  CheckCircle2,
  MessageCircle,
  Users,
  DollarSign,
  BarChart3,
  Zap,
} from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { HeroWithGradient } from "@/components/ui/hero-section-with-gradient"

// ── Image variables ──────────────────────────────────────────────
const IMG_HERO_DASHBOARD = "/images/planilla-hero-dashboard.png"
const IMG_SCREENSHOT_NOMINA = "/images/planilla-screenshot-nomina.png"
const IMG_SCREENSHOT_IA = "/images/planilla-hero-dashboard2.png"
const IMG_SCREENSHOT_REPORTES = "/images/planilla-screenshot-reportes.png"
// ────────────────────────────────────────────────────────────────

const featureIcons = [Calculator, Bot, FileText, ShieldCheck, Clock, Smartphone]
const benefitIcons = [Users, DollarSign, BarChart3, Zap]
const screenshotImages = [IMG_SCREENSHOT_NOMINA, IMG_SCREENSHOT_IA, IMG_SCREENSHOT_REPORTES]

export default function PlanillaPage() {
  const { t } = useLanguage()
  const p = t.planillaPage

  return (
    <main className="min-h-screen bg-background">

      {/* ── HERO ── */}
      <HeroWithGradient
        badge={
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            {p.badge}
          </div>
        }
        heading={
          <>
            {p.heading}{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {p.headingHighlight}
            </span>
          </>
        }
        subheading={p.subheading}
        ctaPrimary={{
          label: p.ctaDemo,
          href: "https://wa.me/50763666033?text=Hola%20CODEXIA%2C%20quiero%20una%20demo%20de%20COD%20Planilla%20Panam%C3%A1.",
          icon: <MessageCircle className="h-5 w-5" />,
        }}
        ctaSecondary={{ label: p.ctaPricing, href: "/contact" }}
        tags={p.tags.map((tag) => ({
          label: tag,
          icon: <CheckCircle2 className="h-4 w-4 text-primary" />,
        }))}
        dashboardImage={IMG_HERO_DASHBOARD}
        dashboardImageAlt="COD Planilla Panamá - Dashboard"
      />

      {/* ── FEATURES ── */}
      <section className="border-y border-border bg-card py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">{p.featuresEyebrow}</p>
            <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
              {p.featuresHeading}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{p.featuresSubheading}</p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {p.features.map((feature, i) => {
              const Icon = featureIcons[i]
              return (
                <div
                  key={feature.title}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-background p-6 transition-all duration-200 hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-semibold text-foreground">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SCREENSHOTS ── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">{p.screenshotsEyebrow}</p>
            <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
              {p.screenshotsHeading}
            </h2>
          </div>

          <div className="mt-14 space-y-6">
            {/* Primera — ancho completo */}
            <div className="group overflow-hidden rounded-2xl border border-border shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-primary/30">
              <Image
                src={screenshotImages[0]}
                alt={p.screenshots[0].label}
                width={1400}
                height={800}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              />
              <div className="border-t border-border bg-card px-6 py-4">
                <h3 className="font-semibold text-foreground">{p.screenshots[0].label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.screenshots[0].description}</p>
              </div>
            </div>

            {/* Segunda y tercera — dos columnas */}
            <div className="grid gap-6 md:grid-cols-2">
              {p.screenshots.slice(1).map((shot, i) => (
                <div key={shot.label} className="group overflow-hidden rounded-2xl border border-border shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-primary/30">
                  <Image
                    src={screenshotImages[i + 1]}
                    alt={shot.label}
                    width={900}
                    height={600}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                  <div className="border-t border-border bg-card px-6 py-4">
                    <h3 className="font-semibold text-foreground">{shot.label}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{shot.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS + INCLUDED ── */}
      <section className="border-y border-border bg-card py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">

            {/* Benefits */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">{p.benefitsEyebrow}</p>
              <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
                {p.benefitsHeading}
              </h2>
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {p.benefits.map((b, i) => {
                  const Icon = benefitIcons[i]
                  return (
                    <div key={b.title} className="rounded-xl border border-border bg-background p-5 transition-colors hover:border-primary/30">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-3 font-semibold text-foreground">{b.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{b.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* What's included */}
            <div className="rounded-2xl border border-primary/20 bg-background p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{p.includedTitle}</h3>
                  <p className="text-sm text-muted-foreground">{p.includedSubtitle}</p>
                </div>
              </div>
              <ul className="mt-6 divide-y divide-border">
                {p.included.map((item) => (
                  <li key={item} className="flex items-center gap-3 py-3 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-primary/70 px-8 py-20 text-center shadow-2xl sm:px-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.15),transparent_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,0,0,0.15),transparent_60%)]" />
            <div className="relative">
              <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                {p.ctaFinalHeading}
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-white/80">
                {p.ctaFinalSubheading}
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="h-12 bg-white px-8 text-base font-semibold text-primary hover:bg-white/90 shadow-lg" asChild>
                  <a
                    href="https://wa.me/50763666033?text=Hola%20CODEXIA%2C%20quiero%20una%20demo%20de%20COD%20Planilla%20Panam%C3%A1."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    {p.ctaFinalWhatsApp}
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-12 border-white/40 px-8 text-base text-white hover:bg-white/10 hover:text-white" asChild>
                  <a href="/contact">{p.ctaFinalForm}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
