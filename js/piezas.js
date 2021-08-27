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
    constructor(id, color, position = null, state = "Alive", img = `img/pawn_${color}`) {
        super(id, color, position, img, state, img);
    }

}

class Torre extends Pieza {
    constructor(id, color, position = null, state = "Alive", img = `img/rook_${color}`) {
        super(id, color, position, state, img);
    }

}

class Caballo extends Pieza {
    constructor(id, color, position = null, state = "Alive", img = `img/knight_${color}`) {
        super(id, color, position, state, img);
    }

}

class Reina extends Pieza {
    constructor(id, color, position = null, state = "Alive", img = `img/queen_${color}`) {
        super(id, color, position, state, img);
    }

}

class Rey extends Pieza {
    constructor(id, color, position = null, state = "Alive", img = `img/king_${color}`) {
        super(id, color, position, state, img);
    }

}

class Alfil extends Pieza {
    constructor(id, color, position = null, state = "Alive", img = `img/bishop_${color}`) {
        super(id, color, position = null, state, img);
    }

}