export default async function tags() {
    const response = await fetch('http://localhost:3000/tags')
    const tags = await response.json()

 return (
    <ul>
        {tags.map((tag: any) => <li id={tag.id}>{tag.name}</li>)}
    </ul>
 )
}