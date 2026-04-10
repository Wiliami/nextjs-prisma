// Uma fábrica/molde para criar um objeto

class Game {
    static games = [];
    title;
    time;
    status = 'ashasu';

    constructor(title: string, time: number) {
        this.title = title;
        this.time = time; 
        Game.games.push(this);
    }

    start() {
        this.status = 'progress';
    }

    stop() {
        this.status = 'ended';
    }

    delete() {
        Game.games = Game.games.filter(game => game.title !== this.title)
    }
}

const parkour = new Game('Parkour', 130);
const puzzle = new Game('Puzzle', 160);

console.log(Game.games);

parkour.delete()

console.log(Game.games)