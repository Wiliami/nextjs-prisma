export async function Tags() {
    // delay 3s
    await new Promise(resolve => setTimeout(resolve, 3000))
    const response = await fetch('http://localhost:3333/tags', {
        next: {
            tags: ['get-tags']
        }
    })

    const tags = await response.json()

    return (
        <ul>
            {tags.map((tag: any) => <li key={tag.id}>{tag.slug}</li>)}
        </ul>
    )
}