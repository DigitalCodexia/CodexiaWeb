import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "COD Planilla Panamá | Sistema de Nómina con IA",
  description: "Sistema de planilla 100% panameño. Calcula SIPE, ISR, décimo tercer mes, vacaciones y liquidaciones automáticamente. Potenciado con Inteligencia Artificial.",
  keywords: ["sistema de planilla panama", "software planilla panama", "calcular SIPE panama", "nomina panama", "ISR panama", "decimo tercer mes"],
  alternates: {
    canonical: "https://www.digitalcodexia.com/planilla",
  },
  openGraph: {
    title: "COD Planilla Panamá — Sistema de Nómina con IA",
    description: "Calcula SIPE, ISR, décimo tercer mes, vacaciones y liquidaciones automáticamente. El sistema de planilla más completo para empresas panameñas.",
    url: "https://www.digitalcodexia.com/planilla",
    type: "website",
  },
}

const planillaSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "COD Planilla Panamá",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Sistema de planilla 100% panameño. Calcula SIPE, ISR, décimo tercer mes, vacaciones y liquidaciones automáticamente. Potenciado con Inteligencia Artificial.",
  "featureList": [
    "Cálculo automático de SIPE y CSS",
    "Cálculo de ISR",
    "Décimo tercer mes",
    "Vacaciones y permisos",
    "Liquidaciones completas",
    "Colillas de pago en PDF",
    "Reportes para la CSS",
    "Asistente con Inteligencia Artificial",
  ],
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
  },
  "provider": {
    "@type": "Organization",
    "name": "CODEXIA PANAMA",
    "url": "https://www.digitalcodexia.com",
  },
  "areaServed": {
    "@type": "Country",
    "name": "Panama",
  },
  "inLanguage": "es",
}

export default function PlanillaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(planillaSchema) }}
      />
      {children}
    </>
  )
}
