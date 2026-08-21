import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; // sua instância do Prisma Client
import { auth } from '@/lib/auth'

export async function POST(request: Request) {
  // 1. Em um cenário real vulnerável, o servidor valida o usuário APENAS pelo cookie de sessão
  // Exemplo fictício: const session = await getSessionFromCookie();
  const session = await auth.api.getSession();

  // 2. Extrai os dados do formulário
  const formData = await request.formData();
  const newRole = formData.get('role') as string;
  const userId = session?.user.id; // Simulando o ID vindo da sessão

  // 3. Atualiza no banco via Prisma
  await prisma.user.update({
    where: { id: userId },
    data: { role: newRole },
  });

  return NextResponse.json({ message: 'Role atualizada com sucesso!' });
}