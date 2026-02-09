import React from 'react'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { usersOptions } from './(dashboard)/users/user'
import { getQueryClient } from '../app/get-query-client'
import AuthNavbar from '../components/authNavbar' 

export default function App() {  
    const queryClient = getQueryClient()

    void queryClient.prefetchQuery(usersOptions) // Retirar a hidratação global para um arquivo específico

    return (
        <>
            <AuthNavbar />
            <HydrationBoundary state={dehydrate(queryClient)}>
                <h1>Home</h1>
            </HydrationBoundary>
        </>
    )
}