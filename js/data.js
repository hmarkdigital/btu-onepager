// Mock Data for BioTechUSA Influencer Onboarding

// Products
const products = [
    {
        id: '1',
        name: 'Iso Whey Zero',
        imageUrl: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=300&fit=crop',
        category: 'protein',
        available: true
    },
    {
        id: '2',
        name: 'Brutal Anadrol',
        imageUrl: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?w=400&h=300&fit=crop',
        category: 'supplement',
        available: true
    },
    {
        id: '3',
        name: 'BCAA Zero',
        imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400&h=300&fit=crop',
        category: 'supplement',
        available: true
    },
    {
        id: '4',
        name: 'Protein Bar',
        imageUrl: 'https://images.unsplash.com/photo-1604480132736-44c188fe4d20?w=400&h=300&fit=crop',
        category: 'snack',
        available: true
    },
    {
        id: '5',
        name: 'Multivitamin',
        imageUrl: 'https://images.unsplash.com/photo-1550572017-4e6c5b0c9f2f?w=400&h=300&fit=crop',
        category: 'vitamin',
        available: true
    },
    {
        id: '6',
        name: 'Creatine Monohydrate',
        imageUrl: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?w=400&h=300&fit=crop',
        category: 'supplement',
        available: true
    },
    {
        id: '7',
        name: 'Pre-Workout',
        imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400&h=300&fit=crop',
        category: 'supplement',
        available: true
    },
    {
        id: '8',
        name: 'Protein Chips',
        imageUrl: 'https://images.unsplash.com/photo-1604480132736-44c188fe4d20?w=400&h=300&fit=crop',
        category: 'snack',
        available: true
    },
    {
        id: '9',
        name: 'Omega-3',
        imageUrl: 'https://images.unsplash.com/photo-1550572017-4e6c5b0c9f2f?w=400&h=300&fit=crop',
        category: 'vitamin',
        available: true
    }
];

// Briefs
const briefs = [
    {
        id: 'brief-2026-02',
        month: '2026-02',
        title: 'Február havi brief',
        deadline: new Date('2026-02-28'),
        status: 'active',
        steps: [
            {
                stepNumber: 1,
                title: 'Termékek kiválasztása',
                description: 'Válaszd ki a havi kampányhoz szükséges termékeket a rendelőfelületen.',
                completed: false
            },
            {
                stepNumber: 2,
                title: 'Tartalom tervezése',
                description: 'Készítsd el a tartalmi tervet a kiválasztott termékekhez.',
                completed: false
            },
            {
                stepNumber: 3,
                title: 'Tartalom készítése',
                description: 'Készítsd el a fotókat és videókat a megbeszélt koncepció alapján.',
                completed: false
            },
            {
                stepNumber: 4,
                title: 'Jóváhagyás kérése',
                description: 'Töltsd fel a tartalmakat jóváhagyásra a platformon.',
                completed: false
            },
            {
                stepNumber: 5,
                title: 'Publikálás',
                description: 'A jóváhagyott tartalmak publikálása a közösségi média csatornáidon.',
                completed: false
            }
        ]
    }
];

// Content Submissions
const contentSubmissions = [
    {
        id: 'sub-1',
        influencerId: 'inf-1',
        briefId: 'brief-2026-02',
        uploadDate: new Date('2026-02-05'),
        fileUrl: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=300&fit=crop',
        fileType: 'image',
        status: 'approved',
        feedback: 'Kiváló munka! Jóváhagyva.'
    },
    {
        id: 'sub-2',
        influencerId: 'inf-1',
        briefId: 'brief-2026-02',
        uploadDate: new Date('2026-02-06'),
        fileUrl: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?w=400&h=300&fit=crop',
        fileType: 'video',
        status: 'pending',
        feedback: null
    },
    {
        id: 'sub-3',
        influencerId: 'inf-1',
        briefId: 'brief-2026-02',
        uploadDate: new Date('2026-02-07'),
        fileUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400&h=300&fit=crop',
        fileType: 'image',
        status: 'pending',
        feedback: null
    }
];

// Shoot Bookings
const shootBookings = [
    {
        id: 'shoot-1',
        influencerId: 'inf-1',
        date: new Date('2026-02-15'),
        type: 'photo',
        location: 'BioTechUSA Stúdió, Budapest',
        status: 'scheduled',
        notes: 'Hozz magaddal sportfelszerelést'
    },
    {
        id: 'shoot-2',
        influencerId: 'inf-1',
        date: new Date('2026-02-22'),
        type: 'video',
        location: 'Outdoor lokáció, Margitsziget',
        status: 'scheduled',
        notes: 'Időjárástól függően'
    },
    {
        id: 'shoot-3',
        influencerId: 'inf-1',
        date: new Date('2026-01-20'),
        type: 'photo',
        location: 'BioTechUSA Stúdió, Budapest',
        status: 'completed',
        notes: null
    }
];

// Coupon Payments
const couponPayments = [
    {
        id: 'pay-1',
        influencerId: 'inf-1',
        month: '2026-01',
        couponCode: 'BIOTECH2026',
        usageCount: 47,
        earningsPerUse: 500,
        totalEarnings: 23500,
        status: 'paid',
        paidDate: new Date('2026-02-01')
    },
    {
        id: 'pay-2',
        influencerId: 'inf-1',
        month: '2026-02',
        couponCode: 'BIOTECH2026',
        usageCount: 32,
        earningsPerUse: 500,
        totalEarnings: 16000,
        status: 'pending',
        paidDate: null
    }
];

// FAQ Items
const faqs = [
    {
        id: 'faq-1',
        question: 'Hogyan rendelhetem meg a termékeket?',
        answer: 'A Rendelőfelület menüpontban találod az összes elérhető terméket. Válaszd ki a kívánt termékeket és kattints a "Rendelés" gombra. A termékeket ingyenesen kapod meg.',
        category: 'ordering',
        order: 1
    },
    {
        id: 'faq-2',
        question: 'Milyen gyakran kapok új briefeket?',
        answer: 'Minden hónap elején kapsz egy új briefet a havi feladatokkal. A briefek tartalmazzák a kampány céljait, a szükséges tartalmakat és a határidőket.',
        category: 'briefs',
        order: 2
    },
    {
        id: 'faq-3',
        question: 'Mennyi idő alatt hagyják jóvá a tartalmaimat?',
        answer: 'A feltöltött tartalmakat általában 2-3 munkanapon belül elbíráljuk. Azonnal értesítést kapsz, ha a tartalom jóváhagyásra került vagy módosításra szorul.',
        category: 'content',
        order: 3
    },
    {
        id: 'faq-4',
        question: 'Hogyan foglalhatok időpontot forgatásra?',
        answer: 'A Forgatások menüpontban láthatod az elérhető időpontokat. Válaszd ki a számodra megfelelő dátumot és helyszínt, majd erősítsd meg a foglalást.',
        category: 'shoots',
        order: 4
    },
    {
        id: 'faq-5',
        question: 'Mikor kapom meg a kuponkódos bevételeimet?',
        answer: 'A kuponkódos bevételeket minden hónap első hetében számoljuk el és utaljuk át. A Kifizetések menüpontban nyomon követheted az aktuális bevételeidet.',
        category: 'payments',
        order: 5
    },
    {
        id: 'faq-6',
        question: 'Milyen formátumban töltsem fel a tartalmakat?',
        answer: 'Képek esetén JPG vagy PNG formátumot, videók esetén MP4 formátumot fogadunk el. A maximális fájlméret 50 MB lehet.',
        category: 'content',
        order: 6
    },
    {
        id: 'faq-7',
        question: 'Mit tegyek, ha nem kapok értesítést?',
        answer: 'Ellenőrizd a spam mappádat, és add hozzá az info@biotechusa.hu email címet a biztonságos feladók listájához. Ha továbbra sem kapsz értesítést, írj nekünk.',
        category: 'general',
        order: 7
    },
    {
        id: 'faq-8',
        question: 'Kivel vehetek fel a kapcsolatot, ha kérdésem van?',
        answer: 'Bármilyen kérdés esetén írj nekünk az info@biotechusa.hu email címre, vagy hívj minket a +36 1 234 5678 telefonszámon munkanapokon 9-17 óra között.',
        category: 'general',
        order: 8
    }
];

// Campaign Products (subset of products for current brief)
const campaignProducts = products.filter(p => ['1', '2', '4', '5'].includes(p.id));
