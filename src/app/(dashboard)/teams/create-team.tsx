import { revalidateTag } from "next/cache"
import { CreateButtonTeam } from "./create-button-team"

export async function CreateTeam() {
    async function handleCreateTeam(form: FormData) {
        'use server'

        const team = form.get('team')

        if(!team) {
            return
        }
        
        // delay 3s
        await new Promise(resolve => setTimeout(resolve, 3000))

        await fetch('http://localhost:3333/teams', {
            method: 'POST',
            body: JSON.stringify({
                team
            })
        })


        revalidateTag('get-teams' , '')
    }
    
    return (
        <form action={handleCreateTeam}>
            <input type="text" name="team" placeholder="Nome da equipe" />
            <CreateButtonTeam />
        </form>

    )
 }