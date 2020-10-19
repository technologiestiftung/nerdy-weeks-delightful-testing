/* eslint-disable jest/no-hooks */
import request from "supertest";
import { app } from "./server";
describe("testing the whole api mounted with jest and supertest", () => {
  /**
   * In this setup we use supertest to maunt the express app
   * for each request
   * We do some assertions on the values they return
   * in some cases using inline snapshots is nice (with inmutable data) for other things it does not make sense.
   *
   * WE will use the afterEach hook to reset our modules after each call to have always the same data.
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
    expect.assertions(3);
    const response = await request(app).get("/api/foods");
    expect(response.body.fruits.data.length).toBeGreaterThan(0);
    expect(response.body.fruits.data).toStrictEqual(expect.any(Array));
    expect(response.body.fruits.description).toStrictEqual(expect.any(String));
  });
  it("should return a food by its id", async () => {
    expect.assertions(3);
    const response = await request(app).get("/api/foods");
    expect(response.body.fruits.data.length).toBeGreaterThan(0);
    const responseSingleFood = await request(app).get(`/api/foods/${1}`);
    expect(responseSingleFood.body.fruit).toBeDefined();
    expect(responseSingleFood.body.fruit).toStrictEqual(expect.any(String));
  });
  it("should allow to post food to the end of the list", async () => {
    expect.assertions(4);
    const food = "dog food";
    const resFood = await request(app).get("/api/foods");
    expect(resFood.body.fruits.data.length).toBeGreaterThan(0);
    const resPost = await request(app).post("/api/foods").send({ food });
    expect(resPost.body).toMatchInlineSnapshot(`
      Object {
        "message": "food added",
      }
    `);
    const resFoodAgain = await request(app).get("/api/foods");
    expect(resFoodAgain.body.fruits.data).toHaveLength(
      resFood.body.fruits.data.length + 1,
    );
    expect(
      resFoodAgain.body.fruits.data[resFoodAgain.body.fruits.data.length - 1],
    ).toBe(food);
  });
});
