import { Zap, Palette, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const bullets = [
  { icon: Zap, text: "Entrega rapida" },
  { icon: Palette, text: "Diseno profesional" },
  { icon: TrendingUp, text: "Optimizado para ventas" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Subtle background pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Impulsa tu Negocio con Soluciones, Automatizaciones, Sistemas Web y Aplicaciones
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Tiendas online, paginas web, landing pages y aplicaciones web. Diseno moderno + velocidad + conversion.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <a
                href="https://wa.me/00000000000?text=Hola%20CODEXIA%2C%20quiero%20una%20asesor%C3%ADa%20gratuita%20para%20mi%20negocio."
                target="_blank"
                rel="noopener noreferrer"
              >
                Agenda tu asesoria gratis
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
        </div>
      </div>
    </section>
  )
}
