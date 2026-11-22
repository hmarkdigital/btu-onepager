'use client'

import { createContext, useContext, useEffect, useState, useSyncExternalStore, type ReactNode } from 'react'

export const languages = [
    { code: 'hu', label: 'Magyar', flag: '🇭🇺' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
] as const

export type Lang = (typeof languages)[number]['code']

const STORAGE_KEY = 'btu-lang'

function readSavedLanguage(): Lang | null {
    try {
        const saved = localStorage.getItem(STORAGE_KEY)
        return languages.find(({ code }) => code === saved)?.code ?? null
    } catch {
        return null
    }
}

function subscribeToLanguage(onChange: () => void) {
    const handleStorage = (event: StorageEvent) => {
        if (event.key === STORAGE_KEY || event.key === null) onChange()
    }

    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
}

function getServerLanguage() {
    return 'pending' as const
}

const LanguageContext = createContext<{
    lang: Lang
    setLang: (lang: Lang) => void
    showModal: boolean
}>({
    lang: 'hu',
    setLang: () => {},
    showModal: false,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
    const saved = useSyncExternalStore(subscribeToLanguage, readSavedLanguage, getServerLanguage)
    const [selection, setSelection] = useState<Lang | null>(null)
    const lang = selection ?? (saved === 'pending' || saved === null ? 'hu' : saved)

    useEffect(() => {
        document.documentElement.lang = lang
    }, [lang])

    const setLang = (newLang: Lang) => {
        setSelection(newLang)
        try {
            localStorage.setItem(STORAGE_KEY, newLang)
        } catch {
            // Keep the selection for this visit if the browser blocks local storage.
        }
    }

    return (
        <LanguageContext.Provider value={{ lang, setLang, showModal: selection === null && saved === null }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    return useContext(LanguageContext)
}
