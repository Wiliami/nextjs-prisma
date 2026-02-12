'use client'

import { useFormStatus } from "react-dom"

export function CreateButtonPost() {
    const { pending } = useFormStatus()

    return (
        <button type="submit">
            {pending ? 'Criando post' : 'Criar post'}
        </button>
    )
}