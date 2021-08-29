
const paintedSquares = [];
const events = () => {
    for (let x in positions) {
        for (let y in positions[x]) {
            if (positions[x][y]) { //comprueba si hay una ficha en esta casilla
                let square = document.getElementById(`${x}${y}`)
                square.addEventListener("click", () => { //Asigna evento solo para casillas con piezas
                    clearSquare();
                    if (positions[square.id[0]][square.id[1]]) {
                        let currentPiece = positions[square.id[0]][square.id[1]];
                        let positionsList = currentPiece.possiblesMoves();
                        console.log(positionsList)
                        positionsList.forEach((ele) => paintSquare(ele));
                    }
                })
            }
        }
    }
}
//pinta las casillas cuando vas a caminar con una pieza
const paintSquare = (ele) => {
    if (!positions[ele[0]][ele[1]]) {
        document.getElementById(ele).classList.add("casilla--posiblemove");

    } else if (positions[ele[0]][ele[1]]) {
        document.getElementById(ele).classList.add("casilla--killeable");
    }
    paintedSquares.push(ele);
}
//limpia las casillas de paintSquare
const clearSquare = () => {
    paintedSquares.forEach((ele) => {
        document.getElementById(ele).classList.remove("casilla--posiblemove", "casilla--killeable");
    })
    paintedSquares.splice(0);
}