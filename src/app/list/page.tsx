import { users } from '../data/users'

export default function ListUsers() {
    return (
        <ul>
            {users.map(user => {
                return <li key={user.id}>{user.name}</li>
            })}
        </ul>
    )
}