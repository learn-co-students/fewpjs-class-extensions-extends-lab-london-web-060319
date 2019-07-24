class Polygon {
    constructor(howManySidesArray) {
        this.howManySidesArray = howManySidesArray;
    }    

    get countSides() {
        return this.howManySidesArray.length;
    }

    get perimeter() {
        return this.howManySidesArray.reduce(function(total, item) {
            return total + item;
        }, 0);
    }
}

class Triangle extends Polygon {
    get isValid() {
        const thisArr = this.howManySidesArray;
        return (thisArr[0] + thisArr[1] > thisArr[2] && thisArr[1] + thisArr[2] > thisArr[0] && thisArr[2] + thisArr[0] > thisArr[1]) ? true : false;      
        }
}
    
class Square extends Polygon {
    get isValid() {
        return (this.perimeter / 4 === this.howManySidesArray[0]) ? true : false;
    }

    get area() {
        return this.howManySidesArray[0] ** 2;
    }
}