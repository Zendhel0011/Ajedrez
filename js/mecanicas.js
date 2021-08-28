//const squares = document.getElementById("game").getElementsByTagName("div");

const events = () => {
    for (let i = 8; i >= 1; i--) {
        for (let j = 1; j <= 8; j++) {
            let square = document.getElementById(`${letter[j]}${i}`)
            square.addEventListener("click", () => {
                let currentPiece = positions[square.id[0]][square.id[1]];
                console.log(square.id)
                currentPiece.possiblesMoves();
            })
        }
    }
}