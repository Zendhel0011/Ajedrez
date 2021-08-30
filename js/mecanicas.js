const paintedSquares = [];
//pinta las casillas cuando vas a caminar con una pieza
const paintSquare = (ele) => {
    if (!positions[ele[0]][ele[1]]) {
        document.getElementById(ele).classList.add("casilla--posiblemove");
    } else if (positions[ele[0]][ele[1]]) {
        document.getElementById(ele).classList.add("casilla--killeable");
    }
    document.getElementById(ele).addEventListener("click", move)
    paintedSquares.push(ele);
}
//limpia las casillas de paintSquare
const clearSquare = () => {
    paintedSquares.forEach((ele, index) => {
        if (index !== 0) {
            document.getElementById(ele).classList.remove("casilla--posiblemove", "casilla--killeable");
            document.getElementById(ele).removeEventListener("click", move)
        }
    })
    paintedSquares.splice(0);
}
//Manejador de seleccion de pieza.
function selectPieceHandler() {
    //Asigna evento solo para casillas con piezas
    let currentPiece = positions[this.id[0]][this.id[1]];
    clearSquare(currentPiece);
    let positionsList = currentPiece.possiblesMoves();
    paintedSquares.push(currentPiece);
    positionsList.forEach((ele) => paintSquare(ele));
    console.log(paintedSquares);
}
//Movimiento de pieza
function move() {
    if (positions[this.id[0]][this.id[1]]) {
        positions[this.id[0]][this.id[1]].die();
    }
    let myPiece = paintedSquares[0];
    positions[myPiece.position[0]][myPiece.position[1]] = null;
    document.getElementById(myPiece.position).innerHTML = "";
    document.getElementById(myPiece.position).removeEventListener("click", selectPieceHandler);
    myPiece.position = this.id;
    positions[this.id[0]][this.id[1]] = myPiece;
    myPiece.draw();
    clearSquare();
}
