import { headers } from 'next/headers'
import { auth } from '../lib/auth'
import { Button } from '@/src/components/ui/button'

export default async function App() {  
    const session = await auth.api.getSession({
        headers: await headers()
    })
    console.log(session)

    if(!session) {
        return <div>Not authenticated</div>
    }

    return (
        <>
            <div className='text-center'>
                <h1>Seja bem-vindo(a), {session.user.name}</h1>
                <Button className='bg-orange-700'>
                    Sair
                </Button>
            </div>
        </>
    )
}