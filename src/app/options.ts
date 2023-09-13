import type { NextAuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
          })
    ],
    session: {
        strategy: "jwt"
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
    }
}