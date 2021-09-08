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
        // this.event();
    }

    die = () => {
        document.getElementById(this.position).removeEventListener("click", selectPieceHandler);
        document.getElementById(this.position).innerHTML = "";
        this.position = null;
        this.state = "Dead";
    }

    // event = () => {
    //     let square = document.getElementById(this.position)
    //     square.removeEventListener("click", selectPieceHandler);
    //     square.addEventListener("click", selectPieceHandler);
    // }

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
        let x = this.position[0];
        let y = Number(this.position[1]);
        let moves = [];
        let currentPos;
        let count = 0;
        let direction = 1
        while (direction <= 4) {
            count++
            if (direction === 1) {
                currentPos = y + count
            }
            else if (direction === 2) {
                currentPos = x.charCodeAt() + count
            }
            else if (direction === 3) {
                currentPos = y - count
            }
            else if (direction === 4) {
                currentPos = x.charCodeAt() - count
            }
            if (currentPos <= 8 && currentPos >= 1) {
                if (!positions[x][currentPos] || positions[x][currentPos].color !== this.color) {
                    moves.push(`${x}${currentPos}`);
                }
                if (positions[x][currentPos]) {
                    direction++
                    count = 0
                }
            }
            if (currentPos <= 72 && currentPos >= 65) {
                if (!positions[String.fromCharCode(currentPos)][y] || positions[String.fromCharCode(currentPos)][y].color !== this.color) {
                    moves.push(`${String.fromCharCode(currentPos)}${y}`)
                }
                if (positions[String.fromCharCode(currentPos)][y]) {
                    direction++
                    count = 0
                }
            }
            if ((currentPos > 8 && currentPos < 65) || currentPos < 1 || currentPos > 72) {
                direction++;
                count = 0;
            }
        }
        return moves;
    }

}

class Caballo extends Pieza {
    /* Instancia una pieza "Caballo"
    
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

    //Método que devuelve un array con los posibles movimientos para el caballo en la posicion actual.
    possiblesMoves = () => {
        let x = this.position[0];
        let y = Number(this.position[1]);
        let moves = [];
        let direction = 1;
        let variator = 1;
        let currentPos = { x: x.charCodeAt(), y: y };
        let options = {
            1: [0, 2],
            2: [2, 0],
            3: [0, -2],
            4: [-2, 0]
        }
        while (direction <= 4) {
            if (options[direction][0] === 0) {
                currentPos.x += variator;
                currentPos.y += options[direction][1];
            }
            else {
                currentPos.x += options[direction][0];
                currentPos.y += variator;
            }
            if (currentPos.x <= 72 && currentPos.x >= 65 && currentPos.y <= 8 && currentPos.y >= 1) {
                if (!positions[String.fromCharCode(currentPos.x)][currentPos.y] || positions[String.fromCharCode(currentPos.x)][currentPos.y].color !== this.color) {
                    moves.push(`${String.fromCharCode(currentPos.x)}${currentPos.y}`);
                }
            }
            variator -= 2;
            if (variator < -1) {
                direction++;
                variator = 1;
            }
            currentPos = { x: x.charCodeAt(), y: y };
        }
        return moves;
    }
}

class Reina extends Pieza {
    /* Instancia una pieza "Reina"

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

    possiblesMoves = () => {
        let x = this.position[0];
        let y = Number(this.position[1]);
        let moves = [];
        let direction = 1;
        let currentPos = { x: x.charCodeAt(), y: y };
        let count = 0;
        let options = {
            1: [0, 1],
            2: [1, 1],
            3: [1, 0],
            4: [1, -1],
            5: [0, -1],
            6: [-1, -1],
            7: [-1, 0],
            8: [-1, 1]
        }
        while (direction <= 8) {
            count++;
            currentPos.x += count * options[direction][0];
            currentPos.y += count * options[direction][1];
            if (currentPos.x <= 72 && currentPos.x >= 65 && currentPos.y <= 8 && currentPos.y >= 1) {
                if (!positions[String.fromCharCode(currentPos.x)][currentPos.y] || positions[String.fromCharCode(currentPos.x)][currentPos.y].color !== this.color) {
                    moves.push(`${String.fromCharCode(currentPos.x)}${currentPos.y}`);
                }
                if (positions[String.fromCharCode(currentPos.x)][currentPos.y]) {
                    direction++;
                    count = 0;
                }
            } else {
                direction++;
                count = 0;
            }
            currentPos = { x: x.charCodeAt(), y: y };
        }
        return moves;
    }
}

class Rey extends Pieza {
    /* Instancia una pieza "Rey"

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

    possiblesMoves = () => {
        let x = this.position[0];
        let y = Number(this.position[1]);
        let moves = [];
        let currentPos = { x: x.charCodeAt(), y: y };
        let direction = 1;
        let options = {
            1: [0, 1],
            2: [1, 1],
            3: [1, 0],
            4: [1, -1],
            5: [0, -1],
            6: [-1, -1],
            7: [-1, 0],
            8: [-1, 1]
        }
        while (direction <= 8) {
            currentPos.x += options[direction][0];
            currentPos.y += options[direction][1];
            if (currentPos.x >= 65 && currentPos.x <= 72 && currentPos.y >= 1 && currentPos.y <= 8) {
                if (!positions[String.fromCharCode(currentPos.x)][currentPos.y] || positions[String.fromCharCode(currentPos.x)][currentPos.y].color !== this.color) {
                    moves.push(`${String.fromCharCode(currentPos.x)}${currentPos.y}`);
                }
            }
            currentPos.x = x.charCodeAt();
            currentPos.y = y;
            direction++;
        }
        return moves;
    }
}

class Alfil extends Pieza {
    /* Instancia una pieza "Alfil"

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

    possiblesMoves = () => {
        let x = this.position[0];
        let y = Number(this.position[1]);
        let moves = [];
        let direction = 1;
        let currentPos = { x: x.charCodeAt(), y: y };
        let options = {
            1: [1, 1],
            2: [1, -1],
            3: [-1, -1],
            4: [-1, 1]
        }
        while (direction <= 4) {
            currentPos.x += options[direction][0];
            currentPos.y += options[direction][1];
            if (currentPos.x >= 65 && currentPos.x <= 72 && currentPos.y >= 1 && currentPos.y <= 8) {
                if (!positions[String.fromCharCode(currentPos.x)][currentPos.y] || positions[String.fromCharCode(currentPos.x)][currentPos.y].color !== this.color) {
                    moves.push(`${String.fromCharCode(currentPos.x)}${currentPos.y}`);
                }
                if (positions[String.fromCharCode(currentPos.x)][currentPos.y]) {
                    direction++;
                    currentPos.x = x.charCodeAt();
                    currentPos.y = y;
                }
            }
            else {
                direction++;
                currentPos.x = x.charCodeAt();
                currentPos.y = y;
            }
        }
        return moves;
    }
}
