"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useLanguage } from "@/context/language-context"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t, locale, toggleLocale } = useLanguage()

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.services, href: "/services" },
    { label: t.nav.portfolio, href: "/portfolio" },
    { label: t.nav.faq, href: "/faq" },
    { label: t.nav.contact, href: "/contact" },
  ]

  return (
    <>
      {/* Promo Banner */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
        {t.nav.promoBanner}
      </div>

      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8" aria-label="Navegación principal">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-tight text-foreground" aria-label="CODEXIA - Inicio">
            {"CODEXIA"}
          </Link>

          {/* Desktop Links */}
          <ul className="hidden items-center gap-6 md:flex" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/planilla"
              className="text-sm font-semibold text-primary border border-primary/40 rounded-full px-4 py-1.5 hover:bg-primary/10 transition-colors"
            >
              {t.nav.planilla}
            </Link>
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLocale}
              aria-label={t.lang.label}
              className="h-9 px-2 gap-1 text-xs font-semibold"
            >
              <Languages className="h-4 w-4" />
              {t.lang.switch}
            </Button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* CTA */}
            <Button asChild>
              <a
                href="https://wa.me/50763666033?text=Hola%20CODEXIA%2C%20quiero%20una%20asesor%C3%ADa%20gratuita%20para%20mi%20negocio."
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.nav.cta}
              </a>
            </Button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-1 md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLocale}
              aria-label={t.lang.label}
              className="h-9 px-2 text-xs font-semibold"
            >
              <Languages className="h-4 w-4" />
            </Button>
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-foreground p-1"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div id="mobile-nav" className="border-t border-border bg-background px-4 pb-4 md:hidden">
            <ul className="flex flex-col gap-3 pt-3" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3">
              <Link
                href="/planilla"
                className="block w-full text-center rounded-lg border border-primary/40 py-2 text-sm font-semibold text-primary hover:bg-primary/10 transition-colors mb-2"
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.planilla}
              </Link>
            </div>
            <div className="mt-1">
              <Button asChild className="w-full">
                <a
                  href="https://wa.me/50763666033?text=Hola%20CODEXIA%2C%20quiero%20una%20asesor%C3%ADa%20gratuita%20para%20mi%20negocio."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.nav.cta}
                </a>
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
