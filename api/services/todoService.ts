// services/TodoService.ts

import Todo, { ITodo } from '../models/todo';

export class TodoService {
  static async createTodo(todo: ITodo): Promise<ITodo> {
    const newTodo = new Todo(todo);
    return newTodo.save();
  }

  static async getAllTodos(): Promise<ITodo[]> {
    return Todo.find();
  }
}
