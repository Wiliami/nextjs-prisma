export async function Campaigns() {
     const response = await fetch('http://localhost:3333/campaigns', {
        next: { revalidate: 15 }
    })

    const campaigns = await response.json()

    return (
        <ul>
            {campaigns.map((campaing: any) => <li key={campaing.id}>{campaing.name}</li>)}
        </ul>
    )
}