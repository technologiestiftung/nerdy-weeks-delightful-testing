import { fruits } from "./fruits";
import { Request, Response } from "express";

export function getFruitById(req: Request, res: Response): void {
  const id = parseInt(req.params.id);
  const result = fruits.data[id];
  if (result) {
    res.json({ fruit: result });
  } else {
    res.status(404).json({ error: "food not found" });
  }
}

export function getFruit(req: Request, res: Response): void {
  res.json({ fruits });
}
export function postFruit(req: Request, res: Response): void {
  const { food } = req.body;
  if (!food) {
    res.status(400).json({ error: "food not in body" });
  }
  if (typeof food !== "string") {
    res.status(400).json({ error: "food is not a string" });
  }
  fruits.data.push(food);
  res.status(201).json({ message: "food added" });
}
