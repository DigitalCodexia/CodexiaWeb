import { MetadataRoute } from 'next'

const siteConfig = {
  url: 'https://www.digitalcodexia.com', // Reemplaza con tu dominio final
};

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Ejemplo de ruta privada, ajusta según tus necesidades
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}
