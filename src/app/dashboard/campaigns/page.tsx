import { admin } from '../../auth/permissions'

export default function CampaignsPage() {
    if(admin.statements.campaign[1] === 'view') {
        return (
            <>
                <h1>Título da Campanha: Promoção de verão</h1>
                <p>Cliente: Filipe Deschamps</p>
                <span>Status: Ativa</span>
                <p>Data cadastro: 02/01/2026</p>
                <p>Data atualização: 05/01/2026</p>
                <button className="bg-amber-300 rounded-4xl font-bold">
                    Criar campanha
                </button>
            </>
        )
    }
    return 'Esta página precisa de autorização.'
    
}