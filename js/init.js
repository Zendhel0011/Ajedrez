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
            if (color) {
                casillas = `<div class="casilla casilla--black" id="${letter[j]}${i}"></div>`
            } else {
                casillas = `<div class="casilla casilla--white" id="${letter[j]}${i}"></div>`
            }
            game.innerHTML += casillas
            color = !color
        }
    }
})