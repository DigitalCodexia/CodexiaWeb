import Link from "next/link"

const footerLinks = {
  producto: [
    { name: "Caracteristicas", href: "#caracteristicas" },
    { name: "Integraciones", href: "#" },
    { name: "Actualizaciones", href: "#" },
  ],
  empresa: [
    { name: "Sobre Nosotros", href: "https://www.digitalcodexia.com" },
    { name: "Blog", href: "#" },
    { name: "Contacto", href: "#" },
  ],
  recursos: [
    { name: "Documentacion", href: "#" },
    { name: "Guias", href: "#" },
    { name: "Soporte", href: "#" },
  ],
  legal: [
    { name: "Privacidad", href: "#" },
    { name: "Terminos", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground">
                <span className="text-lg font-bold text-primary">C</span>
              </div>
              <span className="text-xl font-semibold tracking-tight">COD Cobros</span>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/70 max-w-xs">
              Gestiona tu cobranza y mejora tu flujo de efectivo con la solucion mas completa del mercado.
            </p>
            <p className="mt-4 text-sm text-primary-foreground/70">
              Un producto de{" "}
              <Link href="https://www.digitalcodexia.com" target="_blank" className="underline hover:text-primary-foreground">
                Digital Codexia
              </Link>
            </p>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-sm font-semibold capitalize">{section}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="text-sm text-primary-foreground/60 text-center">
            &copy; {new Date().getFullYear()} COD Cobros por Digital Codexia. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
