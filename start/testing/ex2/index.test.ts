import {
  add,
  subtract,
  select,
  randomString,
  randomValues,
  somethingShouldBeStatic,
} from "./index";

describe("basic test driven development", () => {
  test("add two numbers", () => {
    expect(add(2, 2)).toBe(4);
  });

  test("subtract two numbers", () => {
    expect(subtract(2, 2)).toBe(0);
  });

  test("select from generic array", () => {
    const arr = [1, 2, 3, 4];
    const otherArr = ["1", "2", "3", "4"];
    const andAnotherArr = [{ name: "Han" }, { name: "Chewie" }];

    expect(select(0, arr)).toBe(1);
    expect(select(0, otherArr)).toBe("1");
    expect(select(0, andAnotherArr)).toStrictEqual({ name: "Han" });
  });

  test("has length", () => {
    expect({ length: 10 }).toHaveLength(10);
  });

  test("get random string of length back", () => {
    expect(randomString(10)).toHaveLength(10);
    expect(randomString(100)).toHaveLength(100);
    expect(randomString(2)).toHaveLength(2);
    expect(randomString(10)).toEqual(expect.any(String));
  });

  test("get object with random values", () => {
    expect(randomValues()).toMatchObject({
      value: expect.any(Number),
      str: expect.any(String),
    });
    expect(randomValues().str.length).toBeLessThanOrEqual(100);
    expect(randomValues().str.length).toBeGreaterThan(0);
    expect(randomValues().value).toBeLessThanOrEqual(1000);
    expect(randomValues().value).toBeGreaterThanOrEqual(0);
  });

  test("static things that should not change", () => {
    expect(somethingShouldBeStatic()).toMatchInlineSnapshot(`
      Object {
        "str": "yiihhaa",
        "value": 1,
      }
    `);

    expect([1, 2, 3, 4]).toMatchInlineSnapshot(`
        Array [
          1,
          2,
          3,
          4,
        ]
      `);
  });
});
