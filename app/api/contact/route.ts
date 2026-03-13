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

// ── Email Templates ────────────────────────────────────────────────────────

/**
 * Confirmation email sent to the user (professional, minimal design)
 */
function getConfirmationEmail(nombre: string, email: string, servicio: string): string {
  const logoUrl = "https://www.digitalcodexia.com/logo.png"
  return `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Confirmación de Solicitud</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f7fa;
          }
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }
          .header {
            background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%);
            padding: 40px 24px;
            text-align: center;
            color: white;
          }
          .logo {
            height: 48px;
            margin-bottom: 16px;
          }
          .header h1 {
            font-size: 24px;
            font-weight: 600;
            color: white;
            margin: 0;
          }
          .content {
            padding: 32px 24px;
          }
          .content p {
            margin-bottom: 16px;
            color: #555;
            font-size: 15px;
            line-height: 1.7;
          }
          .highlight {
            background: linear-gradient(135deg, #e0f2fe 0%, #cffafe 100%);
            padding: 20px;
            border-left: 4px solid #0ea5e9;
            margin: 24px 0;
            border-radius: 8px;
          }
          .highlight p {
            margin: 0;
            font-size: 14px;
            color: #0c4a6e;
          }
          .highlight strong {
            display: block;
            color: #0c4a6e;
            font-size: 15px;
            margin-bottom: 8px;
            font-weight: 600;
          }
          .footer {
            background-color: #f8fafc;
            padding: 24px;
            text-align: center;
            border-top: 1px solid #e2e8f0;
          }
          .footer p {
            font-size: 12px;
            color: #64748b;
            margin: 0;
          }
          .footer a {
            color: #0ea5e9;
            text-decoration: none;
            transition: color 0.2s;
          }
          .footer a:hover {
            color: #0284c7;
            text-decoration: underline;
          }
          .footer-links {
            margin: 12px 0 0;
            padding-top: 12px;
            border-top: 1px solid #e2e8f0;
            font-size: 11px;
          }
          .footer-links a {
            color: #64748b;
            margin: 0 4px;
          }
          .footer-links a:hover {
            color: #0ea5e9;
          }
          /* Responsive */
          @media (max-width: 600px) {
            .email-container {
              border-radius: 0;
            }
            .content {
              padding: 24px 16px;
            }
            .header {
              padding: 32px 16px;
            }
            .footer {
              padding: 20px 16px;
            }
            .header h1 {
              font-size: 20px;
            }
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <img src="${logoUrl}" alt="Digital Codexia" class="logo">
            <h1>✓ Solicitud Recibida</h1>
          </div>
          <div class="content">
            <p>Hola <strong>${nombre}</strong>,</p>
            <p>Gracias por contactarnos. Hemos recibido tu solicitud de <strong>${servicio}</strong> exitosamente.</p>
            <div class="highlight">
              <strong>¿Qué ocurre ahora?</strong>
              <p>Nuestro equipo revisará tu solicitud y se pondrá en contacto contigo dentro de las próximas 24 horas a través de WhatsApp o email.</p>
            </div>
            <p>Saludos,<br><strong>El equipo de Digital Codexia</strong></p>
          </div>
          <div class="footer">
            <p>&copy; 2024 Digital Codexia. Todos los derechos reservados.</p>
            <p style="margin: 8px 0 0;"><a href="https://www.digitalcodexia.com">www.digitalcodexia.com</a></p>
            <p class="footer-links">
              <a href="https://www.digitalcodexia.com/preferencias?email=${email}">Modificar preferencias</a> • 
              <a href="https://www.digitalcodexia.com/unsubscribe?email=${email}">Dejar de recibir</a>
            </p>
          </div>
        </div>
      </body>
    </html>
  `
}

/**
 * Admin notification email (professional, minimal design)
 */
function getAdminEmail(nombre: string, negocio: string, email: string, whatsapp: string, servicio: string, mensaje: string | undefined): string {
  const logoUrl = "https://www.digitalcodexia.com/logo.png"
  return `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nueva Solicitud de Contacto</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f7fa;
          }
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }
          .header {
            background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%);
            padding: 40px 24px;
            text-align: center;
            color: white;
          }
          .header h1 {
            font-size: 24px;
            font-weight: 600;
            margin: 0;
          }
          .content {
            padding: 32px 24px;
          }
          .info-grid {
            margin: 24px 0;
          }
          .info-row {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 16px;
            padding: 14px 0;
            border-bottom: 1px solid #e2e8f0;
          }
          .info-row:last-child {
            border-bottom: none;
          }
          .info-label {
            font-weight: 600;
            color: #0ea5e9;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .info-value {
            color: #1e293b;
            font-size: 14px;
            word-break: break-word;
            line-height: 1.5;
          }
          .info-value a {
            color: #0ea5e9;
            text-decoration: none;
            font-weight: 500;
          }
          .info-value a:hover {
            text-decoration: underline;
          }
          .message-box {
            background: linear-gradient(135deg, #e0f2fe 0%, #cffafe 100%);
            padding: 20px;
            border-left: 4px solid #0ea5e9;
            border-radius: 8px;
            margin-top: 24px;
          }
          .message-box h3 {
            font-size: 12px;
            font-weight: 600;
            color: #0c4a6e;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 10px;
          }
          .message-box p {
            font-size: 14px;
            color: #0c4a6e;
            margin: 0;
            white-space: pre-wrap;
            word-wrap: break-word;
            line-height: 1.6;
          }
          .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%);
            color: white;
            padding: 12px 28px;
            border-radius: 8px;
            text-decoration: none;
            font-size: 14px;
            font-weight: 600;
            margin-top: 24px;
            transition: transform 0.2s, box-shadow 0.2s;
          }
          .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);
          }
          .footer {
            background-color: #f8fafc;
            padding: 24px;
            text-align: center;
            border-top: 1px solid #e2e8f0;
          }
          .footer p {
            font-size: 12px;
            color: #64748b;
            margin: 0;
          }
          .timestamp {
            font-size: 11px;
            color: #94a3b8;
            margin-top: 8px;
          }
          .footer-links {
            margin: 12px 0 0;
            padding-top: 12px;
            border-top: 1px solid #e2e8f0;
            font-size: 11px;
          }
          .footer-links a {
            color: #64748b;
            text-decoration: none;
            margin: 0 4px;
          }
          .footer-links a:hover {
            color: #0ea5e9;
          }
          /* Responsive */
          @media (max-width: 600px) {
            .email-container {
              border-radius: 0;
            }
            .content {
              padding: 24px 16px;
            }
            .header {
              padding: 32px 16px;
            }
            .footer {
              padding: 20px 16px;
            }
            .info-row {
              grid-template-columns: 1fr;
            }
            .header h1 {
              font-size: 20px;
            }
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h1>📬 Nueva Solicitud de Contacto</h1>
          </div>
          <div class="content">
            <div class="info-grid">
              <div class="info-row">
                <div class="info-label">Nombre</div>
                <div class="info-value">${nombre}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Negocio</div>
                <div class="info-value">${negocio || "—"}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Email</div>
                <div class="info-value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="info-row">
                <div class="info-label">WhatsApp</div>
                <div class="info-value"><a href="https://wa.me/${whatsapp.replace(/\D/g, '')}">${whatsapp}</a></div>
              </div>
              <div class="info-row">
                <div class="info-label">Servicio</div>
                <div class="info-value">${servicio}</div>
              </div>
            </div>
            ${
              mensaje
                ? `<div class="message-box">
                    <h3>Mensaje</h3>
                    <p>${mensaje}</p>
                  </div>`
                : ""
            }
            <a href="mailto:${email}" class="cta-button">Responder</a>
          </div>
          <div class="footer">
            <p>Solicitud recibida desde el formulario de contacto de Digital Codexia</p>
            <p class="timestamp">${new Date().toLocaleString("es-ES")}</p>
            <p class="footer-links">
              <a href="https://www.digitalcodexia.com/preferencias?email=${process.env.CONTACT_RECIPIENT_EMAIL}">Modificar preferencias de notificaciones</a>
            </p>
          </div>
        </div>
      </body>
    </html>
  `
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

  try {
    // ── Send confirmation email to user ──────────────────────────────────
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: [email],
      subject: "Confirmación de tu solicitud — CODEXIA",
      html: getConfirmationEmail(nombre, email, servicio),
    })

    // ── Send admin notification ──────────────────────────────────────────
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: [process.env.CONTACT_RECIPIENT_EMAIL!],
      replyTo: email,
      subject: `Nueva solicitud: ${servicio} — ${nombre}`,
      html: getAdminEmail(nombre, negocio, email, whatsapp, servicio, mensaje),
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