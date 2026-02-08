'use client'

import { products } from '@/lib/data'
import { GlassCard } from '@/components/ui/glass-card'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SpotlightButton } from '@/components/ui/spotlight-button'

export function OrderingSection() {
    return (
        <section id="ordering" className="py-32 relative overflow-hidden">
            <div className="container px-6 md:px-8 mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 tracking-tight">
                        Rendelőfelület
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        Válassz a termékek közül és rendeld meg egyszerűen.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <GlassCard className="h-full flex flex-col p-0 overflow-hidden group">
                                <div className="aspect-[4/3] relative overflow-hidden m-2 rounded-[20px]">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#00232E] to-transparent z-10 opacity-60" />
                                    <Image
                                        src={product.imageUrl}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 z-20">
                                        <span className="px-3 py-1 bg-[#010204]/60 backdrop-blur-md text-xs font-bold text-white rounded-full border border-white/10 uppercase tracking-wider">
                                            {getCategoryLabel(product.category)}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-gray-400 mb-8 line-clamp-2 leading-relaxed">
                                        Prémium minőségű {getCategoryLabel(product.category).toLowerCase()} a BioTechUSA kínálatából.
                                    </p>
                                    <div className="mt-auto">
                                        <button
                                            onClick={() => alert('Ez egy demo gomb.')}
                                            className="w-full py-4 rounded-xl text-sm font-bold uppercase tracking-widest transition-all duration-300 border border-white/10 hover:bg-white/5 hover:border-primary/30 hover:text-white text-gray-300"
                                        >
                                            Kiválasztás
                                        </button>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <a href="https://orders.biotechusa.com/home" target="_blank" rel="noopener noreferrer">
                        <SpotlightButton>
                            Tovább a teljes kínálathoz
                        </SpotlightButton>
                    </a>
                </div>
            </div>
        </section>
    )
}

function getCategoryLabel(category: string) {
    const labels: Record<string, string> = {
        'protein': 'Fehérje',
        'vitamin': 'Vitamin',
        'supplement': 'Kiegészítő',
        'snack': 'Snack'
    }
    return labels[category] || category
}
