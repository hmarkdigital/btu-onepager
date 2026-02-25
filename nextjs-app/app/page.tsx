import { HeroLanding } from "@/components/ui/hero-1"
import { NavigationCardsSection } from "@/components/sections/navigation-cards"
import { OrderingSection } from "@/components/sections/ordering"
import { BriefsSection } from "@/components/sections/briefs"
import { ContentApprovalSection } from "@/components/sections/content-approval"
import { ShootsSection } from "@/components/sections/shoots"
import { PaymentsSection } from "@/components/sections/payments"
import { FAQSection } from "@/components/sections/faq"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroLanding
        title="Üdvözlünk a BioTechUSA csapatában!"
        description="Minden információ egy helyen, amit egy BioTechUSA nagykövetnek tudnia kell."
        gradientColors={{
          from: "#001322",
          to: "#028FFB"
        }}
      />

      <NavigationCardsSection />

      <OrderingSection />

      <BriefsSection />

      <ContentApprovalSection />

      <ShootsSection />

      <PaymentsSection />

      <FAQSection />

      <footer className="border-t border-white/10 py-12 md:py-16 bg-[#010204]/80">
        <div className="container px-6 md:px-8 mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex-shrink-0">
              <img src="https://cdn.prod.website-files.com/67696bf6a7f399ccfcfd653f/699b0506f7979eb097acf82f_BTU_logo_white.png" alt="BioTechUSA" className="h-8 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-sm font-medium text-gray-400 tracking-wide text-center md:text-right">
              Üdv a csapatban! <span className="text-white font-bold italic">Zsófi, Dia és Máté</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
