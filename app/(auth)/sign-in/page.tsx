export default function SignIn() {
    return (
        <div className="mt-5">
            <form className="flex flex-col">
                <div className="text-center">
                    <label htmlFor="">E-mail</label>
                    <input type="text" />
                </div>
                <div className="text-center">
                    <label htmlFor="">Senha</label>
                    <input type="password" name="" id="" />
                </div>
                <button>Entrar</button>
            </form>
            {/* <h1>{session.user.name}</h1> */}
        </div>
    )
}