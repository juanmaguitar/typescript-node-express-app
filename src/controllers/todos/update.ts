import { Request, Response } from "express";
import { todos } from "./store";
import Todo from "../../models/todo";

export function updateTodo(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { text, completed } = req.body;

    const todoIndex = todos.findIndex((todo: Todo) => todo.id === id);

    if (todoIndex === -1) {
      return res.status(404).json({ message: "Todo not found" });
    }

    if (text !== undefined && typeof text !== "string") {
      return res.status(400).json({ message: "Invalid todo text" });
    }

    if (completed !== undefined && typeof completed !== "boolean") {
      return res.status(400).json({ message: "Invalid completed status" });
    }

    todos[todoIndex] = {
      ...todos[todoIndex],
      ...(text !== undefined && { text }),
      ...(completed !== undefined && { completed }),
    };

    res.json(todos[todoIndex]);
  } catch (error) {
    res.status(500).json({ message: "Failed to update todo" });
  }
}
