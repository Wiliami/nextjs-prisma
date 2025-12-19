import { auth } from '@/app/lib/auth'
import { headers } from 'next/headers'

export const isAuthenticatedAction = async () => {
    "use server";
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!session) {
        return "Not authenticated"
    }
} 