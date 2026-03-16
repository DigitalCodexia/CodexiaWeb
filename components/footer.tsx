"use client"

import Link from "next/link"
import Image from "next/image"
import { MessageCircle, Mail } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-foreground">CODEXIA</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t.footer.tagline}
            </p>
            <Link href="/" aria-label="CODEXIA - Inicio">
              <Image
                src="/logo.png"
                alt="CODEXIA"
                width={250}
                height={250}
                className="h-24 w-auto object-contain mt-3"
              />
            </Link>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground">
              {t.footer.navLabel}
            </h4>
            <ul className="mt-3 flex flex-col gap-2">
              {t.footer.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground">
              {t.footer.contactLabel}
            </h4>
            <ul className="mt-3 flex flex-col gap-3">
              <li>
                <a
                  href="https://wa.me/50763666033?text=Hola%20CODEXIA%2C%20estoy%20interesado%20en%20sus%20servicios."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <MessageCircle className="h-4 w-4 text-primary" />
                  +507 6366-6033
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@digitalcodexia.com"
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
          {`© ${new Date().getFullYear()} CODEXIA. ${t.footer.rights}`}
        </div>
      </div>
    </footer>
  )
}
