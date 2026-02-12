'use client'

import { useFormStatus } from "react-dom"

export function CreateButtonTeam() {
    const { pending } = useFormStatus()
    
    return (
        <button type="submit" disabled={pending}>
            {pending ? 'Criando equipe...' : 'Criar equipe'}
        </button>
    )
}