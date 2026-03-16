"use client"

import { ShoppingCart, Globe, MousePointerClick, Cog } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

const serviceIcons = [ShoppingCart, Globe, MousePointerClick, Cog]

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="servicios" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">{t.services.eyebrow}</p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            {t.services.heading}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((service, i) => {
            const Icon = serviceIcons[i]
            return (
              <Card
                key={service.title}
                className="group relative overflow-hidden border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="mb-6 flex flex-col gap-2">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full" asChild>
                    <a
                      href="https://wa.me/50763666033?text=Hola%20CODEXIA%2C%20quiero%20solicitar%20cotizaci%C3%B3n."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.services.requestQuote}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
