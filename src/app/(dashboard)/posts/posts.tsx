export async function Posts() {
    // delay 3
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    const response = await fetch('http://localhost:3333/posts', {
        next: {
            tags: ['get-posts']
        }
    })
    const posts = await response.json()

    return (
        <ul>
            {posts.map((post: any) => <li id={post.id}>{post.title}</li>)}
        </ul>
    )
}