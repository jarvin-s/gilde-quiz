'use client'
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import { ThemeProvider } from './Theme/ThemeProvider'
import { Provider } from 'react-redux'
import store from '@/app/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

type Props = {
    children: React.ReactNode
}

const queryClient = new QueryClient()

const Providers = ({ children, ...props }: ThemeProviderProps) => {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='system'
                    enableSystem
                >
                    <SessionProvider>{children}</SessionProvider>
                </ThemeProvider>
            </QueryClientProvider>
        </Provider>
    )
}

export default Providers
