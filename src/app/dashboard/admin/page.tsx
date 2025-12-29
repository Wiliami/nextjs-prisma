import { auth } from "@/src/lib/auth" 
import { headers } from "next/headers"

export default async function PanelAdmin() {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!session) {
        return <div>Not authenticated</div>
    }
    
    if(session.user.role === 'admin') {
        return <h1>Painel Administrativo</h1>
    }   

    return <h1>Acesso permitido somente para administratores</h1>
}