import { Button } from '../components/ui/button'
import { verifyAuth } from './auth/verifyAuth'

export default async function App() {  
    const session = await verifyAuth()

    if(!session) return <div>Usuário não autenticado.</div>

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