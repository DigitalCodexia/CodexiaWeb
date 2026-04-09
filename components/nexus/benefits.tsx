"use client"

import { Check, Zap, Clock, TrendingUp } from "lucide-react"
import { useLanguage } from "@/context/language-context"

const icons = [Zap, Clock, TrendingUp]

export function NexusBenefits() {
  const { t } = useLanguage()
  const p = t.nexusPage

  return (
    <section id="beneficios" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">{p.benefitsEyebrow}</p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            {p.benefitsHeading}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {p.benefitsSubheading}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {p.benefits.map((benefit, i) => {
            const Icon = icons[i]
            return (
              <div key={benefit.title} className="relative rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">{benefit.stats}</div>
                    <div className="text-xs text-muted-foreground">{benefit.statsLabel}</div>
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{benefit.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-20 rounded-2xl border border-border bg-card p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground sm:text-3xl">{p.checkpointsHeading}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{p.checkpointsSubheading}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {p.checkpoints.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
