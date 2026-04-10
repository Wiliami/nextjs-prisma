export async function getUsers() {
        const response = await fetch('https://localhost:3335/api/users');
        const data = await response.json();

        return data;     
}