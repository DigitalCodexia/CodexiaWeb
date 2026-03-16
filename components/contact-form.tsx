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
import { Send, CheckCircle2, User, Building2, Mail, Phone, MessageSquare, Loader2 } from "lucide-react"
import { useLanguage } from "@/context/language-context"

interface FormData {
  nombre: string
  negocio: string
  email: string
  whatsapp: string
  servicio: string
  mensaje: string
  website: string // honeypot
}

export function ContactForm() {
  const { t } = useLanguage()
  const c = t.contact

  const [form, setForm] = useState<FormData>({
    nombre: "",
    negocio: "",
    email: "",
    whatsapp: "",
    servicio: "",
    mensaje: "",
    website: "",
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)
  const [serverError, setServerError] = useState<string | null>(null)

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {}
    if (!form.nombre.trim()) newErrors.nombre = c.errors.nombre
    if (!form.email.trim()) {
      newErrors.email = c.errors.emailRequired
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = c.errors.emailInvalid
    }
    if (!form.whatsapp.trim()) newErrors.whatsapp = c.errors.whatsapp
    if (!form.servicio) newErrors.servicio = c.errors.servicio
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    if (form.website) return // honeypot

    setLoading(true)
    setServerError(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        setServerError(data.error ?? c.serverError)
        return
      }

      setSubmitted(true)
    } catch {
      setServerError(c.connectionError)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <section id="contacto" className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-linear-to-b from-background via-card to-background" />
        <div className="relative mx-auto max-w-lg px-4 text-center lg:px-8">
          <div className="rounded-2xl border border-border bg-card/80 p-10 backdrop-blur-sm">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/15">
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-foreground">{c.successTitle}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{c.successDesc}</p>
            <div className="mt-6 h-px w-full bg-linear-to-r from-transparent via-primary/40 to-transparent" />
            <p className="mt-4 text-sm text-muted-foreground">{c.successNote}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contacto" className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 bg-linear-to-b from-background via-card to-background" />
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-linear-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative mx-auto max-w-3xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
            <MessageSquare className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              {c.eyebrow}
            </span>
          </div>
          <h2 className="mt-5 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            {c.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground leading-relaxed">
            {c.subheading}
          </p>
        </div>

        {/* Form Card */}
        <div className="mt-12 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm sm:p-10">
          <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2" noValidate>

            {/* Honeypot */}
            <div
              aria-hidden="true"
              style={{ position: "absolute", left: "-9999px", top: "-9999px", height: 0, width: 0, overflow: "hidden", opacity: 0 }}
              tabIndex={-1}
            >
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                autoComplete="off"
                tabIndex={-1}
                value={form.website}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
              />
            </div>

            {/* Nombre */}
            <div className="flex flex-col gap-2.5">
              <Label htmlFor="nombre" className="flex items-center gap-2 text-sm font-medium text-foreground">
                <User className="h-3.5 w-3.5 text-muted-foreground" />
                {c.fields.nombre} <span className="text-primary">*</span>
              </Label>
              <Input
                id="nombre"
                placeholder={c.fields.nombrePlaceholder}
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                onFocus={() => setFocused("nombre")}
                onBlur={() => setFocused(null)}
                aria-invalid={!!errors.nombre}
                className={`h-12 rounded-xl border-border bg-secondary/50 text-foreground placeholder:text-muted-foreground/60 transition-all ${
                  focused === "nombre" ? "border-primary/50 ring-1 ring-primary/20" : ""
                } ${errors.nombre ? "border-destructive" : ""}`}
              />
              {errors.nombre && <p className="text-xs text-destructive">{errors.nombre}</p>}
            </div>

            {/* Negocio */}
            <div className="flex flex-col gap-2.5">
              <Label htmlFor="negocio" className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Building2 className="h-3.5 w-3.5 text-muted-foreground" />
                {c.fields.negocio}
              </Label>
              <Input
                id="negocio"
                placeholder={c.fields.negocioPlaceholder}
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
                {c.fields.email} <span className="text-primary">*</span>
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
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col gap-2.5">
              <Label htmlFor="whatsapp" className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Phone className="h-3.5 w-3.5 text-muted-foreground" />
                {c.fields.whatsapp} <span className="text-primary">*</span>
              </Label>
              <Input
                id="whatsapp"
                placeholder="+50763666033"
                value={form.whatsapp}
                onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                onFocus={() => setFocused("whatsapp")}
                onBlur={() => setFocused(null)}
                aria-invalid={!!errors.whatsapp}
                className={`h-12 rounded-xl border-border bg-secondary/50 text-foreground placeholder:text-muted-foreground/60 transition-all ${
                  focused === "whatsapp" ? "border-primary/50 ring-1 ring-primary/20" : ""
                } ${errors.whatsapp ? "border-destructive" : ""}`}
              />
              {errors.whatsapp && <p className="text-xs text-destructive">{errors.whatsapp}</p>}
            </div>

            {/* Servicio */}
            <div className="flex flex-col gap-2.5 sm:col-span-2">
              <Label htmlFor="servicio" className="text-sm font-medium text-foreground">
                {c.fields.servicio} <span className="text-primary">*</span>
              </Label>
              <Select value={form.servicio} onValueChange={(v) => setForm({ ...form, servicio: v })}>
                <SelectTrigger
                  id="servicio"
                  aria-invalid={!!errors.servicio}
                  className={`h-12 rounded-xl border-border bg-secondary/50 text-foreground transition-all ${
                    errors.servicio ? "border-destructive" : ""
                  }`}
                >
                  <SelectValue placeholder={c.fields.servicioPlaceholder} />
                </SelectTrigger>
                <SelectContent className="rounded-xl border-border bg-card">
                  {c.serviceOptions.map((option) => (
                    <SelectItem key={option} value={option} className="rounded-lg">
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.servicio && <p className="text-xs text-destructive">{errors.servicio}</p>}
            </div>

            {/* Mensaje */}
            <div className="flex flex-col gap-2.5 sm:col-span-2">
              <Label htmlFor="mensaje" className="text-sm font-medium text-foreground">
                {c.fields.mensaje}
              </Label>
              <Textarea
                id="mensaje"
                placeholder={c.fields.mensajePlaceholder}
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

            {/* Server error */}
            {serverError && (
              <div className="sm:col-span-2 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                {serverError}
              </div>
            )}

            <div className="sm:col-span-2">
              <div className="h-px w-full bg-border" />
            </div>

            {/* Submit */}
            <div className="sm:col-span-2">
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="h-13 w-full rounded-xl text-base font-semibold shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {c.submitting}
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    {c.submit}
                  </>
                )}
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                {c.disclaimer}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
