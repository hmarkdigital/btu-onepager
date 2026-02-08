'use client'

import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SpotlightButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    className?: string
    variant?: 'primary' | 'secondary'
}

export function SpotlightButton({ children, className, variant = 'primary', ...props }: SpotlightButtonProps) {
    const btnRef = useRef<HTMLButtonElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [opacity, setOpacity] = useState(0)

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!btnRef.current) return

        const rect = btnRef.current.getBoundingClientRect()
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }

    const handleMouseEnter = () => {
        setOpacity(1)
    }

    const handleMouseLeave = () => {
        setOpacity(0)
    }

    return (
        <button
            ref={btnRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden font-medium transition-all duration-300 rounded-2xl group",
                "bg-white/5 border border-white/10 hover:border-white/20",
                "backdrop-blur-md text-gray-300 hover:text-white uppercase tracking-widest text-sm",
                className
            )}
            {...props}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(2, 143, 251, 0.15), transparent 40%)`,
                }}
            />
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(2, 143, 251, 0.4), transparent 40%)`,
                }}
                aria-hidden="true"
            />

            {/* Beam effect from user request */}
            <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(2,143,251,0.25) 0%, rgba(2,143,251,0.10) 20%, rgba(0,0,0,0) 55%)`
                }}
            />

            <span className="relative z-10 flex items-center gap-2 font-bold font-sans tracking-widest">
                {children}
            </span>

            {/* Border Glow */}
            <div
                className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent group-hover:ring-primary/20 transition-all duration-300"
            />
        </button>
    )
}
