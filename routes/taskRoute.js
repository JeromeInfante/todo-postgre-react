import {addTask} from '../controller/taskController.js'
import {Router} from "express";

const router = Router();
router.post('/', addTask);

export default router;


