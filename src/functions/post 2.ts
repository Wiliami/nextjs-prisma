/* Injeção de dependência */

interface INotificator {
    enviar: () => void
}

class Notificator {
    enviar() {
        console.log('-> Notificando usuários')
    }

    handleMessageNotification() {
        console.log('-> Manipulador para mensagens de notificação!')
    }
}


class Post {   
    constructor(public titulo: string) {
        console.log('-> Novo Post: ' + titulo)
    }

    publicar() {
        console.log('-> Publicando Post!');
        let notificador = new Notificator();
        notificador.enviar()
    }
}

class Comentario {
    criar() {
        console.log('-> Criando comentário!')
        let notificador = new Notificator()
        notificador.enviar();
    }
}


let novoPost = new Post('Aprendendo injeção de dependência!')
novoPost.publicar()





/*  Imperativa */  
/* Faz um for, depois um if e adiciona no array aux e depois retorna o array /*
/* 
const getOlderStudents = (students) => {
    let aux = [];
    for(student of students) {
        if(student >= 18) {
            aux.push(student)
        }
    }

    return aux;
}
*/


/* Declarativa */
/* Filtra os estudantes maiores de 18 anos */
// const getOlderStudents = (students) => students.filter(student => student >= 18) 
const getOlderStudent = (students: any[]) => {
    students.filter(student => {
        return student >= 18;
    })

    return students
}



function soma(a: number, b: string) {
    return a + b;
}


class Mathlib {
    sum(a: number, b: number) {
        return a + b;
    }
}


// const sum = new Mathlib()
// console.log(sum.sum(1, 2));


class Retangulo {
    altura
    largura
    constructor(altura: number, largura: number) {
        this.altura = altura
        this.largura = largura
    }
}

// const retangulo = new Retangulo(1, 1)
// console.log(retangulo)



class Utils {
    static sum(a: number, b: number) {
        return a + b;
    }

    static formatName(name: string) {
        return name.trim().toUpperCase();
    }
}

console.log(Utils.sum(1, 2));
console.log(Utils.formatName('Wiliamis'))




var nome = 'Wiliamis', idade = 28;

function imprimeDados() {
    console.log(nome + idade);
}

imprimeDados();

/* Closures: funções que lembram do seu ambiente léxico(escopo) de criação */
var valor1 = 'Valor 1';

function f1() {
    var valor2 = 'Valor 2';

    function f2() {
        var valor3 = 'Valor 3';

        function f3() {
            var valor4 = 'Valor 4';
        }
    }
}

function factoryCreateUser(name: string, age: string) {
    let counter = 0;


    return {
        // methods and properties
    }
}




// function Animal(nome: string) {
//     this.nome = nome;
// }


// Animal.prototype.falar = function() {
//     return this.nome + ' está falando.';
// }