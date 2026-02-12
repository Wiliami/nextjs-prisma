import { z } from 'zod'
// var nome = 'Wiliamis'
const nome = 'Wiliamis' 

console.log(nome)
const userSchema = z.object({
    id: z.string().transform(id => Number(id)),
    name: z.string(),
    email: z.email()
})

const user = {
    id: 1,
    name: 'Wiliamis',
    email: 'wiliamis.dev@gmail.com'
}

type userValues = z.infer<typeof userSchema>

type userValuesInput = z.input<typeof userSchema>
type userValuesOutput = z.output<typeof userSchema>

function createUserInDatabase(user: userValues) {}
createUserInDatabase(user)



// const nome = 'Wiliamis Oliveira'

// Scope chain
 function retornarNome() {
    return nome; // Scopo local 
 }

//  console.log(retornarNome())


//  var nome;
 // Escopo de função
 // Redeclação
 // Hoisting

//  function testDeclaration() {
//     console.log('Teste function declaration')
//  }

//  searchUsers() // somente a variável testExpression sofre hoisting
//  var testExpression = function() {
//     console.log('Function expresssion') // somente a variável testExpression sofre hoisting
//  }