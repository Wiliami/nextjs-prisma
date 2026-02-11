export default async function Teams() {
    const response = await fetch('http://localhost:3000/dashboard/equipe/1')
    const team = await response.json()
    console.log(team)


    return <pre>{JSON.stringify(team, null, 2)}</pre>
}