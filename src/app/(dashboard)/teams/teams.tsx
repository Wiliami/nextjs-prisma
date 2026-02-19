export async function Teams() {
    //delay 3s
    // await new Promise(resolve => setTimeout(resolve, 3000))

    const response = await fetch('http://localhost:3333/teams' , {
        next: {
           tags: ['get-teams']
        }
    })
    const data = await response.json()

    return (
        <ul>
            {data.map((item: any) => <li key={item.id}>{item.team}</li>)}
        </ul>
    )
}