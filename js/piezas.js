class Pieza {
    constructor(id, color, position = null, state = "Alive", img = "") {
        this.id = id;
        this.color = color;
        this.position = position;
        this.state = state;
        this.img = img;
    }

}

class Peon extends Pieza {
    constructor(id, color, position = null, state = "Alive", img = `img/pawn_${color}.png`) {
        super(id, color, position, state, img);
        this.description = "Peon ajedrez"
    }

}

class Torre extends Pieza {
    constructor(id, color, position = null, state = "Alive", img = `img/rook_${color}.png`) {
        super(id, color, position, state, img);
        this.description = "Torre ajedrez"
    }

}

class Caballo extends Pieza {
    constructor(id, color, position = null, state = "Alive", img = `img/knight_${color}.png`) {
        super(id, color, position, state, img);
        this.description = "Caballo ajedrez"
    }

}

class Reina extends Pieza {
    constructor(id, color, position = null, state = "Alive", img = `img/queen_${color}.png`) {
        super(id, color, position, state, img);
        this.description = "Reina ajedrez"
    }

}

class Rey extends Pieza {
    constructor(id, color, position = null, state = "Alive", img = `img/king_${color}.png`) {
        super(id, color, position, state, img);
        this.description = "Rey ajedrez"
    }

}

class Alfil extends Pieza {
    constructor(id, color, position = null, state = "Alive", img = `img/bishop_${color}.png`) {
        super(id, color, position, state, img);
        this.description = "Alfil ajedrez"
    }

}