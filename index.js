// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
    this.count = sides.length;
  }

  // Use the get keyword to make a getter method countSides that counts the number of sides (each index in the array).
  get countSides() {
    return this.count;
  }

  // Use the get keyword to make a getter method perimeter that calculates the sum of each side (each index in the array) of the polygon
  get perimeter() {
    return this.sides.reduce((a, b) => a + b);
  }
}

class Triangle extends Polygon {
  get isValid() {
    return (
      this.sides[1] + this.sides[2] > this.sides[0] &&
      this.sides[0] + this.sides[2] > this.sides[1] &&
      this.sides[0] + this.sides[1] > this.sides[2]
    );
  }
}

// Define a Square class that inherits from Polygon.
class Square extends Polygon {
  get isValid() {
    return this.sides.every(side => side === this.sides[0]);
  }

  get area() {
    return this.sides[0] * this.sides[0];
  }
}
