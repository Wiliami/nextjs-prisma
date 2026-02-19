import { revalidateTag } from "next/cache"

export async function handleCreateTeam(form: FormData) {
    'use server'

    const team = form.get('team')

    if(!team) {
        return
    }

    await fetch('http://localhost:3333/teams', {
        method: 'POST',
        body: JSON.stringify({
            team
        })
    })


    revalidateTag('get-teams' , '')
}


export async function deleteTeam(form: FormData, teamId: string) {
    'use server'
    
    const id = form.get('id')

    if(!id) {
        return
    }

    await fetch(`http://localhost:3333/teams/${teamId}`, {
        method: 'DELETE',
    })
}