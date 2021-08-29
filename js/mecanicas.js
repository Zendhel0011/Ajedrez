//const squares = document.getElementById("game").getElementsByTagName("div");
//const asd = document.getElementById("game").childNodes()
let paintedSquares = [];
const events = () => {
    //Cambiar para añadir el evento solo a las casillas que contengan piezas.
    for (let i = 8; i >= 1; i--) {
        for (let j = 1; j <= 8; j++) {
            let square = document.getElementById(`${letter[j]}${i}`)
            square.addEventListener("click", () => {
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
//pinta las casillas cuando vas a caminar con una pieza
const paintSquare = (ele) => {
    if (!positions[ele[0]][ele[1]]) {
        document.getElementById(ele).classList.add("casilla--posiblemove");

    } else if (positions[ele[0]][ele[1]]) {
        document.getElementById(ele).classList.add("casilla--killeable");
    }
    paintedSquares.push(ele)
}
//limpia las casillas de paintSquare
const clearSquare = () => {
    paintedSquares.forEach((ele) => {
        document.getElementById(ele).classList.remove("casilla--posiblemove", "casilla--killeable")
    })
}