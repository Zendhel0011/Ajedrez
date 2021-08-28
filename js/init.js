//Saque esto para utilizarlo tambien en otras funciones

const letter = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
    6: "F",
    7: "G",
    8: "H"
};
const rletter = {
    "A": 1,
    "B": 2,
    "C": 3,
    "D": 4,
    "E": 5,
    "F": 6,
    "G": 7,
    "H": 8
}

const positions = {};

document.addEventListener("DOMContentLoaded", () => {
    const game = document.getElementById("game");
    let color = true;
    let casillas = `<div class="casilla" id=""></div>`;
    for (let i = 8; i >= 1; i--) {
        for (let j = 1; j <= 8; j++) {
            if (!color) {
                casillas = `<div class="casilla casilla--black" id="${letter[j]}${i}"></div>`;
            } else {
                casillas = `<div class="casilla casilla--white" id="${letter[j]}${i}"></div>`;
            }
            game.innerHTML += casillas;
            color = !color;
            positions[letter[j]] = {};
        }
        color = !color;
    }

});

//Crea las piezas y las ordena en categorias

const createPieces = () => {
    let white_pieces = {};
    let black_pieces = {};

    white_pieces.pawns = [];
    black_pieces.pawns = [];

    for (let i = 0; i <= 7; i++) {
        white_pieces.pawns.push(new Peon(`Wpawn${i}`, 1));
        black_pieces.pawns.push(new Peon(`Bpawn${i}`, 0));
    }

    white_pieces.knights = [];
    white_pieces.rooks = [];
    white_pieces.bishops = [];
    black_pieces.knights = [];
    black_pieces.rooks = [];
    black_pieces.bishops = [];

    for (let i = 0; i <= 1; i++) {
        white_pieces.knights.push(new Caballo(`Wknight${i}`, 1));
        white_pieces.rooks.push(new Torre(`Wrook${i}`, 1));
        white_pieces.bishops.push(new Alfil(`Wbishop${i}`, 1));
        black_pieces.knights.push(new Caballo(`Bknight${i}`, 0));
        black_pieces.rooks.push(new Torre(`Brook${i}`, 0));
        black_pieces.bishops.push(new Alfil(`Bbishop${i}`, 0));
    }

    white_pieces.king = new Rey(`Wking`, 1);
    white_pieces.queen = new Reina(`Wqueen`, 1);
    black_pieces.king = new Rey(`Bking`, 0);
    black_pieces.queen = new Reina(`Bqueen`, 0);

    return { white: white_pieces, black: black_pieces };
}

function positionePieces(pieces) {
    //Colores iniciales segun fila
    let colors = {
        1: "white",
        2: "white",
        7: "black",
        8: "black"
    };

    //Piezas iniciales en fila 1 y 8
    let initialPieces = {
        1: ["rooks", 0],
        2: ["knights", 0],
        3: ["bishops", 0],
        4: "queen",
        5: "king",
        6: ["bishops", 1],
        7: ["knights", 1],
        8: ["rooks", 1]
    };
    //Se asigna a cada casilla una pieza, si no le toca tener una pieza al inicio, se queda con contenido null
    //y tambien se asigna a cada pieza su posicion inicial de la forma "(letra)(numero)"
    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= 8; j++) {
            //Se asignan las piezas grandes
            if (i === 1 || i === 8) {
                //Si la pieza no es el rey ni la reina, tiene un numero de pieza
                if (j !== 4 && j !== 5) {
                    pieces[`${colors[i]}`][initialPieces[j][0]][initialPieces[j][1]].position = `${letter[j]}${i}`;
                    positions[letter[j]][i] = pieces[`${colors[i]}`][initialPieces[j][0]][initialPieces[j][1]];
                }
                //Si si es rey o reina, no tiene numero
                else {
                    pieces[`${colors[i]}`][initialPieces[j]].position = `${letter[j]}${i}`;
                    positions[letter[j]][i] = pieces[`${colors[i]}`][initialPieces[j]];
                }
            }
            //Se asignan los peones
            else if (i === 2 || i === 7) {
                pieces[`${colors[i]}`].pawns[j - 1].position = `${letter[j]}${i}`;
                positions[letter[j]][i] = pieces[`${colors[i]}`].pawns[j - 1];
            }
            //Se dejan los espacios vacios
            else {
                positions[letter[j]][i] = null;
            }
        }
    }
}

const startGame = () => {
    let pieces = createPieces();
    positionePieces(pieces);
    events()

    //Se dibujan las piezas en la fase inicial
    for (i = 1; i <= 8; i++) {
        positions[letter[i]][8].draw()
        positions[letter[i]][7].draw()
        positions[letter[i]][2].draw()
        positions[letter[i]][1].draw()
    }
}