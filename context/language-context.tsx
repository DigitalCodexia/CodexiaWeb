'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { translations, type Locale } from '@/lib/i18n'

interface LanguageContextValue {
  locale: Locale
  t: typeof translations.es
  toggleLocale: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('es')

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === 'es' ? 'en' : 'es'))
  }, [])

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
