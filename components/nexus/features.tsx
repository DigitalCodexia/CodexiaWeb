"use client"

import { useLanguage } from "@/context/language-context"
import {
  LayoutDashboard, Package, Calculator, FileText,
  BarChart3, CreditCard, Shield, Smartphone,
} from "lucide-react"

const icons = [LayoutDashboard, Package, Calculator, FileText, BarChart3, CreditCard, Shield, Smartphone]

export function NexusFeatures() {
  const { t } = useLanguage()
  const p = t.nexusPage

  return (
    <section id="caracteristicas" className="py-24 sm:py-32 border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">{p.featuresEyebrow}</p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            {p.featuresHeading}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            {p.featuresSubheading}
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {p.features.map((feature, i) => {
            const Icon = icons[i]
            return (
              <div
                key={feature.title}
                className="group relative rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100 rounded-2xl" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
