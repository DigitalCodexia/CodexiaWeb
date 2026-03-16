"use client"

import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/context/language-context"

export function TrustBar() {
  const { t } = useLanguage()

  return (
    <section className="border-y border-border bg-card py-6">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {t.trustBar.map((item) => (
            <Badge key={item} variant="secondary" className="px-4 py-2 text-sm font-medium">
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
