import { HeroLanding } from "@/components/ui/hero-1"
import { OrderingSection } from "@/components/sections/ordering"
import { BriefsSection } from "@/components/sections/briefs"
import { ProductsForBriefsSection } from "@/components/sections/products-for-briefs"
import { ContentApprovalSection } from "@/components/sections/content-approval"
import { ShootsSection } from "@/components/sections/shoots"
import { PaymentsSection } from "@/components/sections/payments"
import { FAQSection } from "@/components/sections/faq"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroLanding
        title="Üdv a csapatban!"
        description="Minden információ, amit egy BioTechUSA influencernek tudnia kell"
        gradientColors={{
          from: "#001322",
          to: "#33C5F3"
        }}
      />

      <OrderingSection />

      <BriefsSection />

      <ProductsForBriefsSection />

      <ContentApprovalSection />

      <ShootsSection />

      <PaymentsSection />

      <FAQSection />

      <footer className="bg-[#001322] border-t border-white/10 py-12 md:py-16">
        <div className="container px-6 md:px-8 mx-auto max-w-7xl">
          <div className="md:flex md:justify-between md:items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-heading font-black text-white">BioTech<span className="text-primary">USA</span></span>
              <p className="mt-2 text-sm text-gray-400">Official Influencer Portal</p>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="https://biotechusa.com" className="hover:text-white transition-colors">Webshop</a>
              <a href="#" className="hover:text-white transition-colors">Adatkezelés</a>
              <a href="#" className="hover:text-white transition-colors">Kapcsolat</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} BioTechUSA. Minden jog fenntartva.
          </div>
        </div>
      </footer>
    </main>
  )
}
