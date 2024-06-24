import {addTask, deleteTask, getTasks, getTask, updateTask} from '../controller/taskController.js'
import {Router} from "express";

const router = Router();
router.post('/', addTask);
router.delete('/:id', deleteTask);
router.get('/', getTasks);
router.get('/:id', getTask);
router.patch('/:id', updateTask);



export default router;


