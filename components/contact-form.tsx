"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Send, CheckCircle2, User, Building2, Mail, Phone, MessageSquare } from "lucide-react"

const serviceOptions = [
  "Tienda Online",
  "Pagina Web",
  "Landing Page",
  "Aplicacion Web",
  "Automatizacion",
  "Otro",
]

interface FormData {
  nombre: string
  negocio: string
  email: string
  whatsapp: string
  servicio: string
  mensaje: string
}

export function ContactForm() {
  const [form, setForm] = useState<FormData>({
    nombre: "",
    negocio: "",
    email: "",
    whatsapp: "",
    servicio: "",
    mensaje: "",
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {}
    if (!form.nombre.trim()) newErrors.nombre = "Tu nombre es requerido"
    if (!form.email.trim()) {
      newErrors.email = "Tu email es requerido"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Ingresa un email valido"
    }
    if (!form.whatsapp.trim()) newErrors.whatsapp = "Tu WhatsApp es requerido"
    if (!form.servicio) newErrors.servicio = "Selecciona un servicio"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="contacto" className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
        <div className="relative mx-auto max-w-lg px-4 text-center lg:px-8">
          <div className="rounded-2xl border border-border bg-card/80 p-10 backdrop-blur-sm">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/15">
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-foreground">Mensaje enviado con exito</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Gracias por tu interes. Nuestro equipo revisara tu solicitud y te contactara en menos de 24 horas.
            </p>
            <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <p className="mt-4 text-sm text-muted-foreground">
              Mientras tanto, puedes explorar nuestros servicios
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contacto" className="relative overflow-hidden py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative mx-auto max-w-3xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
            <MessageSquare className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Contacto
            </span>
          </div>
          <h2 className="mt-5 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Hablemos de tu proyecto
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground leading-relaxed">
            Completa el formulario y recibe una propuesta personalizada sin compromiso.
          </p>
        </div>

        {/* Form Card */}
        <div className="mt-12 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm sm:p-10">
          <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2" noValidate>
            {/* Nombre */}
            <div className="flex flex-col gap-2.5">
              <Label htmlFor="nombre" className="flex items-center gap-2 text-sm font-medium text-foreground">
                <User className="h-3.5 w-3.5 text-muted-foreground" />
                Nombre <span className="text-primary">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="nombre"
                  placeholder="Tu nombre completo"
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  onFocus={() => setFocused("nombre")}
                  onBlur={() => setFocused(null)}
                  aria-invalid={!!errors.nombre}
                  className={`h-12 rounded-xl border-border bg-secondary/50 text-foreground placeholder:text-muted-foreground/60 transition-all ${
                    focused === "nombre" ? "border-primary/50 ring-1 ring-primary/20" : ""
                  } ${errors.nombre ? "border-destructive" : ""}`}
                />
              </div>
              {errors.nombre && (
                <p className="text-xs text-destructive">{errors.nombre}</p>
              )}
            </div>

            {/* Negocio */}
            <div className="flex flex-col gap-2.5">
              <Label htmlFor="negocio" className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Building2 className="h-3.5 w-3.5 text-muted-foreground" />
                Negocio
              </Label>
              <Input
                id="negocio"
                placeholder="Nombre de tu empresa"
                value={form.negocio}
                onChange={(e) => setForm({ ...form, negocio: e.target.value })}
                onFocus={() => setFocused("negocio")}
                onBlur={() => setFocused(null)}
                className={`h-12 rounded-xl border-border bg-secondary/50 text-foreground placeholder:text-muted-foreground/60 transition-all ${
                  focused === "negocio" ? "border-primary/50 ring-1 ring-primary/20" : ""
                }`}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2.5">
              <Label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                Email <span className="text-primary">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                aria-invalid={!!errors.email}
                className={`h-12 rounded-xl border-border bg-secondary/50 text-foreground placeholder:text-muted-foreground/60 transition-all ${
                  focused === "email" ? "border-primary/50 ring-1 ring-primary/20" : ""
                } ${errors.email ? "border-destructive" : ""}`}
              />
              {errors.email && (
                <p className="text-xs text-destructive">{errors.email}</p>
              )}
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col gap-2.5">
              <Label htmlFor="whatsapp" className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Phone className="h-3.5 w-3.5 text-muted-foreground" />
                WhatsApp <span className="text-primary">*</span>
              </Label>
              <Input
                id="whatsapp"
                placeholder="+507 0000-0000"
                value={form.whatsapp}
                onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                onFocus={() => setFocused("whatsapp")}
                onBlur={() => setFocused(null)}
                aria-invalid={!!errors.whatsapp}
                className={`h-12 rounded-xl border-border bg-secondary/50 text-foreground placeholder:text-muted-foreground/60 transition-all ${
                  focused === "whatsapp" ? "border-primary/50 ring-1 ring-primary/20" : ""
                } ${errors.whatsapp ? "border-destructive" : ""}`}
              />
              {errors.whatsapp && (
                <p className="text-xs text-destructive">{errors.whatsapp}</p>
              )}
            </div>

            {/* Servicio */}
            <div className="flex flex-col gap-2.5 sm:col-span-2">
              <Label htmlFor="servicio" className="text-sm font-medium text-foreground">
                Servicio de interes <span className="text-primary">*</span>
              </Label>
              <Select
                value={form.servicio}
                onValueChange={(v) => setForm({ ...form, servicio: v })}
              >
                <SelectTrigger
                  id="servicio"
                  aria-invalid={!!errors.servicio}
                  className={`h-12 rounded-xl border-border bg-secondary/50 text-foreground transition-all ${
                    errors.servicio ? "border-destructive" : ""
                  }`}
                >
                  <SelectValue placeholder="Selecciona un servicio" />
                </SelectTrigger>
                <SelectContent className="rounded-xl border-border bg-card">
                  {serviceOptions.map((option) => (
                    <SelectItem key={option} value={option} className="rounded-lg">
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.servicio && (
                <p className="text-xs text-destructive">{errors.servicio}</p>
              )}
            </div>

            {/* Mensaje */}
            <div className="flex flex-col gap-2.5 sm:col-span-2">
              <Label htmlFor="mensaje" className="text-sm font-medium text-foreground">
                Cuentanos sobre tu proyecto
              </Label>
              <Textarea
                id="mensaje"
                placeholder="Describe brevemente lo que necesitas: tipo de proyecto, funcionalidades, plazos..."
                rows={4}
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                onFocus={() => setFocused("mensaje")}
                onBlur={() => setFocused(null)}
                className={`rounded-xl border-border bg-secondary/50 text-foreground placeholder:text-muted-foreground/60 transition-all resize-none ${
                  focused === "mensaje" ? "border-primary/50 ring-1 ring-primary/20" : ""
                }`}
              />
            </div>

            {/* Divider */}
            <div className="sm:col-span-2">
              <div className="h-px w-full bg-border" />
            </div>

            {/* Submit */}
            <div className="sm:col-span-2">
              <Button
                type="submit"
                size="lg"
                className="h-13 w-full rounded-xl text-base font-semibold shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
              >
                <Send className="mr-2 h-4 w-4" />
                Enviar solicitud
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Sin compromiso. Respuesta en menos de 24 horas.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
