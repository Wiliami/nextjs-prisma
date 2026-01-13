"use client"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export function toastMessage() {
  return (
    <Button
      variant="secondary"
      onClick={() =>
        toast("Você não tem permissão para acessar essa página.", {
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
    </Button>
  )
}
