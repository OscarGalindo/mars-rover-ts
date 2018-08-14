export class Point {
  constructor(private x: number = 0, private y: number = 0) {}

  add(pointToAdd: Point): Point {
    return new Point(this.x + pointToAdd.x, this.y + pointToAdd.y);
  }

  subtract(pointToSubtract: Point): Point {
    return new Point(this.x - pointToSubtract.x, this.y - pointToSubtract.y);
  }

  toString() {
    return `Point(${this.x},${this.y})`;
  }
}
