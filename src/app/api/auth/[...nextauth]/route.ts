// pages/api/auth/[...nextauth].ts

import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { UserById } from '../../lib/getUserFromId';

const prisma = new PrismaClient();

 const authOptions: AuthOptions = {
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) {
                    throw new Error('Email and password are required');
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email,
                    },
                });

                console.log("User: ", user)

                if (!user || !user.password) {
                    throw new Error('Invalid email or password');
                }

                const isValid = await verifyPassword(
                    credentials.password,
                    user.password
                );

                if (!isValid) {
                    throw new Error('Invalid email or password');
                }

                const userSend = {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    role: user.role
                }

                return userSend;
            },
        }),
    ],
    pages: {
        signIn: '/auth/signin',
    },


}
// Helper function to verify password (you can use a library like bcrypt or argon2)

// Separate function for password validation (replace with your implementation)
async function verifyPassword(plainPassword: string, hashedPassword: string) {
    // Use a secure hashing library (e.g., bcrypt) to compare passwords
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return isMatch;
}

const handler = NextAuth(authOptions)

export { handler as POST, handler as GET };