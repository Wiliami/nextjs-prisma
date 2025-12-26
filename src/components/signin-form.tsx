"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Eye, EyeOff, Loader2 } from "lucide-react"
import { authClient } from '../lib/auth-client'
import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/src/components/ui/form'

const signinSchema = z
    .object({
      email: z.email({ message: "Email inválido" }),
      password: z.string().min(8, { message: "A senha deve ter pelo menos 8 caracteres" }),
    });

type SigInFormValues = z.infer<typeof signinSchema>


export function SiginForm() {

    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()


    const form = useForm<SigInFormValues>({
      resolver: zodResolver(signinSchema),
      defaultValues: {
        email: "",
        password: "",
      },
    })


    async function onSubmit(formData: SigInFormValues) {
      console.log(formData)

      
      const { data, error } = await authClient.signIn.email({
        email: formData.email,
        password: formData.password
      }, {
        onRequest: (ctx) => {
          
        },
        onSuccess: (ctx) => {
          console.log("LOGADO: ", ctx)
          router.replace("/dashboard")
        },
        onError: (ctx) => {
          console.log('Erro ao tentar logar')
          console.log('Mensagem de erro: ', ctx)
        }
      })
    }

    return (
        <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <img
              alt="Your Company"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="mx-auto h-10 w-auto"
            /> */}
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">
              Entrar
            </h2>
            <p className="text-gray-400 text-center">Entre com seu e-mail e senha.</p>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem >
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input placeholder="E-mail" {...field} disabled={isLoading} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="••••••••"
                            type={showPassword ? "text" : "password"}
                            {...field}
                            disabled={isLoading}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            onClick={() => setShowPassword(!showPassword)}
                            disabled={isLoading}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4 text-muted-foreground" />
                            ) : (
                              <Eye className="h-4 w-4 text-muted-foreground" />
                            )}
                            <span className="sr-only">{showPassword ? "Esconder senha" : "Mostrar senha"}</span>
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-green-500 hover:bg-green-600" disabled={isLoading}>
                  {form.formState.isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Carregando...
                    </>
                  ) : (
                    "Cadastrar"
                  )}
                </Button>
              </form>
            </Form>
  
            <p className="mt-10 text-center text-sm/6 text-gray-500">
              Ainda não tem conta?{' '}
              <a href="/signup" className="font-semibold text-green-600 hover:text-green-500">
                Criar conta
              </a>
            </p>
          </div>
        </div>
      </>
    )
}