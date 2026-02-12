import { CreatePost } from './create-post'
import { Posts } from './posts'
import { Suspense } from 'react'

export default async function PostsPage() {
    return (
        <div>
            <Suspense fallback={<p>Carregando posts...</p>}>
                <Posts />
            </Suspense>
            <CreatePost />
        </div>
    )
}