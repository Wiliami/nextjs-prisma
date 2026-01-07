import { cacheLife } from 'next/cache'

export async function FetchPosts() {
    "use cache"
    cacheLife('seconds')
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()

    return (
        <ul>
            { posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    )
}
