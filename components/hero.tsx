"use client"

import { useState } from "react"
import { Zap, Palette, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

const accordionItems = [
  { id: 1, image: "/images/portfolio-it.jpeg",       label: "Dashboard / App Web" },
  { id: 2, image: "/images/portfolio-horeca.jpeg",   label: "Sitio Web Corporativo" },
  { id: 3, image: "/images/portfolio-ventura.jpeg",  label: "Transporte & Logística" },
  { id: 4, image: "/images/portfolio-blog.png",      label: "Blog / Contenido" },
  { id: 5, image: "/images/portfolio-planilla.jpeg", label: "App Web / Sistema" },
]

const bulletIcons = [Zap, Palette, TrendingUp]

export function Hero() {
  const { t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(4)

  const bullets = [
    { icon: bulletIcons[0], text: t.hero.bullet1 },
    { icon: bulletIcons[1], text: t.hero.bullet2 },
    { icon: bulletIcons[2], text: t.hero.bullet3 },
  ]

  return (
    <section className="bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-10">

          {/* ── Left: text ── */}
          <div className="w-full lg:w-[45%] text-center lg:text-left shrink-0">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-5xl xl:text-6xl text-balance leading-tight">
              {t.hero.heading}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground max-w-lg mx-auto lg:mx-0">
              {t.hero.subheading}
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start justify-center">
              <Button size="lg" asChild>
                <a
                  href="https://wa.me/50763666033?text=Hola%20CODEXIA%2C%20quiero%20una%20asesor%C3%ADa%20gratuita%20para%20mi%20negocio."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.hero.ctaPrimary}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/services">{t.hero.ctaSecondary}</a>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-5 lg:justify-start">
              {bullets.map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: image accordion ── */}
          <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
            <div className="flex flex-row items-stretch gap-2 h-90 lg:h-110">
              {accordionItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`
                    relative rounded-2xl overflow-hidden cursor-pointer shrink-0
                    transition-all duration-700 ease-in-out
                    ${activeIndex === index ? "w-60 lg:w-75" : "w-11 lg:w-13"}
                  `}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.label}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/35" />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/75 to-transparent" />

                  <span
                    className={`
                      absolute text-white text-sm font-semibold whitespace-nowrap transition-all duration-300
                      ${activeIndex === index
                        ? "bottom-4 left-1/2 -translate-x-1/2 rotate-0"
                        : "bottom-20 left-1/2 -translate-x-1/2 rotate-90 origin-center"
                      }
                    `}
                  >
                    {item.label}
                  </span>

                  {activeIndex === index && (
                    <div className="absolute top-3 right-3 h-2 w-2 rounded-full bg-primary" />
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
