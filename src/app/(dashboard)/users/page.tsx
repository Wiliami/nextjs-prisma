export default async function Users() {
    const response = await fetch('http://localhost:3000/api/users')

    if(!response.ok) {
        throw new Error(`Erro ao buscar usuários: ${response.statusText}`)
    }
        
    const users = await response.json()

    return (
        <ul>
            {users.map((user: any) => (
                <>
                    <li key={user.id}><strong>Nome: </strong>{user.name}</li> 
                    <p><strong>E-mail: </strong>{user.email}</p><b></b>
                </>
                )
            )}
        </ul>
    )
}