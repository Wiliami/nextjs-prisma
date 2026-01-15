import { prisma } from "@/lib/prisma"

export default async function Posts() {
    const posts = await prisma.post.findMany({
        include: {
            author: true
        }
    })

    return (
        <>
            <h1><strong>Posts usuários</strong></h1>
            <ul>
                {posts.map(post => 
                    <li key={post.id}> Autor: {post.author.name} | Título: {post.title}</li>
                )}
            </ul>
        </>
    )
}