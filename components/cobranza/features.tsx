"use client"

import { Mail, BarChart3, Clock, Bell, Shield, Zap } from "lucide-react"

export function Features() {
  return (
    <section id="caracteristicas" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Funcionalidades</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Todo para tu{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">gestion de cobranza</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground text-pretty">
            Herramientas profesionales que simplifican cada aspecto de tu trabajo
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            <div className="lg:col-span-7 group">
              <div className="relative h-full rounded-3xl bg-gradient-to-br from-card via-card to-primary/5 border border-border p-8 overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground shadow-lg shadow-primary/25">
                      <Mail className="h-8 w-8" />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 text-accent text-sm font-medium">
                      <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                      Activo
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Recordatorios Programados</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Configura secuencias de recordatorios personalizados. Define fechas, mensajes y frecuencia.
                    Tu cobranza trabaja mientras tu descansas.
                  </p>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 border border-border/50">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className={`h-8 w-8 rounded-full border-2 border-card flex items-center justify-center text-xs font-medium ${i === 1 ? "bg-primary text-primary-foreground" : i === 2 ? "bg-accent text-accent-foreground" : "bg-secondary text-secondary-foreground"}`}>
                          {i}d
                        </div>
                      ))}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Secuencia activa</p>
                      <p className="text-xs text-muted-foreground">1, 7 y 15 dias despues del vencimiento</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 group">
              <div className="relative h-full rounded-3xl bg-gradient-to-br from-card via-card to-accent/5 border border-border p-8 overflow-hidden hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-2xl -translate-x-10 translate-y-10 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent/70 text-accent-foreground shadow-lg shadow-accent/25 mb-6">
                    <BarChart3 className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Reportes Detallados</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Visualiza tu cartera con graficas claras. Exporta en PDF, Excel y mas formatos.
                  </p>
                  <div className="flex items-end gap-2 h-16 px-2">
                    {[40, 65, 45, 80, 55, 90, 70, 85].map((height, i) => (
                      <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-accent/80 to-accent/40 transition-all duration-300 group-hover:from-accent group-hover:to-accent/60" style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 group">
              <div className="relative h-full rounded-3xl bg-gradient-to-br from-card to-secondary/50 border border-border p-7 overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/80 to-primary/50 text-primary-foreground mb-5">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Seguimiento Completo</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Historial de cada cuenta desde su creacion hasta el pago final.
                </p>
                <div className="space-y-3">
                  {["Creada", "Enviada", "Vista"].map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`h-3 w-3 rounded-full ${i < 2 ? "bg-accent" : "bg-primary animate-pulse"}`} />
                      <span className="text-xs text-muted-foreground">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
