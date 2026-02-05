"use client"

import { authClient } from "../../../lib/auth-client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IconH1, IconLoader } from "@tabler/icons-react";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export default function AccountPage() {
    const router = useRouter();
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function getUser() {  
        const { data: session } = await authClient.getSession()
        console.log(session?.user)

        if(!session?.user) {
            return router.push('/sign-in')
        }

        return session;
    }

    // Sincronizar um compontente com um sistema externo (API)
    useEffect(() => { 
        getUser()
        .then((data => {
            setFullname(data?.user?.name ?? '')
            setEmail(data?.user?.email ?? '')
        }));
    }, [])



    return !email ? (
        <div className="px-4 lg:px-6 lg:w-1/2 grid gap-4">
        <Skeleton className="w-1/2 h-5 rounded-full" />
        <Skeleton className="w-2/3 h-5 rounded-full" />
        <Separator className="mb-4" />
        <Skeleton className="w-full h-5 rounded-full" />
        <Skeleton className="w-full h-[30px] rounded-full" />
        <Skeleton className="w-full h-5 rounded-full" />
        <Skeleton className="w-full h-[30px] rounded-full" />
        <Skeleton className="w-full h-[30px] rounded-full" />
    </div>
    ) : (
    <>
      <div className="px-4 lg:px-6">
        <h1 className="text-lg font-medium">Configurações de conta</h1>
        <p className="text-sm text-muted-foreground mb-2">
          Edite os dados da sua conta
        </p>
        <Separator className="mb-4" />
        <form className="lg:w-1/2">
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <label htmlFor="email"><strong>Nome</strong></label>
              <input
                onChange={(e) => setFullname(e.target.value)}
                value={fullname}
                id="name"
                type="text"
                placeholder="Achour Meguenni"
                required
              />
            </div>
            <div className="grid gap-3">
              <label htmlFor="email"><strong>E-mail</strong></label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id="email"
                type="email"
                placeholder="me@example.com"
                required
              />
            </div>

            <div className="flex flex-col gap-3">
              <button disabled={loading} type="submit" className="w-full">
                {loading ? (
                  <IconLoader className="animate-spin" stroke={2} />
                ) : (
                  "Salvar"
                )}
              </button>
            </div>
          </div>
          <div className="mt-4 text-center text-sm">
            Esqueceu a senha?{" "}
            <a href="/sign-in" className="underline underline-offset-4">
              Redefinir senha
            </a>
          </div>
        </form>
      </div>
    </>
  );
}



