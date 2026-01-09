import { prisma } from "@/lib/prisma"

export default async function Posts() {
    const posts = await prisma.post.findMany()

    return (
        <>
            <h1><strong>Meus posts</strong></h1>
            <ul>
                {posts.map(post => 
                    <li>{post.title}</li>
                )}
            </ul>
        </>
    )
}