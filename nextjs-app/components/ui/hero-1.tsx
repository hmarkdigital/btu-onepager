'use client'

import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'
import { FloatingNavbar } from './floating-navbar'
import { SpotlightButton } from './spotlight-button'

interface HeroLandingProps {
    title: string
    description: string
    gradientColors?: {
        from: string
        to: string
    }
}

export function HeroLanding({
    title,
    description,
    gradientColors = { from: "#001322", to: "#33C5F3" }
}: HeroLandingProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollY } = useScroll()

    const y1 = useTransform(scrollY, [0, 500], [0, 200])
    const y2 = useTransform(scrollY, [0, 500], [0, -150])
    const textY = useTransform(scrollY, [0, 300], [0, 100])
    const opacity = useTransform(scrollY, [0, 300], [1, 0])

    const navItems = [
        { name: 'Kezdőlap', href: '#hero' },
        { name: 'Rendelés', href: '#ordering' },
        { name: 'Briefek', href: '#briefs' },
        { name: 'Tartalmak', href: '#content' },
        { name: 'Forgatások', href: '#shoots' },
        { name: 'Kifizetések', href: '#payments' },
        { name: 'GYIK', href: '#faq' },
    ]

    return (
        <div ref={containerRef} id="hero" className="min-h-[110vh] w-full relative overflow-hidden bg-[#00151C]">
            <FloatingNavbar items={navItems} />

            {/* Animated Gradient Backgrounds */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] rounded-full blur-[120px] opacity-40 mix-blend-screen pointer-events-none"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <div style={{ background: `radial-gradient(circle, ${gradientColors.to} 0%, ${gradientColors.from} 70%, transparent 100%)`, width: '100%', height: '100%' }} />
            </motion.div>

            <motion.div
                style={{ y: y2 }}
                className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] rounded-full blur-[100px] opacity-30 mix-blend-screen pointer-events-none"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            >
                <div style={{ background: `radial-gradient(circle, ${gradientColors.to} 0%, ${gradientColors.from} 70%, transparent 100%)`, width: '100%', height: '100%' }} />
            </motion.div>

            {/* Hero Content */}
            <div className="relative z-10 container px-6 pt-32 mx-auto h-screen flex flex-col justify-center items-center text-center">
                <motion.div style={{ y: textY, opacity }}>

                    {/* Announcement Pill */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="mb-8 flex justify-center"
                    >
                        <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-primary/50 hover:text-white hover:bg-white/5 transition-all duration-300 backdrop-blur-md cursor-pointer group">
                            <span className="font-semibold text-primary group-hover:text-white transition-colors">Újdonság</span>
                            <span className="mx-2 text-gray-600">|</span>
                            Február havi brief elérhető <span className="ml-1 group-hover:translate-x-1 inline-block transition-transform">→</span>
                        </div>
                    </motion.div>

                    {/* Main Title with Staggered Character Animation */}
                    <motion.h1
                        className="text-4xl sm:text-6xl md:text-8xl font-heading font-black tracking-tighter text-white mb-8 leading-[0.9]"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Üdvözlünk a <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-[#2BA3CC] animate-gradient-x">
                            BioTechUSA
                        </span> <br />
                        csapatában!
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="mt-6 text-lg md:text-xl leading-8 text-gray-400 max-w-2xl mx-auto font-light"
                    >
                        {description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <a href="#ordering">
                            <SpotlightButton className="w-full sm:w-auto min-w-[200px]">
                                Kezdjük el
                            </SpotlightButton>
                        </a>
                        <a
                            href="#briefs"
                            className="text-sm font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-widest px-6 py-3"
                        >
                            Tudj meg többet
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Görgess le</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-primary/0 via-primary to-primary/0 overflow-hidden">
                    <motion.div
                        className="w-full h-1/2 bg-primary"
                        animate={{ y: [-20, 40] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            </motion.div>
        </div>
    )
}
