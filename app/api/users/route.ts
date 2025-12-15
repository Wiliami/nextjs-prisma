import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../lib/prisma'
import { auth } from '../../lib/auth'

export async function POST(req: NextRequest) {
    try {
        const session = auth.api.getSession({
            headers: req.headers
        });

        if(!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { name, email, role } = await req.json()

        if(!name || !email || !role) {
            return NextResponse.json(
                { error: 'Campos obrigatórios' },
                { status: 400 }  
            )
        }

        const user = await prisma.user.create({
            data: {
                id: crypto.randomUUID(), 
                name,
                email,
                role
            }
        })

        console.log('Usuário cadastrado com sucesso: ', user);

        return NextResponse.json(user, { status: 201 });

    } catch (err: any) {
        console.error('Erro ao cadastrar usuário:', err)

        if(err.code === 'P2002') {
            return NextResponse.json(
                { err: 'E-mail já cadastrado' },
                { status: 400 }
            )
        }
    
        return NextResponse.json(
            { err: 'Erro interno do servidor' },
            { status: 500 }
        )
    }
}

export async function GET(req: NextRequest) {
    try {
        const session = await auth.api.getSession({
            headers: req.headers,
        });
        
        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const users = await prisma.user.findMany();
        
        return NextResponse.json(users);

    } catch (error) {
         return NextResponse.json(
            { error: 'Failed to fecth users.' },
            { status: 500 }
        )
    }
}