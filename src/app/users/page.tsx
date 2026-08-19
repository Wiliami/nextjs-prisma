import { username } from '../store/session'

export default function Users() {
    return (
        <div>
            { username.role === "admin" ? <h1>Users</h1> : <h1>Acesso negado!</h1>}
        </div>
    )
}