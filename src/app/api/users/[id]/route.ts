import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function PUT(req: NextRequest, 
    { params }: { params: { id: string }}
) {

    const { id } = await params
    const body = await req.json()
    
    try {
        if (!id) {
            return NextResponse.json({ error: "ID de usuário ausente." }, { status: 400 });
        }

        if (!body || Object.keys(body).length === 0) {
            return NextResponse.json(
                { error: "Corpo da requisição vazio." },
                { status: 400 }
            );
        }

        const updatedUser = await prisma.user.update({
            where: { id },
            data: body,
        })

        return NextResponse.json(updatedUser, { status: 200 });
    } catch (error) {
        console.error("Error updating user:", error);
        return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
    }
    
}

export async function PATCH(req: NextRequest, 
    { params }: { params: { id: string }}
) {

    const { id } = await params
    const body = await req.json()
    
    try {
        if (!id) {
            return NextResponse.json({ error: "ID de usuário ausente." }, { status: 400 });
        }

        if (!body || Object.keys(body).length === 0) {
            return NextResponse.json(
                { error: "Corpo da requisição vazio." },
                { status: 400 }
            );
        }

        const updatedUser = await prisma.user.update({
            where: { id },
            data: body,
        })

        return NextResponse.json(updatedUser, { status: 200 });
    } catch (error) {
        console.error("Error updating user:", error);
        return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
    }
    
}

export async function DELETE(req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = await params;

        const user = await prisma.user.delete({
            where: { id }
        });

        return NextResponse.json(
            { message: `Item with ID ${id} deleted successfully`, user },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error deleting item:", error);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}


