import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser"; // Middleware for parsing JSON request bodies

import todoRoutes from "./routes/todos"; // Router for todo-related endpoints

const app = express();

app.use(json());

app.use("/todos", todoRoutes);

app.use((err: Error, _: Request, res: Response) => {
  res.status(500).json({ message: err.message });
});

app.listen(3003, () => {
  console.log("Server is running on port 3003");
});
