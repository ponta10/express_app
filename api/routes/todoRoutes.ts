import express, { Request, Response } from 'express';
import * as todoController from '../controllers/todoController';

const router = express.Router();

router.post('/todos', todoController.createTodo);
router.get('/todos', todoController.getAllTodos);

// Add other routes for other CRUD operations...

export default router;
