import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/context/language-context"
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const siteConfig = {
  name: 'CODEXIA PANAMA',
  url: 'https://www.digitalcodexia.com',
  description: 'Creamos tiendas online, páginas web, landing pages y aplicaciones web a medida para que tu negocio venda 24/7.',
  logo: 'https://www.digitalcodexia.com/logo.png',
  ogImage: 'https://www.digitalcodexia.com/og-image.png',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Soluciones Digitales que Convierten`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "desarrollo web panama",
    "tiendas online panama",
    "e-commerce panama",
    "paginas web panama",
    "aplicaciones web",
    "landing pages",
    "diseño web profesional",
    "agencia digital panama",
    "negocios digitales",
    "digitalcodexia",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: `${siteConfig.name} | Soluciones Digitales que Convierten`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Soluciones Digitales`,
      },
    ],
    locale: 'es_PA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Soluciones Digitales que Convierten`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@codexiadigital',
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'es-PA': siteConfig.url,
      'en': `${siteConfig.url}/en`,
    },
  },
  category: 'technology',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1b2e' },
  ],
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  name: siteConfig.name,
  alternateName: 'CODEXIA',
  url: siteConfig.url,
  logo: siteConfig.logo,
  image: siteConfig.ogImage,
  description: siteConfig.description,
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  areaServed: [
    { '@type': 'Country', name: 'Panama' },
    { '@type': 'AdministrativeArea', name: 'Ciudad de Panama' },
  ],
  knowsAbout: [
    'Desarrollo Web',
    'E-commerce',
    'Aplicaciones Web',
    'Landing Pages',
    'SEO',
    'Diseño Web',
    'Transformación Digital',
    'Software de Planilla',
    'Sistema de Cobros',
  ],
  sameAs: [
    'https://www.instagram.com/codexiadigital',
    'https://www.facebook.com/codexiadigital',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+50763666033',
    contactType: 'Customer Service',
    areaServed: 'PA',
    availableLanguage: ['Spanish', 'English'],
    contactOption: 'TollFree',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'PA',
    addressRegion: 'Panama',
    addressLocality: 'Ciudad de Panama',
  },
  founder: {
    '@type': 'Person',
    name: 'CODEXIA Team',
  },
  foundingDate: '2023',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Navbar />
            {children}
            <Footer />
            <WhatsAppFloat />
            <Analytics />
            <SpeedInsights />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
