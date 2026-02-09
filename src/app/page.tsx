import React from 'react'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { usersOptions } from './(dashboard)/users/user'
import { getQueryClient } from '../app/get-query-client'
import { UserInfo } from '../app/(dashboard)/users/user-info'
import AuthNavbar from '../components/authNavbar' 


export default function App() {  
    const queryClient = getQueryClient()

    void queryClient.prefetchQuery(usersOptions)

    return (
        <>
            <AuthNavbar />
            <main>
                <h1>User Info</h1>
                <HydrationBoundary state={dehydrate(queryClient)}>
                    <UserInfo />
                </HydrationBoundary>
            </main>
        </>
    )
}