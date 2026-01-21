export default async function Users() {
    const response = await fetch('http://localhost:3000/api/users/')
    const users = await response.json()    
    
    return (
        <>
            <h1><strong>Lista de usuários</strong></h1>
            <ul>
                { users.map((user: any) => <li key={user.id}><strong>Nome</strong>: {user.name} | <strong>E-mail</strong>: {user.email}</li>)}
            </ul>
        </>
    )
}