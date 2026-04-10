import { NextResponse, NextRequest } from "next/server"; 
import { prisma } from '@/lib/prisma';
import { Prisma } from "@/generated/prisma/client";

export async function POST(req: NextRequest) {
    try {

        const { title, content, published } = await req.json();

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

    } catch (err) {
        console.error('Internal server error:', err)

        if(err instanceof Prisma.PrismaClientKnownRequestError) {
            if(err.code === 'P2002') {
                return NextResponse.json(
                    { err: 'O post já existe.' },
                    { status: 409 }
                )
            }
        }

        return NextResponse.json(
            { err: 'Internal server error' },
            { status: 500 }
        )
    }
}


export async function GET(req: NextRequest) {
    try {

        const posts = await prisma.post.findMany({
            include: {
                author: true
            }
        })
        
        return NextResponse.json(posts);

    } catch (err) {
        console.error('Internal server error: ', err)
         return NextResponse.json(
            { err: 'Internal server error' },
            { status: 500 }
        )
    }
}