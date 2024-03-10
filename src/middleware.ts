import { NextResponse } from "next/server";
import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ['/', '/about', '/contact', '/login', '/portfolio', '/blogs'],
    afterAuth(auth, req, evt) {
        // Handle users who aren't authenticated
        console.log("Auth", auth)
        console.log("!auth.isPublicRoute", !auth.isPublicRoute)

        if (!auth.userId && !auth.isPublicRoute) {
            return redirectToSignIn({ returnBackUrl: req.url });
        }
        // Redirect logged in users to organization selection page if they are not active in an organization
        // Allow users visiting public routes to access them
        return NextResponse.next();
    },
});