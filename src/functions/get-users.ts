export async function getUsers() {
    const response = await fetch('http://localhost:3000/api/users')

    if(!response.ok) throw new Error(`Erro ao buscar dados: ${response.statusText}`)
    
    return await response.json()
}