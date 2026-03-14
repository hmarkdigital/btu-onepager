'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Lang = 'hu' | 'en'

interface LanguageContextType {
    lang: Lang
    setLang: (lang: Lang) => void
    showModal: boolean
    setShowModal: (show: boolean) => void
}

const LanguageContext = createContext<LanguageContextType>({
    lang: 'hu',
    setLang: () => {},
    showModal: false,
    setShowModal: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Lang>('hu')
    const [showModal, setShowModal] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const saved = localStorage.getItem('btu-lang') as Lang | null
        if (saved === 'hu' || saved === 'en') {
            setLangState(saved)
        } else {
            setShowModal(true)
        }
    }, [])

    const setLang = (newLang: Lang) => {
        setLangState(newLang)
        localStorage.setItem('btu-lang', newLang)
    }

    if (!mounted) return <>{children}</>

    return (
        <LanguageContext.Provider value={{ lang, setLang, showModal, setShowModal }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    return useContext(LanguageContext)
}
