//const squares = document.getElementById("game").getElementsByTagName("div");
//const asd = document.getElementById("game").childNodes()
const events = () => {
    for (let i = 8; i >= 1; i--) {
        for (let j = 1; j <= 8; j++) {
            let square = document.getElementById(`${letter[j]}${i}`)
            square.addEventListener("click", () => {
                if (positions[square.id[0]][square.id[1]]) {
                    let currentPiece = positions[square.id[0]][square.id[1]];
                    console.log(square.id)
                    currentPiece.possiblesMoves();
                }
            })
        }
    }
}