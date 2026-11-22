'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SpotlightButton } from '@/components/ui/spotlight-button'
import { orderingCopy } from '@/lib/copy/processes'
import { EmphasizedText } from '@/components/ui/emphasized-text'
import { useLanguage } from '@/lib/language-context'

const ORDERING_URL = 'https://orders.biotechusa.com/home'

export function OrderingSection() {
    const { lang } = useLanguage()
    const copy = orderingCopy[lang]

    return (
        <section id="ordering" className="py-24 md:py-32 relative">
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
                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="prose prose-invert prose-lg max-w-none text-gray-300"
                    >
                        <p className="mb-6 text-xl text-white font-medium">{copy.greeting}</p>
                        <p className="mb-6">{copy.intro}</p>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-sm">
                            {copy.platform}{' '}
                            <a href={ORDERING_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors underline decoration-primary/30 underline-offset-4 font-semibold">Order | BioTechUSA®</a>
                        </div>

                        <p className="mb-6">{copy.login}</p>
                        <p className="mb-6"><EmphasizedText text={copy.window} /></p>
                        <p className="mb-6 font-medium text-white/90">{copy.exception}</p>
                        <p className="mb-6">{copy.confirmation}</p>

                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 mt-10">
                            <span aria-hidden="true" className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">!</span>
                            {copy.important}
                        </h3>
                        <ul className="space-y-4 mb-8 text-gray-400">
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                                <span><EmphasizedText text={copy.singleOrder} /></span>
                            </li>
                        </ul>
                        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 mb-8 text-gray-300">
                            <EmphasizedText text={copy.warning} />
                        </div>

                        <div className="inline-block">
                            <SpotlightButton href={ORDERING_URL} target="_blank" rel="noopener noreferrer">
                                {copy.cta}
                            </SpotlightButton>
                        </div>
                    </motion.div>

                    {/* Right Column: Image */}
                    <div className="relative lg:sticky lg:top-32 h-fit">
                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="relative aspect-[3/4] md:aspect-square lg:aspect-[4/5] w-full rounded-[30px] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(2,143,251,0.1)] group">
                                <Image
                                    src="https://cdn.prod.website-files.com/67696bf6a7f399ccfcfd653f/699b21bc14bfe203a0969bc8_rendele%CC%81s%20(1).webp"
                                    alt={`BioTechUSA – ${copy.title}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#010204]/60 via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#010204]/60 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                                    <p className="text-white font-medium">
                                        {copy.caption}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
