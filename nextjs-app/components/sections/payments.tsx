'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SpotlightButton } from '@/components/ui/spotlight-button'
import { useLanguage } from '@/lib/language-context'

export function PaymentsSection() {
    const { lang } = useLanguage()
    const isEN = lang === 'en'

    return (
        <section id="payments" className="py-24 md:py-32 relative overflow-hidden">
            <div className="container px-6 md:px-8 mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-[2px] bg-primary"></div>
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">
                            {isEN ? 'Finance' : 'Pénzügyek'}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tight">
                        {isEN ? 'Coupon Code Payments' : 'Kuponkódos kifizetések'}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative lg:sticky lg:top-32"
                    >
                        <div className="relative aspect-[4/5] w-full rounded-[30px] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(2,143,251,0.1)] group">
                            <Image
                                src="https://cdn.prod.website-files.com/67696bf6a7f399ccfcfd653f/699b21bdb85cbedda8b60a95_kifizetesek%20(1).webp"
                                alt="BioTechUSA Kuponkódos Kifizetések"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#010204]/60 via-transparent to-transparent opacity-80" />
                        </div>
                    </motion.div>

                    {/* Right Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="prose prose-invert prose-lg max-w-none text-gray-300"
                    >
                        {isEN ? (
                            <>
                                <p className="mb-6">
                                    Your personal coupon code is <strong className="text-white">valid both online and in BioTechUSA stores</strong>, so purchases from both channels count toward your commission. <strong className="text-white">If you are not able to issue invoices, this section does not apply to you.</strong>
                                </p>

                                <p className="mb-6">
                                    We <strong className="text-white">compile coupon performance reports at the end of each month</strong>, and the related summaries are usually sent <strong className="text-white">by the 10th day of the following month</strong> from the <strong className="text-white">sportmarketing@biotechusa.com</strong> email address.
                                </p>

                                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 mb-8 mt-8">
                                    <p className="m-0 text-white font-medium">
                                        Please note that <strong className="text-primary font-black">in the case of smaller amounts (typically under 100 EUR)</strong> we do not automatically send a payment notification and invoicing request every month. In these cases, the amount remains in the system so it can continue to accumulate.
                                    </p>
                                </div>

                                <h4 className="text-xl font-bold text-white mt-10 mb-6">However, this can be handled flexibly:</h4>
                                <p className="mb-4">You may request payment</p>

                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center text-sm font-bold text-white hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-default">monthly,</div>
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center text-sm font-bold text-white hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-default">every two months,</div>
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center text-sm font-bold text-white hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-default">quarterly,</div>
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center text-sm font-bold text-white hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-default">semi-annually</div>
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center text-sm font-bold text-white hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-default col-span-2 sm:col-span-1">or by annual settlement.</div>
                                </div>

                                <p className="mb-6 border-l-2 border-primary pl-4">
                                    If you prefer to receive your accumulated commission <strong className="text-white">every month</strong>, simply <strong className="text-white">let us know</strong> and we will gladly start the process.
                                </p>

                                <p className="mb-6 italic text-gray-400">
                                    If you do not receive a notification in a given month, <strong className="text-white">there is no need to worry</strong> – it simply means that the amount is still being accumulated for you.
                                </p>

                                <p className="mt-8 pt-8 border-t border-white/10 mb-8">
                                    The payment of your coupon commissions can be initiated once we receive <strong className="text-white">both the invoice and the signed performance confirmation</strong>, which you can download at the bottom of this section. Please make sure the document is <strong className="text-white">filled out correctly and signed</strong>, as our system cannot process incorrectly completed documents.
                                </p>
                            </>
                        ) : (
                            <>
                                <p className="mb-6">
                                    A saját kuponkódod <strong className="text-white">online és a BioTechUSA üzletekben egyaránt érvényes</strong>, így a vásárlások mindkét csatornán beleszámítanak a jutalékodba. <strong className="text-white">Amennyiben nincs lehetőséged számlát kiállítani ez a rész nem vonatkozik rád.</strong>
                                </p>

                                <p className="mb-6">
                                    A kuponkódos teljesítések összesítését <strong className="text-white">minden hónap végén készítjük el</strong> és az ehhez kapcsolódó kimutatásokat jellemzően <strong className="text-white">a tárgyhót követő hónap 10. napjáig</strong> küldjük ki a <strong className="text-white">sportmarketing@biotechusa.com</strong> email címről.
                                </p>

                                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 mb-8 mt-8">
                                    <p className="m-0 text-white font-medium">
                                        Fontos tudnod, hogy <strong className="text-primary font-black">kisebb összeg esetén (jellemzően 20.000 Ft alatt)</strong> nem minden hónapban küldjük ki automatikusan a kifizetési értesítést és a számlázási kérést. Ilyenkor az összeget „bent hagyjuk&quot;, hogy tovább gyűljön.
                                    </p>
                                </div>

                                <h4 className="text-xl font-bold text-white mt-10 mb-6">Természetesen ez rugalmasan kezelhető:</h4>
                                <p className="mb-4">ha szeretnéd, kérheted a kifizetést</p>

                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center text-sm font-bold text-white hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-default">havonta,</div>
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center text-sm font-bold text-white hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-default">kéthavonta,</div>
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center text-sm font-bold text-white hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-default">negyedévente,</div>
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center text-sm font-bold text-white hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-default">félévente</div>
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center text-sm font-bold text-white hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-default col-span-2 sm:col-span-1">vagy akár éves elszámolással is.</div>
                                </div>

                                <p className="mb-6 border-l-2 border-primary pl-4">
                                    Amennyiben úgy érzed, hogy szeretnéd mindenképpen havonta megkapni az összegyűlt jutalékodat, <strong className="text-white">csak jelezd felénk</strong>, és örömmel elindítjuk a folyamatot.
                                </p>

                                <p className="mb-6 italic text-gray-400">
                                    Ha egy adott hónapban nem kapsz értesítést, <strong className="text-white">ne ijedj meg</strong> – ez egyszerűen azt jelenti, hogy még gyűjtjük számodra az összeget.
                                </p>

                                <p className="mt-8 pt-8 border-t border-white/10 mb-8">
                                    Kuponkódod kifizetését a számla és teljesítés igazolás együttes megküldésével tudjuk indítani, amit a blokk aljáról le is tudsz tölteni. Figyelj oda a dokumentum helyes kitöltésére és aláírására, mert a pontatlanul kitöltött dokumentumot a rendszerünk nem tudja befogadni.
                                </p>
                            </>
                        )}

                        <div className="inline-block">
                            <SpotlightButton onClick={() => window.open("https://docs.google.com/document/d/1Fg36MmxSr8DF7SlpS2TUN5p8ARKriwTV/edit?usp=sharing&ouid=101590571000073359774&rtpof=true&sd=true", "_blank")}>
                                {isEN ? 'Download TIG template' : 'TIG minta letöltése'}
                            </SpotlightButton>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
