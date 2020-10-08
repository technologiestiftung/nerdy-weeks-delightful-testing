import { rest } from "msw";
import { fruits } from "./fruits";

export const handlers = [
  rest.get(`/api/foods`, (req, res, ctx) => {
    return res(
      ctx.status(201, "Mocked status"),
      ctx.json({ fruits, meta: "mocked" })
    );
  }),
  rest.post(`/api/foods`, (req, res, ctx) => {
    let food: string | undefined;
    if (typeof req.body === "string") {
      const body = JSON.parse(req.body);
      food = body.food;
    } else if (req.body !== undefined) {
      food = req.body.food;
    }
    if (food) {
      fruits.data.push(food);
      return res(
        ctx.status(201, "Mocked status"),
        ctx.json({ message: "food added" })
      );
    }
    return res(
      ctx.status(400, "Mocked status"),
      ctx.json({ error: "food is not defined" })
    );
  }),
];
