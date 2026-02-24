export async function getUsers() {
    const response = await fetch('http://localhost:3334/api/users')

    console.log(response.formData)
    if(response.url !== 'http://localhost:3334/api/users') {
        throw new Error(`URL da requisição incorreta.`)
    }

    if(!response.ok) throw new Error(`Erro ao buscar dados.`)
    
    return await response.json()
}