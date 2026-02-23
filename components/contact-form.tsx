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
import { Send } from "lucide-react"

const serviceOptions = [
  "Tienda Online",
  "Pagina Web",
  "Landing Page",
  "Aplicacion Web",
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

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {}
    if (!form.nombre.trim()) newErrors.nombre = "Tu nombre es requerido"
    if (!form.email.trim()) {
      newErrors.email = "Tu email es requerido"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Email invalido"
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
      <section id="contacto" className="border-t border-border bg-card py-20 lg:py-28">
        <div className="mx-auto max-w-lg px-4 text-center lg:px-8">
          <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-primary/15 text-primary mb-6">
            <Send className="h-7 w-7" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">Mensaje enviado</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Gracias por contactarnos. Nos comunicaremos contigo a la brevedad.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="contacto" className="border-t border-border bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-2xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Contacto</p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Enviar formulario
          </h2>
          <p className="mt-3 text-muted-foreground">
            Cuentanos sobre tu proyecto y te enviaremos una propuesta.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid gap-5 sm:grid-cols-2" noValidate>
          <div className="flex flex-col gap-2">
            <Label htmlFor="nombre">Nombre *</Label>
            <Input
              id="nombre"
              placeholder="Tu nombre"
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              aria-invalid={!!errors.nombre}
            />
            {errors.nombre && <p className="text-xs text-destructive">{errors.nombre}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="negocio">Negocio</Label>
            <Input
              id="negocio"
              placeholder="Nombre de tu negocio"
              value={form.negocio}
              onChange={(e) => setForm({ ...form, negocio: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              aria-invalid={!!errors.email}
            />
            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="whatsapp">WhatsApp *</Label>
            <Input
              id="whatsapp"
              placeholder="+52 123 456 7890"
              value={form.whatsapp}
              onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
              aria-invalid={!!errors.whatsapp}
            />
            {errors.whatsapp && <p className="text-xs text-destructive">{errors.whatsapp}</p>}
          </div>

          <div className="flex flex-col gap-2 sm:col-span-2">
            <Label htmlFor="servicio">Servicio *</Label>
            <Select
              value={form.servicio}
              onValueChange={(v) => setForm({ ...form, servicio: v })}
            >
              <SelectTrigger id="servicio" aria-invalid={!!errors.servicio}>
                <SelectValue placeholder="Selecciona un servicio" />
              </SelectTrigger>
              <SelectContent>
                {serviceOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.servicio && <p className="text-xs text-destructive">{errors.servicio}</p>}
          </div>

          <div className="flex flex-col gap-2 sm:col-span-2">
            <Label htmlFor="mensaje">Mensaje</Label>
            <Textarea
              id="mensaje"
              placeholder="Cuentanos sobre tu proyecto..."
              rows={4}
              value={form.mensaje}
              onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
            />
          </div>

          <div className="sm:col-span-2">
            <Button type="submit" size="lg" className="w-full">
              <Send className="mr-2 h-4 w-4" />
              Enviar mensaje
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
