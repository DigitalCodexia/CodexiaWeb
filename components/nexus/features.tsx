import {
  LayoutDashboard,
  Package,
  Calculator,
  FileText,
  BarChart3,
  CreditCard,
  Shield,
  Smartphone,
} from "lucide-react"

const features = [
  {
    icon: LayoutDashboard,
    title: "Panel de Administración",
    description: "Dashboard intuitivo con métricas en tiempo real. Visualiza ventas, inventario y rendimiento de tu negocio en un solo lugar.",
  },
  {
    icon: Package,
    title: "Gestión de Inventario",
    description: "Control total de tu stock con alertas automáticas, seguimiento de productos y reportes detallados de movimientos.",
  },
  {
    icon: Calculator,
    title: "Contabilidad Básica",
    description: "Módulo contable integrado para llevar el control de ingresos, egresos y generar reportes financieros esenciales.",
  },
  {
    icon: FileText,
    title: "Facturación Electrónica",
    description: "Conexión directa con servicios de facturación electrónica. Genera comprobantes fiscales de forma automática con integración a proveedores certificados.",
  },
  {
    icon: BarChart3,
    title: "Reportes Avanzados",
    description: "Análisis detallado de ventas por producto, categoría, horario y empleado. Toma decisiones basadas en datos.",
  },
  {
    icon: CreditCard,
    title: "Múltiples Métodos de Pago",
    description: "Acepta efectivo, tarjetas, transferencias y pagos digitales. Integración con terminales bancarias.",
  },
  {
    icon: Shield,
    title: "Seguridad Empresarial",
    description: "Roles y permisos personalizables, registro de actividad y respaldos automáticos en la nube.",
  },
  {
    icon: Smartphone,
    title: "Acceso Multiplataforma",
    description: "Utiliza NEXUS desde cualquier dispositivo. Aplicación web responsiva que se adapta a tablets y móviles.",
  },
]

export function NexusFeatures() {
  return (
    <section id="caracteristicas" className="py-24 sm:py-32 relative border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Características</p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Todo lo que necesitas para gestionar tu negocio
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            NEXUS integra todas las herramientas esenciales en una plataforma elegante y fácil de usar.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100 rounded-2xl" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
