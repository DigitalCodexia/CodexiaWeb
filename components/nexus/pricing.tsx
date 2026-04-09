"use client"

import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

export function NexusPricing() {
  const { t } = useLanguage()
  const p = t.nexusPage

  return (
    <section id="precio" className="py-24 sm:py-32 border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">{p.pricingEyebrow}</p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            {p.pricingHeading}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{p.pricingSubheading}</p>
        </div>

        <div className="mx-auto mt-16 max-w-lg">
          <div className="relative rounded-3xl border-2 border-primary bg-card p-8 lg:p-12 shadow-2xl shadow-primary/10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5">
                <Star className="h-4 w-4 text-primary-foreground fill-primary-foreground" />
                <span className="text-sm font-medium text-primary-foreground">Recomendado</span>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-foreground">{p.pricingPlanName}</h3>
              <p className="mt-2 text-muted-foreground">{p.pricingPlanDesc}</p>
              <div className="mt-8 flex items-baseline justify-center gap-2">
                <span className="text-6xl font-bold text-foreground">$70</span>
                <span className="text-xl text-muted-foreground">/mes</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{p.pricingBilled}</p>
            </div>

            <div className="mt-10">
              <Button className="w-full h-14 text-base font-medium shadow-lg shadow-primary/25" asChild>
                <a href="https://wa.me/50763666033?text=Hola%20CODEXIA%2C%20quiero%20comenzar%20con%20NEXUS%20POS." target="_blank" rel="noopener noreferrer">
                  {p.pricingCta}
                </a>
              </Button>
              <p className="mt-3 text-center text-sm text-muted-foreground">{p.pricingNote}</p>
            </div>

            <div className="mt-10 border-t border-border pt-10">
              <h4 className="text-sm font-semibold text-foreground mb-6">{p.includedTitle}</h4>
              <ul className="grid grid-cols-1 gap-4">
                {p.included.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-muted-foreground">
          Más de <span className="text-foreground font-semibold">500 negocios</span> ya confían en NEXUS
        </div>
      </div>
    </section>
  )
}
