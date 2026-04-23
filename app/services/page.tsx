import { Services } from "@/components/services"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Servicios Digitales",
  description: "Desarrollamos tiendas online, páginas web corporativas, landing pages y aplicaciones web a medida. Soluciones digitales profesionales para impulsar tu negocio en Panamá.",
  keywords: ["desarrollo web panama", "tiendas online", "e-commerce", "aplicaciones web", "landing pages", "diseño web profesional"],
  alternates: {
    canonical: "https://www.digitalcodexia.com/services",
  },
  openGraph: {
    title: "Servicios Digitales | CODEXIA PANAMA",
    description: "Desarrollamos tiendas online, páginas web corporativas, landing pages y aplicaciones web a medida.",
    url: "https://www.digitalcodexia.com/services",
    type: "website",
  },
}

export default function ServicesPage() {
  return (
    <main>
      <Services />
    </main>
  )
}
