'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SpotlightButton } from '@/components/ui/spotlight-button'
import { useLanguage } from '@/lib/language-context'

export function OrderingSection() {
    const { lang } = useLanguage()
    const isEN = lang === 'en'

    return (
        <section id="ordering" className="py-24 md:py-32 relative">
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
                            {isEN ? 'Process' : 'Folyamat'}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tight">
                        {isEN ? 'Ordering Interface' : 'Rendelőfelület'}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="prose prose-invert prose-lg max-w-none text-gray-300"
                    >
                        {isEN ? (
                            <>
                                <p className="mb-6">
                                    From now on, you can place your orders through our own platform, which you can activate for the first time in the month following your onboarding. We have already created your ordering profile:{' '}
                                    <a href="https://orders.biotechusa.com/home" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors underline decoration-primary/30 underline-offset-4 font-semibold">Order | BioTechUSA®</a>
                                </p>

                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-sm">
                                    <ul className="list-none m-0 p-0 space-y-3">
                                        <li className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                            <span><strong>Username:</strong> your email address</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                            </svg>
                                            <span><strong>Password:</strong> BTU1234 <span className="text-sm text-gray-400 font-normal">(you can change this at any time)</span></span>
                                        </li>
                                    </ul>
                                </div>

                                <p className="mb-6">
                                    You can place your orders through this interface. Orders must be submitted <strong className="text-white">by the 5th day of each month.</strong> This means that your March order should be placed on the platform <strong className="text-white">between March 1–5.</strong>
                                </p>

                                <p className="mb-6 font-medium text-white/90">
                                    If you agreed ordering in a different method with your contact person, please follow those instructions instead. :)
                                </p>

                                <p className="mb-8">
                                    Once you submit your order, you will automatically receive a confirmation email. Shortly afterward, you will receive another email from{' '}
                                    <a href="mailto:szamla@szamlakozpont.hu" className="text-primary hover:underline">szamla@szamlakozpont.hu</a>{' '}
                                    containing the product invoice. The total amount on this invoice will be the final value of your order, and based on this you must issue a{' '}
                                    <strong className="text-white">compensation invoice</strong>, which we kindly ask you to send to{' '}
                                    <a href="mailto:sportmarketing@biotechusa.com" className="text-primary hover:underline">sportmarketing@biotechusa.com</a>{' '}
                                    as well as to{' '}
                                    <a href="mailto:penzugycsoport@biotechusa.com" className="text-primary hover:underline">penzugycsoport@biotechusa.com</a>.{' '}
                                    It is recommended <strong className="text-white">not to wait until the end of the month</strong> with this, so our accounting colleagues can activate your ordering interface in time for the following month.
                                </p>

                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">!</span>
                                    Important:
                                </h3>

                                <ul className="space-y-4 mb-8 text-gray-400">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                                        <span>The amount on the compensation invoice must <strong className="text-white">exactly match the order total down to the last HUF.</strong> If you invoice through a company, the amount must match the total order value <strong className="text-white">including VAT</strong>, not as e.g. "200 EUR + VAT".</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                                        <span>Under the payment method, <strong className="text-white">do not select bank transfer.</strong> If your invoicing system allows it, choose <em>compensation</em> as the payment method. If not, selecting <em>other</em> is also perfectly acceptable.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                                        <span>In the <strong className="text-white">notes field</strong>, always indicate what the invoice refers to, for example: <em>&quot;February compensation&quot;.</em></span>
                                    </li>
                                </ul>

                                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 mb-8 text-gray-300">
                                    If you do not receive the product invoice via email <strong className="text-white">within 2–3 days after placing your order</strong> (and it is not in your spam folder either), please let us know. It is important that this invoice arrives, because <strong className="text-white">until we receive the corresponding compensation invoice, the system will automatically block your account</strong>, and you will not be able to place a new order.
                                </div>

                                <p className="mb-4">
                                    It may happen that on the ordering interface there are products or clothing items that appear with a <strong className="text-white">0 EUR price</strong> or are <strong className="text-white">not available at all</strong>. In such cases, unfortunately these items cannot be ordered through the platform.
                                </p>
                                <p className="mb-8">
                                    No problem! Simply subtract the value of these products from your order total, and send us an email indicating <strong className="text-white">which items you were unable to include in your order</strong>. We will add these items manually for you, and of course you will still receive them — they will just arrive <strong className="text-white">in a separate package</strong>.
                                </p>
                            </>
                        ) : (
                            <>
                                <p className="text-xl text-white font-medium mb-8">Szia!</p>

                                <p className="mb-6">
                                    Mostantól rendeléseidet saját oldalunkon keresztül tudod leadni, amit csatlakozásodat követő hónapban aktiválj először. Létrehoztuk a rendelési profilodat: <a href="https://orders.biotechusa.com/home" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors underline decoration-primary/30 underline-offset-4 font-semibold">Order | BioTechUSA®</a>
                                </p>

                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-sm">
                                    <ul className="list-none m-0 p-0 space-y-3">
                                        <li className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                            <span><strong>Felhasználónév:</strong> az email címed</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                            </svg>
                                            <span><strong>Jelszó:</strong> BTU1234 <span className="text-sm text-gray-400 font-normal">(ezt bármikor meg tudod változtatni)</span></span>
                                        </li>
                                    </ul>
                                </div>

                                <p className="mb-6">
                                    A rendeléseidet mostantól ezen a felületen tudod leadni. Mnden hónap 5. napjáig szoktuk kérni a rendeléseket. Azaz márciusi rendelésed március 1-5 között add le a felületen.
                                </p>

                                <p className="mb-6 font-medium text-white/90">
                                    Ha a kapcsolattartóddal ettől eltérő rendelési formában állapodtatok meg, kérünk azokat vedd figyelembe!:)
                                </p>

                                <p className="mb-8">
                                    Amint leadod a rendelést, automatikusan kapsz majd egy visszaigazoló emailt róla, és kicsit később a <a href="mailto:szamla@szamlakozpont.hu" className="text-primary hover:underline">szamla@szamlakozpont.hu</a> címről érkezik egy email a termékszámlával. Ennek a számlának az összege lesz a rendelésed végösszege, és erről kell kiállítanod egy kompenzációs számlát, amit kérünk küldj el a <a href="mailto:sportmarketing@biotechusa.com" className="text-primary hover:underline">sportmarketing@biotechusa.com</a>, illetve a <a href="mailto:penzugycsoport@biotechusa.com" className="text-primary hover:underline">penzugycsoport@biotechusa.com</a> címre is. Érdemes ezzel nem várni a hónap végé<strong>ig, hogy a rendelőfelületedet időben aktiválhassa a számviteli kolléga a következő hónapra.</strong>
                                </p>

                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">!</span>
                                    Fontos:
                                </h3>

                                <ul className="space-y-4 mb-8 text-gray-400">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                                        <span>A kompenzációs számla összege <strong className="text-white">forintra pontosan egyezzen</strong> a rendelt összeggel. Amennyiben cégen keresztül számlázol, az áfa értékkel együtt egyezzen meg a rendelés összértékével, ne 50.000 ft + áfaként.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                                        <span>A fizetési módnál <strong className="text-white">semmiképp ne átutalást</strong> jelölj – ha a számlázó rendszer engedi, válaszd a <em>kompenzáció</em> megnevezést, ha nem, akkor az <em>egyéb</em> is tökéletes.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                                        <span>A megjegyzés rovatba mindig írd bele, hogy miről szól a számla, pl.: <em>„február havi kompenzáció"</em>.</span>
                                    </li>
                                </ul>

                                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 mb-8 text-gray-300">
                                    Ha esetleg nem kapnád meg emailben a termékszámlát rendelésedet követően 2-3 nappal sem (spam között sem találod), kérlek jelezd – de alapvetően fontos, hogy megérkezzen, mert amíg nem kapunk róla kompenzációs számlát, a rendszer automatikusan <strong className="text-white">zárolja a fiókodat</strong>, és nem fogsz tudni új rendelést leadni.
                                </div>
                            </>
                        )}

                        <div className="inline-block">
                            <SpotlightButton onClick={() => window.open("https://orders.biotechusa.com/home", "_blank")}>
                                {isEN ? 'Go to ordering interface' : 'Irány a rendelőfelület'}
                            </SpotlightButton>
                        </div>
                    </motion.div>

                    {/* Right Column: Image */}
                    <div className="relative lg:sticky lg:top-32 h-fit">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="relative aspect-[3/4] md:aspect-square lg:aspect-[4/5] w-full rounded-[30px] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(2,143,251,0.1)] group">
                                <Image
                                    src="https://cdn.prod.website-files.com/67696bf6a7f399ccfcfd653f/699b21bc14bfe203a0969bc8_rendele%CC%81s%20(1).webp"
                                    alt="BioTechUSA Rendelés"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#010204]/60 via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#010204]/60 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                                    <p className="text-white font-medium">
                                        {isEN ? 'Place your monthly order by the 5th!' : 'Add le a havi rendelésed 5-éig!'}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
