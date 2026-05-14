import { BaseError } from '@/functions/errors/base-error';

export class EmailAlreadyExistsError extends BaseError {
    constructor(email: string) {
        super(`O e-mail ${email} já está cadastrado!`, 409);
    }
}

