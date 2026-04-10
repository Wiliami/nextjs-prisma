import { prisma } from '@/lib/prisma';
import { EmailAlreadyExistsError } from './errors/email-already-exists';

export async function createUser(email: string, name: string) {
    const userExisting = await prisma.user.findUnique({
        where: { email },
      });


    if(userExisting) {
        throw new EmailAlreadyExistsError(email);
    }
}