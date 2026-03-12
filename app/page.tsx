import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Benefits } from "@/components/benefits"

import { FAQ } from "@/components/faq"
import { CtaFinal } from "@/components/cta-final"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Portfolio } from "@/components/portfolio"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Process />
      <Benefits />
      <Portfolio />
      <FAQ />
      <CtaFinal />
      <ContactForm />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
