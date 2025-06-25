import { Router, Request, Response } from "express"
import { updateTaskMiddleware } from "../middleware/updateTaskMiddleware"
import { tasks } from "../database/task"

export const updateTaskRouter = Router()

updateTaskRouter.put("/tasks/:id", updateTaskMiddleware, (req: Request, res: Response ) => {
  const { name, category, description, complexidade, status } = req.body
  const taskId = (req as any).taskId

  tasks[taskId] = {
    ...tasks[taskId],
    name: name || tasks[taskId].name,
    category: category || tasks[taskId].category,
    description: description || tasks[taskId].description,
    complexidade: complexidade || tasks[taskId].complexidade,
    status: status || tasks[taskId].status,
  }


  return res.status(200).json({ 
    message: "Task update successfully!",
    task: tasks[taskId]
  })

})