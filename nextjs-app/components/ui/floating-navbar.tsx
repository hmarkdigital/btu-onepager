'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

interface NavigationItem {
    name: string
    href: string
}

interface FloatingNavbarProps {
    items: NavigationItem[]
    logoText?: string
    className?: string
}

export function FloatingNavbar({ items, logoText = "BioTechUSA", className }: FloatingNavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={cn("fixed top-0 left-0 right-0 z-50 px-4 py-6 md:px-6 transition-all duration-300", className)}
            >
                <div
                    className={cn(
                        "max-w-4xl mx-auto rounded-full px-6 py-3 transition-all duration-500 border border-white/10",
                        "bg-[#010204]/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                    )}
                >
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center">
                            <a href="#" className="flex items-center gap-2 group">
                                <span className="text-lg font-black tracking-tighter text-white font-heading group-hover:text-primary transition-colors">
                                    BioTech<span className="text-primary group-hover:text-white transition-colors">USA</span>
                                </span>
                                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-primary/20 text-primary border border-primary/20 uppercase tracking-widest ml-2">
                                    Portal
                                </span>
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <ul className="hidden md:flex items-center gap-1 text-sm font-medium text-white/60">
                            {items.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="hover:text-white transition-all duration-300 px-4 py-2 rounded-full hover:bg-white/5 font-sans relative group"
                                    >
                                        {item.name}
                                        <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full group-hover:w-4 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Desktop Actions */}
                        <div className="hidden md:flex items-center gap-3">
                            <button
                                className="hover:bg-white/10 p-2.5 rounded-full transition-all duration-300 border border-white/5 bg-white/5 group"
                                aria-label="Account"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 stroke-[1.5] text-white/80 group-hover:text-white transition-colors">
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </button>
                            <button
                                className="relative hover:bg-primary p-2.5 rounded-full transition-all duration-300 border border-white/5 bg-white/5 hover:border-primary group"
                                aria-label="Notifications"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 stroke-[1.5] text-white/80 group-hover:text-white transition-colors">
                                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                                </svg>
                                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-primary rounded-full border-2 border-[#010204] group-hover:bg-white group-hover:border-primary transition-colors" />
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex md:hidden">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(true)}
                                className="p-2 text-gray-300 hover:text-white transition-colors"
                                aria-label="Toggle menu"
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-[60] bg-[#010204]/95 backdrop-blur-xl p-6 md:hidden"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <span className="text-xl font-black text-white font-heading">BioTech<span className="text-primary">USA</span></span>
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="p-2 text-gray-400 hover:text-white"
                            >
                                <X className="w-8 h-8" />
                            </button>
                        </div>
                        <nav className="flex flex-col gap-6 items-center justify-center h-[70vh]">
                            {items.map((item, i) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-3xl font-bold text-white hover:text-primary transition-colors"
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
