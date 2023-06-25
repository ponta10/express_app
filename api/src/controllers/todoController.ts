import { Request, Response } from 'express';
// ITodoをインポート
import Todo, { ITodo } from '../models/todo';

export const getAllTodos = async (req: Request, res: Response): Promise<void> => {
    try {
        const todos = await Todo.find();
        res.status(200).json({ todos });
    } catch (error) {
        throw error;
    }
};

export const addTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<ITodo, "name" | "done">;

        const todo: ITodo = new Todo({
            name: body.name,
            done: body.done
        });

        const newTodo: ITodo = await todo.save();
        const allTodos: ITodo[] = await Todo.find();

        res
            .status(201)
            .json({ message: "Todo added", todo: newTodo, todos: allTodos });
    } catch (error) {
        throw error;
    }
};
