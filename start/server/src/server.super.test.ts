// import request from "supertest";
// import { app } from "./server";

describe("supertest only tests", () => {
  /**
   * We also can use supertest only to test our api without jest.
   * The key difference is that our supertest requests already assert
   *
   * Means the expect is included
   *
   */
  it.todo("should return 200 and be JSON on /api/foods");
  it.todo("should return 200 and be JSON on /api/foods/1");
  it.todo("should return 404 and be JSON on /api/foods/100000");
  it.todo("should return 201 and be JSON on /api/foods/");
  it.todo("should return 400 and be JSON on /api/foods/ due to missing body");
  it.todo(
    "should return 400 and be JSON on /api/foods/ due to missing food in body",
  );
});
