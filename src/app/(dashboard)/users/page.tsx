"use client"

import { useQuery } from '@tanstack/react-query'
import { getUsers } from '../../../functions/get-users'

export default function Users() {
    const { data, error, isPending } = useQuery({
        queryKey: ['users'],
        queryFn: getUsers
    })

    console.log(data)

    if (isPending) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message

    return (
        <>
            <h1><strong>Lista de usuários</strong></h1>
            <ul>
                { data.map((user: any) => <li key={user.id}><strong>Nome</strong>: {user.name} | <strong>E-mail</strong>: {user.email}</li>)}
            </ul>
        </>
    )
   
}