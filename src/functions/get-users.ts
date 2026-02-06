export async function getUsers() {
    try {
        const response = await fetch('http://localhost:3000/api/users')

        if(!response.ok) {
            throw new Error(`Erro ao buscar usuários: ${response.statusText}`)
        } 

        const result = await response.json();
        console.log(result)

        return result
        
    } catch (error) {
        console.log('Erro ao buscar dados: ', error)
    }
}