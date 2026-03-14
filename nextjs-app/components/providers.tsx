'use client'

import { LanguageProvider } from '@/lib/language-context'
import { LanguageModal } from '@/components/ui/language-modal'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <LanguageProvider>
            <LanguageModal />
            {children}
        </LanguageProvider>
    )
}
