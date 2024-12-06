import Todo from "../../models/todo";

export let todos: Todo[] = [];
export const setTodos = (newTodos: Todo[]) => {
  todos = newTodos;
};
