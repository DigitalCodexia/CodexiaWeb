import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Cuanto tarda un proyecto?",
    answer: "Depende del tipo y complejidad. Una landing page puede estar lista en 5-7 dias habiles, mientras que una tienda online o aplicacion web puede tomar de 2 a 4 semanas. Siempre te damos un cronograma claro antes de empezar.",
  },
  {
    question: "Que necesito para empezar?",
    answer: "Solo necesitas tener clara la idea de tu proyecto. Nosotros te guiamos en todo el proceso: desde el contenido y las imagenes hasta la estructura y el diseno. En la asesoria gratuita te ayudamos a definir todo.",
  },
  {
    question: "Incluye dominio y hosting?",
    answer: "El desarrollo incluye la configuracion y publicacion. El dominio y hosting son costos aparte (generalmente muy accesibles). Te asesoramos para elegir la mejor opcion segun tu proyecto.",
  },
  {
    question: "Puedo pedir cambios?",
    answer: "Por supuesto. Incluimos rondas de revision en cada proyecto para que quedes 100% satisfecho. Los cambios dentro del alcance acordado no tienen costo adicional.",
  },
  {
    question: "Como se paga?",
    answer: "Trabajamos con un esquema de anticipo del 50% para iniciar y el 50% restante al finalizar. Aceptamos transferencia bancaria, deposito y otros metodos. Todo queda documentado.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="border-t border-border bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">FAQ</p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Preguntas frecuentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
