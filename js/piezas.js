class Pieza {
    constructor(id, color, position = null, state = "Alive", img = "") {
        this.id = id;
        this.color = color;
        this.position = position;
        this.state = state;
        this.img = img;
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
    constructor(id, color, position = null, state = "Alive", img = `img/pawn_${color}.png`) {
        super(id, color, position, state, img);
        this.description = `Peon ${colores[color]}o ajedrez`
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
    constructor(id, color, position = null, state = "Alive", img = `img/rook_${color}.png`) {
        super(id, color, position, state, img);
        this.description = `Torre ${colores[color]}a ajedrez`
    }

}

class Caballo extends Pieza {
    constructor(id, color, position = null, state = "Alive", img = `img/knight_${color}.png`) {
        super(id, color, position, state, img);
        this.description = `Caballo ${colores[color]}o ajedrez`
    }

}

class Reina extends Pieza {
    constructor(id, color, position = null, state = "Alive", img = `img/queen_${color}.png`) {
        super(id, color, position, state, img);
        this.description = `Reina ${colores[color]}a ajedrez`
    }

}

class Rey extends Pieza {
    constructor(id, color, position = null, state = "Alive", img = `img/king_${color}.png`) {
        super(id, color, position, state, img);
        this.description = `Rey ${colores[color]}o ajedrez`
    }

}

class Alfil extends Pieza {
    constructor(id, color, position = null, state = "Alive", img = `img/bishop_${color}.png`) {
        super(id, color, position, state, img);
        this.description = `Alfil ${colores[color]}o ajedrez`
    }

}