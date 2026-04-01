import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-card" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative rounded-[2.5rem] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent" />
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          <div className="relative px-8 py-20 sm:px-16 sm:py-28 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary-foreground text-balance">
              Simplifica tu gestion de cobranza hoy
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Solicita una demostracion personalizada y descubre como COD Cobros puede transformar tu proceso de cobranza
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="text-base px-8 h-14 rounded-xl shadow-lg text-primary bg-white hover:bg-white/90" asChild>
                <a href="https://wa.me/50763666033?text=Hola%20CODEXIA%2C%20quiero%20una%20demo%20de%20COD%20Cobros." target="_blank" rel="noopener noreferrer">
                  Solicitar Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 h-14 rounded-xl border-2 border-white/30 text-primary-foreground bg-transparent hover:bg-white/10" asChild>
                <a href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Contactar Ventas
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
