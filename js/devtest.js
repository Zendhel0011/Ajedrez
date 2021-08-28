const createTestPiece = (tipo, color, posicion) => {
    let piece;
    switch (tipo) {
        case "peon":
            piece = new Peon(`testPiece${idNum(1, 1000)}`, color, posicion)
            break;
        case "torre":
            piece = new Torre(`testPiece${idNum(1, 1000)}`, color, posicion)
            break;
        case "alfil":
            piece = new Alfil(`testPiece${idNum(1, 1000)}`, color, posicion)
            break;
        case "rey":
            piece = new Rey(`testPiece${idNum(1, 1000)}`, color, posicion)
            break;
        case "caballo":
            piece = new Caballo(`testPiece${idNum(1, 1000)}`, color, posicion)
            break;
        case "reina":
            piece = new Reina(`testPiece${idNum(1, 1000)}`, color, posicion)
            break;
    }
    positions[posicion[0]][posicion[1]] = piece;
    piece.draw()
    return piece;
}
function idNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}