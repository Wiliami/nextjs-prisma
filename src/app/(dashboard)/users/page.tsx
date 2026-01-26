"use client"

import { useQuery } from '@tanstack/react-query'
// import { getUsers } from '../../../functions/get-users'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../../../lib/react-query'


export default function Users() {
    <QueryClientProvider client={queryClient}>
        <GetUsers />    
    </QueryClientProvider>
}


function GetUsers() {
    const { data, error, isPending } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('http://localhost:3000/api/users').then((res) => res.json())
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