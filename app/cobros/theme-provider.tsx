"use client"

import { useEffect } from "react"

export function CobranzaThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "cobros")
    return () => {
      document.documentElement.removeAttribute("data-theme")
    }
  }, [])

  return <>{children}</>
}
