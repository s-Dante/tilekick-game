import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from '@/lib/prisma'
import bcrypt from "bcrypt"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: any, req) {
                const { email, password } = credentials;

                const userFound = await prisma.user.findUnique({
                    where: { email }
                })

                if (!userFound) throw new Error('Credenciales invalidas');

                const validPassowrd = await bcrypt.compare(password, userFound.password);

                if (!validPassowrd) throw new Error('Credenciales invalidas');

                const { password: _, ...userWithoutPassword } = userFound;

                return userWithoutPassword;
            }
        })
    ],
    pages: {
        signIn: "/login",
    }
})

export { handler as GET, handler as POST }