import { admin } from '@/auth/permissions'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'

export default async function EditCampaign() {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    return (
        <>
            <h1><strong>Título da Campanha</strong>: Promoção de verão</h1>
            <p><strong>Cliente</strong>: Filipe Deschamps</p>
            <span><strong>Status</strong>: Ativa</span>
            <p><strong>Data cadastro</strong>: 02/01/2026</p>
            <p><strong>Data atualização</strong>: 05/01/2026</p>

            { session?.user.role === 'admin' && admin.statements.campaign[2] === 'update' ?
            <button className="bg-amber-300 rounded-4xl font-bold">
                Criar campanha
            </button>
            // Criar, editar e remover
            : 'Você não tem autorização pra editar campanha.'
            }
        </>
    )
}