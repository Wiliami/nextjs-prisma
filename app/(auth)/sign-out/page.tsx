import router from 'next/router';
import { authClient } from '../../lib/auth-client'

export async function SignOut() {
    await authClient.signOut({
    fetchOptions: {
        onSuccess: () => {
        router.push("/sign-in"); // redirect to login page
        },
    },
    });
}

