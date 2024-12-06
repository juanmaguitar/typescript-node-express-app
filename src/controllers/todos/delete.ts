import { Request, Response } from "express";
import { todos, setTodos } from "./store";
import Todo from "../../models/todo";

export function deleteTodo(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const todoIndex = todos.findIndex((todo: Todo) => todo.id === id);

    if (todoIndex === -1) {
      return res.status(404).json({ message: "Todo not found" });
    }

    setTodos(todos.filter((todo: Todo) => todo.id !== id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Failed to delete todo" });
  }
}
