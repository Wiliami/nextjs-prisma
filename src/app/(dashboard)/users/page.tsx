import React from 'react'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { usersOptions } from './user'
import { getQueryClient } from '../../get-query-client'
import { UserInfo } from './user-info'


export default  function Users() {
    const queryClient = getQueryClient()

    void queryClient.prefetchQuery(usersOptions)

    return (
        <>
            <h1>User info</h1>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <UserInfo />
            </HydrationBoundary>
        </>
    )
}