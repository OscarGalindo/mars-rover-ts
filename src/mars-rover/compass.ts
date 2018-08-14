import {Point} from "./point";

type OnTurn = () => Compass;

export class Compass {
  constructor(private point: Point, private onTurnLeft: OnTurn, private onTurnRight: OnTurn) {}

  static north(): Compass {
    return new Compass(new Point(1, 0), () => Compass.west(), () => Compass.east());
  }

  static south(): Compass {
    return new Compass(new Point(-1, 0), () => Compass.east(), () => Compass.west());
  }

  static west(): Compass {
    return new Compass(new Point(0, -1), () => Compass.south(), () => Compass.north());
  }

  static east(): Compass {
    return new Compass(new Point(0, 1), () => Compass.north(), () => Compass.south());
  }

  left(): Compass {
    return this.onTurnLeft();
  }

  right(): Compass {
    return this.onTurnRight();
  }

  forward(point: Point): Point {
    return point.add(this.point);
  }

  backward(point: Point): Point {
    return point.subtract(this.point);
  }

  toString() {
    return `Compass(${this.constructor.name},${this.point.toString()})`
  }
}
