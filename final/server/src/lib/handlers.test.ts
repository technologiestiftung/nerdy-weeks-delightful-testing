/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jest/prefer-expect-assertions */
import { Request, Response } from "express";

import { getFruit, getFruitById, postFruit } from "./handlers";
import { fruits } from "./fruits";
function setupRequest(overrides?: { [key: string]: any }): Request {
  const req = { ...overrides } as Request;

  return req;
}

function setupResponse(overrides?: { [key: string]: any }): Response {
  const res = ({
    status: jest.fn(() => res),
    json: jest.fn(() => res),
    ...overrides,
  } as unknown) as Response;
  return res;
}
describe("request handlers tested in isolation", () => {
  beforeEach(() => {
    jest.resetModules();
  });
  it("should call the response objects json property with fruits", () => {
    const req = setupRequest();
    const res = setupResponse();
    getFruit(req, res);
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({ fruits });
  });

  it("should call the response objects json with a single fruit", () => {
    const req = setupRequest({ params: { id: "0" } });
    const res = setupResponse();
    getFruitById(req, res);
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({ fruit: fruits.data[0] });
  });
  it("should call the response objects json with a error and status 404", () => {
    const req = setupRequest({ params: { id: fruits.data.length.toString() } });
    const res = setupResponse();
    getFruitById(req, res);
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: "food not found" });
  });
  it("should call 400 due to missing food in body", () => {
    const req = setupRequest({ body: {} });
    const res = setupResponse();
    postFruit(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: "food not in body" });
  });
  it("should call 400 due to food not beeing a string", () => {
    const req = setupRequest({ body: { food: 1 } });
    const res = setupResponse();
    postFruit(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: "food is not a string" });
  });
  it("should call 201 and response with food added", () => {
    const req = setupRequest({ body: { food: "dog food" } });
    const res = setupResponse();
    postFruit(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ message: "food added" });
    expect(fruits.data[fruits.data.length - 1]).toBe("dog food");
  });
});
