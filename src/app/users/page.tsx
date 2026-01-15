import { prisma } from '../../lib/prisma';
import { verifyAuth } from '../auth/verifyAuth';

export default async function Users() {
    const { session } = await verifyAuth();
    const userId = session?.user.id
    console.log('ID: ', userId)

    const getAuthor = await prisma.user.findUnique({
        where: {
            id: '1'
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