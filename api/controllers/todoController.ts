// controllers/todoController.ts

import { Request, Response } from 'express';
import { TodoService } from '../services/todoService';
import { ITodo } from '../models/todo';

export const createTodo = async (req: Request, res: Response) => {
  try {
    const todo: ITodo = req.body;
    const newTodo = await TodoService.createTodo(todo);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const todos = await TodoService.getAllTodos();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).send(error);
  }
};


