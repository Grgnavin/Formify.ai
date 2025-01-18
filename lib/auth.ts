import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";
import prisma from "./Prisma";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";

export const authOptions = {
    providers: [
    CredentialsProvider({
        name: 'Credentials',
        credentials: {
            username: { label: "Username", type: "text", placeholder: "Enter your name", required: true },
            email: { label: "Email", type: "text", placeholder: "Enter your email", required: true },
            password: { label: "Password", type: "password", required: true }
        },
        async authorize(credentials) {
            if (!credentials?.email || !credentials?.password || !credentials?.username) {
                throw new Error("Credentials are required");
            }
            const { email, password, username } = credentials;
            const existingUser = await prisma.user.findFirst({
                where: { email }
            });
            //check if the user exists
            if (existingUser) {
                const passwordValidation = await bcrypt.compare(password, existingUser.password);
                if (!passwordValidation) {
                    throw new Error("Invalid email or password")
                }
                return {
                    id: existingUser.id.toString(),
                    email: existingUser.email,
                    username: existingUser.username
                }
            }

            try {
                //if no user exixts create one
                const hashedPassword = await bcrypt.hash(password, 10);
                const user = await prisma.user.create({
                    data: {
                        email,
                        username,
                        password: hashedPassword
                    }
                });
            
                return {
                    id: user.id.toString(),
                    username: user.username,
                    email: user.email
                }
            } catch(e) {
                console.error(e);
            }
            return null
        },
        })
    ],
    secret: process.env.JWT_SECRET|| "secret",
    callbacks: {
        async session({ token, session }: { token: JWT, session: Session }): Promise<Session>{
            if (token?.sub && session.user) {
                session.user.id = token.sub;
                session.user.username = token.username;
            }
            return session;
        }
    }
}
