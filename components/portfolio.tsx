"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    title: "IT Dashboard",
    category: "Dashboard / App Web",
    description:
      "Panel de control interno para gestión de equipos, inventario, mantenimiento y usuarios. Alertas en tiempo real y métricas clave.",
    image: "/images/portfolio-it.jpeg",
    href: "#",
    tags: ["Dashboard", "React", "Gestión IT"],
  },
  {
    title: "Horeca Comfort Solutions",
    category: "Sitio Web Corporativo",
    description:
      "Sitio profesional para distribuidora de ropa de cama y amenities para hoteles, hospitales y clínicas en Panamá.",
    image: "/images/portfolio-horeca.jpeg",
    href: "https://horecacomfort.com",
    tags: ["E-commerce", "Hospitalidad", "Panamá"],
  },
  {
    title: "Transporte Ventura",
    category: "Sitio Web Corporativo",
    description:
      "Presencia digital para empresa familiar con más de 30 años en transporte de contenedores a nivel nacional.",
    image: "/images/portfolio-ventura.jpeg",
    href: "https://transventura.com",
    tags: ["Logística", "Transporte", "Panamá"],
  },
  {
    title: "Blog Profesional",
    category: "Blog / Contenido",
    description:
      "Plataforma de contenido optimizada para SEO con diseño editorial moderno, categorías y sistema de publicación.",
    image: "/images/portfolio-blog.png",
    href: "#",
    tags: ["Blog", "SEO", "Editorial"],
  },
  {
    title: "Bodas & Eventos",
    category: "Landing Page",
    description:
      "Sitio elegante para servicios de organización de bodas y eventos especiales. Galería, paquetes y formulario de contacto.",
    image: "/images/portfolio-boda.png",
    href: "#",
    tags: ["Eventos", "Bodas", "Landing Page"],
  },
  {
    title: "Sistema de Planilla",
    category: "App Web / Sistema",
    description:
      "Aplicación para gestión de planilla de empleados, cálculo de salarios, deducciones y generación de reportes.",
    image: "/images/portfolio-planilla.jpeg",
    href: "#",
    tags: ["Sistema", "RRHH", "Planilla"],
  },
]

export function Portfolio() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", () => setSelectedIndex(emblaApi.selectedScrollSnap()))
  }, [emblaApi])

  return (
    <section id="portafolio" className="border-y border-border bg-card py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Portafolio</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
              Proyectos destacados
            </h2>
            <p className="mt-3 text-muted-foreground max-w-md">
              Soluciones digitales diseñadas para empresas reales en Panamá y la región.
            </p>
          </div>

          {/* Arrow controls */}
          <div className="flex gap-3 shrink-0">
            <button
              onClick={scrollPrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all hover:border-primary hover:text-primary hover:bg-primary/5"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all hover:border-primary hover:text-primary hover:bg-primary/5"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group min-w-0 flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]"
              >
                <div className="overflow-hidden rounded-xl border border-border bg-background transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 h-full flex flex-col">

                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105 group-hover:object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="absolute left-3 top-3 rounded-full bg-background/85 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="text-lg font-bold text-foreground leading-snug">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button variant="outline" size="sm" className="mt-5 w-full" asChild>
                      <a href={project.href} target="_blank" rel="noopener noreferrer">
                        Ver proyecto <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "w-6 bg-primary"
                  : "w-2 bg-border hover:bg-primary/40"
              }`}
              aria-label={`Ir al proyecto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}