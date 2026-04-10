export class Person {
    #name;
    #age;
    #money = 0;
    
    // inicializar propriedades, configurações iniciais (uso de construtor)
    constructor(name: string, age: number) {
        this.#name = name;
        this.#age = age;
    }

    intro() {
        return `Meu nome é ${this.#name} e a minha idade é ${this.#age};`
    }

    getName() {
        return this.#name
    }

    getAge() {
        return this.#age
    }

    getMoney() {
        return this.#money
    }

    setMoney(value: number) {
        this.#money = value
    }

    incrementMoney(value: number) {
        this.setMoney(this.#money + value)
    }
}

const person = new Person('Wiliamis', 28);
person.incrementMoney(200)
person.incrementMoney(100)
person.incrementMoney(50)


// console.log(person.getMoney());
