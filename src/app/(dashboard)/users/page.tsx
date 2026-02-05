export default async function Users() {
    const response = await fetch('http://localhost:3000/api/users')
    const users = await response.json()

    return (
        <ul>
            {users.map((user: any) => <li>{user.name}</li> )}
        </ul>
    )
}