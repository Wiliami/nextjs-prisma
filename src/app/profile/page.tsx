export default async function profile() {
    const response = await fetch('https://api.github.com/users/Wiliami')
    const profile = await response.json()

    const replacer = (key: any, value: any) => {
        console.log('renderizou')
        if (key === "name") return undefined

        return value
    }

    return (
        <pre>{JSON.stringify(profile, replacer, 2)}</pre>
    );
}



