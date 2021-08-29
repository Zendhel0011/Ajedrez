//Clase abstracta para las piezas
class Pieza {
    constructor(id, color, position = null, state = "Alive") {

        this.id = id;
        this.color = color;
        this.position = position;
        this.state = state;
        this.img = "";
    }
    //Metodo para ubicar la pieza visualmente en el html.
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
//clase para pieza peon
class Peon extends Pieza {
    /* Instancia una pieza "peon"
    
    <id> puede tomar cualquier valor que identidique unicamente a la instancia actual de la pieza.
    <color> 1 para piezas blancas, 0 para piezas negras
    <position> Debe ser la coordenada donde se encuentra la pieza en el tablero Ej: "A2" 
    <state> Es el estado de la pieza "Alive" para piezas vivas (Aun no se hace nada con este atributo)
    */
    constructor(id, color, position = null, state = "Alive") {
        super(id, color, position, state);
        this.description = `Peon ${colores[color]}o ajedrez`;
        this.img = `img/pawn_${color}.png`;
    }

    move = () => {

    }
    //Funcion que devuelve un array con los posibles movimientos para el peón en la posicion actual.
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
    /* Instancia una pieza "torre"

    <id> puede tomar cualquier valor que identidique unicamente a la instancia actual de la pieza.
    <color> 1 para piezas blancas, 0 para piezas negras
    <position> Debe ser la coordenada donde se encuentra la pieza en el tablero Ej: "A2"
    <state> Es el estado de la pieza "Alive" para piezas vivas (Aun no se hace nada con este atributo)
    */
    constructor(id, color, position = null, state = "Alive") {
        super(id, color, position, state);
        this.description = `Torre ${colores[color]}a ajedrez`;
        this.img = `img/rook_${color}.png`;
    }


    //Función que devuelve un array con los posibles movimientos para la torre en la posicion actual.
    possiblesMoves = () => {
        let moves = [];
        let x = this.position[0];
        let y = Number(this.position[1]);
        let currentPos;
        let count = 0;
        let direcciones = 1
        do {
            count++
            if (direcciones === 1) {
                currentPos = y + count
            }
            else if (direcciones === 2) {
                currentPos = x.charCodeAt() + count
            }
            else if (direcciones === 3) {
                currentPos = y - count
            }
            else if (direcciones === 4) {
                currentPos = x.charCodeAt() - count
            }
            if (currentPos <= 8 && currentPos >= 1) {
                if (!positions[x][currentPos] || positions[x][currentPos].color !== this.color) {
                    moves.push(`${x}${currentPos}`);
                }
                if (positions[x][currentPos]) {
                    direcciones++
                    count = 0
                }
            }
            if (currentPos <= 72 && currentPos >= 65) {
                if (!positions[String.fromCharCode(currentPos)][y] || positions[String.fromCharCode(currentPos)][y].color !== this.color) {
                    moves.push(`${String.fromCharCode(currentPos)}${y}`)
                }
                if (positions[String.fromCharCode(currentPos)][y]) {
                    direcciones++
                    count = 0
                }
            }
            if ((currentPos > 8 && currentPos < 65) || currentPos < 1 || currentPos > 72) {
                direcciones++;
                count = 0;
            }
        } while (direcciones <= 4)
        return moves;

    }

}

class Caballo extends Pieza {
    /* Instancia una pieza "caballo"
    
        <id> puede tomar cualquier valor que identidique unicamente a la instancia actual de la pieza.
        <color> 1 para piezas blancas, 0 para piezas negras
        <position> Debe ser la coordenada donde se encuentra la pieza en el tablero Ej: "A2"
        <state> Es el estado de la pieza "Alive" para piezas vivas (Aun no se hace nada con este atributo)
        */
    constructor(id, color, position = null, state = "Alive") {
        super(id, color, position, state);
        this.description = `Caballo ${colores[color]}o ajedrez`;
        this.img = `img/knight_${color}.png`;
    }

    move = () => { }

    //Método que devuelve un array con los posibles movimientos para el caballo en la posicion actual.
    possiblesMoves = () => {

        let x = this.position[0];
        let y = Number(this.position[1]);
        let moves = [];

        let direction = 1;
        let variator = 1;
        let currentPosition = {};
        while (direction <= 4) {
            switch (direction) {
                case 1: currentPosition = { x: x.charCodeAt() + variator, y: y + 2 };
                    break;
                case 2: currentPosition = { x: x.charCodeAt() + 2, y: y + variator };
                    break;
                case 3: currentPosition = { x: x.charCodeAt() + variator, y: y - 2 };
                    break;
                case 4: currentPosition = { x: x.charCodeAt() - 2, y: y + variator };
                    break;
            }
            if (currentPosition.x <= 72 && currentPosition.x >= 65 && currentPosition.y <= 8 && currentPosition.y >= 1) {
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
    /* Instancia una pieza "caballo"

        <id> puede tomar cualquier valor que identidique unicamente a la instancia actual de la pieza.
        <color> 1 para piezas blancas, 0 para piezas negras
        <position> Debe ser la coordenada donde se encuentra la pieza en el tablero Ej: "A2"
        <state> Es el estado de la pieza "Alive" para piezas vivas (Aun no se hace nada con este atributo)
        */
    constructor(id, color, position = null, state = "Alive") {
        super(id, color, position, state);
        this.description = `Reina ${colores[color]}a ajedrez`;
        this.img = `img/queen_${color}.png`;
    }

}

class Rey extends Pieza {
    /* Instancia una pieza "caballo"

        <id> puede tomar cualquier valor que identidique unicamente a la instancia actual de la pieza.
        <color> 1 para piezas blancas, 0 para piezas negras
        <position> Debe ser la coordenada donde se encuentra la pieza en el tablero Ej: "A2"
        <state> Es el estado de la pieza "Alive" para piezas vivas (Aun no se hace nada con este atributo)
        */
    constructor(id, color, position = null, state = "Alive") {
        super(id, color, position, state);
        this.description = `Rey ${colores[color]}o ajedrez`;
        this.img = `img/king_${color}.png`;
    }

}

class Alfil extends Pieza {
    /* Instancia una pieza "caballo"

        <id> puede tomar cualquier valor que identidique unicamente a la instancia actual de la pieza.
        <color> 1 para piezas blancas, 0 para piezas negras
        <position> Debe ser la coordenada donde se encuentra la pieza en el tablero Ej: "A2"
        <state> Es el estado de la pieza "Alive" para piezas vivas (Aun no se hace nada con este atributo)
        */
    constructor(id, color, position = null, state = "Alive") {
        super(id, color, position, state);
        this.description = `Alfil ${colores[color]}o ajedrez`;
        this.img = `img/bishop_${color}.png`;
    }

}