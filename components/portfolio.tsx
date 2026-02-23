import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Ecommerce Moda",
    category: "Tienda Online",
    image: "/images/portfolio-ecommerce.jpg",
  },
  {
    title: "Web Corporativa",
    category: "Pagina Web",
    image: "/images/portfolio-corporate.jpg",
  },
  {
    title: "Landing de Servicios",
    category: "Landing Page",
    image: "/images/portfolio-landing.jpg",
  },
]

export function Portfolio() {
  return (
    <section id="portafolio" className="border-y border-border bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Portafolio</p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Proyectos destacados
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group overflow-hidden border-border bg-background transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/30 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <CardContent className="p-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">{project.category}</span>
                <h3 className="mt-1 text-lg font-bold text-foreground">{project.title}</h3>
                <Button variant="outline" size="sm" className="mt-4" asChild>
                  <a href="#">
                    Ver demo <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
