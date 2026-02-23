import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria Lopez",
    business: "Boutique de Moda",
    initials: "ML",
    comment: "CODEXIA transformo mi negocio. Mi tienda online genero ventas desde la primera semana. El proceso fue rapido y el diseno quedo increible.",
  },
  {
    name: "Carlos Rivera",
    business: "Consultoria Empresarial",
    initials: "CR",
    comment: "Nuestra pagina web nos posiciono como referentes en el sector. Recibimos contactos de calidad todos los dias gracias al formulario y WhatsApp.",
  },
  {
    name: "Ana Martinez",
    business: "Clinica Dental",
    initials: "AM",
    comment: "La landing page que nos crearon duplico nuestras citas en un mes. Muy profesionales y atentos a cada detalle.",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Testimonios</p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-border bg-card">
              <CardContent className="p-6">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="leading-relaxed text-muted-foreground">{`"${t.comment}"`}</p>
                <div className="mt-6 flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/15 text-primary font-semibold">{t.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.business}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
