import { Suspense } from "react";
import { CreateTeam } from "./create-team";
import { Teams } from "./teams";

export default function PageTeams() {
       return (
              <>
                     <Suspense fallback={<p>Carregando equipes...</p>}>
                            <Teams />
                     </Suspense>
                     <CreateTeam />
              </>
       )
}