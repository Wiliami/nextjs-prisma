import EditCampaign from './_components/editCampaign' 
import { AlertMessage } from '@/components/alertMessage'; 
import { verifyAuth } from '@/auth/verifyAuth'

export default async function CampaignsPage() {
    const session = await verifyAuth();

    if(session?.user.role === 'designer' || session?.user.role === 'admin') {
        return <EditCampaign />
    }

    return <AlertMessage />

}