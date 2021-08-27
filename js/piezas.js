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
    }

}

class Torre extends Pieza {
    constructor(id, color, position = null, state = "Alive", img = `img/rook_${color}.png`) {
        super(id, color, position, state, img);
    }

}

class Caballo extends Pieza {
    constructor(id, color, position = null, state = "Alive", img = `img/knight_${color}.png`) {
        super(id, color, position, state, img);
    }

}

class Reina extends Pieza {
    constructor(id, color, position = null, state = "Alive", img = `img/queen_${color}.png`) {
        super(id, color, position, state, img);
    }

}

class Rey extends Pieza {
    constructor(id, color, position = null, state = "Alive", img = `img/king_${color}.png`) {
        super(id, color, position, state, img);
    }

}

class Alfil extends Pieza {
    constructor(id, color, position = null, state = "Alive", img = `img/bishop_${color}.png`) {
        super(id, color, position, state, img);
    }

}