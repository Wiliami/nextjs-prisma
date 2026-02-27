export default function Welcome(props: any) {
    return (
        <>
            <h1>Olá, {props.name}</h1>
            <Users />
        </>
    );
}


// Em outro arquivo
export function Users() {
    return <Welcome name="Wiliamis"/>
}