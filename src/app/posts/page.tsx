import { Suspense } from 'react';
import { FetchPosts } from '../../functions/get-posts'
 
export default async function Posts() {
    return (
        <Suspense fallback={<div>Carregando posts...</div>}>
            <FetchPosts />
        </Suspense>
    )
}