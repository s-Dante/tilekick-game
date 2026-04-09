import CredentialsProvider from "next-auth/providers/credentials";
import prisma from '@/lib/prisma'
import bcrypt from "bcrypt"
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: any) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Credenciales inválidas');
                }

                const userFound = await prisma.user.findUnique({
                    where: { email: credentials.email }
                })

                if (!userFound) throw new Error('Credenciales inválidas');

                const validPassword = await bcrypt.compare(credentials.password, userFound.password);

                if (!validPassword) throw new Error('Credenciales inválidas');

                const { password: _, ...userWithoutPassword } = userFound;

                return userWithoutPassword as any;
            }
        })
    ],
    pages: {
        signIn: "/login",
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days in seconds
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.username = (user as any).username;
                token.avatar = (user as any).avatar;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                (session.user as any).id = token.id;
                (session.user as any).username = token.username;
                (session.user as any).avatar = token.avatar;
            }
            return session;
        }
    }
};
