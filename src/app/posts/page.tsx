import { Suspense } from 'react';
import { FetchPosts } from './_components/get-posts'

// Testing feature cache
export default async function Posts() {
    return (
        <Suspense fallback={<div>Carregando posts...</div>}>
            <FetchPosts />
        </Suspense>
    )
}