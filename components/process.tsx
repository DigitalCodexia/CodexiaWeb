import { Search, Code, Rocket } from "lucide-react"

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Diagnostico",
    description: "Analizamos tu negocio, tus objetivos y tu competencia para definir la mejor estrategia digital.",
  },
  {
    icon: Code,
    step: "02",
    title: "Diseno y Desarrollo",
    description: "Creamos tu solucion web con diseno profesional, optimizada para velocidad y conversion.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Entrega + Soporte",
    description: "Publicamos tu proyecto y te acompanamos con soporte tecnico para que todo funcione perfecto.",
  },
]

export function Process() {
  return (
    <section id="proceso" className="border-y border-border bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Nuestro proceso</p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Como trabajamos
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.step} className="relative text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <step.icon className="h-7 w-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Paso {step.step}
              </span>
              <h3 className="mt-2 text-xl font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
