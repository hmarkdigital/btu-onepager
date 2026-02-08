'use client'

import { shootBookings as bookings } from '@/lib/data'
import { Calendar, MapPin, Clock, Video, Camera, Plus, Download } from 'lucide-react'
import { cn } from '@/lib/utils'
import { GlassCard } from '@/components/ui/glass-card'
import { SpotlightButton } from '@/components/ui/spotlight-button'
import { motion } from 'framer-motion'

export function ShootsSection() {
    return (
        <section id="shoots" className="py-32 relative overflow-hidden">
            <div className="container px-6 md:px-8 mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                >
                    <div>
                        <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 tracking-tight">
                            Forgatások
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
                            Következő időpontok és helyszínek. Itt találod a visszaigazolt forgatásokat.
                        </p>
                    </div>
                    <SpotlightButton>
                        <Plus className="w-5 h-5 mr-2" />
                        Új foglalás
                    </SpotlightButton>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {bookings.map((booking, index) => (
                        <motion.div
                            key={booking.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <GlassCard className="h-full flex flex-col group hover:bg-white/5 transition-colors">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={cn(
                                        "w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 shadow-lg",
                                        booking.type === 'video'
                                            ? "bg-blue-500/10 text-blue-500 border-blue-500/20 shadow-blue-500/10"
                                            : "bg-purple-500/10 text-purple-500 border-purple-500/20 shadow-purple-500/10"
                                    )}>
                                        {booking.type === 'video' ? (
                                            <Video className="w-6 h-6" />
                                        ) : (
                                            <Camera className="w-6 h-6" />
                                        )}
                                    </div>
                                    <span className={cn(
                                        "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border",
                                        booking.status === 'scheduled'
                                            ? "bg-green-500/10 text-green-500 border-green-500/20"
                                            : "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                                    )}>
                                        {booking.status === 'scheduled' ? 'Visszaigazolva' : 'Egyeztetés alatt'}
                                    </span>
                                </div>

                                <div className="mb-8">
                                    <div className="flex items-center gap-2 text-gray-400 mb-2 text-sm font-medium uppercase tracking-wide">
                                        <Calendar className="w-4 h-4" />
                                        {new Intl.DateTimeFormat('hu-HU', { month: 'long', day: 'numeric' }).format(booking.date)}
                                    </div>
                                    <div className="text-2xl font-bold text-white mb-6">
                                        {new Intl.DateTimeFormat('hu-HU', { hour: '2-digit', minute: '2-digit' }).format(booking.date)}
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="w-5 h-5 text-gray-500 mt-0.5" />
                                            <span className="text-gray-300">{booking.location}</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Clock className="w-5 h-5 text-gray-500 mt-0.5" />
                                            <span className="text-gray-300">4 óra</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-auto pt-6 border-t border-white/5">
                                    <button className="text-sm font-bold text-gray-400 hover:text-white transition-colors flex items-center gap-2 group/btn">
                                        Részletek
                                        <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                                    </button>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}

                    {/* New Booking Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: bookings.length * 0.1 }}
                    >
                        <div className="h-full rounded-[28px] border-2 border-dashed border-white/10 flex flex-col items-center justify-center p-8 text-center hover:border-primary/50 hover:bg-white/5 transition-all cursor-pointer group">
                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                                <Plus className="w-8 h-8 text-gray-400 group-hover:text-primary transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Időpont foglalása</h3>
                            <p className="text-gray-400 text-sm max-w-[200px]">
                                Válassz szabad időpontjaink közül a következő forgatásra
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Invoice Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >
                    <GlassCard className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-primary/10 to-transparent">
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary shrink-0 border border-primary/20">
                                <Download className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Számlázási információk</h3>
                                <div className="text-gray-400 space-y-1 text-sm">
                                    <p>BioTechUSA Kft.</p>
                                    <p>1033 Budapest, Huszti út 60.</p>
                                    <p>Adószám: 12345678-2-41</p>
                                </div>
                            </div>
                        </div>
                        <button className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold text-sm uppercase tracking-wider transition-all">
                            Adatok másolása
                        </button>
                    </GlassCard>
                </motion.div>
            </div>
        </section>
    )
}
