'use client'

import { couponPayments as payments } from '@/lib/data'
import { TrendingUp, CreditCard, DollarSign, Calendar } from 'lucide-react'
import { GlassCard } from '@/components/ui/glass-card'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function PaymentsSection() {
    const totalEarnings = payments.reduce((sum, p) => sum + p.totalEarnings, 0)
    const pendingAmount = payments.filter(p => p.status === 'pending').reduce((sum, p) => sum + p.totalEarnings, 0)

    // Mock data for chart
    const months = ['Jan', 'Feb', 'Már', 'Ápr', 'Máj', 'Jún']
    const chartData = [65, 45, 75, 55, 85, 70] // percentages

    return (
        <section id="payments" className="py-32 relative overflow-hidden bg-[#001322]/20">
            <div className="container px-6 md:px-8 mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 tracking-tight">
                        Kifizetések & Statisztika
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
                        Kövesd nyomon a bevételeidet és a kuponkódod teljesítményét valós időben.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <GlassCard className="h-full p-8 md:p-10">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
                                <div>
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Összes bevétel</p>
                                    <h3 className="text-5xl font-heading font-black text-white tracking-tight">
                                        {totalEarnings.toLocaleString('hu-HU')} Ft
                                    </h3>
                                    <div className="flex items-center gap-2 mt-4 text-green-400 text-sm font-medium bg-green-400/10 px-3 py-1 rounded-full w-fit border border-green-400/20">
                                        <TrendingUp className="w-4 h-4" />
                                        <span>+12.5% az előző hónaphoz képest</span>
                                    </div>
                                </div>
                                <div className="text-right hidden md:block">
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Kifizetésre vár</p>
                                    <p className="text-2xl font-bold text-white">{pendingAmount.toLocaleString('hu-HU')} Ft</p>
                                </div>
                            </div>

                            {/* Chart */}
                            <div className="mt-auto">
                                <div className="flex items-end justify-between h-48 gap-4">
                                    {chartData.map((value, index) => (
                                        <div key={index} className="w-full flex flex-col gap-3 group cursor-pointer">
                                            <div className="relative w-full h-full flex items-end">
                                                <div className="w-full bg-[#00232E] rounded-t-lg h-full absolute bottom-0 opacity-50 block" />
                                                <motion.div
                                                    className="w-full bg-primary relative z-10 rounded-t-lg group-hover:bg-white transition-colors duration-300"
                                                    initial={{ height: 0 }}
                                                    whileInView={{ height: `${value}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                                                >
                                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#010204] text-white text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
                                                        {value}%
                                                    </div>
                                                </motion.div>
                                            </div>
                                            <span className="text-center text-xs font-bold text-gray-500 uppercase tracking-wider group-hover:text-white transition-colors">
                                                {months[index]}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* Payment Card & History */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <GlassCard className="p-8 relative overflow-hidden group">
                                {/* Card Visual */}
                                <div className="absolute top-0 right-0 p-32 bg-primary/20 blur-[80px] rounded-full pointer-events-none" />

                                <div className="flex justify-between items-start mb-12 relative z-10">
                                    <div className="w-12 h-8 bg-white/10 rounded ml-1" /> {/* Chip */}
                                    <span className="text-xl font-bold text-white italic tracking-widest opacity-50">VISA</span>
                                </div>

                                <div className="space-y-6 relative z-10">
                                    <div>
                                        <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Card Holder</p>
                                        <p className="text-lg font-bold text-white tracking-wider">MARK HORVATH</p>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Card Number</p>
                                            <p className="text-lg font-mono text-gray-300">•••• •••• •••• 4242</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Expires</p>
                                            <p className="text-sm font-bold text-white">12/28</p>
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <GlassCard className="p-0 overflow-hidden">
                                <div className="p-6 border-b border-white/5">
                                    <h3 className="text-lg font-bold text-white">Legutóbbi kifizetések</h3>
                                </div>
                                <div className="divide-y divide-white/5">
                                    {payments.slice(0, 3).map((payment) => (
                                        <div key={payment.id} className="p-6 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer group">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
                                                    <DollarSign className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <p className="text-white font-bold text-sm mb-0.5">{payment.month}</p>
                                                    <p className="text-xs text-gray-500">
                                                        {payment.paidDate ? new Intl.DateTimeFormat('hu-HU').format(payment.paidDate) : 'Függőben'}
                                                    </p>
                                                </div>
                                            </div>
                                            <span className={cn(
                                                "text-sm font-bold",
                                                payment.status === 'paid' ? "text-green-400" : "text-yellow-400"
                                            )}>
                                                +{payment.totalEarnings.toLocaleString('hu-HU')} Ft
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </GlassCard>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
