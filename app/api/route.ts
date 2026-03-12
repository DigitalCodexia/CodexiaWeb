// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

// ── Rate limiting (in-memory) ──────────────────────────────────────────────
// For production at scale, swap for Redis / Upstash
const rateLimit = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_MAX = 3         // max submissions
const RATE_LIMIT_WINDOW = 60_000 // per 60 seconds

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimit.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    return true
  }
  if (entry.count >= RATE_LIMIT_MAX) return false
  entry.count++
  return true
}

// ── POST handler ───────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Demasiados intentos. Intenta de nuevo en un momento." },
      { status: 429 }
    )
  }

  let body: Record<string, string>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 })
  }

  const { nombre, negocio, email, whatsapp, servicio, mensaje, website } = body

  // ── Honeypot check ──────────────────────────────────────────────────────
  if (website) {
    // Bot filled the hidden field — silently accept, do nothing
    return NextResponse.json({ ok: true })
  }

  // ── Field validation ────────────────────────────────────────────────────
  if (!nombre || !email || !whatsapp || !servicio) {
    return NextResponse.json({ error: "Faltan campos requeridos." }, { status: 400 })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Email inválido." }, { status: 400 })
  }

  // ── Send email via Resend ───────────────────────────────────────────────
  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: [process.env.CONTACT_RECIPIENT_EMAIL!],
      replyTo: email,
      subject: `Nueva solicitud: ${servicio} — ${nombre}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 24px; background: #0f0f0f; color: #f0f0f0; border-radius: 12px;">
          <h2 style="color: #a78bfa; margin-bottom: 24px;">Nueva solicitud de contacto</h2>
          <table style="width:100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #a0a0a0; width: 140px;">Nombre</td><td style="padding: 8px 0;">${nombre}</td></tr>
            <tr><td style="padding: 8px 0; color: #a0a0a0;">Negocio</td><td style="padding: 8px 0;">${negocio || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #a0a0a0;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #a78bfa;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #a0a0a0;">WhatsApp</td><td style="padding: 8px 0;">${whatsapp}</td></tr>
            <tr><td style="padding: 8px 0; color: #a0a0a0;">Servicio</td><td style="padding: 8px 0;">${servicio}</td></tr>
          </table>
          ${
            mensaje
              ? `<div style="margin-top: 20px; padding: 16px; background: #1a1a1a; border-radius: 8px; border-left: 3px solid #a78bfa;">
                  <p style="color: #a0a0a0; margin: 0 0 8px;">Mensaje:</p>
                  <p style="margin: 0; white-space: pre-wrap;">${mensaje}</p>
                </div>`
              : ""
          }
          <p style="margin-top: 24px; color: #555; font-size: 12px;">Enviado desde el formulario de contacto de CODEXIA</p>
        </div>
      `,
    })
  } catch (err) {
    console.error("Resend error:", err)
    return NextResponse.json(
      { error: "Error al enviar el mensaje. Intenta de nuevo." },
      { status: 500 }
    )
  }

  return NextResponse.json({ ok: true })
}