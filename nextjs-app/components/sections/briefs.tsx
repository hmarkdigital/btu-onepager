'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function BriefsSection() {
    return (
        <section id="briefs" className="py-24 md:py-32 relative overflow-hidden bg-[#001322]/20 border-t border-b border-white/5">
            <div className="container px-6 md:px-8 mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-[2px] bg-primary"></div>
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">Információ</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tight">
                        Havi briefek
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="prose prose-invert prose-lg max-w-none text-gray-300"
                    >
                        <p className="mb-6">
                            Az együttműködés során <strong className="text-white">havi briefekkel</strong> dolgozunk. Minden brief tartalmaz egy <strong className="text-white">beküldési határidőt</strong>, amelyet jellemzően a PPT-ben a <strong className="text-white">jobb alsó sarokban</strong> találsz.
                        </p>

                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 mt-10">
                            <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">!</span>
                            Fontos:
                        </h3>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm mb-10">
                            <p className="m-0">
                                Ez a határidő <strong className="text-white">nem a posztolás időpontja</strong>, hanem az a dátum, <strong className="text-primary">ameddig a tartalmat el kell küldened nekünk jóváhagyásra</strong>. Ha a tartalom jóváhagyásra került, a posztolásra vonatkozó időtartamban posztold. Amennyiben a brief nem tartalmaz erre vonatkozóan iránymutatást, mikor posztolj, abban az esetben rád bízzuk a hónapon belül mikor publikálod.
                            </p>
                        </div>

                        <h4 className="text-2xl font-bold text-white mt-10 mb-6">Termékek a briefekhez</h4>
                        <p className="mb-4">
                            Előfordulhat, hogy a briefben olyan termék vagy ruházat szerepel, amit te alapból nem rendelnél meg. <strong className="text-white">Ilyen esetben</strong> ezeket <strong className="text-white">mi küldjük el neked</strong>, tehát <strong className="text-white">nem kell külön megrendelned, megvásárolnod</strong>.
                        </p>
                        <ul className="space-y-2 mb-6 text-gray-400">
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                                <span>Általános termékeknél (pl. fehérje) feltételezzük, hogy rendelkezel vele</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                                <span>Speciális termékeknél vagy egyedi ruhadaraboknál <strong className="text-white">minden esetben mi biztosítjuk a szükséges csomagot</strong></span>
                            </li>
                        </ul>

                        <p className="mb-4 font-medium text-white/90">Emiatt <strong className="text-white">kétféle csomagot</strong> kapsz <strong className="text-white">havonta</strong>:</p>
                        <ul className="space-y-2 mb-8 text-gray-400">
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                                <span>egy <strong className="text-white">briefhez kapcsolódó csomagot</strong> tőlünk</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                                <span>valamint az <strong className="text-white">általad megrendelt saját csomagot</strong></span>
                            </li>
                        </ul>

                    </motion.div>

                    {/* Right Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/3] lg:aspect-square w-full rounded-[30px] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(2,143,251,0.1)] group">
                            <Image
                                src="https://cdn.prod.website-files.com/67696bf6a7f399ccfcfd653f/699b21b34d042116ad3b6ee6_briefek%20(1).webp"
                                alt="BioTechUSA Havi Briefek"
                                fill
                                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Decorative elements */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#010204]/60 via-transparent to-transparent opacity-80" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
