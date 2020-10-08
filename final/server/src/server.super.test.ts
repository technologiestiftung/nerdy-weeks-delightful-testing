/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
import request from "supertest";
import { app } from "./server";

describe("supertest only tests", () => {
  it("should return 200 and be JSON on /api/foods", async () => {
    // expect.assertions(1);
    await request(app)
      .get("/api/foods")
      .expect("Content-Type", /json/)
      .expect(200);
  });
  it("should return 200 and be JSON on /api/foods/1", async () => {
    await request(app)
      .get("/api/foods/1")
      .expect("Content-Type", /json/)
      .expect(200);
  });
  it("should return 404 and be JSON on /api/foods/100000", async () => {
    await request(app)
      .get("/api/foods/100000")
      .expect("Content-Type", /json/)
      .expect(404);
  });
  it("should return 201 and be JSON on /api/foods/", async () => {
    await request(app)
      .post("/api/foods")
      .send({ food: "dog food" })
      .expect("Content-Type", /json/)
      .expect(201);
  });
  it("should return 400 and be JSON on /api/foods/ due to missing body", async () => {
    await request(app)
      .post("/api/foods")
      .expect("Content-Type", /json/)
      .expect(400);
  });
  it("should return 400 and be JSON on /api/foods/ due to missing food in body", async () => {
    await request(app)
      .post("/api/foods")
      .send({ foo: "dog food" })
      .expect("Content-Type", /json/)
      .expect(400);
  });
});
