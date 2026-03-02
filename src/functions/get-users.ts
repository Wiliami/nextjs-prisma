export async function getUsers() {
    try {
        const response = await fetch('http://localhost:3334/api/users');

        if(!response.ok) {
            throw new Error(`Erro ao buscar dados: ${response.statusText}`);
        }

        const users = await response.json();
        return users;
        
    } catch (err) {
        if(err instanceof Error ? err.message : String(err))
        console.error('internal server error:', err)    
    }
}