export default function createPost(formData: FormData) {
    'use server'

    const title = formData.get('title')
    const content = formData.get('content')
    console.log(title)

}