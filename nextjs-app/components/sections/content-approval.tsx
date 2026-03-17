'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SpotlightButton } from '@/components/ui/spotlight-button'
import { useLanguage } from '@/lib/language-context'

export function ContentApprovalSection() {
    const { lang } = useLanguage()
    const isEN = lang === 'en'

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
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">
                            {isEN ? 'Creation' : 'Alkotás'}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tight">
                        {isEN ? 'Content' : 'Tartalmak'}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left Column: Image */}
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
                        {isEN ? (
                            <>
                                <h3 className="text-3xl font-bold text-white mb-6">Welcome to Team BioTechUSA</h3>

                                <h4 className="text-xl font-bold text-white mt-10 mb-4">Announcement Post & BioTechUSA Tag in Your Instagram Bio</h4>
                                <p>
                                    Create <strong className="text-white">an announcement post</strong> to share that you have joined the <strong className="text-white">BioTechUSA team</strong>! It would be great if you could also share <strong className="text-white">your personal experience with the brand</strong>, and it is very important to <strong className="text-white">tag @biotechusa_de/fr/es/pl etc. in the post</strong>.
                                </p>
                                <p>
                                    Please also add the brand to your Instagram bio: <em className="text-primary font-bold">@biotechusa_de/fr/es/pl etc.</em> if you cannot find your country, do not worry, use <em className="text-primary font-bold">@biotechusa</em>
                                </p>

                                <h4 className="text-xl font-bold text-white mt-10 mb-4">Instagram Story Highlight</h4>
                                <p>
                                    <strong className="text-white">Please create an Instagram highlight for your BioTechUSA stories</strong>, where you can collect your monthly story content. Below you can download the <strong className="text-white">logo</strong> that can be used as the <strong className="text-white">Instagram highlight cover image</strong>.
                                </p>

                                <h4 className="text-xl font-bold text-white mt-10 mb-6">Content Guidelines: How to Create High-Quality and Authentic Content?</h4>
                                <p className="mb-6">Here you can find our content expectations, along with some common mistakes to avoid:</p>

                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
                                    <ul className="space-y-4 m-0 p-0 list-none">
                                        <li className="flex gap-3">
                                            <span className="text-primary">👉</span>
                                            <span><strong className="text-white">Always tag @biotechusa_de/fr/es/pl etc. in your posts.</strong></span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-primary">👉</span>
                                            <span><strong className="text-white">Most commonly used hashtags:</strong> #BioTechUSA and the current campaign hashtag, e.g. #TheFeelingOfSuccess</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-primary">👉</span>
                                            <span><strong className="text-white">Selfies:</strong> Always make sure that the logo and products are not mirrored or reversed in the image. Please use the &quot;mirror effect&quot; and flip the image if necessary.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-primary">👉</span>
                                            <span><strong className="text-white">Lighting:</strong> Try to avoid using flash, as it can make the image look too bright.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-primary">👉</span>
                                            <span><em><strong className="text-white">Video content</strong></em> performs especially well on social media, so we are happy if you create as many video-based contents as possible 😊</span>
                                        </li>
                                    </ul>
                                </div>

                                <h4 className="text-xl font-bold text-white mt-10 mb-4">Guidelines for Posts</h4>
                                <p className="italic text-gray-400">Below we have collected some great examples to show what we mean:</p>
                                <p>
                                    The <strong className="text-white">more personal the post, the better</strong>. We prefer <strong className="text-white">VIDEO content</strong>, and you are welcome to use our outro at the end of your videos, which you can easily download at the bottom of this section! 🙂
                                </p>
                                <p>
                                    <strong className="text-white">Create dynamic and active content!</strong> BioTechUSA communicates a young, energetic lifestyle that adds energy to everyday life.
                                </p>
                                <p>
                                    Always tell a personal story to your audience, while varying the locations, styles, and creative ideas that reflect your personality.
                                </p>

                                <h4 className="text-xl font-bold text-white mt-10 mb-4">Monthly Appearances</h4>
                                <p className="mb-6">
                                    <strong className="text-white">At the end of each month, please attach the links and screenshots of the posts published during that month, as well as screenshots of the stories — according to the terms in your contract.</strong>
                                </p>

                                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 mb-10 text-gray-300 italic text-sm">
                                    <strong className="text-white not-italic block mb-2">IMPORTANT:</strong> <em>Missing monthly content cannot be posted the following month. If content is missing, we will unfortunately not be able to process your product order for the next month. Please make sure that the content quantities defined in your contract are completed within the given month.</em>
                                </div>

                                <div className="border-t border-white/10 pt-10 mt-10">
                                    <h3 className="text-3xl font-bold text-white mb-6">Content Approval</h3>
                                    <p className="mb-6">
                                        Please <strong className="text-white">send every post for approval before publishing it on your social media platforms</strong>. This helps us to avoid any mistakes to contents
                                    </p>
                                    <p className="mb-4">This applies to:</p>
                                    <ul className="space-y-2 mb-4 text-gray-400">
                                        <li className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                                            <span>posts</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                                            <span>videos</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                                            <span>does not apply to stories</span>
                                        </li>
                                    </ul>
                                    <p className="text-lg mb-10">
                                        📩 Please send content for approval to: <br />
                                        <a href="mailto:sportmarketing@biotechusa.com" className="text-primary hover:underline font-bold mt-2 inline-block">sportmarketing@biotechusa.com</a>
                                    </p>

                                    <div className="inline-block">
                                        <SpotlightButton onClick={() => window.open("https://drive.google.com/drive/folders/1t2tbtgqcmlxOxczowwgNqbU1vXpuL4-r?usp=drive_link", "_blank")}>
                                            Download
                                        </SpotlightButton>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
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
                                            <span><strong className="text-white">Szelfie:</strong> ilyenkor mindig figyelj rá, hogy a logó és a termékek nehogy fordítva jelenjenek meg a képen. Kérlek használd a &quot;mirror effektet&quot;, és tükrözd a képet.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-primary">👉</span>
                                            <span><strong className="text-white">Világítás:</strong> Próbáld meg elkerülni a vaku használatát, mert ettől túl fényes lehet a kép.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-primary">👉</span>
                                            <span><em><strong className="text-white">A videós tartalmak</strong></em> előnyösek a közösségi médiában, szóval örülünk neki, ha minél több videós tartalmat készítesz nekünk 😊</span>
                                        </li>
                                    </ul>
                                </div>

                                <h4 className="text-xl font-bold text-white mt-10 mb-4">Útmutatás a posztokhoz</h4>
                                <p className="italic text-gray-400">Alább összegyűjtöttünk néhány kiemelkedő példát, hogy mire is gondolunk:</p>
                                <p>
                                    A poszt minél személyesebb, annál jobb. A VIDEÓS tartalmakat preferáljuk, aminek zárásaként nyugodtan használd outronkat, amit a bekezdés aljáról könnyedén le tudsz tölteni! 🙂
                                </p>
                                <p>
                                    <strong className="text-white">Készíts dinamikus & aktív tartalmat!</strong> A BioTechUSA azt kommunikálja, hogy a márka fiatalos, energetikus és feldobja a mindennapokat.
                                </p>
                                <p>
                                    Mindig egy személyes történetet mondj el a követőidnek, miközben variálod a helyszínt, a stílusokat, és a kreatív ötleteket, melyek tükrözik a személyiségedet.
                                </p>

                                <h4 className="text-xl font-bold text-white mt-10 mb-4">Havi megjelenések</h4>
                                <p className="mb-6">
                                    <strong className="text-white">Hónap végén kérünk csatold az adott hónapban megjelenített posztok linkjét és screenshotját, illetve a sztorik screenshotját - a szerződés szerint.</strong>
                                </p>

                                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 mb-10 text-gray-300 italic text-sm">
                                    <strong className="text-white not-italic block mb-2">FONTOS:</strong> <em>A hiányzó havi tartalmak nem tolhatók át a következő hónapra. Hiányzó tartalmak esetén nem tudjuk részedre teljesíteni a következő havi termékrendelésed. Kérünk nagyon figyelj, hogy a szerződésedben leírt tartalmi mennyiségek teljesítésre kerüljenek adott hónapban.</em>
                                </div>

                                <div className="border-t border-white/10 pt-10 mt-10">
                                    <h3 className="text-3xl font-bold text-white mb-6">Tartalmak jóváhagyása</h3>
                                    <p className="mb-6">
                                        Kérünk, hogy <strong className="text-white">minden megjelenést előzetesen küldj el jóváhagyásra</strong>, mielőtt publikálnád a közösségi oldalaidon. Ez téged is véd és minket is.
                                    </p>
                                    <p className="mb-4">Ez vonatkozik:</p>
                                    <ul className="space-y-2 mb-4 text-gray-400">
                                        <li className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                                            <span>posztokra</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                                            <span>videókra</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                                            <span>storykra nem vonatkozik</span>
                                        </li>
                                    </ul>
                                    <p className="text-lg mb-10">
                                        📩 Jóváhagyásra az alábbi e-mail címre: <br />
                                        <a href="mailto:sportmarketing@biotechusa.com" className="text-primary hover:underline font-bold mt-2 inline-block">sportmarketing@biotechusa.com</a>
                                    </p>

                                    <div className="inline-block">
                                        <SpotlightButton onClick={() => window.open("https://drive.google.com/drive/folders/1t2tbtgqcmlxOxczowwgNqbU1vXpuL4-r?usp=drive_link", "_blank")}>
                                            Letöltés
                                        </SpotlightButton>
                                    </div>
                                </div>
                            </>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
