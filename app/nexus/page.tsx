import { NexusHero } from "@/components/nexus/hero"
import { NexusFeatures } from "@/components/nexus/features"
import { NexusBenefits } from "@/components/nexus/benefits"
import { NexusPricing } from "@/components/nexus/pricing"
import { NexusCTA } from "@/components/nexus/cta"
import { NexusContact } from "@/components/nexus/contact"

export default function NexusPage() {
  return (
    <main className="min-h-screen bg-background">
      <NexusHero />
      <NexusFeatures />
      <NexusBenefits />
      <NexusPricing />
      <NexusCTA />
      <NexusContact />
    </main>
  )
}
