/* Esquema Tático: 3-5-2 */
class EsquemaTatico {
    soccerPlayer;
    position;
    actions: string;

    constructor(soccerPlayer: string, position: string) {
        this.soccerPlayer = soccerPlayer;
        this.position = position;
    }

    posicionar() {
        return `A posição do ${this.soccerPlayer} no esquema tático é ${this.position}.`;
    }

    mover() {
        return `O jogador ${this.soccerPlayer} precisa ${this.actions}.`;
    }

    marcar() {

    }

}


const neymar = new EsquemaTatico('Neymar', 'Meio-campista');
// console.log(neymar);
