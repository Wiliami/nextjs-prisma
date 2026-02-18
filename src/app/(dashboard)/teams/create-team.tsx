import { CreateButtonTeam } from "./create-button-team"
import { handleCreateTeam } from '../../../lib/actions'

export async function CreateTeam() {
    return (
        <form action={handleCreateTeam}>
            <input type="text" name="team" placeholder="Nome da equipe" />
            <CreateButtonTeam />
        </form>

    )
 }