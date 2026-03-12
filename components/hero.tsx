"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { Zap, Palette, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const bullets = [
  { icon: Zap, text: "Entrega rápida" },
  { icon: Palette, text: "Diseño profesional" },
  { icon: TrendingUp, text: "Optimizado para ventas" },
]

const slides = [
  {
    image: "/images/portfolio-it.jpeg",
    label: "Dashboard / App Web",
  },
  {
    image: "/images/portfolio-horeca.jpeg",
    label: "Sitio Web Corporativo",
  },
  {
    image: "/images/portfolio-ventura.jpeg",
    label: "Sitio Web Corporativo",
  },
  {
    image: "/images/portfolio-blog.png",
    label: "Blog / Contenido",
  },
  // {
  //   image: "/images/portfolio-boda.png",
  //   label: "Landing Page",
  // },
  {
    image: "/images/portfolio-planilla.jpeg",
    label: "App Web / Sistema",
  },
]

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3500, stopOnInteraction: false }),
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on("select", () => setSelectedIndex(emblaApi.selectedScrollSnap()))
  }, [emblaApi])

  return (
    <section className="relative overflow-hidden py-20 lg:py-32">

      {/* ── Background carousel ── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="h-full overflow-hidden" ref={emblaRef}>
          <div className="flex h-full">
            {slides.map((slide, i) => (
              <div key={i} className="relative h-full min-w-full flex-shrink-0">
                <Image
                  src={slide.image}
                  alt={slide.label}
                  fill
                  className="object-cover object-top scale-105 blur-sm"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-background/80" />
        {/* Radial tint from original hero */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Impulsa tu Negocio con Soluciones, Automatizaciones, Sistemas Web y Aplicaciones
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Tiendas online, páginas web, landing pages y aplicaciones web. Diseño moderno + velocidad + conversión.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <a
                href="https://wa.me/00000000000?text=Hola%20CODEXIA%2C%20quiero%20una%20asesor%C3%ADa%20gratuita%20para%20mi%20negocio."
                target="_blank"
                rel="noopener noreferrer"
              >
                Agenda tu asesoría gratis
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#servicios">Ver servicios</a>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
            {bullets.map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-foreground">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="mt-10 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "w-6 bg-primary"
                    : "w-1.5 bg-border hover:bg-primary/40"
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}