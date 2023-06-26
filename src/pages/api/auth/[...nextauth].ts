import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    pages: {
        signIn: "/auth/sign-in",
        signOut: "/",
        error: "/404",
        verifyRequest: "/",
        newUser: "/auth/sign-up",
    },
    callbacks: {
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${process.env.NEXTAUTH_URL}`;
            // Allows callback URLs on the same origin
            // else if (new URL(url).origin === baseUrl) return url;
            return baseUrl;
        },
    },
};

export default NextAuth(authOptions);
