// middleware.ts

import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { GetMe } from './lib/mutation';
import { getSession } from 'next-auth/react';

export async function middleware(req: NextRequest) {
    const session = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
        secureCookie: process.env.NODE_ENV === 'production',
    });

    const user = session;

    const { pathname, origin } = req.nextUrl;

    // Check if the user is authenticated for all protected routes
    const protectedRoutes = ['/admin', '/dashboard', '/profile'];
    const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

    console.log('Session!!!', session);

    if (isProtectedRoute && !session && !user) {
        return NextResponse.rewrite(`${process.env.NEXTAUTH_URL}/auth/signin`);
    }

    // // // Additional logic for routes starting with '/admin'
    // if (pathname.startsWith('/admin')) {
    //     const userRole = user?.data.user.role; // Use optional chaining
    //     if (userRole !== 'ADMIN') {
    //         return NextResponse.rewrite(`${origin}/auth/signin`); // Redirect to sign-in page
    //     }
    // }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*', '/dashboard/:path*', '/profile/:path*'],
};