import { Portfolio } from "@/components/portfolio"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Explora nuestros proyectos más recientes: tiendas online, apps web, dashboards y sitios corporativos. Descubre cómo hemos ayudado a negocios a crecer digitalmente en Panamá.",
  keywords: ["portafolio web", "proyectos digitales", "casos de exito", "desarrollo web panama"],
  alternates: {
    canonical: "https://digitalcodexia.com/portfolio",
  },
  openGraph: {
    title: "Portafolio | CODEXIA PANAMA",
    description: "Proyectos reales que generan resultados: tiendas online, apps web y sitios corporativos.",
    url: "https://digitalcodexia.com/portfolio",
    type: "website",
  },
}

export default function PortfolioPage() {
  return (
    <main>
      <Portfolio />
    </main>
  )
}
