// class Animal {
//     name;

//     constructor(name: string) {
//         this.name = name;
//     }

//     emitirSom() {
//         return `Olá, meu nome é ${this.name}.`;
//     }
// }


function Animal(name: string) {
    console.log(this.name = name);
}

Animal.prototype.emitirSom = function() {
    console.log(`Olá, meu nome é${this.name}`)
}
