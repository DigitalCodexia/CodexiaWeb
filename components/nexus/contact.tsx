"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function NexusContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
  })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    // Reutiliza el API de contacto existente
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: formData.name,
          negocio: formData.business,
          email: formData.email,
          whatsapp: formData.phone,
          servicio: "NEXUS POS",
          mensaje: formData.message,
          website: "",
        }),
      })
      setSent(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contacto" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Contacto</p>
            <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Nuestro equipo está listo para ayudarte a implementar NEXUS en tu negocio.
              Contáctanos y agenda una demostración personalizada.
            </p>

            <div className="mt-10 space-y-6">
              {[
                { icon: Mail, label: "Email", value: "ventas@digitalcodexia.com", href: "mailto:ventas@digitalcodexia.com" },
                { icon: Phone, label: "WhatsApp", value: "+507 6366-6033", href: "https://wa.me/50763666033" },
                { icon: MapPin, label: "Web", value: "digitalcodexia.com", href: "https://digitalcodexia.com" },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{label}</div>
                    <a href={href} className="text-foreground hover:text-primary transition-colors font-medium">
                      {value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-border bg-card p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-12">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Send className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">¡Solicitud enviada!</h3>
                <p className="text-muted-foreground">Nuestro equipo te contactará en menos de 24 horas.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-foreground mb-6">Solicita una demostración</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Nombre completo</label>
                      <Input id="name" type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Tu nombre" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="tu@email.com" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Teléfono / WhatsApp</label>
                      <Input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+507 0000-0000" required />
                    </div>
                    <div>
                      <label htmlFor="business" className="block text-sm font-medium text-foreground mb-2">Nombre del negocio</label>
                      <Input id="business" type="text" value={formData.business} onChange={(e) => setFormData({ ...formData, business: e.target.value })} placeholder="Tu negocio" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Mensaje</label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none text-sm"
                      placeholder="Cuéntanos sobre tu negocio..."
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 text-base font-medium" disabled={sending}>
                    {sending ? "Enviando..." : "Enviar Solicitud"}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
