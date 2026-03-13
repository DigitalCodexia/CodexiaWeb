import { MessageCircle, Mail } from "lucide-react"

const footerLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-foreground">CODEXIA</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Soluciones digitales que convierten.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground">
              Navegacion
            </h4>
            <ul className="mt-3 flex flex-col gap-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground">
              Contacto
            </h4>
            <ul className="mt-3 flex flex-col gap-3">
              <li>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Hola%20CODEXIA%2C%20estoy%20interesado%20en%20sus%20servicios.%20¿Podrían%20proporcionarme%20más%20información%3F`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <MessageCircle className="h-4 w-4 text-primary" />
                  {`${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                </a>
              </li>
              <li>
                <a
                  href="mailto:digitalcodexia@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  info@digitalcodexia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          {`© ${new Date().getFullYear()} CODEXIA. Todos los derechos reservados.`}
        </div>
      </div>
    </footer>
  )
}
