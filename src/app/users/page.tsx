'use client'

import { authClient } from "@/lib/auth-client" // import the auth client

export default function Users() {
    const { data } = authClient.useSession()
    console.log(data)

    return (
        <div>
            <p>Seja-bem, vindo, <b>{data?.user.name}</b></p>
        </div>
    )
}