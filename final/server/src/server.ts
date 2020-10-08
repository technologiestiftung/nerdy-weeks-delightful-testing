import express from "express";
import cors from "cors";
import { getFruit, getFruitById, postFruit } from "./lib/handlers";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.json({ message: "it is alive" });
});
app.get("/api/foods", getFruit);
app.get("/api/foods/:id([0-9]+)", getFruitById);
app.post("/api/foods", postFruit);

export { app };
