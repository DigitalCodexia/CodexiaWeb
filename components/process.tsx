"use client"

import { Search, Code, Rocket } from "lucide-react"
import { useLanguage } from "@/context/language-context"

const stepIcons = [Search, Code, Rocket]

export function Process() {
  const { t } = useLanguage()

  return (
    <section id="proceso" className="border-y border-border bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">{t.process.eyebrow}</p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            {t.process.heading}
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {t.process.steps.map((step, i) => {
            const Icon = stepIcons[i]
            const num = String(i + 1).padStart(2, '0')
            return (
              <div key={step.title} className="relative text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <Icon className="h-7 w-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  {t.process.step} {num}
                </span>
                <h3 className="mt-2 text-xl font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
