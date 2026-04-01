"use client"

const steps = [
  {
    number: "01",
    title: "Configura tu cuenta",
    description: "Crea tu cuenta en minutos. Importa tus clientes y cuentas por cobrar desde Excel o manualmente.",
    color: "primary",
  },
  {
    number: "02",
    title: "Define tus reglas",
    description: "Establece cuando enviar recordatorios. Personaliza los mensajes para cada tipo de cliente.",
    color: "accent",
  },
  {
    number: "03",
    title: "Monitorea y cobra",
    description: "El sistema trabaja por ti. Recibe alertas, registra pagos y mantente siempre informado.",
    color: "primary",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 via-transparent to-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="text-sm font-medium text-accent">Como funciona</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Tres pasos para{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">simplificar</span>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary hidden lg:block rounded-full" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className={`relative rounded-3xl p-8 border transition-all duration-500 hover:shadow-2xl ${
                  step.color === "primary"
                    ? "bg-gradient-to-br from-primary/10 via-card to-card border-primary/20 hover:border-primary/40 hover:shadow-primary/10"
                    : "bg-gradient-to-br from-accent/10 via-card to-card border-accent/20 hover:border-accent/40 hover:shadow-accent/10"
                }`}>
                  <div className={`absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-2xl font-bold text-lg shadow-lg ${
                    step.color === "primary"
                      ? "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-primary/25"
                      : "bg-gradient-to-br from-accent to-accent/80 text-accent-foreground shadow-accent/25"
                  }`}>
                    {step.number}
                  </div>
                  <div className="pt-4">
                    <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                  <div className={`absolute bottom-0 right-0 w-20 h-20 rounded-tl-3xl ${step.color === "primary" ? "bg-primary/5" : "bg-accent/5"}`} />
                </div>
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-4 lg:hidden">
                    <svg className="h-8 w-8 text-muted-foreground/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
