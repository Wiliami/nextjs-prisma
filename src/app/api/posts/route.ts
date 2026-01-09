import { NextResponse, NextRequest } from "next/server"; 
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
    try {

        const { title, content, published } = await req.json()
        if(!title || !content || !published) {
            return NextResponse.json(
                { error: 'Campos obrigatórios' },
                { status: 400 }
            )
        }

        const post = await prisma.post.create({
            data: {
                authorId: '1',
                title,
                content,
                published
            }
        })

        console.log('Post cadastrado com sucesso: ', post);

        return NextResponse.json(post, { status: 201 });

    } catch (err: any) {
        console.error('Erro ao cadastrar post:', err)

        return NextResponse.json(
            { err: 'Erro interno do servidor' },
            { status: 500 }
        )
    }
}


export async function GET(req: NextRequest) {
    try {
        const posts = await prisma.post.findMany();

        return NextResponse.json(posts);

    } catch (error) {
        console.error('Falha: ', error)
         return NextResponse.json(
            { error: 'Failed to fecth posts.' },
            { status: 500 }
        )
    }
}