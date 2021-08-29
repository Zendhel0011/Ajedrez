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
        this.description = `Peon ${colores[color]}o ajedrez`;
        this.img = `img/pawn_${color}.png`;
    }

    move = () => {

    }

    possiblesMoves = () => {
        let x = this.position[0]
        let y = Number(this.position[1])
        let moves = [];
        let mcolor = {
            0: -1,
            1: 1
        }
        if (x !== "H") {
            if (positions[String.fromCharCode(x.charCodeAt() + 1)][y + mcolor[this.color]] != null && positions[String.fromCharCode(x.charCodeAt() + 1)][y + mcolor[this.color]].color != this.color) {
                moves.push(`${String.fromCharCode(x.charCodeAt() + 1)}${y + mcolor[this.color]}`)
            }
        }
        if (x !== "A") {
            if (positions[String.fromCharCode(x.charCodeAt() - 1)][y + mcolor[this.color]] != null && positions[String.fromCharCode(x.charCodeAt() - 1)][y + mcolor[this.color]].color != this.color) {
                moves.push(`${String.fromCharCode(x.charCodeAt() - 1)}${y + mcolor[this.color]}`)
            }
        }
        if (y === 7 && this.color === 0 && positions[x][y - 1] === null) {
            if (positions[x][y - 2] == null) {
                moves.push(`${x}${y - 1}`, `${x}${y - 2}`);
            } else {
                moves.push(`${x}${y - 1}`);
            }
        }
        if (y === 2 && this.color === 1 && positions[x][y + 1] === null) {
            if (positions[x][y + 2] === null) {
                moves.push(`${x}${y + 1}`, `${x}${y + 2}`)
            } else {
                moves.push(`${x}${y + 1}`);
            }
        }
        if (y !== 7 && this.color === 0 && positions[x][y - 1] === null) {
            moves.push(`${x}${y - 1}`);
        }
        if (y !== 2 && this.color === 1 && positions[x][y + 1] === null) {
            moves.push(`${x}${y + 1}`);
        }
        return moves
    }


}

class Torre extends Pieza {
    constructor(id, color, position = null, state = "Alive") {
        super(id, color, position, state);
        this.description = `Torre ${colores[color]}a ajedrez`;
        this.img = `img/rook_${color}.png`;
    }

}

class Caballo extends Pieza {
    constructor(id, color, position = null, state = "Alive") {
        super(id, color, position, state);
        this.description = `Caballo ${colores[color]}o ajedrez`;
        this.img = `img/knight_${color}.png`;
    }

    move = () => {}

    possiblesMoves = () => {
        let x = this.position[0];
        let y = Number(this.position[1]);
        let moves = [];

        let direction = 1;
        let variator = 1;
        let currentPosition = {};
        while(direction <= 4){
            switch(direction) {
                case 1: currentPosition = {x: x.charCodeAt() + variator, y: y + 2};
                break;
                case 2: currentPosition = {x: x.charCodeAt() + 2, y: y + variator};
                break;
                case 3: currentPosition = {x: x.charCodeAt() + variator, y: y - 2};
                break;
                case 4: currentPosition = {x: x.charCodeAt() - 2, y: y + variator};
                break;
            }
            if (currentPosition.x <= 72 && currentPosition.x >= 65 && currentPosition.y <= 8 && currentPosition.y >= 1){
                if (!positions[String.fromCharCode(currentPosition.x)][currentPosition.y] || positions[String.fromCharCode(currentPosition.x)][currentPosition.y].color !== this.color) {
                    moves.push(`${String.fromCharCode(currentPosition.x)}${currentPosition.y}`);
                }
            }
            variator -= 2;
            if (variator < -1) {
            direction++;
            variator = 1;
            }
        }
        return moves;
    }   
}

class Reina extends Pieza {
    constructor(id, color, position = null, state = "Alive") {
        super(id, color, position, state);
        this.description = `Reina ${colores[color]}a ajedrez`;
        this.img = `img/queen_${color}.png`;
    }

}

class Rey extends Pieza {
    constructor(id, color, position = null, state = "Alive") {
        super(id, color, position, state);
        this.description = `Rey ${colores[color]}o ajedrez`;
        this.img = `img/king_${color}.png`;
    }

}

class Alfil extends Pieza {
    constructor(id, color, position = null, state = "Alive") {
        super(id, color, position, state);
        this.description = `Alfil ${colores[color]}o ajedrez`;
        this.img = `img/bishop_${color}.png`;
    }

}