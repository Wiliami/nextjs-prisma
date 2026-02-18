import { FormProvider } from "react-hook-form"

var nome = "Gustavo Deschamps" // ASI (Automatic Semicolon Insertion)

function retornarNome() {
    nome = "Filipe Deschamps"
    return nome
}

console.log('Local:', retornarNome()) // Filipe Deschamps
console.log('Global:', nome) // Gustavo Deschamps => Filipe Deschamps