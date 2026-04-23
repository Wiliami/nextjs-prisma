'use client'

import { Suspense, useEffect, useState } from "react";
import { CreateTeam } from "./create-team";
import { Teams } from "./teams";

export default function TeamsPage() {
       const [agora, setAgora] = useState<string | null>(null)

       useEffect(() => {
              setAgora(new Date().toLocaleTimeString())
       }, [])

       return (
              <>
              <div>
                     <h1>Horário atual:</h1>
                     <p>{agora ?? 'Carregando...'}</p>
              </div>
              </>
       )
}