"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function NexusCTA() {
  const { t } = useLanguage()
  const p = t.nexusPage

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-primary/70 px-8 py-20 text-center shadow-2xl sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.15),transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,0,0,0.15),transparent_60%)]" />
          <div className="relative">
            <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {p.ctaHeading}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              {p.ctaSubheading}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-14 bg-white px-8 text-base font-semibold text-primary hover:bg-white/90 shadow-lg" asChild>
                <a href="https://wa.me/50763666033?text=Hola%20CODEXIA%2C%20quiero%20una%20prueba%20gratuita%20de%20NEXUS%20POS." target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {p.ctaPrimaryBtn}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 border-white/40 px-8 text-base text-white hover:bg-white/10 hover:text-white" asChild>
                <a href="#contacto">
                  {p.ctaSecondaryBtn}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/60">{p.ctaDisclaimer}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
