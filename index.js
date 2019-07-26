// Your code here


class Polygon {
    constructor(array) {
        this.array = array
    }
    get countSides() {
        return this.array.length
    }

    get perimeter() {
        return this.array.reduce((a, b) => a + b, 0)
    }
}

class Triangle extends Polygon {

    get isValid() {
        const a = this.array[0]
        const b = this.array[1]
        const c = this.array[2]
        if (this.array.length === 3 && a + b > c && a + c > b && b + c > a) {
            return true
        } else { return false }
    }

}

class Square extends Polygon {
    get area() {
        return Math.pow(this.array[0], 2)
    }

    get isValid() {
        const a = this.array[0]
        const b = this.array[1]
        const c = this.array[2]
        const d = this.array[3]
        debugger

        if (this.array.length === 4 && this.array.every(element => {return element === this.array[0]})) {
            return true
        } else {return false}
    }
}
