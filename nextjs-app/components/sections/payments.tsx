'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { paymentsCopy } from '@/lib/copy/processes'
import { EmphasizedText } from '@/components/ui/emphasized-text'
import { useLanguage } from '@/lib/language-context'

export function PaymentsSection() {
    const { lang } = useLanguage()
    const copy = paymentsCopy[lang]

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
                            {copy.eyebrow}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tight">
                        {copy.title}
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
                                alt={`BioTechUSA – ${copy.title}`}
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
                        {copy.paragraphs.map((paragraph) => (
                            <p key={paragraph} className="mb-6"><EmphasizedText text={paragraph} /></p>
                        ))}

                        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 mt-8 text-gray-300">
                            <EmphasizedText text={copy.minimum} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
