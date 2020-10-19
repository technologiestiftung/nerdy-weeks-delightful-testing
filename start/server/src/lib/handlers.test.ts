/* eslint-disable jest/no-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jest/prefer-expect-assertions */
import { Request, Response } from "express";
import { getFruit, getFruitById, postFruit } from "./handlers";
import { fruits } from "./fruits";

function setupRequest(overrides?: { [key: string]: any }): Request {
  const result = { ...overrides } as Request;
  return result;
}
function setupResponse(overrides?: { [key: string]: any }): Response {
  const result = ({
    status: jest.fn(() => result),
    json: jest.fn(() => result),
    ...overrides,
  } as unknown) as Response;
  return result;
}

describe("request handlers tested in isolation", () => {
  beforeEach(() => {
    jest.resetModules();
  });
  it("getFruit should call the response objects json property with fruits", () => {
    const req = setupRequest();
    const res = setupResponse();
    getFruit(req, res);
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({ fruits });
  });
  it("getFruitById should call the response objects json with a single fruit", () => {
    const req = setupRequest({ params: { id: "0" } });
    const res = setupResponse();
    getFruitById(req, res);
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({ fruit: fruits.data[0] });
  });
  it("getFruitById should call the response objects json with a error and status 404", () => {
    const req = setupRequest({ params: { id: fruits.data.length.toString() } });
    const res = setupResponse();
    getFruitById(req, res);
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenLastCalledWith({ error: "food not found" });
  });
  it("postFruit should call 400 due to missing food in body", () => {
    const req = setupRequest({ body: {} });
    const res = setupResponse();
    postFruit(req, res);
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenLastCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: "food not in body" });
  });
  it("postFruit should call 400 due to food not beeing a string", () => {
    const req = setupRequest({ body: { food: true } });
    const res = setupResponse();
    postFruit(req, res);
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenLastCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: "food is not a string" });
  });
  it("postFruit should call 201 and response with food added", () => {
    const req = setupRequest({ body: { food: "dog food" } });
    const res = setupResponse();
    postFruit(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenLastCalledWith({ message: "food added" });
    expect(fruits.data[fruits.data.length - 1]).toBe("dog food");
  });
});
