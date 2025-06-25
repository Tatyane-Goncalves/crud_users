


import { Router, Request, Response } from "express";
import { tasks } from "../database/task"

export const listTaskRouter = Router()
listTaskRouter.get("/tasks", (req: Request, res: Response): any => {
  return res.status(200).json(tasks)
})
