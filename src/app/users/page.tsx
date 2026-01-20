import { headers } from 'next/headers';
import { prisma } from '../../lib/prisma';
import { auth } from '@/lib/auth';

export default async function Users() {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const userId = session?.user.id
    console.log('ID: ', userId)

    const getAuthor = await prisma.user.findUnique({
        where: {
            id: 'ds8Uq6u16qJPibvqL5SZXNogRCkl7EbO'
        },
        include: {
            posts: true
        }
    }); 
    
    return (
        <>
            <h1><strong>Meu posts</strong></h1>
            <ul>
                { getAuthor?.posts.map(post => <li key={post.id}><strong>Título</strong>: {post.title} | <strong>Conteúdo</strong>: {post.content}</li>)}
            </ul>
        </>
    )
}