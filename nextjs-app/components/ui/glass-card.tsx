'use client'

import { cn } from '@/lib/utils'

interface GlassCardProps {
    children: React.ReactNode
    className?: string
    gradient?: 'blue' | 'purple' | 'none'
    hoverEffect?: boolean
}

export function GlassCard({ children, className, gradient = 'blue', hoverEffect = true }: GlassCardProps) {
    return (
        <div
            className={cn(
                "group relative overflow-hidden bg-black/40 border-white/10 border rounded-[28px] px-8 py-8 transition-all duration-500",
                hoverEffect && "hover:border-white/20 hover:shadow-[0_0_50px_-12px_rgba(2,143,251,0.3)] hover:-translate-y-1",
                className
            )}
        >
            <div
                className="absolute inset-0 pointer-events-none -z-10 transition-opacity duration-500"
                style={{
                    background: `
            radial-gradient(180px 140px at 4% 0%, rgba(2, 143, 251, 0.25), transparent 60%),
            radial-gradient(220px 160px at 100% 100%, rgba(0, 19, 34, 0.3), transparent 70%),
            linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00))
          `
                }}
            />

            {/* Hover Highlight */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}
