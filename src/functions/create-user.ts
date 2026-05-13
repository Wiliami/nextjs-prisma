import { prisma } from '@/lib/prisma';
import { EmailAlreadyExistsError } from './errors/email-already-exists';
import { NextResponse } from 'next/server';

export async function createUser(name: string, email: string, role: string) {
    if(!name || !email || !role) {
        return NextResponse.json(
            { error: 'Campos obrigatórios' },
            { status: 400 }
        )
    }

    const userExisting = await prisma.user.findUnique({
        where: { email },
    });

    if(userExisting) {
        throw new EmailAlreadyExistsError(email);
    }
    
    const user = await prisma.user.create({
        data: {
            id: crypto.randomUUID(),
            name,
            email,
            role
        }
    })

    return { user };

}