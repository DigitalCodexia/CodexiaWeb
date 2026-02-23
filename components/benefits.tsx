import { Users, DollarSign, Bot, Sparkles, Gauge, Smartphone } from "lucide-react"

const benefits = [
  { icon: Users, title: "Mas clientes", description: "Atrae nuevos clientes con presencia web profesional y optimizada." },
  { icon: DollarSign, title: "Mas ventas", description: "Convierte visitantes en compradores con diseno enfocado a resultados." },
  { icon: Bot, title: "Automatizacion", description: "Ahorra tiempo automatizando procesos clave de tu negocio." },
  { icon: Sparkles, title: "Mejor imagen", description: "Proyecta confianza y profesionalismo en cada punto de contacto." },
  { icon: Gauge, title: "Rapida carga", description: "Sitios ultrarapidos que no pierden visitantes por lentitud." },
  { icon: Smartphone, title: "Experiencia mobile", description: "Perfecta visualizacion en cualquier dispositivo." },
]

export function Benefits() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Beneficios</p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Por que elegirnos
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <benefit.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
