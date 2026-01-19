import EditCampaign from './_components/editCampaign' 
import { AlertMessage } from '@/components/alertMessage'; 
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export default async function CampaignsPage() {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(session?.user.role === 'designer' || session?.user.role === 'admin') {
        return <EditCampaign />
    }

    return <AlertMessage />

}