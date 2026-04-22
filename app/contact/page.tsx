import { ContactForm } from "@/components/contact-form"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto",
  description: "Habla con nuestro equipo y recibe una asesoría gratuita para tu proyecto digital. Estamos listos para ayudarte a crecer online en Panamá.",
  keywords: ["contacto agencia web panama", "cotizacion pagina web", "asesoria digital gratuita"],
  alternates: {
    canonical: "https://digitalcodexia.com/contact",
  },
  openGraph: {
    title: "Contacto | CODEXIA PANAMA",
    description: "Solicita tu asesoría gratuita y comienza tu proyecto digital hoy.",
    url: "https://digitalcodexia.com/contact",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <main>
      <ContactForm />
    </main>
  )
}
