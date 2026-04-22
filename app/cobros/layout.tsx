import type { Metadata } from "next"
import { CobranzaThemeProvider } from "./theme-provider"

export const metadata: Metadata = {
  title: "COD Cobros | Sistema de Gestión de Cobranza para Empresas",
  description: "Automatiza tus cobros con recordatorios programados, reportes detallados y seguimiento de cuentas por cobrar. Mejora tu flujo de efectivo desde Panamá.",
  keywords: ["sistema de cobros panama", "gestion de cobranza", "cuentas por cobrar", "software cobros panama", "recordatorios de pago"],
  alternates: {
    canonical: "https://digitalcodexia.com/cobros",
  },
  openGraph: {
    title: "COD Cobros — Gestión Profesional de Cobranza",
    description: "Automatiza tus cobros con recordatorios, reportes y seguimiento completo. Mejora tu flujo de efectivo.",
    url: "https://digitalcodexia.com/cobros",
    type: "website",
  },
}

const cobrosSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "COD Cobros",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Sistema profesional de gestión de cobranza para empresas en Panamá. Recordatorios automáticos, reportes detallados y seguimiento de cuentas por cobrar.",
  "featureList": [
    "Recordatorios automáticos de cobro",
    "Reportes de cuentas por cobrar",
    "Seguimiento de clientes morosos",
    "Notificaciones por correo y WhatsApp",
    "Dashboard de flujo de efectivo",
  ],
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
  },
  "provider": {
    "@type": "Organization",
    "name": "CODEXIA PANAMA",
    "url": "https://digitalcodexia.com",
  },
  "areaServed": {
    "@type": "Country",
    "name": "Panama",
  },
  "inLanguage": "es",
}

export default function CobranzaLayout({ children }: { children: React.ReactNode }) {
  return (
    <CobranzaThemeProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cobrosSchema) }}
      />
      {children}
    </CobranzaThemeProvider>
  )
}
