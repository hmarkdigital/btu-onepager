
// TypeScript Interfaces

export interface Product {
    id: string;
    name: string;
    imageUrl: string;
    category: 'protein' | 'vitamin' | 'supplement' | 'snack';
    available: boolean;
}

export interface BriefStep {
    stepNumber: number;
    title: string;
    description: string;
    completed: boolean;
}

export interface Brief {
    id: string;
    month: string;
    title: string;
    deadline: Date;
    status: 'active' | 'completed';
    steps: BriefStep[];
}

export interface ContentSubmission {
    id: string;
    influencerId: string;
    briefId: string;
    uploadDate: Date;
    fileUrl: string;
    fileType: 'image' | 'video';
    status: 'pending' | 'approved' | 'rejected';
    feedback: string | null;
}

export interface ShootBooking {
    id: string;
    influencerId: string;
    date: Date;
    type: 'photo' | 'video';
    location: string;
    status: 'scheduled' | 'completed';
    notes: string | null;
}

export interface CouponPayment {
    id: string;
    influencerId: string;
    month: string;
    couponCode: string;
    usageCount: number;
    earningsPerUse: number;
    totalEarnings: number;
    status: 'paid' | 'pending';
    paidDate: Date | null;
}

export interface FAQItem {
    id: string;
    question: string;
    answer: string;
    category: 'ordering' | 'briefs' | 'content' | 'shoots' | 'payments' | 'general';
    order: number;
}

// Mock Data

export const products: Product[] = [
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
    }
];

export const briefs: Brief[] = [
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

export const contentSubmissions: ContentSubmission[] = [
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

export const shootBookings: ShootBooking[] = [
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
    }
];

export const couponPayments: CouponPayment[] = [
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

export const faqs: FAQItem[] = [
    {
        id: 'faq-1',
        question: 'Mi történik, ha elutazom egy időszakra?',
        answer: 'Semmi gond 😊 Kérjük, jelezd ezt felénk előre, és együtt megtaláljuk a legjobb megoldást. Csomagot gyakorlatilag bárhová tudunk küldeni, illetve arra a hónapra akár speciális, utazáshoz illeszkedő briefet is össze tudunk állítani.',
        category: 'general',
        order: 1
    },
    {
        id: 'faq-2',
        question: 'Mi történik, ha a csomagom nem érkezik meg a beküldési határidő előtt?',
        answer: 'Ez is teljesen rendben van. Ilyen esetekkel számolunk, kérjük, ne aggódj. Természetesen akkor küldd el a tartalmat, amikor a csomag megérkezett és tudsz vele dolgozni.',
        category: 'briefs',
        order: 2
    },
    {
        id: 'faq-3',
        question: 'Mi történik, ha nem jó a méret a csomagomban?',
        answer: 'Semmi gond, ezt is meg tudjuk oldani. Kérjük, jelezd felénk minél hamarabb, és intézzük a cserét. Fontos azonban, hogy a címkéket ne vágd le, és a terméket ne viseld, mert használt állapotban sajnos már nem tudjuk cserélni.',
        category: 'ordering',
        order: 3
    },
    {
        id: 'faq-4',
        question: 'Mi történik, ha más együttműködési lehetőséggel keresnek meg?',
        answer: 'Ez sem probléma. Minden esetben az a legjobb, ha beszélünk róla nyíltan. Szívesen segítünk olyan megoldást találni, ami számodra is és számunkra is megfelelő, és hosszú távon is jól működik.',
        category: 'general',
        order: 4
    }
];

export const campaignProducts: Product[] = products.filter(p => ['1', '2', '4', '5'].includes(p.id));

export const faqsEN: FAQItem[] = [
    {
        id: 'faq-en-1',
        question: 'What happens if I travel for a period of time?',
        answer: 'No problem at all 😊 Please just let us know in advance and we will find the best solution together. We can ship packages almost anywhere, and we can also prepare a special brief for that month that fits your travel plans.',
        category: 'general',
        order: 1
    },
    {
        id: 'faq-en-2',
        question: 'What happens if my package does not arrive before the submission deadline?',
        answer: "That is completely fine. We anticipate situations like this, so please don't worry. Simply send the content once your package arrives and you are able to work with it.",
        category: 'briefs',
        order: 2
    },
    {
        id: 'faq-en-3',
        question: 'What happens if the size in my package is not correct?',
        answer: "No problem, we can solve this as well. Please notify us as soon as possible and we will arrange the exchange. However, it is important that you do not remove the tags and do not wear the product, as unfortunately we cannot exchange items that have already been used.",
        category: 'ordering',
        order: 3
    },
    {
        id: 'faq-en-4',
        question: 'What happens if I receive another collaboration opportunity?',
        answer: 'That is not a problem either. The best approach is always to talk about it openly. We are happy to find a solution that works well for both you and us, and that can function smoothly in the long term.',
        category: 'general',
        order: 4
    }
];
