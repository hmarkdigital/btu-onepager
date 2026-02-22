'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function ShootsSection() {
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
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">Produkció</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tight">
                        Forgatások és fotózások
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
                        <p className="mb-6">
                            A BioTechUSA-val közös forgatásokon és fotózásokon való részvétel esetén a szerződésedben rögzített díjazás illet meg, amelyet számla ellenében tudunk kifizetni. Fontos, hogy a számlázás minden esetben a megfelelő formában történjen, mert csak így tudjuk azt befogadni és a kifizetést elindítani. <strong className="text-white">Amennyiben nincs lehetőséged számlát kiállítani ez a szekció nem vonatkozik rád.</strong>
                        </p>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 mt-8">
                            <h4 className="text-lg font-bold text-white mb-4">Számlázási szabályok</h4>
                            <ul className="space-y-4 m-0 p-0 list-none">
                                <li className="flex gap-3">
                                    <span className="text-primary">📝</span>
                                    <span>A számlán a megnevezésnél kötelező feltüntetni a <strong className="text-white">pontos eseményt és annak dátumát</strong>. Például: <em>TikTok forgatás – 2026.02.13.</em> Enélkül sajnos nem tudjuk elfogadni a számlát.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary">💳</span>
                                    <span>A fizetési módnál minden esetben az <strong className="text-white">átutalást</strong> szükséges kiválasztani, más opciókat (például készpénz) nem tudunk kezelni.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary">⏱️</span>
                                    <span>A forgatástól számítva <strong className="text-white">a számla megküldésére a szerződésed szerinti időszak áll a rendelkezésedre</strong>. Csapatunk gyorsan dolgozik, és igyekszünk a kifizetéseket minél hamarabb teljesíteni, azonban kérjük, vedd figyelembe a szerződésedben szereplő határidőt, mivel annál korábban sajnos nem tudunk utalni.</span>
                                </li>
                            </ul>
                        </div>

                        <p className="mb-6">
                            Amennyiben egy adott időszakban több forgatáson vagy fotózáson is részt vettél, <strong className="text-white">nem szükséges külön számlát kiállítanod minden alkalomra</strong>. Ilyen esetben elegendő, ha a dátumokat vesszővel elválasztva, egymás mellett tünteted fel a megnevezésben, és egy számlán szerepelteted az eseményeket.
                        </p>

                        <p className="mt-8 pt-8 border-t border-white/10">
                            A számlát minden esetben e-mailben kérjük elküldeni pdf formátumban, és fontos, hogy a levelezésben <strong className="text-white border-b border-primary">mindig szerepeljen címzettként</strong> a <a href="mailto:metz.zsofia@biotechusa.com" className="text-primary hover:underline whitespace-nowrap">metz.zsofia@biotechusa.com</a> és a <a href="mailto:borics.klaudia@biotechusa.com" className="text-primary hover:underline whitespace-nowrap">borics.klaudia@biotechusa.com</a> e-mail cím is, hogy biztosan és gyorsan feldolgozásra kerülhessen.
                        </p>
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
                            {/* Decorative elements */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#010204]/60 via-transparent to-transparent opacity-80" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
