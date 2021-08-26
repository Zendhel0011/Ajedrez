class Pieza {
    constructor(id, color, position = null, state = "Alive") {
        this.id = id;
        this.color = color;
        this.position = position;
        this.state = state;
    }

}

class Peon extends Pieza {
    constructor(id, color, position = null, state = "Alive") {
        super(id, color, position = null, state = "Alive");
    }

}

class Torre extends Pieza {
    constructor(id, color, position = null, state = "Alive") {
        super(id, color, position = null, state = "Alive");
    }

}

class Caballo extends Pieza {
    constructor(id, color, position = null, state = "Alive") {
        super(id, color, position = null, state = "Alive");
    }

}

class Reina extends Pieza {
    constructor(id, color, position = null, state = "Alive") {
        super(id, color, position = null, state = "Alive");
    }

}

class Rey extends Pieza {
    constructor(id, color, position = null, state = "Alive") {
        super(id, color, position = null, state = "Alive");
    }

}

class Alfil extends Pieza {
    constructor(id, color, position = null, state = "Alive") {
        super(id, color, position = null, state = "Alive");
    }

}