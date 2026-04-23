import type { Metadata } from "next"
import { NexusThemeProvider } from "./theme-provider"

export const metadata: Metadata = {
  title: "NEXUS POS | Sistema de Punto de Venta para Restaurantes y Comercios",
  description: "Sistema POS completo para restaurantes y comercios en Panamá. Panel de administración, inventario, contabilidad básica y facturación electrónica en una sola plataforma.",
  keywords: ["sistema pos panama", "punto de venta panama", "software restaurante panama", "sistema comercio panama", "facturacion electronica panama"],
  alternates: {
    canonical: "https://www.digitalcodexia.com/nexus",
  },
  openGraph: {
    title: "NEXUS POS — Sistema de Punto de Venta para tu Negocio",
    description: "Panel de administración, inventario, contabilidad y facturación electrónica en una sola plataforma. Prueba gratis 14 días.",
    url: "https://www.digitalcodexia.com/nexus",
    type: "website",
  },
}

const nexusSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NEXUS POS",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Sistema de punto de venta completo para restaurantes y comercios. Incluye panel de administración, inventario, contabilidad básica y facturación electrónica.",
  "offers": {
    "@type": "Offer",
    "price": "70",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": "70",
      "priceCurrency": "USD",
      "unitText": "MONTH",
    },
    "availability": "https://schema.org/InStock",
  },
  "featureList": [
    "Panel de Administración",
    "Gestión de Inventario",
    "Contabilidad Básica",
    "Facturación Electrónica",
    "Reportes Avanzados",
    "Múltiples Métodos de Pago",
    "Soporte 24/7",
  ],
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

export default function NexusLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nexusSchema) }}
      />
      <NexusThemeProvider>{children}</NexusThemeProvider>
    </>
  )
}
