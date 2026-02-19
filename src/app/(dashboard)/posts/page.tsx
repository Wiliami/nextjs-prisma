import { CreatePost } from './create-post'
import { Posts } from './posts'
import { Suspense } from 'react'
import { revalidateTag, unstable_cache } from 'next/cache'

const getCurrentData = unstable_cache(async() => {
    return new Date().toISOString()
}, [], {
    revalidate: 3,
    tags: ['current-date']
})

export default async function PostsPage() {
    const currentDate = await getCurrentData()

    async function refreshCurrentDate() {
        'use server'


        revalidateTag('current-date', '')
    }

    return (
        <div>
            <form action={refreshCurrentDate}>
                <button type="submit">Refresh current date</button>
            </form>

            {currentDate}

            <Suspense fallback={<p>Carregando posts...</p>}>
                <Posts />
            </Suspense>
            <CreatePost />
        </div>
    )
}