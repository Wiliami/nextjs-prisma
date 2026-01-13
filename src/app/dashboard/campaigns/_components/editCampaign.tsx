import { admin } from '@/auth/permissions'
import { verifyAuth } from '@/app/auth/verifyAuth'

export default async function EditCampaign() {
    const session = await verifyAuth();

    return (
        <>
            <h1><strong>Título da Campanha</strong>: Promoção de verão</h1>
            <p><strong>Cliente</strong>: Filipe Deschamps</p>
            <span><strong>Status</strong>: Ativa</span>
            <p><strong>Data cadastro</strong>: 02/01/2026</p>
            <p><strong>Data atualização</strong>: 05/01/2026</p>

            {/* Regra de negócio */}
            {/* Se tiver a rule de editar campanha */}
            { session?.user.role === 'admin' && admin.statements.campaign[2] === 'update' ?
            <button className="bg-amber-300 rounded-4xl font-bold">
                Criar campanha
            </button>
            : 'Você não tem autorização pra editar campanha.'
            }
        </>
    )
}






// select 
// u.id AS user_id
// u.name 
// from users u 
// inner join endereco e
// on u.endereco_id = e.id
// Buscar o nome e o endereço do usuário (Todos)