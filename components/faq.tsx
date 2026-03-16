"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useLanguage } from "@/context/language-context"

export function FAQ() {
  const { t } = useLanguage()

  return (
    <section id="faq" className="border-t border-border bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">{t.faq.eyebrow}</p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            {t.faq.heading}
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12">
          {t.faq.items.map((faq, i) => (
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
