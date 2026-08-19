import ListUsers from './list/page'

const username = {
    id: 1,
    name: "John Doe",
    email: "john.doe@gmail.com",
    role: "student"
}


function ButtonMessageError() {
    return <button className='color: blue'>Acesso negado!</button>
}


export default function App() {
    return (
        <div>
            {username.role === 'admin' ? <ListUsers /> : <ButtonMessageError />}
        </div>
    )
}