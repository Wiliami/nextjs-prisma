export default async function Posts() {
    const response = await fetch('http://localhost:3000/api/posts')
    const posts = await response.json()

    return (
        <>
            <h1><strong>Posts usuários</strong></h1>
            <ul>
                {posts.map((post: any) => 
                    <li key={post.id}>
                        <strong>Autor</strong>: {post.author.name} | <strong>Título</strong>: {post.title}
                    </li>
                )}
            </ul>
        </>
    )
}