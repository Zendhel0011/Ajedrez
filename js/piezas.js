class Pieza {
    constructor(id, color, position = null, state = "Alive", img = "") {
        this.id = id;
        this.color = color;
        this.position = position;
        this.state = state;
        this.img = img;
    }

    draw() {
        document.getElementById(this.position).innerHTML = `
        <img src=${this.img} alt="${this.description}">
        `;
    }
}

const colores = {
    0: "negr",
    1: "blanc"
}

class Peon extends Pieza {
    constructor(id, color, position = null, state = "Alive", img = `img/pawn_${color}.png`) {
        super(id, color, position, state, img);
        this.description = `Peon ${colores[color]}o ajedrez`
    }

}

class Torre extends Pieza {
    constructor(id, color, position = null, state = "Alive", img = `img/rook_${color}.png`) {
        super(id, color, position, state, img);
        this.description = `Torre ${colores[color]}a ajedrez`
    }

}

class Caballo extends Pieza {
    constructor(id, color, position = null, state = "Alive", img = `img/knight_${color}.png`) {
        super(id, color, position, state, img);
        this.description = `Caballo ${colores[color]}o ajedrez`
    }

}

class Reina extends Pieza {
    constructor(id, color, position = null, state = "Alive", img = `img/queen_${color}.png`) {
        super(id, color, position, state, img);
        this.description = `Reina ${colores[color]}a ajedrez`
    }

}

class Rey extends Pieza {
    constructor(id, color, position = null, state = "Alive", img = `img/king_${color}.png`) {
        super(id, color, position, state, img);
        this.description = `Rey ${colores[color]}o ajedrez`
    }

}

class Alfil extends Pieza {
    constructor(id, color, position = null, state = "Alive", img = `img/bishop_${color}.png`) {
        super(id, color, position, state, img);
        this.description = `Alfil ${colores[color]}o ajedrez`
    }

}