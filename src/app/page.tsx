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
        <div className="w-screen h-screen bg-zinc-900">
            <AuthNavbar />
            <HydrationBoundary state={dehydrate(queryClient)}>
                <h1 className='text-white'>Home</h1>
            </HydrationBoundary>
        </div>
        </>
    )
}