import { z } from 'zod'

const userSchema = z.object({
    id: z.string().transform(id => Number(id)),
    name: z.string(),
    email: z.email()
})

const user = {
    id: 1,
    name: 'Wiliamis',
    email: 'wiliamis.dev@gmail.com'
}

type userValues = z.infer<typeof userSchema>

type userValuesInput = z.input<typeof userSchema>
type userValuesOutput = z.output<typeof userSchema>

function createUserInDatabase(user: userValues) {}
createUserInDatabase(user)


