/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
import request from "supertest";
import { app } from "./server";
describe("testing the whole api mounted with jest and supertest", () => {
  /**
   * In this setup we use supertest to maunt the express app
   * for each request
   * We do some assertions on the values they return
   * in some cases using inline snapshots is nice (in mutable data) for other things it does not make sense.
   *
   * with the afterEach hook we reset our modules after each call to have always the same data.
   *
   * The eslnit rule jest/prefer-expect-assertions could be disabled but is also a good reference to learn about jest
   */
  afterEach(() => {
    jest.resetModules();
  });
  it("should return life sign", async () => {
    expect.assertions(1);
    const response = await request(app).get("/api");
    expect(response.body).toMatchInlineSnapshot(`
      Object {
        "message": "it is alive",
      }
    `);
  });
  it("should return an Array of foods and a description", async () => {
    expect.assertions(2);
    const response = await request(app).get("/api/foods");
    expect(response.body.fruits.data).toStrictEqual(expect.any(Array)); // toBe does not work here
    expect(response.body.fruits.description).toStrictEqual(expect.any(String)); // toBe does not work here
  });
  it("should return a food by its id", async () => {
    expect.assertions(3);
    const resFoods = await request(app).get("/api/foods");
    expect(resFoods.body.fruits.data.length).toBeGreaterThan(0);
    const resSingleFood = await request(app).get(`/api/foods/${1}`);
    expect(resSingleFood.body.fruit).toBeDefined();
    expect(resSingleFood.body.fruit).toStrictEqual(expect.any(String));
  });
  it("should allow to post food to the end of the list", async () => {
    expect.assertions(4);
    const food = "dog food";
    const resFoods = await request(app).get("/api/foods");
    expect(resFoods.body.fruits.data.length).toBeGreaterThan(0);
    const resPost = await request(app).post(`/api/foods`).send({ food });
    expect(resPost.body).toMatchInlineSnapshot(`
      Object {
        "message": "food added",
      }
    `);
    const resFoodsAgain = await request(app).get("/api/foods");
    expect(resFoodsAgain.body.fruits.data).toHaveLength(
      resFoods.body.fruits.data.length + 1,
    );
    expect(
      resFoodsAgain.body.fruits.data[resFoodsAgain.body.fruits.data.length - 1],
    ).toBe(food);
  });
});
