'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { GlassCard } from '@/components/ui/glass-card'
import { useLanguage } from '@/lib/language-context'

const NAV_CARDS = [
    {
        id: 'ordering',
        image: 'https://cdn.prod.website-files.com/67696bf6a7f399ccfcfd653f/699b21bc14bfe203a0969bc8_rendele%CC%81s%20(1).webp',
        imagePosition: 'object-[center_15%]'
    },
    {
        id: 'briefs',
        image: 'https://cdn.prod.website-files.com/67696bf6a7f399ccfcfd653f/699b21b34d042116ad3b6ee6_briefek%20(1).webp',
        imagePosition: 'object-[center_15%]'
    },
    {
        id: 'content',
        image: 'https://cdn.prod.website-files.com/67696bf6a7f399ccfcfd653f/699b21bc11f086a89298a0ed_tartalmak%20(1).webp',
        imagePosition: 'object-[center_25%]'
    },
    {
        id: 'shoots',
        image: 'https://cdn.prod.website-files.com/67696bf6a7f399ccfcfd653f/699b21b6ab1d6f06a7511c13_forgatasok%20(1).webp',
        imagePosition: 'object-[center_25%]'
    },
    {
        id: 'payments',
        image: 'https://cdn.prod.website-files.com/67696bf6a7f399ccfcfd653f/699b21bdb85cbedda8b60a95_kifizetesek%20(1).webp',
        imagePosition: 'object-[center_15%]'
    }
] as const

const CARD_COPY = {
    hu: {
        ordering: { title: 'Rendelőfelület', description: 'Itt minden infót megtalálsz a havi rendeléseddel kapcsolatosan.' },
        briefs: { title: 'Briefek', description: 'Havi briefekkel dolgozunk, amikhez az instrukciókat egy kattintással eléred' },
        content: { title: 'Tartalmak', description: 'Tartalmaidhoz minden segédletet innen érsz el' },
        shoots: { title: 'Forgatások', description: 'Forgatásainkról és fotózásainkról innen tájékozódhatsz bővebben' },
        payments: { title: 'Kifizetések', description: 'Együttműködésünk pénzügyi részleteit éred el' },
    },
    en: {
        ordering: { title: 'Ordering', description: "Here you'll find all the information about your monthly order." },
        briefs: { title: 'Briefs', description: 'We work with monthly briefs – access the instructions with one click' },
        content: { title: 'Content', description: 'Access all resources for your content here' },
        shoots: { title: 'Production', description: 'Learn more about our photoshoots here' },
        payments: { title: 'Payments', description: 'Access the financial details of our collaboration' },
    },
    fr: {
        ordering: { title: 'Commandes', description: 'Tout ce qu’il faut savoir sur ta commande mensuelle.' },
        briefs: { title: 'Briefs', description: 'On fonctionne avec des briefs mensuels : retrouve les instructions en un clic.' },
        content: { title: 'Contenus', description: 'Toutes les ressources pour créer tes contenus.' },
        shoots: { title: 'Tournages', description: 'Tout savoir sur nos tournages et nos shootings photo.' },
        payments: { title: 'Paiements', description: 'Les détails financiers de notre collaboration.' },
    },
    es: {
        ordering: { title: 'Pedidos', description: 'Aquí encontrarás toda la información sobre tu pedido mensual.' },
        briefs: { title: 'Briefs', description: 'Trabajamos con briefs mensuales; accede a las instrucciones con un solo clic.' },
        content: { title: 'Contenido', description: 'Accede aquí a todos los recursos para tu contenido.' },
        shoots: { title: 'Producción', description: 'Obtén más información sobre nuestras sesiones de fotos aquí.' },
        payments: { title: 'Pagos', description: 'Accede a los detalles financieros de nuestra colaboración.' },
    },
}

export function NavigationCardsSection() {
    const { lang } = useLanguage()
    const cards = NAV_CARDS.map((card) => ({ ...card, ...CARD_COPY[lang][card.id] }))

    return (
        <section className="py-24 relative overflow-hidden z-10">
            <div className="container px-6 md:px-8 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <motion.a
                            key={card.id}
                            href={`#${card.id}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group block h-full"
                        >
                            <GlassCard className="h-full p-0 overflow-hidden flex flex-col transition-all duration-500 hover:shadow-[0_0_40px_rgba(2,143,251,0.2)] hover:-translate-y-2 border border-white/5 hover:border-primary/50">
                                <div className="relative aspect-video w-full overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#010204]/90 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-60" />
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        className={`object-cover ${card.imagePosition} transition-transform duration-700 group-hover:scale-110`}
                                    />
                                    <div className="absolute bottom-4 left-6 z-20">
                                        <h3 className="text-2xl font-black font-heading text-white">{card.title}</h3>
                                    </div>
                                    <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-4 group-hover:translate-x-0">
                                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white backdrop-blur-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                <polyline points="12 5 19 12 12 19"></polyline>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 flex-grow flex items-start bg-[#010204]/40">
                                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                        {card.description}
                                    </p>
                                </div>
                            </GlassCard>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}
