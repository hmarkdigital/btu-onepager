'use client'

import { contentSubmissions } from '@/lib/data'
import { UploadCloud, FileVideo, CheckCircle2, AlertCircle, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { GlassCard } from '@/components/ui/glass-card'
import { SpotlightButton } from '@/components/ui/spotlight-button'
import { motion } from 'framer-motion'

export function ContentApprovalSection() {
    return (
        <section id="content" className="py-32 relative overflow-hidden bg-[#001322]/20">
            <div className="container px-6 md:px-8 mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-12 gap-16">
                    {/* Left Column: Info & Upload */}
                    <div className="lg:col-span-5 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 tracking-tight">
                                Tartalmak jóváhagyása
                            </h2>
                            <p className="text-xl text-gray-400 mb-8 font-light leading-relaxed">
                                Minden megjelenést előzetesen küldj el jóváhagyásra.
                            </p>
                        </motion.div>

                        <GlassCard className="text-center cursor-pointer hover:border-primary/50 group border-dashed border-2 bg-transparent">
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 ring-1 ring-primary/20 group-hover:ring-primary/50">
                                <UploadCloud className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Tartalom feltöltése</h3>
                            <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                                Húzd ide a fájlokat vagy kattints a tallózáshoz.<br />
                                <span className="text-xs opacity-50 uppercase tracking-widest mt-2 block">MAX 50MB • JPG, PNG, MP4</span>
                            </p>
                            <SpotlightButton variant="secondary" className="w-full">
                                Fájlok kiválasztása
                            </SpotlightButton>
                        </GlassCard>

                        <div className="pl-6 border-l-2 border-white/5 space-y-4">
                            <h4 className="text-xs font-bold text-white mb-4 uppercase tracking-[0.2em] opacity-60">Szabályok</h4>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li className="flex gap-4 items-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                                    <span>Posztokra és videókra vonatkozik</span>
                                </li>
                                <li className="flex gap-4 items-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                                    <span>Storykra nem szükséges jóváhagyás</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Submissions List */}
                    <div className="lg:col-span-7">
                        <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-4">
                            Feltöltések
                            <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-white">
                                {contentSubmissions.length}
                            </span>
                        </h3>

                        <div className="space-y-4">
                            {contentSubmissions.map((submission, index) => (
                                <motion.div
                                    key={submission.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <GlassCard className="p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center group hover:bg-white/5 transition-colors">
                                        {/* Thumbnail */}
                                        <div className="w-full sm:w-24 h-32 sm:h-24 bg-[#010204] rounded-xl flex items-center justify-center flex-shrink-0 relative overflow-hidden ring-1 ring-white/10 group-hover:ring-primary/50 transition-all">
                                            {submission.fileType === 'image' ? (
                                                <img src={submission.fileUrl} alt="Submission" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-110" />
                                            ) : (
                                                <div className="relative w-full h-full">
                                                    <img src={submission.fileUrl} alt="Video thumbnail" className="w-full h-full object-cover opacity-60" />
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <FileVideo className="w-8 h-8 text-white drop-shadow-xl" />
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Info */}
                                        <div className="flex-1 min-w-0 py-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className={cn(
                                                    "px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border backdrop-blur-md",
                                                    getStatusColor(submission.status)
                                                )}>
                                                    {getStatusLabel(submission.status)}
                                                </span>
                                                <span className="text-xs text-gray-500 font-mono">
                                                    {new Intl.DateTimeFormat('hu-HU', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }).format(submission.uploadDate)}
                                                </span>
                                            </div>

                                            <h4 className="text-lg font-bold text-white mb-2 truncate group-hover:text-primary transition-colors">
                                                {submission.fileType === 'image' ? 'Instagram Poszt' : 'TikTok Videó'}
                                            </h4>

                                            <div className="text-sm">
                                                {submission.status === 'approved' && (
                                                    <p className="text-green-400 flex items-center gap-2">
                                                        <CheckCircle2 className="w-4 h-4" />
                                                        <span className="opacity-90">{submission.feedback || 'Jóváhagyva'}</span>
                                                    </p>
                                                )}
                                                {submission.status === 'rejected' && (
                                                    <p className="text-red-400 flex items-center gap-2">
                                                        <AlertCircle className="w-4 h-4" />
                                                        <span className="opacity-90">{submission.feedback || 'Javítás szükséges'}</span>
                                                    </p>
                                                )}
                                                {submission.status === 'pending' && (
                                                    <p className="text-yellow-400 flex items-center gap-2">
                                                        <Clock className="w-4 h-4" />
                                                        <span className="opacity-90">Ellenőrzésre vár</span>
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </GlassCard>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function getStatusLabel(status: string) {
    switch (status) {
        case 'approved': return 'Jóváhagyva'
        case 'rejected': return 'Elutasítva'
        case 'pending': return 'Függőben'
        default: return status
    }
}

function getStatusColor(status: string) {
    switch (status) {
        case 'approved': return 'bg-green-500/10 text-green-500 border-green-500/20 shadow-[0_0_10px_rgba(34,197,94,0.1)]'
        case 'rejected': return 'bg-red-500/10 text-red-500 border-red-500/20 shadow-[0_0_10px_rgba(239,68,68,0.1)]'
        case 'pending': return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20 shadow-[0_0_10px_rgba(234,179,8,0.1)]'
        default: return 'bg-gray-500/10 text-gray-500 border-gray-500/20'
    }
}
