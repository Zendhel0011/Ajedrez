class Pieza {
    constructor(id, color, position = null, state = "Alive") {

        this.id = id;
        this.color = color;
        this.position = position;
        this.state = state;
        this.img = "";
    }

    draw = () => {
        document.getElementById(this.position).innerHTML = `
        <img src=${this.img} alt="${this.description}">
        `;
    }

    possiblesMoves = () => {
        console.log("Esta no se mueve")
    }
}

const colores = {
    0: "negr",
    1: "blanc"
}

class Peon extends Pieza {
    constructor(id, color, position = null, state = "Alive") {
        super(id, color, position, state);
        this.description = `Peon ${colores[color]}o ajedrez`
        this.img = `img/pawn_${color}.png`
    }

    move = () => {

    }

    possiblesMoves = () => {
        if (this.color === 0 && Object.values(letter).indexOf(this.position[0]) != -1) {
            let x = this.position[0]
            let y = Number(this.position[1])
            let moves = [];
            if (x !== "H") {
                if (positions[String.fromCharCode(x.charCodeAt() + 1)][y - 1] != null && positions[String.fromCharCode(x.charCodeAt() + 1)][y - 1].color != this.color) {
                    moves.push(`${String.fromCharCode(x.charCodeAt() + 1)}${y - 1}`)
                }
            }
            if (x !== "A") {
                if (positions[String.fromCharCode(x.charCodeAt() - 1)][y - 1] != null && positions[String.fromCharCode(x.charCodeAt() - 1)][y - 1].color != this.color) {
                    moves.push(`${String.fromCharCode(x.charCodeAt() - 1)}${y - 1}`)
                }
            }


            if (y === 7) {
                console.log(positions[x][y - 1], positions[x][y - 2])
            }
        }
    }

}

class Torre extends Pieza {
    constructor(id, color, position = null, state = "Alive") {
        super(id, color, position, state);
        this.description = `Torre ${colores[color]}a ajedrez`
        this.img = `img/rook_${color}.png`
    }

}

class Caballo extends Pieza {
    constructor(id, color, position = null, state = "Alive") {
        super(id, color, position, state);
        this.description = `Caballo ${colores[color]}o ajedrez`
        this.img = `img/knight_${color}.png`
    }

}

class Reina extends Pieza {
    constructor(id, color, position = null, state = "Alive") {
        super(id, color, position, state);
        this.description = `Reina ${colores[color]}a ajedrez`
        this.img = `img/queen_${color}.png`
    }

}

class Rey extends Pieza {
    constructor(id, color, position = null, state = "Alive") {
        super(id, color, position, state);
        this.description = `Rey ${colores[color]}o ajedrez`
        this.img = `img/king_${color}.png`
    }

}

class Alfil extends Pieza {
    constructor(id, color, position = null, state = "Alive") {
        super(id, color, position, state);
        this.description = `Alfil ${colores[color]}o ajedrez`
        this.img = `img/bishop_${color}.png`
    }

}