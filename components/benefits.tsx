"use client"

import { Users, DollarSign, Bot, Sparkles, Gauge, Smartphone } from "lucide-react"
import { useLanguage } from "@/context/language-context"

const benefitIcons = [Users, DollarSign, Bot, Sparkles, Gauge, Smartphone]

export function Benefits() {
  const { t } = useLanguage()

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">{t.benefits.eyebrow}</p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            {t.benefits.heading}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.benefits.items.map((benefit, i) => {
            const Icon = benefitIcons[i]
            return (
              <div
                key={benefit.title}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
