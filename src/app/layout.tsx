import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Mooli } from 'next/font/google'
import Providers from '@/components/Providers'
import Navbar from '@/components/Header/Navbar'

const mooli = Mooli({
    subsets: ['latin'],
    weight: '400',
})

export const metadata: Metadata = {
    title: 'Gilde Quiz',
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
                className={cn(
                    mooli.className,
                    'min-h-screen pt-16 antialiased'
                )}
            >
                <Providers>
                    <Navbar />
                    {children}
                </Providers>
            </body>
        </html>
    )
}
