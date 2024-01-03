import express from "express";
import {
  DeleteTodo,
  GetTodo,
  NewTodo,
  UpdateTodo,
  SingleTodo,
} from "../controllers/controllers.js";

// Rest object
const router = express.Router();

// Get todo list
router.get("/todo", GetTodo);

// Get Single todo
router.get("/todo/:id", SingleTodo);

// Add todo
router.post("/todo/new", NewTodo);

// Update todo
router.put("/todo/update/:id", UpdateTodo);

// Delete todo
router.delete("/todo/delete/:id", DeleteTodo);

export default router;
