export async function getUsers() {
    const response = await fetch('http://localhost:3000/api/users')
    
    return response
}