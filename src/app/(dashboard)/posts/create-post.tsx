import { revalidateTag } from "next/cache"
import { CreateButtonPost } from "./create-button-post"

export function CreatePost() {
    async function handleCreatePost(form: FormData) {
        'use server'

        const title = form.get('title')

        if(!title) {
            return
        }

        // delay 3
        await new Promise(resolve => setTimeout(resolve, 3000))

        await fetch('http://localhost:3333/posts', {
            method: 'POST',
            body: JSON.stringify({
                title
            })
        })


        revalidateTag('get-posts', '')
    }
    return (
        <form action={handleCreatePost}>
            <input type="text" name="title" placeholder="Nome do post" />
            <CreateButtonPost />
        </form>
    )
}