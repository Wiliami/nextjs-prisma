// Design Pattern - Factory
interface IPerson {
    name?: string
    lastName?: string
    email?: string
    age?: number
    nickName?: string
    fullName?: () => void
}

function criaObjeto(name: string, lastName: string) {
    let objeto: IPerson = {};

    objeto.name = name;
    objeto.lastName = lastName;

    const fullName = function() {
        return `Nome completo: ${objeto.name} ${objeto.lastName}.`     
    }

    objeto.fullName = fullName;

    return objeto;
}

function factoryPerson(name: string, lastName: string) {
    let person: IPerson = {};

    person.name = name;
    person.lastName = lastName;

    function fullName() {
        return `Nome completo: ${person.name} ${person.lastName}.`; 
    }

    person.fullName = fullName;

    return person;
}

function fabricarPessoa(nome: string, sobrenome: string) {
    let pessoa: IPerson = {};

    pessoa.name = nome;
    pessoa.lastName = sobrenome;


    function nomeCompleto() {
        return `${pessoa.name} ${pessoa.lastName}`;
    }

    pessoa.fullName = nomeCompleto;

    return pessoa;
}

let pessoaA: IPerson = criaObjeto('Teste1', 'teste1@gmail.com'); // {} objeto em branco
let pessoaB: IPerson = criaObjeto ('Teste2', 'teste2@gmail.com'); // {} objeto em branco 

pessoaA.name = "Wiliamis"; // Wiliamis  
pessoaA.email = "dev.enzo@gmail.com"
pessoaB.name = "Filipe" // Filipe


pessoaA = fabricarPessoa('Wiliamis', 'Oliveira');
pessoaB = fabricarPessoa('Filipe', 'Deschamps');