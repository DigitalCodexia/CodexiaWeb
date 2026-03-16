"use client"

import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { Process } from "@/components/process"
import { Benefits } from "@/components/benefits"
import { Portfolio } from "@/components/portfolio"
import { CtaFinal } from "@/components/cta-final"
import Link from "next/link"
import { useLanguage } from "@/context/language-context"

export default function Home() {
  const { t } = useLanguage()

  return (
    <main>
      <Hero />
      <TrustBar />

      {/* Servicios */}
      <section className="py-16 bg-card animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">{t.home.servicesTitle}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.home.servicesDesc}</p>
          <div className="mt-8">
            <Link href="/services" className="text-primary hover:text-primary/80 font-medium">
              {t.home.servicesLink} &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Process />

      {/* Portafolio */}
      <section className="py-16 bg-card animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">{t.home.portfolioTitle}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.home.portfolioDesc}</p>
        </div>
        <Portfolio />
        <div className="mt-8 text-center">
          <Link href="/portfolio" className="text-primary hover:text-primary/80 font-medium">
            {t.home.portfolioLink} &rarr;
          </Link>
        </div>
      </section>

      <Benefits />
      <CtaFinal />
    </main>
  )
}
