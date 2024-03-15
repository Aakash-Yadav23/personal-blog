import { User } from "@/types/User";
import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

async function getUserDetailsFromSession(req: NextRequest) {
    // Get the user details from the session
    const session = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
        secureCookie: process.env.NODE_ENV === 'production',
    });

    return session?.sub;
}



export { getUserDetailsFromSession }