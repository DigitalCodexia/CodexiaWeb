import { MetadataRoute } from 'next'

const siteConfig = {
  url: 'https://www.digitalcodexia.com', // Reemplaza con tu dominio final
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${siteConfig.url}/about`, // Ejemplo de página, ajusta según tus rutas
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/services`, // Ejemplo de página, ajusta según tus rutas
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/portfolio`, // Ejemplo de página, ajusta según tus rutas
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/contact`, // Ejemplo de página, ajusta según tus rutas
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}
