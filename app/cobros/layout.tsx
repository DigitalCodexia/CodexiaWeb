import type { Metadata } from "next"
import { CobranzaThemeProvider } from "./theme-provider"

export const metadata: Metadata = {
  title: "COD Cobros | Gestion Profesional de Cobros",
  description: "Recordatorios programados, reportes detallados y seguimiento completo de cada cuenta. Simplifica tu cobranza y mejora tu flujo de efectivo.",
}

export default function CobranzaLayout({ children }: { children: React.ReactNode }) {
  return <CobranzaThemeProvider>{children}</CobranzaThemeProvider>
}
