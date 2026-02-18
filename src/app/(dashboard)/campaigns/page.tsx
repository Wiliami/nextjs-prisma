import { AlertMessage } from '@/components/alertMessage'; 
import { admin, designer  } from '@/app/auth/permissions'
import { auth } from "../../../lib/auth"; // path to your Better Auth server instance
import { headers } from "next/headers";
import EditCampaign from './_components/editCampaign' 
import { revalidateTag } from 'next/cache';
import { Campaigns } from './campaigns'

export default async function CampaignsPage() {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })


    // if(session?.user.role === admin || session?.user.role === designer) {
    //     // ebibir componente pra atualizar dados de campanha
    // }

   return (
    <Campaigns />
   )

}