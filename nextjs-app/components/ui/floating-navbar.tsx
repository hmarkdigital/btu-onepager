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
                        "max-w-6xl mx-auto rounded-full px-6 py-3 transition-all duration-500 border border-white/10",
                        "bg-[#010204]/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                    )}
                >
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center">
                            <a href="#" className="flex items-center gap-2 group">
                                <img src="https://cdn.prod.website-files.com/67696bf6a7f399ccfcfd653f/699b0506f7979eb097acf82f_BTU_logo_white.png" alt="BioTechUSA" className="h-6 object-contain" />
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <ul className="hidden lg:flex items-center gap-1 text-sm font-medium text-white/60">
                            {items.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="inline-block hover:text-white transition-all duration-300 px-4 py-2 rounded-full hover:bg-white/5 font-sans relative group"
                                    >
                                        {item.name}
                                        <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full group-hover:w-4 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Desktop Actions */}
                        <div className="hidden lg:flex items-center gap-3">
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex lg:hidden">
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
                            <img src="https://cdn.prod.website-files.com/67696bf6a7f399ccfcfd653f/699b0506f7979eb097acf82f_BTU_logo_white.png" alt="BioTechUSA" className="h-8 object-contain" />
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
