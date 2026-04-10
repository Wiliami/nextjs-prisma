export class EmailAlreadyExistsError extends BaseError {
    constructor(email: string) {
        super(`O e-mail ${email} já está cadastrado!`, 409);
    }
}

