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
            positions[letter[j]] = [];
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

    return {white : white_pieces, black : black_pieces};
}

let pieces = createPieces();

const startGame = () => {

    //Se posicionan las piezas blancas
    let colors = {
        1 : "white",
        2 : "white",
        7 : "black",
        8 : "black"
    };

    let initialPieces = {
        1 : ["rooks", 0], 
        2 : ["knights", 0], 
        3 : ["bishops", 0], 
        4 : "queen", 
        5 : "king", 
        6 : ["bishops", 1], 
        7 : ["knights", 1], 
        8 : ["rooks", 1]
    };
    
    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= 8; j++) {
            if (i === 1 || i === 8) {
                if (j !== 4 && j !== 5) {
                    positions[letter[j]].push(pieces[`${colors[i]}`][initialPieces[j][0]][initialPieces[j][1]].id);
                }
                else{
                    positions[letter[j]].push(pieces[`${colors[i]}`][initialPieces[j]].id);
                }
            }
            else if (i === 2 || i === 7) {
                positions[letter[j]].push(pieces[`${colors[i]}`].pawns[j - 1].id);
            }
            else {
                positions[letter[j]].push(null);
            }
        }
    }

    /*pieces.white.rooks[0].position = "A1";
    positions['A'].push = pieces.white.rooks[0].id;

    pieces.white.knights[0].position = "B1";
    positions.B1 = pieces.white.knights[0].id;

    pieces.white.bishops[0].position = "C1";
    positions.C1 = pieces.white.bishops[0].id;

    pieces.white.queen.position = "D1";
    positions.D1 = pieces.white.queen.id;

    pieces.white.king.position = "E1";
    positions.E1 = pieces.white.king.id;

    pieces.white.bishops[1].position = "F1";
    positions.F1 = pieces.white.bishops[1].id;

    pieces.white.knights[1].position = "G1";
    positions.G1 = pieces.white.knights[1].id;

    pieces.white.rooks[1].position = "H1";
    positions.H1 = pieces.white.rooks[1].id;

    //Se posicionan las piezas negras

    pieces.black.rooks[0].position = "A8";
    positions.A8 = pieces.black.rooks[0].id;

    pieces.black.knights[0].position = "B8";
    positions.B8 = pieces.black.knights[0].id;

    pieces.black.bishops[0].position = "C8";
    positions.C8 = pieces.black.bishops[0].id;

    pieces.black.queen.position = "D8";
    positions.D8 = pieces.black.queen.id;

    pieces.black.king.position = "E8";
    positions.E8 = pieces.black.king.id;

    pieces.black.bishops[1].position = "F8";
    positions.F8 = pieces.black.bishops[1].id;

    pieces.black.knights[1].position = "G8";
    positions.G8 = pieces.black.knights[1].id;

    pieces.black.rooks[1].position = "H8";
    positions.H8 = pieces.black.rooks[1].id;

    //Se posicionan los peones

    for (let i = 1; i <= 8; i++) {
        pieces.white.pawns[i-1].position = `${letter[i]}2`;
        positions[`${letter[i]}2`] = pieces.white.pawns[i-1].id;

        pieces.white.pawns[i-1].position = `${letter[i]}7`;
        positions[`${letter[i]}7`] = pieces.black.pawns[i-1].id;
    }*/
    
    //Se dibujan las piezas en la fase inicial

    for (i=1; i<=8; i++) {
        draw(`${letter[i]}8`);
        draw(`${letter[i]}7`);
        draw(`${letter[i]}2`);
        draw(`${letter[i]}1`);
    }
}

const draw = (position) => {
    let id = positions[position[0]][parseInt(position[1]) - 1];
    let color = "";
    let imagen;

    //Se descompone la id de la pieza en: color, tipo de pieza y numero de pieza (si tiene)

    if (id[0] === 'W') {
        color = "white";
    }
    else {
        color = "black";
    }
    if (/[0-7]/.test(id[id.length-1])) {
        let type = id.substr(1, id.length-2);
        let number = id[id.length-1]
        imagen = pieces[color][`${type}s`][number].img;
    }
    else {
        let type = id.substr(1, id.length-1);
        imagen = pieces[color][type].img;
    }
    document.getElementById(position).innerHTML = `
    <img src=${imagen} width=100%>
    `;
}