class Polygon {
  constructor(sides) {
    this.sides = sides
    this.count = this.sides.length
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce(function(total, item) {
      return total + item;
    }, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    const thisArr = this.sides;
    return (thisArr[0] + thisArr[1] > thisArr[2] && thisArr[1] + thisArr[2] > thisArr[0] && thisArr[2] + thisArr[0] > thisArr[1]) ? true : false;
  }
}

class Square extends Polygon {
  get isValid() {
    return (this.perimeter / 4 === this.sides[0]) ? true : false;
  }

  get area() {
    return this.sides[0] ** 2;
  }
}
