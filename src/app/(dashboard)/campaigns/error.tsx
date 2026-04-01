'use client'

export default function Error({ error, unstable_retry }: { 
    error: Error & { digest?: string }
    unstable_retry: () => void;
}) {
    
    return (
        <div>
            <h2>Ops! Algo deu errado.</h2>
            <button
                onClick={() => unstable_retry()}
            >
                Tentar novamente.
            </button>
        </div>
    )
}