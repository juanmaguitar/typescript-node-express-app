import { Request, Response } from "express";
import { todos } from "./store";

export function getTodos(_: Request, res: Response) {
  try {
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch todos" });
  }
}
