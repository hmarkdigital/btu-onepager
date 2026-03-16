'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/lib/language-context'

export function ShootsSection() {
    const { lang } = useLanguage()
    const isEN = lang === 'en'

    return (
        <section id="shoots" className="py-24 md:py-32 relative overflow-hidden bg-[#001322]/20 border-t border-b border-white/5">
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
                            {isEN ? 'Production' : 'Produkció'}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tight">
                        {isEN ? 'Filming and Photoshoots' : 'Forgatások és fotózások'}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="prose prose-invert prose-lg max-w-none text-gray-300"
                    >
                        {isEN ? (
                            <>
                                <p className="mb-6">
                                    If you participate in <strong className="text-white">filming or photoshoots organized by BioTechUSA</strong>, you will receive the compensation specified in your contract, which we can pay against an invoice. It is important that the invoice is issued in the correct format, as we can only accept and process payments this way. <strong className="text-white">If you are not able to issue an invoice, this section does not apply to you.</strong>
                                </p>

                                <p className="mb-6">
                                    On the invoice, the <strong className="text-white">description must include the exact event and its date</strong>. For example: <em>TikTok shoot – 2026.02.13.</em> Unfortunately, we cannot accept invoices without this information. For the <strong className="text-white">payment method</strong>, please always select <strong className="text-white">bank transfer</strong>, as we cannot process other options (such as cash).
                                </p>

                                <p className="mb-6">
                                    From the date of the shoot, <strong className="text-white">you have the time period specified in your contract to submit the invoice</strong>. Our team works quickly and aims to process payments as soon as possible, however please note the deadline stated in your contract, as unfortunately we cannot initiate transfers earlier than that.
                                </p>

                                <p className="mb-6">
                                    If you participated in <strong className="text-white">multiple shoots or photoshoots within the same period</strong>, you do not need to issue a separate invoice for each event. In such cases, it is sufficient to list the dates separated by commas in the description and include them on <strong className="text-white">one single invoice</strong>.
                                </p>

                                <p className="mt-8 pt-8 border-t border-white/10">
                                    Please send the invoice <strong className="text-white">via email in PDF format</strong> to{' '}
                                    <a href="mailto:sportmarketing@biotechusa.com" className="text-primary hover:underline whitespace-nowrap">sportmarketing@biotechusa.com</a>{' '}
                                    so it can be processed quickly and efficiently.
                                </p>
                            </>
                        ) : (
                            <>
                                <p className="mb-6">
                                    A BioTechUSA-val közös forgatásokon és fotózásokon való részvétel esetén a szerződésedben rögzített díjazás illet meg, amelyet számla ellenében tudunk kifizetni. Fontos, hogy a számlázás minden esetben a megfelelő formában történjen, mert csak így tudjuk azt befogadni és a kifizetést elindítani. <strong className="text-white">Amennyiben nincs lehetőséged számlát kiállítani ez a szekció nem vonatkozik rád.</strong>
                                </p>

                                <p className="mb-6">
                                    A számlán a megnevezésnél kötelező feltüntetni a <strong className="text-white">pontos eseményt és annak dátumát</strong>. Például: <em>TikTok forgatás – 2026.02.13.</em> Enélkül sajnos nem tudjuk elfogadni a számlát. A fizetési módnál minden esetben az <strong className="text-white">átutalást</strong> szükséges kiválasztani, más opciókat (például készpénz) nem tudunk kezelni.
                                </p>

                                <p className="mb-6">
                                    A forgatástól számítva <strong className="text-white">a számla megküldésére a szerződésed szerinti időszak áll a rendelkezésedre</strong>. Csapatunk gyorsan dolgozik, és igyekszünk a kifizetéseket minél hamarabb teljesíteni, azonban kérjük, vedd figyelembe a szerződésedben szereplő határidőt, mivel annál korábban sajnos nem tudunk utalni.
                                </p>

                                <p className="mb-6">
                                    Amennyiben egy adott időszakban több forgatáson vagy fotózáson is részt vettél, <strong className="text-white">nem szükséges külön számlát kiállítanod minden alkalomra</strong>. Ilyen esetben elegendő, ha a dátumokat vesszővel elválasztva, egymás mellett tünteted fel a megnevezésben, és egy számlán szerepelteted az eseményeket.
                                </p>

                                <p className="mt-8 pt-8 border-t border-white/10">
                                    A számlát minden esetben e-mailben kérjük elküldeni pdf formátumban a <a href="mailto:sportmarketing@biotechusa.com" className="text-primary hover:underline whitespace-nowrap">sportmarketing@biotechusa.com</a> e-mail címre, hogy biztosan és gyorsan feldolgozásra kerülhessen.
                                </p>
                            </>
                        )}
                    </motion.div>

                    {/* Right Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/3] lg:aspect-square w-full rounded-[30px] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(2,143,251,0.1)] group">
                            <Image
                                src="https://cdn.prod.website-files.com/67696bf6a7f399ccfcfd653f/699b21b6ab1d6f06a7511c13_forgatasok%20(1).webp"
                                alt="BioTechUSA Forgatások és fotózások"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#010204]/60 via-transparent to-transparent opacity-80" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
