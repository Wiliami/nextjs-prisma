// class UserNotFoundError {
//     name: string;

//     constructor(name: string) {
//         this.name = name;
//     }

//     exists() {
//         if(this.name === 'Teste') {
//             return 'Usuário já está cadastrado!';
//         } else {
//             return;
//         }
//     }
// }


// const existinUser = new UserNotFoundError('Wiliamis');
// console.log(existinUser.exists)


function myFunc() {
    const user = {
        id: 1,
        name: 'Wiliamis',
        email: 'wiliamis.dev@gmail.com',
        bio: "I'm Full Stack developer JS", 
        getInfoUser() {  
            const { name, bio} = this;          
            return `${bio}`;
        },
        printoBio() {
             const bio = this.getInfoUser()
             console.log(`Bio de ${this.name}: ${bio}`)
        }
    }

    console.log(user.printoBio());
    
}

myFunc();

/* 
    Quando a gente declara e invoca uma função tracional
    sem inserir ela como método de um objeto o this
    referencia o objeto window

    No navegador: window
    No NodeJS: global ({})

    Quando a gente usa o this dentro de um método, 
    ele referencia o próprio objeto que ele foi declarado
*/ 

