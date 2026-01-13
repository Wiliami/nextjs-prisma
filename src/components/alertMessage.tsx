import { AlertCircleIcon } from "lucide-react"
import { Alert, AlertTitle } from "@/components/ui/alert"

export function AlertMessage() {
  return (
    <div className="grid w-full max-w-xl items-start gap-4">
      <Alert variant="destructive" className="bg-red-400 text-white">
        <AlertCircleIcon />
        <AlertTitle>Você não tem permissão para acessar essa página.</AlertTitle>
      </Alert>
    </div>
  )
}
