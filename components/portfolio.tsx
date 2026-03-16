"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/context/language-context"

const projectImages = [
  "/images/portfolio-it.jpeg",
  "/images/portfolio-horeca.jpeg",
  "/images/portfolio-ventura.jpeg",
  "/images/portfolio-blog.png",
  "/images/portfolio-boda.png",
  "/images/portfolio-planilla.jpeg",
]

export function Portfolio() {
  const { t } = useLanguage()
  const p = t.portfolio

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
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">{p.eyebrow}</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
              {p.heading}
            </h2>
            <p className="mt-3 text-muted-foreground max-w-md">
              {p.subheading}
            </p>
          </div>

          {/* Arrow controls */}
          <div className="flex gap-3 shrink-0">
            <button
              onClick={scrollPrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all hover:border-primary hover:text-primary hover:bg-primary/5"
              aria-label={p.prev}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all hover:border-primary hover:text-primary hover:bg-primary/5"
              aria-label={p.next}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {p.projects.map((project, i) => (
              <div
                key={project.title}
                className="group min-w-0 flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]"
              >
                <div className="overflow-hidden rounded-xl border border-border bg-background transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 h-full flex flex-col">

                  {/* Image */}
                  <div className="relative aspect-4/3 overflow-hidden bg-muted">
                    <Image
                      src={projectImages[i]}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105 group-hover:object-center"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
              aria-label={`${p.goTo} ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
