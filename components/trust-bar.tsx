import { Badge } from "@/components/ui/badge"

const trustItems = [
  "Desarrollo moderno",
  "Diseno responsive",
  "SEO basico",
  "Formularios de contacto",
]

export function TrustBar() {
  return (
    <section className="border-y border-border bg-card py-6">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {trustItems.map((item) => (
            <Badge
              key={item}
              variant="secondary"
              className="px-4 py-2 text-sm font-medium"
            >
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
