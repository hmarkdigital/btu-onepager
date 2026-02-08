'use client'

import { faqs as faqItems } from '@/lib/data'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { GlassCard } from '@/components/ui/glass-card'
import { Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { SpotlightButton } from '@/components/ui/spotlight-button'

export function FAQSection() {
    return (
        <section id="faq" className="py-32 relative overflow-hidden">
            <div className="container px-6 md:px-8 mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 tracking-tight">
                        Gyakori kérdések
                    </h2>
                    <p className="text-xl text-gray-400 font-light">
                        Segítünk eligazodni a legfontosabb kérdésekben.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <GlassCard className="p-8 md:p-12 backdrop-blur-xl">
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {faqItems.map((item, index) => (
                                <AccordionItem key={item.id} value={item.id} className="border-b border-white/5 last:border-0">
                                    <AccordionTrigger className="text-lg font-bold text-white hover:text-primary transition-colors py-6 text-left">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-400 leading-relaxed text-base pb-6">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </GlassCard>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-400 mb-6">Nem találtad meg a választ?</p>
                    <a href="mailto:influencer@biotechusa.com" className="inline-block">
                        <SpotlightButton>
                            <Mail className="w-4 h-4 mr-2" />
                            Írj nekünk
                        </SpotlightButton>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
