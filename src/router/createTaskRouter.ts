import { Router, Request, Response } from "express"
import { tasks } from "../database/task"
import { randomUUID } from "crypto"
import { checkTaskMiddleware } from "../middleware/checkTaskMiddleware"

interface Task {
  id: string;
  name: string;
  category: string;
  description?: string;
  complexidade: "Fácil" | "Médio" | "Difícil";
  status: "Não iniciado" | "Em andamento" | "Concluído";
}

export const createTaskRouter = Router()
createTaskRouter.post("/tasks", checkTaskMiddleware, (req: Request, res: Response): any =>  {
  const { name, category, description, complexidade, status } = req.body


  const newTask: Task = {
    id: randomUUID(),
    name, 
    category, 
    description,
    complexidade,
    status,
  }

  tasks.push(newTask)

  return res.status(201).json({
    message: "Task created successfully!"
  })
})