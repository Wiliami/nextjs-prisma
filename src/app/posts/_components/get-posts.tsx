import { cacheLife } from 'next/cache'
import { Posts } from '@/types/schemas'  

export async function FetchPosts() {
    "use cache"
    cacheLife('seconds')
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()

    return (
        <ul>
            { posts.map(({ id, title }: Posts) => (
                <li key={id}>{title}</li>
            ))}
        </ul>
    )
}
