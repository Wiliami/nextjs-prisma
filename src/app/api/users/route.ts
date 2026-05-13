import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { createUser } from '@/functions/create-user';
import { createUserSchema } from '@/types/schemas';
import { PrismaClientKnownRequestError, PrismaClientValidationError } from '@prisma/client/runtime/client';

export async function POST(req: NextRequest) {
    try {
        const { name, email, role } = createUserSchema.parse(req.json);

        const user = await createUser(name, email, role);

        console.log('Usuário cadastrado com sucesso: ', user);
        return NextResponse.json(user, { status: 201 });

    } catch (err) {
        console.error('Erro ao cadastrar usuário:', err)

        if (err instanceof BaseError) {
            return NextResponse.json(
                { error: err.message },
                { status: err.statusCode },
            )
        }

        if(err instanceof PrismaClientKnownRequestError) {
            if(err.code === 'P2002') {
                return NextResponse.json(
                    { err: 'E-mail já existe.' },
                    { status: 409 }
                )
            }
        }


        // if (err instanceof PrismaClientValidationError) {
        //     const fields = parsePrismaValidationFields(err.message)
        //     return NextResponse.json(
        //         { error: 'Dados inválidos. Verifique os campos enviados.', fields },
        //         { status: 400 },
        //     )
        // }

        return NextResponse.json(
            { err: 'Internal server error' },
            { status: 500 }
        )
    }
}

export async function GET(req: NextRequest) {
    try {
        // const session = await auth.api.getSession({
        //     headers: req.headers,
        // });

        // if (!session) {
        //     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        // }

        // if(session.user.role !== 'admin') {
        //     return NextResponse.json(
        //         { error: "Acesso não autorizado" }, 
        //         { status: 403 }
        //     )
        // }

        const users = await prisma.user.findMany();

        return NextResponse.json(users);

    } catch (err) {
        console.error('Internal server error:', err)
         return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}