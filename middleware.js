// Description: This file contains the middleware for the application.

import { NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function middleware(request) {
    const { isAuthenticated } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();

    const { getUser } = getKindeServerSession();
    const user = await getUser();

    // Check if the user is authenticated
    if (user && isUserAuthenticated) {
        return NextResponse.next(); // Allow access to the route
    } else {
        // Redirect to login if unauthenticated
        return NextResponse.redirect(new URL("/api/auth/login", request.url));
    }
}

export const config = {
    matcher: "/profile", // Apply this middleware to the /profile route
};
