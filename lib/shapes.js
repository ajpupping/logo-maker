class Circle {
    constructor(color) {
        this.color = color;
    }

    toSvg() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Square {
    constructor(color) {
        this.color = color;
    }

    toSvg() {
        return `<rect x="35" y="10" width="160" height="160" fill="${this.color}" />`;
    }
}

class Triangle {
    constructor(color) {
        this.color = color;
    }

    toSvg() {
        return `<polygon points="150,10 250,190 50,190" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Square, Triangle };