export async function getUsers() {
        const response = await fetch('https://localhost:3335/api/users');

        if(!response.ok) {
            throw new Error(`Erro ao buscar dados: ${response.statusText}`);
        }

        return await response.json();
}