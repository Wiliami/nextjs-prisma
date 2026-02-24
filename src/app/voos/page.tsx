export default async function Voos() {
    const response = await fetch('http://localhost:3334/api/google-flights.ts')
    const voos = await response.json()

    console.log(voos)
    return (
        <div>
            Passagens áreas
        </div>
    );
}