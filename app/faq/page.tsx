import { FAQ } from "@/components/faq"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Preguntas Frecuentes",
  description: "Resolvemos tus dudas sobre desarrollo web, tiendas online, costos, plazos y soporte. Todo lo que necesitas saber sobre nuestros servicios digitales en Panamá.",
  keywords: ["preguntas frecuentes", "faq desarrollo web", "cuanto cuesta una pagina web", "soporte web"],
  alternates: {
    canonical: "https://digitalcodexia.com/faq",
  },
  openGraph: {
    title: "Preguntas Frecuentes | CODEXIA PANAMA",
    description: "Resolvemos tus dudas sobre costos, plazos y soporte de desarrollo web.",
    url: "https://digitalcodexia.com/faq",
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
        "name": "¿Cuánto tarda en estar lista una página web o tienda online en Panamá?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depende del tipo y complejidad del proyecto. Una landing page puede estar lista en 5-7 días hábiles. Una página web corporativa toma entre 1 y 2 semanas. Una tienda online (e-commerce) o aplicación web puede tomar de 2 a 4 semanas. Siempre entregamos un cronograma claro antes de empezar."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué necesito para empezar un proyecto de desarrollo web?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Solo necesitas tener clara la idea de tu proyecto. CODEXIA te guía en todo el proceso: desde el contenido e imágenes hasta la estructura y diseño. En la asesoría gratuita definimos juntos todos los detalles."
        }
      },
      {
        "@type": "Question",
        "name": "¿El precio incluye dominio y hosting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El desarrollo incluye la configuración y publicación del sitio. El dominio y hosting son costos separados (generalmente muy accesibles). Te asesoramos para elegir la mejor opción según tu proyecto y presupuesto."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo solicitar cambios al diseño o contenido?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Por supuesto. Todos los proyectos incluyen rondas de revisión para que quedes 100% satisfecho. Los cambios dentro del alcance acordado no tienen costo adicional."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo es el esquema de pagos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trabajamos con un anticipo del 50% para iniciar el proyecto y el 50% restante al finalizar y aprobar el resultado. Aceptamos transferencia bancaria, depósito y otros métodos. Todo queda documentado en un contrato."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto cuesta una página web en Panamá?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El costo varía según el tipo de proyecto. Una landing page puede partir desde $300-500 USD. Una página web corporativa desde $500-1,500 USD. Una tienda online desde $1,000-3,000 USD. Una aplicación web a medida se cotiza según requerimientos. Contáctanos para una cotización sin compromiso."
        }
      },
      {
        "@type": "Question",
        "name": "¿Ofrecen mantenimiento y soporte después de lanzar el sitio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. Acompañamos a nuestros clientes con soporte técnico después del lanzamiento. Ofrecemos asistencia para actualizaciones, corrección de errores y mejoras continuas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Trabajan con negocios fuera de Ciudad de Panamá?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. Trabajamos con clientes en toda la República de Panamá y también en otros países de Latinoamérica. Todo el proceso es 100% remoto, por lo que la ubicación no es un obstáculo."
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
