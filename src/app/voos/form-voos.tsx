'use client'

import { useForm } from "react-hook-form"

export function FormFlights() {
    let counter = 0;
    
    const { register, handleSubmit } = useForm()
    const handleSubmitSignIn = (data: any) => {
        alert(JSON.stringify(data))

        return (
            <form onSubmit={handleSubmit(handleSubmitSignIn)}>
                <label>E-mail:
                    <input {...register("name")} />
                </label>
                <label>Senha:
                    <input {...register("password")} />
                </label>

                <p>Render: <span>{counter++}</span></p>
                <input type="submit" value="Entrar" />
            </form>
        )
    }
}
