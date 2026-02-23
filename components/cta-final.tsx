import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function CtaFinal() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-primary/10 px-6 py-16 text-center sm:px-16">
          {/* Glow effect */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />

          <div className="relative">
            <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
              Listo para llevar tu negocio al siguiente nivel?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Agenda una asesoria gratuita y recibe una propuesta personalizada.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <a
                  href="https://wa.me/00000000000?text=Hola%20CODEXIA%2C%20quiero%20una%20asesor%C3%ADa%20gratuita%20para%20mi%20negocio."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Hablar por WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contacto">Enviar formulario</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
