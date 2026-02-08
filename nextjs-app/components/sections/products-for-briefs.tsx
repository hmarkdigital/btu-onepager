'use client'

import { products } from '@/lib/data'
import { GlassCard } from '@/components/ui/glass-card'
import Image from 'next/image'
import { Check, Info } from 'lucide-react'
import { motion } from 'framer-motion'
import { SpotlightButton } from '@/components/ui/spotlight-button'

export function ProductsForBriefsSection() {
    // Filter for specific products if needed, for now just taking first 3
    const campaignProducts = products.slice(0, 3)

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container px-6 md:px-8 mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
                >
                    <div>
                        <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-4 tracking-tight">
                            Kiválasztott termékek
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl font-light">
                            Ezekkel a termékekkel kell dolgoznod ebben a hónapban.
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-primary font-bold bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                        <Info className="w-4 h-4" />
                        <span>3 termék kötelező</span>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {campaignProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <GlassCard className="p-0 overflow-hidden h-full flex flex-col group border-primary/20">
                                <div className="relative aspect-square p-8 flex items-center justify-center bg-[#001322]/50">
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <Image
                                        src={product.imageUrl}
                                        alt={product.name}
                                        width={300}
                                        height={300}
                                        className="object-contain relative z-10 drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                                    />

                                    <div className="absolute top-4 right-4 z-20">
                                        <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                                            <Check className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 flex-grow flex flex-col items-center text-center bg-black/20">
                                    <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                                    <p className="text-sm text-gray-400 mb-6">{product.category}</p>

                                    <div className="mt-auto">
                                        <SpotlightButton className="text-xs py-2 px-6 h-auto w-full">
                                            Adatlap letöltése
                                        </SpotlightButton>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
