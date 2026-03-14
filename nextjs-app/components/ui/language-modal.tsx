'use client'

import { useLanguage } from '@/lib/language-context'
import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

function LangButton({ onClick, label, sub }: { onClick: () => void; label: string; sub: string }) {
    const btnRef = useRef<HTMLButtonElement>(null)
    const [pos, setPos] = useState({ x: 0, y: 0 })
    const [opacity, setOpacity] = useState(0)

    return (
        <button
            ref={btnRef}
            onClick={onClick}
            onMouseMove={(e) => {
                if (!btnRef.current) return
                const rect = btnRef.current.getBoundingClientRect()
                setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
            }}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            className="relative group flex flex-col items-center gap-2 px-14 py-7 rounded-2xl border border-white/10 bg-white/5 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden min-w-[170px]"
        >
            <div
                className="pointer-events-none absolute inset-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(280px circle at ${pos.x}px ${pos.y}px, rgba(2,143,251,0.18), transparent 50%)`,
                }}
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent group-hover:ring-primary/20 transition-all duration-300 pointer-events-none" />
            <span className="text-3xl font-heading font-black text-white group-hover:text-primary transition-colors duration-200 relative z-10">
                {label}
            </span>
            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.25em] relative z-10">
                {sub}
            </span>
        </button>
    )
}

export function LanguageModal() {
    const { showModal, setShowModal, setLang } = useLanguage()

    const selectLang = (lang: 'hu' | 'en') => {
        setLang(lang)
        setShowModal(false)
    }

    return (
        <AnimatePresence>
            {showModal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#010204] overflow-hidden"
                >
                    {/* Animated gradient orbs — same style as hero */}
                    <motion.div
                        className="absolute top-[-20%] left-[-10%] w-[900px] h-[900px] rounded-full blur-[120px] opacity-30 pointer-events-none mix-blend-screen"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ background: 'radial-gradient(circle, #028FFB 0%, #001322 70%, transparent 100%)' }}
                    />
                    <motion.div
                        className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full blur-[100px] opacity-25 pointer-events-none mix-blend-screen"
                        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                        style={{ background: 'radial-gradient(circle, #028FFB 0%, #001322 70%, transparent 100%)' }}
                    />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center px-6">
                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0, y: -16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.7 }}
                            className="mb-14"
                        >
                            <img
                                src="https://cdn.prod.website-files.com/67696bf6a7f399ccfcfd653f/699b0506f7979eb097acf82f_BTU_logo_white.png"
                                alt="BioTechUSA"
                                className="h-9 object-contain opacity-90"
                            />
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 32 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                            className="text-5xl sm:text-7xl font-heading font-black tracking-tighter text-white leading-[0.92] mb-5"
                        >
                            Choose your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-[#2BA3CC] animate-gradient-x">
                                language
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            className="text-gray-500 text-xs uppercase tracking-[0.3em] mb-14"
                        >
                            Válassz nyelvet
                        </motion.p>

                        {/* Language buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.65, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <LangButton onClick={() => selectLang('hu')} label="Magyar" sub="HU" />
                            <LangButton onClick={() => selectLang('en')} label="English" sub="EN" />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
