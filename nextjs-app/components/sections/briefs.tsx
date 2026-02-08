'use client'

import { briefs } from '@/lib/data'
import { cn } from '@/lib/utils'
import { CheckCircle2 } from 'lucide-react'
import { GlassCard } from '@/components/ui/glass-card'
import { motion } from 'framer-motion'

export function BriefsSection() {
    const currentBrief = briefs[0]

    return (
        <section id="briefs" className="py-32 relative overflow-hidden bg-[#001322]/20">
            <div className="container px-6 md:px-8 mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-8 tracking-tight">
                            Havi briefek
                        </h2>
                        <p className="text-xl text-gray-400 mb-12 font-light leading-relaxed">
                            Minden hónap elején kapsz egy új briefet a havi feladatokkal. Kövesd a lépéseket a sikeres teljesítéshez.
                        </p>

                        <GlassCard className="p-10 border-primary/20 bg-primary/5">
                            <div className="flex justify-between items-start mb-10">
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2">{currentBrief.title}</h3>
                                    <p className="text-primary font-bold tracking-wider text-sm uppercase">
                                        Határidő: {new Intl.DateTimeFormat('hu-HU', { year: 'numeric', month: 'long', day: 'numeric' }).format(currentBrief.deadline)}
                                    </p>
                                </div>
                                <div className="relative">
                                    <span className="relative z-10 px-4 py-1.5 bg-primary/20 text-white text-xs font-bold rounded-full border border-primary/30 uppercase tracking-widest shadow-[0_0_15px_rgba(2,143,251,0.3)]">
                                        Aktív
                                    </span>
                                    <div className="absolute inset-0 bg-primary blur-xl opacity-20" />
                                </div>
                            </div>

                            <div className="space-y-8 relative">
                                {/* Connecting Line */}
                                <div className="absolute left-[11px] top-2 bottom-4 w-0.5 bg-white/10" />

                                {currentBrief.steps.map((step, index) => (
                                    <div key={index} className="flex gap-6 group relative z-10">
                                        <div className="flex-shrink-0">
                                            {step.completed ? (
                                                <CheckCircle2 className="w-6 h-6 text-primary" />
                                            ) : (
                                                <div className="w-6 h-6 rounded-full border border-gray-600 bg-[#00232E] flex items-center justify-center text-[10px] font-bold text-gray-400 group-hover:border-primary group-hover:text-primary transition-colors shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                                                    {step.stepNumber}
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <h4 className={cn("text-lg font-bold mb-2 transition-colors", step.completed ? "text-primary" : "text-white group-hover:text-primary")}>
                                                {step.title}
                                            </h4>
                                            <p className="text-sm text-gray-400 leading-relaxed font-light">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </motion.div>

                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="absolute -inset-10 bg-primary/20 blur-[100px] rounded-full opacity-30 animate-pulse" />

                        <GlassCard className="p-12 relative overflow-hidden backdrop-blur-xl">
                            <h3 className="text-2xl font-bold text-white mb-8">Fontos tudnivalók</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4 text-gray-300">
                                    <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0 shadow-[0_0_10px_rgba(2,143,251,0.5)]" />
                                    <span className="leading-relaxed">A határidő a tartalom <strong>beküldésére</strong> vonatkozik, nem a posztolásra.</span>
                                </li>
                                <li className="flex gap-4 text-gray-300">
                                    <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0 shadow-[0_0_10px_rgba(2,143,251,0.5)]" />
                                    <span className="leading-relaxed">Jóváhagyás után a hónapon belül bármikor posztolhatsz.</span>
                                </li>
                                <li className="flex gap-4 text-gray-300">
                                    <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0 shadow-[0_0_10px_rgba(2,143,251,0.5)]" />
                                    <span className="leading-relaxed">Posztoláskor használd a megadott hashtageket és jelöld meg a márkát.</span>
                                </li>
                            </ul>

                            <div className="mt-12 pt-10 border-t border-white/10">
                                <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm opacity-80">Havi csomagok</h4>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5 text-center hover:bg-white/10 transition-colors cursor-pointer">
                                        <span className="block text-3xl mb-3">📦</span>
                                        <span className="text-sm font-bold text-white block uppercase tracking-wide">Brief csomag</span>
                                        <span className="text-xs text-gray-500 mt-1 block">Tőlünk kapod</span>
                                    </div>
                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5 text-center hover:bg-white/10 transition-colors cursor-pointer">
                                        <span className="block text-3xl mb-3">🛒</span>
                                        <span className="text-sm font-bold text-white block uppercase tracking-wide">Saját rendelés</span>
                                        <span className="text-xs text-gray-500 mt-1 block">Te rendeled</span>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
