import { Router } from 'express';
import { getAllTodos, addTodo } from '../controllers/todoController';

const router: Router = Router();

router.get('/todos', getAllTodos);
router.post('/todos', addTodo);

export default router;
