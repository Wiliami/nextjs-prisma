import { headers } from 'next/headers'
import { admin } from './auth/permissions'
import { authClient } from './lib/auth-client'
import { auth } from './lib/auth'
import { redirect } from 'next/navigation'

export default async function App() {  
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!session) {
        return <div>Not authenticated</div>
    }


    const { data, error } = await authClient.admin.hasPermission({
        userId: 'session.user.id', // Required
        role: 'admin',
        permission: { campaign: ["view"] },
    })

    return (
        <h1>Home</h1>
    )
}