import { SessionProvider } from "next-auth/react"
import React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { ThemeProvider } from "./ThemeProvider"

type Props = {
    children: React.ReactNode;
}

const Providers = ({ children, ...props }: ThemeProviderProps) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <SessionProvider>{children}</SessionProvider>
        </ThemeProvider>
    )
}

export default Providers