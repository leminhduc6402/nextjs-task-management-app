import { Router } from "express";
import {
  createTask,
  getTasks,
  updateTaskStatus,
} from "../controllers/taskController";

const router = Router();
router.get("/", getTasks);
router.post("/create", createTask);
router.patch("/:taskId/status", updateTaskStatus);

export default router;
