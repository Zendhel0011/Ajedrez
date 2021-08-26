document.addEventListener("DOMContentLoaded", () => {
    const game = document.getElementById("game")
    let color = true;
    let casillas = `<div class="casilla" id=""></div>`
    let letter = {
        1: "A",
        2: "B",
        3: "C",
        4: "D",
        5: "E",
        6: "F",
        7: "G",
        8: "H"
    }
    for (let i = 8; i >= 1; i--) {
        for (let j = 1; j <= 8; j++) {
            if (!color) {
                casillas = `<div class="casilla casilla--black" id="${letter[j]}${i}"></div>`
            } else {
                casillas = `<div class="casilla casilla--white" id="${letter[j]}${i}"></div>`
            }
            game.innerHTML += casillas
            color = !color
        }
        color = !color
    }
})


function createPiece() {
    let white_pieces = [];
    let black_pieces = [];
    for (let i = 0; i <= 7; i++) {
        white_pieces.push(new Peon(`Wpawn${i}`, 1));
        black_pieces.push(new Peon(`Bpawn${i}`, 0));
    }
    for (let i = 0; i <= 1; i++) {
        white_pieces.push(new Caballo(`Wknight${i}`, 1));
        white_pieces.push(new Torre(`Wrook${i}`, 1));
        white_pieces.push(new Alfil(`Wbishop${i}`, 1));
        black_pieces.push(new Caballo(`Bknight${i}`, 0));
        black_pieces.push(new Torre(`Brook${i}`, 1));
        black_pieces.push(new Alfil(`Bbishop${i}`, 1));
    }
    white_pieces.push(new Rey(`Wking`, 1))
    white_pieces.push(new Reina(`Wqueen`, 1))
    black_pieces.push(new Rey(`Bking`, 0))
    black_pieces.push(new Reina(`Bqueen`, 0))

    return [white_pieces, black_pieces];
}

function startGame() {

}