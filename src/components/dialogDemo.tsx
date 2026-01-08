import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DialogDemo() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline" className="bg-emerald-500">Atualizar vídeo</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Editar vídeo</DialogTitle>
            <DialogDescription>
              Edite as informações do vídeo
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="title">Título</Label>
              <Input id="title" name="title" defaultValue="Título 1" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">Descrição</Label>
              <Input id="description" name="description" defaultValue="Meu primeiro vídeo" />
            </div>
             <div className="grid gap-3">
              <Label htmlFor="description">Duração</Label>
              <Input id="duration" name="duration" defaultValue="1:20" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <Button type="submit">Salvar</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
