import { auth } from "@/lib/auth"
import { headers } from "next/headers"

export default async function Profile() {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    return (
        <div>
            <h1><strong>Meu Perfil</strong></h1>
            <p><strong>Nome</strong>: {session?.user.name}</p>
            <p><strong>E-mail</strong>: {session?.user.email}</p>
            <p><strong>Role</strong>: {session?.user.role}</p>
        </div>
    )
}



