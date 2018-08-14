import {Point} from "../src/point";

describe("given a point", () => {
  const point = new Point(1, 1);
  const anotherPoint = new Point(2, 2);

  describe("when add point", () => {
    it("should return increased point", (done: any) => {
      const result = point.add(anotherPoint);

      const expectedPoint = new Point(3, 3);
      expect(result).toEqual(expectedPoint);
      done();
    });
  });

  describe("when substract point", () => {
    it("should return decreased point", (done: any) => {
      const result = point.subtract(anotherPoint);

      const expectedPoint = new Point(-1, -1);
      expect(result).toEqual(expectedPoint);
      done();
    });
  });
});
