import z from "zod"

export interface Posts {
    id: number,
    title: string
}

export const createUserSchema = z.object({
    name: z.string(),
    email: z.string(),
    role: z.string()
})