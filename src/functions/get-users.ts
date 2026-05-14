export async function getUsers() {
        const response = await fetch('http://localhost:3333/api/users');
        const data = await response.json();

        return data;     
}