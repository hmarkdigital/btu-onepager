import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BioTechUSA - Influencer Onboarding',
  description: 'BioTechUSA influencer onboarding információs felület',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hu" className="dark scroll-smooth">
      <body className={`font-sans bg-background text-foreground antialiased selection:bg-primary/30 selection:text-white`}>
        {children}
        <div className="fixed inset-0 pointer-events-none z-[-1]">
          <div className="absolute top-0 left-0 w-full h-full bg-[#010204]"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-[#001322] rounded-full blur-[100px] opacity-30"></div>
        </div>
      </body>
    </html>
  )
}
