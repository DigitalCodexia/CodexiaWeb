import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Benefits } from "@/components/benefits"
import { FAQ } from "@/components/faq"
import { CtaFinal } from "@/components/cta-final"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Portfolio } from "@/components/portfolio"
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuál es el costo de una página web?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El costo de una página web varía según la complejidad, funcionalidades y diseño. Ofrecemos soluciones personalizadas que se ajustan a tu presupuesto y necesidades. Contáctanos para una cotización sin compromiso."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo tardan en desarrollar una tienda online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El tiempo de desarrollo de una tienda online depende de la cantidad de productos, integraciones y personalizaciones. Un proyecto estándar puede tomar entre 4 y 8 semanas. Te daremos un cronograma detallado al inicio del proyecto."
        }
      },
      {
        "@type": "Question",
        "name": "¿Ofrecen servicios de mantenimiento y soporte?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, ofrecemos planes de mantenimiento y soporte para asegurar que tu sitio web o tienda online funcione siempre de manera óptima. Esto incluye actualizaciones, copias de seguridad y asistencia técnica."
        }
      }
      // Agrega más preguntas y respuestas de tu FAQ aquí
    ]
  };

  return (
    <main>
      <Analytics/>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Process />
      <Benefits />
      <Portfolio />
      <FAQ />
      <CtaFinal />
      <ContactForm />
      <Footer />
      <WhatsAppFloat />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  )
}
