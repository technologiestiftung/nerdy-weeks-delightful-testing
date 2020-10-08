// import request from "supertest";
// import { app } from "./server";
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
  it.todo("should return life sign");
  it.todo("should return an Array of foods and a description");
  it.todo("should return a food by its id");
  it.todo("should allow to post food to the end of the list");
});
