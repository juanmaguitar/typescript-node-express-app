import { Request, Response } from "express";
import { todos } from "./store";
import Todo from "../../models/todo";

export function createTodo(req: Request, res: Response) {
  try {
    const { text } = req.body;

    if (!text || typeof text !== "string") {
      return res.status(400).json({ message: "Invalid todo text" });
    }

    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };

    todos.push(newTodo);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: "Failed to create todo" });
  }
}
