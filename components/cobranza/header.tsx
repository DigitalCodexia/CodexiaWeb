"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/20">
            <span className="text-lg font-bold text-primary-foreground">C</span>
          </div>
          <div>
            <span className="text-xl font-bold text-foreground tracking-tight">COD Cobros</span>
            <p className="text-[10px] text-muted-foreground -mt-0.5">by Digital Codexia</p>
          </div>
        </div>

        <div className="hidden md:flex md:items-center md:gap-8">
          <Link href="#caracteristicas" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Caracteristicas
          </Link>
          <Link href="#como-funciona" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Como Funciona
          </Link>
          <Link href="https://digitalcodexia.com" target="_blank" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Digital Codexia
          </Link>
        </div>

        <div className="hidden md:flex md:items-center md:gap-3">
          <Button variant="ghost" className="text-sm font-medium">
            Iniciar Sesion
          </Button>
          <Button className="text-sm font-medium rounded-xl bg-gradient-to-r from-primary to-primary/90 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/25 transition-all">
            Pedir Demo
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden p-2 rounded-xl text-foreground hover:bg-muted transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="px-6 py-6 space-y-4">
            <Link href="#caracteristicas" className="block text-sm font-medium text-muted-foreground hover:text-foreground py-2">
              Caracteristicas
            </Link>
            <Link href="#como-funciona" className="block text-sm font-medium text-muted-foreground hover:text-foreground py-2">
              Como Funciona
            </Link>
            <Link href="https://digitalcodexia.com" target="_blank" className="block text-sm font-medium text-muted-foreground hover:text-foreground py-2">
              Digital Codexia
            </Link>
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <Button variant="outline" className="w-full justify-center rounded-xl">
                Iniciar Sesion
              </Button>
              <Button className="w-full justify-center rounded-xl bg-gradient-to-r from-primary to-primary/90">
                Pedir Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
