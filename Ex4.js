class Shape {
  color = "";
  filled = false;
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

class Circle {
  shape = null;
  radius = 1.0;
  constructor(radius = 1.0, shape) {
    this.radius = radius;
    this.shape = shape;
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
    return `Circle[${this.shape.toString()}, radius = ${this.radius}]`;
  }
}

class Rectangle {
  shape = null;
  width = 1.0;
  length = 1.0;
  constructor(shape, width = 1.0, length = 1.0) {
    this.shape = shape;
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
    return `Rectangle[${this.shape.toString()}, width = ${
      this.width
    }, length = ${this.length}]`;
  }
}

class Square {
  rectangle = null;
  side = 1.0;
  width = this.side;
  length = this.side;
  constructor(side = 1.0, rectangle) {
    this.rectangle = rectangle;
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
    return `Square[${this.rectangle.toString()}, width = ${
      this.width
    }, length = ${this.length}]`;
  }
}

const main = () => {
  const shape1 = new Shape("Green", true);
  const circle1 = new Circle(5.0, shape1);
  const rectangle1 = new Rectangle(shape1, 25, 50);
  const square1 = new Square(15, rectangle1);

  console.log(square1.toString());
};

main();
