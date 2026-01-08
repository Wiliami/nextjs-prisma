"use client"

import { authClient } from '@/lib/auth-client'
import { SiginForm } from '@/components/signin-form';
import { redirect } from 'next/navigation'

export default function SignInPage() {
    const { data } = authClient.useSession();

    if(data?.session) {
        redirect('/dashboard')
    }
    
    return <SiginForm />
}