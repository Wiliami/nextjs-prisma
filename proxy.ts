import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "./src/lib/auth";

export default async function proxy(req: NextRequest) {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!session) {
        return NextResponse.redirect(new URL("/signin", req.url));
    }

    return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard"], // Apply middleware to specific routes
};