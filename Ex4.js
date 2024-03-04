class Shape {
  color = "red";
  filled = true;
  constructor(color, filled) {
    this.color = color;
    this.filled = filled;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }

  isFilled() {
    return this.filled;
  }

  setFilled(filled) {
    this.filled = filled;
  }

  toString() {
    return `Shape[color = ${this.color}, filled = ${this.filled}]`;
  }
}

class Circle extends Shape {
  radius = 1.0;
  constructor(radius = 1.0, color = "red", filled = true) {
    super(color, filled);
    this.radius = radius;
  }

  getRadius() {
    return this.radius;
  }

  setRadius(radius) {
    this.radius = radius;
  }

  getArea() {
    return 3.14 * this.radius * this.radius;
  }

  getPerimeter() {
    return 2 * 3.14 * this.radius;
  }

  toString() {
    return `Circle[${super.toString()}, radius = ${this.radius}]`;
  }
}

class Rectangle extends Shape {
  width = 1.0;
  length = 1.0;
  constructor(width = 1.0, length = 1.0, color = "red", filled = true) {
    super(color, filled);
    this.width = width;
    this.length = length;
  }

  getWidth() {
    return this.width;
  }

  setWidth(width) {
    this.width = width;
  }

  getLength() {
    return this.length;
  }

  setLength(length) {
    this.length = length;
  }

  getArea() {
    return this.width * this.length;
  }

  getPerimeter() {
    return 2 * this.length + 2 * this.width;
  }

  toString() {
    return `Rectangle[${super.toString()}, width = ${this.width}, length = ${
      this.length
    }]`;
  }
}

class Square extends Rectangle {
  side = 1.0;
  constructor(side = 1.0, width, length, color = "red", filled = true) {
    super(width, length, color, filled);
    this.side = side;
  }

  getSide() {
    return this.side;
  }

  setSide(side) {
    this.side = side;
  }

  setWidth() {
    this.width = this.side;
  }

  setLength() {
    this.length = this.side;
  }

  toString() {
    return `Square[${super.toString()}, width = ${this.width}, length = ${
      this.length
    }]`;
  }
}

const main = () => {
  const shape1 = new Shape("Green", true);
  const circle1 = new Circle(5.0, shape1.color, shape1.filled);
  const rectangle1 = new Rectangle(25, 50, "Red", true);
  const square1 = new Square(15, 15, 15, "Blue", true);

  console.log(square1.toString());
};

main();
