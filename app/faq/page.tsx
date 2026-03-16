import { FAQ } from "@/components/faq"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Preguntas Frecuentes",
  description: "Resolvemos tus dudas sobre desarrollo web, tiendas online, costos, plazos y soporte. Todo lo que necesitas saber sobre nuestros servicios digitales en Panamá.",
  keywords: ["preguntas frecuentes", "faq desarrollo web", "cuanto cuesta una pagina web", "soporte web"],
  alternates: {
    canonical: "https://www.digitalcodexia.com/faq",
  },
  openGraph: {
    title: "Preguntas Frecuentes | CODEXIA PANAMA",
    description: "Resolvemos tus dudas sobre costos, plazos y soporte de desarrollo web.",
    url: "https://www.digitalcodexia.com/faq",
    type: "website",
  },
}

export default function FAQPage() {
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
    ]
  }

  return (
    <main>
      <FAQ />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  )
}
