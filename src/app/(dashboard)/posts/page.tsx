export default async function Posts() {
    const response = await fetch('http://localhost:3000/posts')
    const posts = await response.json()

    return (
        <ul>
            {posts.map((post: any) => (
                <>
                    <li id={post.id}><strong>Título</strong>: {post.title}</li><br />
                    <p><strong>Contéudo</strong>: {post.content}</p>
                </>
            )
            )}
        </ul>
    )
}