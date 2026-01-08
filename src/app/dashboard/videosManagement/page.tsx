import { admin, designer } from '@/auth/permissions' 
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { DialogDemo } from '@/components/dialogDemo'

export default async function VideosManagementPage() {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if(session?.user.role === "admin" || session?.user.role === 'designer') {
        return (
            <>
                <h1>Gerenciador de vídeos</h1>
                { session?.user.role === 'designer' ? <DialogDemo /> : "Você não tem permissão pra editar vídeo" }
            </>
        )
    }

    return 'Acesso autorizado somente para administradores.'
}