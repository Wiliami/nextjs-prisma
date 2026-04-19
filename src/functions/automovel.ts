class Automovel {
    nome: string

    /* Behind the scenes
    function Automovel(nome) {
       this.nome = nome;
    }
    */  
    constructor(nome: string) {
        this.nome = nome;
    }

    /* Behind the scenes the scenes
    Automovel.prototype.acelerar = function() {
        return `O ${this.nome} acelerou!`;
    }
    */
    acelerar() {
        return `O ${this.nome} acelerou!`;
    }
}

const fiat = new Automovel('Fiat');
console.log(fiat.acelerar());


/* 

Automovel.prototype.acelerar = function() {
    return `O ${this.nome} acelerou!`;
}

*/