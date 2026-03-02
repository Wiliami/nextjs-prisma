'use client'

import { useForm } from "react-hook-form"

let counter = 0;

export function FormVoos() {
    const { register, handleSubmit } = useForm()

    const onSubmit = (d: any) => {
        alert(JSON.stringify(d));
    }


    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>First Name:</label>
            <input {...register("firs")} />
            <label>Last Name:</label>
            <input {...register("lastName")} />

            <p>Render: <span>{counter++}</span></p>
            <input type="submit" value="submit" />
        </form>
        </>
    )
}