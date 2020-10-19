/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
import request from "supertest";
import { app } from "./server";
import { fruits } from "./lib/fruits";

describe("supertest only tests", () => {
  /**
   * We also can use supertest only to test our api without jest.
   * The key difference is that our supertest requests already assert
   * Means the expect is included
   *
   */
  it("should return 200 and be Content-Type application/json on /api/foods", async () => {
    await request(app)
      .get("/api/foods")
      .expect("Content-Type", /json/)
      .expect(200);
  });
  it("should return 200 and be Content-Type application/json on /api/foods/1", async () => {
    await request(app)
      .get("/api/foods/1")
      .expect("Content-Type", /json/)
      .expect(200);
  });
  it("should return 404 and be Content-Type application/json on /api/foods/100000", async () => {
    await request(app)
      .get(`/api/foods/${fruits.data.length}`)
      .expect("Content-Type", /json/)
      .expect(404);
  });
  it("should return 201 and be Content-Type application/json on /api/foods/", async () => {
    await request(app)
      .post(`/api/foods/`)
      .send({ food: "dog food" })
      .expect("Content-Type", /json/)
      .expect(201);
  });
  it("should return 400 and be Content-Type application/json on /api/foods/ due to missing body", async () => {
    await request(app)
      .post(`/api/foods/`)
      .expect("Content-Type", /json/)
      .expect(400);
  });
  it("should return 400 and be Content-Type application/json on /api/foods/ due to missing food in body", async () => {
    await request(app)
      .post(`/api/foods/`)
      .send({ foot: "paw" })
      .expect("Content-Type", /json/)
      .expect(400);
  });
});
