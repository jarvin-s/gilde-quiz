import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import Providers from '@/components/Providers'
import Navbar from '@/components/Header/Navbar'
import { Toaster } from '@/components/ui/toaster'

const quicksand = Quicksand({
    subsets: ['latin'],
    weight: '400',
})

export const metadata: Metadata = {
    title: 'Gilde Quiz | A minimalistic quiz app',
    description: 'Quiz application built as final school project',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <body
                className={cn(quicksand.className, 'min-h-screen pt-16 antialiased')}
            >
                <Providers>
                    <Navbar />
                    {children}
                    <Toaster />
                </Providers>
            </body>
        </html>
    )
}
