"use client"

import { useEffect } from "react"

export function NexusThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "nexus")
    return () => {
      document.documentElement.removeAttribute("data-theme")
    }
  }, [])

  return <>{children}</>
}
