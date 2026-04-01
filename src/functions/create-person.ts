// Design Pattern - Factory
function criaObjeto() {
    let objeto = {}

    return objeto;
}

let pessoaA = criaObjeto(); // {} objeto em branco
let pessoaB = criaObjeto (); // {} objeto em branco 

pessoaA.name = "Wiliamis"; // Wiliamis  
pessoaB.name = "Filipe" // Filipe


function fabricarPessoa(nome: string, sobrenome: string) {
    let pessoa = {};

    pessoa.nome = nome;
    pessoa.sobrenome = sobrenome;


    function nomeCompleto() {
        return `${pessoa.nome} ${pessoa.sobrenome}`;
    }

    pessoa.nomeCompleto = nomeCompleto;

    return pessoa;
}

pessoaA = fabricarPessoa('Wiliamis', 'Oliveira');
pessoaB = fabricarPessoa('Filipe', 'Deschamps');