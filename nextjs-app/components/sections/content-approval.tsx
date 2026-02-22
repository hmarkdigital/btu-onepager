'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SpotlightButton } from '@/components/ui/spotlight-button'

export function ContentApprovalSection() {
    return (
        <section id="content" className="py-24 md:py-32 relative">
            <div className="container px-6 md:px-8 mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-[2px] bg-primary"></div>
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">Alkotás</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tight">
                        Tartalmak
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left Column: Image (swapped order on desktop) */}
                    <div className="relative lg:sticky lg:top-40 h-fit">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="relative aspect-[4/5] w-full rounded-[30px] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(2,143,251,0.1)] group">
                                <Image
                                    src="https://cdn.prod.website-files.com/67696bf6a7f399ccfcfd653f/699b21bc11f086a89298a0ed_tartalmak%20(1).webp"
                                    alt="BioTechUSA Tartalmak"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#010204]/60 via-transparent to-transparent opacity-80" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="prose prose-invert prose-lg max-w-none text-gray-300 pb-20"
                    >
                        <h3 className="text-3xl font-bold text-white mb-6">Üdvözlünk a BioTechUSA csapatában!</h3>

                        <h4 className="text-xl font-bold text-white mt-10 mb-4">Bejelentő poszt & BioTechUSA tag az Instagram bióba</h4>
                        <p>
                            Készíts <strong className="text-white">egy bejelentő posztot</strong>, miszerint csatlakoztál a BioTechUSA csapatához! Itt szuper lenne, ha megosztanád a személyes élményedet a márkával, illetve nagyon fontos, hogy a biotechusa_magyarorszag-ot is megjelöld a posztban.
                        </p>
                        <p>
                            Időközben kérlek a bióban is jelöld meg a márkát: <em className="text-primary font-bold">@biotechusa_magyarorszag</em>
                        </p>

                        <h4 className="text-xl font-bold text-white mt-10 mb-4">Instagram story highlight</h4>
                        <p>
                            <strong className="text-white">A BioTechUSA Instagram sztorijaidnak készíts egy Instagram highlightot, amelybe gyűjteni tudod a havi storykat.</strong> Lentebb töltsd le a logót, ami az Instagram highlight indexképe.
                        </p>

                        <h4 className="text-xl font-bold text-white mt-10 mb-6">Tartalmi útmutatás: Hogyan készíts minőségi és autentikus tartalmat?</h4>
                        <p className="mb-6">Itt megtalálod milyen tartalmi elvárásaink vannak, illetve összegyűjtöttünk néhány gyakori hibát is, melyeket érdemes elkerülni:</p>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
                            <ul className="space-y-4 m-0 p-0 list-none">
                                <li className="flex gap-3">
                                    <span className="text-primary">👉</span>
                                    <span><strong className="text-white">A posztokban mindig jelöld meg a @biotechusa_magyarorszag-ot.</strong></span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary">👉</span>
                                    <span><strong className="text-white">A leggyakrabban használt hashtagek:</strong> #BioTechUSA és az aktuális kampány, pl. #TheFeelingOfSuccess</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary">👉</span>
                                    <span><strong className="text-white">Szelfie:</strong> ilyenkor mindig figyelj rá, hogy a logó és a termékek nehogy fordítva jelenjenek meg a képen. Kérlek használd a "mirror effektet", és tükrözd a képet.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary">👉</span>
                                    <span><strong className="text-white">Világítás:</strong> Próbáld meg elkerülni a vaku használatát, mert ettől túl fényes lehet a kép.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary">👉</span>
                                    <span><strong className="text-white">A videós tartalmak</strong> előnyösek a közösségi médiában, szóval örülünk neki, ha minél több videós tartalmat készítesz nekünk 😊</span>
                                </li>
                            </ul>
                        </div>

                        <h4 className="text-xl font-bold text-white mt-10 mb-4">Útmutatás a posztokhoz</h4>
                        <p className="italic text-gray-400">Alább összegyűjtöttünk néhány kiemelkedő példát, hogy mire is gondolunk:</p>
                        <p>
                            A poszt minél személyesebb, annál jobb. A VIDEÓS tartalmakat preferáljuk, aminek zárásaként nyugodtan használd outronkat, amit innen könnyedén le tudsz tölteni! 🙂
                        </p>
                        <p>
                            <strong className="text-white">Készíts dinamikus & aktív tartalmat!</strong> A BioTechUSA azt kommunikálja, hogy a márka fiatalos, energetikus és feldobja a mindennapokat. Mindig egy személyes történetet mondj el a követőidnek, miközben variálod a helyszínt, a stílusokat, és a kreatív ötleteket, melyek tükrözik a személyiségedet.
                        </p>

                        <h4 className="text-xl font-bold text-white mt-10 mb-4">Havi megjelenések</h4>
                        <p>
                            <strong className="text-white">Hónap végén kérlek csatold az adott hónapban megjelenített posztok linkjét és screenshotját, illetve a sztorik screenshotját - a szerződés szerint.</strong>
                        </p>

                        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 mb-10 text-gray-300 italic text-sm">
                            <strong className="text-white not-italic block mb-2">FONTOS:</strong> A hiányzó havi tartalmak nem tolhatók át a következő hónapra. Hiányzó tartalmak esetén nem tudjuk részedre teljesíteni a következő havi termékrendelésed. Kérlek nagyon figyelj, hogy a szerződésedben leírt tartalmi mennyiségek teljesítésre kerüljenek adott hónapban.
                        </div>

                        <div className="border-t border-white/10 pt-10 mt-10">
                            <h3 className="text-3xl font-bold text-white mb-6">Tartalmak jóváhagyása</h3>
                            <p className="mb-6">
                                Kérünk, hogy <strong className="text-white">minden megjelenést előzetesen küldj el jóváhagyásra</strong>, mielőtt publikálnád a közösségi oldalaidon. Ez téged is véd és minket is.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 mb-8">
                                <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-5">
                                    <h5 className="text-white font-bold mb-3 uppercase tracking-wider text-xs">Jóváhagyás szükséges:</h5>
                                    <ul className="m-0 p-0 list-none space-y-2 text-sm">
                                        <li>✅ Posztokra</li>
                                        <li>✅ Videókra</li>
                                    </ul>
                                </div>
                                <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-5 opacity-70">
                                    <h5 className="text-white font-bold mb-3 uppercase tracking-wider text-xs">Nem szükséges:</h5>
                                    <ul className="m-0 p-0 list-none space-y-2 text-sm">
                                        <li>❌ Storykra nem vonatkozik</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="text-lg mb-10">
                                📩 Jóváhagyásra küldd kérünk az alábbi e-mail címekre: <br />
                                <a href="mailto:metz.zsofia@biotechusa.com" className="text-primary hover:underline font-bold mt-2 inline-block">metz.zsofia@biotechusa.com</a> és <a href="mailto:borics.klaudia@biotechusa.com" className="text-primary hover:underline font-bold mt-2 ml-1 inline-block">borics.klaudia@biotechusa.com</a>
                            </p>

                            <div className="inline-block">
                                <SpotlightButton onClick={() => window.open("https://drive.google.com/drive/folders/1t2tbtgqcmlxOxczowwgNqbU1vXpuL4-r?usp=drive_link", "_blank")}>
                                    Letöltés
                                </SpotlightButton>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
