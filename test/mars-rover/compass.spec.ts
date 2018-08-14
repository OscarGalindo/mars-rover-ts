import {Point} from "../../src/mars-rover/point";
import {Compass} from "./compass";

describe("given compass", () => {
  const northCompass = Compass.north();
  const westCompass = Compass.west();
  const southCompass = Compass.south();
  const eastCompass = Compass.east();

  const leftActionDataProvider = [
    {when: northCompass, then: westCompass},
    {when: westCompass, then: southCompass},
    {when: southCompass, then: eastCompass},
    {when: eastCompass, then: northCompass}
  ];

  leftActionDataProvider.forEach(({when, then}) => {
    test(`when facing ${when.constructor.name} and turn left, then should face ${then.constructor.name}`, (done: any) => {
      let actual = when.left().toString();
      let expected = then.toString();
      expect(actual).toEqual(expected);
      done();
    });
  });

  const rightActionDataProvider = [
    {when: northCompass, then: eastCompass},
    {when: eastCompass, then: southCompass},
    {when: southCompass, then: westCompass},
    {when: westCompass, then: northCompass}
  ];

  rightActionDataProvider.forEach(({when, then}) => {
    test(`when facing ${when.constructor.name} and turn right, then should face ${then.constructor.name}`, (done: any) => {
      let actual = when.right().toString();
      let expected = then.toString();
      expect(actual).toEqual(expected);
      done();
    });
  });

  describe("when facing north", () => {
    describe("and forward", () => {
      test("then should return new point", (done: any) => {
        const currentPoint = new Point(0, 1);
        const expectedPoint = new Point(1, 1);
        expect(northCompass.forward(currentPoint)).toEqual(expectedPoint);
        done();
      });
    });

    describe("and backward", () => {
      test("then should return new point", (done: any) => {
        const currentPoint = new Point(0, 0);
        const expectedPoint = new Point(-1, 0);
        expect(northCompass.backward(currentPoint)).toEqual(expectedPoint);
        done();
      });
    });
  });
});
